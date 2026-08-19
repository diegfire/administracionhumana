/**
 * schedule-app.js - Mapeador & Generador de Horarios por Cajitas 24 Horas
 * Metodología: Administración Humana | Diego González Yáñez
 */

const DAYS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

const HOURS = [
    "00:00", "01:00", "02:00", "03:00", "04:00", "05:00",
    "06:00", "07:00", "08:00", "09:00", "10:00", "11:00",
    "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",
    "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"
];

const DEFAULT_CATEGORIES = {
    foco: { id: "foco", label: "Trabajo / Foco", tag: "FOCO", color: "#3b82f6", defaultText: "Trabajo / Foco", isSystem: true },
    descanso: { id: "descanso", label: "Descanso / Salud", tag: "DESCANSO", color: "#10b981", defaultText: "Descanso / Salud", isSystem: true },
    ocio: { id: "ocio", label: "Ocio / Personal", tag: "OCIO", color: "#d946ef", defaultText: "Ocio / Personal", isSystem: true },
    admin: { id: "admin", label: "Operación / Trámites", tag: "ADMIN", color: "#eab308", defaultText: "Operación / Trámites", isSystem: true },
    sueno: { id: "sueno", label: "Sueño / Dormir", tag: "SUEÑO", color: "#64748b", defaultText: "Descanso Nocturno", isSystem: true },
    libre: { id: "libre", label: "Espacio Libre", tag: "LIBRE", color: "#333333", defaultText: "Libre", isSystem: true }
};

// ESTADO GLOBAL DE LA APLICACIÓN
const state = {
    personName: "María Pérez",
    activeBrush: "modal", // "modal" | categoryId | "libre"
    categories: JSON.parse(JSON.stringify(DEFAULT_CATEGORIES)),
    scheduleBlocks: {}, // Map: "dayIdx-timeStr" -> { title: "...", cat: "..." }
    isSelecting: false,
    selectedCellIds: [],
    startCell: null
};

// HELPERS DE COLOR
function hexToRgba(hex, alpha = 0.35) {
    if (!hex || typeof hex !== "string") return `rgba(50, 50, 50, ${alpha})`;
    let c = hex.replace('#', '');
    if (c.length === 3) c = c.split('').map(x => x + x).join('');
    const num = parseInt(c, 16);
    if (isNaN(num)) return `rgba(50, 50, 50, ${alpha})`;
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// INICIALIZACIÓN ROBUSTA
function initApp() {
    loadSavedSchedule();

    const urlParams = new URLSearchParams(window.location.search);
    const nameParam = urlParams.get("name");
    if (nameParam) {
        state.personName = decodeURIComponent(nameParam);
        const nameInput = document.getElementById("schedule-person-name");
        if (nameInput) nameInput.value = state.personName;
    }

    if (!state.scheduleBlocks || Object.keys(state.scheduleBlocks).length === 0) {
        loadDefaultTemplate();
    }

    renderAllUI();
    setupEventListeners();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
} else {
    initApp();
}

function renderAllUI() {
    renderBrushPalette();
    renderCategorySelectOptions();
    renderQuickChips();
    renderTableGrid();
    updateLiveMetrics();
}

// CARGA Y GUARDADO LOCAL
function loadSavedSchedule() {
    const saved = localStorage.getItem("aicc_cajitas_schedule_data_v4");
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            if (parsed.personName) {
                state.personName = parsed.personName;
                const nameInput = document.getElementById("schedule-person-name");
                if (nameInput) nameInput.value = state.personName;
            }
            if (parsed.categories && Object.keys(parsed.categories).length > 0) {
                state.categories = parsed.categories;
            }
            if (parsed.scheduleBlocks && Object.keys(parsed.scheduleBlocks).length > 0) {
                state.scheduleBlocks = parsed.scheduleBlocks;
            }
        } catch (e) {
            console.error("Error al cargar horario:", e);
        }
    }
}

function saveSchedule() {
    const nameInput = document.getElementById("schedule-person-name");
    if (nameInput) state.personName = nameInput.value.trim() || "Persona";

    const payload = {
        personName: state.personName,
        categories: state.categories,
        scheduleBlocks: state.scheduleBlocks,
        updatedAt: new Date().toISOString()
    };
    localStorage.setItem("aicc_cajitas_schedule_data_v4", JSON.stringify(payload));
}

