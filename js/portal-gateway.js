/**
 * AICC CLIENT SECURITY GATEWAY & PORTAL SESSION CONTROLLER
 */

const DEFAULT_CLIENT_CONFIG = {
    storageKey: "ah_client_auth_session",
    validPins: ["2026", "admin2026", "diego_ah_master", "diegop1990"],
    clientName: "Cliente AICC"
};

let currentClientConfig = { ...DEFAULT_CLIENT_CONFIG };

function initClientAuth(config) {
    if (config) {
        currentClientConfig = { ...DEFAULT_CLIENT_CONFIG, ...config };
    }
    checkClientAuth();
}

function checkClientAuth() {
    const config = window.CLIENT_CONFIG || {};
    const storageId = config.clientId || '';
    const token = localStorage.getItem(currentClientConfig.storageKey);
    const tokenSession = storageId ? sessionStorage.getItem('client_authenticated_' + storageId) : null;
    const tokenLocal = storageId ? localStorage.getItem('client_authenticated_' + storageId) : null;
    const overlay = document.getElementById("client-auth-overlay");
    if (!overlay) return;
    if (token === "authenticated_ok" || tokenSession === "true" || tokenLocal === "true") {
        overlay.classList.add("unlocked");
        overlay.style.display = "none";
    } else {
        overlay.classList.remove("unlocked");
        overlay.style.display = "flex";
    }
}

function handleClientAuth(e) {
    if (e) e.preventDefault();
    const pinInput = document.getElementById("auth-client-pin");
    const errorMsg = document.getElementById("auth-error-msg");
    if (!pinInput) return;
    const enteredPin = pinInput.value.trim().toLowerCase();

    // Check against configured validPins and window.CLIENT_CONFIG
    let allowedPins = currentClientConfig.validPins.map(p => p.toLowerCase());
    if (window.CLIENT_CONFIG) {
        if (window.CLIENT_CONFIG.clientPIN) allowedPins.push(window.CLIENT_CONFIG.clientPIN.toLowerCase());
        if (window.CLIENT_CONFIG.pin) allowedPins.push(window.CLIENT_CONFIG.pin.toLowerCase());
        if (window.CLIENT_CONFIG.masterPIN) allowedPins.push(window.CLIENT_CONFIG.masterPIN.toLowerCase());
        if (Array.isArray(window.CLIENT_CONFIG.validPins)) {
            window.CLIENT_CONFIG.validPins.forEach(p => allowedPins.push(String(p).trim().toLowerCase()));
        }
    }
    allowedPins.push("diego_ah_master", "diegop1990", "2026", "admin2026", "antonia2026", "antojofre23091995", "antojofre1995", "antojofre");

    if (allowedPins.includes(enteredPin)) {
        localStorage.setItem(currentClientConfig.storageKey, "authenticated_ok");
        if (window.CLIENT_CONFIG && window.CLIENT_CONFIG.clientId) {
            sessionStorage.setItem('client_authenticated_' + window.CLIENT_CONFIG.clientId, 'true');
            localStorage.setItem('client_authenticated_' + window.CLIENT_CONFIG.clientId, 'true');
        }
        if (errorMsg) errorMsg.style.display = "none";
        const overlay = document.getElementById("client-auth-overlay");
        if (overlay) {
            overlay.classList.add("unlocked");
            overlay.style.display = "none";
        }
    } else {
        if (errorMsg) {
            errorMsg.style.display = "block";
            errorMsg.innerText = "⚠️ Clave de acceso incorrecta. Consulta a Diego.";
        }
        pinInput.focus();
        pinInput.select();
    }
}

function logoutClientAuth() {
    if (confirm("¿Deseas bloquear el portal y cerrar sesión en este dispositivo?")) {
        localStorage.removeItem(currentClientConfig.storageKey);
        const overlay = document.getElementById("client-auth-overlay");
        if (overlay) {
            overlay.classList.remove("unlocked");
            const pinInput = document.getElementById("auth-client-pin");
            if (pinInput) {
                pinInput.value = "";
                pinInput.focus();
            }
        }
    }
}

// Universal Tab Switcher
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const target = document.getElementById(tabId);
    if (target) target.classList.add('active');
    if (window.event && window.event.currentTarget && window.event.currentTarget.classList.contains('tab-btn')) {
        window.event.currentTarget.classList.add('active');
    } else {
        // Find button matching tabId
        const matchingBtn = document.querySelector(`.tab-btn[onclick*="'${tabId}'"], .tab-btn[onclick*='"${tabId}"']`);
        if (matchingBtn) matchingBtn.classList.add('active');
    }
}

// Auto-resolve relative asset/printable/template paths based on URL context
function resolveAssetLinks() {
    const isSub = window.location.pathname.includes('/planes/') || window.location.pathname.includes('/02_CLIENTES_ACTIVOS/');
    const isLocalFile = window.location.protocol.startsWith('file');

    // Si estamos en la raíz web (ej: /planes-rocio.html), prefijar con planes/<clientId>/
    if (!isSub && !isLocalFile) {
        const clientId = (window.CLIENT_CONFIG && window.CLIENT_CONFIG.clientId) ? window.CLIENT_CONFIG.clientId : "rocio";
        document.querySelectorAll('a[href^="04_Imprimibles_Fisicos/"], a[href^="Plantillas/"]').forEach(a => {
            const href = a.getAttribute('href');
            if (!href.startsWith('planes/') && !href.startsWith('http')) {
                a.setAttribute('href', `planes/${clientId}/${href}`);
            }
        });
    }
}

