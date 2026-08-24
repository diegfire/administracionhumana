/**
 * AICC 24-HOUR SCHEDULE MAPPER ENGINE & CATEGORY MANAGER
 */

let scheduleCategories = [];
let defaultScheduleCategories = [];
let activeScheduleBrushId = "";
let scheduleData = {};
let isScheduleMouseDown = false;
let scheduleStoragePrefix = "ah_client_schedule";

function initScheduleEngine(config) {
    if (!config) config = {};
    scheduleStoragePrefix = config.storageKey || "ah_client_schedule";
    defaultScheduleCategories = JSON.parse(JSON.stringify(config.defaultCategories || [
        { id: "trabajo", name: "💼 Trabajo & Proyectos", color: "#38BDF8", tag: "TRAB" },
        { id: "descanso", name: "🌱 Descanso & Ocio", color: "#10B981", tag: "OCIO" },
        { id: "sueno", name: "😴 Sueño", color: "#6366F1", tag: "SUEÑO" },
        { id: "libre", name: "⚪ Tiempo Libre", color: "#334155", tag: "LIBRE" }
    ]));

    const savedCats = localStorage.getItem(`${scheduleStoragePrefix}_categories_v2`);
    if (savedCats) {
        try { scheduleCategories = JSON.parse(savedCats); } catch(e) { scheduleCategories = JSON.parse(JSON.stringify(defaultScheduleCategories)); }
    } else {
        scheduleCategories = JSON.parse(JSON.stringify(defaultScheduleCategories));
    }

    const savedSched = localStorage.getItem(`${scheduleStoragePrefix}_data_v2`);
    if (savedSched) {
        try { scheduleData = JSON.parse(savedSched); } catch(e) { scheduleData = generateInitialSchedule(config.defaultScheduleGenerator); }
    } else {
        scheduleData = generateInitialSchedule(config.defaultScheduleGenerator);
    }

    if (!scheduleCategories.find(c => c.id === activeScheduleBrushId)) {
        activeScheduleBrushId = scheduleCategories[0]?.id || "libre";
    }

    renderScheduleBrushChips();
    renderScheduleGrid();
    renderScheduleStatistics();
    populateScheduleRangeModal();

    window.addEventListener("mouseup", () => { isScheduleMouseDown = false; });
}

function generateInitialSchedule(customGenerator) {
    if (typeof customGenerator === 'function') {
        return customGenerator();
    }
    const data = {};
    for (let d = 0; d < 7; d++) {
        for (let h = 0; h < 24; h++) {
            const key = `${d}-${h}`;
            if (h >= 0 && h < 7) {
                data[key] = "sueno";
            } else if (h >= 8 && h <= 17) {
                data[key] = (d < 5) ? (scheduleCategories[0]?.id || "trabajo") : "libre";
            } else if (h >= 23) {
                data[key] = "sueno";
            } else {
                data[key] = "libre";
            }
        }
    }
    return data;
}

function saveScheduleData() {
    localStorage.setItem(`${scheduleStoragePrefix}_data_v2`, JSON.stringify(scheduleData));
    renderScheduleStatistics();
}

function manualSaveSchedule() {
    saveScheduleData();
    const btn = document.getElementById("btn-manual-save-schedule");
    if (btn) {
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-check"></i> ¡Horario Guardado!';
        btn.style.background = '#10B981';
        btn.style.color = '#FFFFFF';
        btn.style.borderColor = '#10B981';
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.background = '';
            btn.style.color = '';
            btn.style.borderColor = '';
        }, 2000);
    }
}

function saveScheduleCategories() {
    localStorage.setItem(`${scheduleStoragePrefix}_categories_v2`, JSON.stringify(scheduleCategories));
    renderScheduleBrushChips();
    renderScheduleGrid();
    renderScheduleStatistics();
    populateScheduleRangeModal();
}

function renderScheduleBrushChips() {
    const container = document.getElementById("brush-selector-container");
    if (!container) return;
    container.innerHTML = scheduleCategories.map(cat => `
        <div class="brush-chip ${cat.id === activeScheduleBrushId ? 'active' : ''}" onclick="selectScheduleBrush('${cat.id}')">
            <span class="chip-dot" style="background-color: ${cat.color};"></span>
            <span>${cat.name}</span>
        </div>
    `).join("");
}

function selectScheduleBrush(catId) {
    activeScheduleBrushId = catId;
    renderScheduleBrushChips();
}

