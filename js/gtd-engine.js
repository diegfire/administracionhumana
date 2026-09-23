/**
 * AICC GTD PRO HUMANIZADO (Getting Things Done Mobile-First & Mini Dashboard)
 * Metodología: Administración Humana | Diego González Yáñez
 * Basado en: HERRAMIENTAS FULL.pdf (Páginas 38 a 42) & David Allen
 * 
 * Árbol de Decisión Completo:
 * 1. INBOX (El Cubo de Basura Mental / Vaciado de RAM):
 *    - Captura rápida sin juicio ni fricción.
 * 2. ACLARAR (Separar la Ropa Sucia - Wizard 1-a-1):
 *    - ¿Es Accionable?
 *      - NO -> 🗑️ Descartar (Fuga) | 💡 Incubar (Algún Día/Quizás) | 📁 Archivar (Referencia)
 *      - SÍ ->
 *        - ¿Toma < 2 minutos? -> ⚡ ¡Hacerlo YA! (Regla 2 Min con cronómetro)
 *        - ¿Requiere > 1 paso? -> 🚀 Proyecto (+ Siguiente Acción física)
 *        - ¿Quién lo hace? -> ⏳ Delegar / En Espera (Responsable + Fecha)
 *        - Para mí -> 🎯 Próxima Acción por Contexto (@computador, @llamadas, @calle, @casa, @oficina)
 * 3. FOCO ACTIVO: Límite Estricto Monotarea WIP = 2.
 * 4. MINI DASHBOARD & HOJA DE ESTADO:
 *    - Métricas de RAM psíquica e Inbox Zero.
 *    - Distribución contextual.
 *    - Tabla ejecutiva imprimible (1 hoja Carta/A4).
 *    - Exportación a Excel (CSV con UTF-8 BOM) y Copiar para WhatsApp.
 */

