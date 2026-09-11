/**
 * AICC 24-HOUR SCHEDULE MAPPER ENGINE & MULTI-CALENDAR MANAGER
 * Metodología: Administración Humana | Diego González Yáñez
 */

(function() {
    let scheduleCategories = [];
    let defaultScheduleCategories = [];
    let activeScheduleBrushId = "";
    let scheduleData = {};
    let isScheduleMouseDown = false;
    let scheduleStoragePrefix = "ah_client_schedule";

    // Multi-calendar state
    let savedCalendars = [];
    let activeCalendarId = "";

    function normalizeCategory(cat) {
        if (!cat) return null;
        const rawName = cat.name || cat.nombre || cat.label || cat.title || "";
        const name = (rawName && rawName.trim() && rawName.trim() !== "Categoría") 
            ? rawName.trim() 
            : (cat.id ? (cat.id.charAt(0).toUpperCase() + cat.id.slice(1)) : "Categoría");
        const tag = (cat.tag || (cat.id ? cat.id.substring(0, 5) : "CAT")).toUpperCase();
        const color = cat.color || "#3b82f6";
        return {
            id: cat.id || ("cat_" + Math.random().toString(36).substr(2, 6)),
            name: name,
            label: name,
            nombre: name,
            tag: tag,
            color: color,
            isSystem: cat.isSystem || false
        };
    }

    function initScheduleEngine(config) {
        if (!config) config = {};
        scheduleStoragePrefix = config.storageKey || "ah_client_schedule";

        // 1. Normalizar categorías predeterminadas
        const rawDefaults = config.defaultCategories || window.CLIENT_SCHEDULE_CATEGORIES || [
            { id: "trabajo", name: "💼 Trabajo & Proyectos", color: "#38BDF8", tag: "TRAB" },
            { id: "descanso", name: "🌱 Descanso & Ocio", color: "#10B981", tag: "OCIO" },
            { id: "sueno", name: "😴 Sueño", color: "#6366F1", tag: "SUEÑO" },
            { id: "libre", name: "⚪ Tiempo Libre", color: "#334155", tag: "LIBRE" }
        ];
        defaultScheduleCategories = rawDefaults.map(normalizeCategory);

        // 2. Cargar o Inicializar Multi-Calendarios
        initSavedCalendars(config);

        // 3. Configurar pincel activo
        if (!scheduleCategories.find(c => c.id === activeScheduleBrushId)) {
            activeScheduleBrushId = scheduleCategories[0]?.id || "libre";
        }

        // 4. Renderizar UI completa
        renderCalendarDropdown();
        renderScheduleBrushChips();
        renderScheduleGrid();
        renderScheduleStatistics();
        populateScheduleRangeModal();

        window.addEventListener("mouseup", () => { isScheduleMouseDown = false; });
    }

    function initSavedCalendars(config) {
        const rawPresets = config.presets || window.CLIENT_SCHEDULE_PRESETS || [];
        let defaultCalendars = [];

        if (rawPresets && rawPresets.length > 0) {
            defaultCalendars = rawPresets.map((preset, idx) => ({
                id: preset.id || ("preset_" + idx),
                name: preset.name || preset.title || `Calendario ${idx + 1}`,
                data: typeof preset.generator === 'function' ? preset.generator() : (preset.data || {}),
                categories: preset.categories ? preset.categories.map(normalizeCategory) : JSON.parse(JSON.stringify(defaultScheduleCategories)),
                updatedAt: new Date().toISOString()
            }));
        } else {
            defaultCalendars = [
                {
                    id: "semana_1",
                    name: "Mi Calendario Semanal",
                    data: generateInitialSchedule(config.defaultScheduleGenerator),
                    categories: JSON.parse(JSON.stringify(defaultScheduleCategories)),
                    updatedAt: new Date().toISOString()
                }
            ];
        }

        // Intentar leer de localStorage v3
        const saved = localStorage.getItem(`${scheduleStoragePrefix}_saved_calendars_v3`);
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    savedCalendars = parsed
                        .filter(c => c.id !== "foco_alto" && c.id !== "descanso_suave")
                        .map(c => {
                            let cats = (c.categories && c.categories.length > 0) 
                                ? c.categories.map(normalizeCategory)
                                : JSON.parse(JSON.stringify(defaultScheduleCategories));
                        
                        cats = cats.map(cat => {
                            if (cat.id === "cat-yoga" || (cat.name && (cat.name.includes("Yoga Suave") || cat.name.includes("Piloto Online") || cat.name.includes("Yoga Online")))) {
                                return {
                                    id: "cat-habitarte-clases",
                                    name: "🌿 Habitarte • Ejercer (Clases en Vivo)",
                                    label: "🌿 Habitarte • Ejercer (Clases en Vivo)",
                                    nombre: "🌿 Habitarte • Ejercer (Clases en Vivo)",
                                    tag: "HAB-EJERCER",
                                    color: "#10b981",
                                    isSystem: cat.isSystem || false
                                };
                            }
                            if (cat.id === "cat-habitarte-clases") {
                                return {
                                    ...cat,
                                    name: "🌿 Habitarte • Ejercer (Clases en Vivo)",
                                    label: "🌿 Habitarte • Ejercer (Clases en Vivo)",
                                    nombre: "🌿 Habitarte • Ejercer (Clases en Vivo)",
                                    tag: "HAB-EJERCER",
                                    color: "#10b981"
                                };
                            }
                            if (cat.id === "cat-habitarte-desarrollo") {
                                return {
                                    ...cat,
                                    name: "📐 Habitarte • Desarrollar (Estructura, Copys & Plan)",
                                    label: "📐 Habitarte • Desarrollar (Estructura, Copys & Plan)",
                                    nombre: "📐 Habitarte • Desarrollar (Estructura, Copys & Plan)",
                                    tag: "HAB-DESARROLLO",
                                    color: "#059669"
                                };
                            }
                            if (cat.name === "Categoría") {
                                const defMatch = defaultScheduleCategories.find(dc => dc.id === cat.id);
                                if (defMatch) return { ...cat, name: defMatch.name, label: defMatch.name, nombre: defMatch.name };
                            }
                            return cat;
                        });

                        // Asegurar que si existe cat-habitarte-clases, también esté cat-habitarte-desarrollo
                        if (cats.some(c => c.id === "cat-habitarte-clases") && !cats.some(c => c.id === "cat-habitarte-desarrollo")) {
                            const defDesarrollo = defaultScheduleCategories.find(dc => dc.id === "cat-habitarte-desarrollo");
                            if (defDesarrollo) {
                                cats.splice(cats.findIndex(c => c.id === "cat-habitarte-clases") + 1, 0, { ...defDesarrollo });
                            }
                        }

                        // Migrar celdas que apunten a cat-yoga en la grilla
                        if (c.data) {
                            for (const k in c.data) {
                                if (c.data[k] === "cat-yoga") {
                                    c.data[k] = "cat-habitarte-clases";
                                }
                            }
                        }

                        return {
                            ...c,
                            categories: cats
                        };
                    });
                    defaultCalendars.forEach(dc => {
                        const existingIdx = savedCalendars.findIndex(c => c.id === dc.id);
                        if (existingIdx === -1) {
                            savedCalendars.push(dc);
                        } else if (dc.data && Object.keys(dc.data).length > 0 && (!savedCalendars[existingIdx].data || Object.keys(savedCalendars[existingIdx].data).length === 0)) {
                            savedCalendars[existingIdx].data = dc.data;
                            savedCalendars[existingIdx].name = dc.name;
                        }
                    });

                    // Persistir la versión limpia inmediatamente
                    try {
                        localStorage.setItem(`${scheduleStoragePrefix}_saved_calendars_v3`, JSON.stringify(savedCalendars));
                    } catch(e) {}
                } else {
                    savedCalendars = defaultCalendars;
                }
            } catch(e) {
                console.error("Error al parsear calendarios guardados:", e);
                savedCalendars = defaultCalendars;
            }
        } else {
            // Migración limpia desde v2 si existía
            const oldDataStr = localStorage.getItem(`${scheduleStoragePrefix}_data_v2`);
            const oldCatsStr = localStorage.getItem(`${scheduleStoragePrefix}_categories_v2`);
            let oldData = null;
            let oldCats = null;
            if (oldDataStr) {
                try { oldData = JSON.parse(oldDataStr); } catch(e) {}
            }
            if (oldCatsStr) {
                try { oldCats = JSON.parse(oldCatsStr); } catch(e) {}
            }

            if (oldData && Object.keys(oldData).length > 0) {
                let healedCats = (oldCats && oldCats.length > 0)
                    ? oldCats.map(normalizeCategory)
                    : JSON.parse(JSON.stringify(defaultScheduleCategories));
                
                healedCats = healedCats.map(cat => {
                    if (cat.name === "Categoría") {
                        const defMatch = defaultScheduleCategories.find(dc => dc.id === cat.id);
                        if (defMatch) return { ...cat, name: defMatch.name, label: defMatch.name, nombre: defMatch.name };
                    }
                    return cat;
                });

                defaultCalendars[0].data = oldData;
                defaultCalendars[0].categories = healedCats;
            }

            savedCalendars = defaultCalendars;
        }

        // Activar calendario guardado o primer preset
        const savedActiveId = localStorage.getItem(`${scheduleStoragePrefix}_active_calendar_id_v3`);
        if (savedActiveId && savedCalendars.find(c => c.id === savedActiveId)) {
            activeCalendarId = savedActiveId;
        } else {
            activeCalendarId = savedCalendars[0]?.id || "semana_1";
        }

        // Si el calendario activo actual no tiene horas asignadas y existe otro con datos (ej. Semana Base v1), activarlo
        const currentActive = savedCalendars.find(c => c.id === activeCalendarId);
        const currentHasData = currentActive && currentActive.data && Object.values(currentActive.data).some(v => v && v !== "libre" && v !== "blanco" && v !== "vacio");
        if (!currentHasData) {
            const populatedPreset = savedCalendars.find(c => c.data && Object.values(c.data).some(v => v && v !== "libre" && v !== "blanco" && v !== "vacio"));
            if (populatedPreset) {
                activeCalendarId = populatedPreset.id;
            }
        }

        const activeCal = savedCalendars.find(c => c.id === activeCalendarId) || savedCalendars[0];
        if (activeCal) {
            scheduleData = activeCal.data || {};
            scheduleCategories = activeCal.categories && activeCal.categories.length > 0 
                ? activeCal.categories 
                : JSON.parse(JSON.stringify(defaultScheduleCategories));
        }

        saveAllCalendarsToStorage(false);
    }

    function saveAllCalendarsToStorage(triggerRerender = true) {
        const activeCal = savedCalendars.find(c => c.id === activeCalendarId);
        if (activeCal) {
            activeCal.data = JSON.parse(JSON.stringify(scheduleData));
            activeCal.categories = JSON.parse(JSON.stringify(scheduleCategories));
            activeCal.updatedAt = new Date().toISOString();
        }

        localStorage.setItem(`${scheduleStoragePrefix}_saved_calendars_v3`, JSON.stringify(savedCalendars));
        localStorage.setItem(`${scheduleStoragePrefix}_active_calendar_id_v3`, activeCalendarId);
        // Sincronizar copias retroactivas
        localStorage.setItem(`${scheduleStoragePrefix}_data_v2`, JSON.stringify(scheduleData));
        localStorage.setItem(`${scheduleStoragePrefix}_categories_v2`, JSON.stringify(scheduleCategories));

        if (triggerRerender) {
            renderCalendarDropdown();
            renderScheduleStatistics();
        }
    }

    function switchScheduleCalendar(calId) {
        if (!calId) return;
        
        // Guardar el estado actual antes de cambiar
        const currentCal = savedCalendars.find(c => c.id === activeCalendarId);
        if (currentCal) {
            currentCal.data = JSON.parse(JSON.stringify(scheduleData));
            currentCal.categories = JSON.parse(JSON.stringify(scheduleCategories));
            currentCal.updatedAt = new Date().toISOString();
        }

        const nextCal = savedCalendars.find(c => c.id === calId);
        if (!nextCal) return;

        activeCalendarId = calId;
        scheduleData = nextCal.data || {};
        if (nextCal.categories && nextCal.categories.length > 0) {
            scheduleCategories = nextCal.categories.map(normalizeCategory);
        } else {
            scheduleCategories = JSON.parse(JSON.stringify(defaultScheduleCategories));
        }

        if (!scheduleCategories.find(c => c.id === activeScheduleBrushId)) {
            activeScheduleBrushId = scheduleCategories[0]?.id || "libre";
        }

        saveAllCalendarsToStorage(false);
        renderCalendarDropdown();
        renderScheduleBrushChips();
        renderScheduleGrid();
        renderScheduleStatistics();
        populateScheduleRangeModal();

        showScheduleToast(`📅 Calendario activo: ${nextCal.name}`);
    }

    function handleCalendarSelectChange(calId) {
        switchScheduleCalendar(calId);
    }

    function openSaveAsNewCalendarModal() {
        const currentCal = savedCalendars.find(c => c.id === activeCalendarId);
        const defaultName = currentCal ? `${currentCal.name} (Versión ${savedCalendars.length + 1})` : `Mi Calendario ${savedCalendars.length + 1}`;
        const name = prompt("Nombre para este nuevo calendario / versión semanal:", defaultName);
        if (name && name.trim()) {
            const newId = "cal_" + Date.now();
            const newCal = {
                id: newId,
                name: name.trim(),
                data: JSON.parse(JSON.stringify(scheduleData)),
                categories: JSON.parse(JSON.stringify(scheduleCategories)),
                updatedAt: new Date().toISOString()
            };
            savedCalendars.push(newCal);
            activeCalendarId = newId;
            saveAllCalendarsToStorage(true);
            renderCalendarDropdown();
            showScheduleToast(`✨ Versión "${name.trim()}" guardada exitosamente.`);
        }
    }

    function openRenameCalendarModal() {
        const activeCal = savedCalendars.find(c => c.id === activeCalendarId);
        if (!activeCal) return;
        const newName = prompt("Nuevo nombre para este calendario:", activeCal.name);
        if (newName && newName.trim() && newName.trim() !== activeCal.name) {
            activeCal.name = newName.trim();
            saveAllCalendarsToStorage(true);
            renderCalendarDropdown();
            showScheduleToast(`✏️ Renombrado a: "${activeCal.name}".`);
        }
    }

    function deleteActiveCalendar() {
        if (savedCalendars.length <= 1) {
            alert("Debes mantener al menos un calendario guardado.");
            return;
        }
        const activeCal = savedCalendars.find(c => c.id === activeCalendarId);
        if (!activeCal) return;

        if (confirm(`¿Estás seguro de eliminar el calendario "${activeCal.name}"?`)) {
            savedCalendars = savedCalendars.filter(c => c.id !== activeCalendarId);
            activeCalendarId = savedCalendars[0].id;
            const newActive = savedCalendars[0];
            scheduleData = newActive.data || {};
            scheduleCategories = newActive.categories || JSON.parse(JSON.stringify(defaultScheduleCategories));
            
            saveAllCalendarsToStorage(false);
            renderCalendarDropdown();
            renderScheduleBrushChips();
            renderScheduleGrid();
            renderScheduleStatistics();
            populateScheduleRangeModal();
            showScheduleToast(`🗑️ Calendario eliminado. Se cargó "${newActive.name}".`);
        }
    }

    function renderCalendarDropdown() {
        let select = document.getElementById("schedule-calendar-select");
        
        if (!select) {
            let targetContainer = document.getElementById("schedule-calendar-bar-container");
            if (!targetContainer) {
                const controls = document.querySelector(".schedule-controls");
                if (controls && controls.parentElement) {
                    targetContainer = document.createElement("div");
                    targetContainer.id = "schedule-calendar-bar-container";
                    targetContainer.className = "schedule-calendar-bar-container";
                    controls.parentElement.insertBefore(targetContainer, controls);
                }
            }
            if (targetContainer) {
                targetContainer.innerHTML = `
                    <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap; flex:1;">
                        <span style="font-size:0.82rem; font-weight:800; color:#fff; display:flex; align-items:center; gap:6px;">
                            <i class="fa-solid fa-calendar-days" style="color:var(--primary, #10b981);"></i> Mis Calendarios:
                        </span>
                        <select id="schedule-calendar-select" class="schedule-calendar-select" onchange="handleCalendarSelectChange(this.value)">
                        </select>
                    </div>
                    <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                        <button type="button" class="btn-schedule-action" onclick="openSaveAsNewCalendarModal()" style="background:rgba(16,185,129,0.12); color:#10b981; border:1px solid rgba(16,185,129,0.35); font-weight:700;">
                            <i class="fa-solid fa-folder-plus"></i> + Guardar Semana Actual
                        </button>
                        <button type="button" class="btn-schedule-action" id="btn-merge-calendar" onclick="openMergeCalendarsModal()" style="background:rgba(168,85,247,0.12); color:#c084fc; border:1px solid rgba(168,85,247,0.35); font-weight:700;">
                            <i class="fa-solid fa-layer-group"></i> Solapar / Fusionar
                        </button>
                        <button type="button" class="btn-schedule-action" onclick="openRenameCalendarModal()" style="color:#ccc;">
                            <i class="fa-solid fa-pen"></i> Renombrar
                        </button>
                        <button type="button" class="btn-schedule-action" id="btn-delete-active-calendar" onclick="deleteActiveCalendar()" style="color:#f87171; background:rgba(239,68,68,0.1); border:1px solid rgba(239,68,68,0.3);">
                            <i class="fa-solid fa-trash-can"></i> Eliminar
                        </button>
                    </div>
                `;
                select = document.getElementById("schedule-calendar-select");
            }
        }

        if (!select) return;

        select.innerHTML = savedCalendars.map(cal => `
            <option value="${cal.id}" ${cal.id === activeCalendarId ? 'selected' : ''}>
                ${cal.name}
            </option>
        `).join("");

        const delBtn = document.getElementById("btn-delete-active-calendar");
        if (delBtn) {
            delBtn.style.display = savedCalendars.length > 1 ? "inline-flex" : "none";
        }

        const mergeBtn = document.getElementById("btn-merge-calendar");
        if (mergeBtn) {
            mergeBtn.style.display = savedCalendars.length > 1 ? "inline-flex" : "none";
        }
    }

    function openMergeCalendarsModal() {
        if (savedCalendars.length <= 1) {
            alert("Para solapar o fusionar semanas, primero guarda al menos 2 calendarios (por ejemplo: 'Semana Trabajo' y 'Semana Casa').\n\nPuedes crear una nueva semana haciendo clic en '+ Guardar Semana Actual'.");
            return;
        }

        let modal = document.getElementById("modal-schedule-merge");
        if (!modal) {
            modal = document.createElement("div");
            modal.id = "modal-schedule-merge";
            modal.className = "modal-overlay";
            modal.innerHTML = `
                <div class="modal-box" style="max-width: 520px; background:#0d0d0d; border:1px solid var(--border); border-radius:12px; padding:1.8rem;">
                    <div class="modal-title" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                        <span style="font-weight:800; font-size:1.1rem; color:#fff; display:flex; align-items:center; gap:8px;">
                            <i class="fa-solid fa-layer-group" style="color:#c084fc;"></i> Solapar / Fusionar Calendarios
                        </span>
                        <button type="button" class="modal-close-btn" onclick="closeMergeCalendarsModal()" style="background:none; border:none; color:#888; font-size:1.4rem; cursor:pointer;">&times;</button>
                    </div>
                    <p style="font-size:0.82rem; color:#aaa; margin-bottom:1.2rem; line-height:1.4;">
                        Combina dos calendarios en uno solo. Ideal si mapeaste áreas por separado (ej. primero el trabajo dejando espacios en blanco, y luego la casa) y ahora quieres solaparlas.
                    </p>
                    <div style="margin-bottom:1rem;">
                        <label style="display:block; font-size:0.75rem; font-weight:700; color:#ddd; margin-bottom:6px;">
                            Selecciona el calendario a solapar sobre la semana activa actual:
                        </label>
                        <select id="merge-source-calendar-select" class="schedule-calendar-select" style="width:100%; min-width:unset; box-sizing:border-box;">
                        </select>
                    </div>
                    <div style="margin-bottom:1.4rem; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); padding:10px 12px; border-radius:8px;">
                        <label style="display:flex; align-items:flex-start; gap:8px; font-size:0.8rem; color:#eee; cursor:pointer;">
                            <input type="checkbox" id="merge-only-non-empty" checked style="margin-top:3px; accent-color:#c084fc;">
                            <span><strong>Solapamiento Inteligente:</strong> Solo importar horas con bloques asignados (deja intactos los bloques que ya tienes pintados en la semana activa).</span>
                        </label>
                    </div>
                    <div style="display:flex; justify-content:flex-end; gap:8px;">
                        <button type="button" class="btn-schedule-action" onclick="closeMergeCalendarsModal()">Cancelar</button>
                        <button type="button" class="btn-schedule-action" onclick="executeMergeCalendars()" style="background:#a855f7; color:#fff; border-color:#a855f7; font-weight:800;">
                            <i class="fa-solid fa-code-merge"></i> Solapar y Guardar
                        </button>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);
        }

        const select = document.getElementById("merge-source-calendar-select");
        if (select) {
            const others = savedCalendars.filter(c => c.id !== activeCalendarId);
            select.innerHTML = others.map(c => `
                <option value="${c.id}">${c.name}</option>
            `).join("");
        }

        modal.classList.add("active");
    }

    function closeMergeCalendarsModal() {
        const modal = document.getElementById("modal-schedule-merge");
        if (modal) modal.classList.remove("active");
    }

    function executeMergeCalendars() {
        const select = document.getElementById("merge-source-calendar-select");
        if (!select) return;
        const sourceId = select.value;
        const sourceCal = savedCalendars.find(c => c.id === sourceId);
        if (!sourceCal) return;

        const onlyNonEmpty = document.getElementById("merge-only-non-empty")?.checked ?? true;
        const sourceData = sourceCal.data || {};

        if (sourceCal.categories && Array.isArray(sourceCal.categories)) {
            sourceCal.categories.forEach(srcCat => {
                if (!scheduleCategories.some(c => c.id === srcCat.id)) {
                    scheduleCategories.push(normalizeCategory(srcCat));
                }
            });
        }

        let mergedCount = 0;
        for (let d = 0; d < 7; d++) {
            for (let h = 0; h < 24; h++) {
                const key = `${d}-${h}`;
                const srcVal = sourceData[key];
                const isSrcBlank = (!srcVal || srcVal === "libre" || srcVal === "blanco" || srcVal === "vacio");

                if (!isSrcBlank) {
                    const currentVal = scheduleData[key];
                    const isCurrentBlank = (!currentVal || currentVal === "libre" || currentVal === "blanco" || currentVal === "vacio");
                    if (isCurrentBlank || !onlyNonEmpty) {
                        scheduleData[key] = srcVal;
                        mergedCount++;
                    }
                }
            }
        }

        closeMergeCalendarsModal();
        saveAllCalendarsToStorage(true);
        renderScheduleBrushChips();
        renderScheduleGrid();
        renderScheduleStatistics();
        showScheduleToast(`🔀 Solapadas ${mergedCount} horas desde "${sourceCal.name}".`);
    }

    function generateInitialSchedule(customGenerator) {
        if (typeof customGenerator === 'function') {
            return customGenerator();
        }
        const data = {};
        for (let d = 0; d < 7; d++) {
            for (let h = 0; h < 24; h++) {
                data[`${d}-${h}`] = "libre"; // Todo en blanco / libre inicialmente
            }
        }
        return data;
    }

    function saveScheduleData() {
        saveAllCalendarsToStorage(true);
    }

    function manualSaveSchedule() {
        saveAllCalendarsToStorage(true);
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
        showScheduleToast("💾 Horario semanal guardado en tu equipo.");
    }

    function saveScheduleCategories() {
        saveAllCalendarsToStorage(false);
        renderScheduleBrushChips();
        renderScheduleGrid();
        renderScheduleStatistics();
        populateScheduleRangeModal();
    }

    function renderScheduleBrushChips() {
        const container = document.getElementById("brush-selector-container");
        if (!container) return;

        const isBlankActive = (!activeScheduleBrushId || activeScheduleBrushId === "libre" || activeScheduleBrushId === "blanco" || activeScheduleBrushId === "vacio");

        let chipsHtml = `
            <div class="brush-chip brush-eraser ${isBlankActive ? 'active' : ''}" onclick="selectScheduleBrush('libre')" title="Pincel para dejar celdas en blanco o borrar">
                <span class="chip-dot" style="background-color: #3f3f46; border: 1px solid #71717a;"></span>
                <span>⚪ En Blanco (Borrar)</span>
            </div>
        `;

        chipsHtml += scheduleCategories.map(cat => `
            <div class="brush-chip ${cat.id === activeScheduleBrushId ? 'active' : ''}" onclick="selectScheduleBrush('${cat.id}')">
                <span class="chip-dot" style="background-color: ${cat.color};"></span>
                <span style="font-weight:700;">${cat.name}</span>
            </div>
        `).join("");

        chipsHtml += `
            <button type="button" class="brush-chip" onclick="openCategoryManagerModal()" style="border-style:dashed; border-color:rgba(255,255,255,0.3); background:rgba(255,255,255,0.06); color:#fff; font-weight:700;">
                <i class="fa-solid fa-plus" style="font-size:0.7rem;"></i> Categoría
            </button>
        `;
        container.innerHTML = chipsHtml;
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
                const isBlank = (!catId || catId === "libre" || catId === "blanco" || catId === "vacio");
                const cat = scheduleCategories.find(c => c.id === catId);

                if (isBlank || !cat) {
                    html += `
                        <td id="cell-${key}" 
                            class="schedule-cell cell-empty"
                            onmousedown="handleScheduleMouseDown(${d}, ${h})" 
                            onmouseenter="handleScheduleMouseEnter(${d}, ${h})">
                            <div class="cell-content-box cell-blank"></div>
                        </td>
                    `;
                } else {
                    html += `
                        <td id="cell-${key}" 
                            class="schedule-cell"
                            onmousedown="handleScheduleMouseDown(${d}, ${h})" 
                            onmouseenter="handleScheduleMouseEnter(${d}, ${h})"
                            style="background-color: ${cat.color}22;">
                            <div class="cell-content-box" style="background-color: ${cat.color};">
                                ${cat.tag || cat.name.substring(0, 5)}
                            </div>
                        </td>
                    `;
                }
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
        const isBlank = (!activeScheduleBrushId || activeScheduleBrushId === "libre" || activeScheduleBrushId === "blanco" || activeScheduleBrushId === "vacio");
        const cat = scheduleCategories.find(c => c.id === activeScheduleBrushId);

        if (cell) {
            if (isBlank || !cat) {
                cell.className = "schedule-cell cell-empty";
                cell.style.backgroundColor = "transparent";
                cell.innerHTML = `<div class="cell-content-box cell-blank"></div>`;
            } else {
                cell.className = "schedule-cell";
                cell.style.backgroundColor = `${cat.color}22`;
                cell.innerHTML = `<div class="cell-content-box" style="background-color: ${cat.color};">${cat.tag || cat.name.substring(0, 5)}</div>`;
            }
        }
        saveScheduleData();
    }

    function renderScheduleStatistics() {
        const container = document.getElementById("schedule-stats-container");
        if (!container) return;

        const counts = {};
        scheduleCategories.forEach(c => counts[c.id] = 0);
        let assignedHours = 0;

        for (let d = 0; d < 7; d++) {
            for (let h = 0; h < 24; h++) {
                const key = `${d}-${h}`;
                const catId = scheduleData[key];
                const isBlank = (!catId || catId === "libre" || catId === "blanco" || catId === "vacio");
                if (!isBlank && counts[catId] !== undefined) {
                    counts[catId]++;
                    assignedHours++;
                }
            }
        }

        const freeHours = 168 - assignedHours;
        const freePct = ((freeHours / 168) * 100).toFixed(1);

        let cardsHtml = `
            <div class="stat-cat-card" style="border-top: 3px solid #52525b;">
                <div class="cat-title">⚪ En Blanco / Libre</div>
                <div class="cat-hours">${freeHours}h <span style="font-size:0.7rem; color:#888; font-weight:normal;">(${freePct}%)</span></div>
            </div>
        `;

        cardsHtml += scheduleCategories.map(cat => {
            const hours = counts[cat.id] || 0;
            const pct = ((hours / 168) * 100).toFixed(1);
            return `
                <div class="stat-cat-card" style="border-top: 3px solid ${cat.color};">
                    <div class="cat-title">${cat.name}</div>
                    <div class="cat-hours">${hours}h <span style="font-size:0.7rem; color:#888; font-weight:normal;">(${pct}%)</span></div>
                </div>
            `;
        }).join("");

        container.innerHTML = cardsHtml;
    }

    // Category Manager Modal
    function openCategoryManagerModal() {
        const editor = document.getElementById("category-list-editor") || document.getElementById("category-manager-list");
        if (editor) {
            editor.innerHTML = scheduleCategories.map((cat, idx) => `
                <div class="category-item-row" id="cat-row-${idx}" style="display:flex; align-items:center; gap:8px; background:#141414; border:1px solid #282828; padding:6px 10px; border-radius:6px;">
                    <div class="color-picker-wrapper" style="background-color: ${cat.color}; width:28px; height:28px; border-radius:50%; overflow:hidden; display:flex; align-items:center; justify-content:center; border:1px solid rgba(255,255,255,0.2);">
                        <input type="color" class="color-picker-input" value="${cat.color}" onchange="updateCatColorValue(${idx}, this.value)" style="opacity:0; width:100%; height:100%; cursor:pointer;">
                    </div>
                    <input type="text" class="category-name-input" value="${cat.name}" id="cat-name-${idx}" oninput="saveSingleCategoryEdit(${idx})" style="flex:2; background:#1e1e1e; border:1px solid #333; color:#fff; padding:6px 8px; border-radius:4px; font-size:0.8rem;">
                    <input type="text" class="category-tag-input" value="${cat.tag || ''}" id="cat-tag-${idx}" maxlength="8" oninput="saveSingleCategoryEdit(${idx})" style="width:70px; background:#1e1e1e; border:1px solid #333; color:#fff; padding:6px 8px; border-radius:4px; font-size:0.8rem; text-transform:uppercase;">
                    ${scheduleCategories.length > 1 ? `<button type="button" class="btn-card-action" onclick="deleteCategoryItem(${idx})" style="color:#f87171; background:rgba(239,68,68,0.1); border:1px solid rgba(239,68,68,0.3); border-radius:6px; padding:4px 8px; cursor:pointer;" title="Eliminar categoría">🗑️</button>` : ''}
                </div>
            `).join("");
        }

        const modal = document.getElementById("modal-category-manager") || document.getElementById("categories-manager-modal");
        if (modal) modal.classList.add("active");
    }

    function closeCategoryManagerModal() {
        saveCategoriesFromModal();
        const modal = document.getElementById("modal-category-manager") || document.getElementById("categories-manager-modal");
        if (modal) modal.classList.remove("active");
    }

    function saveSingleCategoryEdit(idx) {
        if (idx < 0 || idx >= scheduleCategories.length) return;
        const nameEl = document.getElementById(`cat-name-${idx}`);
        const tagEl = document.getElementById(`cat-tag-${idx}`);
        if (nameEl && nameEl.value.trim()) scheduleCategories[idx].name = nameEl.value.trim();
        if (tagEl && tagEl.value.trim()) scheduleCategories[idx].tag = tagEl.value.trim().toUpperCase();
        saveScheduleCategories();
    }

    function updateCatColorValue(idx, color) {
        const row = document.getElementById(`cat-row-${idx}`);
        if (row) {
            const wrapper = row.querySelector(".color-picker-wrapper");
            if (wrapper) wrapper.style.backgroundColor = color;
        }
        if (idx >= 0 && idx < scheduleCategories.length) {
            scheduleCategories[idx].color = color;
            saveScheduleCategories();
        }
    }

    function addNewCategoryFromModal() {
        const nameInput = document.getElementById("new-cat-name") || document.getElementById("new-cat-label");
        const tagInput = document.getElementById("new-cat-tag");
        const colorInput = document.getElementById("new-cat-color");
        if (!nameInput || !colorInput) return;

        const name = nameInput.value.trim();
        const tag = tagInput ? tagInput.value.trim().toUpperCase() : "";
        const color = colorInput.value || "#10b981";

        if (!name) { alert("Por favor ingresa un nombre para la categoría."); return; }

        const newId = "cat_" + Date.now();
        scheduleCategories.push({ id: newId, name, tag: tag || name.substring(0, 5).toUpperCase(), color });
        nameInput.value = "";
        if (tagInput) tagInput.value = "";
        saveScheduleCategories();
        openCategoryManagerModal();
    }

    function deleteCategoryItem(idx) {
        if (scheduleCategories.length <= 1) { alert("Debes mantener al menos una categoría."); return; }
        const catToDelete = scheduleCategories[idx];
        if (confirm(`¿Eliminar la categoría "${catToDelete.name}"?`)) {
            scheduleCategories.splice(idx, 1);
            if (activeScheduleBrushId === catToDelete.id) {
                activeScheduleBrushId = scheduleCategories[0].id;
            }
            saveScheduleCategories();
            openCategoryManagerModal();
        }
    }

    function saveCategoriesFromModal() {
        scheduleCategories.forEach((cat, idx) => {
            const nameEl = document.getElementById(`cat-name-${idx}`);
            const tagEl = document.getElementById(`cat-tag-${idx}`);
            if (nameEl && nameEl.value.trim()) cat.name = nameEl.value.trim();
            if (tagEl && tagEl.value.trim()) cat.tag = tagEl.value.trim().toUpperCase();
            const row = document.getElementById(`cat-row-${idx}`);
            if (row) {
                const colorEl = row.querySelector(".color-picker-input");
                if (colorEl) cat.color = colorEl.value;
            }
        });
        saveScheduleCategories();
    }

    function resetCategoriesDefault() {
        if (confirm("¿Restablecer las categorías originales predeterminadas?")) {
            scheduleCategories = JSON.parse(JSON.stringify(defaultScheduleCategories));
            saveScheduleCategories();
            openCategoryManagerModal();
            showScheduleToast("Categorías restablecidas.");
        }
    }

    function resetScheduleToDefault() {
        if (confirm("¿Deseas restablecer este horario semanal a la plantilla sugerida?")) {
            scheduleData = generateInitialSchedule();
            saveScheduleData();
            renderScheduleGrid();
            showScheduleToast("Horario restablecido a la plantilla base.");
        }
    }

    // Range Fill Modal
    function populateScheduleRangeModal() {
        const catSelect = document.getElementById("range-fill-category") || document.getElementById("range-category-select");
        const startSelect = document.getElementById("range-fill-start") || document.getElementById("range-start-hour");
        const endSelect = document.getElementById("range-fill-end") || document.getElementById("range-end-hour");
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
        const modal = document.getElementById("modal-range-fill") || document.getElementById("range-fill-modal");
        if (modal) modal.classList.add("active");
    }

    function closeRangeFillModal() {
        const modal = document.getElementById("modal-range-fill") || document.getElementById("range-fill-modal");
        if (modal) modal.classList.remove("active");
    }

    function applyRangeFill() {
        const catSelect = document.getElementById("range-fill-category") || document.getElementById("range-category-select");
        const startSelect = document.getElementById("range-fill-start") || document.getElementById("range-start-hour");
        const endSelect = document.getElementById("range-fill-end") || document.getElementById("range-end-hour");
        if (!catSelect || !startSelect || !endSelect) return;

        const catId = catSelect.value;
        const startH = parseInt(startSelect.value);
        const endH = parseInt(endSelect.value);

        const selectedDays = [];
        document.querySelectorAll("input[name='range-day']:checked, input[id^='range-day-']:checked").forEach(cb => {
            let val = parseInt(cb.value);
            if (isNaN(val) && cb.id && cb.id.startsWith("range-day-")) {
                val = parseInt(cb.id.replace("range-day-", ""));
            }
            if (!isNaN(val) && !selectedDays.includes(val)) {
                selectedDays.push(val);
            }
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
        showScheduleToast("Relleno aplicado correctamente.");
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
            const activeCal = savedCalendars.find(c => c.id === activeCalendarId);
            const calTitle = activeCal ? activeCal.name.replace(/[^a-zA-Z0-9_-]/g, '_') : 'Horario';
            const nameClean = (clientName || window.CLIENT_CONFIG?.clientName || "Cliente").replace(/\s+/g, '_');
            link.download = `Horario_${nameClean}_${calTitle}_Administracion_Humana.png`;
            link.href = canvas.toDataURL("image/png");
            link.click();
        });
    }

    function showScheduleToast(msg) {
        if (typeof showToast === 'function') {
            showToast(msg);
            return;
        }
        let toast = document.getElementById("schedule-toast");
        if (!toast) {
            toast = document.createElement("div");
            toast.id = "schedule-toast";
            toast.style.cssText = "position:fixed; bottom:24px; right:24px; background:#181818; border:1px solid #38bdf8; color:#fff; padding:10px 18px; border-radius:8px; font-size:0.85rem; font-weight:700; z-index:99999; box-shadow:0 8px 30px rgba(0,0,0,0.8); display:flex; align-items:center; gap:8px; transition:opacity 0.3s ease;";
            document.body.appendChild(toast);
        }
        toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color:#38bdf8;"></i> ${msg}`;
        toast.style.display = "flex";
        toast.style.opacity = "1";
        setTimeout(() => {
            toast.style.opacity = "0";
            setTimeout(() => { toast.style.display = "none"; }, 300);
        }, 2800);
    }

    // EXPORTAR AL OBJETO GLOBAL WINDOW
    window.initScheduleEngine = initScheduleEngine;
    window.handleCalendarSelectChange = handleCalendarSelectChange;
    window.switchScheduleCalendar = switchScheduleCalendar;
    window.openSaveAsNewCalendarModal = openSaveAsNewCalendarModal;
    window.openRenameCalendarModal = openRenameCalendarModal;
    window.deleteActiveCalendar = deleteActiveCalendar;
    window.openMergeCalendarsModal = openMergeCalendarsModal;
    window.closeMergeCalendarsModal = closeMergeCalendarsModal;
    window.executeMergeCalendars = executeMergeCalendars;
    window.renderCalendarDropdown = renderCalendarDropdown;
    window.manualSaveSchedule = manualSaveSchedule;
    window.saveScheduleData = saveScheduleData;
    window.saveScheduleCategories = saveScheduleCategories;
    window.selectScheduleBrush = selectScheduleBrush;
    window.renderScheduleBrushChips = renderScheduleBrushChips;
    window.renderScheduleGrid = renderScheduleGrid;
    window.handleScheduleMouseDown = handleScheduleMouseDown;
    window.handleScheduleMouseEnter = handleScheduleMouseEnter;
    window.paintScheduleCell = paintScheduleCell;
    window.renderScheduleStatistics = renderScheduleStatistics;
    window.openCategoryManagerModal = openCategoryManagerModal;
    window.closeCategoryManagerModal = closeCategoryManagerModal;
    window.saveSingleCategoryEdit = saveSingleCategoryEdit;
    window.updateCatColorValue = updateCatColorValue;
    window.addNewCategoryFromModal = addNewCategoryFromModal;
    window.deleteCategoryItem = deleteCategoryItem;
    window.saveCategoriesFromModal = saveCategoriesFromModal;
    window.resetCategoriesDefault = resetCategoriesDefault;
    window.resetScheduleToDefault = resetScheduleToDefault;
    window.populateScheduleRangeModal = populateScheduleRangeModal;
    window.openRangeFillModal = openRangeFillModal;
    window.closeRangeFillModal = closeRangeFillModal;
    window.applyRangeFill = applyRangeFill;
    window.exportSchedulePNG = exportSchedulePNG;
    window.showScheduleToast = showScheduleToast;

    // Auto-inicialización inteligente por cliente
    document.addEventListener("DOMContentLoaded", () => {
        const config = window.CLIENT_CONFIG || {};
        const clientId = config.clientId || "client";

        let defaultCategories = [
            { id: "trabajo", name: "💼 Trabajo & Proyectos", color: "#38BDF8", tag: "TRAB" },
            { id: "descanso", name: "🌱 Descanso & Ocio", color: "#10B981", tag: "OCIO" },
            { id: "sueno", name: "😴 Sueño", color: "#6366F1", tag: "SUEÑO" },
            { id: "libre", name: "⚪ Tiempo Libre", color: "#334155", tag: "LIBRE" }
        ];

        if (window.ROCIO_SCHEDULE_CATEGORIES) {
            defaultCategories = Object.keys(window.ROCIO_SCHEDULE_CATEGORIES).map(k => ({
                id: k,
                name: window.ROCIO_SCHEDULE_CATEGORIES[k].label || window.ROCIO_SCHEDULE_CATEGORIES[k].name,
                color: window.ROCIO_SCHEDULE_CATEGORIES[k].color,
                tag: window.ROCIO_SCHEDULE_CATEGORIES[k].tag
            }));
        } else if (window.CLIENT_SCHEDULE_CATEGORIES) {
            defaultCategories = window.CLIENT_SCHEDULE_CATEGORIES;
        }

        initScheduleEngine({
            storageKey: `${clientId}_schedule`,
            defaultCategories: defaultCategories,
            presets: window.CLIENT_SCHEDULE_PRESETS || null
        });
    });
})();
