/**
 * AICC KANBAN GTD ENGINE v4.0 (MICROAPP INTERACTIVA CON DRAG & DROP + FILTROS + WIP=2)
 * Sistema Operativo Antigravity • Administración Humana
 */

let kanbanTaskList = [];
let defaultKanbanTaskList = [];
let kanbanStorageKey = "ah_client_kanban";
let kanbanActiveFilter = "TODOS";
let draggedTaskId = null;

function initKanbanEngine(config) {
    if (!config) config = {};
    kanbanStorageKey = config.storageKey || "ah_client_kanban";
    
    // Normalizar tareas iniciales
    defaultKanbanTaskList = (config.defaultTasks || [
        { id: "k1", col: "todo", text: "Definir 3 prioridades del día", tag: "Foco" },
        { id: "k2", col: "doing", text: "1. Ejecutar tarea principal de 25 min", tag: "En Foco" },
        { id: "k3", col: "done", text: "Vaciado mental matutino", tag: "Victoria" }
    ]).map((t, idx) => ({
        id: t.id || "k_" + Math.random().toString(36).substr(2, 9),
        col: t.col === "in_progress" ? "doing" : (t.col || (idx < 2 ? "doing" : "todo")),
        text: t.text || t,
        tag: t.tag || "General"
    }));

    const saved = localStorage.getItem(`${kanbanStorageKey}_tasks_v2`) || localStorage.getItem(`${kanbanStorageKey}`);
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            kanbanTaskList = (Array.isArray(parsed) && parsed.length > 0)
                ? parsed.map(t => ({
                    id: t.id || "k_" + Math.random().toString(36).substr(2, 9),
                    col: t.col === "in_progress" ? "doing" : (t.col || "todo"),
                    text: t.text || "",
                    tag: t.tag || "General"
                }))
                : JSON.parse(JSON.stringify(defaultKanbanTaskList));
        } catch(e) {
            kanbanTaskList = JSON.parse(JSON.stringify(defaultKanbanTaskList));
        }
    } else {
        kanbanTaskList = JSON.parse(JSON.stringify(defaultKanbanTaskList));
    }

    renderKanbanFilters();
    renderKanbanColumns();
    setupKanbanDropZones();
}

function saveKanbanTasks() {
    localStorage.setItem(`${kanbanStorageKey}_tasks_v2`, JSON.stringify(kanbanTaskList));
    renderKanbanFilters();
    renderKanbanColumns();
}

function renderKanbanFilters() {
    const filterContainer = document.getElementById("kanban-filter-bar");
    if (!filterContainer) return;

    // Extraer tags únicos presentes
    const tags = new Set(["TODOS"]);
    kanbanTaskList.forEach(t => {
        if (t.tag && t.tag.trim()) tags.add(t.tag.trim().toUpperCase());
    });

    filterContainer.innerHTML = Array.from(tags).map(tag => {
        const isActive = kanbanActiveFilter === tag;
        const count = tag === "TODOS" 
            ? kanbanTaskList.length 
            : kanbanTaskList.filter(t => (t.tag || "").toUpperCase() === tag).length;
        
        return `
            <button class="kanban-filter-pill ${isActive ? 'active' : ''}" onclick="setKanbanFilter('${tag}')" style="
                background: ${isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.05)'};
                color: ${isActive ? '#000000' : '#a1a1aa'};
                border: 1px solid ${isActive ? '#ffffff' : '#333333'};
                padding: 4px 12px;
                border-radius: 20px;
                font-size: 0.75rem;
                font-weight: 700;
                cursor: pointer;
                display: inline-flex;
                align-items: center;
                gap: 6px;
                transition: all 0.2s ease;
            ">
                ${tag} <span style="background:${isActive ? '#000' : 'rgba(255,255,255,0.1)'}; color:${isActive ? '#fff' : '#888'}; padding:1px 6px; border-radius:10px; font-size:0.68rem;">${count}</span>
            </button>
        `;
    }).join("");
}

function setKanbanFilter(tag) {
    kanbanActiveFilter = tag;
    renderKanbanFilters();
    renderKanbanColumns();
}

