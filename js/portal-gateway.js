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
    const token = localStorage.getItem(currentClientConfig.storageKey);
    const overlay = document.getElementById("client-auth-overlay");
    if (!overlay) return;
    if (token === "authenticated_ok") {
        overlay.classList.add("unlocked");
    } else {
        overlay.classList.remove("unlocked");
    }
}

function handleClientAuth(e) {
    e.preventDefault();
    const pinInput = document.getElementById("auth-client-pin");
    const errorMsg = document.getElementById("auth-error-msg");
    if (!pinInput) return;
    const enteredPin = pinInput.value.trim().toLowerCase();

    if (currentClientConfig.validPins.map(p => p.toLowerCase()).includes(enteredPin)) {
        localStorage.setItem(currentClientConfig.storageKey, "authenticated_ok");
        if (errorMsg) errorMsg.style.display = "none";
        const overlay = document.getElementById("client-auth-overlay");
        if (overlay) overlay.classList.add("unlocked");
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
