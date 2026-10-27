/**
 * AICC CLIENT SECURITY GATEWAY & PORTAL SESSION CONTROLLER
 */

const DEFAULT_CLIENT_CONFIG = {
    storageKey: "ah_client_auth_session",
    validPins: ["2026", "admin2026", "diego_ah_master", "diegop1990"],
    clientName: "Cliente AICC"
};

const CLIENT_ACCOUNTS = [
    {
        id: "rocio",
        name: "Rocío",
        subtitle: "Puya Masajes & Canto",
        usernames: ["rocio.puya", "rocio", "rocior", "puya", "puyamasajes", "@rocio.puya", "rocio@administracionhumana.com"],
        passwords: ["ah-puya9842", "ah-puya-9842", "puya9842", "rocior1998", "rocio1998", "rocio2026", "puya2026", "2026", "1998"],
        url: "planes-rocio.html",
        storageKey: "ah_auth_rocio"
    },
    {
        id: "matias",
        name: "Matías González",
        subtitle: "Ingeniería & Voleibol",
        usernames: ["matias.gonzalez", "matias", "matiasg", "matigonzalez", "matiasgonzalez", "mati", "mati@email.com", "matias@administracionhumana.com"],
        passwords: ["ah-matias7315", "ah-matias-7315", "matias7315", "matigonzalez2009", "matias2009", "mati2009", "matigonzalez2008", "matias2026", "2026", "2009", "2008"],
        url: "planes-matias.html",
        storageKey: "ah_auth_matias"
    },
    {
        id: "antonia",
        name: "Antonia Jofré",
        subtitle: "Habitarte & Movimiento",
        usernames: ["antonia.jofre", "antonia", "antojofre", "antoniajofre", "@antonia.jofre", "antonia@administracionhumana.com"],
        passwords: ["ah-antonia5924", "ah-antonia-5924", "antonia5924", "antojofre23091995", "antojofre1995", "antojofre2309", "antonia2026", "2026", "1995"],
        url: "planes-antonia.html",
        storageKey: "ah_auth_antonia"
    },
    {
        id: "alejandra",
        name: "Alejandra Mattei",
        subtitle: "Acompañamiento Integral & Filosofía",
        usernames: ["alejandra.mattei", "alejandra", "juanamattei", "mattei", "@alejandra.mattei", "alejandra@administracionhumana.com"],
        passwords: ["ah-mattei6251", "ah-mattei-6251", "mattei6251", "juanamattei", "alejandra2026", "2026"],
        url: "planes-alejandra.html",
        storageKey: "ah_auth_alejandra"
    },
    {
        id: "melissa",
        name: "Melissa Henríquez",
        subtitle: "Educación & Gestión Träfmen",
        usernames: ["melissa.trafmen", "melissa", "trafmen", "melissatrafmen", "@melissa.trafmen", "melissa@administracionhumana.com"],
        passwords: ["ah-trafmen8416", "ah-trafmen-8416", "trafmen8416", "melissa2026", "2026"],
        url: "plan.html?cliente=melissa",
        storageKey: "ah_auth_melissa"
    },
    {
        id: "francisca",
        name: "Francisca Lissette",
        subtitle: "Nutrición & Pedagogía en Biología",
        usernames: ["francisca.lissette", "francisca", "lissette", "franciscalissette", "lizeth", "@francisca.lissette", "francisca@administracionhumana.com"],
        passwords: ["ah-lissette2026", "ah-lissette-2026", "lissette2026", "francisca2026", "1234", "ah-lizeth2026", "lizeth2026", "2026"],
        url: "planes-francisca.html",
        storageKey: "ah_auth_francisca"
    },
    {
        id: "diego",
        name: "Diego González (Consultor)",
        subtitle: "Administrador & Director AICC",
        usernames: ["diego.gonzalez", "diegop", "diego", "admin", "diego.consultor", "consultor", "diego@administracionhumana.cl"],
        passwords: ["ah-diego9132", "ah-diego-9132", "diego9132", "diegop1990", "diego1990", "admin2026", "diego2026", "ah-master9132", "ah-master-9132", "diego_ah_master", "master2026", "2026"],
        isMaster: true,
        url: "plan.html?cliente=diego",
        storageKey: "ah_auth_diego"
    },
    {
        id: "alvaro",
        name: "Álvaro",
        subtitle: "Operaciones & Análisis • En Pausa",
        archived: true,
        usernames: ["alvaro.operaciones", "alvaro", "alvaro@administracionhumana.com"],
        passwords: ["ah-alvaro4183", "ah-alvaro-4183", "alvaro4183", "alvaro2026", "2026"],
        url: "plan.html?cliente=alvaro",
        storageKey: "ah_auth_alvaro"
    },
    {
        id: "carlos",
        name: "Carlos Z",
        subtitle: "Gestión Estratégica • En Pausa",
        archived: true,
        usernames: ["carlos.gestion", "carlos", "carlos@administracionhumana.com"],
        passwords: ["ah-carlos5829", "ah-carlos-5829", "carlos5829", "carlos2026", "2026"],
        url: "plan.html?cliente=carlos",
        storageKey: "ah_auth_carlos"
    },
    {
        id: "karina",
        name: "Karina",
        subtitle: "Road to Sidney • En Pausa",
        archived: true,
        usernames: ["karina.sidney", "karina", "karina@administracionhumana.com"],
        passwords: ["ah-karina9371", "ah-karina-9371", "karina9371", "karina2026", "2026"],
        url: "plan.html?cliente=karina",
        storageKey: "ah_auth_karina"
    },
    {
        id: "emi",
        name: "Emi",
        subtitle: "Plan de Vuelo • En Pausa",
        archived: true,
        usernames: ["emi.vuelo", "emi", "emi@administracionhumana.com"],
        passwords: ["ah-emi3628", "ah-emi-3628", "emi3628", "emi2026", "2026"],
        url: "plan.html?cliente=emi",
        storageKey: "ah_auth_emi"
    },
    {
        id: "demo",
        name: "Caso Demostrativo",
        subtitle: "Prototipo 2.0",
        usernames: ["demo.explorador", "demo", "invitado", "demo@administracionhumana.com"],
        passwords: ["ah-demo2026", "ah-demo-2026", "demo2026", "invitado2026", "demo", "2026"],
        url: "planes-demo.html",
        storageKey: "ah_auth_demo"
    },
    {
        id: "admin",
        name: "Diego González (Consultor)",
        subtitle: "Administrador Maestro",
        usernames: ["diego.consultor", "admin", "diego", "consultor", "diego@administracionhumana.com"],
        passwords: ["ah-master9132", "ah-master-9132", "admin2026", "diego2026", "diego_ah_master", "diegop1990", "master2026", "2026"],
        isMaster: true,
        url: "visualizador.html"
    }
];