function renderKanbanColumns() {
    const todoContainer = document.getElementById("kanban-container-todo");
    const doingContainer = document.getElementById("kanban-container-doing");
    const doneContainer = document.getElementById("kanban-container-done");
    if (!todoContainer || !doingContainer || !doneContainer) return;

    // Filtrar tareas según filtro activo
    const filteredList = kanbanActiveFilter === "TODOS"
        ? kanbanTaskList
        : kanbanTaskList.filter(t => (t.tag || "").toUpperCase() === kanbanActiveFilter);

    const todoTasks = filteredList.filter(t => t.col === "todo");
    const doingTasks = filteredList.filter(t => t.col === "doing");
    const doneTasks = filteredList.filter(t => t.col === "done");

    // Conteos totales absolutos para respetar la regla WIP=2 global
    const totalDoing = kanbanTaskList.filter(t => t.col === "doing").length;

    const countTodoEl = document.getElementById("count-todo");
    const countDoingEl = document.getElementById("count-doing");
    const countDoneEl = document.getElementById("count-done");

    if (countTodoEl) countTodoEl.innerText = todoTasks.length;
    if (countDoingEl) {
        countDoingEl.innerText = `${totalDoing} / 2`;
        countDoingEl.style.color = totalDoing >= 2 ? "#ef4444" : "#f59e0b";
        countDoingEl.style.borderColor = totalDoing >= 2 ? "#ef4444" : "#f59e0b";
    }
    if (countDoneEl) countDoneEl.innerText = doneTasks.length;

    todoContainer.innerHTML = todoTasks.length > 0 
        ? todoTasks.map(t => renderKanbanTaskCard(t)).join("")
        : '<div class="kanban-empty-hint" style="color:#555; font-size:0.78rem; text-align:center; padding:1.5rem 0.5rem; border:1px dashed #262626; border-radius:8px;">Arrastra o añade pendientes aquí</div>';

    doingContainer.innerHTML = doingTasks.length > 0
        ? doingTasks.map(t => renderKanbanTaskCard(t)).join("")
        : '<div class="kanban-empty-hint" style="color:#555; font-size:0.78rem; text-align:center; padding:1.5rem 0.5rem; border:1px dashed #262626; border-radius:8px;">Arrastra máximo 2 tareas para ejecutar hoy</div>';

    doneContainer.innerHTML = doneTasks.length > 0
        ? doneTasks.map(t => renderKanbanTaskCard(t)).join("")
        : '<div class="kanban-empty-hint" style="color:#555; font-size:0.78rem; text-align:center; padding:1.5rem 0.5rem; border:1px dashed #262626; border-radius:8px;">Tus victorias cerradas aparecerán aquí</div>';
}

