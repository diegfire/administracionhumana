/**
 * aicc-share.js - Módulo Unificado de Compartición y Captura de Sondeos
 * Administración Humana (AICC) | Diego González Yáñez
 * Diseño: Editorial B&N Minimalista Pro
 */

window.AICCShare = (function () {
    let currentConfig = {
        toolName: "Diagnóstico AICC",
        defaultPhone: "+56975590132",
        getExportData: () => ({}),
        getSummaryText: (data, clientName) => "Resumen de Diagnóstico AICC",
        getWhatsAppMessage: (data, clientName) => "Hola Diego, te comparto mi diagnóstico de Administración Humana.",
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
                background: rgba(0, 0, 0, 0.88);
                backdrop-filter: blur(12px);
                -webkit-backdrop-filter: blur(12px);
                z-index: 9999;
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0;
                pointer-events: none;
                transition: opacity 0.25s ease;
            }
            .aicc-share-backdrop.active {
                opacity: 1;
                pointer-events: auto;
            }
            .aicc-share-modal {
                background: #0a0a0a;
                border: 1px solid #262626;
                border-radius: 20px;
                padding: 2rem;
                width: 92%;
                max-width: 540px;
                box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(255, 255, 255, 0.05);
                color: #ffffff;
                font-family: 'Plus Jakarta Sans', sans-serif;
                position: relative;
                transform: translateY(16px);
                transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
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
                border-bottom: 1px solid #262626;
                padding-bottom: 1rem;
            }
            .aicc-share-title {
                font-family: 'Space Grotesk', sans-serif;
                font-size: 1.25rem;
                font-weight: 800;
                color: #ffffff;
                display: flex;
                align-items: center;
                gap: 10px;
                letter-spacing: -0.01em;
            }
            .aicc-share-close {
                background: #141414;
                border: 1px solid #333333;
                color: #888888;
                width: 32px;
                height: 32px;
                border-radius: 50%;
                font-size: 1.2rem;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.2s ease;
                line-height: 1;
            }
            .aicc-share-close:hover {
                color: #ffffff;
                border-color: #ffffff;
                background: #222222;
            }
            .aicc-share-tabs {
                display: flex;
                gap: 8px;
                margin-bottom: 1.5rem;
                border-bottom: 1px solid #262626;
                padding-bottom: 0.6rem;
            }
            .aicc-share-tab {
                background: transparent;
                border: none;
                color: #888888;
                padding: 0.5rem 1rem;
                font-family: 'Space Grotesk', sans-serif;
                font-size: 0.9rem;
                font-weight: 700;
                cursor: pointer;
                border-radius: 8px;
                transition: all 0.2s ease;
            }
            .aicc-share-tab:hover {
                color: #ffffff;
                background: rgba(255, 255, 255, 0.05);
            }
            .aicc-share-tab.active {
                background: #ffffff;
                color: #000000;
                font-weight: 800;
                box-shadow: 0 0 16px rgba(255, 255, 255, 0.15);
            }
            .aicc-share-group {
                margin-bottom: 1.2rem;
            }
            .aicc-share-group label {
                display: block;
                font-family: 'Space Grotesk', sans-serif;
                font-size: 0.8rem;
                font-weight: 700;
                color: #a1a1aa;
                margin-bottom: 0.45rem;
                text-transform: uppercase;
                letter-spacing: 0.08em;
            }
            .aicc-share-input {
                width: 100%;
                padding: 0.8rem 1rem;
                background: #121212;
                border: 1px solid #262626;
                border-radius: 10px;
                color: #ffffff;
                font-family: 'Plus Jakarta Sans', sans-serif;
                font-size: 0.95rem;
                transition: border-color 0.2s, box-shadow 0.2s;
                outline: none;
                box-sizing: border-box;
            }
            .aicc-share-input:focus {
                border-color: #ffffff;
                box-shadow: 0 0 12px rgba(255, 255, 255, 0.12);
            }
            .aicc-share-actions {
                display: flex;
                flex-direction: column;
                gap: 0.75rem;
                margin-top: 1.4rem;
            }
            .aicc-btn-share {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
                padding: 0.9rem 1.4rem;
                border-radius: 50px;
                font-family: 'Space Grotesk', sans-serif;
                font-weight: 800;
                font-size: 0.92rem;
                cursor: pointer;
                border: none;
                transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
                text-decoration: none;
                line-height: 1;
            }
            .aicc-btn-share:active {
                transform: scale(0.98);
            }
            .aicc-btn-whatsapp {
                background: #25D366;
                color: #000000;
                font-weight: 800;
                box-shadow: 0 0 20px rgba(37, 211, 102, 0.25);
            }
            .aicc-btn-whatsapp:hover {
                background: #22bf5b;
                transform: translateY(-2px);
                box-shadow: 0 0 28px rgba(37, 211, 102, 0.4);
            }
            .aicc-btn-copy {
                background: #ffffff;
                color: #000000;
                box-shadow: 0 0 16px rgba(255, 255, 255, 0.15);
            }
            .aicc-btn-copy:hover {
                background: #e5e5e5;
                transform: translateY(-2px);
                box-shadow: 0 0 24px rgba(255, 255, 255, 0.25);
            }
            .aicc-btn-secondary {
                background: #141414;
                color: #ffffff;
                border: 1px solid #333333;
            }
            .aicc-btn-secondary:hover {
                background: #1f1f1f;
                border-color: #ffffff;
                transform: translateY(-1px);
            }
            .aicc-toast {
                position: fixed;
                bottom: 28px;
                right: 28px;
                background: #ffffff;
                color: #000000;
                padding: 0.85rem 1.6rem;
                border-radius: 50px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 255, 255, 0.2);
                font-family: 'Space Grotesk', sans-serif;
                font-size: 0.92rem;
                font-weight: 800;
                z-index: 10000;
                opacity: 0;
                transform: translateY(20px);
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
                    <button class="aicc-share-tab active" id="tab-btn-export" onclick="AICCShare.switchTab('export')">Enviar a Diego</button>
                    <button class="aicc-share-tab" id="tab-btn-import" onclick="AICCShare.switchTab('import')">📥 Vista Consultor</button>
                </div>

                <!-- SECCIÓN EXPORTAR -->
                <div id="aicc-tab-export">
                    <div class="aicc-share-group">
                        <label for="aicc-client-name">Tu Nombre o Pseudónimo</label>
                        <input type="text" id="aicc-client-name" class="aicc-share-input" placeholder="Ej: Álvaro / Karina / Sandra" />
                    </div>

                    <div class="aicc-share-group">
                        <label for="aicc-phone-number">WhatsApp de Diego (Consultor)</label>
                        <input type="text" id="aicc-phone-number" class="aicc-share-input" placeholder="+56975590132" value="${currentConfig.defaultPhone || '+56975590132'}" />
                    </div>

                    <div class="aicc-share-actions">
                        <button class="aicc-btn-share aicc-btn-whatsapp" onclick="AICCShare.sendWhatsApp()">
                            <span>📲</span> Enviar por WhatsApp en 1 Clic
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
                    <p style="font-size: 0.88rem; color: #a1a1aa; margin-bottom: 1.2rem; line-height: 1.5;">
                        Pega aquí el código <b style="color:#ffffff;">AICC-DATA:</b> o JSON enviado por el cliente para visualizar su diagnóstico exacto en pantalla durante la sesión.
                    </p>
                    <div class="aicc-share-group">
                        <label for="aicc-import-code">Código de Diagnóstico o JSON</label>
                        <textarea id="aicc-import-code" class="aicc-share-input" rows="5" placeholder="Pega el código AICC-DATA aquí..."></textarea>
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
            const input = document.getElementById("aicc-client-name");
            if (input) input.value = savedName;
        }
    }

    function openModal() {
        createModalDOM();
        const backdrop = document.getElementById("aicc-share-backdrop");
        const titleEl = document.getElementById("aicc-modal-tool-name");
        if (titleEl) titleEl.innerText = currentConfig.toolName;
        if (backdrop) backdrop.classList.add("active");
    }

    function closeModal() {
        const backdrop = document.getElementById("aicc-share-backdrop");
        if (backdrop) backdrop.classList.remove("active");
    }

    function switchTab(tab) {
        const btnExport = document.getElementById("tab-btn-export");
        const btnImport = document.getElementById("tab-btn-import");
        const tabExport = document.getElementById("aicc-tab-export");
        const tabImport = document.getElementById("aicc-tab-import");

        if (btnExport) btnExport.classList.toggle("active", tab === 'export');
        if (btnImport) btnImport.classList.toggle("active", tab === 'import');
        if (tabExport) tabExport.style.display = tab === 'export' ? 'block' : 'none';
        if (tabImport) tabImport.style.display = tab === 'import' ? 'block' : 'none';
    }

    function showToast(msg) {
        const toast = document.getElementById("aicc-toast");
        if (!toast) return;
        toast.innerText = msg;
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 2500);
    }

    function getClientName() {
        const input = document.getElementById("aicc-client-name");
        const val = input ? input.value.trim() : "";
        if (val) localStorage.setItem("aicc_client_name", val);
        return val || "Cliente";
    }

    function sendWhatsApp() {
        const name = getClientName();
        const phoneInput = document.getElementById("aicc-phone-number");
        const rawPhone = phoneInput ? phoneInput.value.trim().replace(/[^0-9]/g, '') : "56975590132";
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
        const input = document.getElementById("aicc-import-code");
        const codeInput = input ? input.value.trim() : "";
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
