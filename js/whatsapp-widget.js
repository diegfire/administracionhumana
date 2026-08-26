/**
 * =============================================================================
 * AICC WHATSAPP DIRECT SUPPORT & FEEDBACK WIDGET
 * =============================================================================
 * Widget flotante universal para comunicación directa y contextual entre
 * el cliente y Diego por WhatsApp (Texto, Audio, Pantallazos y Feedback).
 */

(function () {
    // Configuración por defecto
    const DEFAULT_PHONE = "56975590132"; // Diego (+56 9 7559 0132)
    
    function getClientInfo() {
        const name = (window.CLIENT_CONFIG && window.CLIENT_CONFIG.clientName) 
            ? window.CLIENT_CONFIG.clientName 
            : (document.title.split('•')[1] || "Cliente").trim();
        const planTitle = (document.title.split('•')[0] || "Plan de Vuelo").trim();
        return { name, planTitle };
    }

    function getActiveSectionName() {
        // Intenta obtener el botón de pestaña activo o el título de la sección visible
        const activeBtn = document.querySelector('.tab-btn.active');
        if (activeBtn) {
            return activeBtn.innerText.trim().replace(/\n/g, ' ');
        }
        const activeTab = document.querySelector('.tab-content.active');
        if (activeTab) {
            const h = activeTab.querySelector('h2, h3, .section-title');
            if (h) return h.innerText.trim();
        }
        return "General / Portada";
    }

    function renderWidget() {
        if (document.getElementById('aicc-whatsapp-widget-container')) return;

        const container = document.createElement('div');
        container.id = 'aicc-whatsapp-widget-container';
        container.innerHTML = `
            <!-- BOTÓN FLOTANTE PRINCIPAL -->
            <div id="aicc-wa-fab" class="aicc-wa-fab" title="Enviar dudas, audio o pantallazo a Diego por WhatsApp" onclick="toggleWhatsAppModal(event)">
                <div class="aicc-wa-pulse"></div>
                <div class="aicc-wa-icon">
                    <i class="fa-brands fa-whatsapp"></i>
                </div>
                <div class="aicc-wa-label">
                    <span class="aicc-wa-label-title">Hablar con Diego</span>
                    <span class="aicc-wa-label-sub">Dudas • Audio • Cambios</span>
                </div>
                <div class="aicc-wa-status-dot"></div>
            </div>

            <!-- MODAL / DRAWER CONTEXTUAL -->
            <div id="aicc-wa-modal" class="aicc-wa-modal" onclick="handleWhatsAppModalBackdrop(event)">
                <div class="aicc-wa-card" onclick="event.stopPropagation()">
                    <div class="aicc-wa-header">
                        <div class="aicc-wa-header-brand">
                            <div class="aicc-wa-avatar">
                                <i class="fa-brands fa-whatsapp"></i>
                            </div>
                            <div>
                                <h3 class="aicc-wa-title">Contacto Directo con Diego</h3>
                                <p class="aicc-wa-subtitle">Administración Humana • Soporte en Vivo</p>
                            </div>
                        </div>
                        <button class="aicc-wa-close-btn" onclick="closeWhatsAppModal()" title="Cerrar">&times;</button>
                    </div>

                    <div class="aicc-wa-body">
                        <!-- Contexto Inteligente -->
                        <div class="aicc-wa-context-badge">
                            <span class="aicc-wa-pin-icon"><i class="fa-solid fa-location-dot"></i></span>
                            <div>
                                <span class="aicc-wa-context-lbl">Ubicación actual en tu Plan:</span>
                                <strong id="aicc-wa-current-section" class="aicc-wa-context-val">Cargando sección...</strong>
                            </div>
                        </div>

                        <!-- Opciones Rápidas de Consulta -->
                        <div class="aicc-wa-quick-tags">
                            <span class="aicc-wa-tag" onclick="setQuickTopic('💡 Tengo una duda sobre esta sección')">💡 Duda rápida</span>
                            <span class="aicc-wa-tag" onclick="setQuickTopic('🔄 Quiero ajustar un horario o tarea')">🔄 Ajustar horario/tarea</span>
                            <span class="aicc-wa-tag" onclick="setQuickTopic('🎙️ Te envío un audio con comentarios')">🎙️ Enviar audio</span>
                            <span class="aicc-wa-tag" onclick="setQuickTopic('📸 Te adjunto pantallazo de un detalle')">📸 Enviar captura</span>
                        </div>

                        <!-- Campo de Texto -->
                        <div class="aicc-wa-input-group">
                            <label for="aicc-wa-custom-msg" class="aicc-wa-input-label">Escribe tu mensaje o consulta (opcional):</label>
                            <textarea id="aicc-wa-custom-msg" class="aicc-wa-textarea" placeholder="Hola Diego, sobre este punto quiero consultarte..." rows="3"></textarea>
                        </div>

                        <!-- Tip Multimedia (Audio + Pantallazo) -->
                        <div class="aicc-wa-tip-box">
                            <div class="aicc-wa-tip-icon"><i class="fa-solid fa-circle-info"></i></div>
                            <div class="aicc-wa-tip-text">
                                Al abrir tu WhatsApp podrás <strong>grabar una nota de voz</strong> o <strong>adjuntar una foto/pantallazo</strong> directamente en el chat.
                            </div>
                        </div>

                        <!-- Acciones Principales -->
                        <button class="aicc-wa-btn-submit" onclick="sendToWhatsApp()">
                            <i class="fa-brands fa-whatsapp"></i> Abrir Chat de WhatsApp con Diego
                        </button>

                        <div class="aicc-wa-direct-link-wrap">
                            <a href="javascript:void(0)" onclick="sendToWhatsApp(true)" class="aicc-wa-direct-link">
                                O abrir WhatsApp directo sin mensaje previo &rarr;
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(container);
    }

    // Estilos CSS encapsulados para el Widget
    const styles = `
        /* CONTENEDOR FLOTANTE */
        #aicc-whatsapp-widget-container {
            font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
            position: relative;
            z-index: 999990;
        }

        /* FAB PRINCIPAL */
        .aicc-wa-fab {
            position: fixed;
            bottom: max(20px, env(safe-area-inset-bottom, 20px));
            right: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
            background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
            color: #ffffff;
            padding: 10px 18px 10px 14px;
            border-radius: 50px;
            box-shadow: 0 8px 24px rgba(37, 211, 102, 0.4), 0 2px 6px rgba(0,0,0,0.5);
            cursor: pointer;
            border: 1px solid rgba(255, 255, 255, 0.25);
            transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            user-select: none;
            -webkit-tap-highlight-color: transparent;
            z-index: 999991;
        }

        .aicc-wa-fab:hover {
            transform: translateY(-3px) scale(1.03);
            box-shadow: 0 12px 30px rgba(37, 211, 102, 0.55), 0 4px 10px rgba(0,0,0,0.6);
            background: linear-gradient(135deg, #2ce670 0%, #15a191 100%);
        }

        .aicc-wa-fab:active {
            transform: translateY(0) scale(0.98);
        }

        .aicc-wa-icon {
            font-size: 1.65rem;
            display: flex;
            align-items: center;
            justify-content: center;
            line-height: 1;
        }

        .aicc-wa-label {
            display: flex;
            flex-direction: column;
            text-align: left;
            line-height: 1.2;
        }

        .aicc-wa-label-title {
            font-size: 0.86rem;
            font-weight: 800;
            letter-spacing: -0.2px;
            color: #ffffff;
        }

        .aicc-wa-label-sub {
            font-size: 0.68rem;
            font-weight: 500;
            color: rgba(255, 255, 255, 0.9);
            white-space: nowrap;
        }

        .aicc-wa-status-dot {
            width: 9px;
            height: 9px;
            background: #ffffff;
            border-radius: 50%;
            margin-left: 2px;
            animation: aicc-wa-blink 2s infinite ease-in-out;
        }

        .aicc-wa-pulse {
            position: absolute;
            top: -4px; left: -4px; right: -4px; bottom: -4px;
            border-radius: 50px;
            border: 2px solid #25D366;
            opacity: 0;
            animation: aicc-wa-ripple 2.5s infinite cubic-bezier(0.25, 1, 0.5, 1);
            pointer-events: none;
        }

        @keyframes aicc-wa-ripple {
            0% { transform: scale(0.95); opacity: 0.8; }
            70% { transform: scale(1.15); opacity: 0; }
            100% { transform: scale(1.15); opacity: 0; }
        }

        @keyframes aicc-wa-blink {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.4; transform: scale(0.85); }
        }

        /* MODAL Y BACKDROP */
        .aicc-wa-modal {
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0, 0, 0, 0.75);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            display: none;
            align-items: center;
            justify-content: center;
            padding: 1rem;
            z-index: 999995;
            opacity: 0;
            transition: opacity 0.2s ease;
        }

        .aicc-wa-modal.active {
            display: flex;
            opacity: 1;
        }

        .aicc-wa-card {
            background: #0d0d0d;
            border: 1px solid #282828;
            border-radius: 18px;
            width: 100%;
            max-width: 440px;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8), 0 0 25px rgba(37, 211, 102, 0.15);
            overflow: hidden;
            animation: aicc-wa-slide-up 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes aicc-wa-slide-up {
            from { transform: translateY(20px) scale(0.96); opacity: 0; }
            to { transform: translateY(0) scale(1); opacity: 1; }
        }

        .aicc-wa-header {
            background: #141414;
            border-bottom: 1px solid #222;
            padding: 1.1rem 1.3rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .aicc-wa-header-brand {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .aicc-wa-avatar {
            width: 38px;
            height: 38px;
            background: linear-gradient(135deg, #25D366, #128C7E);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffffff;
            font-size: 1.35rem;
            flex-shrink: 0;
        }

        .aicc-wa-title {
            font-size: 0.95rem;
            font-weight: 800;
            color: #ffffff;
            margin: 0;
            line-height: 1.2;
        }

        .aicc-wa-subtitle {
            font-size: 0.72rem;
            color: #888888;
            margin: 2px 0 0 0;
        }

        .aicc-wa-close-btn {
            background: transparent;
            border: none;
            color: #888;
            font-size: 1.6rem;
            cursor: pointer;
            line-height: 1;
            padding: 4px;
            transition: color 0.2s;
        }
        .aicc-wa-close-btn:hover { color: #ffffff; }

        .aicc-wa-body {
            padding: 1.3rem;
            display: flex;
            flex-direction: column;
            gap: 0.9rem;
        }

        .aicc-wa-context-badge {
            background: rgba(37, 211, 102, 0.08);
            border: 1px solid rgba(37, 211, 102, 0.25);
            padding: 0.65rem 0.9rem;
            border-radius: 10px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .aicc-wa-pin-icon {
            color: #25D366;
            font-size: 1rem;
        }

        .aicc-wa-context-lbl {
            display: block;
            font-size: 0.68rem;
            color: #888888;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .aicc-wa-context-val {
            display: block;
            font-size: 0.84rem;
            color: #ffffff;
            font-weight: 700;
        }

        .aicc-wa-quick-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
        }

        .aicc-wa-tag {
            background: #181818;
            border: 1px solid #333333;
            color: #cccccc;
            padding: 5px 10px;
            border-radius: 20px;
            font-size: 0.72rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.15s ease;
            user-select: none;
        }

        .aicc-wa-tag:hover {
            background: #252525;
            border-color: #25D366;
            color: #ffffff;
            transform: translateY(-1px);
        }

        .aicc-wa-input-group {
            display: flex;
            flex-direction: column;
            gap: 5px;
        }

        .aicc-wa-input-label {
            font-size: 0.75rem;
            font-weight: 600;
            color: #aaaaaa;
        }

        .aicc-wa-textarea {
            width: 100%;
            background: #141414;
            border: 1px solid #333333;
            border-radius: 10px;
            padding: 10px 12px;
            color: #ffffff;
            font-family: inherit;
            font-size: 0.82rem;
            resize: none;
            box-sizing: border-box;
            outline: none;
            transition: border-color 0.2s;
        }

        .aicc-wa-textarea:focus {
            border-color: #25D366;
            box-shadow: 0 0 10px rgba(37, 211, 102, 0.2);
        }

        .aicc-wa-tip-box {
            background: #141414;
            border: 1px dashed #333333;
            border-radius: 10px;
            padding: 0.6rem 0.8rem;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .aicc-wa-tip-icon {
            color: #25D366;
            font-size: 0.95rem;
            flex-shrink: 0;
        }

        .aicc-wa-tip-text {
            font-size: 0.72rem;
            color: #999999;
            line-height: 1.35;
        }

        .aicc-wa-btn-submit {
            width: 100%;
            background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
            border: none;
            color: #ffffff;
            padding: 12px 18px;
            border-radius: 10px;
            font-size: 0.88rem;
            font-weight: 800;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 9px;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(37, 211, 102, 0.35);
            transition: all 0.2s ease;
            -webkit-tap-highlight-color: transparent;
        }

        .aicc-wa-btn-submit:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(37, 211, 102, 0.5);
            background: linear-gradient(135deg, #2ae06c 0%, #159c8d 100%);
        }

        .aicc-wa-btn-submit:active {
            transform: translateY(0);
        }

        .aicc-wa-direct-link-wrap {
            text-align: center;
            margin-top: -2px;
        }

        .aicc-wa-direct-link {
            font-size: 0.74rem;
            color: #777777;
            text-decoration: underline;
            cursor: pointer;
            transition: color 0.2s;
        }
        .aicc-wa-direct-link:hover {
            color: #25D366;
        }

        /* RESPONSIVE MÓVIL */
        @media (max-width: 768px) {
            .aicc-wa-fab {
                bottom: max(16px, env(safe-area-inset-bottom, 16px));
                right: 16px;
                padding: 10px 14px;
            }
            .aicc-wa-label-sub {
                display: none; /* Simplifica texto en pantallas estrechas */
            }
            .aicc-wa-card {
                max-width: 95%;
                border-radius: 16px;
            }
            .aicc-wa-body {
                padding: 1.1rem;
                gap: 0.75rem;
            }
        }
    `;

    function injectStyles() {
        const styleEl = document.createElement('style');
        styleEl.id = 'aicc-wa-styles';
        styleEl.textContent = styles;
        document.head.appendChild(styleEl);
    }

    // Funciones globales expuestas en window
    window.toggleWhatsAppModal = function (e) {
        if (e) e.stopPropagation();
        const modal = document.getElementById('aicc-wa-modal');
        if (!modal) return;
        
        const isOpening = !modal.classList.contains('active');
        if (isOpening) {
            const sectionEl = document.getElementById('aicc-wa-current-section');
            if (sectionEl) {
                sectionEl.innerText = getActiveSectionName();
            }
            modal.classList.add('active');
            const txt = document.getElementById('aicc-wa-custom-msg');
            if (txt) {
                setTimeout(() => txt.focus(), 150);
            }
        } else {
            modal.classList.remove('active');
        }
    };

    window.closeWhatsAppModal = function () {
        const modal = document.getElementById('aicc-wa-modal');
        if (modal) modal.classList.remove('active');
    };

    window.handleWhatsAppModalBackdrop = function (e) {
        if (e.target.id === 'aicc-wa-modal') {
            closeWhatsAppModal();
        }
    };

    window.setQuickTopic = function (topicText) {
        const txt = document.getElementById('aicc-wa-custom-msg');
        if (txt) {
            txt.value = topicText;
            txt.focus();
        }
    };

    window.sendToWhatsApp = function (isDirect = false) {
        const phone = (window.WHATSAPP_CONFIG && window.WHATSAPP_CONFIG.phone) || DEFAULT_PHONE;
        const clientInfo = getClientInfo();
        const activeSection = getActiveSectionName();
        const txtInput = document.getElementById('aicc-wa-custom-msg');
        const customMsg = (!isDirect && txtInput) ? txtInput.value.trim() : "";

        let msg = `👋 ¡Hola Diego!\n👤 Soy *${clientInfo.name}* desde mi *${clientInfo.planTitle}*.\n📍 *Sección actual:* ${activeSection}`;
        
        if (customMsg) {
            msg += `\n\n💬 *Mensaje / Duda:*\n${customMsg}`;
        } else {
            msg += `\n\n💬 Te escribo para comentarte una duda/cambio desde mi portal.`;
        }

        const encodedMsg = encodeURIComponent(msg);
        const waUrl = `https://wa.me/${phone}?text=${encodedMsg}`;

        // Abrir WhatsApp
        window.open(waUrl, '_blank');
        
        // Cerrar modal
        closeWhatsAppModal();
        if (txtInput) txtInput.value = "";
    };

    // Inicialización automática al cargar el DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            injectStyles();
            renderWidget();
        });
    } else {
        injectStyles();
        renderWidget();
    }
})();