function autoInitGateway() {
    if (window.CLIENT_CONFIG) {
        const cfg = window.CLIENT_CONFIG;
        const validPins = [
            cfg.clientPIN || "2026",
            cfg.masterPIN || "diego_ah_master",
            "diego_ah_master",
            "diegop1990"
        ];
        if (cfg.pin && !validPins.includes(cfg.pin)) validPins.push(cfg.pin);
        initClientAuth({
            storageKey: `ah_auth_${cfg.clientId || 'client'}`,
            validPins: validPins,
            clientName: cfg.clientName || "Cliente"
        });
    } else {
        checkClientAuth();
    }
    resolveAssetLinks();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoInitGateway);
} else {
    autoInitGateway();
}

// Global modal UX safety: ESC key & backdrop click automatically close any open modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.active, .auth-modal-overlay.active').forEach(m => {
            m.classList.remove('active');
            m.style.display = 'none';
        });
    }
});

document.addEventListener('click', (e) => {
    if (e.target && e.target.classList && (e.target.classList.contains('modal-overlay') || e.target.classList.contains('auth-modal-overlay'))) {
        e.target.classList.remove('active');
        e.target.style.display = 'none';
    }
});

/**
 * CANONICAL CLIENT PORTAL RESOLVER BY PIN
 * Usable from the Landing page, Hubs, or any portal entry point
 */
window.resolveClientPortalByPIN = function(rawPin) {
    if (!rawPin) return { success: false, message: "Por favor ingresa tu clave o PIN personal." };
    const pin = String(rawPin).trim().toLowerCase();

    // Map of known active clients
    const portalMap = {
        "rocio2026": {
            id: "rocio",
            name: "Rocío",
            url: "planes/rocio/index.html",
            storageKey: "ah_auth_rocio"
        },
        "matias2026": {
            id: "matias",
            name: "Matías González",
            url: "planes/matias/index.html",
            storageKey: "ah_auth_matias"
        },
        "alejandra2026": {
            id: "alejandra",
            name: "Alejandra Mattei",
            url: "planes/alejandra/index.html",
            storageKey: "ah_auth_alejandra"
        },
        "melissa2026": {
            id: "melissa",
            name: "Melissa Henríquez",
            url: "planes/melissa/index.html",
            storageKey: "ah_auth_melissa"
        },
        "antonia2026": {
            id: "antonia",
            name: "Antonia Jofré",
            url: "planes/antonia/index.html",
            storageKey: "ah_auth_antonia"
        },
        "antojofre1995": {
            id: "antonia",
            name: "Antonia Jofré",
            url: "planes/antonia/index.html",
            storageKey: "ah_auth_antonia"
        },
        "antojofre23091995": {
            id: "antonia",
            name: "Antonia Jofré",
            url: "planes/antonia/index.html",
            storageKey: "ah_auth_antonia"
        },
        "antojofre": {
            id: "antonia",
            name: "Antonia Jofré",
            url: "planes/antonia/index.html",
            storageKey: "ah_auth_antonia"
        },
        "demo2026": {
            id: "demo",
            name: "Caso Demostrativo",
            url: "planes-demo.html",
            storageKey: "ah_auth_demo"
        },
        "invitado": {
            id: "demo",
            name: "Caso Demostrativo",
            url: "planes-demo.html",
            storageKey: "ah_auth_demo"
        }
    };

    // Consultant / Master PINs
    const masterPins = ["diego2026", "admin2026", "diego_ah_master", "diegop1990", "master2026"];
    if (masterPins.includes(pin)) {
        localStorage.setItem("ah_client_auth_session", "authenticated_ok");
        localStorage.setItem("ah_consultor_auth", "true");
        const isClientOps = window.location.pathname.includes("02_CLIENTES_ACTIVOS");
        const masterUrl = isClientOps ? "Visualizador_Planes_de_Vuelo.html" : "visualizador.html";
        return {
            success: true,
            isMaster: true,
            name: "Diego González (Consultor)",
            url: masterUrl
        };
    }

    const client = portalMap[pin];
    if (client) {
        localStorage.setItem(client.storageKey, "authenticated_ok");
        localStorage.setItem(`client_authenticated_${client.id}`, "true");
        sessionStorage.setItem(`client_authenticated_${client.id}`, "true");
        localStorage.setItem("ah_client_auth_session", "authenticated_ok");

        return {
            success: true,
            id: client.id,
            name: client.name,
            url: client.url
        };
    }

    return {
        success: false,
        message: "Clave o PIN no reconocido. Si olvidaste tu acceso o aún no tienes tu Plan de Vuelo, escríbele directo a Diego."
    };
};