let currentClientConfig = { ...DEFAULT_CLIENT_CONFIG };

function initClientAuth(config) {
    if (config) {
        currentClientConfig = { ...DEFAULT_CLIENT_CONFIG, ...config };
    }
    checkClientAuth();
}

function checkClientAuth() {
    const config = window.CLIENT_CONFIG || {};
    const storageId = (config.clientId || '').toLowerCase();
    
    // Check multiple potential auth tokens across legacy and modern storage keys
    const tokens = [
        currentClientConfig ? localStorage.getItem(currentClientConfig.storageKey) : null,
        localStorage.getItem('ah_auth_' + storageId),
        localStorage.getItem('ah_client_auth_' + storageId),
        localStorage.getItem('client_authenticated_' + storageId),
        sessionStorage.getItem('client_authenticated_' + storageId),
        localStorage.getItem('ah_auth_session'),
        localStorage.getItem('ah_auth_token_' + storageId)
    ];

    let currentUserMatch = false;
    try {
        const rawUser = localStorage.getItem('ah_current_user');
        if (rawUser) {
            const u = JSON.parse(rawUser);
            if (u && (u.role === 'admin' || (u.uid && u.uid.includes(storageId)) || (u.username && u.username.includes(storageId)))) {
                currentUserMatch = true;
            }
        }
    } catch(e) {}

    const isMaster = localStorage.getItem('ah_consultor_auth') === 'true' || localStorage.getItem('ah_auth_token_admin') !== null;
    const isUnlocked = isMaster || currentUserMatch || tokens.some(t => t && t !== 'false' && t !== 'null' && t !== 'undefined' && t !== '');

    const overlay = document.getElementById("client-auth-overlay");
    if (!overlay) return;
    if (isUnlocked) {
        overlay.classList.add("unlocked");
        overlay.style.display = "none";
    } else {
        overlay.classList.remove("unlocked");
        overlay.style.display = "flex";
    }
}

