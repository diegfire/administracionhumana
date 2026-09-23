/**
 * AICC TIME BLOCKER PRO ENGINE (Planificador Semanal por Bloques de 30 Minutos)
 * Metodología: Administración Humana | Diego González Yáñez
 * 
 * 4 Arquetipos de Energía Semanal:
 * 1. Foco (Deep Work / Producción / Creación) -> Ideal: 40%
 * 2. Recuperación (Desconexión / Salud / Pausas) -> Ideal: 30%
 * 3. Administración (Operación / Trámites / Reactivo) -> Ideal: 15%
 * 4. Personal (Familia / Pareja / Social / Hogar) -> Ideal: 15%
 */

(function() {
    let tbData = {};
    let tbStorageKey = "ah_client_timeblocker";
    let activeTbBrush = "foco";
    let activeTbDayFilter = "all"; // 'all' or 0..6
    let isTbMouseDown = false;
    let isTbTouchPainting = false;

    const TB_DAYS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

    const TB_CATEGORIES = {
        foco: { id: "foco", label: "Foco (Deep Work)", tag: "FOCO", color: "#0d9488", class: "cell-foco", target: 0.40, icon: "💻" },
        recuperacion: { id: "recuperacion", label: "Recuperación (Salud)", tag: "RECUP", color: "#f43f5e", class: "cell-recuperacion", target: 0.30, icon: "🧘" },
        admin: { id: "admin", label: "Administrativo", tag: "ADMIN", color: "#f59e0b", class: "cell-admin", target: 0.15, icon: "⚙️" },
        personal: { id: "personal", label: "Personal / Social", tag: "PERS", color: "#6366f1", class: "cell-personal", target: 0.15, icon: "🤝" },
        vacio: { id: "vacio", label: "Vacío / Borrar", tag: "VACÍO", color: "transparent", class: "", target: 0, icon: "🧹" }
    };

    function initTimeblockerEngine(config) {
        if (!config) config = {};
        tbStorageKey = config.storageKey || "ah_client_timeblocker";

        // Cargar datos (con migración transparente desde versión v1 aicc_timeblocker_data)
        const saved = localStorage.getItem(`${tbStorageKey}_data_v2`);
        if (saved) {
            try {
                tbData = JSON.parse(saved);
            } catch(e) {
                tbData = {};
            }
        } else {
            const legacy = localStorage.getItem("aicc_timeblocker_data");
            if (legacy) {
                try {
                    tbData = JSON.parse(legacy);
                } catch(e) {
                    tbData = {};
                }
            } else if (config.defaultBlocks) {
                tbData = JSON.parse(JSON.stringify(config.defaultBlocks));
            } else {
                tbData = {};
            }
        }

        renderDayTabs();
        renderTimeGrid();
        updateTimeblockerStats();

        // Listeners globales para ratón y toques móviles
        window.addEventListener("mouseup", () => { isTbMouseDown = false; });
        document.addEventListener("touchmove", handleGlobalTouchMove, { passive: true });
        document.addEventListener("touchend", () => { isTbTouchPainting = false; });
    }

    function saveTimeblockerData() {
        localStorage.setItem(`${tbStorageKey}_data_v2`, JSON.stringify(tbData));
        // Paridad con clave legacy para compatibilidad
        localStorage.setItem("aicc_timeblocker_data", JSON.stringify(tbData));
        updateTimeblockerStats();
    }

    function renderDayTabs() {
        let container = document.getElementById("tb-day-tabs-container");
        if (!container) {
            const gridWrap = document.querySelector(".tb-grid-wrapper");
            if (gridWrap && gridWrap.parentNode) {
                container = document.createElement("div");
                container.id = "tb-day-tabs-container";
                container.className = "tb-day-tabs no-print";
                gridWrap.parentNode.insertBefore(container, gridWrap);
            }
        }
        if (!container) return;

        let html = `
            <button class="tb-day-btn ${activeTbDayFilter === 'all' ? 'active' : ''}" onclick="window.setTimeblockerDayFilter('all')">
                <i class="fa-solid fa-calendar-week"></i> Toda la Semana
            </button>
        `;
        TB_DAYS.forEach((dName, idx) => {
            html += `
                <button class="tb-day-btn ${activeTbDayFilter === idx ? 'active' : ''}" onclick="window.setTimeblockerDayFilter(${idx})">
                    ${dName}
                </button>
            `;
        });
        container.innerHTML = html;
    }

    function setTimeblockerDayFilter(dayIdx) {
        activeTbDayFilter = dayIdx;
        renderDayTabs();
        renderTimeGrid();
    }

    function setTbBrush(type) {
        if (!TB_CATEGORIES[type]) return;
        activeTbBrush = type;
        document.querySelectorAll(".tb-brush-btn").forEach(btn => {
            if (btn.getAttribute("data-brush") === type) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });
    }

    function renderTimeGrid() {
        const grid = document.getElementById("timeGrid");
        if (!grid) return;

        grid.innerHTML = "";

        if (activeTbDayFilter !== "all") {
            grid.classList.add("single-day-mode");
        } else {
            grid.classList.remove("single-day-mode");
        }

        // Fila de encabezado
        const cornerHeader = document.createElement("div");
        cornerHeader.className = "tb-header-cell";
        cornerHeader.innerText = "HORA";
        grid.appendChild(cornerHeader);

        const daysToRender = activeTbDayFilter === "all" ? [0, 1, 2, 3, 4, 5, 6] : [activeTbDayFilter];

        daysToRender.forEach(dIdx => {
            const hCell = document.createElement("div");
            hCell.className = "tb-header-cell";
            hCell.innerText = activeTbDayFilter === "all" ? TB_DAYS[dIdx].substring(0, 3).toUpperCase() : `${TB_DAYS[dIdx]} (Vista 30 Min)`;
            grid.appendChild(hCell);
        });

        // Generar filas de 06:00 a 23:00 en intervalos de 30 minutos (36 slots)
        for (let hour = 6; hour <= 23; hour++) {
            for (const min of ["00", "30"]) {
                const timeStr = `${String(hour).padStart(2, '0')}:${min}`;

                // Etiqueta horaria
                const timeLabel = document.createElement("div");
                timeLabel.className = "tb-time-label";
                timeLabel.innerText = timeStr;
                grid.appendChild(timeLabel);

                // Celdas para los días activos
                for (const dIdx of daysToRender) {
                    const cellId = `${dIdx}-${timeStr}`;
                    const cell = document.createElement("div");
                    cell.className = "tb-cell";
                    cell.id = cellId;

                    const catKey = tbData[cellId];
                    if (catKey && TB_CATEGORIES[catKey] && TB_CATEGORIES[catKey].class) {
                        cell.classList.add(TB_CATEGORIES[catKey].class);
                        cell.innerText = activeTbDayFilter !== "all" ? TB_CATEGORIES[catKey].label : TB_CATEGORIES[catKey].tag;
                    }

                    // Eventos de ratón
                    cell.addEventListener("mousedown", () => {
                        isTbMouseDown = true;
                        paintCell(cell, cellId);
                    });
                    cell.addEventListener("mouseenter", () => {
                        if (isTbMouseDown) paintCell(cell, cellId);
                    });

                    // Evento de inicio táctil
                    cell.addEventListener("touchstart", () => {
                        isTbTouchPainting = true;
                        paintCell(cell, cellId);
                    }, { passive: true });

                    grid.appendChild(cell);
                }
            }
        }
    }

    function handleGlobalTouchMove(e) {
        if (!isTbTouchPainting || !e.touches || !e.touches[0]) return;
        const touch = e.touches[0];
        const el = document.elementFromPoint(touch.clientX, touch.clientY);
        if (el && el.classList.contains("tb-cell") && el.id) {
            paintCell(el, el.id);
        }
    }

    function paintCell(cell, cellId) {
        // Limpiar clases de arquetipos previos
        Object.values(TB_CATEGORIES).forEach(c => {
            if (c.class) cell.classList.remove(c.class);
        });
        cell.innerText = "";

        if (activeTbBrush === "vacio") {
            delete tbData[cellId];
        } else {
            const cat = TB_CATEGORIES[activeTbBrush];
            if (cat) {
                cell.classList.add(cat.class);
                cell.innerText = activeTbDayFilter !== "all" ? cat.label : cat.tag;
                tbData[cellId] = activeTbBrush;
            }
        }

        saveTimeblockerData();
    }

    function updateTimeblockerStats() {
        const counts = { foco: 0, recuperacion: 0, admin: 0, personal: 0 };

        Object.values(tbData).forEach(cat => {
            if (counts[cat] !== undefined) {
                counts[cat] += 0.5; // Cada cajita equivale a 30 minutos
            }
        });

        const totalPlanned = counts.foco + counts.recuperacion + counts.admin + counts.personal;
        const totalHoursLabel = document.getElementById("totalHoursLabel");
        if (totalHoursLabel) totalHoursLabel.textContent = `${totalPlanned}h`;

        // Actualizar barras de porcentaje
        Object.keys(counts).forEach(cat => {
            const hrs = counts[cat];
            const pct = totalPlanned > 0 ? (hrs / totalPlanned) * 100 : 0;
            const targetPct = TB_CATEGORIES[cat].target * 100;

            const hoursEl = document.getElementById(`hours-${cat}`);
            if (hoursEl) {
                hoursEl.innerText = `${hrs}h / ${Math.round(pct)}% (Meta: ${targetPct}%)`;
            }

            const pctBar = document.getElementById(`pct-${cat}`);
            if (pctBar) {
                pctBar.style.width = `${pct}%`;
            }
        });

        // Actualizar Donut SVG (circunferencia = 2 * PI * 40 = 251.2)
        const donut = document.getElementById("chartDonut");
        if (donut) {
            const focoPct = totalPlanned > 0 ? counts.foco / totalPlanned : 0;
            const offset = 251.2 - (focoPct * 251.2);
            donut.setAttribute("stroke-dashoffset", offset);
        }

        // Generar prescripción clínica humanizada
        renderClinicalAdvice(counts, totalPlanned);
    }

    function renderClinicalAdvice(counts, total) {
        const adviceContainer = document.getElementById("adviceContainer");
        if (!adviceContainer) return;

        if (total === 0) {
            adviceContainer.innerHTML = `Pinta tus bloques de tiempo en el calendario para recibir tu diagnóstico y recomendaciones clínicas de balance de energía.`;
            return;
        }

        let html = "";
        const focoRatio = counts.foco / total;
        const recupRatio = counts.recuperacion / total;
        const adminRatio = counts.admin / total;
        const persRatio = counts.personal / total;

        if (adminRatio > 0.20) {
            html += `<p style="color:#fbbf24; margin-bottom:8px;">⚠️ <strong>Alerta de Carga Reactiva:</strong> Estás dedicando el ${Math.round(adminRatio * 100)}% de tu semana a administración y trámites. Canaliza estas demandas hacia la <em>Matriz de Eisenhower (Q3)</em> para agruparlas en bloques de tanda (*batching*) o delegarlas.</p>`;
        }

        if (recupRatio < 0.20) {
            html += `<p style="color:#fb7185; margin-bottom:8px;">⚠️ <strong>Déficit Crítico de Recuperación:</strong> Tu tiempo de descanso y salud (${Math.round(recupRatio * 100)}%) es insuficiente. La productividad sostenible exige recarga de batería; sin ella, tu rendimiento colapsará por fatiga cognitiva.</p>`;
        }

        if (focoRatio > 0.50) {
            html += `<p style="color:#38bdf8; margin-bottom:8px;">⚠️ <strong>Riesgo de Hiperfoco:</strong> Más del 50% de tu semana está en foco puro (${Math.round(focoRatio * 100)}%). Recuerda que el cerebro necesita periodos difusos para consolidar ideas de alto impacto.</p>`;
        }

        if (focoRatio >= 0.35 && focoRatio <= 0.45 && recupRatio >= 0.25) {
            html += `<p style="color:#2dd4bf;">✨ <strong>¡Soberanía Lograda!</strong> Tu distribución semanal se encuentra en el rango de oro de la consultoría AICC. Trabajo profundo balanceado con recarga biológica real.</p>`;
        } else if (html === "") {
            html += `<p style="color:#d4d4d8;">👍 Buen balance inicial (${total}h planificadas). Monitorea tu nivel de energía al cierre de cada jornada y calibra los bloques según tu ritmo circadiano.</p>`;
        }

        adviceContainer.innerHTML = html;
    }

    function applyTimeblockerPreset(type) {
        if (type === "foco_manana") {
            // Lun a Vie 09:00 a 13:00 foco
            for (let d = 0; d < 5; d++) {
                for (let h = 9; h < 13; h++) {
                    tbData[`${d}-${String(h).padStart(2, '0')}:00`] = "foco";
                    tbData[`${d}-${String(h).padStart(2, '0')}:30`] = "foco";
                }
            }
            saveTimeblockerData();
            renderTimeGrid();
            showTbToast("💻 Bloque de Foco Matutino (09:00 - 13:00) aplicado.");
        } else if (type === "almuerzo_recup") {
            // Lun a Dom 13:00 a 14:30 recuperación
            for (let d = 0; d < 7; d++) {
                tbData[`${d}-13:00`] = "recuperacion";
                tbData[`${d}-13:30`] = "recuperacion";
                tbData[`${d}-14:00`] = "recuperacion";
            }
            saveTimeblockerData();
            renderTimeGrid();
            showTbToast("🥗 Bloque de Almuerzo & Desconexión (13:00 - 14:30) aplicado.");
        } else if (type === "admin_tarde") {
            // Lun a Vie 16:30 a 18:00 admin
            for (let d = 0; d < 5; d++) {
                tbData[`${d}-16:30`] = "admin";
                tbData[`${d}-17:00`] = "admin";
                tbData[`${d}-17:30`] = "admin";
            }
            saveTimeblockerData();
            renderTimeGrid();
            showTbToast("⚙️ Bloque Administrativo Batch (16:30 - 18:00) aplicado.");
        } else if (type === "personal_noche") {
            // Lun a Dom 19:00 a 21:30 personal
            for (let d = 0; d < 7; d++) {
                for (let h = 19; h <= 21; h++) {
                    tbData[`${d}-${String(h).padStart(2, '0')}:00`] = "personal";
                    tbData[`${d}-${String(h).padStart(2, '0')}:30`] = "personal";
                }
            }
            saveTimeblockerData();
            renderTimeGrid();
            showTbToast("🤝 Bloque Personal & Familiar (19:00 - 22:00) aplicado.");
        } else if (type === "limpiar_todo") {
            if (confirm("¿Estás seguro de que deseas limpiar todo el planificador de bloques a blanco?")) {
                tbData = {};
                saveTimeblockerData();
                renderTimeGrid();
                showTbToast("🧹 Planificador restablecido a blanco.");
            }
        }
    }

    function copyTimeblockerWhatsApp() {
        const counts = { foco: 0, recuperacion: 0, admin: 0, personal: 0 };
        Object.values(tbData).forEach(cat => {
            if (counts[cat] !== undefined) counts[cat] += 0.5;
        });

        const total = counts.foco + counts.recuperacion + counts.admin + counts.personal;
        let text = `⏱️ *AUDITORÍA SEMANAL TIME BLOCKER* 📊\n`;
        text += `✨ *Metodología:* AICC • Administración Humana\n\n`;
        text += `🎯 *Total Horas Asignadas:* ${total}h\n`;
        text += `• 💻 Foco Profundo: *${counts.foco}h* (${total > 0 ? Math.round((counts.foco/total)*100) : 0}% / Meta 40%)\n`;
        text += `• 🧘 Recuperación & Salud: *${counts.recuperacion}h* (${total > 0 ? Math.round((counts.recuperacion/total)*100) : 0}% / Meta 30%)\n`;
        text += `• ⚙️ Administrativo: *${counts.admin}h* (${total > 0 ? Math.round((counts.admin/total)*100) : 0}% / Meta 15%)\n`;
        text += `• 🤝 Personal & Social: *${counts.personal}h* (${total > 0 ? Math.round((counts.personal/total)*100) : 0}% / Meta 15%)\n\n`;

        if (counts.admin / (total || 1) > 0.20) {
            text += `⚠️ *Diagnóstico:* Sobrecarga administrativa detectada. Filtrar con Eisenhower.\n`;
        } else if (counts.recuperacion / (total || 1) < 0.20) {
            text += `⚠️ *Diagnóstico:* Déficit de recuperación. Proteger pausas para evitar burnout.\n`;
        } else {
            text += `✅ *Diagnóstico:* Distribución semanal armónica y sostenible.\n`;
        }

        text += `🚀 *Administración Humana • Diego González Yáñez*`;

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => {
                showTbToast("📋 ¡Resumen Time Blocker copiado para WhatsApp!");
            }).catch(() => {
                prompt("Copia tu resumen:", text);
            });
        } else {
            prompt("Copia tu resumen:", text);
        }
    }

    function showTbToast(msg) {
        let toast = document.getElementById("tb-toast");
        if (!toast) {
            toast = document.createElement("div");
            toast.id = "tb-toast";
            toast.style.cssText = "position:fixed; bottom:24px; left:50%; transform:translateX(-50%); background:#18181b; border:1px solid #0d9488; color:#fff; padding:10px 18px; border-radius:50px; font-size:0.82rem; font-weight:700; z-index:99999; box-shadow:0 10px 30px rgba(0,0,0,0.6); display:flex; align-items:center; gap:8px; pointer-events:none; transition:opacity 0.2s ease;";
            document.body.appendChild(toast);
        }
        toast.innerHTML = msg;
        toast.style.opacity = "1";
        setTimeout(() => {
            if (toast) toast.style.opacity = "0";
        }, 2500);
    }

    // EXPORTAR AL OBJETO GLOBAL WINDOW
    window.initTimeblockerEngine = initTimeblockerEngine;
    window.setTimeblockerDayFilter = setTimeblockerDayFilter;
    window.setTbBrush = setTbBrush;
    window.paintCell = paintCell;
    window.applyTimeblockerPreset = applyTimeblockerPreset;
    window.copyTimeblockerWhatsApp = copyTimeblockerWhatsApp;
    window.updateTimeblockerStats = updateTimeblockerStats;
    window.showTbToast = showTbToast;

})();
