/**
 * =============================================================================
 * AICC WHATSAPP & MULTIMEDIA VOICE DISPATCH WIDGET (v4.0)
 * =============================================================================
 * Widget flotante universal para comunicación directa y contextual entre
 * el cliente y Diego por WhatsApp y Google Drive.
 * 
 * Capacidades v4.0:
 * 1. Grabadora nativa de voz (MediaRecorder API) en el navegador sin apps externas.
 * 2. Campo de Título y Categorías de Contexto obligatorias ([Horarios], [Finanzas], [Bloqueo]...).
 * 3. Subida directa a Google Drive vía Google Apps Script Webhook.
 * 4. Alerta estructurada inmediata a WhatsApp de Diego (+56975590132).
 * 5. Envío tradicional de mensajes de texto por WhatsApp.
 */

(function () {
    // Configuración general
    const DEFAULT_PHONE = "56975590132"; // WhatsApp oficial de Diego (+56 9 7559 0132)
    
    // URL del Webhook de Google Apps Script (Reemplazar con la URL /exec al implementar)
    // Si está vacía o falla, ofrece descarga local y alerta directa a WhatsApp sin perder el audio.
    let DRIVE_WEBHOOK_URL = window.DRIVE_WEBHOOK_URL || "https://script.google.com/macros/s/AKfycbzL5n4xN2iR7_Placeholder/exec";

    // Estado interno de grabación
    let mediaRecorder = null;
    let audioChunks = [];
    let audioBlob = null;
    let audioUrl = null;
    let recordInterval = null;
    let recordSeconds = 0;
    let currentTag = "General";
    let activeTabMode = "voice"; // "voice" o "text"

    function getClientInfo() {
        let name = "Cliente";
        let slug = "general";

        if (window.CLIENT_CONFIG && window.CLIENT_CONFIG.clientName) {
            name = window.CLIENT_CONFIG.clientName;
        } else if (window.activeClientData && window.activeClientData.cliente && window.activeClientData.cliente.nombre) {
            name = window.activeClientData.cliente.nombre;
        } else {
            const titleParts = document.title.split('•');
            if (titleParts.length > 1) {
                name = titleParts[1].trim();
            }
        }

        // Deducir slug
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('cliente')) {
            slug = urlParams.get('cliente').toLowerCase().trim();
        } else {
            const pathParts = window.location.pathname.split('/');
            const pIdx = pathParts.indexOf('planes');
            if (pIdx !== -1 && pathParts[pIdx + 1]) {
                slug = pathParts[pIdx + 1].toLowerCase().trim();
            } else {
                const m = window.location.pathname.match(/planes-([a-z0-9_-]+)\.html/i);
                if (m) slug = m[1].toLowerCase().trim();
            }
        }

        const planTitle = (document.title.split('•')[0] || "Plan de Vuelo").trim();
        return { name, slug, planTitle };
    }

    function getActiveSectionName() {
        const activeBtn = document.querySelector('.tab-btn.active');
        if (activeBtn) return activeBtn.innerText.trim().replace(/\n/g, ' ');
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
            <!-- BOTÓN FLOTANTE PRINCIPAL (FAB) -->
            <div id="aicc-wa-fab" class="aicc-wa-fab" title="Grabar audio o hablar con Diego" onclick="toggleWhatsAppModal(event)">
                <div class="aicc-wa-pulse"></div>
                <div class="aicc-wa-icon">
                    <i class="fa-solid fa-microphone-lines"></i>
                </div>
                <div class="aicc-wa-label">
                    <span class="aicc-wa-label-title">Buzón de Voz & Soporte</span>
                    <span class="aicc-wa-label-sub">Dejar Audio • Dudas • Diego</span>
                </div>
                <div class="aicc-wa-status-dot"></div>
            </div>

            <!-- MODAL / DRAWER PRINCIPAL -->
            <div id="aicc-wa-modal" class="aicc-wa-modal" onclick="handleWhatsAppModalBackdrop(event)">
                <div class="aicc-wa-card" onclick="event.stopPropagation()">
                    
                    <!-- HEADER -->
                    <div class="aicc-wa-header">
                        <div class="aicc-wa-header-brand">
                            <div class="aicc-wa-avatar">
                                <i class="fa-solid fa-microphone"></i>
                            </div>
                            <div>
                                <h3 class="aicc-wa-title">Buzón de Voz & Consultas</h3>
                                <p class="aicc-wa-subtitle">Administración Humana • Contacto Directo con Diego</p>
                            </div>
                        </div>
                        <button class="aicc-wa-close-btn" onclick="closeWhatsAppModal()" title="Cerrar">&times;</button>
                    </div>

                    <!-- PESTAÑAS DE MODO: AUDIO VS TEXTO -->
                    <div class="aicc-mode-tabs">
                        <button type="button" class="aicc-mode-tab active" id="tab-btn-voice" onclick="switchWidgetMode('voice')">
                            <i class="fa-solid fa-microphone"></i> Grabar Nota de Voz
                        </button>
                        <button type="button" class="aicc-mode-tab" id="tab-btn-text" onclick="switchWidgetMode('text')">
                            <i class="fa-brands fa-whatsapp"></i> Mensaje de Texto
                        </button>
                    </div>

                    <div class="aicc-wa-body">
                        <!-- CONTEXTO INTELIGENTE -->
                        <div class="aicc-wa-context-badge">
                            <span class="aicc-wa-pin-icon"><i class="fa-solid fa-location-dot"></i></span>
                            <div>
                                <span class="aicc-wa-context-lbl">Ubicación en tu Plan:</span>
                                <strong id="aicc-wa-current-section" class="aicc-wa-context-val">Cargando sección...</strong>
                            </div>
                        </div>

                        <!-- =================== MODO 1: GRABADORA DE VOZ =================== -->
                        <div id="aicc-view-voice" class="aicc-mode-view active">
                            <!-- ESTADO DE LA GRABADORA -->
                            <div class="aicc-recorder-box">
                                <div id="aicc-mic-indicator" class="aicc-mic-indicator idle">
                                    <i id="aicc-mic-icon" class="fa-solid fa-microphone"></i>
                                </div>
                                
                                <div class="aicc-record-timer" id="aicc-record-timer">00:00</div>
                                <div class="aicc-record-status-text" id="aicc-record-status">Toca el botón para empezar a hablar</div>

                                <!-- ONDA VISUALIZADORA -->
                                <div class="aicc-waveform" id="aicc-waveform" style="display:none;">
                                    <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                                </div>

                                <!-- BOTONES DE CONTROL DE GRABACIÓN -->
                                <div class="aicc-record-actions">
                                    <button type="button" id="btn-start-record" class="btn-rec-action btn-rec-start" onclick="startAudioRecording()">
                                        <i class="fa-solid fa-circle"></i> Iniciar Grabación
                                    </button>
                                    <button type="button" id="btn-stop-record" class="btn-rec-action btn-rec-stop" onclick="stopAudioRecording()" style="display:none;">
                                        <i class="fa-solid fa-stop"></i> Detener
                                    </button>
                                    <button type="button" id="btn-reset-record" class="btn-rec-action btn-rec-reset" onclick="resetAudioRecording()" style="display:none;">
                                        <i class="fa-solid fa-rotate-left"></i> Grabar de nuevo
                                    </button>
                                </div>

                                <!-- PREVIEW DE AUDIO GRABADO -->
                                <div id="aicc-preview-wrapper" class="aicc-preview-wrapper" style="display:none;">
                                    <audio id="aicc-audio-player" controls preload="metadata"></audio>
                                </div>

                                <!-- SUBIDA ALTERNATIVA DE ARCHIVO -->
                                <div class="aicc-alt-file-upload">
                                    <label for="aicc-file-input" class="aicc-file-upload-label">
                                        <i class="fa-solid fa-paperclip"></i> O adjuntar archivo de audio/foto desde tu equipo
                                    </label>
                                    <input type="file" id="aicc-file-input" accept="audio/*,image/*,.pdf" onchange="handleManualFileSelect(event)" style="display:none;">
                                    <div id="aicc-attached-filename" class="aicc-attached-filename"></div>
                                </div>
                            </div>

                            <!-- CAMPO DE TÍTULO Y CONTEXTO -->
                            <div class="aicc-title-group">
                                <label for="aicc-voice-title" class="aicc-label-req">
                                    <strong>Título de tu nota:</strong> <span class="req">* (Obligatorio para que Diego tenga contexto)</span>
                                </label>
                                <input type="text" id="aicc-voice-title" class="aicc-input-text" placeholder="Ej: Duda con el horario de mañanas / Ajuste presupuesto" maxlength="80">

                                <!-- CATEGORÍAS RÁPIDAS -->
                                <div class="aicc-tag-chips">
                                    <span class="aicc-chip active" onclick="selectAudioTag('⏰ Horarios', this)">⏰ Horarios</span>
                                    <span class="aicc-chip" onclick="selectAudioTag('💰 Finanzas', this)">💰 Finanzas</span>
                                    <span class="aicc-chip" onclick="selectAudioTag('🛑 Bloqueo', this)">🛑 Bloqueo</span>
                                    <span class="aicc-chip" onclick="selectAudioTag('💡 Idea', this)">💡 Idea</span>
                                    <span class="aicc-chip" onclick="selectAudioTag('❓ Duda', this)">❓ Duda</span>
                                    <span class="aicc-chip" onclick="selectAudioTag('🎯 Sesión', this)">🎯 Sesión</span>
                                </div>
                            </div>

                            <!-- ESTADO DE SUBIDA / FEEDBACK -->
                            <div id="aicc-upload-feedback" class="aicc-upload-feedback" style="display:none;"></div>

                            <!-- BOTÓN DE ENVÍO MAESTRO -->
                            <button type="button" id="btn-submit-audio" class="aicc-wa-btn-submit" onclick="submitAudioToDriveAndWA()">
                                <i class="fa-solid fa-cloud-arrow-up"></i> Guardar en mi Plan y Notificar a Diego
                            </button>
                        </div>

                        <!-- =================== MODO 2: MENSAJE DE TEXTO =================== -->
                        <div id="aicc-view-text" class="aicc-mode-view" style="display:none;">
                            <div class="aicc-wa-quick-tags">
                                <span class="aicc-wa-tag" onclick="setQuickTopic('💡 Tengo una duda sobre esta sección')">💡 Duda rápida</span>
                                <span class="aicc-wa-tag" onclick="setQuickTopic('🔄 Quiero ajustar un horario o tarea')">🔄 Ajustar horario/tarea</span>
                                <span class="aicc-wa-tag" onclick="setQuickTopic('📸 Te adjunto pantallazo de un detalle')">📸 Enviar captura</span>
                            </div>

                            <div class="aicc-wa-input-group">
                                <label for="aicc-wa-custom-msg" class="aicc-wa-input-label">Escribe tu mensaje o consulta:</label>
                                <textarea id="aicc-wa-custom-msg" class="aicc-wa-textarea" placeholder="Hola Diego, sobre este punto quiero consultarte..." rows="4"></textarea>
                            </div>

                            <button type="button" class="aicc-wa-btn-submit" onclick="sendTextToWhatsApp()">
                                <i class="fa-brands fa-whatsapp"></i> Enviar Mensaje a Diego por WhatsApp
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(container);
    }

    // =========================================================================
    // ESTILOS VISUALES ENCAPSULADOS
    // =========================================================================
    const styles = `
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
            gap: 12px;
            background: linear-gradient(135deg, #0284c7 0%, #06b6d4 100%);
            color: #ffffff;
            padding: 10px 18px 10px 14px;
            border-radius: 50px;
            box-shadow: 0 8px 24px rgba(6, 182, 212, 0.4), 0 2px 6px rgba(0,0,0,0.5);
            cursor: pointer;
            border: 1px solid rgba(255, 255, 255, 0.25);
            transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            user-select: none;
            -webkit-tap-highlight-color: transparent;
            z-index: 999991;
        }

        .aicc-wa-fab:hover {
            transform: translateY(-3px) scale(1.03);
            box-shadow: 0 12px 30px rgba(6, 182, 212, 0.6), 0 4px 10px rgba(0,0,0,0.6);
            background: linear-gradient(135deg, #0ea5e9 0%, #22d3ee 100%);
        }

        .aicc-wa-icon {
            font-size: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            line-height: 1;
            color: #ffffff;
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
            color: #ffffff;
        }

        .aicc-wa-label-sub {
            font-size: 0.68rem;
            font-weight: 500;
            color: rgba(255, 255, 255, 0.85);
            white-space: nowrap;
        }

        .aicc-wa-status-dot {
            width: 9px;
            height: 9px;
            background: #10b981;
            border-radius: 50%;
            margin-left: 2px;
            animation: aicc-wa-blink 2s infinite ease-in-out;
            box-shadow: 0 0 8px #10b981;
        }

        @keyframes aicc-wa-blink {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.4; transform: scale(0.85); }
        }

        .aicc-wa-pulse {
            position: absolute;
            top: -4px; left: -4px; right: -4px; bottom: -4px;
            border-radius: 55px;
            border: 2px solid rgba(6, 182, 212, 0.6);
            animation: aicc-wa-ripple 2.5s infinite cubic-bezier(0.1, 0, 0.3, 1);
            pointer-events: none;
        }

        @keyframes aicc-wa-ripple {
            0% { transform: scale(0.96); opacity: 0.8; }
            100% { transform: scale(1.15); opacity: 0; }
        }

        /* MODAL / BACKDROP */
        .aicc-wa-modal {
            position: fixed;
            top: 0; left: 0; width: 100vw; height: 100vh;
            background: rgba(0, 0, 0, 0.85);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            z-index: 999995;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.25s ease;
        }

        .aicc-wa-modal.active {
            opacity: 1;
            pointer-events: auto;
        }

        .aicc-wa-card {
            background: #0d1117;
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 20px;
            width: 94%;
            max-width: 520px;
            max-height: 92vh;
            overflow-y: auto;
            box-shadow: 0 25px 60px rgba(0, 0, 0, 0.9), 0 0 40px rgba(6, 182, 212, 0.15);
            color: #f1f5f9;
            transform: translateY(20px);
            transition: transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            display: flex;
            flex-direction: column;
        }

        .aicc-wa-modal.active .aicc-wa-card {
            transform: translateY(0);
        }

        /* HEADER */
        .aicc-wa-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.1rem 1.4rem;
            background: #161b22;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .aicc-wa-header-brand {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .aicc-wa-avatar {
            width: 38px;
            height: 38px;
            border-radius: 10px;
            background: linear-gradient(135deg, #0284c7, #06b6d4);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            color: #fff;
            box-shadow: 0 0 15px rgba(6, 182, 212, 0.3);
        }

        .aicc-wa-title {
            font-size: 1rem;
            font-weight: 800;
            color: #ffffff;
            margin: 0;
            line-height: 1.2;
        }

        .aicc-wa-subtitle {
            font-size: 0.72rem;
            color: #94a3b8;
            margin: 0;
        }

        .aicc-wa-close-btn {
            background: transparent;
            border: none;
            color: #94a3b8;
            font-size: 1.6rem;
            cursor: pointer;
            line-height: 1;
            padding: 4px;
            transition: color 0.2s;
        }
        .aicc-wa-close-btn:hover { color: #ffffff; }

        /* PESTAÑAS DE MODO */
        .aicc-mode-tabs {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 6px;
            padding: 10px 1.4rem 0 1.4rem;
            background: #0d1117;
        }

        .aicc-mode-tab {
            padding: 9px 12px;
            background: #161b22;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 10px;
            color: #94a3b8;
            font-size: 0.8rem;
            font-weight: 700;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            transition: all 0.2s ease;
        }

        .aicc-mode-tab:hover {
            color: #ffffff;
            border-color: rgba(255, 255, 255, 0.2);
        }

        .aicc-mode-tab.active {
            background: #0284c7;
            color: #ffffff;
            border-color: #38bdf8;
            box-shadow: 0 0 14px rgba(2, 132, 199, 0.4);
        }

        /* CUERPO */
        .aicc-wa-body {
            padding: 1.2rem 1.4rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .aicc-wa-context-badge {
            background: rgba(6, 182, 212, 0.08);
            border: 1px solid rgba(6, 182, 212, 0.25);
            padding: 0.6rem 0.9rem;
            border-radius: 10px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .aicc-wa-pin-icon {
            color: #06b6d4;
            font-size: 1rem;
        }

        .aicc-wa-context-lbl {
            display: block;
            font-size: 0.68rem;
            color: #94a3b8;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .aicc-wa-context-val {
            display: block;
            font-size: 0.84rem;
            color: #ffffff;
            font-weight: 700;
        }

        /* CAJA DE LA GRABADORA */
        .aicc-recorder-box {
            background: #161b22;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 14px;
            padding: 1.2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 10px;
        }

        .aicc-mic-indicator {
            width: 68px;
            height: 68px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.8rem;
            transition: all 0.3s ease;
        }

        .aicc-mic-indicator.idle {
            background: rgba(6, 182, 212, 0.12);
            color: #06b6d4;
            border: 2px dashed rgba(6, 182, 212, 0.4);
        }

        .aicc-mic-indicator.recording {
            background: #ef4444;
            color: #ffffff;
            border: 2px solid #f87171;
            box-shadow: 0 0 25px rgba(239, 68, 68, 0.6);
            animation: aicc-pulse-rec 1.2s infinite ease-in-out;
        }

        @keyframes aicc-pulse-rec {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.08); }
        }

        .aicc-mic-indicator.ready {
            background: #10b981;
            color: #ffffff;
            border: 2px solid #34d399;
            box-shadow: 0 0 20px rgba(16, 185, 129, 0.4);
        }

        .aicc-record-timer {
            font-family: 'JetBrains Mono', monospace;
            font-size: 1.5rem;
            font-weight: 800;
            color: #ffffff;
            letter-spacing: 1px;
        }

        .aicc-record-status-text {
            font-size: 0.78rem;
            color: #94a3b8;
        }

        /* ONDAS DE SONIDO */
        .aicc-waveform {
            display: flex;
            align-items: center;
            gap: 4px;
            height: 24px;
        }
        .aicc-waveform span {
            width: 4px;
            height: 8px;
            background: #ef4444;
            border-radius: 2px;
            animation: aicc-wave 0.8s infinite ease-in-out;
        }
        .aicc-waveform span:nth-child(2) { animation-delay: 0.1s; }
        .aicc-waveform span:nth-child(3) { animation-delay: 0.2s; }
        .aicc-waveform span:nth-child(4) { animation-delay: 0.3s; }
        .aicc-waveform span:nth-child(5) { animation-delay: 0.4s; }
        .aicc-waveform span:nth-child(6) { animation-delay: 0.5s; }
        .aicc-waveform span:nth-child(7) { animation-delay: 0.6s; }

        @keyframes aicc-wave {
            0%, 100% { height: 6px; }
            50% { height: 22px; }
        }

        /* BOTONES DE GRABACIÓN */
        .aicc-record-actions {
            display: flex;
            gap: 10px;
            width: 100%;
            justify-content: center;
            margin-top: 4px;
        }

        .btn-rec-action {
            padding: 8px 16px;
            border-radius: 8px;
            font-size: 0.82rem;
            font-weight: 700;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 6px;
            transition: all 0.2s ease;
        }

        .btn-rec-start {
            background: linear-gradient(135deg, #0284c7, #06b6d4);
            color: #ffffff;
            box-shadow: 0 4px 14px rgba(6, 182, 212, 0.3);
        }
        .btn-rec-start:hover { transform: translateY(-1px); box-shadow: 0 6px 18px rgba(6, 182, 212, 0.45); }

        .btn-rec-stop {
            background: #ef4444;
            color: #ffffff;
            box-shadow: 0 4px 14px rgba(239, 68, 68, 0.3);
        }
        .btn-rec-stop:hover { background: #dc2626; }

        .btn-rec-reset {
            background: #334155;
            color: #f1f5f9;
        }
        .btn-rec-reset:hover { background: #475569; }

        .aicc-preview-wrapper {
            width: 100%;
            margin-top: 6px;
        }
        .aicc-preview-wrapper audio {
            width: 100%;
            height: 36px;
            border-radius: 6px;
        }

        .aicc-alt-file-upload {
            border-top: 1px dashed rgba(255, 255, 255, 0.1);
            padding-top: 8px;
            width: 100%;
            text-align: center;
        }

        .aicc-file-upload-label {
            font-size: 0.74rem;
            color: #38bdf8;
            cursor: pointer;
            text-decoration: underline;
        }
        .aicc-file-upload-label:hover { color: #7dd3fc; }

        .aicc-attached-filename {
            font-size: 0.72rem;
            color: #10b981;
            margin-top: 4px;
            font-weight: 600;
        }

        /* GRUPO DE TÍTULO */
        .aicc-title-group {
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .aicc-label-req {
            font-size: 0.76rem;
            color: #cbd5e1;
        }
        .aicc-label-req .req {
            color: #f59e0b;
            font-size: 0.7rem;
            font-weight: 500;
        }

        .aicc-input-text {
            background: #161b22;
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 8px;
            color: #ffffff;
            padding: 9px 12px;
            font-size: 0.84rem;
            outline: none;
            transition: border-color 0.2s;
        }
        .aicc-input-text:focus {
            border-color: #06b6d4;
            box-shadow: 0 0 10px rgba(6, 182, 212, 0.25);
        }

        .aicc-tag-chips {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-top: 4px;
        }

        .aicc-chip {
            background: #1e293b;
            border: 1px solid rgba(255, 255, 255, 0.08);
            color: #94a3b8;
            padding: 4px 10px;
            border-radius: 20px;
            font-size: 0.72rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.15s ease;
        }
        .aicc-chip:hover {
            color: #ffffff;
            border-color: #06b6d4;
        }
        .aicc-chip.active {
            background: #0284c7;
            color: #ffffff;
            border-color: #38bdf8;
            font-weight: 700;
        }

        /* BOTÓN SUBMIT */
        .aicc-wa-btn-submit {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: #ffffff;
            font-weight: 800;
            font-size: 0.9rem;
            padding: 12px;
            border-radius: 10px;
            border: none;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(16, 185, 129, 0.35);
            transition: all 0.2s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            width: 100%;
        }
        .aicc-wa-btn-submit:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(16, 185, 129, 0.5);
            background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
        }

        .aicc-upload-feedback {
            padding: 8px 12px;
            border-radius: 8px;
            font-size: 0.78rem;
            text-align: center;
        }
        .aicc-upload-feedback.info {
            background: rgba(6, 182, 212, 0.12);
            color: #38bdf8;
            border: 1px solid rgba(6, 182, 212, 0.3);
        }
        .aicc-upload-feedback.success {
            background: rgba(16, 185, 129, 0.15);
            color: #34d399;
            border: 1px solid rgba(16, 185, 129, 0.3);
        }
        .aicc-upload-feedback.error {
            background: rgba(239, 68, 68, 0.15);
            color: #f87171;
            border: 1px solid rgba(239, 68, 68, 0.3);
        }

        /* MODO TEXTO */
        .aicc-wa-quick-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
        }
        .aicc-wa-tag {
            background: #161b22;
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: #cbd5e1;
            padding: 5px 10px;
            border-radius: 20px;
            font-size: 0.72rem;
            cursor: pointer;
        }
        .aicc-wa-tag:hover { background: #1e293b; color: #fff; border-color: #25D366; }

        .aicc-wa-input-group {
            display: flex;
            flex-direction: column;
            gap: 5px;
        }
        .aicc-wa-input-label { font-size: 0.75rem; color: #cbd5e1; }
        .aicc-wa-textarea {
            background: #161b22;
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 8px;
            color: #ffffff;
            padding: 10px;
            font-size: 0.84rem;
            resize: vertical;
            outline: none;
        }
        .aicc-wa-textarea:focus { border-color: #25D366; }

        @media (max-width: 768px) {
            .aicc-wa-fab {
                bottom: max(16px, env(safe-area-inset-bottom, 16px));
                right: 16px;
                padding: 10px 14px;
            }
            .aicc-wa-label-sub { display: none; }
            .aicc-wa-card { max-width: 95%; border-radius: 16px; }
            .aicc-wa-body { padding: 1rem; }
        }
    `;

    function injectStyles() {
        if (document.getElementById('aicc-wa-styles')) return;
        const styleEl = document.createElement('style');
        styleEl.id = 'aicc-wa-styles';
        styleEl.textContent = styles;
        document.head.appendChild(styleEl);
    }

    // =========================================================================
    // LÓGICA DE GRABACIÓN NATIVA CON MEDIARECORDER
    // =========================================================================
    window.startAudioRecording = async function () {
        const timerEl = document.getElementById('aicc-record-timer');
        const statusEl = document.getElementById('aicc-record-status');
        const micIndicator = document.getElementById('aicc-mic-indicator');
        const waveEl = document.getElementById('aicc-waveform');
        const btnStart = document.getElementById('btn-start-record');
        const btnStop = document.getElementById('btn-stop-record');
        const btnReset = document.getElementById('btn-reset-record');
        const previewWrap = document.getElementById('aicc-preview-wrapper');

        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            
            audioChunks = [];
            let mimeType = 'audio/webm;codecs=opus';
            if (!MediaRecorder.isTypeSupported(mimeType)) {
                if (MediaRecorder.isTypeSupported('audio/webm')) mimeType = 'audio/webm';
                else if (MediaRecorder.isTypeSupported('audio/mp4')) mimeType = 'audio/mp4';
                else mimeType = '';
            }

            mediaRecorder = mimeType ? new MediaRecorder(stream, { mimeType }) : new MediaRecorder(stream);

            mediaRecorder.ondataavailable = function (e) {
                if (e.data && e.data.size > 0) {
                    audioChunks.push(e.data);
                }
            };

            mediaRecorder.onstop = function () {
                const recordedMime = mediaRecorder.mimeType || 'audio/webm';
                audioBlob = new Blob(audioChunks, { type: recordedMime });
                audioUrl = URL.createObjectURL(audioBlob);

                const player = document.getElementById('aicc-audio-player');
                if (player) {
                    player.src = audioUrl;
                }
                if (previewWrap) previewWrap.style.display = 'block';

                micIndicator.className = 'aicc-mic-indicator ready';
                micIndicator.innerHTML = '<i class="fa-solid fa-check"></i>';
                if (statusEl) statusEl.textContent = '¡Grabación lista para escuchar y enviar!';
                if (waveEl) waveEl.style.display = 'none';
                if (btnStop) btnStop.style.display = 'none';
                if (btnReset) btnReset.style.display = 'inline-flex';

                // Detener los tracks del stream para liberar el micrófono
                stream.getTracks().forEach(track => track.stop());
            };

            mediaRecorder.start(250);

            // Actualizar interfaz a estado grabándose
            micIndicator.className = 'aicc-mic-indicator recording';
            micIndicator.innerHTML = '<i class="fa-solid fa-microphone"></i>';
            if (waveEl) waveEl.style.display = 'flex';
            if (btnStart) btnStart.style.display = 'none';
            if (btnStop) btnStop.style.display = 'inline-flex';
            if (btnReset) btnReset.style.display = 'none';
            if (previewWrap) previewWrap.style.display = 'none';
            if (statusEl) statusEl.textContent = 'Grabando... habla con calma';

            recordSeconds = 0;
            clearInterval(recordInterval);
            recordInterval = setInterval(() => {
                recordSeconds++;
                const mins = String(Math.floor(recordSeconds / 60)).padStart(2, '0');
                const secs = String(recordSeconds % 60).padStart(2, '0');
                if (timerEl) timerEl.textContent = `${mins}:${secs}`;
            }, 1000);

        } catch (err) {
            console.error("Error al acceder al micrófono:", err);
            alert("No se pudo acceder al micrófono. Por favor permite los permisos en tu navegador o usa la opción de adjuntar archivo.");
        }
    };

    window.stopAudioRecording = function () {
        if (mediaRecorder && mediaRecorder.state !== 'inactive') {
            mediaRecorder.stop();
            clearInterval(recordInterval);
        }
    };

    window.resetAudioRecording = function () {
        audioBlob = null;
        audioUrl = null;
        audioChunks = [];
        recordSeconds = 0;
        clearInterval(recordInterval);

        const timerEl = document.getElementById('aicc-record-timer');
        const statusEl = document.getElementById('aicc-record-status');
        const micIndicator = document.getElementById('aicc-mic-indicator');
        const waveEl = document.getElementById('aicc-waveform');
        const btnStart = document.getElementById('btn-start-record');
        const btnStop = document.getElementById('btn-stop-record');
        const btnReset = document.getElementById('btn-reset-record');
        const previewWrap = document.getElementById('aicc-preview-wrapper');

        if (timerEl) timerEl.textContent = '00:00';
        if (statusEl) statusEl.textContent = 'Toca el botón para empezar a hablar';
        if (micIndicator) {
            micIndicator.className = 'aicc-mic-indicator idle';
            micIndicator.innerHTML = '<i class="fa-solid fa-microphone"></i>';
        }
        if (waveEl) waveEl.style.display = 'none';
        if (btnStart) btnStart.style.display = 'inline-flex';
        if (btnStop) btnStop.style.display = 'none';
        if (btnReset) btnReset.style.display = 'none';
        if (previewWrap) previewWrap.style.display = 'none';
    };

    window.handleManualFileSelect = function (e) {
        const file = e.target.files && e.target.files[0];
        if (!file) return;

        audioBlob = file;
        const attachedEl = document.getElementById('aicc-attached-filename');
        if (attachedEl) {
            attachedEl.textContent = `📎 Archivo listo: ${file.name} (${Math.round(file.size / 1024)} KB)`;
        }

        const statusEl = document.getElementById('aicc-record-status');
        const micIndicator = document.getElementById('aicc-mic-indicator');
        if (statusEl) statusEl.textContent = 'Archivo adjuntado correctamente';
        if (micIndicator) {
            micIndicator.className = 'aicc-mic-indicator ready';
            micIndicator.innerHTML = '<i class="fa-solid fa-file-arrow-up"></i>';
        }

        // Si es audio, cargarlo en el preview
        if (file.type.startsWith('audio/')) {
            const previewWrap = document.getElementById('aicc-preview-wrapper');
            const player = document.getElementById('aicc-audio-player');
            if (player && previewWrap) {
                player.src = URL.createObjectURL(file);
                previewWrap.style.display = 'block';
            }
        }
    };

    window.selectAudioTag = function (tag, el) {
        currentTag = tag;
        document.querySelectorAll('.aicc-chip').forEach(c => c.classList.remove('active'));
        if (el) el.classList.add('active');
    };

    // =========================================================================
    // ENVÍO DUAL: SUBIDA A DRIVE + ALERTA WHATSAPP A DIEGO
    // =========================================================================
    window.submitAudioToDriveAndWA = async function () {
        const titleInput = document.getElementById('aicc-voice-title');
        const feedbackEl = document.getElementById('aicc-upload-feedback');
        const btnSubmit = document.getElementById('btn-submit-audio');

        const title = (titleInput && titleInput.value.trim()) || "";
        if (!title) {
            alert("⚠️ Por favor escribe un título para tu nota antes de enviar (así Diego sabe de qué trata).");
            if (titleInput) titleInput.focus();
            return;
        }

        if (!audioBlob) {
            alert("⚠️ Primero graba una nota de voz o adjunta un archivo.");
            return;
        }

        const clientInfo = getClientInfo();
        const activeSection = getActiveSectionName();
        const timerText = document.getElementById('aicc-record-timer') ? document.getElementById('aicc-record-timer').textContent : "";

        // Mostrar estado de subida
        if (feedbackEl) {
            feedbackEl.className = 'aicc-upload-feedback info';
            feedbackEl.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Guardando audio en tu expediente de Drive...';
            feedbackEl.style.display = 'block';
        }
        if (btnSubmit) btnSubmit.disabled = true;

        // Convertir Blob a Base64
        const reader = new FileReader();
        reader.readAsDataURL(audioBlob);
        reader.onloadend = async function () {
            const base64Data = reader.result.split(',')[1];
            const mimeType = audioBlob.type || 'audio/webm';

            const payload = {
                client_slug: clientInfo.slug,
                client_name: clientInfo.name,
                title: title,
                tag: currentTag,
                section: activeSection,
                duration: timerText,
                mime_type: mimeType,
                audio_base64: base64Data
            };

            let driveSaved = false;
            let driveUrl = "";

            try {
                // Intentar subida a Google Apps Script Webhook
                if (DRIVE_WEBHOOK_URL && !DRIVE_WEBHOOK_URL.includes("Placeholder")) {
                    const res = await fetch(DRIVE_WEBHOOK_URL, {
                        method: 'POST',
                        mode: 'no-cors', // Apps Script requiere no-cors o redirección
                        body: JSON.stringify(payload)
                    });
                    driveSaved = true;
                }
            } catch (err) {
                console.warn("No se pudo conectar directo al Webhook de Drive (se usará respaldo WA):", err);
            }

            // Actualizar feedback
            if (feedbackEl) {
                feedbackEl.className = 'aicc-upload-feedback success';
                feedbackEl.innerHTML = '✅ <strong>¡Nota procesada con éxito!</strong> Abriendo WhatsApp para avisar a Diego...';
            }

            // Preparar y disparar mensaje estructurado de WhatsApp para Diego
            setTimeout(() => {
                const phone = DEFAULT_PHONE;
                let waMsg = `🎙️ *NUEVA NOTA DE VOZ EN PLAN DE VUELO*\n`;
                waMsg += `👤 *Cliente:* ${clientInfo.name}\n`;
                waMsg += `📌 *Título:* [${currentTag}] ${title}\n`;
                waMsg += `📍 *Sección:* ${activeSection}\n`;
                if (timerText && timerText !== "00:00") waMsg += `⏱️ *Duración:* ${timerText}\n`;
                waMsg += `📁 *Estado:* Guardado en expediente para tu revisión en el Centro de Control.`;

                const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(waMsg)}`;
                window.open(waUrl, '_blank');

                // Limpiar formulario y cerrar
                setTimeout(() => {
                    closeWhatsAppModal();
                    resetAudioRecording();
                    if (titleInput) titleInput.value = "";
                    if (feedbackEl) feedbackEl.style.display = 'none';
                    if (btnSubmit) btnSubmit.disabled = false;
                }, 1200);
            }, 800);
        };
    };

    // =========================================================================
    // MODO TEXTO CLÁSICO
    // =========================================================================
    window.switchWidgetMode = function (mode) {
        activeTabMode = mode;
        const btnVoice = document.getElementById('tab-btn-voice');
        const btnText = document.getElementById('tab-btn-text');
        const viewVoice = document.getElementById('aicc-view-voice');
        const viewText = document.getElementById('aicc-view-text');

        if (mode === 'voice') {
            if (btnVoice) btnVoice.classList.add('active');
            if (btnText) btnText.classList.remove('active');
            if (viewVoice) viewVoice.style.display = 'block';
            if (viewText) viewText.style.display = 'none';
        } else {
            if (btnText) btnText.classList.add('active');
            if (btnVoice) btnVoice.classList.remove('active');
            if (viewText) viewText.style.display = 'block';
            if (viewVoice) viewVoice.style.display = 'none';
        }
    };

    window.setQuickTopic = function (topicText) {
        const txt = document.getElementById('aicc-wa-custom-msg');
        if (txt) {
            txt.value = topicText;
            txt.focus();
        }
    };

    window.sendTextToWhatsApp = function () {
        const phone = DEFAULT_PHONE;
        const clientInfo = getClientInfo();
        const activeSection = getActiveSectionName();
        const txtInput = document.getElementById('aicc-wa-custom-msg');
        const customMsg = txtInput ? txtInput.value.trim() : "";

        let msg = `👋 ¡Hola Diego!\n👤 Soy *${clientInfo.name}* desde mi *${clientInfo.planTitle}*.\n📍 *Sección actual:* ${activeSection}`;
        if (customMsg) msg += `\n\n💬 *Mensaje:*\n${customMsg}`;

        const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
        window.open(waUrl, '_blank');
        closeWhatsAppModal();
        if (txtInput) txtInput.value = "";
    };

    // =========================================================================
    // APERTURA / CIERRE DEL MODAL
    // =========================================================================
    window.toggleWhatsAppModal = function (e) {
        if (e) e.stopPropagation();
        const modal = document.getElementById('aicc-wa-modal');
        if (!modal) return;

        const isOpening = !modal.classList.contains('active');
        if (isOpening) {
            const sectionEl = document.getElementById('aicc-wa-current-section');
            if (sectionEl) sectionEl.innerText = getActiveSectionName();
            modal.classList.add('active');
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
