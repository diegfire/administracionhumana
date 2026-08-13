/**
 * Módulo de Autenticación y Gestión de Datos - Administración Humana
 * Soporta Firebase v10/v11 Web SDK con fallback automático a localStorage para demostración local.
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
    console.warn("[AH Auth] Modo Demostración Local activo.");
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
    if (!localStorage.getItem('ah_demo_users')) {
      const demoUsers = {
        'maria@ejemplo.com': {
          uid: 'user_maria_1',
          email: 'maria@ejemplo.com',
          password: 'password123',
          fullName: 'María Pérez',
          role: 'client',
          status: 'En Acompañamiento',
          driveUrl: 'https://drive.google.com/drive/folders/ejemplo_maria',
          notes: 'Interesada en la ruta estructurada. Sesión 2 agendada.',
          createdAt: new Date(Date.now() - 7 * 86400000).toISOString()
        },
        'rodrigo@ejemplo.com': {
          uid: 'user_rodrigo_2',
          email: 'rodrigo@ejemplo.com',
          password: 'password123',
          fullName: 'Rodrigo Castillo',
          role: 'client',
          status: 'Sondeo Recibido',
          driveUrl: '',
          notes: 'Evaluando Rueda de la Vida y Matriz Eisenhower.',
          createdAt: new Date(Date.now() - 2 * 86400000).toISOString()
        }
      };
      localStorage.setItem('ah_demo_users', JSON.stringify(demoUsers));

      // Guardar diagnóstico de demostración para María
      const mariaDiag = {
        uid: 'user_maria_1',
        updatedAt: new Date().toISOString(),
        scores: {
          'Propósito': 8,
          'Gestión del Tiempo': 5,
          'Finanzas': 6,
          'Bienestar & Salud': 7,
          'Hábitos & Rutinas': 4,
          'Relaciones': 9,
          'Entorno Trabajo': 6,
          'Desarrollo Personal': 8
        }
      };
      localStorage.setItem('ah_demo_diag_user_maria_1', JSON.stringify(mariaDiag));

      // Guardar tareas iniciales
      const mariaTasks = [
        { id: 1, text: 'Definir bloques de trabajo enfocado (Time Blocking) de 9:00 a 11:00 AM', completed: true },
        { id: 2, text: 'Revisar plantilla 50/30/20 y ordenar gastos fijos del mes', completed: false },
        { id: 3, text: 'Completar matriz Eisenhower en el tablero GTD', completed: false }
      ];
      localStorage.setItem('ah_demo_tasks_user_maria_1', JSON.stringify(mariaTasks));
    }
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
    if (!IS_DEMO_MODE && window.firebaseServices) {
      const { auth, db, createUserWithEmailAndPassword, doc, setDoc } = window.firebaseServices;
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      
      const userProfile = {
        uid: user.uid,
        email: email,
        fullName: fullName || email.split('@')[0],
        role: email.toLowerCase().includes('admin') ? 'admin' : 'client',
        status: 'Sondeo Recibido',
        driveUrl: '',
        notes: '',
        createdAt: new Date().toISOString()
      };

      await setDoc(doc(db, "users", user.uid), userProfile);
      return userProfile;
    } else {
      const users = JSON.parse(localStorage.getItem('ah_demo_users') || '{}');
      if (users[email]) throw new Error("El usuario ya está registrado.");
      
      const uid = 'user_' + Date.now();
      const userProfile = {
        uid: uid,
        email: email,
        password: password,
        fullName: fullName || email.split('@')[0],
        role: email.toLowerCase().includes('admin') ? 'admin' : 'client',
        status: 'Sondeo Recibido',
        driveUrl: '',
        notes: '',
        createdAt: new Date().toISOString()
      };

      users[email] = userProfile;
      localStorage.setItem('ah_demo_users', JSON.stringify(users));
      
      const sessionData = { uid, email, fullName: userProfile.fullName, role: userProfile.role, status: userProfile.status, driveUrl: userProfile.driveUrl };
      localStorage.setItem('ah_demo_session', JSON.stringify(sessionData));
      return sessionData;
    }
  },

  async login(email, password) {
    if (!IS_DEMO_MODE && window.firebaseServices) {
      const { auth, signInWithEmailAndPassword } = window.firebaseServices;
      const res = await signInWithEmailAndPassword(auth, email, password);
      const profile = await this.getUserProfile(res.user.uid);
      return { uid: res.user.uid, email: res.user.email, ...profile };
    } else {
      const users = JSON.parse(localStorage.getItem('ah_demo_users') || '{}');
      const found = users[email];
      if (!found || found.password !== password) {
        throw new Error("Correo o contraseña incorrectos.");
      }
      const sessionData = { uid: found.uid, email: found.email, fullName: found.fullName, role: found.role, status: found.status, driveUrl: found.driveUrl || '', notes: found.notes || '' };
      localStorage.setItem('ah_demo_session', JSON.stringify(sessionData));
      return sessionData;
    }
  },

  async logout() {
    if (!IS_DEMO_MODE && window.firebaseServices) {
      const { auth, signOut } = window.firebaseServices;
      await signOut(auth);
    } else {
      localStorage.removeItem('ah_demo_session');
    }
  },

  async resetPassword(email) {
    if (!IS_DEMO_MODE && window.firebaseServices) {
      const { auth, sendPasswordResetEmail } = window.firebaseServices;
      await sendPasswordResetEmail(auth, email);
    } else {
      const users = JSON.parse(localStorage.getItem('ah_demo_users') || '{}');
      if (!users[email]) {
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
  }
};
