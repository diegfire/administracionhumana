/**
 * aicc-share.js - Módulo Unificado de Compartición y Captura de Sondeos
 * Administración Humana (AICC)
 */

window.AICCShare = (function () {
    let currentConfig = {
        toolName: "Diagnóstico AICC",
        defaultPhone: "+56975590132",
        getExportData: () => ({}),
        getSummaryText: (data, clientName) => "Resumen de Diagnóstico",
        getWhatsAppMessage: (data, clientName) => "Hola Diego, te comparto mi diagnóstico.",
        onImportData: null
    };

    function init(config) {
        currentConfig = { ...currentConfig, ...config };
        injectModalStyles();
        createModalDOM();
    }

    function injectModalStyles() {
        if (document.getElementById("aicc-share-styles")) return;
        const style = document.createElement("style");
        style.id = "aicc-share-styles";
        style.innerHTML = `
            .aicc-share-backdrop {
                position: fixed;
                top: 0; left: 0; width: 100vw; height: 100vh;
                background: rgba(15, 23, 42, 0.85);
                backdrop-filter: blur(8px);
                z-index: 9999;
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0;
                pointer-events: none;
                transition: opacity 0.3s ease;
            }
            .aicc-share-backdrop.active {
                opacity: 1;
                pointer-events: auto;
            }
            .aicc-share-modal {
                background: #1e293b;
                border: 1px solid rgba(255, 255, 255, 0.12);
                border-radius: 16px;
                padding: 1.8rem;
                width: 90%;
                max-width: 520px;
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
                color: #f8fafc;
                font-family: 'Outfit', sans-serif;
                position: relative;
                transform: translateY(20px);
                transition: transform 0.3s ease;
                max-height: 90vh;
                overflow-y: auto;
            }
            .aicc-share-backdrop.active .aicc-share-modal {
                transform: translateY(0);
            }
            .aicc-share-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1.2rem;
                border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                padding-bottom: 0.8rem;
            }
            .aicc-share-title {
                font-size: 1.3rem;
                font-weight: 700;
                color: #2dd4bf;
                display: flex;
                align-items: center;
                gap: 8px;
            }
            .aicc-share-close {
                background: transparent;
                border: none;
                color: #94a3b8;
                font-size: 1.5rem;
                cursor: pointer;
                line-height: 1;
            }
            .aicc-share-close:hover { color: #f43f5e; }
            .aicc-share-group {
                margin-bottom: 1.2rem;
            }
            .aicc-share-group label {
                display: block;
                font-size: 0.85rem;
                color: #94a3b8;
                margin-bottom: 0.4rem;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }
            .aicc-share-input {
                width: 100%;
                padding: 0.75rem 1rem;
                background: rgba(15, 23, 42, 0.6);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 8px;
                color: white;
                font-family: inherit;
                font-size: 0.95rem;
                transition: border-color 0.2s;
            }
            .aicc-share-input:focus {
                outline: none;
                border-color: #2dd4bf;
            }
            .aicc-share-actions {
                display: flex;
                flex-direction: column;
                gap: 0.75rem;
                margin-top: 1rem;
            }
            .aicc-btn-share {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
                padding: 0.85rem 1.2rem;
                border-radius: 10px;
                font-weight: 600;
                font-size: 0.95rem;
                cursor: pointer;
                border: none;
                transition: all 0.2s ease;
                text-decoration: none;
            }
            .aicc-btn-whatsapp {
                background: #25D366;
                color: #0b2e13;
            }
            .aicc-btn-whatsapp:hover {
                background: #20ba5a;
                transform: translateY(-1px);
            }
            .aicc-btn-copy {
                background: rgba(45, 212, 191, 0.15);
                color: #2dd4bf;
                border: 1px solid rgba(45, 212, 191, 0.3);
            }
            .aicc-btn-copy:hover {
                background: rgba(45, 212, 191, 0.25);
            }
            .aicc-btn-secondary {
                background: rgba(255, 255, 255, 0.05);
                color: #cbd5e1;
                border: 1px solid rgba(255, 255, 255, 0.08);
            }
            .aicc-btn-secondary:hover {
                background: rgba(255, 255, 255, 0.1);
            }
            .aicc-share-tabs {
                display: flex;
                gap: 8px;
                margin-bottom: 1rem;
                border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                padding-bottom: 0.5rem;
            }
            .aicc-share-tab {
                background: none;
                border: none;
                color: #94a3b8;
                padding: 0.4rem 0.8rem;
                font-size: 0.9rem;
                cursor: pointer;
                border-radius: 6px;
                font-family: inherit;
            }
            .aicc-share-tab.active {
                background: rgba(13, 148, 136, 0.2);
                color: #2dd4bf;
                font-weight: 600;
            }
            .aicc-toast {
                position: fixed;
                bottom: 24px;
                right: 24px;
                background: #0d9488;
                color: white;
                padding: 0.8rem 1.4rem;
                border-radius: 8px;
                box-shadow: 0 10px 25px rgba(0,0,0,0.4);
                font-size: 0.95rem;
                font-weight: 500;
                z-index: 10000;
                opacity: 0;
                transform: translateY(20px);
                transition: all 0.3s ease;
                pointer-events: none;
            }
            .aicc-toast.show {
                opacity: 1;
                transform: translateY(0);
            }
        `;
        document.head.appendChild(style);
    }

    function createModalDOM() {
        if (document.getElementById("aicc-share-backdrop")) return;

        const backdrop = document.createElement("div");
        backdrop.id = "aicc-share-backdrop";
        backdrop.className = "aicc-share-backdrop";

        backdrop.innerHTML = `
            <div class="aicc-share-modal">
                <div class="aicc-share-header">
                    <div class="aicc-share-title">
                        <span>📤</span> <span id="aicc-modal-tool-name">${currentConfig.toolName}</span>
                    </div>
                    <button class="aicc-share-close" onclick="AICCShare.closeModal()">&times;</button>
                </div>

                <div class="aicc-share-tabs">
                    <button class="aicc-share-tab active" id="tab-btn-export" onclick="AICCShare.switchTab('export')">Enviar / Exportar</button>
                    <button class="aicc-share-tab" id="tab-btn-import" onclick="AICCShare.switchTab('import')">📥 Vista Consultor (Cargar)</button>
                </div>

                <!-- SECCIÓN EXPORTAR -->
                <div id="aicc-tab-export">
                    <div class="aicc-share-group">
                        <label for="aicc-client-name">Tu Nombre o Pseudónimo</label>
                        <input type="text" id="aicc-client-name" class="aicc-share-input" placeholder="Ej: Karina M. / Álvaro" />
                    </div>

                    <div class="aicc-share-group">
                        <label for="aicc-phone-number">WhatsApp del Consultor (Diego)</label>
                        <input type="text" id="aicc-phone-number" class="aicc-share-input" placeholder="+569..." value="${currentConfig.defaultPhone || ''}" />
                    </div>

                    <div class="aicc-share-actions">
                        <button class="aicc-btn-share aicc-btn-whatsapp" onclick="AICCShare.sendWhatsApp()">
                            <span>📲</span> Enviar por WhatsApp
                        </button>

                        <button class="aicc-btn-share aicc-btn-copy" onclick="AICCShare.copySummary()">
                            <span>📋</span> Copiar Resumen Formateado
                        </button>

                        <button class="aicc-btn-share aicc-btn-secondary" onclick="AICCShare.copyDataCode()">
                            <span>🔑</span> Copiar Código de Datos (JSON)
                        </button>

                        <button class="aicc-btn-share aicc-btn-secondary" onclick="AICCShare.downloadJSON()">
                            <span>💾</span> Descargar Archivo (.json)
                        </button>
                    </div>
                </div>

                <!-- SECCIÓN IMPORTAR (DIEGO) -->
                <div id="aicc-tab-import" style="display: none;">
                    <p style="font-size: 0.88rem; color: #94a3b8; margin-bottom: 1rem;">
                        Pega aquí el código JSON enviado por el cliente para visualizar su informe exactamente en tu pantalla.
                    </p>
                    <div class="aicc-share-group">
                        <label for="aicc-import-code">Código de Diagnóstico o JSON</label>
                        <textarea id="aicc-import-code" class="aicc-share-input" rows="5" placeholder="Pega el código AICC aquí..."></textarea>
                    </div>

                    <div class="aicc-share-actions">
                        <button class="aicc-btn-share aicc-btn-copy" onclick="AICCShare.loadFromCode()">
                            <span>📥</span> Cargar Datos en Pantalla
                        </button>
                    </div>
                </div>
            </div>

            <div id="aicc-toast" class="aicc-toast">✅ Operación realizada con éxito</div>
        `;

        document.body.appendChild(backdrop);
        
        const savedName = localStorage.getItem("aicc_client_name");
        if (savedName) {
            document.getElementById("aicc-client-name").value = savedName;
        }
    }

    function openModal() {
        createModalDOM();
        const backdrop = document.getElementById("aicc-share-backdrop");
        document.getElementById("aicc-modal-tool-name").innerText = currentConfig.toolName;
        backdrop.classList.add("active");
    }

    function closeModal() {
        const backdrop = document.getElementById("aicc-share-backdrop");
        if (backdrop) backdrop.classList.remove("active");
    }

    function switchTab(tab) {
        document.getElementById("tab-btn-export").classList.toggle("active", tab === 'export');
        document.getElementById("tab-btn-import").classList.toggle("active", tab === 'import');
        document.getElementById("aicc-tab-export").style.display = tab === 'export' ? 'block' : 'none';
        document.getElementById("aicc-tab-import").style.display = tab === 'import' ? 'block' : 'none';
    }

    function showToast(msg) {
        const toast = document.getElementById("aicc-toast");
        toast.innerText = msg;
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 2500);
    }

    function getClientName() {
        const val = document.getElementById("aicc-client-name").value.trim();
        if (val) localStorage.setItem("aicc_client_name", val);
        return val || "Cliente";
    }

    function sendWhatsApp() {
        const name = getClientName();
        const rawPhone = document.getElementById("aicc-phone-number").value.trim().replace(/[^0-9]/g, '');
        const data = currentConfig.getExportData();
        const msgText = currentConfig.getWhatsAppMessage(data, name);
        
        const fullMsg = msgText;

        const url = rawPhone 
            ? `https://wa.me/${rawPhone}?text=${encodeURIComponent(fullMsg)}`
            : `https://api.whatsapp.com/send?text=${encodeURIComponent(fullMsg)}`;
        
        window.open(url, '_blank');
        closeModal();
    }

    function copySummary() {
        const name = getClientName();
        const data = currentConfig.getExportData();
        const summary = currentConfig.getSummaryText(data, name);
        
        navigator.clipboard.writeText(summary).then(() => {
            showToast("📋 Resumen copiado al portapapeles");
        }).catch(err => {
            alert("No se pudo copiar automáticamente: " + err);
        });
    }

    function copyDataCode() {
        const data = currentConfig.getExportData();
        const jsonCode = JSON.stringify(data, null, 2);
        
        navigator.clipboard.writeText(jsonCode).then(() => {
            showToast("🔑 Código JSON copiado al portapapeles");
        });
    }

    function downloadJSON() {
        const name = getClientName();
        const data = currentConfig.getExportData();
        const payload = {
            tool: currentConfig.toolName,
            clientName: name,
            exportedAt: new Date().toISOString(),
            data: data
        };

        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${currentConfig.toolName.toLowerCase().replace(/\s+/g, '_')}_${name.toLowerCase().replace(/\s+/g, '_')}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showToast("💾 Archivo descargado");
    }

    function loadFromCode() {
        const codeInput = document.getElementById("aicc-import-code").value.trim();
        if (!codeInput) {
            alert("Por favor pega un código de diagnóstico válido.");
            return;
        }

        try {
            let parsedData;
            if (codeInput.includes("AICC-DATA:")) {
                const b64 = codeInput.split("AICC-DATA:")[1].trim();
                const jsonStr = decodeURIComponent(escape(atob(b64)));
                parsedData = JSON.parse(jsonStr);
            } else if (codeInput.startsWith("{")) {
                const fullPayload = JSON.parse(codeInput);
                parsedData = fullPayload.data || fullPayload;
            } else {
                throw new Error("Formato no reconocido");
            }

            if (currentConfig.onImportData) {
                currentConfig.onImportData(parsedData);
                showToast("📥 Datos del cliente cargados con éxito");
                closeModal();
            } else {
                alert("Esta app no tiene configurado el manejador de importación.");
            }
        } catch (e) {
            alert("Error al parsear el código. Verifica que el texto esté completo.\n" + e.message);
        }
    }

    return {
        init,
        openModal,
        closeModal,
        switchTab,
        sendWhatsApp,
        copySummary,
        copyDataCode,
        downloadJSON,
        loadFromCode
    };
})();