function renderScheduleGrid() {
    const tbody = document.getElementById("schedule-body");
    if (!tbody) return;

    let html = "";
    for (let h = 0; h < 24; h++) {
        const hourLabel = `${String(h).padStart(2, '0')}:00`;
        html += `<tr>`;
        html += `<td class="hour-header-col">${hourLabel}</td>`;

        for (let d = 0; d < 7; d++) {
            const key = `${d}-${h}`;
            const catId = scheduleData[key] || "libre";
            const cat = scheduleCategories.find(c => c.id === catId) || { name: "Libre", color: "#334155", tag: "LIBRE" };
            html += `
                <td id="cell-${key}" 
                    onmousedown="handleScheduleMouseDown(${d}, ${h})" 
                    onmouseenter="handleScheduleMouseEnter(${d}, ${h})"
                    style="background-color: ${cat.color}22;">
                    <div class="cell-content-box" style="background-color: ${cat.color};">
                        ${cat.tag || cat.name.substring(0, 5)}
                    </div>
                </td>
            `;
        }
        html += `</tr>`;
    }
    tbody.innerHTML = html;
}

function handleScheduleMouseDown(d, h) {
    isScheduleMouseDown = true;
    paintScheduleCell(d, h);
}

function handleScheduleMouseEnter(d, h) {
    if (isScheduleMouseDown) {
        paintScheduleCell(d, h);
    }
}

function paintScheduleCell(d, h) {
    const key = `${d}-${h}`;
    scheduleData[key] = activeScheduleBrushId;
    const cell = document.getElementById(`cell-${key}`);
    const cat = scheduleCategories.find(c => c.id === activeScheduleBrushId) || { name: "Libre", color: "#334155", tag: "LIBRE" };
    if (cell) {
        cell.style.backgroundColor = `${cat.color}22`;
        cell.innerHTML = `<div class="cell-content-box" style="background-color: ${cat.color};">${cat.tag || cat.name.substring(0, 5)}</div>`;
    }
    saveScheduleData();
}

function renderScheduleStatistics() {
    const container = document.getElementById("schedule-stats-container");
    if (!container) return;

    const counts = {};
    scheduleCategories.forEach(c => counts[c.id] = 0);

    for (let d = 0; d < 7; d++) {
        for (let h = 0; h < 24; h++) {
            const key = `${d}-${h}`;
            const catId = scheduleData[key] || "libre";
            if (counts[catId] !== undefined) {
                counts[catId]++;
            }
        }
    }

    container.innerHTML = scheduleCategories.map(cat => {
        const hours = counts[cat.id] || 0;
        const pct = ((hours / 168) * 100).toFixed(1);
        return `
            <div class="stat-cat-card" style="border-top: 3px solid ${cat.color};">
                <div class="cat-title">${cat.name}</div>
                <div class="cat-hours">${hours}h <span style="font-size:0.7rem; color:#888; font-weight:normal;">(${pct}%)</span></div>
            </div>
        `;
    }).join("");
}

// Category Manager Modal
function openCategoryManagerModal() {
    const editor = document.getElementById("category-list-editor");
    if (!editor) return;

    editor.innerHTML = scheduleCategories.map((cat, idx) => `
        <div class="category-item-row" id="cat-row-${idx}">
            <div class="color-picker-wrapper" style="background-color: ${cat.color};">
                <input type="color" class="color-picker-input" value="${cat.color}" onchange="updateCatColorValue(${idx}, this.value)">
            </div>
            <input type="text" class="category-name-input" value="${cat.name}" id="cat-name-${idx}">
            <input type="text" class="category-tag-input" value="${cat.tag || ''}" id="cat-tag-${idx}" maxlength="6">
            ${scheduleCategories.length > 1 ? `<button class="btn-card-action" onclick="deleteCategoryItem(${idx})" style="color:#f87171;">🗑️</button>` : ''}
        </div>
    `).join("");

    const modal = document.getElementById("modal-category-manager");
    if (modal) modal.classList.add("active");
}

function closeCategoryManagerModal() {
    const modal = document.getElementById("modal-category-manager");
    if (modal) modal.classList.remove("active");
}

function updateCatColorValue(idx, color) {
    const row = document.getElementById(`cat-row-${idx}`);
    if (row) {
        const wrapper = row.querySelector(".color-picker-wrapper");
        if (wrapper) wrapper.style.backgroundColor = color;
    }
}