function renderKanbanTaskCard(task) {
    const isTodo = task.col === "todo";
    const isDoing = task.col === "doing";
    const isDone = task.col === "done";
    
    let borderStyle = 'border-left: 3px solid #3b82f6;';
    let bgAccent = 'background: rgba(255, 255, 255, 0.03);';
    if (isDoing) {
        borderStyle = 'border-left: 3px solid #f59e0b;';
        bgAccent = 'background: rgba(245, 158, 11, 0.06);';
    } else if (isDone) {
        borderStyle = 'border-left: 3px solid #10b981;';
        bgAccent = 'background: rgba(16, 185, 129, 0.04);';
    }

    // Color del tag
    const tagUpper = (task.tag || "").toUpperCase();
    let tagBg = "rgba(255,255,255,0.06)";
    let tagColor = "#a1a1aa";
    let tagBorder = "#333333";
    if (tagUpper.includes("UST")) {
        tagBg = "rgba(37,99,235,0.15)"; tagColor = "#93c5fd"; tagBorder = "rgba(59,130,246,0.3)";
    } else if (tagUpper.includes("PUYA") || tagUpper.includes("MASAJE")) {
        tagBg = "rgba(13,148,136,0.15)"; tagColor = "#5eead4"; tagBorder = "rgba(13,148,136,0.3)";
    } else if (tagUpper.includes("CANTO") || tagUpper.includes("VOZ")) {
        tagBg = "rgba(124,58,237,0.15)"; tagColor = "#c4b5fd"; tagBorder = "rgba(124,58,237,0.3)";
    } else if (tagUpper.includes("TEA") || tagUpper.includes("STIMM")) {
        tagBg = "rgba(217,119,6,0.15)"; tagColor = "#fcd34d"; tagBorder = "rgba(217,119,6,0.3)";
    } else if (tagUpper.includes("HOGAR")) {
        tagBg = "rgba(5,150,105,0.15)"; tagColor = "#6ee7b7"; tagBorder = "rgba(5,150,105,0.3)";
    }

    return `
        <div class="kanban-card-item" 
             id="card-${task.id}"
             draggable="true" 
             ondragstart="handleKanbanDragStart(event, '${task.id}')"
             ondragend="handleKanbanDragEnd(event)"
             style="${borderStyle} ${bgAccent} cursor: grab; user-select: none;">
            <div class="kanban-card-text" style="${isDone ? 'text-decoration: line-through; color: #888;' : 'color: #fff;'} font-size: 0.86rem; line-height: 1.45; margin-bottom: 0.6rem;">
                ${task.text}
            </div>
            <div class="kanban-card-footer" style="display: flex; justify-content: space-between; align-items: center; gap: 6px;">
                <span class="wip-limit-pill" style="background:${tagBg}; border-color:${tagBorder}; color:${tagColor}; font-size: 0.68rem; font-weight: 700; padding: 2px 7px;">
                    ${task.tag || 'Tarea'}
                </span>
                <div class="kanban-card-actions" style="display: flex; gap: 4px;">
                    ${!isTodo ? `<button class="btn-card-action" onclick="moveKanbanTaskItem('${task.id}', '${isDone ? 'doing' : 'todo'}')" title="Mover atrás" style="background:rgba(255,255,255,0.08); border:none; color:#ccc; width:24px; height:24px; border-radius:4px; cursor:pointer;"><i class="fa-solid fa-chevron-left" style="font-size:0.7rem;"></i></button>` : ''}
                    ${!isDone ? `<button class="btn-card-action" onclick="moveKanbanTaskItem('${task.id}', '${isTodo ? 'doing' : 'done'}')" title="Mover adelante" style="background:rgba(255,255,255,0.08); border:none; color:#ccc; width:24px; height:24px; border-radius:4px; cursor:pointer;"><i class="fa-solid fa-chevron-right" style="font-size:0.7rem;"></i></button>` : ''}
                    <button class="btn-card-action" onclick="deleteKanbanTaskItem('${task.id}')" title="Eliminar" style="background:rgba(239,68,68,0.1); border:none; color:#f87171; width:24px; height:24px; border-radius:4px; cursor:pointer;"><i class="fa-solid fa-trash-can" style="font-size:0.7rem;"></i></button>
                </div>
            </div>
        </div>
    `;
}

// ==========================================
// DRAG AND DROP HANDLERS (HTML5 NATIVO)
// ==========================================
function handleKanbanDragStart(e, taskId) {
    draggedTaskId = taskId;
    e.dataTransfer.setData("text/plain", taskId);
    e.dataTransfer.effectAllowed = "move";
    const el = document.getElementById(`card-${taskId}`);
    if (el) {
        setTimeout(() => el.style.opacity = "0.35", 0);
    }
}

function handleKanbanDragEnd(e) {
    if (draggedTaskId) {
        const el = document.getElementById(`card-${draggedTaskId}`);
        if (el) el.style.opacity = "1";
    }
    draggedTaskId = null;
    document.querySelectorAll('.kanban-col').forEach(c => {
        c.style.borderColor = '';
        c.style.background = '';
    });
}

function setupKanbanDropZones() {
    const cols = [
        { id: "kanban-col-todo", col: "todo" },
        { id: "kanban-col-doing", col: "doing" },
        { id: "kanban-col-done", col: "done" }
    ];

    cols.forEach(({ id, col }) => {
        let el = document.getElementById(id);
        if (!el) {
            // Buscar por contenedor hijo
            const child = document.getElementById(`kanban-container-${col}`);
            if (child && child.closest('.kanban-col')) {
                el = child.closest('.kanban-col');
                el.id = id;
            }
        }
        if (el) {
            el.ondragover = (e) => {
                e.preventDefault();
                e.dataTransfer.dropEffect = "move";
                el.style.borderColor = col === "doing" ? "#f59e0b" : (col === "done" ? "#10b981" : "#3b82f6");
                el.style.background = col === "doing" ? "rgba(245,158,11,0.08)" : (col === "done" ? "rgba(16,185,129,0.08)" : "rgba(59,130,246,0.08)");
            };
            el.ondragleave = (e) => {
                el.style.borderColor = '';
                el.style.background = '';
            };
            el.ondrop = (e) => {
                e.preventDefault();
                el.style.borderColor = '';
                el.style.background = '';
                const taskId = e.dataTransfer.getData("text/plain") || draggedTaskId;
                if (taskId) {
                    moveKanbanTaskItem(taskId, col);
                }
            };
        }
    });
}