(function() {
    let gtdTasks = [];
    let gtdStorageKey = "ah_client_gtd";
    let activeTab = "inbox"; // 'inbox', 'foco', 'proximas', 'proyectos', 'espera', 'incubadora', 'descartes', 'archivo', 'victorias', 'dashboard'
    let inboxFilterPriority = "all"; // 'all', '1', '2', '3', '4'
    let contextFilter = "all"; // 'all', '@computador', '@llamadas', '@calle', '@casa', '@oficina', '@conversaciones'
    let clarifyWizardIndex = 0; // Para el asistente 1-a-1 de Inbox Zero

    const CONTEXT_LIST = [
        { id: "@computador", label: "💻 @computador", icon: "fa-solid fa-laptop" },
        { id: "@llamadas", label: "📞 @llamadas", icon: "fa-solid fa-phone" },
        { id: "@calle", label: "🚗 @calle / recados", icon: "fa-solid fa-car-side" },
        { id: "@casa", label: "🏠 @casa / taller", icon: "fa-solid fa-house" },
        { id: "@oficina", label: "🏢 @oficina / local", icon: "fa-solid fa-building" },
        { id: "@conversaciones", label: "🗣️ @conversaciones", icon: "fa-solid fa-comments" },
        { id: "@general", label: "📌 @general", icon: "fa-solid fa-tag" }
    ];

    const DEFAULT_TASKS = [
        { 
            id: "gtd_1", 
            text: "Cerrar propuesta de consultoría para nuevo cliente", 
            status: "foco", 
            priority: 1, 
            context: "@computador", 
            actionable: true,
            isProject: false,
            createdAt: Date.now() - 3600000 
        },
        { 
            id: "gtd_2", 
            text: "Comprar insumos de limpieza y boquillas Kärcher", 
            status: "foco", 
            priority: 2, 
            context: "@calle", 
            actionable: true,
            isProject: false,
            createdAt: Date.now() - 7200000 
        },
        { 
            id: "gtd_3", 
            text: "Llamar a proveedor de embalajes de Risalfajores", 
            status: "proximas", 
            priority: 2, 
            context: "@llamadas", 
            actionable: true,
            isProject: false,
            createdAt: Date.now() - 12000000 
        },
        { 
            id: "gtd_4", 
            text: "Cotización de mantención enviada (esperando pago de anticipo)", 
            status: "espera", 
            priority: 3, 
            delegateTo: "Restaurante Don Carlos", 
            context: "@llamadas",
            actionable: true,
            createdAt: Date.now() - 18000000 
        },
        { 
            id: "gtd_5", 
            text: "Lanzar taller online de soberanía del tiempo", 
            status: "proyectos", 
            priority: 2, 
            context: "@computador", 
            isProject: true, 
            projectName: "Taller Productividad Humana",
            nextAction: "Definir temario de 3 módulos de 45 minutos",
            actionable: true,
            createdAt: Date.now() - 25000000 
        },
        { 
            id: "gtd_6", 
            text: "Aprender edición de efectos 3D en After Effects", 
            status: "incubadora", 
            priority: 2, 
            context: "@computador",
            actionable: false,
            createdAt: Date.now() - 36000000 
        },
        { 
            id: "gtd_7", 
            text: "Revisar notificaciones de grupos de ofertas sin urgencia", 
            status: "descartes", 
            priority: 4, 
            context: "@general",
            actionable: false,
            createdAt: Date.now() - 40000000 
        },
        { 
            id: "gtd_8", 
            text: "Manual de procedimientos y fichas técnicas de extracción", 
            status: "archivo", 
            priority: 2, 
            context: "@computador",
            actionable: false,
            createdAt: Date.now() - 50000000 
        },
        { 
            id: "gtd_9", 
            text: "Vaciado mental matutino y calibración de agenda 24h", 
            status: "victorias", 
            priority: 1, 
            context: "@general",
            actionable: true,
            completedAt: Date.now() - 1000000,
            createdAt: Date.now() - 60000000 
        }
    ];

    const PRIORITY_LABELS = {
        1: { label: "1. Urgente (Crisis)", color: "#ef4444", bg: "rgba(239, 68, 68, 0.15)", icon: "🔥" },
        2: { label: "2. Importante (Oro)", color: "#10b981", bg: "rgba(16, 185, 129, 0.15)", icon: "🌟" },
        3: { label: "3. Delegable", color: "#f59e0b", bg: "rgba(245, 158, 11, 0.15)", icon: "⏳" },
        4: { label: "4. Eliminable", color: "#94a3b8", bg: "rgba(148, 163, 184, 0.15)", icon: "🗑️" }
    };

    function initGtdEngine(config) {
        if (!config) config = {};
        gtdStorageKey = config.storageKey || "ah_client_gtd";

        const saved = localStorage.getItem(`${gtdStorageKey}_tasks_v3`);
        if (saved) {
            try {
                gtdTasks = JSON.parse(saved);
            } catch(e) {
                gtdTasks = JSON.parse(JSON.stringify(config.defaultTasks || DEFAULT_TASKS));
            }
        } else {
            // Migrar de v2 si existiera
            const legacyV2 = localStorage.getItem(`${gtdStorageKey}_tasks_v2`);
            if (legacyV2) {
                try {
                    const parsed = JSON.parse(legacyV2);
                    gtdTasks = parsed.map(t => ({
                        context: "@general",
                        actionable: t.status !== "descartes" && t.status !== "incubadora",
                        isProject: false,
                        ...t
                    }));
                } catch(e) {
                    gtdTasks = JSON.parse(JSON.stringify(config.defaultTasks || DEFAULT_TASKS));
                }
            } else {
                gtdTasks = JSON.parse(JSON.stringify(config.defaultTasks || DEFAULT_TASKS));
            }
        }

        renderGtdApp();
        setupEventListeners();
    }

    function saveGtdTasks() {
        localStorage.setItem(`${gtdStorageKey}_tasks_v3`, JSON.stringify(gtdTasks));
        renderGtdApp();
    }

    function setupEventListeners() {
        // Delegación de clicks en tabs del sidebar y barra inferior móvil
        document.addEventListener("click", (e) => {
            const tabBtn = e.target.closest(".gtd-tab-btn, .gtd-bottom-nav-item");
            if (tabBtn) {
                const tab = tabBtn.getAttribute("data-tab");
                if (tab) {
                    activeTab = tab;
                    renderGtdApp();
                }
            }
        });
    }

    function getCounts() {
        return {
            inbox: gtdTasks.filter(t => t.status === "inbox").length,
            foco: gtdTasks.filter(t => t.status === "foco").length,
            proximas: gtdTasks.filter(t => t.status === "proximas").length,
            proyectos: gtdTasks.filter(t => t.status === "proyectos").length,
            espera: gtdTasks.filter(t => t.status === "espera").length,
            incubadora: gtdTasks.filter(t => t.status === "incubadora").length,
            descartes: gtdTasks.filter(t => t.status === "descartes").length,
            archivo: gtdTasks.filter(t => t.status === "archivo").length,
            victorias: gtdTasks.filter(t => t.status === "victorias").length
        };
    }

    function renderGtdApp() {
        const counts = getCounts();

        // 1. Actualizar badges en todos los selectores de pestañas
        Object.keys(counts).forEach(k => {
            const badge = document.getElementById(`gtd-badge-${k}`);
            if (badge) {
                badge.innerText = k === 'foco' ? `${counts[k]}/2` : counts[k];
            }
        });

        // Actualizar clase active en botones
        document.querySelectorAll(".gtd-tab-btn, .gtd-bottom-nav-item").forEach(btn => {
            if (btn.getAttribute("data-tab") === activeTab) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });

        // 2. Contenedor principal
        const container = document.getElementById("gtd-active-container");
        if (!container) return;

        // Renderizado según pestaña activa
        if (activeTab === "dashboard") {
            renderDashboardView(container, counts);
            return;
        }

        let filtered = gtdTasks.filter(t => t.status === activeTab);
        if (activeTab === "inbox" && inboxFilterPriority !== "all") {
            filtered = filtered.filter(t => String(t.priority) === String(inboxFilterPriority));
        } else if (activeTab === "proximas" && contextFilter !== "all") {
            filtered = filtered.filter(t => t.context === contextFilter);
        }

        let headerInfo = getSectionBannerHtml(activeTab, counts);

        if (filtered.length === 0) {
            container.innerHTML = `
                ${headerInfo}
                <div class="gtd-empty-state">
                    <div class="empty-icon">${activeTab === 'inbox' ? '🎉' : '🍃'}</div>
                    <div class="empty-text">${activeTab === 'inbox' ? '¡Inbox Zero Alcanzado!' : 'No hay elementos en esta sección.'}</div>
                    <small>${activeTab === 'inbox' ? 'Tu mente está despejada. La RAM psíquica está libre de bucles abiertos.' : 'Captura un nuevo pensamiento arriba para procesarlo.'}</small>
                </div>
            `;
            return;
        }

        container.innerHTML = `
            ${headerInfo}
            <div class="gtd-cards-list">
                ${filtered.map(t => renderGtdCard(t)).join("")}
            </div>
        `;
    }

    function getSectionBannerHtml(tab, counts) {
        if (tab === "inbox") {
            return `
                <div class="gtd-section-banner inbox-banner">
                    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
                        <div>
                            <div class="banner-title">📥 1. Bandeja de Entrada (Vaciado Mental Rápido)</div>
                            <div class="banner-desc">Vacía todo lo que te dé vueltas en la cabeza sin juzgarlo. Abre el <strong>Asistente de Aclaración</strong> para dejar tu Inbox en cero.</div>
                        </div>
                        <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                            ${counts.inbox > 0 ? `
                                <button class="btn-clarify-wizard-trigger" onclick="window.gtdOpenClarifyWizard()" title="Procesar el Inbox paso a paso">
                                    <i class="fa-solid fa-wand-magic-sparkles"></i> ⚡ Aclarar Inbox (${counts.inbox})
                                </button>
                            ` : ""}
                            <div class="gtd-priority-filter-bar">
                                <span style="font-size:0.72rem; color:#a1a1aa; font-weight:700;">Filtrar:</span>
                                <button class="gtd-filter-pill ${inboxFilterPriority === 'all' ? 'active' : ''}" onclick="window.gtdSetInboxFilter('all')">Todos</button>
                                <button class="gtd-filter-pill ${inboxFilterPriority === '1' ? 'active' : ''}" onclick="window.gtdSetInboxFilter('1')" style="color:#ef4444;">P1</button>
                                <button class="gtd-filter-pill ${inboxFilterPriority === '2' ? 'active' : ''}" onclick="window.gtdSetInboxFilter('2')" style="color:#10b981;">P2</button>
                                <button class="gtd-filter-pill ${inboxFilterPriority === '3' ? 'active' : ''}" onclick="window.gtdSetInboxFilter('3')" style="color:#f59e0b;">P3</button>
                                <button class="gtd-filter-pill ${inboxFilterPriority === '4' ? 'active' : ''}" onclick="window.gtdSetInboxFilter('4')" style="color:#94a3b8;">P4</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (tab === "foco") {
            const focoCount = counts.foco;
            return `
                <div class="gtd-section-banner foco-banner">
                    <div class="banner-title">🎯 2. En Foco Actual (Monotarea con Límite Estricto WIP = 2)</div>
                    <div class="banner-desc">
                        El principio de Administración Humana protege tu cerebro de la parálisis: <strong>máximo 2 tareas activas</strong>.
                        Estado: <strong style="color:${focoCount >= 2 ? '#ef4444' : '#10b981'};">${focoCount} de 2 focos activos</strong>.
                    </div>
                </div>
            `;
        } else if (tab === "proximas") {
            return `
                <div class="gtd-section-banner proximas-banner">
                    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
                        <div>
                            <div class="banner-title">⚡ 3. Próximas Acciones (Listas Contextuales @)</div>
                            <div class="banner-desc">Acciones físicas listas para ejecutar según tu entorno (computador, llamadas, calle, etc.).</div>
                        </div>
                        <div class="gtd-context-filter-bar">
                            <span style="font-size:0.72rem; color:#a1a1aa; font-weight:700;">Contexto:</span>
                            <button class="gtd-filter-pill ${contextFilter === 'all' ? 'active' : ''}" onclick="window.gtdSetContextFilter('all')">Todos</button>
                            ${CONTEXT_LIST.map(c => `
                                <button class="gtd-filter-pill ${contextFilter === c.id ? 'active' : ''}" onclick="window.gtdSetContextFilter('${c.id}')">${c.label}</button>
                            `).join("")}
                        </div>
                    </div>
                </div>
            `;
        } else if (tab === "proyectos") {
            return `
                <div class="gtd-section-banner proyectos-banner">
                    <div class="banner-title">🚀 4. Proyectos Activos (Resultados de Múltiples Pasos)</div>
                    <div class="banner-desc">Todo resultado deseado que requiere más de una acción física. Cada proyecto DEBE tener una "Siguiente Acción" definida.</div>
                </div>
            `;
        } else if (tab === "espera") {
            return `
                <div class="gtd-section-banner espera-banner">
                    <div class="banner-title">⏳ 5. En Espera / Delegado (Dependencias Externas)</div>
                    <div class="banner-desc">Entregado a un tercero o esperando respuesta. No consume tu RAM mental de hoy pero tiene seguimiento activo.</div>
                </div>
            `;
        } else if (tab === "incubadora") {
            return `
                <div class="gtd-section-banner incubadora-banner">
                    <div class="banner-title">💡 6. Incubadora (Algún Día / Quizás)</div>
                    <div class="banner-desc">Ideas y proyectos futuros que te entusiasman pero que NO debes tocar esta semana para no dispersar tu energía.</div>
                </div>
            `;
        } else if (tab === "descartes") {
            return `
                <div class="gtd-section-banner descartes-banner">
                    <div class="banner-title">🗑️ 7. Descartes Conscientes (Higiene Mental Cero Culpa)</div>
                    <div class="banner-desc">Tareas que decidiste eliminar conscientemente. Decirle NO a cosas innecesarias es el verdadero superpoder de la productividad.</div>
                </div>
            `;
        } else if (tab === "archivo") {
            return `
                <div class="gtd-section-banner archivo-banner">
                    <div class="banner-title">📁 8. Archivo & Referencia (Material de Consulta)</div>
                    <div class="banner-desc">Información valiosa, minutas o datos que no requieren acción física pero deben estar a mano.</div>
                </div>
            `;
        } else if (tab === "victorias") {
            return `
                <div class="gtd-section-banner victorias-banner">
                    <div class="banner-title">🏆 9. Victorias & Logros Alcanzados</div>
                    <div class="banner-desc">La evidencia tangible de tu avance diario. Apaga la sensación ilusoria de "sentir que no hice nada hoy".</div>
                </div>
            `;
        }
        return "";
    }

    function renderGtdCard(task) {
        const isInbox = task.status === "inbox";
        const isFoco = task.status === "foco";
        const isProximas = task.status === "proximas";
        const isProyectos = task.status === "proyectos";
        const isEspera = task.status === "espera";
        const isIncubadora = task.status === "incubadora";
        const isDescartes = task.status === "descartes";
        const isArchivo = task.status === "archivo";
        const isVictorias = task.status === "victorias";

        const pData = PRIORITY_LABELS[task.priority || 2] || PRIORITY_LABELS[2];
        const ctxData = CONTEXT_LIST.find(c => c.id === task.context) || { label: task.context || "@general", icon: "fa-solid fa-tag" };

        return `
            <div class="gtd-card-item gtd-status-${task.status}" id="card_${task.id}">
                <div class="gtd-card-header">
                    <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                        <span class="gtd-priority-badge" style="background:${pData.bg}; color:${pData.color}; border:1px solid ${pData.color}40;">
                            ${pData.icon} ${pData.label}
                        </span>
                        <span class="gtd-context-badge">
                            <i class="${ctxData.icon}"></i> ${ctxData.label}
                        </span>
                        ${task.delegateTo ? `<span class="gtd-delegate-badge"><i class="fa-solid fa-user-clock"></i> Resp: ${escapeHtml(task.delegateTo)}</span>` : ""}
                        ${task.isProject ? `<span class="gtd-project-badge"><i class="fa-solid fa-folder-tree"></i> Proyecto</span>` : ""}
                    </div>
                    <div class="gtd-card-time">${formatTimeAgo(task.createdAt)}</div>
                </div>

                <div class="gtd-card-text ${isVictorias ? 'completed-text' : ''} ${isDescartes ? 'discarded-text' : ''}">
                    ${escapeHtml(task.text)}
                </div>

                ${task.isProject && task.nextAction ? `
                    <div class="gtd-card-next-action">
                        <strong><i class="fa-solid fa-shoe-prints"></i> Siguiente Acción Física:</strong> ${escapeHtml(task.nextAction)}
                    </div>
                ` : ""}

                <!-- ACCIONES RÁPIDAS TÁCTILES (MOBILE-FIRST) -->
                <div class="gtd-card-actions">
                    ${isInbox ? `
                        <button class="btn-gtd-action btn-clarify" onclick="window.gtdClarifySingle('${task.id}')" title="Aclarar esta tarea paso a paso">
                            <i class="fa-solid fa-wand-magic-sparkles"></i> Aclarar (Flujo)
                        </button>
                    ` : ""}

                    ${!isFoco && !isVictorias && !isDescartes ? `
                        <button class="btn-gtd-action btn-foco" onclick="window.gtdMoveTask('${task.id}', 'foco')" title="Poner en Foco Activo (Límite 2)">
                            🎯 Foco (WIP 2)
                        </button>
                    ` : ""}

                    ${!isProximas && !isVictorias && !isDescartes ? `
                        <button class="btn-gtd-action btn-proximas" onclick="window.gtdMoveTask('${task.id}', 'proximas')" title="Mover a Próximas Acciones">
                            ⚡ Próximas
                        </button>
                    ` : ""}

                    ${!isEspera && !isVictorias && !isDescartes ? `
                        <button class="btn-gtd-action btn-espera" onclick="window.gtdPromptDelegate('${task.id}')" title="Delegar o esperar respuesta de alguien">
                            ⏳ Delegar
                        </button>
                    ` : ""}

                    ${!isIncubadora && !isVictorias && !isDescartes ? `
                        <button class="btn-gtd-action btn-incubadora" onclick="window.gtdMoveTask('${task.id}', 'incubadora')" title="Guardar en Incubadora">
                            💡 Incubar
                        </button>
                    ` : ""}

                    ${!isVictorias ? `
                        <button class="btn-gtd-action btn-done" onclick="window.gtdMoveTask('${task.id}', 'victorias')" title="Marcar como Victoria">
                            ✅ Listo
                        </button>
                    ` : `
                        <button class="btn-gtd-action btn-inbox" onclick="window.gtdMoveTask('${task.id}', 'inbox')" title="Reabrir en Inbox">
                            ↩️ Reabrir
                        </button>
                    `}

                    ${!isDescartes ? `
                        <button class="btn-gtd-action btn-delete" onclick="window.gtdDiscardTask('${task.id}')" title="Descartar sin culpa">
                            🗑️ Descartar
                        </button>
                    ` : `
                        <button class="btn-gtd-action btn-inbox" onclick="window.gtdMoveTask('${task.id}', 'inbox')" title="Recuperar a Inbox">
                            ↩️ Recuperar
                        </button>
                        <button class="btn-gtd-action btn-delete-perm" onclick="window.gtdDeletePerm('${task.id}')" title="Eliminar definitivamente">
                            ✕ Borrar
                        </button>
                    `}
                </div>
            </div>
        `;
    }

    // =========================================================================
    // MINI DASHBOARD & HOJA DE ESTADO EXECUTIVA
    // =========================================================================
    function renderDashboardView(container, counts) {
        const total = gtdTasks.length;
        const totalActivas = counts.foco + counts.proximas + counts.proyectos + counts.espera;
        const processed = total - counts.inbox;
        const inboxZeroPct = total > 0 ? Math.round((processed / total) * 100) : 100;
        const victoryRate = total > 0 ? Math.round((counts.victorias / total) * 100) : 0;

        // Conteo por contexto
        const ctxCounts = {};
        CONTEXT_LIST.forEach(c => ctxCounts[c.id] = 0);
        gtdTasks.filter(t => t.status === "proximas" || t.status === "foco").forEach(t => {
            const ctx = t.context || "@general";
            ctxCounts[ctx] = (ctxCounts[ctx] || 0) + 1;
        });

        container.innerHTML = `
            <div class="gtd-dashboard-wrapper">
                <div class="gtd-section-banner dashboard-banner">
                    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
                        <div>
                            <div class="banner-title"><i class="fa-solid fa-chart-pie" style="color:#38bdf8;"></i> Mini Dashboard de Salud Mental & Carga Cognitiva</div>
                            <div class="banner-desc">Visión de pájaro de tus frentes abiertos, tu índice de vaciado y el estado de tu sistema GTD.</div>
                        </div>
                        <div class="gtd-dash-actions">
                            <button class="btn-dash-action" onclick="window.gtdPrintSheet()"><i class="fa-solid fa-print"></i> 🖨️ Imprimir Hoja A4</button>
                            <button class="btn-dash-action" onclick="window.gtdExportCsv()"><i class="fa-solid fa-file-excel"></i> 📊 Exportar Excel (CSV)</button>
                            <button class="btn-dash-action" onclick="window.gtdCopyWhatsAppSummary()"><i class="fa-brands fa-whatsapp"></i> 📋 Copiar WhatsApp</button>
                        </div>
                    </div>
                </div>

                <!-- KPI CARDS -->
                <div class="gtd-kpi-grid">
                    <div class="gtd-kpi-card">
                        <div class="kpi-header">
                            <span>Índice Inbox Zero</span>
                            <span class="kpi-icon">📥</span>
                        </div>
                        <div class="kpi-val" style="color:${inboxZeroPct >= 80 ? '#10b981' : (inboxZeroPct >= 50 ? '#f59e0b' : '#ef4444')};">
                            ${inboxZeroPct}%
                        </div>
                        <div class="kpi-desc">${counts.inbox} pendientes por aclarar</div>
                    </div>

                    <div class="gtd-kpi-card">
                        <div class="kpi-header">
                            <span>Foco Monotarea (WIP 2)</span>
                            <span class="kpi-icon">🎯</span>
                        </div>
                        <div class="kpi-val" style="color:${counts.foco <= 2 ? '#10b981' : '#ef4444'};">
                            ${counts.foco}/2
                        </div>
                        <div class="kpi-desc">${counts.foco === 2 ? 'Límite óptimo alcanzado' : (counts.foco < 2 ? 'Espacio para nuevo foco' : '⚠️ Sobrecarga cognitiva')}</div>
                    </div>

                    <div class="gtd-kpi-card">
                        <div class="kpi-header">
                            <span>Victorias Completadas</span>
                            <span class="kpi-icon">🏆</span>
                        </div>
                        <div class="kpi-val" style="color:#c084fc;">
                            ${counts.victorias}
                        </div>
                        <div class="kpi-desc">${victoryRate}% del volumen total cerrado</div>
                    </div>

                    <div class="gtd-kpi-card">
                        <div class="kpi-header">
                            <span>En Espera / Terceros</span>
                            <span class="kpi-icon">⏳</span>
                        </div>
                        <div class="kpi-val" style="color:#f59e0b;">
                            ${counts.espera}
                        </div>
                        <div class="kpi-desc">Dependencias sin gastar tu RAM</div>
                    </div>
                </div>

                <!-- CONTEXTOS & SALUD MENTAL -->
                <div class="gtd-contexts-bar-card">
                    <div style="font-size:0.85rem; font-weight:800; color:#fff; margin-bottom:0.75rem;">
                        📍 Distribución de Tareas Activas por Contexto de Ejecución (@)
                    </div>
                    <div class="gtd-context-chips-grid">
                        ${CONTEXT_LIST.map(c => `
                            <div class="gtd-ctx-chip ${ctxCounts[c.id] > 0 ? 'has-tasks' : ''}">
                                <span><i class="${c.icon}"></i> ${c.label}</span>
                                <strong>${ctxCounts[c.id]}</strong>
                            </div>
                        `).join("")}
                    </div>
                </div>

                <!-- HOJITA DE ESTADO (TABLA EJECUTIVA COMPACTA) -->
                <div class="gtd-sheet-container" id="gtd-printable-sheet">
                    <div class="sheet-header">
                        <div>
                            <h3 style="font-family:var(--font-heading); font-size:1.15rem; font-weight:800; color:#fff;">
                                📄 Hoja de Estado Operativo • GTD Humanizado
                            </h3>
                            <p style="font-size:0.78rem; color:#94a3b8;">
                                Cliente / Consultor: <strong>${(window.CLIENT_CONFIG && window.CLIENT_CONFIG.nombre) || 'Diego González Yáñez'}</strong> • Fecha: ${new Date().toLocaleDateString('es-CL')}
                            </p>
                        </div>
                        <div class="sheet-status-badge">
                            ${counts.foco} en Foco • ${counts.proximas} Próximas • ${counts.espera} En Espera
                        </div>
                    </div>

                    <div class="sheet-table-responsive">
                        <table class="gtd-sheet-table">
                            <thead>
                                <tr>
                                    <th style="width:40px;">#</th>
                                    <th style="width:90px;">Estado</th>
                                    <th style="width:110px;">Prioridad</th>
                                    <th>Tarea / Siguiente Acción</th>
                                    <th style="width:140px;">Contexto / Resp</th>
                                    <th style="width:80px;">Registro</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${gtdTasks.filter(t => t.status !== "descartes").map((t, idx) => {
                                    const p = PRIORITY_LABELS[t.priority || 2] || PRIORITY_LABELS[2];
                                    const ctx = CONTEXT_LIST.find(c => c.id === t.context) || { label: t.context || "@general" };
                                    return `
                                        <tr class="sheet-row status-${t.status}">
                                            <td style="font-family:var(--font-mono); color:#71717a;">${idx + 1}</td>
                                            <td><span class="sheet-status-pill pill-${t.status}">${t.status.toUpperCase()}</span></td>
                                            <td><span style="color:${p.color}; font-weight:700; font-size:0.75rem;">${p.icon} P${t.priority || 2}</span></td>
                                            <td style="font-weight:600; color:#fff;">
                                                ${escapeHtml(t.text)}
                                                ${t.isProject && t.nextAction ? `<div style="font-size:0.74rem; color:#38bdf8;">➔ Paso: ${escapeHtml(t.nextAction)}</div>` : ''}
                                            </td>
                                            <td style="font-size:0.75rem; color:#cbd5e1;">
                                                <div>${ctx.label}</div>
                                                ${t.delegateTo ? `<div style="color:#f59e0b; font-weight:700;">Resp: ${escapeHtml(t.delegateTo)}</div>` : ''}
                                            </td>
                                            <td style="font-size:0.72rem; color:#71717a; font-family:var(--font-mono);">${formatTimeAgo(t.createdAt)}</td>
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
    // ASISTENTE DE ACLARACIÓN 1-A-1 (CLARIFY WIZARD / BOTTOM SHEET)
    // =========================================================================
    window.gtdOpenClarifyWizard = function() {
        const inboxTasks = gtdTasks.filter(t => t.status === "inbox");
        if (inboxTasks.length === 0) {
            alert("¡Tu Inbox ya está en cero! No hay tareas pendientes por aclarar.");
            return;
        }
        clarifyWizardIndex = 0;
        showClarifyModal(inboxTasks[0], 0, inboxTasks.length);
    };

    window.gtdClarifySingle = function(taskId) {
        const task = gtdTasks.find(t => t.id === taskId);
        if (!task) return;
        showClarifyModal(task, 1, 1);
    };

    function showClarifyModal(task, currentNum, totalNum) {
        // Remover modal existente si hubiera
        const existing = document.getElementById("gtd-clarify-modal");
        if (existing) existing.remove();

        const p = PRIORITY_LABELS[task.priority || 2] || PRIORITY_LABELS[2];

        const modal = document.createElement("div");
        modal.id = "gtd-clarify-modal";
        modal.className = "gtd-clarify-overlay";
        modal.innerHTML = `
            <div class="gtd-clarify-sheet">
                <div class="clarify-header">
                    <div>
                        <span class="clarify-step-badge">Paso 2: Aclarar • Separar la Ropa Sucia</span>
                        <h3 class="clarify-title">¿Qué significa exactamente este pensamiento?</h3>
                    </div>
                    <button class="btn-clarify-close" onclick="window.gtdCloseClarifyModal()">&times;</button>
                </div>

                <div class="clarify-task-box">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                        <span style="font-size:0.75rem; color:${p.color}; font-weight:800;">${p.icon} ${p.label}</span>
                        <span style="font-size:0.75rem; color:#71717a; font-family:var(--font-mono);">Ítem ${currentNum + 1} de ${totalNum}</span>
                    </div>
                    <div class="clarify-task-text">${escapeHtml(task.text)}</div>
                </div>

                <!-- PASO 1: ¿ES ACCIONABLE? -->
                <div id="clarify-step-actionable" class="clarify-decision-block">
                    <div class="clarify-question">1. ¿Es realizable / accionable en el mundo físico?</div>
                    <div class="clarify-btn-group-2">
                        <button class="btn-clarify-choice choice-no" onclick="window.gtdClarifyBranchNo('${task.id}')">
                            <i class="fa-solid fa-xmark"></i> <strong>NO es accionable</strong>
                            <small>Es solo una idea, basura o material de consulta</small>
                        </button>
                        <button class="btn-clarify-choice choice-yes" onclick="window.gtdClarifyBranchYes('${task.id}')">
                            <i class="fa-solid fa-check"></i> <strong>SÍ es accionable</strong>
                            <small>Requiere una acción física de mi parte o de otro</small>
                        </button>
                    </div>
                </div>

                <!-- SUB-RAMA NO ACCIONABLE -->
                <div id="clarify-branch-no-options" class="clarify-sub-options" style="display:none;">
                    <div class="clarify-question" style="color:#fca5a5;">¿Qué destino le damos?</div>
                    <div class="clarify-btn-grid-3">
                        <button class="btn-clarify-sub-btn sub-trash" onclick="window.gtdExecuteClarify('${task.id}', 'descartes')">
                            🗑️ <strong>Descartar</strong>
                            <small>Higiene mental cero culpa</small>
                        </button>
                        <button class="btn-clarify-sub-btn sub-someday" onclick="window.gtdExecuteClarify('${task.id}', 'incubadora')">
                            💡 <strong>Incubadora</strong>
                            <small>Algún día / quizás</small>
                        </button>
                        <button class="btn-clarify-sub-btn sub-ref" onclick="window.gtdExecuteClarify('${task.id}', 'archivo')">
                            📁 <strong>Archivar</strong>
                            <small>Material de referencia</small>
                        </button>
                    </div>
                </div>

                <!-- SUB-RAMA SÍ ACCIONABLE -->
                <div id="clarify-branch-yes-options" class="clarify-sub-options" style="display:none;">
                    <div class="clarify-question" style="color:#6ee7b7;">2. Regla de Oro: ¿Toma menos de 2 minutos hacerlo?</div>
                    <div class="clarify-btn-group-2" style="margin-bottom:12px;">
                        <button class="btn-clarify-sub-btn sub-2min" onclick="window.gtdStartTwoMinuteTimer('${task.id}')">
                            ⚡ <strong>¡HACERLO YA! (&lt; 2 min)</strong>
                            <small>Regla de los 2 Minutos de David Allen</small>
                        </button>
                        <button class="btn-clarify-sub-btn" onclick="window.gtdClarifyMoreThanTwoMin('${task.id}')">
                            ⏱️ <strong>Toma más de 2 minutos</strong>
                            <small>Organizar en listas contextuales</small>
                        </button>
                    </div>
                </div>

                <!-- ORGANIZAR TAREA QUE TOMA MÁS DE 2 MIN -->
                <div id="clarify-more-than-2min" class="clarify-sub-options" style="display:none;">
                    <div class="clarify-question" style="color:#93c5fd;">3. ¿Quién lo hace y en qué contexto?</div>
                    
                    <div style="display:flex; flex-direction:column; gap:10px; margin-bottom:14px;">
                        <div>
                            <label style="font-size:0.75rem; color:#cbd5e1; font-weight:700; display:block; margin-bottom:4px;">Contexto de ejecución (@):</label>
                            <select id="clarify-context-select" class="clarify-select">
                                ${CONTEXT_LIST.map(c => `<option value="${c.id}">${c.label}</option>`).join("")}
                            </select>
                        </div>

                        <div style="display:flex; gap:10px; flex-wrap:wrap;">
                            <label style="display:flex; align-items:center; gap:6px; font-size:0.8rem; color:#fff; cursor:pointer;">
                                <input type="checkbox" id="clarify-is-project" onchange="document.getElementById('clarify-project-fields').style.display = this.checked ? 'block' : 'none'">
                                <span>🚀 Requiere más de 1 paso (Es un Proyecto)</span>
                            </label>
                        </div>

                        <div id="clarify-project-fields" style="display:none; background:rgba(56,189,248,0.08); border:1px solid rgba(56,189,248,0.25); border-radius:8px; padding:10px;">
                            <label style="font-size:0.74rem; color:#38bdf8; font-weight:700; display:block; margin-bottom:4px;">Define la Siguiente Acción Física inmediata:</label>
                            <input type="text" id="clarify-next-action-input" placeholder="Ej: Llamar a Juan para pedir medidas..." style="width:100%; background:#09090b; border:1px solid #333; color:#fff; padding:8px 12px; border-radius:6px; font-size:0.85rem;">
                        </div>
                    </div>

                    <div class="clarify-final-destinations">
                        <button class="btn-clarify-final final-foco" onclick="window.gtdExecuteClarifyWithContext('${task.id}', 'foco')">
                            🎯 <strong>Poner en Foco de Hoy (WIP=2)</strong>
                        </button>
                        <button class="btn-clarify-final final-proximas" onclick="window.gtdExecuteClarifyWithContext('${task.id}', 'proximas')">
                            ⚡ <strong>Guardar en Próximas Acciones</strong>
                        </button>
                        <button class="btn-clarify-final final-espera" onclick="window.gtdPromptDelegateAndClose('${task.id}')">
                            ⏳ <strong>Delegar a Tercero (En Espera)</strong>
                        </button>
                    </div>
                </div>

                <!-- MINI TIMER 2 MINUTOS -->
                <div id="clarify-2min-timer-box" class="clarify-sub-options" style="display:none; text-align:center;">
                    <div style="font-size:1.8rem; font-weight:900; color:#10b981; font-family:var(--font-mono);" id="clarify-timer-countdown">120s</div>
                    <p style="font-size:0.85rem; color:#cbd5e1; margin:8px 0 14px 0;">¡Hazlo ahora mismo! Tienes 2 minutos para sacarlo de tu cabeza.</p>
                    <button class="btn-gtd-action btn-done" style="padding:12px 24px; font-size:0.95rem; font-weight:800;" onclick="window.gtdExecuteClarify('${task.id}', 'victorias')">
                        ✅ ¡Listo! Hecho en 2 minutos (Victoria)
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
    }

    window.gtdCloseClarifyModal = function() {
        const modal = document.getElementById("gtd-clarify-modal");
        if (modal) modal.remove();
    };

    window.gtdClarifyBranchNo = function(taskId) {
        document.getElementById("clarify-step-actionable").style.display = "none";
        document.getElementById("clarify-branch-no-options").style.display = "block";
    };

    window.gtdClarifyBranchYes = function(taskId) {
        document.getElementById("clarify-step-actionable").style.display = "none";
        document.getElementById("clarify-branch-yes-options").style.display = "block";
    };

    window.gtdClarifyMoreThanTwoMin = function(taskId) {
        document.getElementById("clarify-branch-yes-options").style.display = "none";
        document.getElementById("clarify-more-than-2min").style.display = "block";
    };

    let timerInterval = null;
    window.gtdStartTwoMinuteTimer = function(taskId) {
        document.getElementById("clarify-branch-yes-options").style.display = "none";
        document.getElementById("clarify-2min-timer-box").style.display = "block";
        
        let seconds = 120;
        const countdownEl = document.getElementById("clarify-timer-countdown");
        if (timerInterval) clearInterval(timerInterval);

        timerInterval = setInterval(() => {
            seconds--;
            if (countdownEl) countdownEl.innerText = `${seconds}s`;
            if (seconds <= 0) {
                clearInterval(timerInterval);
                if (countdownEl) countdownEl.innerText = "¡Tiempo cumplido!";
            }
        }, 1000);
    };

    window.gtdExecuteClarify = function(taskId, targetStatus) {
        if (timerInterval) clearInterval(timerInterval);
        const task = gtdTasks.find(t => t.id === taskId);
        if (task) {
            task.status = targetStatus;
            saveGtdTasks();
        }
        advanceOrCloseClarifyWizard();
    };

    window.gtdExecuteClarifyWithContext = function(taskId, targetStatus) {
        const ctxSelect = document.getElementById("clarify-context-select");
        const isProjectCheck = document.getElementById("clarify-is-project");
        const nextActionInput = document.getElementById("clarify-next-action-input");

        const task = gtdTasks.find(t => t.id === taskId);
        if (task) {
            task.context = ctxSelect ? ctxSelect.value : "@general";
            task.isProject = isProjectCheck ? isProjectCheck.checked : false;
            if (task.isProject && nextActionInput && nextActionInput.value.trim()) {
                task.nextAction = nextActionInput.value.trim();
                task.status = "proyectos";
            } else {
                if (targetStatus === "foco") {
                    const currentFoco = gtdTasks.filter(t => t.status === "foco" && t.id !== taskId).length;
                    if (currentFoco >= 2) {
                        alert("⚠️ ¡Límite Estricto de 2 Focos Alcanzado!\n\nTu atención está protegida al 100%. Lo guardaremos en 'Próximas Acciones' para que lo actives cuando liberes un foco.");
                        task.status = "proximas";
                    } else {
                        task.status = "foco";
                    }
                } else {
                    task.status = targetStatus;
                }
            }
            saveGtdTasks();
        }
        advanceOrCloseClarifyWizard();
    };

    window.gtdPromptDelegateAndClose = function(taskId) {
        const task = gtdTasks.find(t => t.id === taskId);
        if (!task) return;
        const resp = prompt("¿A quién delegas esta tarea o de quién esperas respuesta? (Ej: 'Proveedor Juan', 'Cliente X'):", task.delegateTo || "");
        if (resp !== null) {
            task.delegateTo = resp.trim() || "Tercero";
            task.status = "espera";
            saveGtdTasks();
        }
        advanceOrCloseClarifyWizard();
    };

    function advanceOrCloseClarifyWizard() {
        window.gtdCloseClarifyModal();
        const remainingInbox = gtdTasks.filter(t => t.status === "inbox");
        if (remainingInbox.length > 0) {
            // Abrir automáticamente el siguiente elemento
            showClarifyModal(remainingInbox[0], 0, remainingInbox.length);
        } else {
            // Inbox Zero celebration
            renderGtdApp();
            setTimeout(() => {
                alert("🎉 ¡INBOX ZERO ALCANZADO!\n\nHas procesado y aclarado todos los pensamientos de tu bandeja de entrada.\nTu RAM cerebral está despejada y tus compromisos están bajo control.");
            }, 200);
        }
    }

    // =========================================================================
    // EXPORTADORES (CSV / WHATSAPP / IMPRIMIR)
    // =========================================================================
    window.gtdPrintSheet = function() {
        window.print();
    };

    window.gtdExportCsv = function() {
        let csvContent = "\uFEFF"; // UTF-8 BOM para apertura perfecta en Excel
        csvContent += "ID,Estado,Prioridad,Tarea,Contexto,Responsable,Fecha_Creacion\n";

        gtdTasks.forEach(t => {
            const p = (PRIORITY_LABELS[t.priority || 2] || {}).label || "Importante";
            const row = [
                `"${t.id}"`,
                `"${t.status}"`,
                `"${p}"`,
                `"${t.text.replace(/"/g, '""')}"`,
                `"${t.context || '@general'}"`,
                `"${(t.delegateTo || '').replace(/"/g, '""')}"`,
                `"${new Date(t.createdAt).toLocaleString('es-CL')}"`
            ];
            csvContent += row.join(",") + "\n";
        });

        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", `GTD_Estado_${new Date().toISOString().slice(0, 10)}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    window.gtdCopyWhatsAppSummary = function() {
        const counts = getCounts();
        const focos = gtdTasks.filter(t => t.status === "foco");
        const esperas = gtdTasks.filter(t => t.status === "espera");
        const proximas = gtdTasks.filter(t => t.status === "proximas");

        let text = `🚀 *REPORTE OPERATIVO GTD • Diego González*\n`;
        text += `📅 Fecha: ${new Date().toLocaleDateString('es-CL')}\n\n`;
        
        text += `🎯 *EN FOCO ACTIVO (WIP=2):*\n`;
        if (focos.length > 0) {
            focos.forEach(f => text += ` • ${f.text} (${f.context})\n`);
        } else {
            text += ` • (Sin tareas en foco activo hoy)\n`;
        }

        text += `\n⚡ *PRÓXIMAS ACCIONES CLAVE:*\n`;
        if (proximas.length > 0) {
            proximas.slice(0, 4).forEach(p => text += ` • ${p.text} [${p.context}]\n`);
        } else {
            text += ` • Al día.\n`;
        }

        if (esperas.length > 0) {
            text += `\n⏳ *EN ESPERA (DELEGADO):*\n`;
            esperas.forEach(e => text += ` • ${e.text} (Resp: ${e.delegateTo || 'Tercero'})\n`);
        }

        text += `\n📊 *MÉTRICAS:* Inbox: ${counts.inbox} | Victorias: ${counts.victorias} | Incubadora: ${counts.incubadora}\n`;
        text += `_Generado con Sistema GTD Humanizado • Administración Humana_`;

        navigator.clipboard.writeText(text).then(() => {
            alert("📋 ¡Resumen GTD copiado al portapapeles!\n\nListo para pegar en WhatsApp o en tus notas de cierre.");
        }).catch(() => {
            prompt("Copia tu reporte aquí:", text);
        });
    };

    // =========================================================================
    // AÑADIR TAREA INTELIGENTE
    // =========================================================================
    function addTaskInternal(customText = null, customPriority = null) {
        let input = document.getElementById("gtd-quick-input") || document.getElementById("gtd-new-input");
        let text = customText !== null ? customText : (input ? input.value.trim() : "");

        if (!text) {
            alert("Por favor escribe una idea, pendiente o preocupación para vaciar.");
            if (input) input.focus();
            return;
        }

        let priority = 2; // Por defecto: 2 (Importante)
        if (customPriority !== null) {
            priority = parseInt(customPriority, 10);
        } else {
            const pSelect = document.getElementById("gtd-priority-select") || document.getElementById("gtd-new-priority");
            if (pSelect) {
                priority = parseInt(pSelect.value, 10) || 2;
            }
        }

        const newTask = {
            id: "gtd_" + Date.now(),
            text: text,
            status: "inbox",
            priority: priority,
            context: "@general",
            actionable: true,
            isProject: false,
            createdAt: Date.now()
        };

        gtdTasks.unshift(newTask);
        if (input) input.value = "";
        saveGtdTasks();

        // Si estamos en mobile o en otra pestaña, cambiamos a inbox
        if (activeTab !== "inbox") {
            activeTab = "inbox";
            renderGtdApp();
        }
    }

    // =========================================================================
    // API PÚBLICA DE CONTROL
    // =========================================================================
    window.gtdAddTask = function() {
        addTaskInternal();
    };

    window.gtdAddFromInput = function() {
        addTaskInternal();
    };

    window.gtdSetInboxFilter = function(filterVal) {
        inboxFilterPriority = filterVal;
        renderGtdApp();
    };

    window.gtdSetContextFilter = function(ctxVal) {
        contextFilter = ctxVal;
        renderGtdApp();
    };

    window.gtdMoveTask = function(taskId, targetStatus) {
        if (targetStatus === "foco") {
            const currentFoco = gtdTasks.filter(t => t.status === "foco" && t.id !== taskId).length;
            if (currentFoco >= 2) {
                alert("⚠️ ¡Límite Estricto de 2 Focos Alcanzado!\n\nEl principio GTD de Administración Humana protege tu atención: no puedes tener más de 2 tareas activas simultáneamente.\n\nCompleta una de tus 2 tareas activas o muévela a 'Próximas Acciones' o 'En Espera' antes de sumar una nueva.");
                return;
            }
        }

        const task = gtdTasks.find(t => t.id === taskId);
        if (task) {
            task.status = targetStatus;
            if (targetStatus === "victorias") {
                task.completedAt = Date.now();
            }
            saveGtdTasks();
        }
    };

    window.gtdPromptDelegate = function(taskId) {
        const task = gtdTasks.find(t => t.id === taskId);
        if (!task) return;
        const resp = prompt("¿De quién o de qué evento estás esperando respuesta? (Ej: 'Cliente X', 'Proveedor Juan'):", task.delegateTo || "");
        if (resp !== null) {
            task.delegateTo = resp.trim() || "Tercero";
            task.status = "espera";
            saveGtdTasks();
        }
    };

    window.gtdDiscardTask = function(taskId) {
        const task = gtdTasks.find(t => t.id === taskId);
        if (!task) return;
        task.status = "descartes";
        saveGtdTasks();
    };

    window.gtdDeletePerm = function(taskId) {
        if (confirm("¿Eliminar definitivamente este elemento de la base de datos?")) {
            gtdTasks = gtdTasks.filter(t => t.id !== taskId);
            saveGtdTasks();
        }
    };

    window.gtdResetDefault = function() {
        if (confirm("¿Restablecer el sistema GTD a los datos iniciales de demostración?")) {
            gtdTasks = JSON.parse(JSON.stringify(DEFAULT_TASKS));
            saveGtdTasks();
        }
    };

    function formatTimeAgo(timestamp) {
        if (!timestamp) return "";
        const diff = Math.floor((Date.now() - timestamp) / 1000);
        if (diff < 60) return "hace un momento";
        if (diff < 3600) return `hace ${Math.floor(diff / 60)} min`;
        if (diff < 86400) return `hace ${Math.floor(diff / 3600)} h`;
        return `hace ${Math.floor(diff / 86400)} d`;
    }

    function escapeHtml(str) {
        if (!str) return "";
        return str
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    // Exponer inicializador global
    window.initGtdEngine = initGtdEngine;

    // Auto-inicialización si corresponde
    document.addEventListener("DOMContentLoaded", () => {
        if (window.GTD_AUTO_INIT !== false) {
            const key = (window.CLIENT_CONFIG && window.CLIENT_CONFIG.clientId) 
                ? `${window.CLIENT_CONFIG.clientId}_gtd` 
                : "ah_client_gtd";
            initGtdEngine({ storageKey: key });
        }
    });

})();