function addNewCategoryFromModal() {
    const nameInput = document.getElementById("new-cat-name");
    const tagInput = document.getElementById("new-cat-tag");
    const colorInput = document.getElementById("new-cat-color");
    if (!nameInput || !colorInput) return;

    const name = nameInput.value.trim();
    const tag = tagInput ? tagInput.value.trim().toUpperCase() : "";
    const color = colorInput.value;

    if (!name) { alert("Por favor ingresa un nombre para la categoría."); return; }

    const newId = "cat_" + Date.now();
    scheduleCategories.push({ id: newId, name, tag: tag || name.substring(0, 4).toUpperCase(), color });
    nameInput.value = "";
    if (tagInput) tagInput.value = "";
    openCategoryManagerModal();
}

function deleteCategoryItem(idx) {
    if (scheduleCategories.length <= 1) { alert("Debes mantener al menos una categoría."); return; }
    scheduleCategories.splice(idx, 1);
    openCategoryManagerModal();
}

function saveCategoriesFromModal() {
    scheduleCategories.forEach((cat, idx) => {
        const nameEl = document.getElementById(`cat-name-${idx}`);
        const tagEl = document.getElementById(`cat-tag-${idx}`);
        if (nameEl) cat.name = nameEl.value.trim();
        if (tagEl) cat.tag = tagEl.value.trim().toUpperCase();
        const row = document.getElementById(`cat-row-${idx}`);
        if (row) {
            const colorEl = row.querySelector(".color-picker-input");
            if (colorEl) cat.color = colorEl.value;
        }
    });
    saveScheduleCategories();
    closeCategoryManagerModal();
}

function resetCategoriesDefault() {
    if (confirm("¿Restablecer las categorías originales predeterminadas?")) {
        scheduleCategories = JSON.parse(JSON.stringify(defaultScheduleCategories));
        saveScheduleCategories();
        openCategoryManagerModal();
    }
}

function resetScheduleToDefault() {
    if (confirm("¿Deseas restablecer todo el horario semanal a la plantilla sugerida?")) {
        scheduleData = generateInitialSchedule();
        saveScheduleData();
        renderScheduleGrid();
    }
}

// Range Fill Modal
function populateScheduleRangeModal() {
    const catSelect = document.getElementById("range-fill-category");
    const startSelect = document.getElementById("range-fill-start");
    const endSelect = document.getElementById("range-fill-end");
    if (!catSelect || !startSelect || !endSelect) return;

    catSelect.innerHTML = scheduleCategories.map(c => `<option value="${c.id}">${c.name}</option>`).join("");
    
    let hoursOptions = "";
    for (let h = 0; h < 24; h++) {
        hoursOptions += `<option value="${h}">${String(h).padStart(2, '0')}:00</option>`;
    }
    startSelect.innerHTML = hoursOptions;
    endSelect.innerHTML = hoursOptions;
    startSelect.value = "8";
    endSelect.value = "15";
}

function openRangeFillModal() {
    populateScheduleRangeModal();
    const modal = document.getElementById("modal-range-fill");
    if (modal) modal.classList.add("active");
}

function closeRangeFillModal() {
    const modal = document.getElementById("modal-range-fill");
    if (modal) modal.classList.remove("active");
}

function applyRangeFill() {
    const catSelect = document.getElementById("range-fill-category");
    const startSelect = document.getElementById("range-fill-start");
    const endSelect = document.getElementById("range-fill-end");
    if (!catSelect || !startSelect || !endSelect) return;

    const catId = catSelect.value;
    const startH = parseInt(startSelect.value);
    const endH = parseInt(endSelect.value);

    const selectedDays = [];
    document.querySelectorAll("input[name='range-day']:checked").forEach(cb => {
        selectedDays.push(parseInt(cb.value));
    });

    if (selectedDays.length === 0) { alert("Selecciona al menos un día."); return; }

    const minH = Math.min(startH, endH);
    const maxH = Math.max(startH, endH);

    selectedDays.forEach(d => {
        for (let h = minH; h <= maxH; h++) {
            scheduleData[`${d}-${h}`] = catId;
        }
    });

    saveScheduleData();
    renderScheduleGrid();
    closeRangeFillModal();
}

function exportSchedulePNG(clientName) {
    const target = document.getElementById("schedule-export-container") || document.getElementById("schedule-table");
    if (!target) return;
    if (typeof html2canvas === 'undefined') {
        alert("html2canvas no está disponible.");
        return;
    }
    html2canvas(target, { backgroundColor: "#080808", scale: 2 }).then(canvas => {
        const link = document.createElement("a");
        const nameClean = (clientName || "Cliente").replace(/\s+/g, '_');
        link.download = `Horario_24H_${nameClean}_Administracion_Humana.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
}