// PLANTILLA PREDETERMINADA 24 HORAS
function loadDefaultTemplate() {
    state.scheduleBlocks = {};
    for (let d = 0; d < 7; d++) {
        for (let h = 0; h <= 6; h++) {
            state.scheduleBlocks[`${d}-${h.toString().padStart(2,'0')}:00`] = { cat: "sueno", title: "Sueño / Descanso" };
        }
        state.scheduleBlocks[`${d}-23:00`] = { cat: "sueno", title: "Sueño / Descanso" };
    }
    // Lunes a Viernes
    for (let d = 0; d < 5; d++) {
        state.scheduleBlocks[`${d}-07:00`] = { cat: "descanso", title: "Rutina Mañanera" };
        state.scheduleBlocks[`${d}-08:00`] = { cat: "admin", title: "Planificación & Traslado" };
        state.scheduleBlocks[`${d}-09:00`] = { cat: "foco", title: "Trabajo / Foco Principal" };
        state.scheduleBlocks[`${d}-10:00`] = { cat: "foco", title: "Trabajo / Foco Principal" };
        state.scheduleBlocks[`${d}-11:00`] = { cat: "admin", title: "Reuniones & Coordinación" };
        state.scheduleBlocks[`${d}-12:00`] = { cat: "admin", title: "Correos & Mensajes" };
        state.scheduleBlocks[`${d}-13:00`] = { cat: "descanso", title: "Almuerzo Consciente" };
        state.scheduleBlocks[`${d}-14:00`] = { cat: "descanso", title: "Pausa Activa" };
        state.scheduleBlocks[`${d}-15:00`] = { cat: "foco", title: "Resolución de Casos" };
        state.scheduleBlocks[`${d}-16:00`] = { cat: "foco", title: "Entregables de Valor" };
        state.scheduleBlocks[`${d}-17:00`] = { cat: "admin", title: "Cierre de Jornada" };
        state.scheduleBlocks[`${d}-18:00`] = { cat: "ocio", title: "Desconexión Laboral" };
        state.scheduleBlocks[`${d}-19:00`] = { cat: "descanso", title: "Gimnasio / Deporte" };
        state.scheduleBlocks[`${d}-20:00`] = { cat: "ocio", title: "Cena & Familia" };
        state.scheduleBlocks[`${d}-21:00`] = { cat: "ocio", title: "Ocio / Tiempo Libre" };
        state.scheduleBlocks[`${d}-22:00`] = { cat: "descanso", title: "Lectura / Preparar Sueño" };
    }
    // Fin de semana
    [5, 6].forEach(d => {
        state.scheduleBlocks[`${d}-07:00`] = { cat: "descanso", title: "Despertar Tranquilo" };
        state.scheduleBlocks[`${d}-08:00`] = { cat: "descanso", title: "Desayuno en Familia" };
        state.scheduleBlocks[`${d}-09:00`] = { cat: "ocio", title: "Ocio & Familia" };
        state.scheduleBlocks[`${d}-11:00`] = { cat: "ocio", title: "Paseo / Aire Libre" };
        state.scheduleBlocks[`${d}-13:00`] = { cat: "descanso", title: "Almuerzo" };
        state.scheduleBlocks[`${d}-15:00`] = { cat: "ocio", title: "Hobbies / Tiempo Libre" };
        state.scheduleBlocks[`${d}-18:00`] = { cat: d === 6 ? "admin" : "ocio", title: d === 6 ? "Planificación Semanal" : "Tiempo Libre" };
        state.scheduleBlocks[`${d}-21:00`] = { cat: "ocio", title: "Película / Descanso" };
        state.scheduleBlocks[`${d}-22:00`] = { cat: "descanso", title: "Rutina de Sueño" };
    });
}

// RENDERIZADO DE LA PALETA DE PINCELES
function renderBrushPalette() {
    const container = document.getElementById("brush-palette-container");
    if (!container) return;
    container.innerHTML = "";

    const label = document.createElement("span");
    label.style.cssText = "font-size: 0.75rem; font-weight: 800; color: var(--text-muted); text-transform: uppercase; margin-right: 4px;";
    label.innerText = "Modo:";
    container.appendChild(label);

    // Botón de Modo Escribir
    const writeBtn = document.createElement("button");
    writeBtn.className = `brush-chip ${state.activeBrush === 'modal' ? 'active' : ''}`;
    writeBtn.dataset.brush = "modal";
    writeBtn.innerHTML = `✏️ Escribir (Click / Arrastre)`;
    writeBtn.onclick = () => setBrush("modal");
    container.appendChild(writeBtn);

    // Chips de cada categoría
    Object.values(state.categories).forEach(cat => {
        if (cat.id === "libre") return;
        const chip = document.createElement("button");
        chip.className = `brush-chip ${state.activeBrush === cat.id ? 'active' : ''}`;
        chip.dataset.brush = cat.id;
        chip.innerHTML = `<span class="chip-dot" style="background: ${cat.color};"></span> ${cat.label}`;
        chip.onclick = () => setBrush(cat.id);
        container.appendChild(chip);
    });

    // Botón Borrar
    const clearBtn = document.createElement("button");
    clearBtn.className = `brush-chip ${state.activeBrush === 'libre' ? 'active' : ''}`;
    clearBtn.dataset.brush = "libre";
    clearBtn.innerHTML = `❌ Borrar`;
    clearBtn.onclick = () => setBrush("libre");
    container.appendChild(clearBtn);

    // Botón Gestor / Añadir Categoría
    const manageBtn = document.createElement("button");
    manageBtn.className = "brush-chip";
    manageBtn.style.cssText = "background: rgba(255, 255, 255, 0.05); border: 1px dashed #666; color: #fff;";
    manageBtn.innerHTML = `⚙️ + Categoría / Editar`;
    manageBtn.title = "Personalizar categorías existentes o crear nuevas";
    manageBtn.onclick = () => openCategoriesManagerModal();
    container.appendChild(manageBtn);
}

// RENDERIZADO DE SELECTS DE CATEGORÍA
function renderCategorySelectOptions() {
    const modalSelect = document.getElementById("modal-category-select");
    const rangeSelect = document.getElementById("range-category-select");

    const buildOptions = () => {
        return Object.values(state.categories).map(cat => {
            return `<option value="${cat.id}">${cat.label} (${cat.tag})</option>`;
        }).join("");
    };

    if (modalSelect) modalSelect.innerHTML = buildOptions();
    if (rangeSelect) rangeSelect.innerHTML = buildOptions();
}

