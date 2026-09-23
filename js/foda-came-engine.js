/**
 * AICC FODA & CAME ENGINE (Diagnóstico y Plan de Acción Estratégico)
 * Metodología: Administración Humana | Diego González Yáñez
 * 
 * Conexión Metodológica:
 * D (Debilidades)    -> C (Corregir)
 * A (Amenazas)       -> A (Afrontar)
 * F (Fortalezas)     -> M (Mantener)
 * O (Oportunidades)  -> E (Explotar)
 */

(function() {
    let fodaItems = [];
    let fodaStorageKey = "ah_client_foda";

    const DEFAULT_FODA_ITEMS = [
        { id: "f1", type: "F", fodaText: "Metodología propia y acompañamiento 1 a 1 de alta personalización", cameAction: "Mantener el estándar artesanal y no masificar con cursos genéricos", createdAt: Date.now() },
        { id: "f2", type: "O", fodaText: "Creciente saturación por plantillas complejas de Notion o apps impersonales", cameAction: "Posicionar el software web privado ligero + cuaderno físico en redes", createdAt: Date.now() - 1000 },
        { id: "f3", type: "D", fodaText: "Dificultad para comunicar el precio y temor a cobrar tarifas justas", cameAction: "Corregir usando el libreto de ventas transparente y la Sesión de Despegue a $35.000", createdAt: Date.now() - 2000 },
        { id: "f4", type: "A", fodaText: "Inestabilidad económica o incertidumbre en ingresos mensuales", cameAction: "Afrontar paquetizando servicios en planes de 4 semanas con meta de 4 clientes/mes", createdAt: Date.now() - 3000 }
    ];

    function initFodaCameEngine(config) {
        if (!config) config = {};
        fodaStorageKey = config.storageKey || "ah_client_foda";

        const saved = localStorage.getItem(`${fodaStorageKey}_items_v1`);
        if (saved) {
            try {
                fodaItems = JSON.parse(saved);
            } catch(e) {
                fodaItems = JSON.parse(JSON.stringify(config.defaultItems || DEFAULT_FODA_ITEMS));
            }
        } else {
            fodaItems = JSON.parse(JSON.stringify(config.defaultItems || DEFAULT_FODA_ITEMS));
        }

        renderFodaCameApp();
    }

    function saveFodaItems() {
        localStorage.setItem(`${fodaStorageKey}_items_v1`, JSON.stringify(fodaItems));
        renderFodaCameApp();
    }

    function renderFodaCameApp() {
        const types = ["F", "O", "D", "A"];
        types.forEach(t => {
            const list = fodaItems.filter(item => item.type === t);
            const container = document.getElementById(`foda-list-${t.toLowerCase()}`);
            const countEl = document.getElementById(`count-foda-${t.toLowerCase()}`);
            if (countEl) countEl.innerText = list.length;
            if (!container) return;

            if (list.length === 0) {
                container.innerHTML = `<div class="foda-empty-msg">Sin elementos registrados</div>`;
                return;
            }

            container.innerHTML = list.map(item => `
                <div class="foda-item-card">
                    <div class="foda-item-origin">
                        <strong>${escapeHtml(item.fodaText)}</strong>
                    </div>
                    <div class="came-action-box">
                        <span class="came-action-label">${getCameLabel(item.type)}:</span>
                        <p class="came-action-text">${escapeHtml(item.cameAction || "Sin acción definida")}</p>
                    </div>
                    <div class="foda-item-actions">
                        <button class="btn-card-action" onclick="window.fodaEditCameAction('${item.id}')" title="Editar acción CAME">✏️ Acción</button>
                        <button class="btn-card-action" onclick="window.fodaDeleteItem('${item.id}')" title="Eliminar">🗑️</button>
                    </div>
                </div>
            `).join("");
        });
    }

    function getCameLabel(type) {
        switch(type) {
            case "F": return "🛡️ MANTENER (M)";
            case "O": return "🚀 EXPLOTAR (E)";
            case "D": return "🛠️ CORREGIR (C)";
            case "A": return "⚡ AFRONTAR (A)";
            default: return "ACCIÓN CAME";
        }
    }

    // API pública
    window.fodaAddItem = function() {
        const typeSelect = document.getElementById("foda-type-select");
        const fodaInput = document.getElementById("foda-item-input");
        const cameInput = document.getElementById("foda-came-input");
        if (!typeSelect || !fodaInput) return;

        const type = typeSelect.value;
        const fodaText = fodaInput.value.trim();
        const cameAction = cameInput ? cameInput.value.trim() : "";

        if (!fodaText) {
            alert("Por favor ingresa la observación del diagnóstico FODA.");
            return;
        }

        const newItem = {
            id: "foda_" + Date.now(),
            type: type,
            fodaText: fodaText,
            cameAction: cameAction || (getCameLabel(type) + ": Definir paso concreto"),
            createdAt: Date.now()
        };

        fodaItems.push(newItem);
        fodaInput.value = "";
        if (cameInput) cameInput.value = "";
        saveFodaItems();
    };

    window.fodaEditCameAction = function(itemId) {
        const item = fodaItems.find(i => i.id === itemId);
        if (!item) return;

        const currentAction = item.cameAction || "";
        const newAction = prompt(`Acción CAME para: "${item.fodaText}"\n\n¿Qué acción concreta tomarás para ${getCameLabel(item.type)}?`, currentAction);
        if (newAction !== null) {
            item.cameAction = newAction.trim() || currentAction;
            saveFodaItems();
        }
    };

    window.fodaDeleteItem = function(itemId) {
        fodaItems = fodaItems.filter(i => i.id !== itemId);
        saveFodaItems();
    };

    window.fodaResetDefault = function() {
        if (confirm("¿Restablecer el análisis FODA/CAME a los valores iniciales sugeridos?")) {
            fodaItems = JSON.parse(JSON.stringify(DEFAULT_FODA_ITEMS));
            saveFodaItems();
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

    window.initFodaCameEngine = initFodaCameEngine;

    document.addEventListener("DOMContentLoaded", () => {
        if (window.FODA_AUTO_INIT !== false) {
            initFodaCameEngine({
                storageKey: (window.CLIENT_CONFIG && window.CLIENT_CONFIG.clientId) ? `${window.CLIENT_CONFIG.clientId}_foda` : "ah_client_foda"
            });
        }
    });

})();
