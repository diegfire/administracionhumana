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
/**
 * CANONICAL CLIENT CREDENTIALS REGISTRY
 * Cada persona cuenta con su usuario específico y clave/contraseña específica.
 * Sin sugerencias públicas ni filtración de credenciales.
 */
const CLIENT_ACCOUNTS = [
    {
        id: "rocio",
        name: "Rocío",
        subtitle: "Puya Masajes & Canto",
        usernames: ["rocio", "puya", "puyamasajes", "rocio@administracionhumana.com"],
        passwords: ["rocio2026", "puya2026"],
        url: "planes/rocio/index.html",
        storageKey: "ah_auth_rocio"
    },
    {
        id: "matias",
        name: "Matías González",
        subtitle: "Ingeniería & Software",
        usernames: ["matias", "matias.gonzalez", "matias@administracionhumana.com"],
        passwords: ["matias2026"],
        url: "planes/matias/index.html",
        storageKey: "ah_auth_matias"
    },
    {
        id: "antonia",
        name: "Antonia Jofré",
        subtitle: "Habitarte & Movimiento",
        usernames: ["antonia", "antojofre", "antonia@administracionhumana.com"],
        passwords: ["antonia2026", "antojofre1995", "antojofre23091995", "antojofre"],
        url: "planes/antonia/index.html",
        storageKey: "ah_auth_antonia"
    },
    {
        id: "alejandra",
        name: "Alejandra Mattei",
        subtitle: "Acompañamiento Integral",
        usernames: ["alejandra", "alejandra.mattei", "alejandra@administracionhumana.com"],
        passwords: ["alejandra2026"],
        url: "planes/alejandra/index.html",
        storageKey: "ah_auth_alejandra"
    },
    {
        id: "melissa",
        name: "Melissa Henríquez",
        subtitle: "Educación & Gestión",
        usernames: ["melissa", "melissa.henriquez", "melissa@administracionhumana.com"],
        passwords: ["melissa2026"],
        url: "planes/melissa/index.html",
        storageKey: "ah_auth_melissa"
    },
    {
        id: "demo",
        name: "Caso Demostrativo",
        subtitle: "Prototipo 2.0",
        usernames: ["demo", "invitado", "demo@administracionhumana.com"],
        passwords: ["demo2026", "invitado2026", "demo"],
        url: "planes-demo.html",
        storageKey: "ah_auth_demo"
    },
    {
        id: "admin",
        name: "Diego González (Consultor)",
        subtitle: "Administrador Maestro",
        usernames: ["admin", "diego", "consultor", "diego@administracionhumana.com"],
        passwords: ["admin2026", "diego2026", "diego_ah_master", "diegop1990", "master2026"],
        isMaster: true,
        url: "visualizador.html"
    }
];

function getAllClientAccounts() {
    let accounts = CLIENT_ACCOUNTS.map(a => ({ ...a, usernames: [...a.usernames], passwords: [...a.passwords] }));
    try {
        const custom = localStorage.getItem('ah_admin_clients_custom');
        if (custom) {
            const parsed = JSON.parse(custom);
            if (Array.isArray(parsed)) {
                parsed.forEach(c => {
                    if (!c) return;
                    const cleanUser = String(c.username || c.id || "").trim().toLowerCase();
                    const cleanPin = String(c.pin || c.password || "").trim().toLowerCase();
                    const cleanId = String(c.id || cleanUser).trim().toLowerCase();
                    
                    const existingIdx = accounts.findIndex(a => a.id === cleanId || (a.usernames && a.usernames.includes(cleanUser)));
                    const customAccount = {
                        id: cleanId,
                        name: c.name || cleanUser,
                        subtitle: c.subtitle || "Cliente de Consultoría",
                        usernames: cleanUser ? [cleanUser, `${cleanUser}@administracionhumana.com`] : [cleanId],
                        passwords: cleanPin ? [cleanPin] : [],
                        url: c.planUrl || "planes-demo.html",
                        storageKey: `ah_auth_${cleanId}`
                    };

                    if (existingIdx >= 0) {
                        accounts[existingIdx] = {
                            ...accounts[existingIdx],
                            ...customAccount,
                            usernames: Array.from(new Set([...(accounts[existingIdx].usernames || []), ...customAccount.usernames])),
                            passwords: Array.from(new Set([...(accounts[existingIdx].passwords || []), ...customAccount.passwords]))
                        };
                    } else {
                        accounts.unshift(customAccount);
                    }
                });
            }
        }
    } catch(e) {
        console.warn("[Portal Gateway] Error al sincronizar cuentas de cliente:", e);
    }
    return accounts;
}
window.getAllClientAccounts = getAllClientAccounts;