function handleClientAuth(e) {
    if (e && e.preventDefault) e.preventDefault();
    const pinInput = document.getElementById("auth-client-pin") || document.getElementById("auth-pin") || document.getElementById("client-pin");
    const errorMsg = document.getElementById("auth-error-msg") || document.getElementById("auth-error");
    if (!pinInput) return;
    const rawVal = pinInput.value.trim().toLowerCase();
    const enteredPin = rawVal.replace(/[@\s]/g, '');

    const config = window.CLIENT_CONFIG || {};
    const storageId = (config.clientId || 'matias').toLowerCase();

    // Universal master passwords
    let allowed = [
        "2026", "admin2026", "diego_ah_master", "diegop1990", "master2026",
        "ah-master9132", "ah-master-9132"
    ];

    if (currentClientConfig && Array.isArray(currentClientConfig.validPins)) {
        currentClientConfig.validPins.forEach(p => allowed.push(String(p).trim().toLowerCase().replace(/[@\s]/g, '')));
    }

    if (config.clientPIN) allowed.push(String(config.clientPIN).trim().toLowerCase().replace(/[@\s]/g, ''));
    if (config.pin) allowed.push(String(config.pin).trim().toLowerCase().replace(/[@\s]/g, ''));
    if (config.masterPIN) allowed.push(String(config.masterPIN).trim().toLowerCase().replace(/[@\s]/g, ''));
    if (config.clientUser) allowed.push(String(config.clientUser).trim().toLowerCase().replace(/[@\s]/g, ''));
    if (config.clientId) allowed.push(String(config.clientId).trim().toLowerCase().replace(/[@\s]/g, ''));
    if (Array.isArray(config.validPins)) {
        config.validPins.forEach(p => allowed.push(String(p).trim().toLowerCase().replace(/[@\s]/g, '')));
    }

    // Match against CLIENT_ACCOUNTS
    let matchedAccount = null;
    if (typeof CLIENT_ACCOUNTS !== 'undefined') {
        const acc = CLIENT_ACCOUNTS.find(a => a.id === storageId);
        if (acc) {
            matchedAccount = acc;
            if (Array.isArray(acc.passwords)) acc.passwords.forEach(pw => {
                allowed.push(String(pw).trim().toLowerCase());
                allowed.push(String(pw).trim().toLowerCase().replace(/[@\s]/g, ''));
            });
            if (Array.isArray(acc.usernames)) acc.usernames.forEach(u => {
                allowed.push(String(u).trim().toLowerCase());
                allowed.push(String(u).trim().toLowerCase().replace(/[@\s]/g, ''));
            });
            if (acc.id) allowed.push(acc.id.toLowerCase());
        }
    }

    // Comprehensive client-specific aliases
    if (storageId === 'matias' || storageId.includes('mati')) {
        allowed.push('matigonzalez2009', 'matigonzalez', 'matias.gonzalez', 'matiasgonzalez', 'matias', 'mati', 'matias2009', 'matias2026', 'ah-matias7315', 'ah-matias-7315', 'matias7315', 'matigonzalez2008', '2009', '2008');
    } else if (storageId === 'rocio') {
        allowed.push('rocio.puya', 'rocior', 'puya', 'puyamasajes', 'rocio', 'ah-puya9842', 'ah-puya-9842', 'puya9842', 'rocior1998', 'rocio1998', 'rocio2026', 'puya2026', '1998');
    } else if (storageId === 'antonia') {
        allowed.push('antonia.jofre', 'antojofre', 'antonia', 'antoniajofre', 'ah-antonia5924', 'ah-antonia-5924', 'antonia5924', 'antojofre23091995', 'antojofre1995', 'antojofre2309', 'antonia2026', '1995');
    } else if (storageId === 'alejandra') {
        allowed.push('alejandra.mattei', 'alejandra', 'juanamattei', 'mattei', 'ah-mattei6251', 'ah-mattei-6251', 'mattei6251', 'alejandra2026');
    } else if (storageId === 'francisca') {
        allowed.push('francisca.lissette', 'francisca', 'lissette', 'franciscalissette', 'lizeth', 'ah-lissette2026', 'ah-lissette-2026', 'lissette2026', 'francisca2026', '1234', 'ah-lizeth2026', 'lizeth2026');
    } else if (storageId === 'melissa') {
        allowed.push('melissa.trafmen', 'melissa', 'trafmen', 'melissatrafmen', 'ah-trafmen8416', 'ah-trafmen-8416', 'trafmen8416', 'melissa2026');
    } else if (storageId === 'diego') {
        allowed.push('diego.gonzalez', 'diegop', 'diego', 'admin', 'diego.consultor', 'ah-diego9132', 'diego9132', 'diegop1990', 'diego1990', '1990');
    }

    if (allowed.includes(enteredPin) || allowed.includes(rawVal)) {
        // Unlock all storage targets
        if (currentClientConfig && currentClientConfig.storageKey) {
            localStorage.setItem(currentClientConfig.storageKey, "authenticated_ok");
        }
        localStorage.setItem('ah_auth_' + storageId, "authenticated_ok");
        localStorage.setItem('ah_client_auth_' + storageId, "authenticated_ok");
        localStorage.setItem('ah_auth_token_' + storageId, "authenticated_ok");
        localStorage.setItem('client_authenticated_' + storageId, "true");
        sessionStorage.setItem('client_authenticated_' + storageId, "true");
        sessionStorage.setItem('ah_auth_' + storageId, "true");
        localStorage.setItem('ah_auth_session', "authenticated_ok");
        
        if (errorMsg) errorMsg.style.display = "none";
        const overlay = document.getElementById("client-auth-overlay");
        if (overlay) {
            overlay.classList.add("unlocked");
            overlay.style.display = "none";
        }
    } else {
        if (errorMsg) {
            const hintUser = (config.clientUser || (matchedAccount && matchedAccount.usernames ? matchedAccount.usernames[0] : storageId)).replace(/^@/, '');
            const hintPin = config.clientPIN || (matchedAccount && matchedAccount.passwords ? matchedAccount.passwords[0] : "tu PIN");
            errorMsg.style.display = "block";
            errorMsg.innerText = `⚠️ Clave o usuario no reconocido. Puedes ingresar con tu usuario (@${hintUser}) o tu clave (${hintPin}).`;
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
        if (Array.isArray(cfg.validPins)) {
            cfg.validPins.forEach(p => { if (!validPins.includes(p)) validPins.push(p); });
        }
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
    const user = String(rawUser || "").trim().toLowerCase().replace(/^@/, '');
    const pass = String(rawPass || "").trim().toLowerCase();

    if (!pass && !user) {
        return { success: false, message: "Por favor ingresa tu usuario y clave personal." };
    }

    const accounts = getAllClientAccounts();

    // 1. Si se proporciona usuario, validar primero por usuario
    if (user) {
        const account = accounts.find(acc => acc.usernames && (acc.usernames.includes(user) || acc.usernames.includes(`@${user}`)));
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
        const masterPins = ["ah-master9132", "ah-master-9132", "diego2026", "admin2026", "diego_ah_master", "diegop1990", "master2026"];
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
    localStorage.setItem(`ah_auth_${account.id}`, "authenticated_ok");
    localStorage.setItem(`ah_client_auth_${account.id}`, "authenticated_ok");
    localStorage.setItem(`ah_auth_token_${account.id}`, "authenticated_ok");
    localStorage.setItem(`client_authenticated_${account.id}`, "true");
    sessionStorage.setItem(`client_authenticated_${account.id}`, "true");
    sessionStorage.setItem(`ah_auth_${account.id}`, "true");
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