function addKanbanTask(column) {
    const inputId = `input-new-${column}`;
    const input = document.getElementById(inputId);
    if (!input) return;
    const text = input.value.trim();
    if (!text) return;

    if (column === "doing") {
        const currentDoing = kanbanTaskList.filter(t => t.col === "doing").length;
        if (currentDoing >= 2) {
            alert("⚠️ ¡Límite de Foco Alcanzado (WIP = 2)!\n\n• ¿Qué es WIP?: Work In Progress (Trabajo en Proceso / Tareas en Curso).\n• Regla Metodológica: Para no saturar tu corteza prefrontal, el sistema limita estrictamente a 2 las tareas abiertas simultáneamente.\n\nTermina una tarea activa o devuélvela a pendientes antes de abrir un nuevo frente.");
            return;
        }
    }

    // Auto-detectar tag por prefijo
    let tag = column === "doing" ? "En Foco" : (column === "done" ? "Victoria" : "Pendiente");
    const upperText = text.toUpperCase();
    if (upperText.startsWith("UST:") || upperText.includes("UST")) tag = "UST";
    else if (upperText.startsWith("PUYA:") || upperText.includes("PUYA") || upperText.includes("MASAJE")) tag = "Puya";
    else if (upperText.startsWith("CANTO:") || upperText.includes("CANTO") || upperText.includes("VOZ")) tag = "Canto";
    else if (upperText.includes("TEA") || upperText.includes("STIMMING")) tag = "TEA";
    else if (upperText.includes("HOGAR") || upperText.includes("NIEVE")) tag = "Hogar";

    const newTask = {
        id: "k_" + Date.now(),
        col: column,
        text: text,
        tag: tag
    };

    kanbanTaskList.push(newTask);
    input.value = "";
    saveKanbanTasks();
}

function moveKanbanTaskItem(taskId, targetCol) {
    if (targetCol === "doing") {
        const currentDoing = kanbanTaskList.filter(t => t.col === "doing" && t.id !== taskId).length;
        if (currentDoing >= 2) {
            alert("⚠️ ¡Límite de Foco Alcanzado (WIP = 2)!\n\n• ¿Qué es WIP?: Work In Progress (Trabajo en Proceso / Tareas en Curso).\n• Regla Metodológica: Tienes 2 frentes abiertos en tus manos. Termina o pausa uno antes de mover otra tarea a 'En Foco / En Ejecución'.");
            return;
        }
    }

    const task = kanbanTaskList.find(t => t.id === taskId);
    if (task) {
        task.col = targetCol;
        saveKanbanTasks();
    }
}

function deleteKanbanTaskItem(taskId) {
    kanbanTaskList = kanbanTaskList.filter(t => t.id !== taskId);
    saveKanbanTasks();
}

function resetKanbanDefault() {
    if (confirm("¿Restablecer el tablero Kanban al estado inicial sugerido de Rocío?")) {
        kanbanTaskList = JSON.parse(JSON.stringify(defaultKanbanTaskList));
        saveKanbanTasks();
    }
}

// Auto-inicialización inteligente por cliente
document.addEventListener("DOMContentLoaded", () => {
    const config = window.CLIENT_CONFIG || {};
    const clientId = config.clientId || "rocio";

    let defaultTasks = [];

    if (window.ROCIO_KANBAN_DEFAULT) {
        if (window.ROCIO_KANBAN_DEFAULT.todo) {
            window.ROCIO_KANBAN_DEFAULT.todo.forEach(t => defaultTasks.push({ id: t.id, col: "todo", text: t.text, tag: t.tag }));
        }
        if (window.ROCIO_KANBAN_DEFAULT.doing) {
            window.ROCIO_KANBAN_DEFAULT.doing.forEach(t => defaultTasks.push({ id: t.id, col: "doing", text: t.text, tag: t.tag }));
        }
        if (window.ROCIO_KANBAN_DEFAULT.done) {
            window.ROCIO_KANBAN_DEFAULT.done.forEach(t => defaultTasks.push({ id: t.id, col: "done", text: t.text, tag: t.tag }));
        }
    } else if (window.CLIENT_KANBAN_DEFAULT) {
        defaultTasks = window.CLIENT_KANBAN_DEFAULT.map((t, idx) => ({
            ...t,
            col: t.col === "in_progress" ? "doing" : (t.col || (idx < 2 ? "doing" : "todo"))
        }));
    }

    initKanbanEngine({
        storageKey: `${clientId}_kanban`,
        defaultTasks: defaultTasks.length > 0 ? defaultTasks : undefined
    });
});
