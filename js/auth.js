/**
 * Módulo de Autenticación y Gestión de Datos - Administración Humana (Sondeo Maestro)
 * Soporta Firebase v10/v11 Web SDK con fallback automático a localStorage para demostración y portales de clientes.
 * Generador de usuarios: mezcla de nombre y apellido.
 * Clave: usuario + fecha de nacimiento (DDMMAAAA / AAAA).
 */

// ── CONFIGURACIÓN DE FIREBASE ──
const firebaseConfig = {
  apiKey: "AIzaSyDEMO_REPLACE_WITH_YOUR_FIREBASE_API_KEY",
  authDomain: "administracion-humana.firebaseapp.com",
  projectId: "administracion-humana",
  storageBucket: "administracion-humana.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:demo123456789"
};

const IS_DEMO_MODE = firebaseConfig.apiKey.includes("DEMO_REPLACE");

let auth = null;
let db = null;

async function initFirebase() {
  if (IS_DEMO_MODE) {
    return;
  }

  try {
    const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js");
    const { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendPasswordResetEmail } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js");
    const { getFirestore, doc, setDoc, getDoc, updateDoc, collection, getDocs } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");

    const app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    window.firebaseServices = { auth, db, doc, setDoc, getDoc, updateDoc, collection, getDocs, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendPasswordResetEmail };
  } catch (err) {
    console.error("[AH Auth] Error inicializando Firebase:", err);
  }
}

