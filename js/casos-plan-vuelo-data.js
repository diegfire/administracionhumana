/**
 * CASOS_PLAN_VUELO_DATA - Base de Datos Centralizada de Casos Reales
 * Metodología Administración Humana
 * Desacoplamiento total: Datos (JSON/JS) vs Vistas (HTML/JS)
 */

window.CASOS_PLAN_VUELO_DATA = {
  caso_a: {
    id: "caso_a",
    pin: "2828",
    profile: {
      avatar: "🧘‍♀️",
      shortName: "Sofía",
      roleShort: "Cuidados & Servicios",
      demoTag: "Caso 01 • Cuidados Familiares & Servicios (Ejemplo Real)",
      name: "Caso 1: Sofía (28 años) • Instructora de Yoga Somático & Cuidadora Familiar",
      role: "Yoga Restaurativo para Cuerpos Cansados, Zumba Fitness & Cuidados Médicos",
      context: "Sostiene una alta responsabilidad de cuidados médicos y trámites familiares mayores (más de 6h diarias de trabajo invisible). Su meta vital era estructurar sus clases de yoga y zumba, financiar su meta de pasajes mensuales a Santiago ($160.000 CLP) y dictar con pistas de música originales de alta fidelidad, pero vivía con constante culpa e insomnio por no poder cumplir un 'horario tradicional de 8 horas'.",
      salesHook: "¿Cuidas a familiares o tienes responsabilidades domésticas intensas y sientes culpa por no avanzar en tus proyectos profesionales? Con Bloques de Oro innegociables, un secuenciador somático y la eliminación del juicio moral, creas un negocio que se adapta a tu vida real sin colapsar.",
      pdaProfile: "P-Alta (Paciencia 85%) | N-Alta (Norma 90%) | R-Baja (Cautelosa 40%) • Arquetipo: La Cuidadora Vocacional con Sobreexigencia",
      pills: ["28 Años", "Cuidados Médicos Familiares", "Lanzamiento Dual (Yoga + Zumba)", "Meta Pasajes ($160.000)", "Pistas HQ PayPal", "Límite GTD Máximo 2 Tareas"]
    },
    simulator: {
      before: [
        { label: "Carga Cognitiva", val: "🔥 8h de trabajo invisible no reconocido", sub: "Culpa por no producir en horario tradicional" },
        { label: "Noches", val: "⚡ Rumiación y listas mentales", sub: "Insomnio por sensación de deuda constante" },
        { label: "Finanzas & Audio", val: "❓ Ansiedad por costos y pistas ruidosas de YouTube", sub: "Sin cálculo de pasajes y audios con gritos de fondo" }
      ],
      after: [
        { label: "Soberanía Temporal", val: "🛡️ 2 Bloques de Oro + Secuenciador Zumba 52m", sub: "Clases fluidas + curva de intensidad somática calculada" },
        { label: "Noches", val: "✨ Inventario Cero Culpa", sub: "Validación de 3 micro-victorias diarias en 2 min" },
        { label: "Finanzas & Calidad", val: "💰 Meta Cumplida ($160k) + Audio HQ PayPal", sub: "8 alumnas cubren pasajes + biblioteca de pistas limpias" }
      ]
    },
    step1: {
      quote: "«Siento que trabajo todo el día entre trámites familiares y cuidados médicos, pero al acostarme tengo la sensación de no haber hecho nada. Tengo miedo de lanzar mis clases de yoga y zumba porque no quiero fallarles a mis alumnas si surge una urgencia médica en mi casa, y me frustra usar pistas con ruido de público bajadas de YouTube.»",
      symptoms: [
        "<strong>Fatiga por 'Trabajo Invisible':</strong> 8+ horas de cuidado familiar no reconocidas como carga cognitiva real.",
        "<strong>Rumiación Nocturna:</strong> Listas mentales interminables que sabotean el descanso y generan culpa.",
        "<strong>Ansiedad Financiera & Dispersión:</strong> Preocupación constante por cubrir gastos de traslados a Santiago ($160k) sin meta matemática clara.",
        "<strong>Fricción Musical & Coreográfica:</strong> Pérdida de tiempo armando playlists a mano con audios de mala calidad."
      ]
    },
    step2: {
      insight: "«El problema no es falta de disciplina ni de vocación. El bloqueo ocurre porque intentas forzar un horario de oficina de 8 horas rígidas en una vida que exige flexibilidad de cuidados. Desarmamos la culpa, dotamos a la instructora de un secuenciador inteligente de clases y blindamos micro-ventanas innegociables.»",
      diagnosisPoints: [
        "<strong>Cuello de botella real:</strong> Ausencia de un límite superior de tareas simultáneas (WIP infinito), perfeccionismo paralizante y armado manual de clases.",
        "<strong>Palanca de destrabe:</strong> Fijar horas para ejercer Habitarte (clases en vivo) y desarrollarlo, armar clases de zumba en 1 clic y medir matemáticamente las 8 alumnas requeridas para los pasajes."
      ]
    },
    calibration: [
      { ver: "Semana 1", before: "Horario rígido de 8 horas diarias de lunes a viernes", after: "Fracaso al 2do día por urgencias médicas familiares (culpa acumulada)" },
      { ver: "Semana 2", before: "Ajuste del Plan: Horas protegidas para ejercer y desarrollar Habitarte", after: "100% de asistencia. Se añade 1 clase grabada comodín ante imprevistos" },
      { ver: "Semana 3", before: "Inventario general de 15 tareas diarias", after: "Inventario Cero Culpa: Registrar solo 3 victorias nocturnas (paz mental asegurada)" },
      { ver: "Semana 4", before: "Descargas de YouTube con ruido de público", after: "Biblioteca Musical HQ PayPal + Secuenciador somático de 52 min por ola de intensidad" }
    ],
    scheduleCategories: [
      { id: "cat-oro", label: "🌿 Habitarte • Ejercer (Clases en Vivo)", color: "#10b981", tag: "HABITARTE" },
      { id: "cat-zumba", label: "🎶 Zumba Fitness & Ensayos", color: "#ec4899", tag: "ZUMBA" },
      { id: "cat-cuidado", label: "🩺 Cuidados Familiares & Trámites", color: "#f59e0b", tag: "CUIDADOS" },
      { id: "cat-descanso", label: "🌿 Recarga & Pausa Cero Culpa", color: "#8b5cf6", tag: "PAUSA" },
      { id: "cat-gestion", label: "⚡ Gestión & Cierre Nocturno", color: "#3b82f6", tag: "GESTIÓN" }
    ],
    defaultScheduleBlocks: [
      { day: 2, hour: 19, duration: 2, catId: "cat-oro", title: "Habitarte • Clase en Vivo" },
      { day: 4, hour: 19, duration: 2, catId: "cat-oro", title: "Habitarte • Clase en Vivo" },
      { day: 1, hour: 18, duration: 2, catId: "cat-zumba", title: "Ensayo Secuenciador Zumba 52m" },
      { day: 3, hour: 18, duration: 2, catId: "cat-zumba", title: "Clase Zumba Alumnas" },
      { day: 1, hour: 9, duration: 4, catId: "cat-cuidado", title: "Acompañamiento Médico Familiar" },
      { day: 2, hour: 9, duration: 4, catId: "cat-cuidado", title: "Trámites Médicos & Cuidado" },
      { day: 3, hour: 9, duration: 4, catId: "cat-cuidado", title: "Acompañamiento Médico Familiar" },
      { day: 4, hour: 9, duration: 4, catId: "cat-cuidado", title: "Trámites Médicos & Cuidado" },
      { day: 5, hour: 9, duration: 4, catId: "cat-cuidado", title: "Acompañamiento Médico Familiar" },
      { day: 1, hour: 14, duration: 1, catId: "cat-descanso", title: "Siesta 20 min Cero Culpa" },
      { day: 2, hour: 14, duration: 1, catId: "cat-descanso", title: "Siesta 20 min Cero Culpa" },
      { day: 3, hour: 14, duration: 1, catId: "cat-descanso", title: "Siesta 20 min Cero Culpa" },
      { day: 4, hour: 14, duration: 1, catId: "cat-descanso", title: "Siesta 20 min Cero Culpa" },
      { day: 5, hour: 14, duration: 1, catId: "cat-descanso", title: "Siesta 20 min Cero Culpa" },
      { day: 5, hour: 17, duration: 2, catId: "cat-gestion", title: "Arqueo Pasajes ($160k) & Cierre" }
    ],
    kanbanTasks: [
      { id: "sa-1", text: "🌿 Guiar clase en vivo de Habitarte", tag: "Habitarte", col: "doing" },
      { id: "sa-2", text: "🎶 Secuenciar playlist de 52 min con pistas HQ", tag: "Zumba", col: "doing" },
      { id: "sa-3", text: "💰 Apartar fondo de pasajes al cobrar mensualidades", tag: "Finanzas", col: "done" },
      { id: "sa-4", text: "📝 Registrar 3 micro-victorias en inventario nocturno", tag: "Rutina", col: "todo" }
    ],
    checklist: [
      "Validar siesta diaria de 20 min sin culpa",
      "Apartar el fondo de pasajes al recaudar mensualidad ($160.000)",
      "Armar playlist de Zumba con pistas HQ PayPal en el portal",
      "Cerrar la jornada sin repasar listas de pendientes para mañana"
    ],
    specializedModule: "zumba",
    tools: [
      {
        icon: "🧘‍♀️",
        tag: "Módulo 08",
        name: "Oferta Somática de Yoga (Cuerpos Cansados)",
        desc: "Estructura pedagógica de 45 min con posturas de descompresión sin impacto acrobático.",
        checklist: [
          "Estructura de 45 min en suelo para descompresión nerviosa",
          "Guion de bienvenida centrado en eliminar la autoexigencia",
          "Clase grabada comodín lista ante urgencias familiares"
        ]
      },
      {
        icon: "🎶",
        tag: "Módulo 25",
        name: "Biblioteca Musical & Secuenciador de Zumba",
        desc: "Gestión de pistas originales HQ PayPal, curva de intensidad somática y armado de clases en 1 clic.",
        checklist: [
          "Pistas de audio originales limpias compradas vía PayPal",
          "Curva somática de 52 min (Calentamiento → Pico Cardio → Descompresión)",
          "Exportar playlist de WhatsApp con notas coreográficas en 1 clic"
        ]
      },
      {
        icon: "🚌",
        tag: "Módulo 07",
        name: "GPS Financiero 50/30/20 & Hito Santiago",
        desc: "Meta matemática exacta: 8 alumnas x $20k = $160.000 CLP para cubrir 100% de pasajes.",
        checklist: [
          "Recaudar mensualidad de 8 alumnas ($160.000 CLP)",
          "Apartar el fondo de pasajes inmediatamente al recibir pagos",
          "Asignar 20% a fondo de reserva de paz y contingencias"
        ]
      },
      {
        icon: "🌙",
        tag: "Módulo 11",
        name: "Inventario de Resultados (Cero Culpa)",
        desc: "2 minutos cada noche para registrar 3 micro-victorias y validar el cuidado como trabajo real.",
        checklist: [
          "Dedicar 2 minutos cada noche a registrar 3 micro-victorias",
          "Validar trámites médicos y cuidados como trabajo real cumplido",
          "Cerrar la jornada sin repasar listas de pendientes para el día siguiente"
        ]
      }
    ],
    aiPrompts: [
      {
        id: "prompt-sofia-1",
        badge: "Copywriting de Bienvenida",
        tagColor: "#10b981",
        title: "Mensaje Cálido de Bienvenida para Alumnas de Yoga",
        text: `Actúa como Diego González, mentor de Administración Humana y especialista en diseño de hábitos. Redacta un mensaje de WhatsApp cálido, empático y profesional para darle la bienvenida a una alumna a las clases de Yoga Somático para Cuerpos Cansados. Enfatiza que no se requiere flexibilidad previa, que es un espacio de descompresión sin juicio y entrega las 3 pautas esenciales para su primera sesión.`
      },
      {
        id: "prompt-sofia-2",
        badge: "Secuenciador Somático",
        tagColor: "#ec4899",
        title: "Guion de Transición de Intensidad para Clase de Zumba",
        text: `Diseña la curva de energía para una clase de Zumba de 52 minutos dividida en 3 fases: Fase 1 Calentamiento articular y ritmo suave (12 min), Fase 2 Pico cardiovascular y alegría (28 min), Fase 3 Enfriamiento y descompresión del sistema nervioso (12 min). Incluye las indicaciones verbales que la instructora debe dar para motivar a alumnas que llegan con fatiga mental.`
      }
    ],
    metrics: [
      { val: "$160.000", lbl: "Meta mensual de pasajes cubierta con 8 alumnas" },
      { val: "52 min", lbl: "De clase fluida de Zumba con curva somática" },
      { val: "100%", lbl: "De noches cerradas con Inventario Cero Culpa" }
    ],
    summary: "La clienta logró lanzar su oferta dual (Yoga Somático + Zumba Fitness), sistematizar su repertorio de pistas originales HQ, asegurar sus traslados mensuales a Santiago y recuperar la paz nocturna sin descuidar a su familia."
  },

  caso_b: {
    id: "caso_b",
    pin: "2626",
    profile: {
      avatar: "💆‍♀️",
      shortName: "Camila",
      roleShort: "Sensorial & TEA",
      demoTag: "Caso 02 • Sensorial & TEA (Ejemplo Real)",
      name: "Caso 2: Camila (26 años) • Emprendedora Sensorial & Masoterapeuta Holística",
      role: "Masoterapia Integrativa, Descompresión Sensorial & Estudiante de Psicopedagogía",
      context: "Perfil neurodivergente con hipersensibilidad sensorial (TEA/PAS). Atendía clientes a cualquier hora por WhatsApp sin pausas, cobraba sesión a sesión con alta incertidumbre y sufría colapsos de agotamiento que la dejaban días enteros en cama sin energía para atender ni estudiar.",
      salesHook: "¿Eres neurodivergente, terapeuta o altamente sensible y te agotan las demandas de mensajes, el desorden de citas y la negociación de tarifas? Instalamos turnos fijos protegidos, vaciado mental nocturno en libreta física y Paquetes de 4 Sesiones para triplicar tus ingresos con la mitad de desgaste.",
      pdaProfile: "P-Alta (Paciencia 85%) | N-Alta (Norma 90%) | Autocontrol Variable (Modulación TEA) • Arquetipo: La Especialista Terapéutica Sensible",
      pills: ["26 Años", "Neurodivergencia TEA / PAS", "2 Turnos Fijos (11:00 y 16:00)", "Pausas de Silencio", "Paquetes 4x Sesiones", "3x Ingresos"]
    },
    simulator: {
      before: [
        { label: "Sensorial", val: "💥 Colapso por sobreestimulación", sub: "Bloqueos de días enteros en cama sin energía" },
        { label: "Operación", val: "🌪️ 10 servicios dispersos sin foco", sub: "Atención a cualquier hora por WhatsApp" },
        { label: "Finanzas", val: "📉 Incertidumbre por cobro sesión a sesión", sub: "Cancelaciones de último minuto" }
      ],
      after: [
        { label: "Sensorial", val: "🌿 Pausas de stimming y silencio", sub: "Blindaje de 1h de descompresión entre turnos" },
        { label: "Operación", val: "🛡️ 2 Turnos fijos diarios (11:00 y 16:00)", sub: "Cero cancelaciones y WhatsApp cerrado a las 20:00" },
        { label: "Finanzas", val: "📈 Paquetes de 4 Sesiones (3x ingresos)", sub: "Cobro mensual anticipado y fidelización" }
      ]
    },
    step1: {
      quote: "«Tengo 5 proyectos abiertos a la vez, libretas dispersas y me abrumo con el ruido y los mensajes de WhatsApp. Cuando me saturo, me bloqueo por días enteros en la cama y siento que estoy perdiendo plata por no atender consultas.»",
      symptoms: [
        "<strong>Sobrecarga Sensorial & Mental:</strong> Colapso por exceso de estímulos y demandas simultáneas.",
        "<strong>Dispersión de Oferta:</strong> Intentar vender 6 tipos de terapias y 10 productos a la vez sin foco.",
        "<strong>Miedo al Desorden Financiero:</strong> Ansiedad de 'quedar en cero' a pesar de generar ingresos."
      ]
    },
    step2: {
      insight: "«Tu cerebro no necesita más disciplina ni madrugar a la fuerza; necesita protección sensorial y contenedores cerrados. Diseñamos pausas de estimulación (stimming), paseos conscientes y paquetes cerrados de atención para simplificar la venta.»",
      diagnosisPoints: [
        "<strong>Cuello de botella real:</strong> Contaminar el espacio de descanso con pendientes laborales y falta de pausas sensoriales.",
        "<strong>Palanca de destrabe:</strong> Limitar la atención a 2 bloques fijos de sesiones y crear un paquete premium de 4 sesiones."
      ]
    },
    calibration: [
      { ver: "Semana 1", before: "Agendar clientes a cualquier hora según pedían por WhatsApp", after: "Saturación sensorial, fatiga crónica y cancelación de citas" },
      { ver: "Semana 2", before: "Ajuste del Plan: 2 turnos fijos (11:00 y 16:00) + 1 hora de descompresión", after: "Atención fluida, 0 cancelaciones y energía estable" },
      { ver: "Semana 3", before: "Cobro sesión a sesión con incertidumbre semanal", after: "Venta de Paquetes de 4 sesiones (ingreso anticipado y cliente fidelizado)" }
    ],
    scheduleCategories: [
      { id: "cat-masajes", label: "💆‍♀️ Turno Fijo Masoterapia (Bloque A/B)", color: "#10b981", tag: "MASAJE" },
      { id: "cat-stimming", label: "🌿 Pausa de Silencio & Descompresión", color: "#06b6d4", tag: "PAUSA TEA" },
      { id: "cat-estudio", label: "📚 Estudio Psicopedagogía", color: "#8b5cf6", tag: "ESTUDIO" },
      { id: "cat-vaciado", label: "📓 Vaciado Mental en Papel & Cierre", color: "#f59e0b", tag: "PAPEL" }
    ],
    defaultScheduleBlocks: [
      { day: 1, hour: 11, duration: 2, catId: "cat-masajes", title: "Turno Fijo 11:00 Masoterapia" },
      { day: 1, hour: 13, duration: 2, catId: "cat-stimming", title: "Pausa Sensorial & Silencio" },
      { day: 1, hour: 16, duration: 2, catId: "cat-masajes", title: "Turno Fijo 16:00 Masoterapia" },
      { day: 2, hour: 11, duration: 2, catId: "cat-masajes", title: "Turno Fijo 11:00 Masoterapia" },
      { day: 2, hour: 13, duration: 2, catId: "cat-stimming", title: "Pausa Sensorial & Silencio" },
      { day: 2, hour: 16, duration: 2, catId: "cat-masajes", title: "Turno Fijo 16:00 Masoterapia" },
      { day: 3, hour: 10, duration: 3, catId: "cat-estudio", title: "Lectura Psicopedagogía (Foco)" },
      { day: 4, hour: 11, duration: 2, catId: "cat-masajes", title: "Turno Fijo 11:00 Masoterapia" },
      { day: 4, hour: 16, duration: 2, catId: "cat-masajes", title: "Turno Fijo 16:00 Masoterapia" },
      { day: 5, hour: 11, duration: 2, catId: "cat-masajes", title: "Turno Fijo 11:00 Masoterapia" },
      { day: 1, hour: 21, duration: 1, catId: "cat-vaciado", title: "Vaciado en Libreta de Papel" },
      { day: 2, hour: 21, duration: 1, catId: "cat-vaciado", title: "Vaciado en Libreta de Papel" },
      { day: 3, hour: 21, duration: 1, catId: "cat-vaciado", title: "Vaciado en Libreta de Papel" },
      { day: 4, hour: 21, duration: 1, catId: "cat-vaciado", title: "Vaciado en Libreta de Papel" },
      { day: 5, hour: 21, duration: 1, catId: "cat-vaciado", title: "Vaciado en Libreta de Papel" }
    ],
    kanbanTasks: [
      { id: "cb-1", text: "💆‍♀️ Atender sesión 11:00 Bloque A", tag: "Atención", col: "doing" },
      { id: "cb-2", text: "🌿 Pausa de silencio y paseo 30 min", tag: "Sensorial", col: "doing" },
      { id: "cb-3", text: "🧴 Preparar aceites y toallas limpias", tag: "Insumos", col: "done" },
      { id: "cb-4", text: "📓 Vaciado nocturno en libreta antes de dormir", tag: "Rutina", col: "todo" }
    ],
    checklist: [
      "Blindar 1 hora de silencio y descompresión entre turnos",
      "No responder WhatsApp de clientes después de las 20:00",
      "Venta exclusiva de Paquetes de 4 Sesiones con abono previo",
      "Vaciado mental en libreta de papel a las 21:30"
    ],
    specializedModule: "sensorial",
    tools: [
      {
        icon: "🌿",
        tag: "Regulación",
        name: "Time Blocking Sensorial & Pausas de Stimming",
        desc: "Mapeo de 24h con pausas obligatorias de silencio, caminatas de descompresión y límites de atención.",
        checklist: [
          "2 turnos fijos únicos de atención diaria (11:00 y 16:00)",
          "Blindaje obligatorio de 1 hora de silencio y descompresión",
          "Paseo de 30 min al aire libre para autorregulación sensorial"
        ]
      },
      {
        icon: "📦",
        tag: "Negocio",
        name: "Calculadora de Paquetes 4x de Masajes",
        desc: "Sustitución del cobro por sesión suelta por paquetes mensuales que aseguran caja y estabilidad.",
        checklist: [
          "Ofrecer paquete mensual de 4 sesiones con 15% de ahorro",
          "Cobro 100% anticipado vía transferencia al agendar",
          "Reducción de cancelaciones a 0%"
        ]
      },
      {
        icon: "📓",
        tag: "Descarga",
        name: "Vaciado Mental Nocturno en Papel",
        desc: "Protocolo físico en libreta antes de apagar la luz para no llevar la lista de tareas a la cama.",
        checklist: [
          "Vaciado en libreta física de papel a las 21:30 antes de dormir",
          "Dejar el celular fuera del dormitorio para evitar sobreestimulación",
          "Apagar luces frías de alta intensidad 1 hora antes de acostarse"
        ]
      },
      {
        icon: "💰",
        tag: "Ahorro",
        name: "Presupuesto 50/30/20 Adaptado",
        desc: "Destinar 50% a insumos/ahorro y 30% a bienestar personal sin culpa.",
        checklist: [
          "Venta exclusiva de Paquetes de 4 Sesiones con cobro anticipado",
          "Separar 50% para insumos/arriendo y 20% para ahorro intocable",
          "Ficha de anamnesis clínica en 1 hoja física del Hub de Imprimibles"
        ]
      }
    ],
    aiPrompts: [
      {
        id: "prompt-camila-1",
        badge: "Atención al Cliente WhatsApp",
        tagColor: "#06b6d4",
        title: "Respuesta Automática Empática para WhatsApp Comercial",
        text: `Redacta un mensaje de respuesta comercial para WhatsApp para una masoterapeuta neurodivergente que atiende únicamente en dos turnos fijos (11:00 y 16:00) y que no responde mensajes después de las 20:00. El mensaje debe ser cálido, transmitir exclusividad y serenidad, y ofrecer el Paquete Terapéutico de 4 Sesiones con enlace a transferencia.`
      },
      {
        id: "prompt-camila-2",
        badge: "Protocolo Sensorial",
        tagColor: "#8b5cf6",
        title: "Guion de Descompresión Post-Sesión para el Terapeuta",
        text: `Crea una guía de 5 minutos de descompresión neurosensorial para un terapeuta que acaba de terminar una sesión intensa con un cliente. Incluye técnicas de respiración diafragmática, estímulos propioceptivos suaves (mantas con peso, estiramientos) y desconexión visual para evitar el colapso por empatía.`
      }
    ],
    metrics: [
      { val: "3x", lbl: "Más ingresos al vender paquetes de 4 sesiones" },
      { val: "0", lbl: "Episodios de bloqueo sensorial en el mes" },
      { val: "100%", lbl: "De noches con vaciado mental en papel" }
    ],
    summary: "La emprendedora logró estabilizar sus ingresos mediante paquetes fidelizados, blindó sus tiempos de descanso sensorial y eliminó la culpa por tener días de menor energía."
  },

  caso_c: {
    id: "caso_c",
    pin: "1616",
    profile: {
      avatar: "🎒",
      shortName: "Lucas",
      roleShort: "Estudiante TDAH",
      demoTag: "Caso 03 • Estudiante TDAH (Ejemplo Real)",
      name: "Caso 3: Lucas (16 años) • Estudiante de Secundaria & Desafío TDAH",
      role: "Estudiante de Secundaria, Creador Visual / Ilustración & Deportista",
      context: "Diagnosticado con TDAH, creativo y talentoso para el arte, pero con parálisis extrema ante materias teóricas densas y cuadernos de 20 páginas. Caía en evasión constante en redes sociales, lo que desataba discusiones familiares diarias, castigos y una severa pérdida de confianza y autonomía escolar.",
      salesHook: "¿Tus hijos o tú se bloquean ante el estudio denso, postergan hasta la noche anterior y viven en conflicto familiar por las tareas? El Protocolo Paso Cero (5 min con cronómetro), los Apuntes Mínimos de 5 Líneas y la Cuenta Corriente de Confianza restablecen la autonomía escolar y la armonía en casa.",
      pdaProfile: "E-Alta (Extroversión 80%) | R-Media/Alta (Riesgo 70%) | P-Baja (Paciencia 30%) | N-Baja (Norma 40%) • Arquetipo: El Creativo Impulsivo con Fricción de Inicio",
      pills: ["16 Años", "Neurodivergencia TDAH", "Protocolo Paso Cero (5 min)", "Apuntes Visuales 5 Líneas", "Dopamina Sana (Arte/Deporte)", "100% Aprobado"]
    },
    simulator: {
      before: [
        { label: "Estudio", val: "❌ Bloqueo ante cuadernos de 20 páginas", sub: "Evasión en redes sociales y frustración" },
        { label: "Hogar", val: "⚡ Discusiones familiares diarias", sub: "Dependencia de ultimátums externos" },
        { label: "Creatividad", val: "📉 Energía dispersa en pantallas", sub: "Falta de espacio para arte y deporte" }
      ],
      after: [
        { label: "Estudio", val: "🚀 Protocolo Paso Cero (5 min con reloj)", sub: "Apuntes Mínimos Viables de 5 líneas con esquemas" },
        { label: "Hogar", val: "🤝 Cuenta Corriente de Confianza", sub: "Cero discusiones; autonomía y salidas recuperadas" },
        { label: "Creatividad", val: "🎨 Bloque protegido de arte y deporte", sub: "Canalización de dopamina sana lejos de pantallas" }
      ]
    },
    step1: {
      quote: "«Me cuesta sentarme a estudiar a menos que mis padres me obliguen o haya una prueba mañana. Miro el cuaderno y me bloqueo porque siento que tengo que copiar 20 páginas perfectas, así que me pongo a ver videos para evitar la frustración.»",
      symptoms: [
        "<strong>Dependencia del Empuje Externo:</strong> Inactividad hasta que se produce un ultimátum o conflicto familiar.",
        "<strong>Pseudo-Estudio (Evasión Activa):</strong> Mirar tutoriales pasivamente sin ejercitar en papel.",
        "<strong>Fricción por Perfeccionismo:</strong> Bloqueo ante materias densas por cuadernos incompletos."
      ]
    },
    step2: {
      insight: "«El TDAH no se gestiona con castigos ni sermones; se regula reduciendo drásticamente la fricción de arranque y aportando dopamina sana (arte y deporte). Si el resumen parece gigante, lo achicamos a 5 líneas viables.»",
      diagnosisPoints: [
        "<strong>Cuello de botella real:</strong> La fricción de arranque es demasiado alta ('Paso Cero' paralizado) y dinámica familiar tensa.",
        "<strong>Palanca de destrabe:</strong> Apuntes mínimos viables de 5 líneas, temporizador de 5 minutos y acuerdos transparentes con la familia."
      ]
    },
    calibration: [
      { ver: "Semana 1", before: "Exigir 2 horas continuas de estudio sentado en el escritorio", after: "Bloqueo inmediato, discusiones familiares y 0 páginas escritas" },
      { ver: "Semana 2", before: "Ajuste del Plan: 'Protocolo Paso Cero' (5 min con cronómetro)", after: "Rompe la inercia. El 85% de las veces sigue trabajando 25 min seguidos" },
      { ver: "Semana 3", before: "Copiar resúmenes largos del libro", after: "Apuntes Mínimos Viables (5 conceptos esenciales por lección con dibujos)" }
    ],
    scheduleCategories: [
      { id: "cat-pasocero", label: "⚡ Paso Cero (5-25 min Foco)", color: "#f59e0b", tag: "PASO CERO" },
      { id: "cat-arte", label: "🎨 Bloque de Arte & Dibujo", color: "#ec4899", tag: "ARTE" },
      { id: "cat-deporte", label: "🏐 Deporte & Dopamina Sana", color: "#10b981", tag: "DEPORTE" },
      { id: "cat-colegio", label: "🎒 Jornada Escolar", color: "#6b7280", tag: "ESCUELA" }
    ],
    defaultScheduleBlocks: [
      { day: 1, hour: 8, duration: 6, catId: "cat-colegio", title: "Colegio / Clases" },
      { day: 2, hour: 8, duration: 6, catId: "cat-colegio", title: "Colegio / Clases" },
      { day: 3, hour: 8, duration: 6, catId: "cat-colegio", title: "Colegio / Clases" },
      { day: 4, hour: 8, duration: 6, catId: "cat-colegio", title: "Colegio / Clases" },
      { day: 5, hour: 8, duration: 6, catId: "cat-colegio", title: "Colegio / Clases" },
      { day: 1, hour: 16, duration: 1, catId: "cat-pasocero", title: "Paso Cero (5 min) Guía Matemáticas" },
      { day: 1, hour: 18, duration: 2, catId: "cat-deporte", title: "Entrenamiento Deportivo" },
      { day: 2, hour: 16, duration: 1, catId: "cat-pasocero", title: "Paso Cero (5 min) Historia" },
      { day: 2, hour: 18, duration: 2, catId: "cat-arte", title: "Taller Ilustración Libre" },
      { day: 3, hour: 16, duration: 1, catId: "cat-pasocero", title: "Paso Cero (5 min) Química" },
      { day: 4, hour: 16, duration: 1, catId: "cat-pasocero", title: "Paso Cero (5 min) Lenguaje" },
      { day: 4, hour: 18, duration: 2, catId: "cat-deporte", title: "Entrenamiento Deportivo" },
      { day: 5, hour: 16, duration: 2, catId: "cat-arte", title: "Dibujo Digital & Arte" }
    ],
    kanbanTasks: [
      { id: "lc-1", text: "✏️ 5 min de Paso Cero en guía de matemáticas", tag: "Estudio", col: "doing" },
      { id: "lc-2", text: "🎨 15 min de dibujo libre en el cuaderno", tag: "Creatividad", col: "doing" },
      { id: "lc-3", text: "🏐 Asistir al entrenamiento deportivo", tag: "Deporte", col: "done" },
      { id: "lc-4", text: "📖 Apunte de 5 líneas de historia", tag: "Estudio", col: "todo" }
    ],
    checklist: [
      "Activar cronómetro de 5 minutos antes de tocar el cuaderno",
      "Celular en otra habitación durante el bloque de estudio",
      "Anotar en ficha visual los 5 conceptos clave sin copiar textos largos",
      "Validar cumplimiento diario en la Cuenta Corriente de Confianza"
    ],
    specializedModule: "tdah",
    tools: [
      {
        icon: "📝",
        tag: "Bajo Roce",
        name: "Apuntes Mínimos Viables (5 Líneas)",
        desc: "Resúmenes ultra-cortos con esquemas visuales para romper el perfeccionismo y asegurar notas aprobadas.",
        checklist: [
          "Resumir cada lección en máximo 5 conceptos esenciales",
          "Acompañar con esquemas visuales, colores y dibujos libres",
          "Prohibido copiar resúmenes densos de más de 1 página"
        ]
      },
      {
        icon: "⚡",
        tag: "Acción",
        name: "Protocolo Paso Cero (Temporizador 5 Min)",
        desc: "Compromiso de trabajar solo 5 minutos antes de decidir si detenerse. Destraba el 90% de la inercia.",
        checklist: [
          "Poner cronómetro de 5 minutos antes de abrir la guía de estudio",
          "Permiso explícito de parar al minuto 5 si hay resistencia extrema",
          "El 85% de las veces continúa la sesión completa de 25 min de foco"
        ]
      },
      {
        icon: "🎨",
        tag: "Dopamina",
        name: "Bloque de Arte & Deporte Análogo",
        desc: "Canalizar la energía creativa y física lejos de pantallas para autorregular el sistema nervioso.",
        checklist: [
          "45 minutos protegidos de dibujo o entrenamiento físico diario",
          "Cero pantallas ni notificaciones durante el bloque de dopamina sana",
          "Canalizar la energía creativa antes de iniciar las tareas"
        ]
      },
      {
        icon: "🤝",
        tag: "Confianza",
        name: "Cuenta Corriente de Confianza",
        desc: "Registro transparente de compromisos diarios con la familia para recuperar autonomía y salidas.",
        checklist: [
          "Registrar cumplimiento diario en planilla visible para la familia",
          "Validar acuerdos y autonomía sin necesidad de ultimátums",
          "Desbloquear salidas y uso de tecnología el fin de semana"
        ]
      }
    ],
    aiPrompts: [
      {
        id: "prompt-lucas-1",
        badge: "Técnica de Estudio TDAH",
        tagColor: "#f59e0b",
        title: "Transformador de Texto Denso a 5 Balas Visuales",
        text: `Toma el siguiente texto de estudio escolar denso y extráelo en exactamente 5 puntos clave (balas) de máximo una línea cada uno. Para cada punto, asocia una metáfora cotidiana o una imagen mental divertida que un estudiante de 16 años con TDAH pueda recordar fácilmente en una prueba.`
      },
      {
        id: "prompt-lucas-2",
        badge: "Acuerdo Familiar",
        tagColor: "#10b981",
        title: "Guion de Conversación Restaurativa Familiar",
        text: `Genera un guion de diálogo para una reunión familiar entre un estudiante de 16 años y sus padres. El objetivo es reemplazar los gritos y amenazas por un sistema de 'Cuenta Corriente de Confianza', donde el estudiante se compromete a 25 min de estudio diario a cambio de autonomía total en su tiempo libre los viernes.`
      }
    ],
    metrics: [
      { val: "100%", lbl: "De materias aprobadas sin notas rojas" },
      { val: "0", lbl: "Discusiones familiares por tareas escolares" },
      { val: "1 mes", lbl: "De consistencia para recuperar privilegios digitales" }
    ],
    summary: "El estudiante pasó de la evasión y el conflicto diario a estudiar con autonomía, sostener buenas notas y cultivar sus pasiones artísticas en un ambiente de calma familiar."
  },

  caso_d: {
    id: "caso_d",
    pin: "3030",
    profile: {
      avatar: "👓",
      shortName: "Gabriel",
      roleShort: "Parálisis por Análisis",
      demoTag: "Caso 04 • Parálisis por Análisis (Ejemplo Real)",
      name: "Caso 4: Gabriel (30 años) • Emprendedor de Comercio & Accesorios",
      role: "Emprendedor Comercial, Creador de Marca de Accesorios Ópticos & Ventas",
      context: "Mente analítica brillante con un producto físico de excelente calidad, pero atrapado durante más de 6 meses en el perfeccionismo defensivo: investigando proveedores infinitos, rediseñando logos y empaques sin salir a vender ni contactar a un solo cliente por miedo al juicio y a la imperfección.",
      salesHook: "¿Tienes una idea o producto excelente pero llevas semanas o meses retrasando el lanzamiento porque 'falta pulir detalles'? Con la Matriz Eisenhower, la Regla del 70% de Acción Imperfecta y el Embudo Mínimo de 7 Días rompemos la parálisis y generamos tus primeros cobros en menos de una semana.",
      pdaProfile: "N-Muy Alta (Norma 98%) | R-Baja (Riesgo 30%) | AC-Alto (Racionalización 80%) • Arquetipo: El Perfeccionista Paralizado por Análisis",
      pills: ["30 Años", "Parálisis por Análisis", "Regla del 70% Acción Imperfecta", "Catálogo PDF 2 Páginas", "Embudo 7 Días", "12 Ventas en 14d"]
    },
    simulator: {
      before: [
        { label: "Ejecución", val: "🌪️ 6 meses planificando sin lanzar", sub: "Búsqueda infinita del logo y empaque perfecto" },
        { label: "Prioridades", val: "🔥 25 tareas abiertas simultáneas", sub: "Atención a detalles menores sin impacto en ventas" },
        { label: "Comercial", val: "📉 Cero clientes contactados por temor", sub: "Falta de un guion de conversación validado" }
      ],
      after: [
        { label: "Ejecución", val: "🚀 Lanzamiento Mínimo Viable en 7 Días", sub: "Venta directa por WhatsApp sin esperar web perfecta" },
        { label: "Prioridades", val: "🎯 Matriz Eisenhower con Límite Máximo 2 Tareas", sub: "Foco exclusivo en las 2 tareas que traen dinero" },
        { label: "Comercial", val: "💰 Primeras 12 unidades vendidas", sub: "Validación de mercado real y caja positiva" }
      ]
    },
    step1: {
      quote: "«Llevo meses perfeccionando el catálogo, cambiando los colores del logo y buscando el empaque ideal, pero no he salido a vender ni una sola unidad. Me da miedo que la gente piense que es improvisado, así que sigo postergando el lanzamiento.»",
      symptoms: [
        "<strong>Perfeccionismo Defensivo:</strong> Usar el diseño y la planificación como escudo para evitar la exposición comercial.",
        "<strong>Sobrecarga de Opciones:</strong> Analizar 10 proveedores y plataformas a la vez sin tomar ninguna decisión.",
        "<strong>Fuga de Caja:</strong> Inversión en inventario detenido sin retorno ni flujo de entrada."
      ]
    },
    step2: {
      insight: "«El análisis excesivo no es inteligencia estratégica; es miedo a la validación real disfrazado de profesionalismo. No necesitas una tienda web de $1.000 USD para empezar; necesitas 3 fotos honestas y un guion humano de WhatsApp.»",
      diagnosisPoints: [
        "<strong>Cuello de botella real:</strong> Falta de un 'Umbral de Suficiencia' (saber cuándo algo está 'suficientemente bueno para salir').",
        "<strong>Palanca de destrabe:</strong> El Reto de Lanzamiento Mínimo de 7 Días: 10 contactos directos con oferta de prueba."
      ]
    },
    calibration: [
      { ver: "Semana 1", before: "Intentar montar una tienda online completa con pasarela compleja", after: "Bloqueo técnico de 3 semanas y 0 ventas" },
      { ver: "Semana 2", before: "Ajuste del Plan: Catálogo PDF de 2 páginas + Enlace de WhatsApp directo", after: "Primer pedido concretado en menos de 48 horas" },
      { ver: "Semana 3", before: "Lista de 30 tareas desordenadas", after: "Matriz Eisenhower: 1 tarea comercial obligatoria antes de las 12:00" }
    ],
    scheduleCategories: [
      { id: "cat-ventas", label: "💰 Bloque Comercial Matutino (Antes 12:00)", color: "#10b981", tag: "VENTAS" },
      { id: "cat-despachos", label: "📦 Logística & Despachos", color: "#3b82f6", tag: "DESPACHOS" },
      { id: "cat-finanzas", label: "📊 Balance Semanal & Utilidad", color: "#f59e0b", tag: "FINANZAS" },
      { id: "cat-descon", label: "🌿 Cierre & Desconexión Digital", color: "#8b5cf6", tag: "PAUSA" }
    ],
    defaultScheduleBlocks: [
      { day: 1, hour: 10, duration: 2, catId: "cat-ventas", title: "10 Mensajes Directos WhatsApp Clientes" },
      { day: 1, hour: 15, duration: 2, catId: "cat-despachos", title: "Armado de Paquetes & Envíos" },
      { day: 2, hour: 10, duration: 2, catId: "cat-ventas", title: "Seguimiento Cotizaciones Abiertas" },
      { day: 3, hour: 10, duration: 2, catId: "cat-ventas", title: "Contacto Clientes & Recompras" },
      { day: 3, hour: 15, duration: 2, catId: "cat-despachos", title: "Armado de Paquetes & Envíos" },
      { day: 4, hour: 10, duration: 2, catId: "cat-ventas", title: "Difusión Catálogo PDF 2 Páginas" },
      { day: 5, hour: 10, duration: 2, catId: "cat-ventas", title: "Llamadas de Cierre Comercial" },
      { day: 5, hour: 16, duration: 2, catId: "cat-finanzas", title: "Cierre de Flujo de Caja & Margen Neto" }
    ],
    kanbanTasks: [
      { id: "gb-1", text: "👓 Enviar catálogo de 2 páginas a 5 contactos", tag: "Comercial", col: "doing" },
      { id: "gb-2", text: "📦 Despachar primer pedido confirmado", tag: "Logística", col: "doing" },
      { id: "gb-3", text: "📸 Tomar 3 fotos con luz natural a los modelos", tag: "Catálogo", col: "done" },
      { id: "gb-4", text: "📝 Registrar margen de ganancia en planilla", tag: "Finanzas", col: "todo" }
    ],
    checklist: [
      "Ejecutar 1 contacto comercial antes de las 12:00 del día",
      "Congelar cambios estéticos de empaque, logo o catálogo",
      "Cerrar balance financiero cada viernes a las 18:00",
      "Reinvertir solo sobre margen de caja ya cobrado"
    ],
    specializedModule: "ventas",
    tools: [
      {
        icon: "🎯",
        tag: "Priorización",
        name: "Matriz Eisenhower Inmediata",
        desc: "Separar lo que da caja (Importante) de las distracciones estéticas menores (No urgente).",
        checklist: [
          "Ejecutar 1 tarea comercial de impacto directo antes de las 12:00",
          "Congelar cambios estéticos de empaque, logo o catálogo",
          "Separar implacablemente tareas que generan caja de tareas accesorias"
        ]
      },
      {
        icon: "⚡",
        tag: "Tracción",
        name: "Embudo Mínimo Viable de 7 Días",
        desc: "Paso a paso de 7 microacciones para pasar de la idea al primer cobro bancario real.",
        checklist: [
          "Enviar catálogo PDF de 2 páginas a 10 contactos estratégicos",
          "Utilizar guion humano de conversación directa por WhatsApp",
          "Concretar primer cobro bancario antes de invertir en software o web"
        ]
      },
      {
        icon: "⏱️",
        tag: "Velocidad",
        name: "Regla de los 2 Minutos Comerciales",
        desc: "Si una decisión comercial toma menos de 2 min, se ejecuta de inmediato sin analizarla más.",
        checklist: [
          "Si una cotización o respuesta comercial toma <2 min, enviarla ya",
          "Cero postergación de dudas simples de clientes potenciales",
          "Cerrar acuerdos en caliente durante la conversación"
        ]
      },
      {
        icon: "📈",
        tag: "Control",
        name: "Inventario Semanal de Flujo de Caja",
        desc: "Control visual de ingresos vs. costo unitario por producto vendido.",
        checklist: [
          "Anotar costo unitario vs precio de venta de cada unidad entregada",
          "Separar margen de utilidad neta cada viernes a las 18:00",
          "Reinvertir solo sobre flujo de caja positivo ya depositado"
        ]
      }
    ],
    aiPrompts: [
      {
        id: "prompt-gabriel-1",
        badge: "Guion de Venta Directa",
        tagColor: "#10b981",
        title: "Guion de Prospección Relacional por WhatsApp",
        text: `Escribe un guion de contacto comercial para WhatsApp, sin sonar a spam ni a vendedor agresivo. El objetivo es presentar una colección exclusiva de accesorios ópticos a contactos conocidos, ofreciéndoles un precio especial de lanzamiento a cambio de su feedback honesto sobre el producto. Debe ser breve (máximo 4 párrafos) y terminar con una pregunta abierta.`
      },
      {
        id: "prompt-gabriel-2",
        badge: "Acción Imperfecta",
        tagColor: "#3b82f6",
        title: "Filtro Anti-Perfeccionismo: ¿Está 70% Bueno?",
        text: `Evalúa la siguiente propuesta de catálogo comercial. Dime qué 3 cosas son estrictamente necesarias para empezar a vender hoy mismo y qué 5 detalles ornamentales (colores, fuentes, empaque) debo ignorar completamente durante las primeras 14 semanas para no frenar la caja.`
      }
    ],
    metrics: [
      { val: "12", lbl: "Unidades vendidas en los primeros 14 días" },
      { val: "48h", lbl: "De la parálisis al primer cobro bancario" },
      { val: "0", lbl: "Gastos innecesarios en software antes de validar" }
    ],
    summary: "El emprendedor destrabó su parálisis, validó su propuesta de valor directamente con clientes reales y transformó un inventario estancado en un negocio con ventas recurrentes."
  },

  caso_e: {
    id: "caso_e",
    pin: "2929",
    profile: {
      avatar: "🌏",
      shortName: "Valeria",
      roleShort: "Transición & Carrera",
      demoTag: "Caso 05 • Transición Internacional (Ejemplo Real)",
      name: "Caso 5: Valeria (29 años) • Proyecto 'Road to Sidney 2.0' (Transición Internacional)",
      role: "Profesional en Transición de Carrera • Proyecto Migratorio & Certificación de Idioma",
      context: "Planificando su mudanza y desarrollo profesional en Australia mientras sostenía su empleo actual de 9 horas diarias. La mezcla caótica de trámites consulares, exámenes de inglés, cotizaciones de pasajes y metas de ahorro le generaba sobrecarga mental severa y miedo a quemarse antes de viajar.",
      salesHook: "¿Te enfrentas a un cambio de vida monumental (migración, nuevo negocio, cambio de carrera) y sientes que la cantidad de requisitos te sobrepasa? Estructuramos tu proyecto en Fases de Vuelo trimestrales cerradas, protegemos tu estudio matutino de 35 min y blindamos tu fondo de solvencia 50/30/20.",
      pdaProfile: "R-Alta (Riesgo 80%) | N-Alta (Norma 80%) | AC-Alto (Autocontrol 80%) • Arquetipo: La Ejecutora Estratégica con Proyecto de Vida",
      pills: ["29 Años", "Transición Migratoria", "Fases de Vuelo Trimestrales", "Bloque Matutino Idioma (35m)", "GPS Ahorro Solvencia", "$2.4M Blindado"]
    },
    simulator: {
      before: [
        { label: "Carga Vital", val: "🔥 Trabajo + Trámites + Idioma + Casa", sub: "Sensación de que el día no alcanza y burnout inminente" },
        { label: "Metas", val: "❓ 50 requisitos mezclados sin cronograma", sub: "Ansiedad por olvidar fechas límite de postulación" },
        { label: "Finanzas", val: "📉 Ahorro errático sin blindaje", sub: "Gastos hormiga que retrasan la compra de pasajes" }
      ],
      after: [
        { label: "Carga Vital", val: "🛡️ Fases de Vuelo Trimestrales", sub: "Cada mes tiene 1 solo objetivo prioritario protegido" },
        { label: "Metas", val: "🎯 Tablero de Hitos Migratorios Secuenciales", sub: "Paso a paso sin saltarse etapas ni sobrecargar la mente" },
        { label: "Finanzas", val: "💰 Fondo Automático de Pasajes y Solvencia", sub: "Separación sistemática 50/30/20 al recibir el sueldo" }
      ]
    },
    step1: {
      quote: "«Quiero radicarme en el extranjero, pero entre mi trabajo actual, preparar los exámenes de idioma, ahorrar para la solvencia y los trámites de la visa, siento que me voy a enfermar antes de subirme al avión. No sé qué hacer primero.»",
      symptoms: [
        "<strong>Saturación por Proyectos Gigantes:</strong> Ver la meta como una montaña inalcanzable en lugar de una secuencia de micro-pasos.",
        "<strong>Fatiga por Doble Jornada:</strong> Trabajar 9 horas y luego intentar estudiar idioma con la mente agotada.",
        "<strong>Incertidumbre Financiera:</strong> No saber la cifra exacta requerida para la visa y los primeros 3 meses de estadía."
      ]
    },
    step2: {
      insight: "«Una transición de vida no se gana trabajando 16 horas al día; se conquista dividiendo el proyecto en Fases de Vuelo cerradas. Si este mes toca certificación de idioma, congelamos la investigación de arriendos hasta que el examen esté aprobado.»",
      diagnosisPoints: [
        "<strong>Cuello de botella real:</strong> Intentar resolver simultáneamente problemas de fases futuras que aún no corresponden.",
        "<strong>Palanca de destrabe:</strong> El método de 'Fases Secuenciales': Foco único por trimestre + Ahorro automatizado el día 1 del mes."
      ]
    },
    calibration: [
      { ver: "Semana 1", before: "Estudiar idioma 2 horas cada noche después del trabajo", after: "Fatiga extrema y retención de vocabulario cercana a cero" },
      { ver: "Semana 2", before: "Ajuste del Plan: Bloque matutino de 35 min antes de salir de casa", after: "Mente fresca, 100% de consistencia y avance medible" },
      { ver: "Semana 3", before: "Revisar foros de migración todos los días", after: "Restricción a 1 bloque de 45 min los sábados (Cero ansiedad digital)" }
    ],
    scheduleCategories: [
      { id: "cat-idioma", label: "🇬🇧 Bloque Matutino Idioma (35 min)", color: "#3b82f6", tag: "INGLÉS" },
      { id: "cat-empleo", label: "💼 Empleo & Responsabilidades", color: "#6b7280", tag: "EMPLEO" },
      { id: "cat-tramites", label: "📑 Hitos Visado & Ahorro", color: "#10b981", tag: "VISA" },
      { id: "cat-bienestar", label: "🌿 Caminata & Descompresión", color: "#8b5cf6", tag: "PAUSA" }
    ],
    defaultScheduleBlocks: [
      { day: 1, hour: 7, duration: 1, catId: "cat-idioma", title: "Listening & Speaking 35 min" },
      { day: 2, hour: 7, duration: 1, catId: "cat-idioma", title: "Listening & Speaking 35 min" },
      { day: 3, hour: 7, duration: 1, catId: "cat-idioma", title: "Listening & Speaking 35 min" },
      { day: 4, hour: 7, duration: 1, catId: "cat-idioma", title: "Listening & Speaking 35 min" },
      { day: 5, hour: 7, duration: 1, catId: "cat-idioma", title: "Listening & Speaking 35 min" },
      { day: 1, hour: 8, duration: 9, catId: "cat-empleo", title: "Jornada Laboral" },
      { day: 2, hour: 8, duration: 9, catId: "cat-empleo", title: "Jornada Laboral" },
      { day: 3, hour: 8, duration: 9, catId: "cat-empleo", title: "Jornada Laboral" },
      { day: 4, hour: 8, duration: 9, catId: "cat-empleo", title: "Jornada Laboral" },
      { day: 5, hour: 8, duration: 9, catId: "cat-empleo", title: "Jornada Laboral" },
      { day: 6, hour: 10, duration: 2, catId: "cat-tramites", title: "Trámites Visado & Ficha Única Drive" },
      { day: 6, hour: 16, duration: 2, catId: "cat-bienestar", title: "Caminata al Aire Libre" }
    ],
    kanbanTasks: [
      { id: "vl-1", text: "📖 35 min de práctica de listening matutino", tag: "Idioma", col: "doing" },
      { id: "vl-2", text: "🏦 Transferir $150.000 a fondo de solvencia", tag: "Finanzas", col: "doing" },
      { id: "vl-3", text: "📑 Traducir título profesional al inglés", tag: "Trámites", col: "done" },
      { id: "vl-4", text: "🩺 Agendar chequeo médico para visado", tag: "Trámites", col: "todo" }
    ],
    checklist: [
      "Completar 35 min de idioma antes de revisar WhatsApp de trabajo",
      "Transferir ahorro al fondo de solvencia el día de cobro de sueldo",
      "Cero revisión de foros migratorios en días de semana",
      "Cerrar la jornada con caminata de descompresión"
    ],
    specializedModule: "carrera",
    tools: [
      {
        icon: "✈️",
        tag: "Estrategia",
        name: "Roadmap por Fases de Vuelo (Administración Humana)",
        desc: "Desglose del proyecto migratorio en 4 trimestres independientes y ordenados.",
        checklist: [
          "Foco único exclusivo en la fase del trimestre actual (ej. Idioma)",
          "Congelar búsqueda de arriendos hasta tener certificación aprobada",
          "Revisión quincenal del cronograma de hitos migratorios"
        ]
      },
      {
        icon: "⏰",
        tag: "Energía",
        name: "Mapeador de Horarios Matutino",
        desc: "Proteger los primeros 45 min del día para el futuro propio antes de entregar energía al empleo.",
        checklist: [
          "35 minutos de práctica de listening/speaking antes de salir al trabajo",
          "Mente descansada y cero interrupciones de correos laborales",
          "No abrir WhatsApp de trabajo hasta completar el bloque de estudio"
        ]
      },
      {
        icon: "🏦",
        tag: "Finanzas",
        name: "GPS de Solvencia Internacional",
        desc: "Planilla de metas de ahorro obligatorias y blindaje de gastos de mudanza.",
        checklist: [
          "Transferir $150.000 a fondo de visa el mismo día de pago de sueldo",
          "Blindar el 20% de ahorro intocable para solvencia internacional",
          "Control visual del termómetro de pasajes y seguro médico"
        ]
      },
      {
        icon: "📋",
        tag: "Control",
        name: "Checklist de Trámites Despejados",
        desc: "Seguimiento visual de documentos certificados sin duplicar carpetas.",
        checklist: [
          "Subir documentos certificados a carpeta única de Google Drive",
          "Validar fechas de expiración de pasaporte y antecedentes",
          "Cero duplicación de archivos ni dispersión de papeles"
        ]
      }
    ],
    aiPrompts: [
      {
        id: "prompt-valeria-1",
        badge: "Preparación Examen C1",
        tagColor: "#3b82f6",
        title: "Simulador de Entrevista de Inglés para Visa",
        text: `Actúa como un examinador oficial del examen de inglés IELTS/PTE. Hazme una pregunta situacional sobre mi experiencia profesional y evalúa mi respuesta señalando: 1. Vocabulario avanzado que pude haber usado, 2. Errores gramaticales o de pronunciación comunes, 3. Una versión reescrita con nivel C1 fluido.`
      },
      {
        id: "prompt-valeria-2",
        badge: "Fases de Proyecto",
        tagColor: "#10b981",
        title: "Desglose Trimestral de Hitos Migratorios",
        text: `Organiza un plan de 9 meses para una profesional que migra a Australia. Divide el plan en 3 Fases de Vuelo trimestrales estrictas: Trimestre 1 Idioma y Certificación; Trimestre 2 Trámites Consulares y Traducciones; Trimestre 3 Finanzas, Solvencia y Pasajes. Establece qué actividades quedan terminantemente prohibidas en cada trimestre para evitar la saturación.`
      }
    ],
    metrics: [
      { val: "Nivel C1", lbl: "Certificación de idioma aprobada en 3 meses" },
      { val: "100%", lbl: "De documentos migratorios al día sin estrés" },
      { val: "$2.4M", lbl: "De ahorro acumulado y blindado para la partida" }
    ],
    summary: "La profesional logró transitar su proyecto de vida internacional con orden, salud mental y solvencia económica, sin sacrificar su trabajo actual ni quemar su sistema nervioso."
  }
};