window.resolveClientPortalByCredentials = function(rawUser, rawPass) {
    const user = String(rawUser || "").trim().toLowerCase();
    const pass = String(rawPass || "").trim().toLowerCase();

    if (!pass && !user) {
        return { success: false, message: "Por favor ingresa tu usuario y clave personal." };
    }

    const accounts = getAllClientAccounts();

    // 1. Si se proporciona usuario, validar primero por usuario
    if (user) {
        const account = accounts.find(acc => acc.usernames && acc.usernames.includes(user));
        if (!account) {
            return { 
                success: false, 
                message: `El usuario "${rawUser.trim()}" no fue encontrado en el sistema. Verifica que esté bien escrito o solicita tus credenciales a Diego.` 
            };
        }
        if (!account.passwords || !account.passwords.includes(pass)) {
            return { 
                success: false, 
                message: `Contraseña incorrecta para el usuario "${rawUser.trim()}". Si olvidaste tu clave, solicítala a Diego por WhatsApp.` 
            };
        }
        return grantAccessSession(account);
    }

    // 2. Si no se especificó usuario pero sí clave (modo directo o pruebas)
    if (pass) {
        const masterPins = ["diego2026", "admin2026", "diego_ah_master", "diegop1990", "master2026"];
        if (masterPins.includes(pass)) {
            const adminAcc = accounts.find(acc => acc.id === "admin") || CLIENT_ACCOUNTS.find(acc => acc.id === "admin");
            return grantAccessSession(adminAcc);
        }
        const account = accounts.find(acc => acc.passwords && acc.passwords.includes(pass));
        if (account) {
            return grantAccessSession(account);
        }
    }

    return {
        success: false,
        message: "Credenciales no reconocidas. Por favor verifica tu usuario y contraseña asignados."
    };
};

function grantAccessSession(account) {
    if (account.storageKey) {
        localStorage.setItem(account.storageKey, "authenticated_ok");
    }
    localStorage.setItem(`client_authenticated_${account.id}`, "true");
    sessionStorage.setItem(`client_authenticated_${account.id}`, "true");
    localStorage.setItem("ah_client_auth_session", "authenticated_ok");
    localStorage.setItem("ah_current_user", JSON.stringify({
        uid: `user_${account.id}`,
        username: account.usernames ? account.usernames[0] : account.id,
        fullName: account.name,
        role: account.isMaster ? 'admin' : 'client',
        flightPlanUrl: account.url
    }));

    if (account.isMaster) {
        localStorage.setItem("ah_consultor_auth", "true");
        const isClientOps = window.location.pathname.includes("02_CLIENTES_ACTIVOS");
        const masterUrl = isClientOps ? "Visualizador_Planes_de_Vuelo.html" : "visualizador.html";
        return {
            success: true,
            isMaster: true,
            id: account.id,
            name: account.name,
            url: masterUrl
        };
    }

    return {
        success: true,
        isMaster: false,
        id: account.id,
        name: account.name,
        url: account.url
    };
}

// Wrapper canónico para compatibilidad hacia atrás
window.resolveClientPortalByPIN = function(rawPin, optionalPass) {
    if (optionalPass !== undefined) {
        return window.resolveClientPortalByCredentials(rawPin, optionalPass);
    }
    return window.resolveClientPortalByCredentials("", rawPin);
};