// RENDERIZADO DE QUICK CHIPS EN MODAL
function renderQuickChips() {
    const container = document.getElementById("modal-quick-chips-container");
    if (!container) return;
    container.innerHTML = "";

    Object.values(state.categories).forEach(cat => {
        if (cat.id === "libre") return;
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "quick-tag-chip";
        btn.innerHTML = `<span style="display:inline-block; width:7px; height:7px; border-radius:50%; background:${cat.color}; margin-right:4px;"></span> ${cat.label.split('/')[0].trim()}`;
        btn.onclick = () => setQuickChip(cat.defaultText || cat.label, cat.id);
        container.appendChild(btn);
    });
}

// RENDERIZADO DE LA TABLA DE 24 HORAS X 7 DÍAS
function renderTableGrid() {
    const tbody = document.getElementById("schedule-board-tbody");
    if (!tbody) return;
    tbody.innerHTML = "";

    HOURS.forEach(timeStr => {
        const row = document.createElement("tr");

        const timeTd = document.createElement("td");
        timeTd.className = "td-time-label";
        timeTd.innerText = timeStr;
        row.appendChild(timeTd);

        for (let dayIdx = 0; dayIdx < 7; dayIdx++) {
            const cellId = `${dayIdx}-${timeStr}`;
            const td = document.createElement("td");
            const block = state.scheduleBlocks[cellId] || { cat: "libre", title: "Libre" };
            const cat = state.categories[block.cat] || state.categories.libre || { id: "libre", color: "#333", tag: "LIBRE", label: "Libre" };

            const box = document.createElement("div");
            box.className = "time-box";
            box.id = `box-${cellId}`;
            box.dataset.cellId = cellId;

            // Estilos de color dinámicos
            if (cat.id === "libre") {
                box.style.background = "#111111";
                box.style.borderColor = "#222222";
                box.style.color = "#444444";
            } else {
                box.style.background = hexToRgba(cat.color, 0.32);
                box.style.borderColor = cat.color;
                box.style.color = "#ffffff";
            }

            box.innerHTML = `
                <span class="box-title" style="color: ${cat.id === 'libre' ? '#444' : '#fff'};">${block.title || cat.defaultText || cat.label}</span>
                <span class="box-tag" style="color: ${cat.id === 'libre' ? '#333' : cat.color};">${cat.tag}</span>
            `;

            // Eventos de interacción
            box.addEventListener("mousedown", (e) => {
                e.preventDefault();
                state.isSelecting = true;
                state.startCell = cellId;
                state.selectedCellIds = [cellId];
                highlightSelectedCells();

                if (state.activeBrush !== "modal") {
                    paintSingleCell(cellId, state.activeBrush);
                }
            });

            box.addEventListener("mouseenter", () => {
                if (state.isSelecting) {
                    if (state.activeBrush !== "modal") {
                        paintSingleCell(cellId, state.activeBrush);
                    } else {
                        expandSelection(state.startCell, cellId);
                    }
                }
            });

            td.appendChild(box);
            row.appendChild(td);
        }

        tbody.appendChild(row);
    });

    document.addEventListener("mouseup", () => {
        if (state.isSelecting) {
            state.isSelecting = false;
            if (state.activeBrush === "modal" && state.selectedCellIds.length > 0) {
                openBoxEditModal(state.selectedCellIds);
            }
            clearSelectionHighlight();
        }
    });
}

// SELECCIÓN DE RANGO CON EL MOUSE
function expandSelection(startId, currentId) {
    if (!startId || !currentId) return;
    const [startDay, startTime] = startId.split("-");
    const [currDay, currTime] = currentId.split("-");

    const startH = parseInt(startTime.split(":")[0]);
    const currH = parseInt(currTime.split(":")[0]);
    const minH = Math.min(startH, currH);
    const maxH = Math.max(startH, currH);

    const minD = Math.min(parseInt(startDay), parseInt(currDay));
    const maxD = Math.max(parseInt(startDay), parseInt(currDay));

    state.selectedCellIds = [];
    for (let d = minD; d <= maxD; d++) {
        for (let h = minH; h <= maxH; h++) {
            const timeStr = `${h.toString().padStart(2, '0')}:00`;
            state.selectedCellIds.push(`${d}-${timeStr}`);
        }
    }
    highlightSelectedCells();
}

function highlightSelectedCells() {
    document.querySelectorAll(".time-box").forEach(box => {
        box.classList.toggle("selected-range", state.selectedCellIds.includes(box.dataset.cellId));
    });
}

function clearSelectionHighlight() {
    document.querySelectorAll(".time-box.selected-range").forEach(box => box.classList.remove("selected-range"));
}

// PINTAR CELDA CON BROCHA ACTIVA
function paintSingleCell(cellId, catKey) {
    if (catKey === "libre") {
        delete state.scheduleBlocks[cellId];
    } else {
        const catInfo = state.categories[catKey] || state.categories.foco;
        state.scheduleBlocks[cellId] = {
            cat: catKey,
            title: catInfo.defaultText || catInfo.label
        };
    }

    updateSingleBoxDOM(cellId);
    updateLiveMetrics();
    saveSchedule();
}

