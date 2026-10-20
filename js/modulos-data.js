// BASE DE DATOS MAESTRA DE LOS 60 MÓDULOS CANÓNICOS AICC v3.0
window.AICC_MODULOS_DB = [
  {
    "id": "diagnostico_estructura",
    "nombre_oficial": "Auditoría de Estructura 168 Horas & Rueda de la Vida",
    "nombre_humano": "Termómetro de Signos Vitales: La Rueda que No Rueda",
    "pilar": "Pilar 1: Cimientos & Propósito",
    "fase_madurez": "Fase 1: Rescate & Oxígeno",
    "triggers_diagnosticos": {
      "fuga_horas_min": 10,
      "sintomas": [
        "Sensación de desbalance vital",
        "Atrofia de descanso y salud",
        "Éxito externo pero vacío interno"
      ],
      "variables_clave": [
        "promedio_vital",
        "brecha_redondez",
        "dimension_critica"
      ]
    },
    "red_flags": [
      "Brecha superior a 5 puntos entre trabajo y salud/descanso.",
      "Sensación de colapso y culpabilidad constante por descuidar áreas esenciales."
    ],
    "pregunta_diagnostica": "¿Si tu vida fuera un carruaje y estas 8 dimensiones fueran la rueda de madera, el viaje sería suave o terminarías volcado al primer bache?",
    "carta_tactica_asociada": "Sobrecarga Cognitiva",
    "protocolo_paso_cero": "Identificar únicamente las dos dimensiones con menor puntaje y definir 1 micro-acción de 5 minutos esta semana para cada una.",
    "microdosis_24h": "Mover los 8 deslizadores en la microapp móvil y registrar el puntaje promedio vital.",
    "sinergias": [
      "mapeador_24h",
      "foda_came",
      "kanban_gtd_wip2"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "hero-diagnostic-metrics",
        "tipo_interaccion": "Tarjetas métricas de entorno, fuga de horas y radar visual",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "ficha_auditoria_168h",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha 01: Auditoría de 168 Horas y Signos Vitales"
      },
      "plantilla_excel": "01_Auditoria_168_Horas.xlsx",
      "caja_canonica": {
        "pilar_directorio": "05_BIENESTAR_Y_FINANZAS",
        "carpeta": "La Rueda de la Vida",
        "app_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/05_BIENESTAR_Y_FINANZAS/La Rueda de la Vida/app.html",
        "print_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/05_BIENESTAR_Y_FINANZAS/La Rueda de la Vida/imprimible.html",
        "guide_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/05_BIENESTAR_Y_FINANZAS/La Rueda de la Vida/guia_humana.md",
        "img_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/05_BIENESTAR_Y_FINANZAS/La Rueda de la Vida/La Rueda de la Vida.png",
        "lab_app_url": "PILARES/05_BIENESTAR_Y_FINANZAS/La Rueda de la Vida/app.html",
        "lab_print_url": "PILARES/05_BIENESTAR_Y_FINANZAS/La Rueda de la Vida/imprimible.html",
        "lab_guide_url": "PILARES/05_BIENESTAR_Y_FINANZAS/La Rueda de la Vida/guia_humana.md",
        "lab_img_url": "PILARES/05_BIENESTAR_Y_FINANZAS/La Rueda de la Vida/La Rueda de la Vida.png"
      }
    },
    "metrica_impacto": {
      "kpi": "Brecha de redondez (diferencia max - min) menor a 4 puntos",
      "meta": "Promedio vital superior a 7.0/10 sin dimensiones en zona roja (<4)"
    },
    "piso": 1,
    "piso_nombre": "Piso 1: Cimientos & Estabilización Vital",
    "codigo_piso": "P1-01",
    "pilar_directorio": "05_BIENESTAR_Y_FINANZAS",
    "carpeta_pilares": "La Rueda de la Vida"
  },
  {
    "id": "mapeador_24h",
    "nombre_oficial": "Mapeador Semanal de Horarios 24H por Bloques",
    "nombre_humano": "El Tablero Visual de Soberanía del Tiempo (168 Horas)",
    "pilar": "Pilar 2: Tiempo & Ejecución",
    "fase_madurez": "Fase 1: Rescate & Oxígeno",
    "triggers_diagnosticos": {
      "fuga_horas_min": 12,
      "sintomas": [
        "Caos de horarios",
        "Sueño irregular",
        "Días sin bordes",
        "Trabajar de noche"
      ],
      "variables_clave": [
        "horas_sueno",
        "horas_trabajo",
        "indice_soberania_temporal"
      ]
    },
    "red_flags": [
      "Días enteros sin hora de inicio ni fin.",
      "Menos de 6 horas de sueño regular por intentar abarcar pendientes."
    ],
    "pregunta_diagnostica": "¿Si miramos tu semana como un mosaico de 24 horas, tus horas de descanso y concentración están blindadas en color?",
    "carta_tactica_asociada": "Ley de Parkinson",
    "protocolo_paso_cero": "Pintar únicamente 2 cajitas fijas: Hora de Despertar y Hora Sagrada de Apagar Pantallas.",
    "microdosis_24h": "Pintar la plantilla de lunes a domingo con los 4 colores base (Sueño, Trabajo Profundo, Ocio y Traslados).",
    "sinergias": [
      "time_blocking_flexible",
      "kanban_gtd_wip2",
      "protocolo_paso_cero"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "ah-schedule-canvas",
        "tipo_interaccion": "Canvas interactivo 24h con pinceles, gestión de categorías en vivo (+/-) y exportador PNG",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "mosaico_horario_24h_imprimible",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha 04: Mapeador Horario 24H de Pared"
      },
      "plantilla_excel": "03_Mapeador_Horarios_24H.xlsx",
      "caja_canonica": {
        "pilar_directorio": "02_PRODUCTIVIDAD_Y_TIEMPO",
        "carpeta": "Mapeador Horarios 24H",
        "app_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Mapeador Horarios 24H/app.html",
        "print_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Mapeador Horarios 24H/imprimible.html",
        "guide_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Mapeador Horarios 24H/guia_humana.md",
        "img_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Mapeador Horarios 24H/Mapeador Horarios 24H.png",
        "lab_app_url": "PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Mapeador Horarios 24H/app.html",
        "lab_print_url": "PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Mapeador Horarios 24H/imprimible.html",
        "lab_guide_url": "PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Mapeador Horarios 24H/guia_humana.md",
        "lab_img_url": "PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Mapeador Horarios 24H/Mapeador Horarios 24H.png"
      }
    },
    "metrica_impacto": {
      "kpi": "Índice de Soberanía Temporal (IST >= 70%)",
      "meta": "Más de 115 horas semanales con destino consciente"
    },
    "piso": 1,
    "piso_nombre": "Piso 1: Cimientos & Estabilización Vital",
    "codigo_piso": "P1-02",
    "pilar_directorio": "02_PRODUCTIVIDAD_Y_TIEMPO",
    "carpeta_pilares": "Mapeador Horarios 24H"
  },
  {
    "id": "time_blocking_flexible",
    "nombre_oficial": "Time Blocking Flexible & Ventanas de Oro",
    "nombre_humano": "Ventanas de Oro de 45 a 90 Minutos Sin Interrupciones",
    "pilar": "Pilar 2: Tiempo & Ejecución",
    "fase_madurez": "Fase 1: Rescate & Oxígeno",
    "triggers_diagnosticos": {
      "fuga_horas_min": 10,
      "sintomas": [
        "Agenda colador",
        "Interrupciones constantes",
        "Estar ocupado sin avanzar"
      ],
      "variables_clave": [
        "ventanas_de_oro",
        "bloques_foco",
        "modo_avion"
      ]
    },
    "red_flags": [
      "Días enteros sin un solo bloque de 45 minutos continuos de foco.",
      "Reescribir listas de pendientes sin asignarles espacio en el calendario."
    ],
    "pregunta_diagnostica": "¿Tienes al menos un bloque de 60 minutos al día donde esté prohibido responder llamadas o WhatsApp?",
    "carta_tactica_asociada": "Ley de Parkinson",
    "protocolo_paso_cero": "Blindar 45 minutos mañana en la mañana para tu tarea más importante en modo avión.",
    "microdosis_24h": "Definir 2 Ventanas de Oro en el planificador y ejecutar un bloque de 45 minutos con el temporizador.",
    "sinergias": [
      "mapeador_24h",
      "kanban_gtd_wip2"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "time-block-timer",
        "tipo_interaccion": "Temporizador pomodoro/bloques de concentración con contador visual",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "hoja_ventanas_de_oro",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha 06: Registro de Bloques Sagrados"
      },
      "plantilla_excel": "05_Time_Blocking_Planificador.xlsx",
      "caja_canonica": {
        "pilar_directorio": "02_PRODUCTIVIDAD_Y_TIEMPO",
        "carpeta": "Time Blocking",
        "app_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Time Blocking/app.html",
        "print_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Time Blocking/imprimible.html",
        "guide_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Time Blocking/guia_humana.md",
        "img_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Time Blocking/Time Blocking.png",
        "lab_app_url": "PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Time Blocking/app.html",
        "lab_print_url": "PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Time Blocking/imprimible.html",
        "lab_guide_url": "PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Time Blocking/guia_humana.md",
        "lab_img_url": "PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Time Blocking/Time Blocking.png"
      }
    },
    "metrica_impacto": {
      "kpi": "Al menos 8 a 12 Ventanas de Oro completadas por semana",
      "meta": "90 minutos diarios de trabajo profundo protegido"
    },
    "piso": 1,
    "piso_nombre": "Piso 1: Cimientos & Estabilización Vital",
    "codigo_piso": "P1-03",
    "pilar_directorio": "02_PRODUCTIVIDAD_Y_TIEMPO",
    "carpeta_pilares": "Time Blocking"
  },
  {
    "id": "gtd_vaciado_mental",
    "nombre_oficial": "Getting Things Done (GTD - Fase Capturar y Procesar)",
    "nombre_humano": "El Cubo de Basura Mental y Vaciado de RAM Cerebral",
    "pilar": "Pilar 2: Tiempo & Ejecución",
    "fase_madurez": "Fase 1: Rescate & Oxígeno",
    "triggers_diagnosticos": {
      "fuga_horas_min": 8,
      "sintomas": [
        "Ruido mental constante",
        "Despertares nocturnos",
        "Ansiedad por olvidos",
        "Notas dispersas"
      ],
      "variables_clave": [
        "sobrecarga_ram",
        "inbox_zero",
        "regla_2_minutos"
      ]
    },
    "red_flags": [
      "Más de 20 pendientes retenidos en la memoria sin registrar.",
      "Sensación de parálisis por exceso de frentes abiertos (Efecto Zeigarnik)."
    ],
    "pregunta_diagnostica": "¿Confías en tu memoria biológica para recordar todo lo que tienes pendiente, o tienes un sistema externo 100% confiable donde guardas todo?",
    "carta_tactica_asociada": "Ley de Carlson",
    "protocolo_paso_cero": "Anotar los 5 pendientes más ruidosos en la bandeja de entrada y ejecutar de inmediato 1 que tome menos de 2 minutos.",
    "microdosis_24h": "Hacer un vaciado mental nocturno de 5 minutos antes de dormir.",
    "sinergias": [
      "kanban_gtd_wip2",
      "inventario_cero_culpa"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "gtd-inbox-capture-box",
        "tipo_interaccion": "Bandeja de captura rápida con procesamiento en 1 clic hacia Kanban",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "hoja_gtd_vaciado_mental",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha: Hoja de Vaciado Mental GTD"
      },
      "plantilla_excel": "21_GTD_Bandeja_Entrada.xlsx",
      "caja_canonica": {
        "pilar_directorio": "02_PRODUCTIVIDAD_Y_TIEMPO",
        "carpeta": "Getting Things Done (GTD)",
        "app_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Getting Things Done (GTD)/app.html",
        "print_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Getting Things Done (GTD)/imprimible.html",
        "guide_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Getting Things Done (GTD)/guia_humana.md",
        "img_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Getting Things Done (GTD)/Getting Things Done (GTD).png",
        "lab_app_url": "PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Getting Things Done (GTD)/app.html",
        "lab_print_url": "PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Getting Things Done (GTD)/imprimible.html",
        "lab_guide_url": "PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Getting Things Done (GTD)/guia_humana.md",
        "lab_img_url": "PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Getting Things Done (GTD)/Getting Things Done (GTD).png"
      }
    },
    "metrica_impacto": {
      "kpi": "Bandeja de entrada a cero (InBox Zero Mental) al menos una vez por semana",
      "meta": "Cero pendientes flotantes en la memoria biológica"
    },
    "piso": 1,
    "piso_nombre": "Piso 1: Cimientos & Estabilización Vital",
    "codigo_piso": "P1-04",
    "pilar_directorio": "02_PRODUCTIVIDAD_Y_TIEMPO",
    "carpeta_pilares": "Getting Things Done (GTD)"
  },
  {
    "id": "kanban_gtd_wip2",
    "nombre_oficial": "Kanban Minimalista con Límite WIP=2",
    "nombre_humano": "El Embudo de Sola-Ejecución (Máximo 2 Tareas Activas)",
    "pilar": "Pilar 3: Orden Mental & Operaciones",
    "fase_madurez": "Fase 1: Rescate & Oxígeno",
    "triggers_diagnosticos": {
      "fuga_horas_min": 10,
      "sintomas": [
        "Multitarea caótica",
        "Muchos proyectos al 80%",
        "Fatiga por cambio de contexto"
      ],
      "variables_clave": [
        "wip_limit",
        "cycle_time",
        "throughput"
      ]
    },
    "red_flags": [
      "Más de 3 proyectos abiertos a la vez sin poder cerrar ninguno.",
      "Sensación de parálisis ante listas largas de pendientes."
    ],
    "pregunta_diagnostica": "¿Cuántas tareas tienes abiertas en este instante y cuál es la ÚNICA que vas a cerrar antes de las 14:00?",
    "carta_tactica_asociada": "Task-Switching",
    "protocolo_paso_cero": "Si tienes más de 2 tareas abiertas, devolver todas a 'Por Hacer' excepto una y terminarla antes de abrir otra.",
    "microdosis_24h": "Configurar el tablero Kanban y mantener estrictamente el límite WIP=2 durante toda la jornada.",
    "sinergias": [
      "protocolo_paso_cero",
      "time_blocking_flexible"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "kanban-wip2-board",
        "tipo_interaccion": "Tablero drag-and-drop con límite estricto WIP=2 y alertas visuales",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "kanban_flujo_tres_vias",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha 05: Tablero Kanban de Pared Tres Vías"
      },
      "plantilla_excel": "04_Tablero_Kanban_Tareas.xlsx",
      "caja_canonica": {
        "pilar_directorio": "04_OPERACIONES_Y_PROCESOS",
        "carpeta": "Kanban",
        "app_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/Kanban/app.html",
        "print_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/Kanban/imprimible.html",
        "guide_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/Kanban/guia_humana.md",
        "img_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/Kanban/Kanban.png",
        "lab_app_url": "PILARES/04_OPERACIONES_Y_PROCESOS/Kanban/app.html",
        "lab_print_url": "PILARES/04_OPERACIONES_Y_PROCESOS/Kanban/imprimible.html",
        "lab_guide_url": "PILARES/04_OPERACIONES_Y_PROCESOS/Kanban/guia_humana.md",
        "lab_img_url": "PILARES/04_OPERACIONES_Y_PROCESOS/Kanban/Kanban.png"
      }
    },
    "metrica_impacto": {
      "kpi": "Límite WIP estrictamente en <= 2 y Tasa de Cierre Diaria",
      "meta": "Cerrar al menos 2 tareas críticas diarias completas"
    },
    "piso": 1,
    "piso_nombre": "Piso 1: Cimientos & Estabilización Vital",
    "codigo_piso": "P1-05",
    "pilar_directorio": "04_OPERACIONES_Y_PROCESOS",
    "carpeta_pilares": "Kanban"
  },
  {
    "id": "matriz_eisenhower",
    "nombre_oficial": "Matriz de Eisenhower (Urgente vs Importante)",
    "nombre_humano": "La Cura para la Urgentitis Crónica: Diferenciar el Incendio del Ensayo",
    "pilar": "Pilar 2: Tiempo & Ejecución",
    "fase_madurez": "Fase 1: Rescate & Oxígeno",
    "triggers_diagnosticos": {
      "fuga_horas_min": 15,
      "sintomas": [
        "Bombero permanente",
        "Secuestro de agenda",
        "Culpa al descansar"
      ],
      "variables_clave": [
        "urgente_vs_importante",
        "tiempo_en_q2"
      ]
    },
    "red_flags": [
      "Días enteros respondiendo mensajes y apagando fuegos sin tocar proyectos estratégicos.",
      "Sensación de parálisis y caída en scroll infinito (Q4) por saturación de urgencias."
    ],
    "pregunta_diagnostica": "¿Cuántas actividades de ayer hiciste por reacción a otros y cuántas planificaste con calma para tu propio bienestar y futuro?",
    "carta_tactica_asociada": "Ley de Parkinson",
    "protocolo_paso_cero": "Elegir 1 sola tarea para Q2 (Bloque de Oro) y ejecutarla en los primeros 30 minutos del día antes de abrir WhatsApp.",
    "microdosis_24h": "Clasificar las próximas 5 tareas del día en la microapp y mover al menos una a Q2.",
    "sinergias": [
      "kanban_gtd_wip2",
      "time_blocking_flexible"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "eisenhower-matrix-board",
        "tipo_interaccion": "Tablero drag-and-drop de 4 cuadrantes con selector de acciones inmediatas",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "hoja_matriz_eisenhower",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha: Matriz Eisenhower de Priorización Diaria"
      },
      "plantilla_excel": "04_Matriz_Eisenhower_Priorizacion.xlsx",
      "caja_canonica": {
        "pilar_directorio": "02_PRODUCTIVIDAD_Y_TIEMPO",
        "carpeta": "Matriz de Eisenhower",
        "app_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Matriz de Eisenhower/app.html",
        "print_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Matriz de Eisenhower/imprimible.html",
        "guide_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Matriz de Eisenhower/guia_humana.md",
        "img_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Matriz de Eisenhower/Matriz de Eisenhower.png",
        "lab_app_url": "PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Matriz de Eisenhower/app.html",
        "lab_print_url": "PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Matriz de Eisenhower/imprimible.html",
        "lab_guide_url": "PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Matriz de Eisenhower/guia_humana.md",
        "lab_img_url": "PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Matriz de Eisenhower/Matriz de Eisenhower.png"
      }
    },
    "metrica_impacto": {
      "kpi": "% de tiempo semanal protegido en Q2 (Bloques de Oro)",
      "meta": "Mayor o igual a 35% del tiempo útil"
    },
    "piso": 1,
    "piso_nombre": "Piso 1: Cimientos & Estabilización Vital",
    "codigo_piso": "P1-06",
    "pilar_directorio": "02_PRODUCTIVIDAD_Y_TIEMPO",
    "carpeta_pilares": "Matriz de Eisenhower"
  },
  {
    "id": "finanzas_503020",
    "nombre_oficial": "Presupuesto y Distribución 50/30/20",
    "nombre_humano": "Tu Blindaje de Solvencia Estratégica: El Oxígeno Financiero en Tres Baldes",
    "pilar": "Pilar 4: Finanzas & Negocio",
    "fase_madurez": "Fase 1: Rescate & Oxígeno",
    "triggers_diagnosticos": {
      "fuga_horas_min": 0,
      "sintomas": [
        "Estrés de fin de mes",
        "Cero fondo de emergencia",
        "Culpa al gastar en ocio",
        "Aceptación de proyectos tóxicos por necesidad"
      ],
      "variables_clave": [
        "costo_oxigeno",
        "meses_fondo_paz",
        "ratio_necesidades"
      ]
    },
    "red_flags": [
      "Necesidades fijas superan el 65% del ingreso líquido.",
      "Menos de 30 días de fondo de supervivencia en caso de cese de ingresos.",
      "Sentimiento de culpa recurrente al comprar gustos personales."
    ],
    "pregunta_diagnostica": "¿Si tus ingresos se detuvieran por completo mañana, cuántos días o meses podrías pagar tu techo y comida con total tranquilidad?",
    "carta_tactica_asociada": "Costo de Oportunidad",
    "protocolo_paso_cero": "Anotar tus 3 gastos fijos principales (arriendo/dividendo, súper y cuentas) y transferir hoy mismo una micro-suma a una cuenta sin tarjeta de débito.",
    "microdosis_24h": "Ingresar tu ingreso neto en la microapp y verificar si tu piso de necesidades está por encima o por debajo del 50%.",
    "sinergias": [
      "fondo_reserva_paz",
      "paquetizacion_servicios_mes"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "budget-503020-calculator",
        "tipo_interaccion": "Calculadora interactiva con barras porcentuales y alertas de sobregiro",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "planilla_control_503020",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha 09: Planilla de Control Presupuestario Mensual"
      },
      "plantilla_excel": "07_Presupuesto_50_30_20.xlsx",
      "caja_canonica": {
        "pilar_directorio": "05_BIENESTAR_Y_FINANZAS",
        "carpeta": "La Regla 50 30 20",
        "app_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/05_BIENESTAR_Y_FINANZAS/La Regla 50 30 20/app.html",
        "print_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/05_BIENESTAR_Y_FINANZAS/La Regla 50 30 20/imprimible.html",
        "guide_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/05_BIENESTAR_Y_FINANZAS/La Regla 50 30 20/guia_humana.md",
        "img_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/05_BIENESTAR_Y_FINANZAS/La Regla 50 30 20/La Regla 50 30 20.png",
        "lab_app_url": "PILARES/05_BIENESTAR_Y_FINANZAS/La Regla 50 30 20/app.html",
        "lab_print_url": "PILARES/05_BIENESTAR_Y_FINANZAS/La Regla 50 30 20/imprimible.html",
        "lab_guide_url": "PILARES/05_BIENESTAR_Y_FINANZAS/La Regla 50 30 20/guia_humana.md",
        "lab_img_url": "PILARES/05_BIENESTAR_Y_FINANZAS/La Regla 50 30 20/La Regla 50 30 20.png"
      }
    },
    "metrica_impacto": {
      "kpi": "Meses de Fondo de Paz acumulados y Ratio de Necesidades <= 50%",
      "meta": "Mínimo 1 mes de subsistencia acumulado"
    },
    "piso": 1,
    "piso_nombre": "Piso 1: Cimientos & Estabilización Vital",
    "codigo_piso": "P1-07",
    "pilar_directorio": "05_BIENESTAR_Y_FINANZAS",
    "carpeta_pilares": "La Regla 50 30 20"
  },
  {
    "id": "tecnica_pomodoro_foco",
    "nombre_oficial": "Técnica Pomodoro (Microdosis de Concentración)",
    "nombre_humano": "Entrenar a tu Mente en Bloques de 25 Minutos",
    "pilar": "Pilar 2: Tiempo & Ejecución",
    "fase_madurez": "Fase 1: Rescate & Oxígeno",
    "triggers_diagnosticos": {
      "fuga_horas_min": 6,
      "sintomas": [
        "Postergación por sobrecarga",
        "Fatiga rápida de atención",
        "Mirar el celular compulsivamente"
      ],
      "variables_clave": [
        "ciclos_pomodoro",
        "pausa_biologica",
        "monotarea"
      ]
    },
    "red_flags": [
      "Incapacidad de sostener 20 minutos seguidos sin abrir redes o chats.",
      "Procrastinación de tareas complejas por percibirlas como 'demasiado grandes'."
    ],
    "pregunta_diagnostica": "¿Eres capaz de apagar tu teléfono y trabajar concentrado en una sola cosa por 25 minutos sin interrupción?",
    "carta_tactica_asociada": "Parálisis por Análisis",
    "protocolo_paso_cero": "Elegir 1 micro-tarea y encender el temporizador de 25 minutos con el teléfono en silencio boca abajo.",
    "microdosis_24h": "Completar 2 ciclos Pomodoro consecutivos respetando estrictamente la pausa de 5 minutos sin pantallas.",
    "sinergias": [
      "protocolo_paso_cero",
      "kanban_gtd_wip2"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "pomodoro-widget-timer",
        "tipo_interaccion": "Widget de reloj pomodoro con sonido de campana y registro de ciclos completados",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "hoja_pomodoro_tracker",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha: Registro Diario de Pomodoros y Foco"
      },
      "plantilla_excel": "20_Pomodoro_Tracker.xlsx",
      "caja_canonica": {
        "pilar_directorio": "02_PRODUCTIVIDAD_Y_TIEMPO",
        "carpeta": "Tecnica Pomodoro",
        "app_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Tecnica Pomodoro/app.html",
        "print_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Tecnica Pomodoro/imprimible.html",
        "guide_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Tecnica Pomodoro/guia_humana.md",
        "img_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Tecnica Pomodoro/Tecnica Pomodoro.png",
        "lab_app_url": "PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Tecnica Pomodoro/app.html",
        "lab_print_url": "PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Tecnica Pomodoro/imprimible.html",
        "lab_guide_url": "PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Tecnica Pomodoro/guia_humana.md",
        "lab_img_url": "PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Tecnica Pomodoro/Tecnica Pomodoro.png"
      }
    },
    "metrica_impacto": {
      "kpi": "Ciclos Pomodoro Completados por Día",
      "meta": "Al menos 4 ciclos de 25 minutos de trabajo profundo al día"
    },
    "piso": 1,
    "piso_nombre": "Piso 1: Cimientos & Estabilización Vital",
    "codigo_piso": "P1-08",
    "pilar_directorio": "02_PRODUCTIVIDAD_Y_TIEMPO",
    "carpeta_pilares": "Tecnica Pomodoro"
  },
  {
    "id": "batching_agrupacion_tareas",
    "nombre_oficial": "Batching (Procesamiento por Lotes)",
    "nombre_humano": "Agrupar Tareas Parecidas para no Freír tu Cerebro",
    "pilar": "Pilar 2: Tiempo & Ejecución",
    "fase_madurez": "Fase 1: Rescate & Oxígeno",
    "triggers_diagnosticos": {
      "fuga_horas_min": 8,
      "sintomas": [
        "Fragmentación de atención",
        "Responder notificaciones todo el día",
        "Salto constante de tareas"
      ],
      "variables_clave": [
        "lotes_agrupados",
        "ventanas_comunicacion",
        "ahorro_cognitivo"
      ]
    },
    "red_flags": [
      "Responder correos o WhatsApp cada 15 minutos en lugar de en bloques fijos.",
      "Sensación de fatiga mental por haber cambiado de aplicación más de 30 veces en una mañana."
    ],
    "pregunta_diagnostica": "¿Atiendes cada distracción en el segundo en que aparece, o agrupas tus tareas en bloques lógicos de trabajo?",
    "carta_tactica_asociada": "Task-Switching",
    "protocolo_paso_cero": "Agrupar todas las respuestas de mensajería a las 12:30 y 17:30, desactivando alertas el resto del tiempo.",
    "microdosis_24h": "Definir tus 3 lotes esenciales y ejecutar el lote de comunicación en una sola ráfaga de 30 minutos.",
    "sinergias": [
      "time_blocking_flexible",
      "mapeador_24h"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "batching-lot-scheduler",
        "tipo_interaccion": "Organizador de lotes de tareas con temporizador de ráfaga",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "hoja_batching_lotes",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha: Protocolo de Agrupación por Lotes (Batching)"
      },
      "plantilla_excel": "19_Batching_Lotes_Tareas.xlsx",
      "caja_canonica": {
        "pilar_directorio": "02_PRODUCTIVIDAD_Y_TIEMPO",
        "carpeta": "Batching",
        "app_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Batching/app.html",
        "print_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Batching/imprimible.html",
        "guide_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Batching/guia_humana.md",
        "img_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Batching/Batching.png",
        "lab_app_url": "PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Batching/app.html",
        "lab_print_url": "PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Batching/imprimible.html",
        "lab_guide_url": "PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Batching/guia_humana.md",
        "lab_img_url": "PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Batching/Batching.png"
      }
    },
    "metrica_impacto": {
      "kpi": "Máximo 2 ventanas diarias de procesamiento de comunicación no urgente",
      "meta": "Ahorro de al menos 90 minutos diarios de reconexión cognitiva"
    },
    "piso": 1,
    "piso_nombre": "Piso 1: Cimientos & Estabilización Vital",
    "codigo_piso": "P1-09",
    "pilar_directorio": "02_PRODUCTIVIDAD_Y_TIEMPO",
    "carpeta_pilares": "Batching"
  },
  {
    "id": "metodologia_5s_espacio",
    "nombre_oficial": "Metodología 5S (Seiri, Seiton, Seiso, Seiketsu, Shitsuke)",
    "nombre_humano": "Ordenar tu Espacio Físico y Digital para Calmar tu Mente",
    "pilar": "Pilar 3: Orden Mental & Operaciones",
    "fase_madurez": "Fase 1: Rescate & Oxígeno",
    "triggers_diagnosticos": {
      "fuga_horas_min": 5,
      "sintomas": [
        "Desorden visual",
        "Mesa saturada de papeles",
        "Escritorio de PC caótico",
        "Búsquedas lentas"
      ],
      "variables_clave": [
        "tiempo_busqueda_archivos",
        "higiene_visual",
        "ritual_cierre"
      ]
    },
    "red_flags": [
      "Tardar más de 30 segundos en encontrar un documento o archivo esencial.",
      "Resistencia o desánimo al sentarse a trabajar por desorden visual acumulado."
    ],
    "pregunta_diagnostica": "¿Cualquier persona externa podría encontrar un archivo en tu computadora o un objeto en tu oficina en menos de 30 segundos?",
    "carta_tactica_asociada": "Sobrecarga Cognitiva",
    "protocolo_paso_cero": "Tirar 3 papeles inútiles y mover los archivos sueltos del escritorio de la computadora a una sola carpeta de archivo temporal.",
    "microdosis_24h": "Ejecutar la auditoría de 15 puntos en la microapp y realizar un ritual de cierre diario de 3 minutos.",
    "sinergias": [
      "mochila_operativa_salidas",
      "diagnostico_estructura"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "five-s-audit-checklist",
        "tipo_interaccion": "Checklist de auditoría de orden con barra de progreso de las 5 etapas",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "hoja_auditoria_5s_espacio",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha: Checklist de Auditoría 5S de Espacio y Archivos"
      },
      "plantilla_excel": "24_Metodologia_5S_Auditoria.xlsx",
      "caja_canonica": {
        "pilar_directorio": "04_OPERACIONES_Y_PROCESOS",
        "carpeta": "Metodologia 5S",
        "app_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/Metodologia 5S/app.html",
        "print_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/Metodologia 5S/imprimible.html",
        "guide_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/Metodologia 5S/guia_humana.md",
        "img_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/Metodologia 5S/Metodologia 5S.png",
        "lab_app_url": "PILARES/04_OPERACIONES_Y_PROCESOS/Metodologia 5S/app.html",
        "lab_print_url": "PILARES/04_OPERACIONES_Y_PROCESOS/Metodologia 5S/imprimible.html",
        "lab_guide_url": "PILARES/04_OPERACIONES_Y_PROCESOS/Metodologia 5S/guia_humana.md",
        "lab_img_url": "PILARES/04_OPERACIONES_Y_PROCESOS/Metodologia 5S/Metodologia 5S.png"
      }
    },
    "metrica_impacto": {
      "kpi": "Tiempo de búsqueda de recursos menor a 30 segundos",
      "meta": "100% de cumplimiento en ritual de cierre y escritorio despejado"
    },
    "piso": 1,
    "piso_nombre": "Piso 1: Cimientos & Estabilización Vital",
    "codigo_piso": "P1-10",
    "pilar_directorio": "04_OPERACIONES_Y_PROCESOS",
    "carpeta_pilares": "Metodologia 5S"
  },
  {
    "id": "protocolo_paso_cero",
    "nombre_oficial": "Protocolo Paso Cero (Micro-compromisos de 5 Minutos)",
    "nombre_humano": "Romper el Hielo sin Sufrir (La Acción Ridículamente Pequeña)",
    "pilar": "Pilar 4: Hábitos & Psicología Operativa",
    "fase_madurez": "Fase 1: Rescate & Oxígeno",
    "triggers_diagnosticos": {
      "fuga_horas_min": 8,
      "sintomas": [
        "Postergación crónica de tareas que parecen un cerro imposible de escalar",
        "Perfeccionismo paralizante ('si no tengo 3 horas libres, mejor ni empiezo')",
        "Ansiedad anticipatoria antes de abrir un documento, correo o presupuesto",
        "Culpa acumulada por llevar días pateando el mismo pendiente importante"
      ],
      "variables_clave": [
        "procrastinacion_ansiosa",
        "paralisis_por_analisis",
        "fatiga_extrema"
      ]
    },
    "red_flags": [
      "Pospongo las tareas difíciles porque me parecen un cerro imposible de escalar.",
      "Siento culpa por no hacer todo perfecto y termino sin hacer nada."
    ],
    "pregunta_diagnostica": "Si solo tuvieras 5 minutos de energía hoy, ¿cuál es la acción diminuta y ridículamente fácil que destrabaría ese pendiente?",
    "carta_tactica_asociada": "Parálisis por Análisis",
    "protocolo_paso_cero": "Abrir el documento y escribir solo el título o la primera línea. Parar de inmediato al cumplir 5 minutos si se desea.",
    "microdosis_24h": "Elegir la tarea más postergada, reducirla a una micro-acción de <5 minutos y activar el cronómetro de desbloqueo.",
    "sinergias": [
      "kanban_gtd_wip2",
      "inventario_cero_culpa"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "paso-cero-box",
        "tipo_interaccion": "Tarjeta de compromiso de 5 minutos con micro-temporizador",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "bitacora_paso_cero",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha 07: Bitácora de Micro-Desbloqueos de 5 Minutos"
      },
      "plantilla_excel": "",
      "caja_canonica": {
        "pilar_directorio": "06_CLINICA_Y_MODULOS_AICC",
        "carpeta": "Protocolo Paso Cero",
        "app_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/06_CLINICA_Y_MODULOS_AICC/Protocolo Paso Cero/app.html",
        "print_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/06_CLINICA_Y_MODULOS_AICC/Protocolo Paso Cero/imprimible.html",
        "guide_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/06_CLINICA_Y_MODULOS_AICC/Protocolo Paso Cero/guia_humana.md",
        "img_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/06_CLINICA_Y_MODULOS_AICC/Protocolo Paso Cero/Protocolo Paso Cero.png",
        "lab_app_url": "PILARES/06_CLINICA_Y_MODULOS_AICC/Protocolo Paso Cero/app.html",
        "lab_print_url": "PILARES/06_CLINICA_Y_MODULOS_AICC/Protocolo Paso Cero/imprimible.html",
        "lab_guide_url": "PILARES/06_CLINICA_Y_MODULOS_AICC/Protocolo Paso Cero/guia_humana.md",
        "lab_img_url": "PILARES/06_CLINICA_Y_MODULOS_AICC/Protocolo Paso Cero/Protocolo Paso Cero.png"
      }
    },
    "metrica_impacto": {
      "kpi": "Días de Racha Sin Freno Cero (Tareas destrabadas en <= 5 min)",
      "meta": "14 días consecutivos completando al menos 1 Paso Cero diario"
    },
    "piso": 1,
    "piso_nombre": "Piso 1: Estabilización, Descarga & Fricción Cero",
    "codigo_piso": "P1-10",
    "pilar_directorio": "06_CLINICA_Y_MODULOS_AICC",
    "carpeta_pilares": "Protocolo Paso Cero"
  },
  {
    "id": "inventario_cero_culpa",
    "nombre_oficial": "Inventario Cero Culpa y Registro de Micro-Victorias Nocturnas",
    "nombre_humano": "El Cierre del Día en Paz (Reconocer lo que SÍ Hiciste)",
    "pilar": "Pilar 4: Hábitos & Psicología Operativa",
    "fase_madurez": "Fase 1: Rescate & Oxígeno",
    "triggers_diagnosticos": {
      "fuga_horas_min": 0,
      "sintomas": [
        "Rumiación nocturna al apagar la luz repasando todo lo que faltó hacer",
        "Sensación crónica de 'no merecer descansar' por no haber vaciado toda la lista",
        "Invisibilización del trabajo de cuidados, crianza, imprevistos y sostén emocional",
        "Insomnio de conciliación por hiperactividad del crítico interno"
      ],
      "variables_clave": [
        "rumiacion_nocturna",
        "pensamientos_intrusivos",
        "insomnio_por_ansiedad"
      ]
    },
    "red_flags": [
      "Me acuesto y mi mente empieza a repasar todo lo que no alcancé a hacer hoy.",
      "Siento que no merezco descansar porque no fui lo suficientemente productivo."
    ],
    "pregunta_diagnostica": "¿Por qué le exiges a tu mente que duerma en paz si antes de acostarte solo le pasaste factura por tus pendientes y no le reconociste tus victorias?",
    "carta_tactica_asociada": "Ley de Carlson",
    "protocolo_paso_cero": "Escribir en una hoja o en tu bitácora 1 sola cosa buena o de cuidado que sí sostuviste hoy antes de cerrar los ojos.",
    "microdosis_24h": "Anotar 3 micro-victorias reales del día (incluyendo trabajo invisible/cuidados) y declarar qué sueltas sin culpa para mañana.",
    "sinergias": [
      "cero_pantallas_celular",
      "somatica_y_autorregulacion_tea"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "cero-culpa-nightly-card",
        "tipo_interaccion": "Ficha interactiva de 3 micro-victorias con botón de vaciado mental",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "checklist_adherencia_cero_culpa",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha 14: Bitácora Mensual Cero Culpa (30 Días)"
      },
      "plantilla_excel": "",
      "caja_canonica": {
        "pilar_directorio": "06_CLINICA_Y_MODULOS_AICC",
        "carpeta": "Inventario Cero Culpa",
        "app_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/06_CLINICA_Y_MODULOS_AICC/Inventario Cero Culpa/app.html",
        "print_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/06_CLINICA_Y_MODULOS_AICC/Inventario Cero Culpa/imprimible.html",
        "guide_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/06_CLINICA_Y_MODULOS_AICC/Inventario Cero Culpa/guia_humana.md",
        "img_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/06_CLINICA_Y_MODULOS_AICC/Inventario Cero Culpa/Inventario Cero Culpa.png",
        "lab_app_url": "PILARES/06_CLINICA_Y_MODULOS_AICC/Inventario Cero Culpa/app.html",
        "lab_print_url": "PILARES/06_CLINICA_Y_MODULOS_AICC/Inventario Cero Culpa/imprimible.html",
        "lab_guide_url": "PILARES/06_CLINICA_Y_MODULOS_AICC/Inventario Cero Culpa/guia_humana.md",
        "lab_img_url": "PILARES/06_CLINICA_Y_MODULOS_AICC/Inventario Cero Culpa/Inventario Cero Culpa.png"
      }
    },
    "metrica_impacto": {
      "kpi": "Calidad de Conciliación del Sueño y Paz Nocturna (Escala 1-10)",
      "meta": "Conciliar el sueño en < 25 min con nivel de paz mental >= 8/10 durante 14 noches"
    },
    "piso": 1,
    "piso_nombre": "Piso 1: Estabilización, Descarga & Fricción Cero",
    "codigo_piso": "P1-12",
    "pilar_directorio": "06_CLINICA_Y_MODULOS_AICC",
    "carpeta_pilares": "Inventario Cero Culpa"
  },
  {
    "id": "ventana_johari_puntos_ciegos",
    "nombre_oficial": "La Ventana de Johari (Puntos Ciegos y Autoconocimiento)",
    "nombre_humano": "El Fin de los 'No Sabía' y Descubrirte a Través de los Ojos del Otro",
    "pilar": "Pilar 4: Finanzas & Negocio",
    "fase_madurez": "Fase 2: Estructura & Soberanía",
    "triggers_diagnosticos": {
      "fuga_horas_min": 4,
      "sintomas": [
        "Miedo a mostrar debilidades",
        "Relaciones superficiales en el equipo",
        "Sorpresa ante críticas",
        "Aislamiento del líder"
      ],
      "variables_clave": [
        "autenticidad_vinculos",
        "reduccion_area_ciega",
        "vulnerabilidad_segura"
      ]
    },
    "red_flags": [
      "Vivir con el terror de que descubran que no lo sabes todo.",
      "Nadie en el equipo se atreve a decirte la verdad por miedo a tu reacción emocional."
    ],
    "pregunta_diagnostica": "¿Qué porcentaje de lo que realmente sientes mantienes oculto de las personas más cercanas por miedo a su juicio?",
    "carta_tactica_asociada": "Sobrecarga Cognitiva",
    "protocolo_paso_cero": "Preguntarle a una persona de confianza: '¿Hay alguna actitud mía que te genere incomodidad sin darme cuenta?'.",
    "microdosis_24h": "Mapear los 4 cuadrantes en la microapp interactiva y seleccionar adjetivos clave.",
    "sinergias": [
      "feedback_sbi_conversaciones",
      "evaluacion_360_feedback"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "johari-window-grid",
        "tipo_interaccion": "Cuadrante interactivo de Johari con lista de adjetivos compartidos",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "hoja_ventana_johari",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha: Ventana de Johari y Autoconocimiento"
      },
      "plantilla_excel": "",
      "caja_canonica": {
        "pilar_directorio": "03_LIDERAZGO_Y_EQUIPO",
        "carpeta": "La Ventana de Johari",
        "app_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/La Ventana de Johari/app.html",
        "print_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/La Ventana de Johari/imprimible.html",
        "guide_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/La Ventana de Johari/guia_humana.md",
        "img_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/La Ventana de Johari/La Ventana de Johari.png",
        "lab_app_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/La Ventana de Johari/app.html",
        "lab_print_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/La Ventana de Johari/imprimible.html",
        "lab_guide_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/La Ventana de Johari/guia_humana.md",
        "lab_img_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/La Ventana de Johari/La Ventana de Johari.png"
      }
    },
    "metrica_impacto": {
      "kpi": "Profundidad de vínculos clave y seguridad psicológica (&ge; 85%)",
      "meta": "Al menos 1 sesión de feedback sincero al trimestre"
    },
    "piso": 2,
    "piso_nombre": "Piso 2: Optimización, Operación & Relacional",
    "codigo_piso": "P2-01",
    "pilar_directorio": "03_LIDERAZGO_Y_EQUIPO",
    "carpeta_pilares": "La Ventana de Johari"
  },
  {
    "id": "foda_came",
    "nombre_oficial": "Análisis FODA Dinámico & Matriz CAME",
    "nombre_humano": "La Radiografía Realista de tu Negocio y Plan de Maniobra",
    "pilar": "Pilar 1: Estrategia & Dirección",
    "fase_madurez": "Fase 2: Hábitos & Consolidación",
    "triggers_diagnosticos": {
      "fuga_horas_min": 6,
      "sintomas": [
        "Sensación de ir a ciegas",
        "Miedo a la competencia",
        "No saber en qué apalancarse",
        "Decisiones impulsivas"
      ],
      "variables_clave": [
        "claridad_diferencial",
        "vulnerabilidad_amenazas",
        "acciones_came"
      ]
    },
    "red_flags": [
      "No saber explicar por qué un cliente te elige a ti frente a otros en 1 frase.",
      "Tener un FODA archivado en un papel que nunca se tradujo en acciones CAME concretas."
    ],
    "pregunta_diagnostica": "¿Tu FODA es una lista estática de quejas y elogios, o un plan de maniobra activo para Corregir, Afrontar, Mantener y Explotar?",
    "carta_tactica_asociada": "Sesgo de Costo Hundido",
    "protocolo_paso_cero": "Escribir en 2 minutos tu mayor fortaleza real y la debilidad interna que más estrés te genera hoy.",
    "microdosis_24h": "Definir al menos una acción CAME para cada cuadrante en la microapp interactiva y compartir por WhatsApp.",
    "sinergias": [
      "triangulacion_roles",
      "paquetizacion_servicios_mes"
    ],
    "contraindicaciones": [
      "colapso_burnout_agudo"
    ],
    "doble_salida": {
      "componente_web": {
        "widget_id": "tab-foda-came-grid",
        "tipo_interaccion": "Pestaña interactiva con tarjetas expandibles y badges de color",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "hoja_pared_foda_came",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha 02: Matriz Táctica FODA/CAME de Pared"
      },
      "plantilla_excel": "02_Matriz_FODA_CAME.xlsx",
      "caja_canonica": {
        "pilar_directorio": "01_ESTRATEGIA_Y_DIRECCION",
        "carpeta": "FODA",
        "app_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/01_ESTRATEGIA_Y_DIRECCION/FODA/app.html",
        "print_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/01_ESTRATEGIA_Y_DIRECCION/FODA/imprimible.html",
        "guide_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/01_ESTRATEGIA_Y_DIRECCION/FODA/guia_humana.md",
        "img_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/01_ESTRATEGIA_Y_DIRECCION/FODA/FODA.png",
        "lab_app_url": "PILARES/01_ESTRATEGIA_Y_DIRECCION/FODA/app.html",
        "lab_print_url": "PILARES/01_ESTRATEGIA_Y_DIRECCION/FODA/imprimible.html",
        "lab_guide_url": "PILARES/01_ESTRATEGIA_Y_DIRECCION/FODA/guia_humana.md",
        "lab_img_url": "PILARES/01_ESTRATEGIA_Y_DIRECCION/FODA/FODA.png"
      }
    },
    "metrica_impacto": {
      "kpi": "4 Acciones CAME activas en ejecución semanal",
      "meta": "Conversión del 100% de debilidades críticas en medidas correctivas inmediatas"
    },
    "piso": 2,
    "piso_nombre": "Piso 2: Hábitos, Estructura y Táctica Operativa",
    "codigo_piso": "P2-02",
    "pilar_directorio": "01_ESTRATEGIA_Y_DIRECCION",
    "carpeta_pilares": "FODA"
  },
  {
    "id": "scamper_rediseno_rutina",
    "nombre_oficial": "Técnica SCAMPER de Rediseño Creativo",
    "nombre_humano": "Rediseño Creativo de tu Rutina y Oferta (La Cura para el 'Siempre se ha Hecho Así')",
    "pilar": "Pilar 3: Orden Mental & Operaciones",
    "fase_madurez": "Fase 2: Estructura & Soberanía",
    "triggers_diagnosticos": {
      "fuga_horas_min": 3,
      "sintomas": [
        "Monotonía y rutina estancada",
        "Aburrimiento profesional",
        "Ganas de patear el tablero sin plan alternativo",
        "Sensación de 'siempre se ha hecho así'"
      ],
      "variables_clave": [
        "monotonia_rutina",
        "aburrimiento_profesional",
        "innovacion_combinatoria"
      ]
    },
    "red_flags": [
      "Mis días son una copia exacta del anterior y me siento estancado.",
      "No sé cómo innovar en mi oferta sin tener que empezar desde cero."
    ],
    "pregunta_diagnostica": "En lugar de destruir tu rutina u oferta actual, ¿has probado Sustituir, Combinar o Eliminar elementos sencillos para refrescarla hoy?",
    "carta_tactica_asociada": "Sesgo de Costo Hundido",
    "protocolo_paso_cero": "Cambiar tu desayuno de hoy o eliminar un solo paso innecesario en tu flujo de trabajo.",
    "microdosis_24h": "Aplicar las 7 preguntas SCAMPER a una sola oferta comercial o reunión semanal en la microapp.",
    "sinergias": [
      "oceano_azul_diferencial",
      "paquetizacion_servicios_mes"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "scamper-creative-roller",
        "tipo_interaccion": "Ruleta interactiva de disparadores creativos SCAMPER",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "hoja_scamper_rediseno",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha: Matriz SCAMPER de Innovación en Rutinas"
      },
      "plantilla_excel": "27_SCAMPER_Innovacion.xlsx",
      "caja_canonica": {
        "pilar_directorio": "04_OPERACIONES_Y_PROCESOS",
        "carpeta": "SCAMPER",
        "app_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/SCAMPER/app.html",
        "print_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/SCAMPER/imprimible.html",
        "guide_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/SCAMPER/guia_humana.md",
        "img_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/SCAMPER/SCAMPER.png",
        "lab_app_url": "PILARES/04_OPERACIONES_Y_PROCESOS/SCAMPER/app.html",
        "lab_print_url": "PILARES/04_OPERACIONES_Y_PROCESOS/SCAMPER/imprimible.html",
        "lab_guide_url": "PILARES/04_OPERACIONES_Y_PROCESOS/SCAMPER/guia_humana.md",
        "lab_img_url": "PILARES/04_OPERACIONES_Y_PROCESOS/SCAMPER/SCAMPER.png"
      }
    },
    "metrica_impacto": {
      "kpi": "Al menos 1 experimento SCAMPER lanzado al mes en oferta o rutina",
      "meta": "Aumento del 25% en margen percibido de servicios o satisfacción de agenda"
    },
    "piso": 2,
    "piso_nombre": "Piso 2: Optimización, Operación & Relacional",
    "codigo_piso": "P2-03",
    "pilar_directorio": "04_OPERACIONES_Y_PROCESOS",
    "carpeta_pilares": "SCAMPER"
  },
  {
    "id": "modelo_adkar_autotransformacion",
    "nombre_oficial": "Modelo ADKAR (Awareness, Desire, Knowledge, Ability, Reinforcement)",
    "nombre_humano": "La Cura para la Resistencia al Cambio y Detección del Tapón de Hábitos",
    "pilar": "Pilar 4: Finanzas & Negocio",
    "fase_madurez": "Fase 2: Estructura & Soberanía",
    "triggers_diagnosticos": {
      "fuga_horas_min": 6,
      "sintomas": [
        "Nuevos hábitos que mueren a los 10 días",
        "Resistencia pasiva en el equipo",
        "Saber la teoría pero no poder ejecutarla",
        "Cinismo ante cambios"
      ],
      "variables_clave": [
        "secuencia_cambio",
        "deteccion_tapon",
        "sostenibilidad_habitos"
      ]
    },
    "red_flags": [
      "Intentar capacitar técnicamente a quien no tiene el deseo o la motivación personal de cambiar.",
      "Exigir velocidad a quien no ha contado con tiempo protegido para practicar con margen de error."
    ],
    "pregunta_diagnostica": "¿En tu intento de cambio, el problema es que te falta conocimiento técnico, o que no has conectado con el deseo profundo de hacerlo?",
    "carta_tactica_asociada": "Parálisis por Análisis",
    "protocolo_paso_cero": "Calificar las 5 letras de ADKAR del 1 al 5 y trabajar exclusivamente en la que tenga el puntaje más bajo.",
    "microdosis_24h": "Evaluar la iniciativa en la microapp interactiva y aplicar la prescripción de destrabe del tapón.",
    "sinergias": [
      "ocho_pasos_kotter_cambio",
      "cinco_porques_raiz"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "adkar-diagnostic-bars",
        "tipo_interaccion": "Diagnóstico de 5 barras con detección automática del 'Tapón de Cambio'",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "hoja_modelo_adkar",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha: Diagnóstico de Transformación ADKAR"
      },
      "plantilla_excel": "35_Modelo_ADKAR_Diagnostico.xlsx",
      "caja_canonica": {
        "pilar_directorio": "03_LIDERAZGO_Y_EQUIPO",
        "carpeta": "Modelo ADKAR",
        "app_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/Modelo ADKAR/app.html",
        "print_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/Modelo ADKAR/imprimible.html",
        "guide_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/Modelo ADKAR/guia_humana.md",
        "img_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/Modelo ADKAR/Modelo ADKAR.png",
        "lab_app_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/Modelo ADKAR/app.html",
        "lab_print_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/Modelo ADKAR/imprimible.html",
        "lab_guide_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/Modelo ADKAR/guia_humana.md",
        "lab_img_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/Modelo ADKAR/Modelo ADKAR.png"
      }
    },
    "metrica_impacto": {
      "kpi": "Identificación del Eslabón Tapón en menos de 7 días",
      "meta": "Tasa de adopción de nuevos protocolos &ge; 85% a los 30 días"
    },
    "piso": 2,
    "piso_nombre": "Piso 2: Optimización, Operación & Relacional",
    "codigo_piso": "P2-04",
    "pilar_directorio": "03_LIDERAZGO_Y_EQUIPO",
    "carpeta_pilares": "Modelo ADKAR"
  },
  {
    "id": "roles_belbin_sombreros",
    "nombre_oficial": "Roles de Belbin (Gestión de Sombreros de Equipo)",
    "nombre_humano": "La Cura para el Equipo Copia y Pega • La Orquesta de Sombreros Internos",
    "pilar": "Pilar 4: Finanzas & Negocio",
    "fase_madurez": "Fase 2: Estructura & Soberanía",
    "triggers_diagnosticos": {
      "fuga_horas_min": 6,
      "sintomas": [
        "Contratar clones de uno mismo",
        "Muchas ideas y cero ejecución",
        "Conflictos por choques de carácter",
        "Sobrecarga de sombreros en el líder"
      ],
      "variables_clave": [
        "equilibrio_roles",
        "orquesta_equipo",
        "sombreros_internos"
      ]
    },
    "red_flags": [
      "Equipos donde todos son creativos y nadie revisa los detalles o remata las tareas.",
      "El líder asume los 9 roles a la vez y colapsa por agotamiento operativo."
    ],
    "pregunta_diagnostica": "¿En tu día a día, tienes definidos límites para que tus diferentes sombreros internos o los roles del equipo se expresen sin sabotearse?",
    "carta_tactica_asociada": "Task-Switching",
    "protocolo_paso_cero": "Identificar cuál de los 3 bloques (Acción, Mente o Social) es tu debilidad dominante para blindarla.",
    "microdosis_24h": "Asignar responsables para los 9 roles en la microapp interactiva y verificar el balance.",
    "sinergias": [
      "triangulacion_roles",
      "arquetipos_energia"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "belbin-roles-wheel",
        "tipo_interaccion": "Rueda interactiva de roles de Belbin con balance de carga energética",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "hoja_roles_belbin",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha: Matriz de Roles de Belbin y Sombreros Internos"
      },
      "plantilla_excel": "32_Roles_Belbin_Equipos.xlsx",
      "caja_canonica": {
        "pilar_directorio": "03_LIDERAZGO_Y_EQUIPO",
        "carpeta": "Roles de Belbin",
        "app_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/Roles de Belbin/app.html",
        "print_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/Roles de Belbin/imprimible.html",
        "guide_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/Roles de Belbin/guia_humana.md",
        "img_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/Roles de Belbin/Roles de Belbin.png",
        "lab_app_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/Roles de Belbin/app.html",
        "lab_print_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/Roles de Belbin/imprimible.html",
        "lab_guide_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/Roles de Belbin/guia_humana.md",
        "lab_img_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/Roles de Belbin/Roles de Belbin.png"
      }
    },
    "metrica_impacto": {
      "kpi": "Mapeo de roles completado para el 100% de los frentes clave",
      "meta": "Reducción de cuellos de botella por falta de rol de ejecución o remate"
    },
    "piso": 2,
    "piso_nombre": "Piso 2: Optimización, Operación & Relacional",
    "codigo_piso": "P2-05",
    "pilar_directorio": "03_LIDERAZGO_Y_EQUIPO",
    "carpeta_pilares": "Roles de Belbin"
  },
  {
    "id": "modelo_tuckman_transicion",
    "nombre_oficial": "Modelo de Tuckman (Forming, Storming, Norming, Performing)",
    "nombre_humano": "La Evolución de la Banda • Comprender que el Caos y la Tormenta son Parte Natural de Crecer",
    "pilar": "Pilar 4: Finanzas & Negocio",
    "fase_madurez": "Fase 2: Estructura & Soberanía",
    "triggers_diagnosticos": {
      "fuga_horas_min": 6,
      "sintomas": [
        "Pánico ante el primer conflicto de equipo",
        "Amabilidad superficial sin autenticidad",
        "Rupturas prematuras de proyectos",
        "Falta de reglas escritas"
      ],
      "variables_clave": [
        "madurez_relacional",
        "gestion_tormenta",
        "normas_operativas"
      ]
    },
    "red_flags": [
      "Creer que un equipo falló porque surgieron roces tras las primeras semanas de trabajo.",
      "Intentar saltarse la fase de tormenta barriendo los desacuerdos bajo la alfombra."
    ],
    "pregunta_diagnostica": "¿Entiendes la tormenta del inicio de tu equipo o cambio de rutina como un fracaso, o como la etapa obligatoria para forjar normas y alcanzar el alto desempeño?",
    "carta_tactica_asociada": "Sesgo de Costo Hundido",
    "protocolo_paso_cero": "Identificar en cuál de las 4 fases se encuentra el equipo hoy y normalizar la tormenta verbalmente.",
    "microdosis_24h": "Seleccionar la fase en la microapp interactiva y redactar el protocolo de normalización.",
    "sinergias": [
      "ocho_pasos_kotter_cambio",
      "modelo_adkar_autotransformacion"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "tuckman-stage-locator",
        "tipo_interaccion": "Localizador interactivo de fase de evolución con consejos de transición",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "hoja_modelo_tuckman",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha: Mapa de Fases de Transición de Tuckman"
      },
      "plantilla_excel": "",
      "caja_canonica": {
        "pilar_directorio": "03_LIDERAZGO_Y_EQUIPO",
        "carpeta": "Modelo de Tuckman",
        "app_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/Modelo de Tuckman/app.html",
        "print_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/Modelo de Tuckman/imprimible.html",
        "guide_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/Modelo de Tuckman/guia_humana.md",
        "img_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/Modelo de Tuckman/Modelo de Tuckman.png",
        "lab_app_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/Modelo de Tuckman/app.html",
        "lab_print_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/Modelo de Tuckman/imprimible.html",
        "lab_guide_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/Modelo de Tuckman/guia_humana.md",
        "lab_img_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/Modelo de Tuckman/Modelo de Tuckman.png"
      }
    },
    "metrica_impacto": {
      "kpi": "Transición exitosa de Storming a Norming en menos de 60 días",
      "meta": "Clima de Alto Desempeño consolidado (&ge; 80% satisfacción interna)"
    },
    "piso": 2,
    "piso_nombre": "Piso 2: Optimización, Operación & Relacional",
    "codigo_piso": "P2-06",
    "pilar_directorio": "03_LIDERAZGO_Y_EQUIPO",
    "carpeta_pilares": "Modelo de Tuckman"
  },
  {
    "id": "dnc_personal_aprendizaje",
    "nombre_oficial": "DNC Personal y Organizacional (Diagnóstico de Necesidades de Capacitación)",
    "nombre_humano": "El Mapa del Talento y la Cura para la Infoxicación",
    "pilar": "Pilar 3: Orden Mental & Operaciones",
    "fase_madurez": "Fase 2: Estructura & Soberanía",
    "triggers_diagnosticos": {
      "fuga_horas_min": 4,
      "sintomas": [
        "Acumulación de cursos sin terminar",
        "Inseguridad para cobrar o presentar ofertas",
        "Equipo cometiendo errores repetitivos",
        "Estudiar por ansiedad sin aplicación concreta"
      ],
      "variables_clave": [
        "ansiedad_formativa",
        "brecha_competencias",
        "retorno_inversion_tiempo"
      ]
    },
    "red_flags": [
      "Comprar formaciones impulsivas justificando que 'aún falta saber más'.",
      "Gastar presupuesto en capacitaciones genéricas que no resuelven cuellos de botella operativos."
    ],
    "pregunta_diagnostica": "¿Estás estudiando por ansiedad o tienes identificada la habilidad exacta que necesitas desarrollar para resolver tu principal dolor operativo de hoy?",
    "carta_tactica_asociada": "Costo de Oportunidad",
    "protocolo_paso_cero": "Identificar el mayor dolor de tu semana y definir una sola micro-habilidad que lo solucionaría en 15 minutos.",
    "microdosis_24h": "Mapear 3 habilidades clave en la microapp DNC y fijar un proyecto de aplicación real a 14 días.",
    "sinergias": [
      "calculadora_roi_capacitaciones",
      "foda_came"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "dnc-skills-gap-analyzer",
        "tipo_interaccion": "Analizador de brecha de habilidades con priorización de impacto inmediato",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "hoja_dnc_personal",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha: Matriz DNC de Vacíos de Aprendizaje"
      },
      "plantilla_excel": "28_DNC_Diagnostico_Habilidades.xlsx",
      "caja_canonica": {
        "pilar_directorio": "04_OPERACIONES_Y_PROCESOS",
        "carpeta": "DNC",
        "app_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/DNC/app.html",
        "print_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/DNC/imprimible.html",
        "guide_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/DNC/guia_humana.md",
        "img_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/DNC/DNC.png",
        "lab_app_url": "PILARES/04_OPERACIONES_Y_PROCESOS/DNC/app.html",
        "lab_print_url": "PILARES/04_OPERACIONES_Y_PROCESOS/DNC/imprimible.html",
        "lab_guide_url": "PILARES/04_OPERACIONES_Y_PROCESOS/DNC/guia_humana.md",
        "lab_img_url": "PILARES/04_OPERACIONES_Y_PROCESOS/DNC/DNC.png"
      }
    },
    "metrica_impacto": {
      "kpi": "Tasa de transferencia formativa (% aplicado a proyectos reales en < 30 días)",
      "meta": "Reducción del 50% en gasto formativo impulsivo y 30% más velocidad operativa"
    },
    "piso": 2,
    "piso_nombre": "Piso 2: Optimización, Operación & Relacional",
    "codigo_piso": "P2-07",
    "pilar_directorio": "04_OPERACIONES_Y_PROCESOS",
    "carpeta_pilares": "DNC"
  },
  {
    "id": "triangulacion_roles",
    "nombre_oficial": "Triangulación y Compartimentación de Roles Multipotenciales",
    "nombre_humano": "Un Sombrero a la Vez (Separar tus Identidades sin Culpa)",
    "pilar": "Pilar 3: Orden Mental & Operaciones",
    "fase_madurez": "Fase 2: Estructura & Soberanía",
    "triggers_diagnosticos": {
      "fuga_horas_min": 15,
      "sintomas": [
        "Tener tres frentes o proyectos distintos y sentir culpa constante por no estar avanzando en los otros dos",
        "Contaminación cruzada: responder mensajes de clientes mientras se cuida a la familia o se intenta estudiar",
        "Desgaste por cambio de contexto sin ritual de transición entre una identidad y otra",
        "Sensación de fragmentación interna en perfiles multipotenciales o creativos"
      ],
      "variables_clave": [
        "multipotencialidad",
        "estudio_mas_trabajo",
        "cuidado_familiar"
      ]
    },
    "red_flags": [
      "Tengo tres proyectos distintos y cuando estoy en uno me siento culpable por no avanzar en el otro.",
      "Se me mezclan los mensajes de clientes con tareas de estudio y asuntos familiares."
    ],
    "pregunta_diagnostica": "¿Tienes un cerco invisible y un ritual claro que proteja cada uno de tus roles para que no se devoren ni se contaminen entre sí?",
    "carta_tactica_asociada": "Costo de Oportunidad",
    "protocolo_paso_cero": "Definir un solo sombrero para el bloque de la tarde y cerrar físicamente los archivos o pestañas de los demás frentes.",
    "microdosis_24h": "Configurar tus 3 a 4 roles vitales en la Matriz de Triangulación con su porcentaje de dedicación, Ritual de Cambio de Sombrero y Frontera Prohibida.",
    "sinergias": [
      "mapeador_24h",
      "time_blocking_flexible"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "fronts-triangulation-cards",
        "tipo_interaccion": "Tarjetas interactivas de roles con acuerdos y reglas de no contaminación",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "hoja_triangulacion_roles",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha 03: Pacto de Roles y Delimitación de Frentes"
      },
      "plantilla_excel": "",
      "caja_canonica": {
        "pilar_directorio": "06_CLINICA_Y_MODULOS_AICC",
        "carpeta": "Triangulacion de Roles",
        "app_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/06_CLINICA_Y_MODULOS_AICC/Triangulacion de Roles/app.html",
        "print_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/06_CLINICA_Y_MODULOS_AICC/Triangulacion de Roles/imprimible.html",
        "guide_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/06_CLINICA_Y_MODULOS_AICC/Triangulacion de Roles/guia_humana.md",
        "img_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/06_CLINICA_Y_MODULOS_AICC/Triangulacion de Roles/Triangulacion de Roles.png",
        "lab_app_url": "PILARES/06_CLINICA_Y_MODULOS_AICC/Triangulacion de Roles/app.html",
        "lab_print_url": "PILARES/06_CLINICA_Y_MODULOS_AICC/Triangulacion de Roles/imprimible.html",
        "lab_guide_url": "PILARES/06_CLINICA_Y_MODULOS_AICC/Triangulacion de Roles/guia_humana.md",
        "lab_img_url": "PILARES/06_CLINICA_Y_MODULOS_AICC/Triangulacion de Roles/Triangulacion de Roles.png"
      }
    },
    "metrica_impacto": {
      "kpi": "Reducción de Contaminación Cruzada (Horas semanales de trabajo enfocado por rol sin interrupción mutua)",
      "meta": "100% de roles delimitados con frontera prohibida y ritual de transición activo"
    },
    "piso": 2,
    "piso_nombre": "Piso 2: Optimización, Operación & Relacional",
    "codigo_piso": "P2-08",
    "pilar_directorio": "06_CLINICA_Y_MODULOS_AICC",
    "carpeta_pilares": "Triangulacion de Roles"
  },
  {
    "id": "feedback_sbi_conversaciones",
    "nombre_oficial": "Feedback SBI (Situación, Comportamiento, Impacto)",
    "nombre_humano": "Decir las Cosas Claras Basados en Hechos, Sin Juicios Morales",
    "pilar": "Pilar 4: Finanzas & Negocio",
    "fase_madurez": "Fase 2: Estructura & Soberanía",
    "triggers_diagnosticos": {
      "fuga_horas_min": 4,
      "sintomas": [
        "Miedo al conflicto",
        "Indirectas pasivo-agresivas",
        "Conversaciones que terminan en pelea",
        "Uso de 'siempre' y 'nunca'"
      ],
      "variables_clave": [
        "comunicacion_asertiva",
        "separacion_hecho_juicio",
        "pacto_conductual"
      ]
    },
    "red_flags": [
      "Atacar la identidad del otro diciendo 'eres flojo' o 'no tienes compromiso'.",
      "Acumular rabia en silencio durante semanas hasta explotar por un detalle mínimo."
    ],
    "pregunta_diagnostica": "¿Cuando hablas de lo que te duele o molesta, atacas la identidad de la persona o describes el hecho concreto y su impacto real en ti?",
    "carta_tactica_asociada": "Miopía del Marketing",
    "protocolo_paso_cero": "Escribir en una hoja el hecho observable y tachar cualquier adjetivo descalificador antes de hablar.",
    "microdosis_24h": "Construir tu guion SBI en la microapp interactiva y ensayarlo en voz alta por 2 minutos.",
    "sinergias": [
      "ventana_johari_puntos_ciegos",
      "matriz_raci_hogar_equipo"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "sbi-feedback-composer",
        "tipo_interaccion": "Constructor de guiones de feedback SBI interactivo",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "hoja_feedback_sbi",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha: Guion de Conversaciones Clave Feedback SBI"
      },
      "plantilla_excel": "29_Feedback_SBI_Guiones.xlsx",
      "caja_canonica": {
        "pilar_directorio": "03_LIDERAZGO_Y_EQUIPO",
        "carpeta": "Feedback SBI",
        "app_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/Feedback SBI/app.html",
        "print_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/Feedback SBI/imprimible.html",
        "guide_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/Feedback SBI/guia_humana.md",
        "img_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/Feedback SBI/Feedback SBI.png",
        "lab_app_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/Feedback SBI/app.html",
        "lab_print_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/Feedback SBI/imprimible.html",
        "lab_guide_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/Feedback SBI/guia_humana.md",
        "lab_img_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/Feedback SBI/Feedback SBI.png"
      }
    },
    "metrica_impacto": {
      "kpi": "100% de conversaciones difíciles estructuradas en guion SBI previo",
      "meta": "Reducción del 70% en reacciones defensivas y resolución en menos de 48 horas"
    },
    "piso": 2,
    "piso_nombre": "Piso 2: Optimización, Operación & Relacional",
    "codigo_piso": "P2-09",
    "pilar_directorio": "03_LIDERAZGO_Y_EQUIPO",
    "carpeta_pilares": "Feedback SBI"
  },
  {
    "id": "matriz_raci_hogar_equipo",
    "nombre_oficial": "Matriz RACI (Responsible, Accountable, Consulted, Informed)",
    "nombre_humano": "Rayar la Cancha en el Hogar y Equipo • El Fin del 'Yo Pensé que lo Hacías Tú'",
    "pilar": "Pilar 4: Finanzas & Negocio",
    "fase_madurez": "Fase 2: Estructura & Soberanía",
    "triggers_diagnosticos": {
      "fuga_horas_min": 6,
      "sintomas": [
        "Efecto espectador",
        "Tareas en el limbo",
        "Duplicidad de trabajo",
        "Peleas societarias por roles"
      ],
      "variables_clave": [
        "dueno_unico",
        "delimitacion_roles",
        "claridad_procesos"
      ]
    },
    "red_flags": [
      "Asumir que un proceso crítico es 'responsabilidad de los dos' sin definir una sola cabeza visible.",
      "Proyectos paralizados durante días porque nadie sabe a quién le corresponde dar el visto bueno."
    ],
    "pregunta_diagnostica": "¿En tu negocio y hogar, está definido por escrito quién es el responsable final de que cada proceso se ejecute?",
    "carta_tactica_asociada": "Task-Switching",
    "protocolo_paso_cero": "Elegir la tarea más confusa de la semana y asignar un solo nombre para la letra 'A' (Dueño final).",
    "microdosis_24h": "Configurar los procesos clave en la microapp interactiva y compartir la matriz por WhatsApp.",
    "sinergias": [
      "triangulacion_roles",
      "feedback_sbi_conversaciones"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "raci-matrix-table",
        "tipo_interaccion": "Matriz interactiva con selector de roles R/A/C/I y alertas de sobrecarga",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "hoja_matriz_raci",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha: Matriz RACI de Acuerdos de Hogar y Negocio"
      },
      "plantilla_excel": "30_Matriz_RACI_Responsabilidades.xlsx",
      "caja_canonica": {
        "pilar_directorio": "03_LIDERAZGO_Y_EQUIPO",
        "carpeta": "Matriz RACI",
        "app_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/Matriz RACI/app.html",
        "print_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/Matriz RACI/imprimible.html",
        "guide_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/Matriz RACI/guia_humana.md",
        "img_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/Matriz RACI/Matriz RACI.png",
        "lab_app_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/Matriz RACI/app.html",
        "lab_print_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/Matriz RACI/imprimible.html",
        "lab_guide_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/Matriz RACI/guia_humana.md",
        "lab_img_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/Matriz RACI/Matriz RACI.png"
      }
    },
    "metrica_impacto": {
      "kpi": "100% de los procesos críticos mapeados con exactamente un solo 'A'",
      "meta": "Reducción del 90% en omisiones de tareas en el equipo o familia"
    },
    "piso": 2,
    "piso_nombre": "Piso 2: Optimización, Operación & Relacional",
    "codigo_piso": "P2-10",
    "pilar_directorio": "03_LIDERAZGO_Y_EQUIPO",
    "carpeta_pilares": "Matriz RACI"
  },
  {
    "id": "cinco_porques_raiz",
    "nombre_oficial": "Los 5 Porqués (Análisis de Causa Raíz)",
    "nombre_humano": "Ir a la Raíz de lo que te Pasa, Sin Anestesia ni Juicios Morales",
    "pilar": "Pilar 3: Orden Mental & Operaciones",
    "fase_madurez": "Fase 2: Estructura & Soberanía",
    "triggers_diagnosticos": {
      "fuga_horas_min": 5,
      "sintomas": [
        "Aplicar soluciones parche",
        "Culparse moralmente por indisciplina",
        "Errores que reaparecen a las 48 horas"
      ],
      "variables_clave": [
        "profundidad_analisis",
        "causa_raiz_sistemica",
        "contramedida_activa"
      ]
    },
    "red_flags": [
      "Creer que un problema se resuelve poniendo 5 alarmas en el celular o con 'más fuerza de voluntad'.",
      "Detenerse en la primera explicación superficial sin cuestionar qué fallo de proceso la originó."
    ],
    "pregunta_diagnostica": "¿Cuando algo sale mal en tu rutina o negocio, te conformas con la primera excusa o indagas 5 niveles hasta tocar la raíz del sistema?",
    "carta_tactica_asociada": "Ley de Pareto (80/20)",
    "protocolo_paso_cero": "Hacerse los primeros 2 Porqués de una molestia de hoy en voz alta para desactivar la culpa inmediata.",
    "microdosis_24h": "Completar los 5 niveles en la microapp interactiva y definir 1 contramedida permanente al sistema.",
    "sinergias": [
      "diagrama_ishikawa_sistema",
      "kaizen_mejora_continua"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "five-whys-stepper",
        "tipo_interaccion": "Escalera interactiva de 5 niveles con campo de acción correctora final",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "hoja_5_porques",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha: Escalera Diagnóstica de los 5 Porqués"
      },
      "plantilla_excel": "22_Cinco_Porques_Causa_Raiz.xlsx",
      "caja_canonica": {
        "pilar_directorio": "04_OPERACIONES_Y_PROCESOS",
        "carpeta": "Los 5 Porques",
        "app_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/Los 5 Porques/app.html",
        "print_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/Los 5 Porques/imprimible.html",
        "guide_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/Los 5 Porques/guia_humana.md",
        "img_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/Los 5 Porques/Los 5 Porques.png",
        "lab_app_url": "PILARES/04_OPERACIONES_Y_PROCESOS/Los 5 Porques/app.html",
        "lab_print_url": "PILARES/04_OPERACIONES_Y_PROCESOS/Los 5 Porques/imprimible.html",
        "lab_guide_url": "PILARES/04_OPERACIONES_Y_PROCESOS/Los 5 Porques/guia_humana.md",
        "lab_img_url": "PILARES/04_OPERACIONES_Y_PROCESOS/Los 5 Porques/Los 5 Porques.png"
      }
    },
    "metrica_impacto": {
      "kpi": "100% de incidentes críticos resueltos con contramedida sistémica",
      "meta": "Cero reincidencia del mismo cuello de botella en un plazo de 30 días"
    },
    "piso": 2,
    "piso_nombre": "Piso 2: Optimización, Operación & Relacional",
    "codigo_piso": "P2-11",
    "pilar_directorio": "04_OPERACIONES_Y_PROCESOS",
    "carpeta_pilares": "Los 5 Porques"
  },
  {
    "id": "diagrama_ishikawa_sistema",
    "nombre_oficial": "Diagrama de Ishikawa (Causa-Efecto / Espina de Pescado)",
    "nombre_humano": "La Cura para el Poner Parches Constantes y Culpar Personas",
    "pilar": "Pilar 3: Orden Mental & Operaciones",
    "fase_madurez": "Fase 2: Estructura & Soberanía",
    "triggers_diagnosticos": {
      "fuga_horas_min": 6,
      "sintomas": [
        "Mismo error repitiéndose",
        "Culpar a empleados o a uno mismo",
        "Soluciones parche de 48 horas",
        "Procesos llenos de excepciones"
      ],
      "variables_clave": [
        "recurrencia_errores",
        "falla_metodo",
        "blindaje_sistema"
      ]
    },
    "red_flags": [
      "Creer que un error operativo se soluciona 'echándole más ganas' o 'poniendo más atención'.",
      "Falta de un checklist o manual escrito que impida físicamente cometer el mismo error."
    ],
    "pregunta_diagnostica": "¿Cuando cometes un error o un pedido sale mal, te tratas como el culpable indiscutible o investigas con compasión qué variables del sistema fallaron?",
    "carta_tactica_asociada": "Ley de Pareto (80/20)",
    "protocolo_paso_cero": "Escribir el problema y listar al menos 1 causa en el Método o Herramienta antes de emitir cualquier juicio moral.",
    "microdosis_24h": "Mapear las 6 M en la microapp interactiva y redactar el blindaje definitivo del proceso.",
    "sinergias": [
      "cinco_porques_raiz",
      "metodologia_5s_espacio"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "ishikawa-fishbone-canvas",
        "tipo_interaccion": "Espina de pescado interactiva con nodos categorizados por color",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "hoja_diagrama_ishikawa",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha: Diagrama de Ishikawa Sistémico"
      },
      "plantilla_excel": "23_Diagrama_Ishikawa.xlsx",
      "caja_canonica": {
        "pilar_directorio": "04_OPERACIONES_Y_PROCESOS",
        "carpeta": "Diagrama de Ishikawa",
        "app_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/Diagrama de Ishikawa/app.html",
        "print_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/Diagrama de Ishikawa/imprimible.html",
        "guide_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/Diagrama de Ishikawa/guia_humana.md",
        "img_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/Diagrama de Ishikawa/Diagrama de Ishikawa.png",
        "lab_app_url": "PILARES/04_OPERACIONES_Y_PROCESOS/Diagrama de Ishikawa/app.html",
        "lab_print_url": "PILARES/04_OPERACIONES_Y_PROCESOS/Diagrama de Ishikawa/imprimible.html",
        "lab_guide_url": "PILARES/04_OPERACIONES_Y_PROCESOS/Diagrama de Ishikawa/guia_humana.md",
        "lab_img_url": "PILARES/04_OPERACIONES_Y_PROCESOS/Diagrama de Ishikawa/Diagrama de Ishikawa.png"
      }
    },
    "metrica_impacto": {
      "kpi": "Tasa de recurrencia de errores operacionales clasificados (&le; 5%)",
      "meta": "Checklist o instructivo corregido e implementado en menos de 7 días"
    },
    "piso": 2,
    "piso_nombre": "Piso 2: Optimización, Operación & Relacional",
    "codigo_piso": "P2-12",
    "pilar_directorio": "04_OPERACIONES_Y_PROCESOS",
    "carpeta_pilares": "Diagrama de Ishikawa"
  },
  {
    "id": "kaizen_mejora_continua",
    "nombre_oficial": "Filosofía Kaizen (Micro-Mejoras del 1%)",
    "nombre_humano": "La Cura para la Parálisis por Perfeccionismo y el Heroísmo Intermitente",
    "pilar": "Pilar 3: Orden Mental & Operaciones",
    "fase_madurez": "Fase 1: Rescate & Oxígeno",
    "triggers_diagnosticos": {
      "fuga_horas_min": 4,
      "sintomas": [
        "Parálisis por análisis",
        "Proyectos abandonados al tercer día",
        "Autoexigencia cruel",
        "Esperar el momento perfecto"
      ],
      "variables_clave": [
        "consistencia_diaria",
        "micro_pasos",
        "efecto_compuesto"
      ]
    },
    "red_flags": [
      "Postergar el lanzamiento de un servicio porque 'aún falta pulir detalles'.",
      "Sentirse culpable al final del día por no haber realizado una hazaña heroica imposible."
    ],
    "pregunta_diagnostica": "¿Estás intentando dar un salto imposible que nunca llega, o estás comprometido con mejorar un micro-detalle de tu rutina del 1% cada día?",
    "carta_tactica_asociada": "Parálisis por Análisis",
    "protocolo_paso_cero": "Dedicar 2 minutos a mejorar una sola cosa minúscula de tu escritorio o flujo antes de empezar.",
    "microdosis_24h": "Registrar 1 fricción y 1 micro-mejora del 1% en la microapp interactiva Kaizen.",
    "sinergias": [
      "protocolo_paso_cero",
      "inventario_cero_culpa"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "kaizen-daily-tracker",
        "tipo_interaccion": "Tracker de 1% diario acumulativo con efecto compuesto visual",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "hoja_kaizen_bitacora",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha: Bitácora de Micro-Mejoras Kaizen (30 Días)"
      },
      "plantilla_excel": "25_Kaizen_Mejora_Continua.xlsx",
      "caja_canonica": {
        "pilar_directorio": "04_OPERACIONES_Y_PROCESOS",
        "carpeta": "Kaizen",
        "app_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/Kaizen/app.html",
        "print_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/Kaizen/imprimible.html",
        "guide_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/Kaizen/guia_humana.md",
        "img_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/Kaizen/Kaizen.png",
        "lab_app_url": "PILARES/04_OPERACIONES_Y_PROCESOS/Kaizen/app.html",
        "lab_print_url": "PILARES/04_OPERACIONES_Y_PROCESOS/Kaizen/imprimible.html",
        "lab_guide_url": "PILARES/04_OPERACIONES_Y_PROCESOS/Kaizen/guia_humana.md",
        "lab_img_url": "PILARES/04_OPERACIONES_Y_PROCESOS/Kaizen/Kaizen.png"
      }
    },
    "metrica_impacto": {
      "kpi": "Tasa de días con al menos 1 micro-mejora documentada (&ge; 20 días al mes)",
      "meta": "12 procesos o rutinas optimizados con efecto compuesto al trimestre"
    },
    "piso": 2,
    "piso_nombre": "Piso 2: Optimización, Operación & Relacional",
    "codigo_piso": "P2-13",
    "pilar_directorio": "04_OPERACIONES_Y_PROCESOS",
    "carpeta_pilares": "Kaizen"
  },
  {
    "id": "arquetipos_energia",
    "nombre_oficial": "Matriz de Arquetipos de Energía Operativa",
    "nombre_humano": "Conocer tu Batería Interna (Qué te Carga y Qué te Drena)",
    "pilar": "Pilar 4: Hábitos & Psicología Operativa",
    "fase_madurez": "Fase 2: Estructura & Soberanía",
    "triggers_diagnosticos": {
      "fuga_horas_min": 5,
      "sintomas": [
        "Agotamiento desproporcionado tras realizar pocas tareas",
        "Sensación de autosabotaje cuando toca hacer tareas administrativas o repetitivas",
        "Desconexión entre el tipo de tarea y el estado biológico del día",
        "Falta de actividades de recarga consciente tras frentes de alto drenaje"
      ],
      "variables_clave": [
        "autosabotaje",
        "desbalance_energia_cuidado",
        "bateria_biologica",
        "vampiros_energeticos"
      ]
    },
    "red_flags": [
      "Cuando tengo que planificar me pongo a limpiar, y cuando tengo que ejecutar me pongo a soñar.",
      "Termino el día con la batería en 0% sin haber avanzado en lo importante porque una sola tarea me drenó toda la mañana."
    ],
    "pregunta_diagnostica": "¿Cuál de tus 4 cuadrantes de energía está hoy al volante de tu semana y qué tarea generadora tienes lista para recargarte después de un vampiro energético?",
    "carta_tactica_asociada": "Sobrecarga Cognitiva",
    "protocolo_paso_cero": "Nombrar en voz alta qué tarea de hoy te está drenando la batería y emparejarla con 15 minutos de una actividad generadora inmediatamente después.",
    "microdosis_24h": "Clasificar tus actividades semanales en los 4 cuadrantes de energía en la microapp y calcular tu Balance Neto de Batería.",
    "sinergias": [
      "triangulacion_roles",
      "roles_belbin_sombreros"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "energy-archetypes-quadrant",
        "tipo_interaccion": "Cuadrante interactivo con barra de equilibrio de los 4 arquetipos",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "hoja_arquetipos_energia",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha: Matriz de Arquetipos Energéticos"
      },
      "plantilla_excel": "",
      "caja_canonica": {
        "pilar_directorio": "06_CLINICA_Y_MODULOS_AICC",
        "carpeta": "Arquetipos de Energia",
        "app_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/06_CLINICA_Y_MODULOS_AICC/Arquetipos de Energia/app.html",
        "print_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/06_CLINICA_Y_MODULOS_AICC/Arquetipos de Energia/imprimible.html",
        "guide_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/06_CLINICA_Y_MODULOS_AICC/Arquetipos de Energia/guia_humana.md",
        "img_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/06_CLINICA_Y_MODULOS_AICC/Arquetipos de Energia/Arquetipos de Energia.png",
        "lab_app_url": "PILARES/06_CLINICA_Y_MODULOS_AICC/Arquetipos de Energia/app.html",
        "lab_print_url": "PILARES/06_CLINICA_Y_MODULOS_AICC/Arquetipos de Energia/imprimible.html",
        "lab_guide_url": "PILARES/06_CLINICA_Y_MODULOS_AICC/Arquetipos de Energia/guia_humana.md",
        "lab_img_url": "PILARES/06_CLINICA_Y_MODULOS_AICC/Arquetipos de Energia/Arquetipos de Energia.png"
      }
    },
    "metrica_impacto": {
      "kpi": "Balance Neto de Batería Semanal (>= +60%) y reducción de episodios de sabotaje por agotamiento",
      "meta": "100% de tareas rojas compensadas con un bloque verde de recarga biológica"
    },
    "piso": 2,
    "piso_nombre": "Piso 2: Optimización, Operación & Relacional",
    "codigo_piso": "P2-14",
    "pilar_directorio": "06_CLINICA_Y_MODULOS_AICC",
    "carpeta_pilares": "Arquetipos de Energia"
  },
  {
    "id": "piramide_minto_comunicacion",
    "nombre_oficial": "Principio de la Pirámide de Minto (Answer First)",
    "nombre_humano": "El Fin de los Rodeos y los Mensajes Eternos (Ir Directo al Grano)",
    "pilar": "Pilar 3: Orden Mental & Operaciones",
    "fase_madurez": "Fase 2: Estructura & Soberanía",
    "triggers_diagnosticos": {
      "fuga_horas_min": 5,
      "sintomas": [
        "Mensajes y correos kilométricos que nadie lee",
        "Reuniones improductivas donde la gente pierde atención",
        "Inseguridad para proponer soluciones directas",
        "Dar rodeos por miedo al conflicto o al rechazo"
      ],
      "variables_clave": [
        "comunicacion_asertiva",
        "answer_first",
        "sintesis_ejecutiva"
      ]
    },
    "red_flags": [
      "Enviar audios de 5 minutos o correos de 4 párrafos antes de decir el precio o la conclusión.",
      "Comenzar reuniones contando la historia completa en vez del acuerdo que se necesita tomar."
    ],
    "pregunta_diagnostica": "Al comunicarte, ¿entregas tu conclusión y respuesta en la primera frase o la escondes al final de una larga historia que cansa a los demás?",
    "carta_tactica_asociada": "Sobrecarga Cognitiva",
    "protocolo_paso_cero": "En tu próximo correo o WhatsApp, pon la conclusión y propuesta en la primera línea en negrita.",
    "microdosis_24h": "Estructurar una propuesta o reporte en la microapp Minto usando el generador Answer-First.",
    "sinergias": [
      "paquetizacion_servicios_mes",
      "feedback_sbi_conversaciones"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "minto-pyramid-formatter",
        "tipo_interaccion": "Editor de mensajes estructurados bajo la Pirámide de Minto con botón de copia",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "hoja_piramide_minto",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha: Estructura de Comunicación Ejecutiva Minto"
      },
      "plantilla_excel": "",
      "caja_canonica": {
        "pilar_directorio": "04_OPERACIONES_Y_PROCESOS",
        "carpeta": "Piramide de Minto",
        "app_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/Piramide de Minto/app.html",
        "print_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/Piramide de Minto/imprimible.html",
        "guide_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/Piramide de Minto/guia_humana.md",
        "img_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/Piramide de Minto/Piramide de Minto.png",
        "lab_app_url": "PILARES/04_OPERACIONES_Y_PROCESOS/Piramide de Minto/app.html",
        "lab_print_url": "PILARES/04_OPERACIONES_Y_PROCESOS/Piramide de Minto/imprimible.html",
        "lab_guide_url": "PILARES/04_OPERACIONES_Y_PROCESOS/Piramide de Minto/guia_humana.md",
        "lab_img_url": "PILARES/04_OPERACIONES_Y_PROCESOS/Piramide de Minto/Piramide de Minto.png"
      }
    },
    "metrica_impacto": {
      "kpi": "Tasa de respuesta ágil a propuestas y correos (< 2 horas de media)",
      "meta": "Reducción del 50% en tiempo de reuniones y cero retrabajos por malentendidos"
    },
    "piso": 2,
    "piso_nombre": "Piso 2: Optimización, Operación & Relacional",
    "codigo_piso": "P2-15",
    "pilar_directorio": "04_OPERACIONES_Y_PROCESOS",
    "carpeta_pilares": "Piramide de Minto"
  },
  {
    "id": "mind_mapping_visual",
    "nombre_oficial": "Mind Mapping (Mapas Mentales Radiales)",
    "nombre_humano": "El GPS para Mentes Creativas (y Saturadas) — Dibujar tus Ideas para Verlas Claras",
    "pilar": "Pilar 3: Orden Mental & Operaciones",
    "fase_madurez": "Fase 2: Estructura & Soberanía",
    "triggers_diagnosticos": {
      "fuga_horas_min": 4,
      "sintomas": [
        "Bloqueo mental ante proyectos nuevos o complejos",
        "Dispersión y sobrecarga de ideas desconectadas",
        "Listas lineales interminables que agobian",
        "Dificultad para explicar una iniciativa de forma visual"
      ],
      "variables_clave": [
        "sobrecarga_cognitiva",
        "pensamiento_radial",
        "claridad_visual"
      ]
    },
    "red_flags": [
      "Pasar semanas postergando un proyecto porque 'no sé por dónde empezar'.",
      "Tener libretas llenas de apuntes desordenados que nunca se convierten en un plan de acción."
    ],
    "pregunta_diagnostica": "¿Puedes dibujar tu proyecto en una sola hoja usando ramificaciones visuales en lugar de escribir párrafos infinitos que te agobian?",
    "carta_tactica_asociada": "Sobrecarga Cognitiva",
    "protocolo_paso_cero": "Tomar una hoja horizontal, dibujar un círculo al centro con el nombre de tu proyecto y sacar 3 ramas principales.",
    "microdosis_24h": "Mapear un desafío o lanzamiento en la microapp interactiva de Mind Mapping estructurando sus 4 ramas.",
    "sinergias": [
      "kanban_gtd_wip2",
      "principio_mece_categorizacion"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "mindmap-node-editor",
        "tipo_interaccion": "Editor de nodos radiales visual con zoom y exportación SVG/PNG",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "hoja_mind_mapping_plantilla",
        "formato": "1 Hoja Carta/A4 Horizontal (.sheet-page)",
        "seccion_hub": "Ficha: Lienzo de Mapa Mental Radial"
      },
      "plantilla_excel": "",
      "caja_canonica": {
        "pilar_directorio": "04_OPERACIONES_Y_PROCESOS",
        "carpeta": "Mind Mapping",
        "app_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/Mind Mapping/app.html",
        "print_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/Mind Mapping/imprimible.html",
        "guide_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/Mind Mapping/guia_humana.md",
        "img_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/Mind Mapping/Mind Mapping.png",
        "lab_app_url": "PILARES/04_OPERACIONES_Y_PROCESOS/Mind Mapping/app.html",
        "lab_print_url": "PILARES/04_OPERACIONES_Y_PROCESOS/Mind Mapping/imprimible.html",
        "lab_guide_url": "PILARES/04_OPERACIONES_Y_PROCESOS/Mind Mapping/guia_humana.md",
        "lab_img_url": "PILARES/04_OPERACIONES_Y_PROCESOS/Mind Mapping/Mind Mapping.png"
      }
    },
    "metrica_impacto": {
      "kpi": "Reducción en tiempo de arranque de proyectos (de 2 semanas a < 48 horas)",
      "meta": "100% de proyectos complejos esquematizados en una sola lámina visual"
    },
    "piso": 2,
    "piso_nombre": "Piso 2: Optimización, Operación & Relacional",
    "codigo_piso": "P2-16",
    "pilar_directorio": "04_OPERACIONES_Y_PROCESOS",
    "carpeta_pilares": "Mind Mapping"
  },
  {
    "id": "fondo_reserva_paz",
    "nombre_oficial": "Fondo de Reserva y Tranquilidad (3 Meses de Vida)",
    "nombre_humano": "Tu Colchón de Paz Mental (Dormir Tranquilo pase lo que pase)",
    "pilar": "Pilar 2: Finanzas & Rentabilidad",
    "fase_madurez": "Fase 2: Estructura & Soberanía",
    "triggers_diagnosticos": {
      "fuga_horas_min": 4,
      "sintomas": [
        "Ansiedad aguda en la última semana de cada mes",
        "Dependencia absoluta de las ventas de la semana para pagar gastos básicos",
        "Aceptar clientes tóxicos o tarifas bajas por urgencia económica",
        "Falta de separación entre caja diaria y ahorro de emergencia"
      ],
      "variables_clave": [
        "ansiedad_fin_de_mes",
        "dependencia_ingreso_inmediato",
        "colchon_paz",
        "soberania_financiera"
      ]
    },
    "red_flags": [
      "Si este mes no vendo o me enfermo dos semanas, no tengo cómo pagar mis gastos básicos.",
      "Acepto clientes abusivos o proyectos mal pagados por miedo a quedarme sin liquidez."
    ],
    "pregunta_diagnostica": "¿Cuántos meses exactos podrías sostener la paz de tu hogar si mañana tus ingresos se detuvieran por completo?",
    "carta_tactica_asociada": "Costo de Oportunidad",
    "protocolo_paso_cero": "Calcular la cifra exacta de 1 mes de Costo Basal de Paz Mensual y transferir hoy un primer aporte simbólico a una cuenta intocable.",
    "microdosis_24h": "Configurar tu Costo Basal de Paz en la calculadora interactiva, definir tu aporte mensual o semanal y activar el Escalón 1 (1 Mes de Oxígeno).",
    "sinergias": [
      "finanzas_503020",
      "paquetizacion_servicios_mes"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "emergency-fund-tracker",
        "tipo_interaccion": "Barra de progreso de meses acumulados con cálculo de supervivencia",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "hoja_meta_fondo_reserva",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha 10: Termómetro del Fondo de Paz"
      },
      "plantilla_excel": "08_Fondo_Reserva_Paz.xlsx",
      "caja_canonica": {
        "pilar_directorio": "06_CLINICA_Y_MODULOS_AICC",
        "carpeta": "Fondo de Reserva y Paz",
        "app_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/06_CLINICA_Y_MODULOS_AICC/Fondo de Reserva y Paz/app.html",
        "print_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/06_CLINICA_Y_MODULOS_AICC/Fondo de Reserva y Paz/imprimible.html",
        "guide_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/06_CLINICA_Y_MODULOS_AICC/Fondo de Reserva y Paz/guia_humana.md",
        "img_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/06_CLINICA_Y_MODULOS_AICC/Fondo de Reserva y Paz/Fondo de Reserva y Paz.png",
        "lab_app_url": "PILARES/06_CLINICA_Y_MODULOS_AICC/Fondo de Reserva y Paz/app.html",
        "lab_print_url": "PILARES/06_CLINICA_Y_MODULOS_AICC/Fondo de Reserva y Paz/imprimible.html",
        "lab_guide_url": "PILARES/06_CLINICA_Y_MODULOS_AICC/Fondo de Reserva y Paz/guia_humana.md",
        "lab_img_url": "PILARES/06_CLINICA_Y_MODULOS_AICC/Fondo de Reserva y Paz/Fondo de Reserva y Paz.png"
      }
    },
    "metrica_impacto": {
      "kpi": "Meses de Reserva Blindados (Fondo Acumulado / Costo Basal Mensual)",
      "meta": "3.0 meses de Costo Basal de Paz blindados en cuenta separada de alta liquidez"
    },
    "piso": 2,
    "piso_nombre": "Piso 2: Optimización, Operación & Relacional",
    "codigo_piso": "P2-17",
    "pilar_directorio": "06_CLINICA_Y_MODULOS_AICC",
    "carpeta_pilares": "Fondo de Reserva y Paz"
  },
  {
    "id": "principio_pareto_80_20",
    "codigo_piso": "P2-18",
    "piso": 2,
    "piso_nombre": "Piso 2: Optimización, Operación & Relacional",
    "nombre_oficial": "Principio de Pareto (Regla del 80/20)",
    "nombre_humano": "La Cura para el Agotamiento por Intentar Hacer de Todo",
    "pilar": "Pilar 2: Tiempo & Ejecución",
    "pilar_directorio": "02_PRODUCTIVIDAD_Y_TIEMPO",
    "carpeta_pilares": "Principio de Pareto",
    "fase_madurez": "Fase 2: Estructura & Soberanía",
    "pregunta_diagnostica": "¿Si una emergencia médica te obligara a trabajar solo 2 horas al día esta semana, cuáles serían las 2 únicas actividades que mantendrían vivo tu negocio?",
    "protocolo_paso_cero": "Elegir la ÚNICA tarea de tu jornada que de verdad mueve la aguja financiera y hacerla antes de abrir el correo.",
    "microdosis_24h": "Clasificar tus tareas en el 20% Vital y 80% Trivial en la microapp, y podar al menos 2 distracciones hoy.",
    "red_flags": [
      "Dedicar el 80% del tiempo a clientes o tareas que solo generan el 10% del margen o satisfacción.",
      "Sentir culpa moral por no completar una lista interminable de 40 tareas diarias."
    ],
    "triggers_diagnosticos": {
      "fuga_horas_min": 8,
      "sintomas": [
        "Estar ocupado todo el día sin avanzar",
        "Clientes tóxicos que consumen todo el tiempo",
        "Tratar toda tarea con la misma urgencia"
      ],
      "variables_clave": [
        "concentracion_esfuerzo",
        "fuga_trivial",
        "apalancamiento_vital"
      ]
    },
    "metrica_impacto": {
      "kpi": "Horas de foco blindadas para el 20% vital (&ge; 4 horas diarias)",
      "meta": "Reducción del 50% en tiempo dedicado a tareas triviales delegables o prescindibles"
    },
    "doble_salida": {
      "caja_canonica": {
        "pilar_directorio": "02_PRODUCTIVIDAD_Y_TIEMPO",
        "carpeta": "Principio de Pareto",
        "app_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Principio de Pareto/app.html",
        "print_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Principio de Pareto/imprimible.html",
        "guide_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Principio de Pareto/guia_humana.md",
        "img_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Principio de Pareto/Principio de Pareto.png",
        "lab_app_url": "PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Principio de Pareto/app.html",
        "lab_print_url": "PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Principio de Pareto/imprimible.html",
        "lab_guide_url": "PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Principio de Pareto/guia_humana.md",
        "lab_img_url": "PILARES/02_PRODUCTIVIDAD_Y_TIEMPO/Principio de Pareto/Principio de Pareto.png"
      }
    }
  },
  {
    "id": "inventario_resultados_auditoria",
    "codigo_piso": "P2-19",
    "piso": 2,
    "piso_nombre": "Piso 2: Optimización, Operación & Relacional",
    "nombre_oficial": "Inventario de Resultados y Auditoría de Avance",
    "nombre_humano": "El Espejo Forense del Avance Real y Cura a la Amnesia de Logros",
    "pilar": "Pilar 3: Orden Mental & Operaciones",
    "pilar_directorio": "04_OPERACIONES_Y_PROCESOS",
    "carpeta_pilares": "Inventario de Resultados",
    "fase_madurez": "Fase 2: Estructura & Soberanía",
    "pregunta_diagnostica": "¿Si un auditor externo viniera a revisar tu semana con pruebas físicas de avance, le mostrarías una nube de agotamiento o un inventario claro de victorias tangibles?",
    "protocolo_paso_cero": "Anotar en una servilleta 3 cosas que hoy están terminadas y que el lunes estaban pendientes.",
    "microdosis_24h": "Ejecutar la auditoría de 4 categorías en la microapp y definir el veredicto de cierre semanal.",
    "red_flags": [
      "Llegar al viernes con agotamiento extremo y concluir 'no hice nada esta semana'.",
      "Incapacidad de enumerar 3 cosas cerradas y terminadas con pruebas físicas."
    ],
    "triggers_diagnosticos": {
      "fuga_horas_min": 6,
      "sintomas": [
        "Sentir que no se avanzó nada",
        "Trabajar 50 horas y sentir culpa",
        "Amnesia de logros del viernes",
        "Confundir cansancio con valor"
      ],
      "variables_clave": [
        "entregables_cerrados",
        "auditoria_forense",
        "equilibrio_bienestar"
      ]
    },
    "metrica_impacto": {
      "kpi": "Auditoría de resultados ejecutada los viernes en menos de 15 minutos",
      "meta": "Al menos 3 victorias operativas y 1 de bienestar registradas semanalmente"
    },
    "doble_salida": {
      "caja_canonica": {
        "pilar_directorio": "04_OPERACIONES_Y_PROCESOS",
        "carpeta": "Inventario de Resultados",
        "app_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/Inventario de Resultados/app.html",
        "print_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/Inventario de Resultados/imprimible.html",
        "guide_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/Inventario de Resultados/guia_humana.md",
        "img_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/Inventario de Resultados/Inventario de Resultados.png",
        "lab_app_url": "PILARES/04_OPERACIONES_Y_PROCESOS/Inventario de Resultados/app.html",
        "lab_print_url": "PILARES/04_OPERACIONES_Y_PROCESOS/Inventario de Resultados/imprimible.html",
        "lab_guide_url": "PILARES/04_OPERACIONES_Y_PROCESOS/Inventario de Resultados/guia_humana.md",
        "lab_img_url": "PILARES/04_OPERACIONES_Y_PROCESOS/Inventario de Resultados/Inventario de Resultados.png"
      }
    }
  },
  {
    "id": "enps_termometro_lealtad",
    "codigo_piso": "P2-20",
    "piso": 2,
    "piso_nombre": "Piso 2: Optimización, Operación & Relacional",
    "nombre_oficial": "eNPS (Employee Net Promoter Score) — Medición de Clima y Lealtad",
    "nombre_humano": "El Termómetro de la Lealtad y el Clima Real (Seguridad Psicológica)",
    "pilar": "Pilar 2: Liderazgo & Equipos",
    "pilar_directorio": "03_LIDERAZGO_Y_EQUIPO",
    "carpeta_pilares": "eNPS",
    "fase_madurez": "Fase 2: Estructura & Soberanía",
    "pregunta_diagnostica": "Si tus colaboradores tuvieran que recomendar tu empresa a un amigo íntimo o familiar, ¿lo harían con orgullo o le advertirían que mejor no se meta?",
    "protocolo_paso_cero": "Abrir una papeleta o formulario anónimo de 1 sola pregunta del 0 al 10 con espacio abierto de mejora.",
    "microdosis_24h": "Calcular el eNPS neto del equipo en la microapp interactiva y analizar los motivos principales.",
    "red_flags": [
      "Creer que el equipo está motivado porque 'nadie se queja'.",
      "Gastar en encuestas engorrosas de 50 preguntas que nadie responde con verdad."
    ],
    "triggers_diagnosticos": {
      "fuga_horas_min": 4,
      "sintomas": [
        "Renuncias silenciosas sin aviso",
        "Clima tenso donde nadie participa en reuniones",
        "Quejas y rumores de pasillo no canalizados",
        "Desconexión entre líderes y colaboradores"
      ],
      "variables_clave": [
        "lealtad_empleado",
        "clima_laboral",
        "seguridad_psicologica"
      ]
    },
    "metrica_impacto": {
      "kpi": "Score eNPS neto (Meta >= +30 puntos)",
      "meta": "0% renuncias inesperadas y 100% de quejas críticas atendidas en < 14 días"
    },
    "doble_salida": {
      "caja_canonica": {
        "pilar_directorio": "03_LIDERAZGO_Y_EQUIPO",
        "carpeta": "eNPS",
        "app_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/eNPS/app.html",
        "print_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/eNPS/imprimible.html",
        "guide_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/eNPS/guia_humana.md",
        "img_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/eNPS/eNPS.png",
        "lab_app_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/eNPS/app.html",
        "lab_print_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/eNPS/imprimible.html",
        "lab_guide_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/eNPS/guia_humana.md",
        "lab_img_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/eNPS/eNPS.png"
      }
    }
  },
  {
    "id": "principio_mece_categorizacion",
    "nombre_oficial": "Principio MECE (Mutuamente Excluyentes, Colectivamente Exhaustivos)",
    "nombre_humano": "El Fin de las Tareas Repetidas y los Cabos Sueltos (Delimitación Quirúrgica)",
    "pilar": "Pilar 3: Orden Mental & Operaciones",
    "fase_madurez": "Fase 2: Estructura & Soberanía",
    "triggers_diagnosticos": {
      "fuga_horas_min": 4,
      "sintomas": [
        "Tareas duplicadas por falta de límites de responsabilidad",
        "Discusiones sobre 'a quién le tocaba' hacer una tarea",
        "Cabos sueltos críticos que caen en tierra de nadie",
        "Mezcla de presupuestos del hogar y de la empresa"
      ],
      "variables_clave": [
        "mutuamente_excluyente",
        "colectivamente_exhaustivo",
        "limites_operativos"
      ]
    },
    "red_flags": [
      "Dos personas realizando la misma función operativa sin saberlo.",
      "Tener una categoría 'Otros' o 'Varios' que supera el 20% del volumen total de tareas."
    ],
    "pregunta_diagnostica": "Al dividir tu negocio o tus roles de vida, ¿tus categorías están claramente delimitadas sin pisarse, y cubren el 100% de lo importante sin dejar cabos sueltos?",
    "carta_tactica_asociada": "Sobrecarga Cognitiva",
    "protocolo_paso_cero": "Definir una 'frontera prohibida' entre tus dos frentes principales para evitar la contaminación cruzada.",
    "microdosis_24h": "Estructurar tus frentes operativos en la microapp MECE y ejecutar el validador en tiempo real.",
    "sinergias": [
      "triangulacion_roles",
      "mind_mapping_visual"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "mece-category-sorter",
        "tipo_interaccion": "Clasificador visual de compartimentos con validación de no solapamiento",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "hoja_principio_mece",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha: Estructuración MECE de Frentes y Archivos"
      },
      "plantilla_excel": "",
      "caja_canonica": {
        "pilar_directorio": "04_OPERACIONES_Y_PROCESOS",
        "carpeta": "Principio MECE",
        "app_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/Principio MECE/app.html",
        "print_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/Principio MECE/imprimible.html",
        "guide_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/Principio MECE/guia_humana.md",
        "img_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/Principio MECE/Principio MECE.png",
        "lab_app_url": "PILARES/04_OPERACIONES_Y_PROCESOS/Principio MECE/app.html",
        "lab_print_url": "PILARES/04_OPERACIONES_Y_PROCESOS/Principio MECE/imprimible.html",
        "lab_guide_url": "PILARES/04_OPERACIONES_Y_PROCESOS/Principio MECE/guia_humana.md",
        "lab_img_url": "PILARES/04_OPERACIONES_Y_PROCESOS/Principio MECE/Principio MECE.png"
      }
    },
    "metrica_impacto": {
      "kpi": "Tasa de retrabajos por solapamiento y cabos sueltos olvidados (0 incidentes)",
      "meta": "100% de responsabilidades con un único dueño y cajón estanco"
    },
    "piso": 2,
    "piso_nombre": "Piso 2: Optimización, Operación & Relacional",
    "codigo_piso": "P2-21",
    "pilar_directorio": "04_OPERACIONES_Y_PROCESOS",
    "carpeta_pilares": "Principio MECE"
  },
  {
    "id": "circulo_dorado",
    "nombre_oficial": "El Círculo Dorado (Simon Sinek)",
    "nombre_humano": "El Antídoto contra la Guerra de Precios y la Crisis de Identidad",
    "pilar": "Pilar 1: Estrategia & Dirección",
    "fase_madurez": "Fase 3: Visión & Escala",
    "triggers_diagnosticos": {
      "fuga_horas_min": 8,
      "sintomas": [
        "Competir por precio",
        "Clientes que regatean",
        "Discurso de ventas frío",
        "Falta de pertenencia del equipo"
      ],
      "variables_clave": [
        "claridad_proposito",
        "diferencial_limbico",
        "pitch_inside_out"
      ]
    },
    "red_flags": [
      "Clientes que siempre piden descuento y comparan con la opción más barata.",
      "Presentar el negocio enumerando especificaciones técnicas en vez de significado o impacto."
    ],
    "pregunta_diagnostica": "¿Tus clientes te compran por lo que haces (un producto sustituible) o por la causa innegociable por la que te levantas cada mañana?",
    "carta_tactica_asociada": "Miopía del Marketing",
    "protocolo_paso_cero": "Completar la frase: 'Creemos que nadie debería tener que sufrir por [problema], y por eso creamos [proyecto]'.",
    "microdosis_24h": "Redactar tu Por Qué, Cómo y Qué en la microapp y generar el pitch de valor de 30 segundos para redes o ventas.",
    "sinergias": [
      "foda_came",
      "oceano_azul_diferencial"
    ],
    "contraindicaciones": [
      "crisis_financiera_urgente"
    ],
    "doble_salida": {
      "componente_web": {
        "widget_id": "golden-circle-canvas",
        "tipo_interaccion": "Visualizador concéntrico interactivo con tarjetas de propósito",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "ficha_circulo_dorado",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha: Círculo Dorado y Manifiesto de Propósito"
      },
      "plantilla_excel": "12_Circulo_Dorado_Proposito.xlsx",
      "caja_canonica": {
        "pilar_directorio": "01_ESTRATEGIA_Y_DIRECCION",
        "carpeta": "Circulo Dorado",
        "app_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/01_ESTRATEGIA_Y_DIRECCION/Circulo Dorado/app.html",
        "print_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/01_ESTRATEGIA_Y_DIRECCION/Circulo Dorado/imprimible.html",
        "guide_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/01_ESTRATEGIA_Y_DIRECCION/Circulo Dorado/guia_humana.md",
        "img_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/01_ESTRATEGIA_Y_DIRECCION/Circulo Dorado/Circulo Dorado.png",
        "lab_app_url": "PILARES/01_ESTRATEGIA_Y_DIRECCION/Circulo Dorado/app.html",
        "lab_print_url": "PILARES/01_ESTRATEGIA_Y_DIRECCION/Circulo Dorado/imprimible.html",
        "lab_guide_url": "PILARES/01_ESTRATEGIA_Y_DIRECCION/Circulo Dorado/guia_humana.md",
        "lab_img_url": "PILARES/01_ESTRATEGIA_Y_DIRECCION/Circulo Dorado/Circulo Dorado.png"
      }
    },
    "metrica_impacto": {
      "kpi": "Pitch de valor Inside-Out estructurado y memorizado por el equipo",
      "meta": "Aumento del 50% en conversión de propuestas comerciales sin conceder descuentos"
    },
    "piso": 3,
    "piso_nombre": "Piso 3: Estrategia, Liderazgo & Escala",
    "codigo_piso": "P3-01",
    "pilar_directorio": "01_ESTRATEGIA_Y_DIRECCION",
    "carpeta_pilares": "Circulo Dorado"
  },
  {
    "id": "plan_estrategico_hitos",
    "nombre_oficial": "Plan Estratégico Trienal e Hitos Clave",
    "nombre_humano": "El Mapa para Dejar de Correr como Pollo sin Cabeza (La Película de tus Próximos 3 Años)",
    "pilar": "Pilar 1: Estrategia & Dirección",
    "fase_madurez": "Fase 3: Dirección & Expansión",
    "triggers_diagnosticos": {
      "fuga_horas_min": 6,
      "sintomas": [
        "Vivir corriendo como 'pollo sin cabeza' sin avance de fondo",
        "Llegar a fin de año en el mismo nivel que el año anterior",
        "Cambiar de rumbo o de ideas cada dos semanas por impulso",
        "Falta de visión clara compartida con el equipo o la familia"
      ],
      "variables_clave": [
        "plan_trienal",
        "hitos_trimestrales",
        "alineacion_estrategica"
      ]
    },
    "red_flags": [
      "Aceptar compromisos improductivos por no tener metas claras a mediano plazo.",
      "No saber cuáles son los 3 hitos que deben cumplirse en los próximos 90 días."
    ],
    "pregunta_diagnostica": "Si tu vida o tu negocio fuera una película de 3 años, ¿cómo se titula el capítulo de este año y cuáles son los 3 hitos medibles que determinan si pasaste de nivel?",
    "carta_tactica_asociada": "Sesgo de Planificación",
    "protocolo_paso_cero": "Escribir el título de tu año actual y fijar una sola meta numérica innegociable para el próximo trimestre.",
    "microdosis_24h": "Configurar los hitos trimestrales de los 3 años en la microapp interactiva y revisar el avance.",
    "sinergias": [
      "metodo_smart_metas",
      "metodo_okr_trimestral"
    ],
    "contraindicaciones": [
      "crisis_operativa_aguda"
    ],
    "doble_salida": {
      "componente_web": {
        "widget_id": "strategic-timeline-3y",
        "tipo_interaccion": "Timeline interactivo trienal con hitos por trimestre",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "hoja_plan_estrategico_hitos",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha: Hoja de Ruta Estratégica a 3 Años"
      },
      "plantilla_excel": "13_Plan_Estrategico_Hitos.xlsx",
      "caja_canonica": {
        "pilar_directorio": "01_ESTRATEGIA_Y_DIRECCION",
        "carpeta": "Plan Estrategico",
        "app_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/01_ESTRATEGIA_Y_DIRECCION/Plan Estrategico/app.html",
        "print_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/01_ESTRATEGIA_Y_DIRECCION/Plan Estrategico/imprimible.html",
        "guide_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/01_ESTRATEGIA_Y_DIRECCION/Plan Estrategico/guia_humana.md",
        "img_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/01_ESTRATEGIA_Y_DIRECCION/Plan Estrategico/Plan Estrategico.png",
        "lab_app_url": "PILARES/01_ESTRATEGIA_Y_DIRECCION/Plan Estrategico/app.html",
        "lab_print_url": "PILARES/01_ESTRATEGIA_Y_DIRECCION/Plan Estrategico/imprimible.html",
        "lab_guide_url": "PILARES/01_ESTRATEGIA_Y_DIRECCION/Plan Estrategico/guia_humana.md",
        "lab_img_url": "PILARES/01_ESTRATEGIA_Y_DIRECCION/Plan Estrategico/Plan Estrategico.png"
      }
    },
    "metrica_impacto": {
      "kpi": "Tasa de cumplimiento de hitos trimestrales (>= 75% completados)",
      "meta": "100% de tareas semanales filtradas bajo la visión trienal"
    },
    "piso": 3,
    "piso_nombre": "Piso 3: Dirección, Propósito & Escala",
    "codigo_piso": "P3-02",
    "pilar_directorio": "01_ESTRATEGIA_Y_DIRECCION",
    "carpeta_pilares": "Plan Estrategico"
  },
  {
    "id": "metodo_smart_metas",
    "nombre_oficial": "Método SMART para Formulación de Metas",
    "nombre_humano": "El Fin de las Metas Humo y Aprender a Pedirle Cosas Claras a la Vida",
    "pilar": "Pilar 1: Cimientos & Propósito",
    "fase_madurez": "Fase 2: Estructura & Soberanía",
    "triggers_diagnosticos": {
      "fuga_horas_min": 6,
      "sintomas": [
        "Metas que se abandonan al mes",
        "Deseos abstractos sin fecha",
        "Culpa por no avanzar",
        "Parálisis por metas gigantes"
      ],
      "variables_clave": [
        "claridad_numerica",
        "fecha_corte",
        "realismo_energetico"
      ]
    },
    "red_flags": [
      "Plantear objetivos con palabras vagas como 'mejorar', 'crecer' o 'intentar'.",
      "No tener una fecha y hora exacta de corte en el calendario para evaluar el resultado."
    ],
    "pregunta_diagnostica": "¿Para esa meta que tienes en mente: tienes una fecha de vencimiento exacta y un número que determine si lo lograste o no?",
    "carta_tactica_asociada": "Ley de Parkinson",
    "protocolo_paso_cero": "Ponerle a tu mayor deseo actual únicamente dos datos: un número y una fecha de vencimiento.",
    "microdosis_24h": "Redactar tu declaración SMART completa en la microapp interactiva y validarla contra los 3 filtros.",
    "sinergias": [
      "plan_estrategico_hitos",
      "metodo_okr_trimestral"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "smart-goal-builder",
        "tipo_interaccion": "Constructor guiado de metas con validación automática de criterios SMART",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "ficha_metas_smart",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha: Calibrador de Metas SMART"
      },
      "plantilla_excel": "14_Metas_SMART_Calibrador.xlsx",
      "caja_canonica": {
        "pilar_directorio": "03_LIDERAZGO_Y_EQUIPO",
        "carpeta": "Metodo SMART",
        "app_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/Metodo SMART/app.html",
        "print_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/Metodo SMART/imprimible.html",
        "guide_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/Metodo SMART/guia_humana.md",
        "img_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/Metodo SMART/Metodo SMART.png",
        "lab_app_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/Metodo SMART/app.html",
        "lab_print_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/Metodo SMART/imprimible.html",
        "lab_guide_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/Metodo SMART/guia_humana.md",
        "lab_img_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/Metodo SMART/Metodo SMART.png"
      }
    },
    "metrica_impacto": {
      "kpi": "100% de proyectos trimestrales formulados con ficha SMART completa",
      "meta": "Tasa de cumplimiento &ge; 75% dentro del plazo establecido"
    },
    "piso": 3,
    "piso_nombre": "Piso 3: Estrategia, Liderazgo & Escala",
    "codigo_piso": "P3-03",
    "pilar_directorio": "03_LIDERAZGO_Y_EQUIPO",
    "carpeta_pilares": "Metodo SMART"
  },
  {
    "id": "metodo_okr_trimestral",
    "nombre_oficial": "Método OKR (Objectives and Key Results)",
    "nombre_humano": "El GPS para no Perderse en la Operatividad Eterna",
    "pilar": "Pilar 4: Finanzas & Negocio",
    "fase_madurez": "Fase 3: Expansión & Negocio",
    "triggers_diagnosticos": {
      "fuga_horas_min": 8,
      "sintomas": [
        "Correr todo el día sin avanzar",
        "El día a día devora la estrategia",
        "Desalineación entre socios",
        "Falta de prioridades trimestrales"
      ],
      "variables_clave": [
        "alineacion_estrategica",
        "metricas_cuantificables",
        "ritmo_checkin"
      ]
    },
    "red_flags": [
      "Trabajar 14 horas al día en tareas secundarias mientras las metas estratégicas se posponen meses.",
      "Tener más de 5 objetivos abiertos simultáneamente sin métricas de resultado clave."
    ],
    "pregunta_diagnostica": "¿Tus metas diarias de esta semana están amarradas matemáticamente a un objetivo de negocio de mediano plazo?",
    "carta_tactica_asociada": "Ley de Pareto (80/20)",
    "protocolo_paso_cero": "Definir en una servilleta el ÚNICO gran objetivo de los próximos 90 días y 1 resultado numérico verificable.",
    "microdosis_24h": "Configurar tu OKR trimestral con 3 KRs en la microapp interactiva y realizar el primer check-in.",
    "sinergias": [
      "metodo_smart_metas",
      "plan_estrategico_hitos"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "okr-quarterly-dashboard",
        "tipo_interaccion": "Panel de OKRs con medidores de porcentaje de avance en vivo",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "hoja_okr_trimestral",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha: Tablero de Objetivos y Resultados Clave (OKRs)"
      },
      "plantilla_excel": "37_Metodo_OKR_Trimestral.xlsx",
      "caja_canonica": {
        "pilar_directorio": "03_LIDERAZGO_Y_EQUIPO",
        "carpeta": "Metodo OKR",
        "app_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/Metodo OKR/app.html",
        "print_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/Metodo OKR/imprimible.html",
        "guide_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/Metodo OKR/guia_humana.md",
        "img_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/Metodo OKR/Metodo OKR.png",
        "lab_app_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/Metodo OKR/app.html",
        "lab_print_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/Metodo OKR/imprimible.html",
        "lab_guide_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/Metodo OKR/guia_humana.md",
        "lab_img_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/Metodo OKR/Metodo OKR.png"
      }
    },
    "metrica_impacto": {
      "kpi": "Tasa de cumplimiento trimestral de KRs (&ge; 70% promedio)",
      "meta": "Check-in semanal de 15 minutos ejecutado los lunes con 100% de consistencia"
    },
    "piso": 3,
    "piso_nombre": "Piso 3: Estrategia, Liderazgo & Escala",
    "codigo_piso": "P3-04",
    "pilar_directorio": "03_LIDERAZGO_Y_EQUIPO",
    "carpeta_pilares": "Metodo OKR"
  },
  {
    "id": "design_thinking_prototipado",
    "nombre_oficial": "Design Thinking (Prototipado Rápido y Validación Centrada en el Usuario)",
    "nombre_humano": "La Cura para el 'Yo Creo que Esto Les Va a Gustar' (Experimentación de $0)",
    "pilar": "Pilar 3: Orden Mental & Operaciones",
    "fase_madurez": "Fase 3: Dirección & Expansión",
    "triggers_diagnosticos": {
      "fuga_horas_min": 6,
      "sintomas": [
        "Inversión de semanas o meses en productos que nadie compra",
        "Enamorarse de la tecnología o proceso en vez del dolor del cliente",
        "Miedo a mostrar prototipos imperfectos",
        "Cambiar de idea constantemente sin validación real"
      ],
      "variables_clave": [
        "escucha_empatica",
        "prototipado_rapido",
        "validacion_temprana"
      ]
    },
    "red_flags": [
      "Construir una solución completa a puerta cerrada sin haber hablado con 5 clientes reales.",
      "Gastar presupuesto publicitario antes de tener un prototipo validado por WhatsApp."
    ],
    "pregunta_diagnostica": "Antes de dar el gran salto e invertir tus ahorros, ¿has creado un pequeño experimento de bajo costo para validar si el cliente de verdad tiene ese dolor y paga por tu solución?",
    "carta_tactica_asociada": "Parálisis por Análisis",
    "protocolo_paso_cero": "Enviar un audio a 2 clientes preguntándoles cuál es su mayor dolor sin intentar venderles nada.",
    "microdosis_24h": "Documentar las 5 fases de un experimento ágil en la microapp interactiva de Design Thinking.",
    "sinergias": [
      "paquetizacion_servicios_mes",
      "oceano_azul_diferencial"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "design-thinking-prototype-card",
        "tipo_interaccion": "Lienzo de 5 etapas: Empatizar, Definir, Idear, Prototipar y Testear",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "hoja_design_thinking_canvas",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha: Lienzo de Prototipado Rápido Design Thinking"
      },
      "plantilla_excel": "26_Design_Thinking_Prototipado.xlsx",
      "caja_canonica": {
        "pilar_directorio": "04_OPERACIONES_Y_PROCESOS",
        "carpeta": "Design Thinking",
        "app_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/Design Thinking/app.html",
        "print_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/Design Thinking/imprimible.html",
        "guide_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/Design Thinking/guia_humana.md",
        "img_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/04_OPERACIONES_Y_PROCESOS/Design Thinking/Design Thinking.png",
        "lab_app_url": "PILARES/04_OPERACIONES_Y_PROCESOS/Design Thinking/app.html",
        "lab_print_url": "PILARES/04_OPERACIONES_Y_PROCESOS/Design Thinking/imprimible.html",
        "lab_guide_url": "PILARES/04_OPERACIONES_Y_PROCESOS/Design Thinking/guia_humana.md",
        "lab_img_url": "PILARES/04_OPERACIONES_Y_PROCESOS/Design Thinking/Design Thinking.png"
      }
    },
    "metrica_impacto": {
      "kpi": "Tiempo desde la concepción de la idea hasta el primer test con cliente real (<= 7 días)",
      "meta": "100% de nuevas ofertas validadas con preventas antes de desarrollo intensivo"
    },
    "piso": 3,
    "piso_nombre": "Piso 3: Dirección, Propósito & Escala",
    "codigo_piso": "P3-05",
    "pilar_directorio": "04_OPERACIONES_Y_PROCESOS",
    "carpeta_pilares": "Design Thinking"
  },
  {
    "id": "oceano_azul_diferencial",
    "nombre_oficial": "Estrategia del Océano Azul & Factor Diferencial",
    "nombre_humano": "El Fin de la Guerra de Precios y la Competencia Sangrienta (Matriz ERAC)",
    "pilar": "Pilar 1: Estrategia & Dirección",
    "fase_madurez": "Fase 3: Dirección & Expansión",
    "triggers_diagnosticos": {
      "fuga_horas_min": 6,
      "sintomas": [
        "Competir por precio y clientes pidiendo rebajas",
        "Comparación constante con rivales del rubro",
        "Márgenes de ganancia asfixiantes",
        "Servicios genéricos difíciles de distinguir"
      ],
      "variables_clave": [
        "diferenciacion_singular",
        "matriz_erac",
        "espacio_inexplorado"
      ]
    },
    "red_flags": [
      "Iniciar ventas rebajando tarifas por miedo a no cerrar el trato.",
      "Copiar publicaciones o modelos de negocio de la competencia esperando resultados distintos."
    ],
    "pregunta_diagnostica": "¿Qué es aquello que tú haces con total naturalidad, goce y fluidez que a tu competencia le cuesta muchísimo esfuerzo o dinero hacer?",
    "carta_tactica_asociada": "Costo de Oportunidad",
    "protocolo_paso_cero": "Identificar un requisito o trámite engorroso estándar de tu industria y eliminarlo de tu oferta hoy mismo.",
    "microdosis_24h": "Configurar las 4 variables de la Matriz ERAC en la microapp interactiva y redactar tu declaración singular.",
    "sinergias": [
      "circulo_dorado",
      "paquetizacion_servicios_mes"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "blue-ocean-canvas",
        "tipo_interaccion": "Gráfico interactivo de curva de valor comparativa frente a competidores",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "hoja_oceano_azul_diferencial",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha: Matriz de Océano Azul y Propuesta de Valor"
      },
      "plantilla_excel": "16_Oceano_Azul_Curva_Valor.xlsx",
      "caja_canonica": {
        "pilar_directorio": "01_ESTRATEGIA_Y_DIRECCION",
        "carpeta": "Estrategia Oceano Azul",
        "app_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/01_ESTRATEGIA_Y_DIRECCION/Estrategia Oceano Azul/app.html",
        "print_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/01_ESTRATEGIA_Y_DIRECCION/Estrategia Oceano Azul/imprimible.html",
        "guide_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/01_ESTRATEGIA_Y_DIRECCION/Estrategia Oceano Azul/guia_humana.md",
        "img_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/01_ESTRATEGIA_Y_DIRECCION/Estrategia Oceano Azul/Estrategia Oceano Azul.png",
        "lab_app_url": "PILARES/01_ESTRATEGIA_Y_DIRECCION/Estrategia Oceano Azul/app.html",
        "lab_print_url": "PILARES/01_ESTRATEGIA_Y_DIRECCION/Estrategia Oceano Azul/imprimible.html",
        "lab_guide_url": "PILARES/01_ESTRATEGIA_Y_DIRECCION/Estrategia Oceano Azul/guia_humana.md",
        "lab_img_url": "PILARES/01_ESTRATEGIA_Y_DIRECCION/Estrategia Oceano Azul/Estrategia Oceano Azul.png"
      }
    },
    "metrica_impacto": {
      "kpi": "Tasa de propuestas comerciales cerradas a precio de lista (>= 70% sin descuento)",
      "meta": "Margen bruto superior al 50% y posicionamiento como referente único en el nicho"
    },
    "piso": 3,
    "piso_nombre": "Piso 3: Dirección, Propósito & Escala",
    "codigo_piso": "P3-06",
    "pilar_directorio": "01_ESTRATEGIA_Y_DIRECCION",
    "carpeta_pilares": "Estrategia Oceano Azul"
  },
  {
    "id": "modelo_grow_coaching",
    "nombre_oficial": "Modelo GROW de Coaching (Goal, Reality, Options, Will)",
    "nombre_humano": "Enseñar a Pescar • Ayudar a los Tuyos a Resolver sus Propios Problemas",
    "pilar": "Pilar 4: Finanzas & Negocio",
    "fase_madurez": "Fase 3: Expansión & Negocio",
    "triggers_diagnosticos": {
      "fuga_horas_min": 6,
      "sintomas": [
        "Interrupciones constantes para pedir soluciones",
        "Falta de autonomía del equipo",
        "Líder agotado por tener todas las respuestas",
        "Conversaciones que giran en círculos"
      ],
      "variables_clave": [
        "autonomia_equipo",
        "liderazgo_preguntas",
        "compromiso_accion"
      ]
    },
    "red_flags": [
      "Entregar la solución masticada en 10 segundos en lugar de hacer preguntas reflexivas.",
      "Quejarse de que 'nadie toma decisiones sin mí' mientras se censura la iniciativa propia."
    ],
    "pregunta_diagnostica": "¿Cuando alguien te pide ayuda, le das el pez de inmediato o le haces preguntas para que descubra su propia caña de pescar?",
    "carta_tactica_asociada": "Sesgo de Planificación",
    "protocolo_paso_cero": "Morderse la lengua antes de dar un consejo y preguntar: 'Si fueras el dueño de esto, ¿qué primer paso darías hoy?'.",
    "microdosis_24h": "Estructurar la conversación de bloqueo con los 4 pasos GROW en la microapp interactiva.",
    "sinergias": [
      "matriz_raci_hogar_equipo",
      "feedback_sbi_conversaciones"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "grow-session-assistant",
        "tipo_interaccion": "Guía conversacional interactiva con banco de preguntas GROW",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "hoja_modelo_grow",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha: Guía de Preguntas Poderosas Modelo GROW"
      },
      "plantilla_excel": "31_Modelo_GROW_Coaching.xlsx",
      "caja_canonica": {
        "pilar_directorio": "03_LIDERAZGO_Y_EQUIPO",
        "carpeta": "Modelo GROW",
        "app_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/Modelo GROW/app.html",
        "print_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/Modelo GROW/imprimible.html",
        "guide_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/Modelo GROW/guia_humana.md",
        "img_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/Modelo GROW/Modelo GROW.png",
        "lab_app_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/Modelo GROW/app.html",
        "lab_print_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/Modelo GROW/imprimible.html",
        "lab_guide_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/Modelo GROW/guia_humana.md",
        "lab_img_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/Modelo GROW/Modelo GROW.png"
      }
    },
    "metrica_impacto": {
      "kpi": "Reducción del 50% en consultas operativas triviales hacia el líder",
      "meta": "100% de delegaciones complejas acompañadas bajo estructura GROW"
    },
    "piso": 3,
    "piso_nombre": "Piso 3: Estrategia, Liderazgo & Escala",
    "codigo_piso": "P3-07",
    "pilar_directorio": "03_LIDERAZGO_Y_EQUIPO",
    "carpeta_pilares": "Modelo GROW"
  },
  {
    "id": "cinco_fuerzas_porter",
    "nombre_oficial": "Las 5 Fuerzas de Porter & Negociación de Poder",
    "nombre_humano": "Tu Radar Contra los Golpes del Mercado (Quién Tiene la Sartén por el Mango)",
    "pilar": "Pilar 1: Estrategia & Dirección",
    "fase_madurez": "Fase 3: Dirección & Expansión",
    "triggers_diagnosticos": {
      "fuga_horas_min": 5,
      "sintomas": [
        "Concentración de ingresos en 1 o 2 clientes dominantes",
        "Dependencia crítica de proveedores o plataformas exclusivas",
        "Pánico a perder contratos y aceptar condiciones leoninas",
        "Entrada constante de competidores que tiran los precios"
      ],
      "variables_clave": [
        "poder_clientes",
        "poder_proveedores",
        "blindaje_estrategico"
      ]
    },
    "red_flags": [
      "Un solo cliente representa más del 35% de la facturación mensual.",
      "Aceptar descuentos abusivos por no tener otras alternativas de venta."
    ],
    "pregunta_diagnostica": "En tu economía personal, ¿el poder de decisión real lo tienes tú o dependes en un 80% de la buena voluntad de una sola persona o plataforma?",
    "carta_tactica_asociada": "Miopía del Marketing",
    "protocolo_paso_cero": "Calcular la concentración de tu cliente mayoritario y prospectar 3 clientes alternativos si supera el 30%.",
    "microdosis_24h": "Calibrar las 5 fuerzas en la microapp interactiva de Porter y diseñar una acción de blindaje.",
    "sinergias": [
      "oceano_azul_diferencial",
      "paquetizacion_servicios_mes"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "porter-forces-evaluator",
        "tipo_interaccion": "Evaluador interactivo de vulnerabilidad y concentración de clientes",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "hoja_5_fuerzas_porter",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha: Diagnóstico de Fuerzas y Poder de Negociación"
      },
      "plantilla_excel": "17_Porter_5_Fuerzas.xlsx",
      "caja_canonica": {
        "pilar_directorio": "01_ESTRATEGIA_Y_DIRECCION",
        "carpeta": "Las 5 Fuerzas de Porter",
        "app_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/01_ESTRATEGIA_Y_DIRECCION/Las 5 Fuerzas de Porter/app.html",
        "print_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/01_ESTRATEGIA_Y_DIRECCION/Las 5 Fuerzas de Porter/imprimible.html",
        "guide_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/01_ESTRATEGIA_Y_DIRECCION/Las 5 Fuerzas de Porter/guia_humana.md",
        "img_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/01_ESTRATEGIA_Y_DIRECCION/Las 5 Fuerzas de Porter/Las 5 Fuerzas de Porter.png",
        "lab_app_url": "PILARES/01_ESTRATEGIA_Y_DIRECCION/Las 5 Fuerzas de Porter/app.html",
        "lab_print_url": "PILARES/01_ESTRATEGIA_Y_DIRECCION/Las 5 Fuerzas de Porter/imprimible.html",
        "lab_guide_url": "PILARES/01_ESTRATEGIA_Y_DIRECCION/Las 5 Fuerzas de Porter/guia_humana.md",
        "lab_img_url": "PILARES/01_ESTRATEGIA_Y_DIRECCION/Las 5 Fuerzas de Porter/Las 5 Fuerzas de Porter.png"
      }
    },
    "metrica_impacto": {
      "kpi": "Concentración máxima por cliente individual (<= 25% de ingresos)",
      "meta": "Cero pérdidas de rentabilidad por presiones externas de proveedores o compradores"
    },
    "piso": 3,
    "piso_nombre": "Piso 3: Dirección, Propósito & Escala",
    "codigo_piso": "P3-08",
    "pilar_directorio": "01_ESTRATEGIA_Y_DIRECCION",
    "carpeta_pilares": "Las 5 Fuerzas de Porter"
  },
  {
    "id": "paquetizacion_servicios_mes",
    "nombre_oficial": "Paquetización de Servicios en Programas Mensuales",
    "nombre_humano": "Dejar de Vender Horas Sueltas (Crear Ingresos Recurrentes Predecibles)",
    "pilar": "Pilar 1: Estrategia & Modelo de Negocio",
    "fase_madurez": "Fase 3: Expansión & Negocio",
    "triggers_diagnosticos": {
      "fuga_horas_min": 8,
      "sintomas": [
        "Venta por hora suelta o sesión aislada que genera ingresos inestables cada mes",
        "Pérdida directa de dinero cada vez que un cliente reagenda o cancela a última hora",
        "Pasar la mitad del mes persiguiendo pagos unitarios o buscando clientes desde cero",
        "Agotamiento por no tener un techo claro de horas ni entregables acotados por cliente"
      ],
      "variables_clave": [
        "venta_hora_suelta",
        "agenda_inestable",
        "bajos_ingresos_profesionales",
        "mrr_recurrente"
      ]
    },
    "red_flags": [
      "Cobro por hora suelta y si el cliente cancela a última hora pierdo el ingreso.",
      "Paso la mitad del mes buscando clientes nuevos en lugar de profundizar procesos reales."
    ],
    "pregunta_diagnostica": "¿Por qué vender 1 sesión aislada cuando el resultado real de tu cliente requiere un programa estructurado de acompañamiento mensual?",
    "carta_tactica_asociada": "Miopía del Marketing",
    "protocolo_paso_cero": "Bautizar tu 'Programa de 1 Mes' en 3 niveles (Esencial, Óptimo Recomendado y VIP Blindado) y fijar el cupo máximo saludable.",
    "microdosis_24h": "Configurar tu escalera de 3 planes mensuales en el Arquitecto de Paquetización, validar tu MRR objetivo y exportar el tarifario.",
    "sinergias": [
      "calculadora_roi_capacitaciones",
      "ia_chatgpt_prompts_puente"
    ],
    "contraindicaciones": [
      "sin_oferta_validada"
    ],
    "doble_salida": {
      "componente_web": {
        "widget_id": "service-packager-pricing",
        "tipo_interaccion": "Simulador de ingresos comparativo: Venta por hora vs. Venta por programas mensuales",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "guion_oferta_paquete_mes",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha 11: Estructura de Paquetización y Argumentario de Cierre"
      },
      "plantilla_excel": "09_Simulador_Paquetes_Servicios.xlsx",
      "caja_canonica": {
        "pilar_directorio": "06_CLINICA_Y_MODULOS_AICC",
        "carpeta": "Paquetizacion de Servicios",
        "app_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/06_CLINICA_Y_MODULOS_AICC/Paquetizacion de Servicios/app.html",
        "print_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/06_CLINICA_Y_MODULOS_AICC/Paquetizacion de Servicios/imprimible.html",
        "guide_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/06_CLINICA_Y_MODULOS_AICC/Paquetizacion de Servicios/guia_humana.md",
        "img_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/06_CLINICA_Y_MODULOS_AICC/Paquetizacion de Servicios/Paquetizacion de Servicios.png",
        "lab_app_url": "PILARES/06_CLINICA_Y_MODULOS_AICC/Paquetizacion de Servicios/app.html",
        "lab_print_url": "PILARES/06_CLINICA_Y_MODULOS_AICC/Paquetizacion de Servicios/imprimible.html",
        "lab_guide_url": "PILARES/06_CLINICA_Y_MODULOS_AICC/Paquetizacion de Servicios/guia_humana.md",
        "lab_img_url": "PILARES/06_CLINICA_Y_MODULOS_AICC/Paquetizacion de Servicios/Paquetizacion de Servicios.png"
      }
    },
    "metrica_impacto": {
      "kpi": "Multiplicador de Ingreso Recurrente Mensual (MRR) y Valor Hora Efectivo",
      "meta": "Ticket promedio mensual 2.5x a 3x superior a la sesión suelta con agenda predecible"
    },
    "piso": 3,
    "piso_nombre": "Piso 3: Escalamiento, Maestría & Visión",
    "codigo_piso": "P3-09",
    "pilar_directorio": "06_CLINICA_Y_MODULOS_AICC",
    "carpeta_pilares": "Paquetizacion de Servicios"
  },
  {
    "id": "evaluacion_360_feedback",
    "nombre_oficial": "Evaluación 360° Personal y Profesional",
    "nombre_humano": "El Espejo de Feedback Honesto y Radical (La Cura para los Puntos Ciegos)",
    "pilar": "Pilar 2: Liderazgo & Equipos",
    "fase_madurez": "Fase 3: Dirección & Expansión",
    "triggers_diagnosticos": {
      "fuga_horas_min": 4,
      "sintomas": [
        "Renuncias o conflictos inesperados en el equipo",
        "Reuniones donde nadie opina por temor al juicio del líder",
        "Desconexión entre autopercepción y resultados reales",
        "Reactividad defensiva ante críticas"
      ],
      "variables_clave": [
        "autopercepcion",
        "puntos_ciegos",
        "seguridad_psicologica"
      ]
    },
    "red_flags": [
      "Creer que el equipo está satisfecho mientras crecen las quejas en pasillos.",
      "Justificar actitudes hirientes o impacientes bajo el argumento de la 'exigencia'."
    ],
    "pregunta_diagnostica": "¿Tienes el valor de pedirle a 3 personas de tu entorno que califiquen con honestidad tus fortalezas y fricciones reales, escuchando sin justificarte?",
    "carta_tactica_asociada": "Miopía del Marketing",
    "protocolo_paso_cero": "Preguntar a una persona de total confianza qué actitud tuya bajo estrés le genera más fricción y agradecer el dato sin discutir.",
    "microdosis_24h": "Calificar las 5 dimensiones en la microapp 360 y comparar autoevaluación contra la mirada externa.",
    "sinergias": [
      "ventana_johari_puntos_ciegos",
      "feedback_sbi_conversaciones"
    ],
    "contraindicaciones": [
      "crisis_autoestima_aguda"
    ],
    "doble_salida": {
      "componente_web": {
        "widget_id": "feedback-360-survey",
        "tipo_interaccion": "Generador de cuestionario de feedback 360 con reporte de radar",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "hoja_evaluacion_360",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha: Formulario de Evaluación 360°"
      },
      "plantilla_excel": "33_Evaluacion_360_Feedback.xlsx",
      "caja_canonica": {
        "pilar_directorio": "03_LIDERAZGO_Y_EQUIPO",
        "carpeta": "Evaluacion 360",
        "app_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/Evaluacion 360/app.html",
        "print_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/Evaluacion 360/imprimible.html",
        "guide_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/Evaluacion 360/guia_humana.md",
        "img_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/Evaluacion 360/Evaluacion 360.png",
        "lab_app_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/Evaluacion 360/app.html",
        "lab_print_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/Evaluacion 360/imprimible.html",
        "lab_guide_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/Evaluacion 360/guia_humana.md",
        "lab_img_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/Evaluacion 360/Evaluacion 360.png"
      }
    },
    "metrica_impacto": {
      "kpi": "Brecha de percepción promedio entre autoevaluación y evaluadores externos (<= 0.5 puntos)",
      "meta": "100% de líderes con al menos 1 conducta correctiva implementada al mes"
    },
    "piso": 3,
    "piso_nombre": "Piso 3: Dirección, Propósito & Escala",
    "codigo_piso": "P3-10",
    "pilar_directorio": "03_LIDERAZGO_Y_EQUIPO",
    "carpeta_pilares": "Evaluacion 360"
  },
  {
    "id": "matriz_9box_talento",
    "codigo_piso": "P3-11",
    "piso": 3,
    "piso_nombre": "Piso 3: Dirección, Propósito & Escala",
    "nombre_oficial": "Matriz 9-Box de Talento y Desempeño (Desempeño vs Potencial)",
    "nombre_humano": "El Mapa del Talento Humano y la Cura para la Culpa del Líder",
    "pilar": "Pilar 2: Liderazgo & Equipos",
    "pilar_directorio": "03_LIDERAZGO_Y_EQUIPO",
    "carpeta_pilares": "Matriz 9-Box",
    "fase_madurez": "Fase 3: Dirección & Expansión",
    "pregunta_diagnostica": "¿En tu equipo, sabes con total precisión quién es tu estrella de futuro, quién es tu motor silencioso y quién está drenando la energía del colectivo sin aportar?",
    "protocolo_paso_cero": "Ubicar a tu 'Caballo de Batalla' y enviarle un mensaje de agradecimiento genuino por su consistencia operativa.",
    "microdosis_24h": "Mapear a los colaboradores en el tablero 3x3 de la microapp 9-Box y revisar sus acciones asignadas.",
    "red_flags": [
      "Tratar a todo el equipo con igualitarismo ingenuo esperando idéntica velocidad.",
      "Perder al mejor talento por no ofrecerle proyectos de autonomía y expansión."
    ],
    "triggers_diagnosticos": {
      "fuga_horas_min": 5,
      "sintomas": [
        "Ascender al mejor técnico a líder y frustrarlo en el intento",
        "Sobrecargar siempre a la misma persona de confianza",
        "Tolerar bajo rendimiento por culpa o lástima",
        "Falta de planes de sucesión o reemplazo"
      ],
      "variables_clave": [
        "desempeno_actual",
        "potencial_futuro",
        "calibracion_talento"
      ]
    },
    "metrica_impacto": {
      "kpi": "100% de colaboradores con plan de desarrollo individual alineado a su cuadrante 9-Box",
      "meta": "Cero renuncias imprevistas de talento de alto desempeño y cero arrastre de bajo desempeño crónico"
    },
    "doble_salida": {
      "caja_canonica": {
        "pilar_directorio": "03_LIDERAZGO_Y_EQUIPO",
        "carpeta": "Matriz 9-Box",
        "app_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/Matriz 9-Box/app.html",
        "print_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/Matriz 9-Box/imprimible.html",
        "guide_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/Matriz 9-Box/guia_humana.md",
        "img_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/Matriz 9-Box/Matriz 9-Box.png",
        "lab_app_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/Matriz 9-Box/app.html",
        "lab_print_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/Matriz 9-Box/imprimible.html",
        "lab_guide_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/Matriz 9-Box/guia_humana.md",
        "lab_img_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/Matriz 9-Box/Matriz 9-Box.png"
      }
    }
  },
  {
    "id": "ocho_pasos_kotter_cambio",
    "nombre_oficial": "Los 8 Pasos de Kotter para la Gestión del Cambio",
    "nombre_humano": "La Ingeniería del Cambio Sostenible (Transformación Paso a Paso Sin Frustración)",
    "pilar": "Pilar 2: Liderazgo & Equipos",
    "fase_madurez": "Fase 3: Dirección & Expansión",
    "triggers_diagnosticos": {
      "fuga_horas_min": 6,
      "sintomas": [
        "Iniciativas de cambio que mueren al mes de anunciarse",
        "Resistencia pasiva en el equipo ('sí sí' en reunión, cero en acción)",
        "Agotamiento del líder empujando cambios en solitario",
        "Cantar victoria antes de tiempo volviendo a la vieja inercia"
      ],
      "variables_clave": [
        "sentido_urgencia",
        "coalicion_conductora",
        "victorias_tempranas"
      ]
    },
    "red_flags": [
      "Imponer cambios por decreto sin comunicar antes una urgencia clara.",
      "Intentar transformar todo el sistema a la vez sin asegurar un quick win en < 14 días."
    ],
    "pregunta_diagnostica": "¿Cuando intentas transformar un proceso, saltas a dar órdenes sin construir urgencia ni aliados, provocando que la inercia del sistema devore tu esfuerzo en 15 días?",
    "carta_tactica_asociada": "Sesgo de Planificación",
    "protocolo_paso_cero": "Definir un Quick Win medible que puedas implementar y celebrar con el equipo en menos de 48 horas.",
    "microdosis_24h": "Registrar el avance de los 8 pasos de tu transformación en la microapp de Kotter.",
    "sinergias": [
      "modelo_adkar_autotransformacion",
      "protocolo_paso_cero"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "kotter-change-stepper",
        "tipo_interaccion": "Ruta guiada de los 8 pasos de gestión del cambio con checks de avance",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "hoja_8_pasos_kotter",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha: Hoja de Ruta de Cambio en 8 Pasos de Kotter"
      },
      "plantilla_excel": "34_Kotter_Gestion_Cambio.xlsx",
      "caja_canonica": {
        "pilar_directorio": "03_LIDERAZGO_Y_EQUIPO",
        "carpeta": "Los 8 Pasos de Kotter",
        "app_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/Los 8 Pasos de Kotter/app.html",
        "print_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/Los 8 Pasos de Kotter/imprimible.html",
        "guide_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/Los 8 Pasos de Kotter/guia_humana.md",
        "img_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/03_LIDERAZGO_Y_EQUIPO/Los 8 Pasos de Kotter/Los 8 Pasos de Kotter.png",
        "lab_app_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/Los 8 Pasos de Kotter/app.html",
        "lab_print_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/Los 8 Pasos de Kotter/imprimible.html",
        "lab_guide_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/Los 8 Pasos de Kotter/guia_humana.md",
        "lab_img_url": "PILARES/03_LIDERAZGO_Y_EQUIPO/Los 8 Pasos de Kotter/Los 8 Pasos de Kotter.png"
      }
    },
    "metrica_impacto": {
      "kpi": "Tasa de adherencia sostenida a nuevas iniciativas organizacionales (>= 80% a los 90 días)",
      "meta": "Cero transformaciones abandonadas y adopción fluida de nuevas herramientas"
    },
    "piso": 3,
    "piso_nombre": "Piso 3: Dirección, Propósito & Escala",
    "codigo_piso": "P3-12",
    "pilar_directorio": "03_LIDERAZGO_Y_EQUIPO",
    "carpeta_pilares": "Los 8 Pasos de Kotter"
  },
  {
    "id": "analisis_pestel_macroentorno",
    "codigo_piso": "P3-13",
    "piso": 3,
    "piso_nombre": "Piso 3: Dirección, Propósito & Escala",
    "nombre_oficial": "Análisis PESTEL de Macroentorno (Político, Económico, Social, Tecnológico, Ecológico, Legal)",
    "nombre_humano": "La Cura para la Ceguera de Entorno (Aprender a Leer el Entorno para que no te Tome por Sorpresa)",
    "pilar": "Pilar 1: Estrategia & Dirección",
    "pilar_directorio": "01_ESTRATEGIA_Y_DIRECCION",
    "carpeta_pilares": "PESTEL",
    "fase_madurez": "Fase 3: Dirección & Expansión",
    "pregunta_diagnostica": "Cuando cambian las leyes, la economía o la tecnología, ¿te congelas en el desconcierto o tienes un radar activo para convertir las amenazas en oportunidades?",
    "protocolo_paso_cero": "Identificar 1 cambio tecnológico o normativo reciente y redactar en 1 línea cómo aprovecharlo esta semana.",
    "microdosis_24h": "Clasificar las 6 fuerzas PESTEL en la microapp interactiva y definir acciones de adaptación.",
    "red_flags": [
      "Quedarse atrapado en la queja de factores externos sin diseñar un plan B.",
      "No adaptar ofertas comerciales a los nuevos hábitos de consumo de los clientes."
    ],
    "triggers_diagnosticos": {
      "fuga_horas_min": 5,
      "sintomas": [
        "Angustia y parálisis ante cambios en la economía o leyes del país",
        "Obsolescencia tecnológica por ignorar herramientas emergentes",
        "Victimismo crónico de que 'el país no permite crecer'",
        "Multas o problemas normativos por desconocimiento"
      ],
      "variables_clave": [
        "ceguera_entorno",
        "macroentorno",
        "anticipacion_estrategica"
      ]
    },
    "metrica_impacto": {
      "kpi": "1 escaneo PESTEL trimestral realizado con plan de contingencia activo",
      "meta": "0 multas normativas y 100% de amenazas convertidas en ventajas competitivas"
    },
    "doble_salida": {
      "caja_canonica": {
        "pilar_directorio": "01_ESTRATEGIA_Y_DIRECCION",
        "carpeta": "PESTEL",
        "app_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/01_ESTRATEGIA_Y_DIRECCION/PESTEL/app.html",
        "print_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/01_ESTRATEGIA_Y_DIRECCION/PESTEL/imprimible.html",
        "guide_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/01_ESTRATEGIA_Y_DIRECCION/PESTEL/guia_humana.md",
        "img_url": "../../02_METODOLOGIA_Y_HERRAMIENTAS/PILARES/01_ESTRATEGIA_Y_DIRECCION/PESTEL/PESTEL.png",
        "lab_app_url": "PILARES/01_ESTRATEGIA_Y_DIRECCION/PESTEL/app.html",
        "lab_print_url": "PILARES/01_ESTRATEGIA_Y_DIRECCION/PESTEL/imprimible.html",
        "lab_guide_url": "PILARES/01_ESTRATEGIA_Y_DIRECCION/PESTEL/guia_humana.md",
        "lab_img_url": "PILARES/01_ESTRATEGIA_Y_DIRECCION/PESTEL/PESTEL.png"
      }
    }
  }
];
