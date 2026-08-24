/**
 * AICC KANBAN GTD ENGINE (LÍMITE ESTRICTO WIP = 2)
 */

let kanbanTaskList = [];
let defaultKanbanTaskList = [];
let kanbanStorageKey = "ah_client_kanban";

function initKanbanEngine(config) {
    if (!config) config = {};
    kanbanStorageKey = config.storageKey || "ah_client_kanban";
    defaultKanbanTaskList = JSON.parse(JSON.stringify(config.defaultTasks || [
        { id: "k1", col: "todo", text: "Definir 3 prioridades del día", tag: "Foco" },
        { id: "k2", col: "doing", text: "1. Ejecutar tarea principal de 25 min", tag: "En Foco" },
        { id: "k3", col: "done", text: "Vaciado mental matutino", tag: "Victoria" }
    ]));

    const saved = localStorage.getItem(`${kanbanStorageKey}_tasks_v2`);
    if (saved) {
        try { kanbanTaskList = JSON.parse(saved); } catch(e) { kanbanTaskList = JSON.parse(JSON.stringify(defaultKanbanTaskList)); }
    } else {
        kanbanTaskList = JSON.parse(JSON.stringify(defaultKanbanTaskList));
    }
    renderKanbanColumns();
}

function saveKanbanTasks() {
    localStorage.setItem(`${kanbanStorageKey}_tasks_v2`, JSON.stringify(kanbanTaskList));
    renderKanbanColumns();
}

function renderKanbanColumns() {
    const todoContainer = document.getElementById("kanban-container-todo");
    const doingContainer = document.getElementById("kanban-container-doing");
    const doneContainer = document.getElementById("kanban-container-done");
    if (!todoContainer || !doingContainer || !doneContainer) return;

    const todoTasks = kanbanTaskList.filter(t => t.col === "todo");
    const doingTasks = kanbanTaskList.filter(t => t.col === "doing");
    const doneTasks = kanbanTaskList.filter(t => t.col === "done");

    const countTodoEl = document.getElementById("count-todo");
    const countDoingEl = document.getElementById("count-doing");
    const countDoneEl = document.getElementById("count-done");

    if (countTodoEl) countTodoEl.innerText = todoTasks.length;
    if (countDoingEl) countDoingEl.innerText = `${doingTasks.length} / 2`;
    if (countDoneEl) countDoneEl.innerText = doneTasks.length;

    todoContainer.innerHTML = todoTasks.map(t => renderKanbanTaskCard(t)).join("");
    doingContainer.innerHTML = doingTasks.map(t => renderKanbanTaskCard(t)).join("");
    doneContainer.innerHTML = doneTasks.map(t => renderKanbanTaskCard(t)).join("");
}

function renderKanbanTaskCard(task) {
    const isTodo = task.col === "todo";
    const isDoing = task.col === "doing";
    const isDone = task.col === "done";
    const borderStyle = isDoing ? 'border-left: 3px solid #ffffff;' : (isDone ? 'border-left: 3px solid #10b981;' : '');

    return `
        <div class="kanban-card-item" style="${borderStyle}">
            <div class="kanban-card-text">${task.text}</div>
            <div class="kanban-card-footer">
                <span class="wip-limit-pill" style="background:#222; border-color:#333; color:#aaa;">${task.tag || 'Tarea'}</span>
                <div class="kanban-card-actions">
                    ${!isTodo ? `<button class="btn-card-action" onclick="moveKanbanTaskItem('${task.id}', '${isDone ? 'doing' : 'todo'}')" title="Mover atrás">⬅️</button>` : ''}
                    ${!isDone ? `<button class="btn-card-action" onclick="moveKanbanTaskItem('${task.id}', '${isTodo ? 'doing' : 'done'}')" title="Mover adelante">➡️</button>` : ''}
                    <button class="btn-card-action" onclick="deleteKanbanTaskItem('${task.id}')" title="Eliminar">🗑️</button>
                </div>
            </div>
        </div>
    `;
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
            alert("⚠️ ¡Límite WIP Alcanzado! Solo puedes tener un máximo de 2 tareas activas en 'En Ejecución'. Termina o mueve una tarea antes de comenzar otra.");
            return;
        }
    }

    const newTask = {
        id: "k_" + Date.now(),
        col: column,
        text: text,
        tag: column === "doing" ? "En Foco" : (column === "done" ? "Victoria" : "Pendiente")
    };

    kanbanTaskList.push(newTask);
    input.value = "";
    saveKanbanTasks();
}

function moveKanbanTaskItem(taskId, targetCol) {
    if (targetCol === "doing") {
        const currentDoing = kanbanTaskList.filter(t => t.col === "doing" && t.id !== taskId).length;
        if (currentDoing >= 2) {
            alert("⚠️ ¡Límite WIP = 2 Alcanzado! Tienes 2 tareas activas en curso. Mueve o termina una antes de ingresar otra a 'En Ejecución'.");
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
    if (confirm("¿Restablecer el tablero Kanban al estado inicial sugerido?")) {
        kanbanTaskList = JSON.parse(JSON.stringify(defaultKanbanTaskList));
        saveKanbanTasks();
    }
}

// Auto-inicialización inteligente por cliente
document.addEventListener("DOMContentLoaded", () => {
    const config = window.CLIENT_CONFIG || {};
    const clientId = config.clientId || "client";

    let defaultTasks = [
        { id: "k1", col: "todo", text: "Definir 3 prioridades del día", tag: "Foco" },
        { id: "k2", col: "doing", text: "1. Ejecutar tarea principal de 25 min", tag: "En Foco" },
        { id: "k3", col: "done", text: "Vaciado mental matutino", tag: "Victoria" }
    ];

    if (window.ROCIO_KANBAN_DEFAULT) {
        defaultTasks = [];
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
        defaultTasks = window.CLIENT_KANBAN_DEFAULT;
    }

    initKanbanEngine({
        storageKey: `${clientId}_kanban`,
        defaultTasks: defaultTasks
    });
});