function updateSingleBoxDOM(cellId) {
    const box = document.getElementById(`box-${cellId}`);
    if (!box) return;
    const block = state.scheduleBlocks[cellId] || { cat: "libre", title: "Libre" };
    const cat = state.categories[block.cat] || state.categories.libre || { id: "libre", color: "#333", tag: "LIBRE", label: "Libre" };

    if (cat.id === "libre") {
        box.style.background = "#111111";
        box.style.borderColor = "#222222";
        box.style.color = "#444444";
    } else {
        box.style.background = hexToRgba(cat.color, 0.32);
        box.style.borderColor = cat.color;
        box.style.color = "#ffffff";
    }

    box.innerHTML = `
        <span class="box-title" style="color: ${cat.id === 'libre' ? '#444' : '#fff'};">${block.title || cat.defaultText || cat.label}</span>
        <span class="box-tag" style="color: ${cat.id === 'libre' ? '#333' : cat.color};">${cat.tag}</span>
    `;
}

// SELECCIÓN DE PINCEL
function setBrush(brushKey) {
    state.activeBrush = brushKey;
    document.querySelectorAll(".brush-chip").forEach(chip => {
        chip.classList.toggle("active", chip.dataset.brush === brushKey);
    });
}

// MODAL DE EDICIÓN DE CAJITA(S)
function openBoxEditModal(cellIds) {
    if (!cellIds || cellIds.length === 0) return;
    state.selectedCellIds = cellIds;

    const modal = document.getElementById("box-edit-modal");
    if (!modal) return;

    const firstId = cellIds[0];
    const lastId = cellIds[cellIds.length - 1];
    const [firstDay, firstTime] = firstId.split("-");
    const [lastDay, lastTime] = lastId.split("-");

    const titleHeader = (cellIds.length === 1)
        ? `${DAYS[parseInt(firstDay)]} · ${firstTime}`
        : `${cellIds.length} Horas seleccionadas (${DAYS[parseInt(firstDay)]} ${firstTime} a ${DAYS[parseInt(lastDay)]} ${lastTime})`;

    document.getElementById("modal-box-info").innerText = titleHeader;

    const existingBlock = state.scheduleBlocks[firstId] || { cat: Object.keys(state.categories)[0] || "foco", title: "" };
    document.getElementById("modal-activity-name").value = (existingBlock.title === "Libre") ? "" : (existingBlock.title || "");
    document.getElementById("modal-category-select").value = existingBlock.cat;

    modal.classList.add("active");
    setTimeout(() => {
        document.getElementById("modal-activity-name").focus();
    }, 50);
}

function closeBoxEditModal() {
    const modal = document.getElementById("box-edit-modal");
    if (modal) modal.classList.remove("active");
    clearSelectionHighlight();
}

function setQuickChip(title, cat) {
    document.getElementById("modal-activity-name").value = title;
    if (cat) document.getElementById("modal-category-select").value = cat;
}

function saveBoxModal() {
    const name = document.getElementById("modal-activity-name").value.trim();
    const cat = document.getElementById("modal-category-select").value;
    const catInfo = state.categories[cat] || state.categories.foco;

    state.selectedCellIds.forEach(cellId => {
        if (cat === "libre" && !name) {
            delete state.scheduleBlocks[cellId];
        } else {
            state.scheduleBlocks[cellId] = {
                cat: cat,
                title: name || catInfo.defaultText || catInfo.label
            };
        }
        updateSingleBoxDOM(cellId);
    });

    closeBoxEditModal();
    updateLiveMetrics();
    saveSchedule();
}

// MODAL DE GESTIÓN Y PERSONALIZACIÓN DE CATEGORÍAS & COLORES
function openCategoriesManagerModal() {
    const modal = document.getElementById("categories-manager-modal");
    if (!modal) return;
    renderCategoryManagerItems();
    modal.classList.add("active");
}

function closeCategoriesManagerModal() {
    const modal = document.getElementById("categories-manager-modal");
    if (modal) modal.classList.remove("active");
    renderAllUI();
    saveSchedule();
}

function renderCategoryManagerItems() {
    const container = document.getElementById("category-manager-items-container");
    if (!container) return;
    container.innerHTML = "";

    Object.values(state.categories).forEach(cat => {
        const row = document.createElement("div");
        row.className = "category-item-row";

        row.innerHTML = `
            <div class="color-picker-wrapper" title="Cambiar color">
                <input type="color" class="color-picker-input" value="${cat.color}" onchange="updateCategoryColor('${cat.id}', this.value)" />
            </div>
            <input type="text" class="category-name-input" value="${cat.label}" onchange="updateCategoryLabel('${cat.id}', this.value)" placeholder="Nombre de categoría" />
            <input type="text" class="category-tag-input" value="${cat.tag}" maxlength="8" onchange="updateCategoryTag('${cat.id}', this.value)" placeholder="TAG" />
            ${!cat.isSystem ? `<button class="btn-del-cat" title="Eliminar categoría" onclick="deleteCustomCategory('${cat.id}')">🗑️</button>` : `<span style="width:24px;"></span>`}
        `;

        container.appendChild(row);
    });
}

function updateCategoryColor(catId, newColor) {
    if (state.categories[catId]) {
        state.categories[catId].color = newColor;
        saveSchedule();
        renderAllUI();
    }
}

function updateCategoryLabel(catId, newLabel) {
    if (state.categories[catId] && newLabel.trim()) {
        state.categories[catId].label = newLabel.trim();
        saveSchedule();
        renderAllUI();
    }
}

