/**
 * AICC EISENHOWER ENGINE PRO (Matriz Urgente vs Importante Mobile-First & Mini Dashboard)
 * Metodología: Administración Humana | Diego González Yáñez
 * Basado en: HERRAMIENTAS FULL.pdf (Págs. 75 a 77)
 * 
 * Cuadrantes Estratégicos:
 * Q1: Urgente + Importante (Hacer YA / Crisis / Modo Bombero)
 * Q2: NO Urgente + Importante (Bloques de Oro / Planificación / ROI del Tiempo)
 * Q3: Urgente + NO Importante (Delegar / Interrupciones / Demandas Ajenas)
 * Q4: NO Urgente + NO Importante (Eliminar / Fugas / Distracciones)
 */

(function() {
    let eisenhowerTasks = [];
    let eisenhowerStorageKey = "ah_client_eisenhower";
    let activeView = "all"; // 'all', 'q1', 'q2', 'q3', 'q4', 'dashboard'

    const QUADRANT_META = {
        q1: { id: "q1", title: "🔥 Q1: Crisis (Hacer YA)", label: "Crisis", color: "#ef4444", bg: "rgba(239, 68, 68, 0.15)", action: "Hacer YA", desc: "Supervivencia inmediata. Atención crítica hoy." },
        q2: { id: "q2", title: "🌟 Q2: Bloques de Oro (Programar)", label: "Oro", color: "#10b981", bg: "rgba(16, 185, 129, 0.15)", action: "Programar", desc: "La mina de oro. Salud, estrategia y prevención." },
        q3: { id: "q3", title: "⏳ Q3: Interrupciones (Delegar)", label: "Delegar", color: "#f59e0b", bg: "rgba(245, 158, 11, 0.15)", action: "Delegar", desc: "Ruidos de terceros. Pasar la pelota." },
        q4: { id: "q4", title: "🗑️ Q4: Fugas (Eliminar)", label: "Fuga", color: "#94a3b8", bg: "rgba(148, 163, 184, 0.15)", action: "Eliminar", desc: "Distracciones vacías. Descartar sin culpa." }
    };

    const DEFAULT_EISENHOWER_TASKS = [
        { id: "e1", q: "q1", text: "Pagar servicio con corte programado hoy", createdAt: Date.now() - 3600000 },
        { id: "e2", q: "q2", text: "Mapear rutina semanal de 168 horas y blindar bloques de oro", createdAt: Date.now() - 7200000 },
        { id: "e3", q: "q2", text: "Caminata de 30 min y recarga sensorial sin pantallas", createdAt: Date.now() - 14400000 },
        { id: "e4", q: "q3", text: "Responder mensajes de grupos sin agenda ni urgencia", createdAt: Date.now() - 28800000 },
        { id: "e5", q: "q4", text: "Scroll pasivo en redes después de las 22:00", createdAt: Date.now() - 40000000 }
    ];

    function initEisenhowerEngine(config) {
        if (!config) config = {};
        eisenhowerStorageKey = config.storageKey || "ah_client_eisenhower";

        const saved = localStorage.getItem(`${eisenhowerStorageKey}_tasks_v2`);
        if (saved) {
            try {
                eisenhowerTasks = JSON.parse(saved);
            } catch(e) {
                eisenhowerTasks = JSON.parse(JSON.stringify(config.defaultTasks || DEFAULT_EISENHOWER_TASKS));
            }
        } else {
            // Migración desde v1 si existiera
            const legacyV1 = localStorage.getItem(`${eisenhowerStorageKey}_tasks_v1`);
            if (legacyV1) {
                try {
                    eisenhowerTasks = JSON.parse(legacyV1);
                } catch(e) {
                    eisenhowerTasks = JSON.parse(JSON.stringify(config.defaultTasks || DEFAULT_EISENHOWER_TASKS));
                }
            } else {
                eisenhowerTasks = JSON.parse(JSON.stringify(config.defaultTasks || DEFAULT_EISENHOWER_TASKS));
            }
        }

        renderEisenhowerMatrix();
        setupViewTabs();
    }

    function saveEisenhowerTasks() {
        localStorage.setItem(`${eisenhowerStorageKey}_tasks_v2`, JSON.stringify(eisenhowerTasks));
        renderEisenhowerMatrix();
    }

    function setupViewTabs() {
        document.addEventListener("click", (e) => {
            const tabBtn = e.target.closest(".eisen-tab-btn");
            if (tabBtn) {
                const targetView = tabBtn.getAttribute("data-view");
                if (targetView) {
                    window.eisenSetView(targetView);
                }
            }
        });
    }

    window.eisenSetView = function(viewId) {
        activeView = viewId;
        renderEisenhowerMatrix();
    };

    function renderEisenhowerMatrix() {
        const q1List = eisenhowerTasks.filter(t => t.q === "q1");
        const q2List = eisenhowerTasks.filter(t => t.q === "q2");
        const q3List = eisenhowerTasks.filter(t => t.q === "q3");
        const q4List = eisenhowerTasks.filter(t => t.q === "q4");
        const total = eisenhowerTasks.length || 1;

        // Actualizar badges
        updateBadge("count-eisen-q1", q1List.length);
        updateBadge("count-eisen-q2", q2List.length);
        updateBadge("count-eisen-q3", q3List.length);
        updateBadge("count-eisen-q4", q4List.length);
        updateBadge("count-eisen-all", eisenhowerTasks.length);

        // Actualizar tabs activos
        document.querySelectorAll(".eisen-tab-btn").forEach(btn => {
            if (btn.getAttribute("data-view") === activeView) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });

        // Barra de diagnóstico de balance y carga mental
        renderBalanceDiagnostic(q1List.length, q2List.length, q3List.length, q4List.length, total);

        // Contenedor principal de visualización
        const mainContainer = document.getElementById("eisen-active-container") || document.getElementById("eisen-quadrants-wrap");
        if (mainContainer) {
            if (activeView === "dashboard") {
                renderDashboardView(mainContainer, q1List, q2List, q3List, q4List, total);
                return;
            }

            if (activeView === "all") {
                mainContainer.innerHTML = `
                    <div class="eisen-grid">
                        ${renderSingleQuadrantHtml("q1", q1List)}
                        ${renderSingleQuadrantHtml("q2", q2List)}
                        ${renderSingleQuadrantHtml("q3", q3List)}
                        ${renderSingleQuadrantHtml("q4", q4List)}
                    </div>
                `;
            } else {
                // Vista enfocada en un solo cuadrante (Mobile-First)
                const currentList = activeView === "q1" ? q1List : activeView === "q2" ? q2List : activeView === "q3" ? q3List : q4List;
                mainContainer.innerHTML = `
                    <div style="width:100%;">
                        ${renderSingleQuadrantHtml(activeView, currentList, true)}
                    </div>
                `;
            }
        } else {
            // Soporte para contenedores separados legacy (Laboratorio / Plan de Vuelo sin contenedor unificado)
            renderQuadrantList("eisen-list-q1", q1List, "q1");
            renderQuadrantList("eisen-list-q2", q2List, "q2");
            renderQuadrantList("eisen-list-q3", q3List, "q3");
            renderQuadrantList("eisen-list-q4", q4List, "q4");
        }
    }

    function updateBadge(id, count) {
        const el = document.getElementById(id);
        if (el) el.innerText = count;
    }

    function renderSingleQuadrantHtml(qKey, tasks, isSolo = false) {
        const meta = QUADRANT_META[qKey];
        return `
            <div class="eisen-quadrant eisen-${qKey}" ${isSolo ? 'style="min-height:360px;"' : ''}>
                <div class="eisen-header">
                    <div class="eisen-title-block">
                        <h3 style="color:${meta.color};">${meta.title}</h3>
                        <p>${meta.desc}</p>
                    </div>
                    <span class="eisen-count-badge">${tasks.length}</span>
                </div>
                <div class="eisen-cards-list">
                    ${tasks.length === 0 ? `
                        <div class="eisen-empty-box">
                            <span>Sin tareas en este cuadrante.</span>
                        </div>
                    ` : tasks.map(t => renderCardHtml(t)).join("")}
                </div>
            </div>
        `;
    }

    function renderCardHtml(t) {
        return `
            <div class="eisen-card-item">
                <div class="eisen-card-text">${escapeHtml(t.text)}</div>
                <div class="eisen-card-controls">
                    <select class="eisen-move-select" onchange="window.eisenMoveTask('${t.id}', this.value)" title="Mover de cuadrante">
                        <option value="q1" ${t.q === 'q1' ? 'selected' : ''}>🔥 Q1: Hacer YA</option>
                        <option value="q2" ${t.q === 'q2' ? 'selected' : ''}>🌟 Q2: Bloque Oro</option>
                        <option value="q3" ${t.q === 'q3' ? 'selected' : ''}>⏳ Q3: Delegar</option>
                        <option value="q4" ${t.q === 'q4' ? 'selected' : ''}>🗑️ Q4: Eliminar</option>
                    </select>
                    <div class="eisen-card-btns">
                        <button class="btn-eisen-card btn-del" onclick="window.eisenDeleteTask('${t.id}')" title="Eliminar tarea">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    function renderQuadrantList(elementId, tasks, quadrant) {
        const container = document.getElementById(elementId);
        if (!container) return;
        if (tasks.length === 0) {
            container.innerHTML = `<div class="eisen-empty-box"><span>Sin tareas en este cuadrante</span></div>`;
            return;
        }
        container.innerHTML = tasks.map(t => renderCardHtml(t)).join("");
    }

    function renderBalanceDiagnostic(q1, q2, q3, q4, total) {
        const pQ1 = Math.round((q1 / total) * 100);
        const pQ2 = Math.round((q2 / total) * 100);
        const pQ3 = Math.round((q3 / total) * 100);
        const pQ4 = Math.round((q4 / total) * 100);

        const reactivePercent = pQ1 + pQ3;

        // Actualizar barras de carga y oro en legacy
        const loadEl = document.getElementById("eisen-load-percent");
        const goldEl = document.getElementById("eisen-gold-percent");
        const barReactive = document.getElementById("eisen-bar-reactive");
        const barGold = document.getElementById("eisen-bar-gold");
        if (loadEl) loadEl.innerText = `${reactivePercent}%`;
        if (goldEl) goldEl.innerText = `${pQ2}%`;
        if (barReactive) barReactive.style.width = `${reactivePercent}%`;
        if (barGold) barGold.style.width = `${pQ2}%`;

        // Contenedor principal de diagnóstico
        const diagContainer = document.getElementById("eisen-diagnostic-bar") || document.getElementById("eisen-mental-load-bar");
        if (!diagContainer) return;

        let alertMessage = "";
        if (reactivePercent >= 60) {
            alertMessage = `
                <div class="eisen-alert-box eisen-alert-reactive">
                    <span style="font-size:1.2rem;">⚠️</span>
                    <div><strong>Alerta de Modo Bombero (${reactivePercent}% Reactivo):</strong> Estás atrapado apagando urgencias (Q1: ${pQ1}%) o respondiendo a interrupciones ajenas (Q3: ${pQ3}%). Blinda un Bloque de Oro matutino en <strong>Q2</strong> para romper el ciclo reactivo.</div>
                </div>
            `;
        } else {
            alertMessage = `
                <div class="eisen-alert-box eisen-alert-healthy">
                    <span style="font-size:1.2rem;">🌱</span>
                    <div><strong>Balance Saludable:</strong> Predominan tus Bloques de Oro estratégicos (Q2: ${pQ2}%). Esto previene la fatiga mental y asegura progreso sostenido a largo plazo.</div>
                </div>
            `;
        }

        diagContainer.innerHTML = `
            <div class="eisen-load-header">
                <span style="color:#ffffff;">🔥 Carga Reactiva (Q1+Q3): <strong style="color:#ef4444;">${reactivePercent}%</strong></span>
                <span style="color:#ffffff;">🌟 Bloques de Oro (Q2): <strong style="color:#10b981;">${pQ2}%</strong></span>
            </div>
            <div class="eisen-progress-track">
                <div class="eisen-progress-segment" style="width:${pQ2}%; background:#10b981;" title="Q2: Bloques de Oro (${pQ2}%)"></div>
                <div class="eisen-progress-segment" style="width:${pQ1}%; background:#ef4444;" title="Q1: Crisis (${pQ1}%)"></div>
                <div class="eisen-progress-segment" style="width:${pQ3}%; background:#f59e0b;" title="Q3: Interrupciones (${pQ3}%)"></div>
                <div class="eisen-progress-segment" style="width:${pQ4}%; background:#64748b;" title="Q4: Fugas (${pQ4}%)"></div>
            </div>
            ${alertMessage}
        `;
    }

    // =========================================================================
    // MINI DASHBOARD & HOJA DE ESTADO EJECUTIVA
    // =========================================================================
    function renderDashboardView(container, q1List, q2List, q3List, q4List, total) {
        const pQ2 = Math.round((q2List.length / total) * 100);
        const reactive = q1List.length + q3List.length;

        container.innerHTML = `
            <div class="eisen-sheet-container">
                <div class="eisen-sheet-header">
                    <div>
                        <span class="eisen-brand-badge">AICC Operativo • Matriz de Eisenhower</span>
                        <h2 class="eisen-sheet-title">Hoja de Estado & Balance de Prioridades</h2>
                        <p class="eisen-sheet-subtitle">Auditoría en tiempo real de actividades críticas frente a bloques estratégicos y fugas de tiempo.</p>
                    </div>
                    <div class="eisen-sheet-actions no-print">
                        <button class="btn-eisen-tool btn-print" onclick="window.eisenPrintSheet()" title="Imprimir reporte en 1 hoja">
                            <i class="fa-solid fa-print"></i> Imprimir Hoja A4
                        </button>
                        <button class="btn-eisen-tool btn-whatsapp" onclick="window.eisenCopyWhatsAppSummary()" title="Copiar resumen para WhatsApp">
                            <i class="fa-brands fa-whatsapp"></i> Copiar WhatsApp
                        </button>
                        <button class="btn-eisen-tool" onclick="window.eisenExportCsv()" title="Exportar datos a Excel">
                            <i class="fa-solid fa-file-excel"></i> Excel (CSV)
                        </button>
                        <button class="btn-eisen-tool" onclick="window.eisenResetDefault()" style="color:#f87171;" title="Restablecer demostración">
                            <i class="fa-solid fa-rotate-left"></i>
                        </button>
                    </div>
                </div>

                <!-- KPI METRICS -->
                <div class="eisen-kpi-grid">
                    <div class="eisen-kpi-card" style="border-left:3px solid #10b981;">
                        <span class="eisen-kpi-label" style="color:#10b981;">🌟 Bloques de Oro (Q2)</span>
                        <div class="eisen-kpi-number" style="color:#10b981;">${q2List.length} <small style="font-size:0.9rem; color:#a1a1aa;">(${pQ2}%)</small></div>
                        <span class="eisen-kpi-sub">ROI estratégico</span>
                    </div>

                    <div class="eisen-kpi-card" style="border-left:3px solid #ef4444;">
                        <span class="eisen-kpi-label" style="color:#ef4444;">🔥 Crisis (Q1)</span>
                        <div class="eisen-kpi-number" style="color:#ef4444;">${q1List.length}</div>
                        <span class="eisen-kpi-sub">Hacer hoy mismo</span>
                    </div>

                    <div class="eisen-kpi-card" style="border-left:3px solid #f59e0b;">
                        <span class="eisen-kpi-label" style="color:#f59e0b;">⏳ Interrupciones (Q3)</span>
                        <div class="eisen-kpi-number" style="color:#f59e0b;">${q3List.length}</div>
                        <span class="eisen-kpi-sub">Pasar la pelota</span>
                    </div>

                    <div class="eisen-kpi-card" style="border-left:3px solid #94a3b8;">
                        <span class="eisen-kpi-label" style="color:#94a3b8;">🗑️ Fugas (Q4)</span>
                        <div class="eisen-kpi-number" style="color:#94a3b8;">${q4List.length}</div>
                        <span class="eisen-kpi-sub">Eliminar sin culpa</span>
                    </div>
                </div>

                <!-- TABLA EJECUTIVA -->
                <div style="margin-top:1.5rem;">
                    <h4 style="font-size:0.92rem; font-weight:800; margin-bottom:10px; color:#ffffff;">Inventario Clasificado de Tareas</h4>
                    <div class="eisen-sheet-table-wrap">
                        <table class="eisen-sheet-table">
                            <thead>
                                <tr>
                                    <th style="width:40px;">#</th>
                                    <th>Cuadrante</th>
                                    <th>Compromiso / Tarea</th>
                                    <th>Estrategia Sugerida</th>
                                    <th style="width:90px;">Fecha</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${eisenhowerTasks.map((t, idx) => {
                                    const meta = QUADRANT_META[t.q] || QUADRANT_META.q2;
                                    return `
                                        <tr>
                                            <td style="font-family:var(--font-mono); color:#71717a;">${idx + 1}</td>
                                            <td><span class="eisen-status-pill pill-${t.q}">${meta.label.toUpperCase()}</span></td>
                                            <td style="font-weight:600; color:#ffffff;">${escapeHtml(t.text)}</td>
                                            <td style="font-size:0.76rem; color:#cbd5e1;">${meta.action}</td>
                                            <td style="font-size:0.72rem; color:#71717a; font-family:var(--font-mono);">${new Date(t.createdAt).toLocaleDateString('es-CL')}</td>
                                        </tr>
                                    `;
                                }).join("")}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
    }

    // =========================================================================
    // EXPORTADORES
    // =========================================================================
    window.eisenPrintSheet = function() {
        window.print();
    };

    window.eisenExportCsv = function() {
        let csvContent = "\uFEFF"; // UTF-8 BOM para apertura perfecta en Excel en español
        csvContent += "ID,Cuadrante,Estrategia,Tarea,Fecha_Creacion\n";

        eisenhowerTasks.forEach(t => {
            const meta = QUADRANT_META[t.q] || QUADRANT_META.q2;
            const row = [
                `"${t.id}"`,
                `"${meta.label}"`,
                `"${meta.action}"`,
                `"${t.text.replace(/"/g, '""')}"`,
                `"${new Date(t.createdAt).toLocaleString('es-CL')}"`
            ];
            csvContent += row.join(",") + "\n";
        });

        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", `Matriz_Eisenhower_${new Date().toISOString().slice(0, 10)}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    window.eisenCopyWhatsAppSummary = function() {
        const q1List = eisenhowerTasks.filter(t => t.q === "q1");
        const q2List = eisenhowerTasks.filter(t => t.q === "q2");
        const q3List = eisenhowerTasks.filter(t => t.q === "q3");
        const q4List = eisenhowerTasks.filter(t => t.q === "q4");
        const total = eisenhowerTasks.length || 1;
        const pQ2 = Math.round((q2List.length / total) * 100);

        let text = `🧭 *BALANCE DE PRIORIDADES EISENHOWER • Diego González*\n`;
        text += `📅 Fecha: ${new Date().toLocaleDateString('es-CL')}\n\n`;

        text += `🌟 *BLOQUES DE ORO Q2 (${pQ2}% Estratégico):*\n`;
        if (q2List.length > 0) {
            q2List.forEach(t => text += ` • ${t.text}\n`);
        } else {
            text += ` • (Sin bloques de oro agendados)\n`;
        }

        text += `\n🔥 *CRISIS Q1 (HACER HOY):*\n`;
        if (q1List.length > 0) {
            q1List.forEach(t => text += ` • ${t.text}\n`);
        } else {
            text += ` • Cero emergencias críticas.\n`;
        }

        if (q3List.length > 0) {
            text += `\n⏳ *DELEGAR Q3:*\n`;
            q3List.forEach(t => text += ` • ${t.text}\n`);
        }

        text += `\n📊 Total Actividades: ${eisenhowerTasks.length} | Fugas Q4: ${q4List.length}\n`;
        text += `_Generado con Matriz de Eisenhower • Administración Humana_`;

        navigator.clipboard.writeText(text).then(() => {
            alert("📋 ¡Resumen Eisenhower copiado al portapapeles!\n\nListo para pegar en WhatsApp o en tus notas de calibración.");
        }).catch(() => {
            prompt("Copia tu reporte aquí:", text);
        });
    };

    // =========================================================================
    // ACCIONES DE GESTIÓN
    // =========================================================================
    window.eisenAddTask = function() {
        const input = document.getElementById("eisen-quick-input") || document.getElementById("eisen-new-text");
        const select = document.getElementById("eisen-quadrant-select") || document.getElementById("eisen-new-q");
        if (!input || !select) return;

        const text = input.value.trim();
        const quadrant = select.value;
        if (!text) {
            alert("Por favor escribe la tarea o compromiso.");
            input.focus();
            return;
        }

        const newTask = {
            id: "e_" + Date.now(),
            q: quadrant,
            text: text,
            createdAt: Date.now()
        };

        eisenhowerTasks.unshift(newTask);
        input.value = "";
        saveEisenhowerTasks();
    };

    window.eisenMoveTask = function(taskId, targetQuadrant) {
        const task = eisenhowerTasks.find(t => t.id === taskId);
        if (task) {
            task.q = targetQuadrant;
            saveEisenhowerTasks();
        }
    };

    window.eisenDeleteTask = function(taskId) {
        if (confirm("¿Eliminar este compromiso de la Matriz?")) {
            eisenhowerTasks = eisenhowerTasks.filter(t => t.id !== taskId);
            saveEisenhowerTasks();
        }
    };

    window.eisenResetDefault = function() {
        if (confirm("¿Restablecer la Matriz de Eisenhower a los datos sugeridos de ejemplo?")) {
            eisenhowerTasks = JSON.parse(JSON.stringify(DEFAULT_EISENHOWER_TASKS));
            saveEisenhowerTasks();
        }
    };

    function escapeHtml(str) {
        if (!str) return "";
        return str
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    window.initEisenhowerEngine = initEisenhowerEngine;

    document.addEventListener("DOMContentLoaded", () => {
        if (window.EISENHOWER_AUTO_INIT !== false) {
            initEisenhowerEngine({
                storageKey: (window.CLIENT_CONFIG && window.CLIENT_CONFIG.clientId) 
                    ? `${window.CLIENT_CONFIG.clientId}_eisenhower` 
                    : "ah_client_eisenhower"
            });
        }
    });

})();