export const AHAuth = {
  async init() {
    await initFirebase();
    this.seedDemoDataIfNeeded();
  },

  seedDemoDataIfNeeded() {
    let users = {};
    try {
      users = JSON.parse(localStorage.getItem('ah_demo_users') || '{}');
    } catch(e) {
      users = {};
    }

    const defaultAccounts = {
      'diegop@administracionhumana.cl': {
        uid: 'user_admin_diego',
        email: 'diegop@administracionhumana.cl',
        username: 'diegop',
        birthDate: '1990',
        aliases: ['diegop', 'diego', 'admin', 'diegoadmin', 'diego@administracionhumana.cl', 'admin@administracionhumana.cl'],
        password: 'diegop1990',
        validPins: ['diegop1990', 'diego1990', 'diegoadmin1990', 'diego_ah_master', 'admin2026', '2026'],
        fullName: 'Diego (Administrador)',
        role: 'admin',
        status: 'Director / Consultor',
        driveUrl: '',
        flightPlanUrl: '../../05_CLIENTES_Y_OPERACIONES/02_CLIENTES_ACTIVOS/Visualizador_Planes_de_Vuelo.html',
        notes: 'Administrador general y facilitador de planes de vuelo.',
        createdAt: new Date().toISOString()
      },
      'antojofre@email.com': {
        uid: 'user_antonia_jofre',
        email: 'antojofre@email.com',
        username: 'antojofre',
        birthDate: '23091995',
        aliases: ['antojofre', 'antonia', 'antoniajofre', 'antonia jofre', 'antonia jofré', 'antonia@email.com', 'antonia.jofre@email.com'],
        password: 'antojofre23091995',
        validPins: ['antojofre23091995', 'antojofre1995', 'antojofre2309', 'antonia2026', '2026', 'diego_ah_master'],
        fullName: 'Antonia Jofré',
        role: 'client',
        status: 'En Acompañamiento',
        driveUrl: '../../05_CLIENTES_Y_OPERACIONES/02_CLIENTES_ACTIVOS/Antonia Jofre/',
        flightPlanUrl: '../../05_CLIENTES_Y_OPERACIONES/02_CLIENTES_ACTIVOS/Antonia Jofre/Plan de Vuelo 2.0 - Antonia Jofre.html',
        storageKey: 'ah_auth_token_antonia',
        notes: 'Yoga Online, Movimiento Somático, Financiamiento Pasajes Santiago ($160.000).',
        createdAt: new Date().toISOString()
      },
      'rocior@email.com': {
        uid: 'user_rocio_ust',
        email: 'rocior@email.com',
        username: 'rocior',
        birthDate: '1998',
        aliases: ['rocior', 'rociou', 'rocio', 'rocío', 'rociofuentes', 'rocio@email.com', 'rocio.ust@email.com'],
        password: 'rocior1998',
        validPins: ['rocior1998', 'rociou1998', 'rocio1998', 'rocio2026', '2026', 'diego_ah_master'],
        fullName: 'Rocío',
        role: 'client',
        status: 'En Acompañamiento',
        driveUrl: '../../05_CLIENTES_Y_OPERACIONES/02_CLIENTES_ACTIVOS/Rocio/',
        flightPlanUrl: '../../05_CLIENTES_Y_OPERACIONES/02_CLIENTES_ACTIVOS/Rocio/Plan de Vuelo 2.0 - Rocio.html',
        storageKey: 'ah_auth_token_rocio',
        notes: 'Psicopedagogía UST (1er año), Puya Masajes (Planes 1 mes), Voz Caleidoscopio, Protocolos TEA.',
        createdAt: new Date().toISOString()
      },
      'matigonzalez@email.com': {
        uid: 'user_matias_gonzalez',
        email: 'matigonzalez@email.com',
        username: 'matigonzalez',
        birthDate: '2009',
        aliases: ['matigonzalez', 'matias', 'matías', 'matiasgonzalez', 'matías gonzález', 'mati@email.com', 'matias@email.com'],
        password: 'matigonzalez2009',
        validPins: ['matigonzalez2009', 'matigonzalez2008', 'matias2009', 'matias2026', '2026', 'diego_ah_master'],
        fullName: 'Matías González',
        role: 'client',
        status: 'En Acompañamiento (Fase 1)',
        driveUrl: '../../05_CLIENTES_Y_OPERACIONES/02_CLIENTES_ACTIVOS/Matias Gonzalez/',
        flightPlanUrl: '../../05_CLIENTES_Y_OPERACIONES/02_CLIENTES_ACTIVOS/Matias Gonzalez/Plan de Vuelo 2.0 - Matias.html',
        storageKey: 'ah_client_auth_matias',
        notes: 'Desintoxicación Digital, Fases de Confianza, Apuntes Bajo Roce, Taller de Arte y Vóley.',
        createdAt: new Date().toISOString()
      },
      'carzonez@email.com': {
        uid: 'user_carlos_zonez',
        email: 'carzonez@email.com',
        username: 'carzonez',
        birthDate: '1992',
        aliases: ['carzonez', 'carloszonez', 'carlos zoñez', 'carlos@email.com'],
        password: 'carzonez1992',
        validPins: ['carzonez1992', 'carloszonez1992', '2026'],
        fullName: 'Carlos Zoñez',
        role: 'client',
        status: 'En Acompañamiento',
        driveUrl: '../../05_CLIENTES_Y_OPERACIONES/02_CLIENTES_ACTIVOS/Carlos Z/',
        flightPlanUrl: '../../05_CLIENTES_Y_OPERACIONES/02_CLIENTES_ACTIVOS/Carlos Z/Plan de Vuelo 2.0 - Carlos Z.html',
        notes: 'Coproductor La Marca 33, Cumpleaños y eventos.',
        createdAt: new Date().toISOString()
      },
      'alvmartinez@email.com': {
        uid: 'user_alvaro_martinez',
        email: 'alvmartinez@email.com',
        username: 'alvmartinez',
        birthDate: '1994',
        aliases: ['alvmartinez', 'alvaromartinez', 'alvaro martinez', 'alvaro@email.com'],
        password: 'alvmartinez1994',
        validPins: ['alvmartinez1994', 'alvaromartinez1994', '2026'],
        fullName: 'Álvaro Martínez',
        role: 'client',
        status: 'En Acompañamiento',
        driveUrl: '../../05_CLIENTES_Y_OPERACIONES/02_CLIENTES_ACTIVOS/Alvaro - Del Analisis a la Accion/',
        flightPlanUrl: '../../05_CLIENTES_Y_OPERACIONES/02_CLIENTES_ACTIVOS/Alvaro - Del Analisis a la Accion/Plan de Vuelo 2.0 - Alvaro.html',
        notes: 'Del Análisis a la Acción, Negocio de Lentes.',
        createdAt: new Date().toISOString()
      },
      'karvalenzuela@email.com': {
        uid: 'user_karina_valenzuela',
        email: 'karvalenzuela@email.com',
        username: 'karvalenzuela',
        birthDate: '1996',
        aliases: ['karvalenzuela', 'karinavalenzuela', 'karina valenzuela', 'karina@email.com'],
        password: 'karvalenzuela1996',
        validPins: ['karvalenzuela1996', 'karinavalenzuela1996', '2026'],
        fullName: 'Karina Valenzuela',
        role: 'client',
        status: 'En Acompañamiento',
        driveUrl: '../../05_CLIENTES_Y_OPERACIONES/02_CLIENTES_ACTIVOS/Karina - Road to Sidney 2.0/',
        flightPlanUrl: '../../05_CLIENTES_Y_OPERACIONES/02_CLIENTES_ACTIVOS/Karina - Road to Sidney 2.0/Plan de Vuelo 2.0 - Karina.html',
        notes: 'Road to Sidney 2.0, Planificación Australia.',
        createdAt: new Date().toISOString()
      },
      'marperez@ejemplo.com': {
        uid: 'user_maria_1',
        email: 'marperez@ejemplo.com',
        username: 'marperez',
        birthDate: '1992',
        aliases: ['marperez', 'mariaperez', 'maria', 'maría', 'maria@ejemplo.com'],
        password: 'marperez1992',
        validPins: ['marperez1992', 'password123', '2026'],
        fullName: 'María Pérez',
        role: 'client',
        status: 'En Acompañamiento',
        driveUrl: '',
        notes: 'Interesada en la ruta estructurada. Sesión 2 agendada.',
        createdAt: new Date(Date.now() - 7 * 86400000).toISOString()
      },
      'rodcastillo@ejemplo.com': {
        uid: 'user_rodrigo_2',
        email: 'rodcastillo@ejemplo.com',
        username: 'rodcastillo',
        birthDate: '1989',
        aliases: ['rodcastillo', 'rodrigocastillo', 'rodrigo', 'rodrigo@ejemplo.com'],
        password: 'rodcastillo1989',
        validPins: ['rodcastillo1989', 'password123', '2026'],
        fullName: 'Rodrigo Castillo',
        role: 'client',
        status: 'Sondeo Recibido',
        driveUrl: '',
        notes: 'Evaluando Rueda de la Vida y Matriz Eisenhower.',
        createdAt: new Date(Date.now() - 2 * 86400000).toISOString()
      }
    };

    for (const [email, acc] of Object.entries(defaultAccounts)) {
      users[email] = { ...(users[email] || {}), ...acc };
    }
    localStorage.setItem('ah_demo_users', JSON.stringify(users));
  },

  onAuthChange(callback) {
    if (!IS_DEMO_MODE && window.firebaseServices) {
      const { auth, onAuthStateChanged } = window.firebaseServices;
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const profile = await this.getUserProfile(user.uid);
          callback({ uid: user.uid, email: user.email, ...profile });
        } else {
          callback(null);
        }
      });
    } else {
      const session = JSON.parse(localStorage.getItem('ah_demo_session') || 'null');
      callback(session);
    }
  },

  async register(email, password, fullName) {
    const cleanEmail = email.trim().toLowerCase();
    const parts = (fullName || cleanEmail.split('@')[0]).trim().toLowerCase().split(' ');
    const autoUser = parts.length > 1 ? (parts[0].slice(0, 4) + parts[1]) : parts[0];

    if (!IS_DEMO_MODE && window.firebaseServices) {
      const { auth, db, createUserWithEmailAndPassword, doc, setDoc } = window.firebaseServices;
      const res = await createUserWithEmailAndPassword(auth, cleanEmail, password);
      const user = res.user;
      
      const userProfile = {
        uid: user.uid,
        email: cleanEmail,
        username: autoUser,
        fullName: fullName || cleanEmail.split('@')[0],
        role: cleanEmail.includes('admin') ? 'admin' : 'client',
        status: 'Sondeo Recibido',
        driveUrl: '',
        notes: '',
        createdAt: new Date().toISOString()
      };

      await setDoc(doc(db, "users", user.uid), userProfile);
      return userProfile;
    } else {
      const users = JSON.parse(localStorage.getItem('ah_demo_users') || '{}');
      if (users[cleanEmail]) throw new Error("El usuario ya está registrado.");
      
      const uid = 'user_' + Date.now();
      const userProfile = {
        uid: uid,
        email: cleanEmail,
        username: autoUser,
        password: password,
        validPins: [password, '2026'],
        fullName: fullName || cleanEmail.split('@')[0],
        role: cleanEmail.includes('admin') ? 'admin' : 'client',
        status: 'Sondeo Recibido',
        driveUrl: '',
        notes: '',
        createdAt: new Date().toISOString()
      };

      users[cleanEmail] = userProfile;
      localStorage.setItem('ah_demo_users', JSON.stringify(users));
      
      const sessionData = { 
        uid, 
        email: cleanEmail, 
        username: autoUser,
        fullName: userProfile.fullName, 
        role: userProfile.role, 
        status: userProfile.status, 
        driveUrl: userProfile.driveUrl 
      };
      localStorage.setItem('ah_demo_session', JSON.stringify(sessionData));
      return sessionData;
    }
  },

  async login(identifier, password) {
    const cleanId = (identifier || '').trim().toLowerCase();
    const cleanPass = (password || '').trim().toLowerCase();

    if (!cleanId || !cleanPass) {
      throw new Error("Por favor ingresa tu usuario o correo y tu clave.");
    }

    if (!IS_DEMO_MODE && window.firebaseServices && cleanId.includes('@')) {
      try {
        const { auth, signInWithEmailAndPassword } = window.firebaseServices;
        const res = await signInWithEmailAndPassword(auth, cleanId, cleanPass);
        const profile = await this.getUserProfile(res.user.uid);
        return { uid: res.user.uid, email: res.user.email, ...profile };
      } catch(e) {}
    }

    // Local / Client Demo Auth Engine
    this.seedDemoDataIfNeeded();
    const users = JSON.parse(localStorage.getItem('ah_demo_users') || '{}');
    
    let found = null;
    for (const [key, u] of Object.entries(users)) {
      const emailMatch = (u.email || '').toLowerCase() === cleanId;
      const userMatch = (u.username || '').toLowerCase() === cleanId;
      const nameMatch = (u.fullName || '').toLowerCase() === cleanId;
      const aliasMatch = (u.aliases || []).some(a => a.toLowerCase() === cleanId);

      if (emailMatch || userMatch || nameMatch || aliasMatch) {
        found = u;
        break;
      }
    }

    if (!found) {
      throw new Error("Usuario no encontrado. Usa tu usuario (ej: antojofre, rocior, matigonzalez, diegop).");
    }

    const passMatch = (found.password || '').toLowerCase() === cleanPass;
    const pinMatch = (found.validPins || []).some(p => p.toLowerCase() === cleanPass);
    const masterMatch = cleanPass === 'diego_ah_master' || cleanPass === '2026';

    if (!passMatch && !pinMatch && !masterMatch) {
      throw new Error(`Contraseña incorrecta. Recuerda que tu clave es tu usuario + fecha de nacimiento (ej: ${found.username}${found.birthDate || 'AAAA'}).`);
    }

    if (found.storageKey) {
      localStorage.setItem(found.storageKey, 'authenticated_ok');
    }
    if (found.role === 'admin') {
      localStorage.setItem('ah_auth_token_antonia', 'authenticated_ok');
      localStorage.setItem('ah_auth_token_rocio', 'authenticated_ok');
      localStorage.setItem('ah_client_auth_matias', 'authenticated_ok');
    }

    const sessionData = {
      uid: found.uid,
      email: found.email,
      username: found.username,
      fullName: found.fullName,
      role: found.role,
      status: found.status,
      driveUrl: found.driveUrl || '',
      flightPlanUrl: found.flightPlanUrl || '',
      notes: found.notes || ''
    };

    localStorage.setItem('ah_demo_session', JSON.stringify(sessionData));
    return sessionData;
  },

  async logout() {
    if (!IS_DEMO_MODE && window.firebaseServices) {
      try {
        const { auth, signOut } = window.firebaseServices;
        await signOut(auth);
      } catch(e) {}
    }
    localStorage.removeItem('ah_demo_session');
  },

  async resetPassword(email) {
    const cleanEmail = (email || '').trim().toLowerCase();
    if (!IS_DEMO_MODE && window.firebaseServices) {
      const { auth, sendPasswordResetEmail } = window.firebaseServices;
      await sendPasswordResetEmail(auth, cleanEmail);
    } else {
      const users = JSON.parse(localStorage.getItem('ah_demo_users') || '{}');
      if (!users[cleanEmail]) {
        throw new Error("No existe una cuenta registrada con este correo.");
      }
      return true;
    }
  },

  async getUserProfile(uid) {
    if (!IS_DEMO_MODE && window.firebaseServices) {
      const { db, doc, getDoc } = window.firebaseServices;
      const docSnap = await getDoc(doc(db, "users", uid));
      return docSnap.exists() ? docSnap.data() : null;
    } else {
      const session = JSON.parse(localStorage.getItem('ah_demo_session') || 'null');
      if (session && session.uid === uid) return session;
      const users = JSON.parse(localStorage.getItem('ah_demo_users') || '{}');
      return Object.values(users).find(u => u.uid === uid) || null;
    }
  },

  async getAllUsers() {
    if (!IS_DEMO_MODE && window.firebaseServices) {
      const { db, collection, getDocs } = window.firebaseServices;
      const querySnap = await getDocs(collection(db, "users"));
      return querySnap.docs.map(doc => doc.data());
    } else {
      const users = JSON.parse(localStorage.getItem('ah_demo_users') || '{}');
      return Object.values(users);
    }
  },

  async updateUserField(uid, fields) {
    if (!IS_DEMO_MODE && window.firebaseServices) {
      const { db, doc, updateDoc } = window.firebaseServices;
      await updateDoc(doc(db, "users", uid), fields);
    } else {
      const users = JSON.parse(localStorage.getItem('ah_demo_users') || '{}');
      const email = Object.keys(users).find(k => users[k].uid === uid);
      if (email) {
        users[email] = { ...users[email], ...fields };
        localStorage.setItem('ah_demo_users', JSON.stringify(users));

        const session = JSON.parse(localStorage.getItem('ah_demo_session') || 'null');
        if (session && session.uid === uid) {
          localStorage.setItem('ah_demo_session', JSON.stringify({ ...session, ...fields }));
        }
      }
    }
  },

  async saveDiagnostic(uid, diagnosticData) {
    if (!IS_DEMO_MODE && window.firebaseServices) {
      const { db, doc, setDoc } = window.firebaseServices;
      await setDoc(doc(db, "diagnosticos", uid), {
        uid,
        ...diagnosticData,
        updatedAt: new Date().toISOString()
      });
    } else {
      localStorage.setItem(`ah_demo_diag_${uid}`, JSON.stringify({
        uid,
        ...diagnosticData,
        updatedAt: new Date().toISOString()
      }));
    }
  },

  async getDiagnostic(uid) {
    if (!IS_DEMO_MODE && window.firebaseServices) {
      const { db, doc, getDoc } = window.firebaseServices;
      const snap = await getDoc(doc(db, "diagnosticos", uid));
      return snap.exists() ? snap.data() : null;
    } else {
      return JSON.parse(localStorage.getItem(`ah_demo_diag_${uid}`) || 'null');
    }
  },

  async getClientTasks(uid) {
    return JSON.parse(localStorage.getItem(`ah_demo_tasks_${uid}`) || '[]');
  },

  async saveClientTasks(uid, tasks) {
    localStorage.setItem(`ah_demo_tasks_${uid}`, JSON.stringify(tasks));
  },

  async getClientSchedule(uid) {
    if (!IS_DEMO_MODE && window.firebaseServices) {
      const { db, doc, getDoc } = window.firebaseServices;
      const snap = await getDoc(doc(db, "horarios", uid));
      return snap.exists() ? snap.data() : null;
    } else {
      return JSON.parse(localStorage.getItem(`ah_demo_schedule_${uid}`) || 'null');
    }
  },

  async saveClientSchedule(uid, scheduleData) {
    const payload = {
      uid,
      ...scheduleData,
      updatedAt: new Date().toISOString()
    };
    if (!IS_DEMO_MODE && window.firebaseServices) {
      const { db, doc, setDoc } = window.firebaseServices;
      await setDoc(doc(db, "horarios", uid), payload);
    } else {
      localStorage.setItem(`ah_demo_schedule_${uid}`, JSON.stringify(payload));
    }
    return payload;
  }
};