function updateCategoryTag(catId, newTag) {
    if (state.categories[catId] && newTag.trim()) {
        state.categories[catId].tag = newTag.trim().toUpperCase();
        saveSchedule();
        renderAllUI();
    }
}

function addNewCategoryFromModal() {
    const nameInput = document.getElementById("new-cat-name");
    const tagInput = document.getElementById("new-cat-tag");
    const colorInput = document.getElementById("new-cat-color");

    const name = nameInput.value.trim();
    const tag = tagInput.value.trim().toUpperCase() || name.substring(0, 4).toUpperCase();
    const color = colorInput.value || "#06b6d4";

    if (!name) {
        alert("Por favor ingresa un nombre para la categoría.");
        return;
    }

    const id = "cat_" + Date.now();
    state.categories[id] = {
        id: id,
        label: name,
        tag: tag,
        color: color,
        defaultText: name,
        isSystem: false
    };

    nameInput.value = "";
    tagInput.value = "";
    saveSchedule();
    renderCategoryManagerItems();
    renderAllUI();
}

function deleteCustomCategory(catId) {
    if (!state.categories[catId]) return;
    if (confirm(`¿Eliminar la categoría "${state.categories[catId].label}"?`)) {
        delete state.categories[catId];
        // Reasignar bloques que tenían esta categoría a libre
        Object.keys(state.scheduleBlocks).forEach(k => {
            if (state.scheduleBlocks[k].cat === catId) {
                delete state.scheduleBlocks[k];
            }
        });
        saveSchedule();
        renderCategoryManagerItems();
        renderAllUI();
    }
}

function resetCategoriesToDefault() {
    if (confirm("¿Deseas restablecer todas las categorías y colores a sus valores predeterminados?")) {
        state.categories = JSON.parse(JSON.stringify(DEFAULT_CATEGORIES));
        saveSchedule();
        renderCategoryManagerItems();
        renderAllUI();
    }
}

// CÁLCULO DE MÉTRICAS DINÁMICAS (168 HORAS)
function updateLiveMetrics() {
    const container = document.getElementById("time-metrics-container");
    const trackContainer = document.getElementById("weekly-progress-track");
    if (!container) return;

    const totalWeeklyHours = 168;
    const counts = {};
    Object.keys(state.categories).forEach(cId => counts[cId] = 0);

    Object.values(state.scheduleBlocks).forEach(b => {
        if (counts[b.cat] !== undefined) {
            counts[b.cat] += 1;
        }
    });

    let assignedHours = 0;
    Object.keys(counts).forEach(cId => {
        if (cId !== "libre") assignedHours += counts[cId];
    });
    counts.libre = Math.max(0, totalWeeklyHours - assignedHours);

    // Renderizar tarjetas de métricas dinámicamente
    container.innerHTML = "";
    Object.values(state.categories).forEach(cat => {
        const hrs = counts[cat.id] || 0;
        const pct = ((hrs / totalWeeklyHours) * 100).toFixed(0);

        const card = document.createElement("div");
        card.className = "metric-box-card";
        card.style.borderLeft = `4px solid ${cat.color}`;

        let sub = `${pct}% del tiempo semanal`;
        if (cat.id === "sueno") sub = `${(hrs / 7).toFixed(1)}h promedio / noche`;
        if (cat.id === "libre") sub = `Espacio libre disponible`;

        card.innerHTML = `
            <span class="metric-label" style="color: ${cat.color};">${cat.label}</span>
            <span class="metric-hours">${hrs}h</span>
            <span class="metric-sub">${sub}</span>
        `;
        container.appendChild(card);
    });

    // Renderizar barra horizontal de progreso
    if (trackContainer) {
        trackContainer.innerHTML = "";
        Object.values(state.categories).forEach(cat => {
            const hrs = counts[cat.id] || 0;
            if (hrs > 0) {
                const seg = document.createElement("div");
                seg.className = "track-seg";
                seg.style.width = `${((hrs / totalWeeklyHours) * 100).toFixed(1)}%`;
                seg.style.background = cat.color;
                seg.title = `${cat.label}: ${hrs}h`;
                trackContainer.appendChild(seg);
            }
        });
    }

    const textAudit = document.getElementById("metric-audit-summary");
    if (textAudit) {
        const nameInput = document.getElementById("schedule-person-name");
        const pName = nameInput ? nameInput.value.trim() : state.personName;
        const sleepHours = counts.sueno || 0;
        textAudit.innerHTML = `Mapeo de <strong>${pName}</strong>: ${assignedHours}h asignadas, ${(sleepHours/7).toFixed(1)}h sueño/noche y ${counts.libre}h libres.`;
    }
}

// GENERAR Y DESCARGAR IMAGEN PNG
async function generateScheduleImage() {
    const nameInput = document.getElementById("schedule-person-name");
    const pName = nameInput ? nameInput.value.trim() : "Horario";
    const filename = `Horario_24H_${pName.replace(/\s+/g, '_')}.png`;

    const captureArea = document.getElementById("capture-schedule-area");
    if (!captureArea) return;

    const btn = document.getElementById("btn-download-image");
    if (btn) btn.innerText = "⏳ Generando Imagen...";

    try {
        if (window.html2canvas) {
            const canvas = await html2canvas(captureArea, {
                backgroundColor: "#0a0a0a",
                scale: 2,
                useCORS: true,
                logging: false
            });

            const imageURI = canvas.toDataURL("image/png");
            const link = document.createElement("a");
            link.download = filename;
            link.href = imageURI;
            link.click();
        } else {
            renderNativeCanvasDownload(filename);
        }
    } catch (err) {
        console.warn("Fallo html2canvas, usando fallback Canvas nativo:", err);
        renderNativeCanvasDownload(filename);
    } finally {
        if (btn) btn.innerHTML = `<span>🖼️</span> Descargar Imagen (PNG)`;
    }
}

// CANVAS NATIVO DE RESPALDO (OFFLINE)
function renderNativeCanvasDownload(filename) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const width = 1200;
    const cellWidth = 145;
    const timeColWidth = 80;
    const headerHeight = 90;
    const rowHeight = 22;
    const totalHeight = headerHeight + (24 * rowHeight) + 120;

    canvas.width = width;
    canvas.height = totalHeight;

    ctx.fillStyle = "#0a0a0a";
    ctx.fillRect(0, 0, width, totalHeight);

    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 22px sans-serif";
    ctx.fillText(`ADMINISTRACIÓN HUMANA · HORARIO SEMANAL 24H`, 40, 42);

    ctx.fillStyle = "#888888";
    ctx.font = "14px sans-serif";
    ctx.fillText(`Persona: ${state.personName} · Metodología AICC`, 40, 68);

    ctx.fillStyle = "#161616";
    ctx.fillRect(40, headerHeight, width - 80, 26);

    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 11px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("HORA", 40 + (timeColWidth / 2), headerHeight + 17);

    DAYS.forEach((day, idx) => {
        ctx.fillText(day.toUpperCase(), 40 + timeColWidth + (idx * cellWidth) + (cellWidth / 2), headerHeight + 17);
    });

    HOURS.forEach((timeStr, hIdx) => {
        const y = headerHeight + 26 + (hIdx * rowHeight);

        ctx.fillStyle = "#111111";
        ctx.fillRect(40, y, timeColWidth, rowHeight);
        ctx.fillStyle = "#888888";
        ctx.font = "bold 10px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(timeStr, 40 + (timeColWidth / 2), y + 15);

        for (let d = 0; d < 7; d++) {
            const cellId = `${d}-${timeStr}`;
            const block = state.scheduleBlocks[cellId];
            const catId = block ? block.cat : "libre";
            const cat = state.categories[catId] || state.categories.libre || { color: "#222222" };
            const title = block ? block.title : "";

            const cellX = 40 + timeColWidth + (d * cellWidth);

            if (catId === "libre") {
                ctx.fillStyle = "#0d0d0d";
            } else {
                ctx.fillStyle = cat.color;
            }

            ctx.fillRect(cellX + 1, y + 1, cellWidth - 2, rowHeight - 2);
            ctx.strokeStyle = "#222222";
            ctx.strokeRect(cellX + 1, y + 1, cellWidth - 2, rowHeight - 2);

            if (title && title !== "Libre") {
                ctx.fillStyle = "#ffffff";
                ctx.font = "9.5px sans-serif";
                ctx.textAlign = "left";
                ctx.fillText(title.substring(0, 18), cellX + 6, y + 14);
            }
        }
    });

    const imageURI = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = filename;
    link.href = imageURI;
    link.click();
}

// LLENADO RÁPIDO DE RANGO
function openRangeFillModal() {
    const modal = document.getElementById("range-fill-modal");
    if (modal) modal.classList.add("active");
}

function closeRangeFillModal() {
    const modal = document.getElementById("range-fill-modal");
    if (modal) modal.classList.remove("active");
}

function setRangePreset(type) {
    if (type === "sueno") {
        document.getElementById("range-start-hour").value = "00:00";
        document.getElementById("range-end-hour").value = "07:00";
        document.getElementById("range-category-select").value = "sueno";
        document.getElementById("range-title-input").value = "Sueño / Descanso";
        document.querySelectorAll(".day-check-input").forEach(cb => {
            cb.checked = true;
            cb.parentElement.classList.add("checked");
        });
    } else if (type === "trabajo") {
        document.getElementById("range-start-hour").value = "09:00";
        document.getElementById("range-end-hour").value = "18:00";
        document.getElementById("range-category-select").value = "foco";
        document.getElementById("range-title-input").value = "Jornada de Trabajo";
        document.querySelectorAll(".day-check-input").forEach((cb, idx) => {
            cb.checked = (idx < 5);
            cb.parentElement.classList.toggle("checked", idx < 5);
        });
    } else if (type === "almuerzo") {
        document.getElementById("range-start-hour").value = "13:00";
        document.getElementById("range-end-hour").value = "14:00";
        document.getElementById("range-category-select").value = "descanso";
        document.getElementById("range-title-input").value = "Almuerzo & Desconexión";
        document.querySelectorAll(".day-check-input").forEach((cb, idx) => {
            cb.checked = (idx < 5);
            cb.parentElement.classList.toggle("checked", idx < 5);
        });
    }
}

function applyRangeFill() {
    const startStr = document.getElementById("range-start-hour").value;
    const endStr = document.getElementById("range-end-hour").value;
    const startHour = parseInt(startStr.split(":")[0]);
    const endHour = parseInt(endStr.split(":")[0]);
    const cat = document.getElementById("range-category-select").value;
    const catInfo = state.categories[cat] || state.categories.foco;
    const title = document.getElementById("range-title-input").value.trim() || catInfo?.defaultText || catInfo?.label;

    const selectedDays = [];
    document.querySelectorAll(".day-check-input").forEach(cb => {
        if (cb.checked) selectedDays.push(parseInt(cb.value));
    });

    if (selectedDays.length === 0) {
        alert("Por favor selecciona al menos un día de la semana.");
        return;
    }

    if (startHour > endHour) {
        alert("La hora de inicio debe ser menor o igual a la hora de fin.");
        return;
    }

    selectedDays.forEach(dayIdx => {
        for (let h = startHour; h <= endHour; h++) {
            const timeStr = `${h.toString().padStart(2, '0')}:00`;
            const cellId = `${dayIdx}-${timeStr}`;
            if (cat === "libre") {
                delete state.scheduleBlocks[cellId];
            } else {
                state.scheduleBlocks[cellId] = { cat: cat, title: title };
            }
            updateSingleBoxDOM(cellId);
        }
    });

    updateLiveMetrics();
    saveSchedule();
    closeRangeFillModal();
}

// PLANTILLAS
function loadPresetTemplate(type) {
    if (!confirm(`¿Deseas cargar la plantilla "${type.toUpperCase()}"? Se actualizará la semana.`)) return;

    state.scheduleBlocks = {};
    if (type === "oficina") {
        loadDefaultTemplate();
    } else if (type === "emprendedor") {
        loadDefaultTemplate();
        for (let d = 0; d < 5; d++) {
            state.scheduleBlocks[`${d}-09:00`] = { cat: "foco", title: "Contacto Comercial / Ventas" };
            state.scheduleBlocks[`${d}-10:00`] = { cat: "foco", title: "Contacto Comercial / Ventas" };
            state.scheduleBlocks[`${d}-15:00`] = { cat: "admin", title: "Operación & Proveedores" };
        }
    } else if (type === "estudiante") {
        loadDefaultTemplate();
        for (let d = 0; d < 5; d++) {
            state.scheduleBlocks[`${d}-09:00`] = { cat: "foco", title: "Estudio Guiado / Pomodoro" };
            state.scheduleBlocks[`${d}-11:00`] = { cat: "descanso", title: "Pausa Sensorial" };
            state.scheduleBlocks[`${d}-15:00`] = { cat: "foco", title: "Clases / Tesis" };
        }
    } else if (type === "vacio") {
        state.scheduleBlocks = {};
    }

    renderTableGrid();
    updateLiveMetrics();
    saveSchedule();
}

// LIMPIAR TODO EL CALENDARIO A BLANCO
function clearFullSchedule() {
    if (confirm("¿Estás seguro de que deseas limpiar todo el horario y dejar todas las 24 horas en blanco?")) {
        state.scheduleBlocks = {};
        renderTableGrid();
        updateLiveMetrics();
        saveSchedule();
    }
}

// EXPORTAR HTML AUTÓNOMO
function exportStandaloneHTML() {
    const nameInput = document.getElementById("schedule-person-name");
    const pName = nameInput ? nameInput.value.trim() : state.personName;

    let rowsHtml = "";
    HOURS.forEach(h => {
        rowsHtml += '<tr>';
        rowsHtml += '<td class="td-t">' + h + '</td>';
        for (let d = 0; d < 7; d++) {
            const cellId = d + "-" + h;
            const b = state.scheduleBlocks[cellId];
            const catId = b ? b.cat : "libre";
            const cat = state.categories[catId] || state.categories.libre || { color: "#333", tag: "LIBRE" };
            const title = b ? (b.title || "Libre") : "Libre";
            const bg = (catId === 'libre') ? '#111' : hexToRgba(cat.color, 0.35);
            const border = (catId === 'libre') ? '#222' : cat.color;
            const textColor = (catId === 'libre') ? '#444' : '#fff';
            rowsHtml += '<td><div class="box" style="background:' + bg + '; border:1px solid ' + border + '; color:' + textColor + ';"><span class="b-text">' + title + '</span><span class="b-tag" style="color:' + (catId === 'libre' ? '#333' : cat.color) + ';">' + cat.tag + '</span></div></td>';
        }
        rowsHtml += '</tr>';
    });

    const htmlContent = '<!DOCTYPE html>\n' +
'<html lang="es">\n' +
'<head>\n' +
'    <meta charset="UTF-8">\n' +
'    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
'    <title>Horario Semanal 24H - ' + pName + ' | Administración Humana</title>\n' +
'    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@600;700;800&display=swap" rel="stylesheet">\n' +
'    <style>\n' +
'        :root { --bg-dark: #000000; --panel-bg: #0d0d0d; --border: #222222; --border-bright: #333333; --font-h: "Space Grotesk", sans-serif; --font-b: "Plus Jakarta Sans", sans-serif; }\n' +
'        * { box-sizing: border-box; margin: 0; padding: 0; }\n' +
'        body { font-family: var(--font-b); background: var(--bg-dark); color: #fff; padding: 2rem; }\n' +
'        .container { max-width: 1400px; margin: 0 auto; }\n' +
'        header { display: flex; justify-content: space-between; align-items: flex-end; border-bottom: 1px solid var(--border); padding-bottom: 1.5rem; margin-bottom: 2rem; }\n' +
'        .title { font-family: var(--font-h); font-size: 1.6rem; font-weight: 800; }\n' +
'        .sub { color: #888; font-size: 0.85rem; }\n' +
'        .btn-p { background: #fff; color: #000; padding: 8px 18px; border-radius: 50px; font-weight: 800; font-size: 0.82rem; border: none; cursor: pointer; text-decoration: none; }\n' +
'        .grid-wrap { background: var(--panel-bg); border: 1px solid var(--border); border-radius: 14px; overflow-x: auto; margin-bottom: 2rem; }\n' +
'        table { width: 100%; border-collapse: collapse; min-width: 900px; font-size: 0.78rem; }\n' +
'        th { background: #141414; color: #fff; font-family: var(--font-h); font-weight: 800; padding: 10px 8px; text-align: center; border-bottom: 2px solid var(--border-bright); border-right: 1px solid var(--border); }\n' +
'        td { border-bottom: 1px solid #1a1a1a; border-right: 1px solid #1a1a1a; padding: 2px; height: 28px; }\n' +
'        .td-t { text-align: center; font-weight: 800; color: #888; background: #111; width: 75px; font-family: var(--font-h); }\n' +
'        .box { width: 100%; height: 100%; border-radius: 4px; padding: 2px 6px; display: flex; align-items: center; justify-content: space-between; }\n' +
'        .b-text { font-size: 0.72rem; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n' +
'        .b-tag { font-size: 0.58rem; text-transform: uppercase; font-weight: 800; opacity: 0.85; margin-left: 4px; }\n' +
'        @media print {\n' +
'            body { background: #fff !important; color: #000 !important; padding: 0 !important; }\n' +
'            header, .no-p { display: none !important; }\n' +
'            .grid-wrap { border: 2px solid #000 !important; }\n' +
'            th { background: #eee !important; color: #000 !important; }\n' +
'            td { border: 1px solid #999 !important; color: #000 !important; }\n' +
'            .box { border: none !important; background: transparent !important; }\n' +
'            .b-text { color: #000 !important; }\n' +
'        }\n' +
'    </style>\n' +
'</head>\n' +
'<body>\n' +
'    <div class="container">\n' +
'        <header>\n' +
'            <div>\n' +
'                <h1 class="title">ADMINISTRACIÓN HUMANA · HORARIO 24H</h1>\n' +
'                <p class="sub">Persona: <strong>' + pName + '</strong> · Protocolo P.A.C.</p>\n' +
'            </div>\n' +
'            <div class="no-p">\n' +
'                <button class="btn-p" onclick="window.print()">🖨️ Imprimir Hoja</button>\n' +
'            </div>\n' +
'        </header>\n' +
'        <div class="grid-wrap">\n' +
'            <table>\n' +
'                <thead>\n' +
'                    <tr>\n' +
'                        <th class="td-t">HORA</th>\n' +
'                        <th>LUNES</th><th>MARTES</th><th>MIÉRCOLES</th><th>JUEVES</th><th>VIERNES</th><th>SÁBADO</th><th>DOMINGO</th>\n' +
'                    </tr>\n' +
'                </thead>\n' +
'                <tbody>' + rowsHtml + '</tbody>\n' +
'            </table>\n' +
'        </div>\n' +
'        <footer style="text-align:center; color:#666; font-size:0.8rem; border-top:1px solid #222; padding-top:1rem;">\n' +
'            © 2026 Administración Humana · Generado para ' + pName + ' · Metodología AICC\n' +
'        </footer>\n' +
'    </div>\n' +
'</body>\n' +
'</html>';

    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Horario_24H_" + pName.replace(/\s+/g, '_') + ".html";
    link.click();
}

// CONFIGURACIÓN DE EVENTOS
function setupEventListeners() {
    const input = document.getElementById("modal-activity-name");
    if (input) {
        input.addEventListener("keydown", (e) => {
            if (e.key === "Enter") saveBoxModal();
            if (e.key === "Escape") closeBoxEditModal();
        });
    }

    const nameInput = document.getElementById("schedule-person-name");
    if (nameInput) {
        nameInput.addEventListener("input", () => {
            state.personName = nameInput.value.trim() || "Persona";
            saveSchedule();
            updateLiveMetrics();
        });
    }

    document.querySelectorAll(".day-check-input").forEach(cb => {
        cb.addEventListener("change", (e) => {
            e.target.parentElement.classList.toggle("checked", e.target.checked);
        });
    });
}

// EXPORTAR FUNCIONES AL OBJETO WINDOW
window.setBrush = setBrush;
window.openBoxEditModal = openBoxEditModal;
window.closeBoxEditModal = closeBoxEditModal;
window.setQuickChip = setQuickChip;
window.saveBoxModal = saveBoxModal;
window.openCategoriesManagerModal = openCategoriesManagerModal;
window.closeCategoriesManagerModal = closeCategoriesManagerModal;
window.updateCategoryColor = updateCategoryColor;
window.updateCategoryLabel = updateCategoryLabel;
window.updateCategoryTag = updateCategoryTag;
window.addNewCategoryFromModal = addNewCategoryFromModal;
window.deleteCustomCategory = deleteCustomCategory;
window.resetCategoriesToDefault = resetCategoriesToDefault;
window.generateScheduleImage = generateScheduleImage;
window.openRangeFillModal = openRangeFillModal;
window.closeRangeFillModal = closeRangeFillModal;
window.setRangePreset = setRangePreset;
window.applyRangeFill = applyRangeFill;
window.loadPresetTemplate = loadPresetTemplate;
window.clearFullSchedule = clearFullSchedule;
window.exportStandaloneHTML = exportStandaloneHTML;
