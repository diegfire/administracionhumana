window.AICC_MODULOS_DB = [
  {
    "id": "seguridad_pin",
    "nombre_oficial": "Control de Acceso Seguro por PIN",
    "nombre_humano": "Caja Fuerte Personal y Confidencialidad",
    "pilar": "Pilar 1: Cimientos & Propósito",
    "fase_madurez": "Fase 1: Rescate & Oxígeno",
    "triggers_diagnosticos": {
      "score_minimo": 0,
      "fuga_horas_min": 0,
      "variables_clave": [
        "todos_los_clientes",
        "privacidad_datos",
        "seguridad_clinica"
      ]
    },
    "red_flags": [
      "Temor a que familiares o socios vean mis notas íntimas o balances",
      "Sensación de vulnerabilidad al compartir expedientes clínicos"
    ],
    "pregunta_diagnostica": "¿Sientes que tus metas y números están en un espacio 100% privado y protegido de miradas ajenas?",
    "carta_tactica_asociada": "Sobrecarga Cognitiva",
    "protocolo_paso_cero": "Ingresar un PIN de 4 dígitos memorable para desbloquear la sesión en 3 segundos.",
    "microdosis_24h": "Configurar el PIN personal de 4 dígitos en el primer acceso al portal web.",
    "sinergias": [
      "diagnostico_estructura",
      "hub_imprimibles_maestro"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "pin-modal-auth",
        "tipo_interaccion": "Teclado numérico táctil interactivo con Master PIN de Diego",
        "persistencia": "sessionStorage"
      },
      "imprimible_fisico": {
        "template_id": "portada_expediente_confidencial",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Carátula de Expediente y Acuerdos de Confidencialidad"
      },
      "plantilla_excel": ""
    },
    "metrica_impacto": {
      "kpi_nombre": "Sensación de Seguridad y Privacidad",
      "formula_o_criterio": "Puntuación de Confianza de 1 a 10 en apertura de datos personales",
      "tiempo_evaluacion": "Sesión 1"
    }
  },
  {
    "id": "circulo_dorado",
    "nombre_oficial": "Círculo Dorado (Why, How, What)",
    "nombre_humano": "El 'Para Qué' de tu Existencia y Trabajo Diario",
    "pilar": "Pilar 1: Cimientos & Propósito",
    "fase_madurez": "Fase 1: Rescate & Oxígeno",
    "triggers_diagnosticos": {
      "score_minimo": 6,
      "fuga_horas_min": 0,
      "variables_clave": [
        "falta_proposito",
        "piloto_automatico",
        "desmotivacion_lunes"
      ]
    },
    "red_flags": [
      "Siento que mi vida laboral está vacía, aunque me paguen bien",
      "No sé qué me apasiona realmente, solo sé lo que no quiero"
    ],
    "pregunta_diagnostica": "Si mañana tuvieras tu vida financiera 100% resuelta para siempre, ¿a qué te dedicarías gratis solo por el gusto de hacerlo?",
    "carta_tactica_asociada": "Miopía del Marketing",
    "protocolo_paso_cero": "Escribir en una sola frase qué huella positiva quieres dejar en una persona hoy.",
    "microdosis_24h": "Completar los 3 círculos concéntricos (Por qué, Cómo y Qué) en la ficha clínica.",
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
      "plantilla_excel": "12_Circulo_Dorado_Proposito.xlsx"
    },
    "metrica_impacto": {
      "kpi_nombre": "Claridad de Propósito Diario",
      "formula_o_criterio": "Nivel de conexión emocional con la actividad laboral (Escala 1 a 10)",
      "tiempo_evaluacion": "14 días"
    }
  },
  {
    "id": "diagnostico_estructura",
    "nombre_oficial": "Auditoría de Estructura 168 Horas & Rueda de la Vida",
    "nombre_humano": "Termómetro de Signos Vitales y Fuga de Horas",
    "pilar": "Pilar 1: Cimientos & Propósito",
    "fase_madurez": "Fase 1: Rescate & Oxígeno",
    "triggers_diagnosticos": {
      "score_minimo": 4,
      "fuga_horas_min": 10,
      "variables_clave": [
        "horas_fuga_altas",
        "sensacion_estancamiento",
        "abandono_sistemas"
      ]
    },
    "red_flags": [
      "Siento que trabajo 14 horas al día pero no avanzo en nada propio",
      "Tengo la sensación de que mi vida está desbalanceada y no sé por dónde empezar"
    ],
    "pregunta_diagnostica": "Si auditamos tus 168 horas de la última semana, ¿cuántas se fueron en apagado de incendios ajenos y cuántas en tus metas?",
    "carta_tactica_asociada": "Sobrecarga Cognitiva",
    "protocolo_paso_cero": "Calificar del 1 al 10 solo dos áreas: Nivel de Energía al despertar y Horas de Incendio de ayer.",
    "microdosis_24h": "Completar el Sondeo Maestro de 8 dimensiones en 10 minutos para obtener el Hero Diagnostic Box.",
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
      "plantilla_excel": "01_Auditoria_168_Horas.xlsx"
    },
    "metrica_impacto": {
      "kpi_nombre": "Visibilidad de Fuga Semanal",
      "formula_o_criterio": "Diferencial de Horas de Fuga detectadas vs. Horas Reclamadas",
      "tiempo_evaluacion": "7 días"
    }
  },
  {
    "id": "foda_came",
    "nombre_oficial": "Análisis FODA Dinámico & Matriz CAME Táctica",
    "nombre_humano": "Mapa Honesto de Luces y Sombras con Plan de Acción",
    "pilar": "Pilar 1: Cimientos & Propósito",
    "fase_madurez": "Fase 2: Estructura & Soberanía",
    "triggers_diagnosticos": {
      "score_minimo": 5,
      "fuga_horas_min": 0,
      "variables_clave": [
        "dudas_postulacion",
        "comparacion_redes",
        "subvaloracion_habilidades"
      ]
    },
    "red_flags": [
      "Me da pavor postular a nuevos proyectos porque siento que me falta preparación",
      "Sé cuáles son mis fallas pero no sé cómo convertirlas en acciones de cambio reales"
    ],
    "pregunta_diagnostica": "¿Cuáles son tus 3 superpoderes indiscutibles y qué escudo concreto tienes para que tus debilidades no te frenen?",
    "carta_tactica_asociada": "Sesgo de Costo Hundido",
    "protocolo_paso_cero": "Escribir 1 sola Fortaleza y 1 sola Acción CAME para Corregir una debilidad en una ficha adhesiva.",
    "microdosis_24h": "Rellenar la matriz de 4 cuadrantes (Corregir, Afrontar, Mantener, Explotar) en la pestaña del portal.",
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
      "plantilla_excel": "02_Matriz_FODA_CAME.xlsx"
    },
    "metrica_impacto": {
      "kpi_nombre": "Ratio de Acciones CAME Ejecutadas",
      "formula_o_criterio": "N° de acciones CAME implementadas / 4 acciones clave",
      "tiempo_evaluacion": "14 días"
    }
  },
  {
    "id": "triangulacion_roles",
    "nombre_oficial": "Triangulación y Compartimentación de Roles Multipotenciales",
    "nombre_humano": "Separación Limpia de Frentes (Cero Contaminación Cruzada)",
    "pilar": "Pilar 1: Cimientos & Propósito",
    "fase_madurez": "Fase 2: Estructura & Soberanía",
    "triggers_diagnosticos": {
      "score_minimo": 6,
      "fuga_horas_min": 15,
      "variables_clave": [
        "multipotencialidad",
        "estudio_mas_trabajo",
        "cuidado_familiar"
      ]
    },
    "red_flags": [
      "Tengo tres proyectos distintos y cuando estoy en uno me siento culpable por no avanzar en el otro",
      "Se me mezclan los mensajes de clientes con tareas de estudio y asuntos familiares"
    ],
    "pregunta_diagnostica": "¿Tienes un cerco invisible que proteja cada uno de tus frentes para que no se devoren entre sí?",
    "carta_tactica_asociada": "Costo de Oportunidad",
    "protocolo_paso_cero": "Definir un solo sombrero para el bloque de la tarde y no abrir archivos de otros frentes.",
    "microdosis_24h": "Crear las 3 tarjetas de frentes con sus acuerdos de dedicación semanal (horas máximas y límites).",
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
      "plantilla_excel": ""
    },
    "metrica_impacto": {
      "kpi_nombre": "Reducción de Contaminación Cruzada",
      "formula_o_criterio": "Horas semanales de trabajo enfocado por rol sin interrupción mutua",
      "tiempo_evaluacion": "14 días"
    }
  },
  {
    "id": "plan_estrategico_hitos",
    "nombre_oficial": "Plan Estratégico Trienal e Hitos Clave",
    "nombre_humano": "La Película de tus Próximos 3 Años",
    "pilar": "Pilar 1: Cimientos & Propósito",
    "fase_madurez": "Fase 3: Expansión & Negocio",
    "triggers_diagnosticos": {
      "score_minimo": 5,
      "fuga_horas_min": 0,
      "variables_clave": [
        "angustia_futuro",
        "decisiones_por_impulso",
        "falta_rumbo_mediano_plazo"
      ]
    },
    "red_flags": [
      "No sé dónde voy a estar en 3 años y me aterra pensarlo",
      "Tomo decisiones importantes por impulso y luego me arrepiento"
    ],
    "pregunta_diagnostica": "Si tu vida fuera una película de 3 años, ¿cómo se llamaría el siguiente capítulo y qué 3 hitos tendrían que cumplirse?",
    "carta_tactica_asociada": "Sesgo de Planificación",
    "protocolo_paso_cero": "Escribir los 3 objetivos principales para los próximos 12 meses en una tarjeta de escritorio.",
    "microdosis_24h": "Definir los hitos del Año 1, Año 2 y Año 3 en la matriz estratégica del portal.",
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
      "plantilla_excel": "13_Plan_Estrategico_Hitos.xlsx"
    },
    "metrica_impacto": {
      "kpi_nombre": "Cumplimiento de Hitos Trimestrales",
      "formula_o_criterio": "Hitos trimestrales alcanzados / Hitos planificados",
      "tiempo_evaluacion": "90 días"
    }
  },
  {
    "id": "metodo_smart_metas",
    "nombre_oficial": "Método SMART para Formulación de Metas",
    "nombre_humano": "Aprender a Pedirle Cosas Claras a la Vida",
    "pilar": "Pilar 1: Cimientos & Propósito",
    "fase_madurez": "Fase 2: Estructura & Soberanía",
    "triggers_diagnosticos": {
      "score_minimo": 6,
      "fuga_horas_min": 0,
      "variables_clave": [
        "metas_vagas",
        "frustracion_fin_de_ano",
        "falta_fechas_limite"
      ]
    },
    "red_flags": [
      "Mis metas son 'hacer más ejercicio', 'ahorrar dinero' o 'aprender inglés'",
      "Tengo la sensación de que nunca cumplo lo que me propongo"
    ],
    "pregunta_diagnostica": "Para esa meta que tienes en mente: ¿tienes una fecha de vencimiento exacta y un número que determine si lo lograste o no?",
    "carta_tactica_asociada": "Ley de Parkinson",
    "protocolo_paso_cero": "Tomar 1 meta vaga y agregarle un número y una fecha de vencimiento.",
    "microdosis_24h": "Redactar tus 3 metas principales del trimestre bajo el filtro Específico, Medible, Alcanzable, Relevante y Temporal.",
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
      "plantilla_excel": "14_Metas_SMART_Calibrador.xlsx"
    },
    "metrica_impacto": {
      "kpi_nombre": "Tasa de Metas SMART Logradas",
      "formula_o_criterio": "Metas alcanzadas en plazo / Metas formuladas",
      "tiempo_evaluacion": "60 días"
    }
  },
  {
    "id": "analisis_pestel_contingencia",
    "nombre_oficial": "Análisis PESTEL & Planes de Contingencia",
    "nombre_humano": "Leer el Entorno para que Nada te Tome por Sorpresa",
    "pilar": "Pilar 1: Cimientos & Propósito",
    "fase_madurez": "Fase 3: Expansión & Negocio",
    "triggers_diagnosticos": {
      "score_minimo": 5,
      "fuga_horas_min": 0,
      "variables_clave": [
        "vulnerabilidad_entorno",
        "ansiedad_economica_pais",
        "cambios_legales_tecnologicos"
      ]
    },
    "red_flags": [
      "El cambio de ley o la inflación me arruinaron el mes",
      "Siento que la tecnología me está superando y no sé qué hacer"
    ],
    "pregunta_diagnostica": "¿Qué cambios externos (tecnología, economía, leyes) están ocurriendo hoy y qué plan B tienes si empeoran?",
    "carta_tactica_asociada": "Costo de Oportunidad",
    "protocolo_paso_cero": "Escribir un Plan B de 3 pasos sencillos en caso de que falle tu fuente principal de ingresos.",
    "microdosis_24h": "Mapear los 6 factores PESTEL (Político, Económico, Social, Tecnológico, Ecológico, Legal) con sus riesgos y mitigaciones.",
    "sinergias": [
      "cinco_fuerzas_porter",
      "fondo_reserva_paz"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "pestel-radar-widget",
        "tipo_interaccion": "Radar de entorno interactivo con niveles de alerta y escudos de contingencia",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "hoja_analisis_pestel",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha: Radar PESTEL y Planes de Contingencia"
      },
      "plantilla_excel": "15_Analisis_PESTEL.xlsx"
    },
    "metrica_impacto": {
      "kpi_nombre": "Índice de Resiliencia ante Imprevistos",
      "formula_o_criterio": "Tiempo de respuesta y adaptación ante cambios externos (< 48 horas)",
      "tiempo_evaluacion": "90 días"
    }
  },
  {
    "id": "oceano_azul_diferencial",
    "nombre_oficial": "Estrategia del Océano Azul & Factor Diferencial",
    "nombre_humano": "Descubrir tu Propuesta Única y Apagar la Comparación",
    "pilar": "Pilar 1: Cimientos & Propósito",
    "fase_madurez": "Fase 3: Expansión & Negocio",
    "triggers_diagnosticos": {
      "score_minimo": 6,
      "fuga_horas_min": 0,
      "variables_clave": [
        "comparacion_obsesiva_redes",
        "guerra_precios",
        "falta_diferenciacion"
      ]
    },
    "red_flags": [
      "Hago lo mismo que todo el mundo pero intento cobrar más barato para que me elijan",
      "Siento envidia de lo que publican mis colegas en LinkedIn o Instagram"
    ],
    "pregunta_diagnostica": "¿Qué es aquello que tú haces con total naturalidad y disfrute que a los demás les cuesta muchísimo esfuerzo o dinero?",
    "carta_tactica_asociada": "Costo de Oportunidad",
    "protocolo_paso_cero": "Definir una combinación de 2 habilidades tuyas muy distintas que casi nadie en tu rubro comparta.",
    "microdosis_24h": "Diligenciar el Cuadro Estratégico de las 4 Acciones (Eliminar, Reducir, Incrementar, Crear).",
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
      "plantilla_excel": "16_Oceano_Azul_Curva_Valor.xlsx"
    },
    "metrica_impacto": {
      "kpi_nombre": "Tasa de Cierre Sin Competencia por Precio",
      "formula_o_criterio": "% de clientes ganados por valor único sin solicitar descuento",
      "tiempo_evaluacion": "60 días"
    }
  },
  {
    "id": "cinco_fuerzas_porter",
    "nombre_oficial": "Las 5 Fuerzas de Porter & Negociación de Poder",
    "nombre_humano": "Quién Tiene la Sartén por el Mango en tu Vida y Negocio",
    "pilar": "Pilar 1: Cimientos & Propósito",
    "fase_madurez": "Fase 3: Expansión & Negocio",
    "triggers_diagnosticos": {
      "score_minimo": 6,
      "fuga_horas_min": 0,
      "variables_clave": [
        "dependencia_cliente_unico",
        "sometimiento_tarifas_bajas"
      ]
    },
    "red_flags": [
      "Si mi cliente principal se va, mi economía quiebra",
      "Tengo que aceptar malos tratos o tarifas ridículas porque no tengo más opciones"
    ],
    "pregunta_diagnostica": "En tu economía personal, ¿el poder de decisión real lo tienes tú o dependes en un 80% de la buena voluntad de una sola persona?",
    "carta_tactica_asociada": "Miopía del Marketing",
    "protocolo_paso_cero": "Hacer una lista de 3 clientes potenciales alternativos y redactar el borrador de un mensaje de contacto.",
    "microdosis_24h": "Evaluar la matriz de poder frente a Clientes, Proveedores, Sustitutos, Nuevos Entrantes y Rivalidad.",
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
      "plantilla_excel": "17_Porter_5_Fuerzas.xlsx"
    },
    "metrica_impacto": {
      "kpi_nombre": "Diversificación de Fuentes de Ingreso",
      "formula_o_criterio": "Máximo % de ingreso dependiente de un solo cliente (< 35%)",
      "tiempo_evaluacion": "90 días"
    }
  },
  {
    "id": "matriz_eisenhower",
    "nombre_oficial": "Matriz de Eisenhower (Urgente vs Importante)",
    "nombre_humano": "Diferenciar el Incendio del Ensayo",
    "pilar": "Pilar 2: Tiempo & Ejecución",
    "fase_madurez": "Fase 1: Rescate & Oxígeno",
    "triggers_diagnosticos": {
      "score_minimo": 6,
      "fuga_horas_min": 10,
      "variables_clave": [
        "apagar_fuegos_diarios",
        "dificultad_priorizar",
        "postergacion_metas_propias"
      ]
    },
    "red_flags": [
      "Trabajo todo el día pero al final siento que no avancé en nada propio",
      "Todo es urgente, no sé por dónde empezar"
    ],
    "pregunta_diagnostica": "Si revisamos tus actividades de ayer, ¿cuántas hiciste por reacción a otros (incendios) y cuántas planificaste para tu futuro (ensayos)?",
    "carta_tactica_asociada": "Ley de Parkinson",
    "protocolo_paso_cero": "Clasificar los pendientes de hoy y descartar o delegar 1 sola tarea de 'No Importante'.",
    "microdosis_24h": "Distribuir las tareas en los 4 cuadrantes (Hacer, Planificar, Delegar, Eliminar) en el tablero interactivo.",
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
      "plantilla_excel": "04_Matriz_Eisenhower_Priorizacion.xlsx"
    },
    "metrica_impacto": {
      "kpi_nombre": "Reducción de Horas de Incendio",
      "formula_o_criterio": "Horas semanales en tareas no importantes/urgentes ajenas (Reducción >= 50%)",
      "tiempo_evaluacion": "14 días"
    }
  },
  {
    "id": "ley_pareto_8020",
    "nombre_oficial": "Principio de Pareto (La Regla del 80/20)",
    "nombre_humano": "Foco en la Crema de la Leche (El 20% que Mueve la Aguja)",
    "pilar": "Pilar 2: Tiempo & Ejecución",
    "fase_madurez": "Fase 2: Estructura & Soberanía",
    "triggers_diagnosticos": {
      "score_minimo": 6,
      "fuga_horas_min": 10,
      "variables_clave": [
        "mucho_esfuerzo_pocos_resultados",
        "demasiadas_microtareas",
        "dispersion_foco"
      ]
    },
    "red_flags": [
      "Hago mucho esfuerzo pero veo muy pocos resultados",
      "Tengo demasiados frentes abiertos y ninguno avanza"
    ],
    "pregunta_diagnostica": "¿Cuáles son las 2 actividades específicas que realizas que te traen el 80% de tu felicidad, dinero o tranquilidad?",
    "carta_tactica_asociada": "Ley de Pareto (80/20)",
    "protocolo_paso_cero": "Identificar 1 sola tarea de bajo valor y ponerla en 'Invernadero' (guardada temporalmente en una carpeta).",
    "microdosis_24h": "Listar todas las actividades semanales, ordenarlas por impacto y proteger el 20% vital.",
    "sinergias": [
      "matriz_eisenhower",
      "time_blocking_flexible"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "pareto-audit-box",
        "tipo_interaccion": "Filtro interactivo de actividades con cálculo automático del 20% de alto impacto",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "hoja_pareto_8020",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha: Auditoría Pareto 80/20 de Alto Impacto"
      },
      "plantilla_excel": "18_Pareto_8020_Impacto.xlsx"
    },
    "metrica_impacto": {
      "kpi_nombre": "Apalancamiento de Tiempo",
      "formula_o_criterio": "Horas dedicadas al 20% de alto valor / Total de horas trabajadas",
      "tiempo_evaluacion": "14 días"
    }
  },
  {
    "id": "batching_agrupacion_tareas",
    "nombre_oficial": "Batching (Procesamiento por Lotes)",
    "nombre_humano": "Agrupar Tareas Parecidas para no Freír tu Cerebro",
    "pilar": "Pilar 2: Tiempo & Ejecución",
    "fase_madurez": "Fase 1: Rescate & Oxígeno",
    "triggers_diagnosticos": {
      "score_minimo": 7,
      "fuga_horas_min": 10,
      "variables_clave": [
        "atencion_en_spray",
        "chequeo_compulsivo_celular",
        "fragmentacion_dia"
      ]
    },
    "red_flags": [
      "Siento que mi atención está 'en spray' o fragmentada",
      "Reviso el celular cada tres minutos de forma inconsciente"
    ],
    "pregunta_diagnostica": "¿Atiendes cada distracción en el segundo en que aparece, o agrupas tus tareas en bloques lógicos de trabajo?",
    "carta_tactica_asociada": "Task-Switching",
    "protocolo_paso_cero": "Definir 1 solo bloque de 30 minutos hoy para responder todos los mensajes y correos acumulados.",
    "microdosis_24h": "Configurar las ventanas de lote para correos, facturación y llamadas en el horario semanal.",
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
      "plantilla_excel": "19_Batching_Lotes_Tareas.xlsx"
    },
    "metrica_impacto": {
      "kpi_nombre": "Reducción de Interrupciones Voluntarias",
      "formula_o_criterio": "Aperturas de aplicaciones de mensajería por día (Reducción >= 60%)",
      "tiempo_evaluacion": "7 días"
    }
  },
  {
    "id": "mapeador_24h",
    "nombre_oficial": "Mapeador Semanal de Horarios 24H por Bloques",
    "nombre_humano": "El Tablero Visual de Soberanía del Tiempo",
    "pilar": "Pilar 2: Tiempo & Ejecución",
    "fase_madurez": "Fase 1: Rescate & Oxígeno",
    "triggers_diagnosticos": {
      "score_minimo": 5,
      "fuga_horas_min": 12,
      "variables_clave": [
        "caos_horarios",
        "sueno_irregular",
        "agenda_reactiva"
      ]
    },
    "red_flags": [
      "Mis días no tienen estructura y termino trabajando de noche o fines de semana",
      "No sé a qué hora empezar ni cuándo terminar mi jornada laboral"
    ],
    "pregunta_diagnostica": "Si miramos tu semana como un mosaico de 24 horas, ¿tus horas de descanso y concentración están blindadas en color?",
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
      "plantilla_excel": "03_Mapeador_Horarios_24H.xlsx"
    },
    "metrica_impacto": {
      "kpi_nombre": "Adherencia al Horario Soberano",
      "formula_o_criterio": "% de bloques cumplidos vs. programados (Meta >= 70%)",
      "tiempo_evaluacion": "7 días"
    }
  },
  {
    "id": "time_blocking_flexible",
    "nombre_oficial": "Time Blocking Flexible & Ventanas de Oro",
    "nombre_humano": "Ventanas de Oro de 45 a 90 Minutos Sin Interrupciones",
    "pilar": "Pilar 2: Tiempo & Ejecución",
    "fase_madurez": "Fase 2: Estructura & Soberanía",
    "triggers_diagnosticos": {
      "score_minimo": 6,
      "fuga_horas_min": 10,
      "variables_clave": [
        "interrupciones_frecuentes",
        "falta_foco_profundo"
      ]
    },
    "red_flags": [
      "Cualquier mensaje me saca del trabajo importante y tardo 20 minutos en retomar",
      "No encuentro momentos continuos para redactar, diseñar o planificar"
    ],
    "pregunta_diagnostica": "¿Tienes al menos un bloque de 60 minutos al día donde esté prohibido responder llamadas o WhatsApp?",
    "carta_tactica_asociada": "Ley de Parkinson",
    "protocolo_paso_cero": "Poner el celular en modo avión durante 20 minutos de foco en 1 sola tarea.",
    "microdosis_24h": "Agendar 1 bloque dorado de 90 minutos en el calendario para mañana por la mañana.",
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
      "plantilla_excel": "05_Time_Blocking_Planificador.xlsx"
    },
    "metrica_impacto": {
      "kpi_nombre": "Horas de Foco Profundo Semanales",
      "formula_o_criterio": "Total de horas de ventanas de oro completadas sin interrupción",
      "tiempo_evaluacion": "14 días"
    }
  },
  {
    "id": "tecnica_pomodoro_foco",
    "nombre_oficial": "Técnica Pomodoro (Microdosis de Concentración)",
    "nombre_humano": "Entrenar a tu Mente en Bloques de 25 Minutos",
    "pilar": "Pilar 2: Tiempo & Ejecución",
    "fase_madurez": "Fase 1: Rescate & Oxígeno",
    "triggers_diagnosticos": {
      "score_minimo": 7,
      "fuga_horas_min": 10,
      "variables_clave": [
        "procrastinacion_redes",
        "dificultad_foco_sostenido",
        "postergacion_tareas_densas"
      ]
    },
    "red_flags": [
      "Me cuesta concentrarme más de 10 minutos seguidos sin abrir otra pestaña",
      "Pospongo las tareas difíciles porque me parecen un cerro imposible de escalar"
    ],
    "pregunta_diagnostica": "¿Eres capaz de apagar tu teléfono y trabajar concentrado en una sola cosa por 25 minutos sin interrupción?",
    "carta_tactica_asociada": "Parálisis por Análisis",
    "protocolo_paso_cero": "Poner un temporizador de 15 minutos en el celular y avanzar en 1 solo pendiente.",
    "microdosis_24h": "Completar 2 ciclos de 25 minutos con 5 minutos de pausa activa entre ellos.",
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
      "plantilla_excel": "20_Pomodoro_Tracker.xlsx"
    },
    "metrica_impacto": {
      "kpi_nombre": "Ciclos Pomodoro Completados",
      "formula_o_criterio": "Ciclos de 25 min completados al día (Meta: 4 a 6 ciclos)",
      "tiempo_evaluacion": "7 días"
    }
  },
  {
    "id": "gtd_vaciado_mental",
    "nombre_oficial": "Getting Things Done (GTD - Fase Capturar y Procesar)",
    "nombre_humano": "El Cubo de Basura Mental y Vaciado de RAM Cerebral",
    "pilar": "Pilar 2: Tiempo & Ejecución",
    "fase_madurez": "Fase 1: Rescate & Oxígeno",
    "triggers_diagnosticos": {
      "score_minimo": 7,
      "fuga_horas_min": 0,
      "variables_clave": [
        "insomnio_ansiedad_nocturna",
        "bucles_abiertos",
        "miedo_olvido_pendientes"
      ]
    },
    "red_flags": [
      "Tengo miedo constante de que se me olvide algo importante",
      "Mi mente se siente como un navegador con 50 pestañas abiertas al mismo tiempo"
    ],
    "pregunta_diagnostica": "¿Confías en tu memoria para recordar tus pendientes, o tienes un sistema externo 100% confiable donde guardas todo?",
    "carta_tactica_asociada": "Efecto Zeigarnik",
    "protocolo_paso_cero": "Tomar una hoja en blanco y anotar 5 pendientes sueltos para sacarlos de la cabeza.",
    "microdosis_24h": "Hacer un vaciado mental completo de 15 minutos y clasificar entre Acción (<2 min), Proyecto o Archivo.",
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
      "plantilla_excel": "21_GTD_Bandeja_Entrada.xlsx"
    },
    "metrica_impacto": {
      "kpi_nombre": "Nivel de Saturación de RAM Mental",
      "formula_o_criterio": "Puntuación de alivio mental post-vaciado (Escala 1 a 10)",
      "tiempo_evaluacion": "Inmediato"
    }
  },
  {
    "id": "kanban_gtd_wip2",
    "nombre_oficial": "Kanban Minimalista con Límite Máximo 2 Tareas",
    "nombre_humano": "El Embudo de Sola-Ejecución (Máximo 2 Tareas Activas)",
    "pilar": "Pilar 2: Tiempo & Ejecución",
    "fase_madurez": "Fase 1: Rescate & Oxígeno",
    "triggers_diagnosticos": {
      "score_minimo": 6,
      "fuga_horas_min": 10,
      "variables_clave": [
        "multitarea_paralizante",
        "frentes_abiertos_sin_cerrar",
        "procrastinacion"
      ]
    },
    "red_flags": [
      "Tengo 10 frentes abiertos al mismo tiempo y no termino ninguno",
      "Paso de una tarea a otra cada 5 minutos y termino exhausto sin resultados"
    ],
    "pregunta_diagnostica": "¿Cuántas tareas tienes abiertas en este instante y cuál es la ÚNICA que vas a cerrar antes de las 14:00?",
    "carta_tactica_asociada": "Task-Switching",
    "protocolo_paso_cero": "Mover 1 sola tarjeta a 'En Curso' y esconder todas las demás bajo una hoja.",
    "microdosis_24h": "Cargar 3 tareas en 'Hoy' y comprometerse a nunca tener más de 2 en 'En Curso'.",
    "sinergias": [
      "protocolo_paso_cero",
      "time_blocking_flexible"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "kanban-wip2-board",
        "tipo_interaccion": "Tablero drag-and-drop con límite estricto Máximo 2 Tareas y alertas visuales",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "kanban_flujo_tres_vias",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha 05: Tablero Kanban de Pared Tres Vías"
      },
      "plantilla_excel": "04_Tablero_Kanban_Tareas.xlsx"
    },
    "metrica_impacto": {
      "kpi_nombre": "Tasa de Finalización de Tareas (Throughput)",
      "formula_o_criterio": "N° de tareas movidas a 'Completado' por semana",
      "tiempo_evaluacion": "7 días"
    }
  },
  {
    "id": "protocolo_paso_cero",
    "nombre_oficial": "Protocolo Paso Cero (Micro-compromisos de 5 Minutos)",
    "nombre_humano": "El Antídoto a la Inercia (Cumplir el 70% es 100% de Éxito)",
    "pilar": "Pilar 2: Tiempo & Ejecución",
    "fase_madurez": "Fase 1: Rescate & Oxígeno",
    "triggers_diagnosticos": {
      "score_minimo": 7,
      "fuga_horas_min": 8,
      "variables_clave": [
        "procrastinacion_ansiosa",
        "paralisis_por_analisis",
        "fatiga_extrema"
      ]
    },
    "red_flags": [
      "Pospongo las tareas difíciles porque me parecen un cerro imposible de escalar",
      "Siento culpa por no hacer todo perfecto y termino sin hacer nada"
    ],
    "pregunta_diagnostica": "Si solo tuvieras 5 minutos de energía hoy, ¿cuál es la acción diminuta que destrabaría ese pendiente?",
    "carta_tactica_asociada": "Parálisis por Análisis",
    "protocolo_paso_cero": "Abrir el documento y escribir solo el título o la primera línea. Parar de inmediato si se desea.",
    "microdosis_24h": "Elegir la tarea más postergada y trabajar en ella con reloj por exactamente 5 minutos.",
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
      "plantilla_excel": ""
    },
    "metrica_impacto": {
      "kpi_nombre": "Días de Racha Sin Freno Cero",
      "formula_o_criterio": "Días consecutivos completando al menos 1 paso cero",
      "tiempo_evaluacion": "14 días"
    }
  },
  {
    "id": "inventario_resultados_impacto",
    "nombre_oficial": "Inventario de Resultados (Métrica Neta vs Esfuerzo)",
    "nombre_humano": "Una Mirada Fría a tu Impacto Real",
    "pilar": "Pilar 3: Orden Mental & Operaciones",
    "fase_madurez": "Fase 2: Estructura & Soberanía",
    "triggers_diagnosticos": {
      "score_minimo": 6,
      "fuga_horas_min": 0,
      "variables_clave": [
        "estar_ocupado_vs_productivo",
        "cuenta_bancaria_estancada"
      ]
    },
    "red_flags": [
      "Hice de todo esta semana pero sigo en el mismo lugar",
      "Confundo el estar muy ocupado con estar siendo productivo"
    ],
    "pregunta_diagnostica": "Al final de tu día, ¿mides el esfuerzo (cuántas horas sudaste) o el resultado neto (qué valor real creaste)?",
    "carta_tactica_asociada": "Sesgo de Costo Hundido",
    "protocolo_paso_cero": "Anotar la única meta concreta que alcanzaste ayer y que realmente aportó valor futuro.",
    "microdosis_24h": "Auditar las últimas 5 tareas completadas y asignarles valor: Alto Impacto, Mantenimiento o Desperdicio.",
    "sinergias": [
      "matriz_eisenhower",
      "ley_pareto_8020"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "results-inventory-ledger",
        "tipo_interaccion": "Libro de registro de resultados diarios con cálculo de valor neto",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "hoja_inventario_resultados",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha: Inventario de Resultados de Impacto"
      },
      "plantilla_excel": "06_Inventario_Resultados_Sesiones.xlsx"
    },
    "metrica_impacto": {
      "kpi_nombre": "Ratio de Valor Neto Creado",
      "formula_o_criterio": "Horas de alto impacto / Horas totales de trabajo",
      "tiempo_evaluacion": "14 días"
    }
  },
  {
    "id": "cinco_porques_raiz",
    "nombre_oficial": "Los 5 Porqués (Análisis de Causa Raíz)",
    "nombre_humano": "Ir a la Raíz de lo que te Pasa, Sin Anestesia",
    "pilar": "Pilar 3: Orden Mental & Operaciones",
    "fase_madurez": "Fase 2: Estructura & Soberanía",
    "triggers_diagnosticos": {
      "score_minimo": 6,
      "fuga_horas_min": 0,
      "variables_clave": [
        "problemas_recurrentes",
        "parches_temporales",
        "recaidas_financieras_emocionales"
      ]
    },
    "red_flags": [
      "Siempre me peleo por lo mismo o caigo en el mismo error",
      "Pongo parches temporales a problemas recurrentes"
    ],
    "pregunta_diagnostica": "Cuando algo sale mal en tu rutina, ¿te conformas con la primera explicación superficial o indagas 5 niveles hasta la raíz?",
    "carta_tactica_asociada": "Ley de Pareto (80/20)",
    "protocolo_paso_cero": "Escribir un problema recurrente y preguntarte 1 nivel de '¿Por qué?' más profundo.",
    "microdosis_24h": "Diligenciar la escalera de los 5 Porqués hasta hallar la causa raíz sistémica.",
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
      "plantilla_excel": "22_Cinco_Porques_Causa_Raiz.xlsx"
    },
    "metrica_impacto": {
      "kpi_nombre": "Tasa de No Recurrencia del Problema",
      "formula_o_criterio": "Problemas raíz resueltos que no vuelven a aparecer en 30 días",
      "tiempo_evaluacion": "30 días"
    }
  },
  {
    "id": "diagrama_ishikawa_sistema",
    "nombre_oficial": "Diagrama de Ishikawa (Causa-Efecto / Espina de Pescado)",
    "nombre_humano": "Desmenuzar un Problema en las Piezas de tu Sistema",
    "pilar": "Pilar 3: Orden Mental & Operaciones",
    "fase_madurez": "Fase 2: Estructura & Soberanía",
    "triggers_diagnosticos": {
      "score_minimo": 6,
      "fuga_horas_min": 0,
      "variables_clave": [
        "autoculpabilidad_excesiva",
        "sensacion_desastre_generalizado"
      ]
    },
    "red_flags": [
      "Es que no sirvo para esto, soy un desastre",
      "Todo en mi vida falla al mismo tiempo"
    ],
    "pregunta_diagnostica": "Cuando cometes un error, ¿te tratas como el culpable indiscutible o investigas con compasión qué variables del entorno fallaron?",
    "carta_tactica_asociada": "Ley de Pareto (80/20)",
    "protocolo_paso_cero": "Separar un error en 2 ramas: ¿Faltó método o falló el entorno físico?",
    "microdosis_24h": "Dibujar la espina de pescado analizando: Hábitos, Entorno, Herramientas y Recursos.",
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
      "plantilla_excel": "23_Diagrama_Ishikawa.xlsx"
    },
    "metrica_impacto": {
      "kpi_nombre": "Reducción de Autoculpa / Fricción Sistémica",
      "formula_o_criterio": "Ajustes realizados en el entorno físico/digital para prevenir fallos",
      "tiempo_evaluacion": "14 días"
    }
  },
  {
    "id": "mind_mapping_visual",
    "nombre_oficial": "Mind Mapping (Mapas Mentales Radiales)",
    "nombre_humano": "Dibujar tus Ideas en un Mapa Visual para Calmarlas",
    "pilar": "Pilar 3: Orden Mental & Operaciones",
    "fase_madurez": "Fase 1: Rescate & Oxígeno",
    "triggers_diagnosticos": {
      "score_minimo": 6,
      "fuga_horas_min": 0,
      "variables_clave": [
        "sobrecarga_informacion",
        "paralisis_proyectos_complejos"
      ]
    },
    "red_flags": [
      "Es demasiada información, mi cabeza va a explotar",
      "Tengo la idea en la cabeza pero me cuesta explicarla"
    ],
    "pregunta_diagnostica": "¿Puedes dibujar tu proyecto en una sola hoja usando ramificaciones visuales en lugar de escribir párrafos infinitos?",
    "carta_tactica_asociada": "Sobrecarga Cognitiva",
    "protocolo_paso_cero": "Dibujar un círculo en el centro de un papel horizontal con el nombre del proyecto.",
    "microdosis_24h": "Trazar 4 ramas principales con los primeros pasos tangibles.",
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
      "plantilla_excel": ""
    },
    "metrica_impacto": {
      "kpi_nombre": "Claridad de Estructura de Proyecto",
      "formula_o_criterio": "Tiempo para explicar el proyecto a un tercero (< 3 minutos)",
      "tiempo_evaluacion": "7 días"
    }
  },
  {
    "id": "metodologia_5s_espacio",
    "nombre_oficial": "Metodología 5S (Seiri, Seiton, Seiso, Seiketsu, Shitsuke)",
    "nombre_humano": "Ordenar tu Espacio Físico para Calmar tu Mente",
    "pilar": "Pilar 3: Orden Mental & Operaciones",
    "fase_madurez": "Fase 1: Rescate & Oxígeno",
    "triggers_diagnosticos": {
      "score_minimo": 7,
      "fuga_horas_min": 6,
      "variables_clave": [
        "escritorio_caotico",
        "perdida_tiempo_buscando_cosas",
        "verguenza_espacio_trabajo"
      ]
    },
    "red_flags": [
      "Mi escritorio o mi casa son un campo de batalla",
      "Me da vergüenza mostrar mi espacio de trabajo"
    ],
    "pregunta_diagnostica": "¿Cualquier persona externa podría encontrar un archivo en tu computadora o un objeto en tu oficina en menos de 30 segundos?",
    "carta_tactica_asociada": "Sobrecarga Cognitiva",
    "protocolo_paso_cero": "Despejar por completo la superficie de tu escritorio, dejando solo computador y libreta.",
    "microdosis_24h": "Ejecutar las 3 primeras S: Clasificar (botar lo que no sirve), Ordenar (un lugar para cada cosa) y Limpiar.",
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
      "plantilla_excel": "24_Metodologia_5S_Auditoria.xlsx"
    },
    "metrica_impacto": {
      "kpi_nombre": "Tiempo de Recuperación de Objetos/Archivos",
      "formula_o_criterio": "Tiempo promedio para ubicar cualquier recurso (< 30 segundos)",
      "tiempo_evaluacion": "7 días"
    }
  },
  {
    "id": "kaizen_mejora_continua",
    "nombre_oficial": "Filosofía Kaizen (Micro-Mejoras del 1%)",
    "nombre_humano": "El Poder de Mejorar un 1% Cada Día",
    "pilar": "Pilar 3: Orden Mental & Operaciones",
    "fase_madurez": "Fase 1: Rescate & Oxígeno",
    "triggers_diagnosticos": {
      "score_minimo": 6,
      "fuga_horas_min": 0,
      "variables_clave": [
        "abandono_habitos_drasticos",
        "frustracion_cambio"
      ]
    },
    "red_flags": [
      "Empiezo con todo pero a los 3 días abandono por agotamiento",
      "Es muy difícil cambiar mi estilo de vida"
    ],
    "pregunta_diagnostica": "¿Estás intentando dar un salto imposible o estás comprometido con mejorar un micro-detalle de tu rutina cada día?",
    "carta_tactica_asociada": "Parálisis por Análisis",
    "protocolo_paso_cero": "Definir una micro-mejora del 1% para hoy (ej. tomar 1 vaso de agua extra o leer 1 página).",
    "microdosis_24h": "Registrar la micro-mejora del día en la bitácora Kaizen.",
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
      "plantilla_excel": "25_Kaizen_Mejora_Continua.xlsx"
    },
    "metrica_impacto": {
      "kpi_nombre": "Racha de Consistencia de Hábitos",
      "formula_o_criterio": "Días consecutivos con micro-mejora del 1% aplicada",
      "tiempo_evaluacion": "30 días"
    }
  },
  {
    "id": "design_thinking_prototipado",
    "nombre_oficial": "Design Thinking (Prototipado Rápido y Validación)",
    "nombre_humano": "Prototipado y Experimentación de Vida de Bajo Costo",
    "pilar": "Pilar 3: Orden Mental & Operaciones",
    "fase_madurez": "Fase 3: Expansión & Negocio",
    "triggers_diagnosticos": {
      "score_minimo": 6,
      "fuga_horas_min": 0,
      "variables_clave": [
        "miedo_lanzamiento",
        "decisiones_drasticas_riesgosas"
      ]
    },
    "red_flags": [
      "Voy a renunciar para emprender (sin validar la idea con clientes reales)",
      "Invertí todos mis ahorros en un proyecto que al final odié"
    ],
    "pregunta_diagnostica": "Antes de dar el gran salto, ¿has creado un pequeño experimento de bajo costo para validar si de verdad disfrutas y vendes esa idea?",
    "carta_tactica_asociada": "Parálisis por Análisis",
    "protocolo_paso_cero": "Conversar 15 minutos con alguien que ya viva de lo que tú deseas emprender.",
    "microdosis_24h": "Diseñar un experimento mínimo viable (landing page o mensaje de preventa) para testear demanda.",
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
      "plantilla_excel": "26_Design_Thinking_Prototipado.xlsx"
    },
    "metrica_impacto": {
      "kpi_nombre": "Velocidad de Validación de Hipótesis",
      "formula_o_criterio": "Días requeridos para validar una oferta con dinero real (< 7 días)",
      "tiempo_evaluacion": "14 días"
    }
  },
  {
    "id": "principio_mece_categorizacion",
    "nombre_oficial": "Principio MECE (Mutuamente Excluyente, Colectivamente Exhaustivo)",
    "nombre_humano": "Categorías Mentales Limpias (Sin Fricción ni Nudos)",
    "pilar": "Pilar 3: Orden Mental & Operaciones",
    "fase_madurez": "Fase 2: Estructura & Soberanía",
    "triggers_diagnosticos": {
      "score_minimo": 6,
      "fuga_horas_min": 0,
      "variables_clave": [
        "confusion_areas_vida",
        "problemas_interconectados_abrumadores"
      ]
    },
    "red_flags": [
      "Todo en mi vida es un nudo ciego donde se mezcla el dinero, el amor y el trabajo",
      "Siento que me abrumo porque todo me duele al mismo tiempo"
    ],
    "pregunta_diagnostica": "¿Eres capaz de separar tus preocupaciones en compartimentos estancos y limpios para abordarlos de uno en uno?",
    "carta_tactica_asociada": "Sobrecarga Cognitiva",
    "protocolo_paso_cero": "Dividir los pendientes de hoy en 3 categorías estrictas sin solapamiento.",
    "microdosis_24h": "Revisar la estructura de carpetas y proyectos bajo el filtro MECE.",
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
      "plantilla_excel": ""
    },
    "metrica_impacto": {
      "kpi_nombre": "Claridad de Categorización",
      "formula_o_criterio": "0 tareas huérfanas o duplicadas entre áreas de vida",
      "tiempo_evaluacion": "14 días"
    }
  },
  {
    "id": "scamper_rediseno_rutina",
    "nombre_oficial": "Técnica SCAMPER de Rediseño Creativo",
    "nombre_humano": "Rediseño Creativo de tu Rutina y Oferta",
    "pilar": "Pilar 3: Orden Mental & Operaciones",
    "fase_madurez": "Fase 2: Estructura & Soberanía",
    "triggers_diagnosticos": {
      "score_minimo": 5,
      "fuga_horas_min": 0,
      "variables_clave": [
        "monotonia_rutina",
        "aburrimiento_profesional",
        "ganas_patear_tablero"
      ]
    },
    "red_flags": [
      "Mis días son una copia exacta del anterior y me siento estancado",
      "No sé cómo salir de esta rutina gris"
    ],
    "pregunta_diagnostica": "En lugar de destruir tu rutina actual, ¿has probado Sustituir, Combinar o Modificar elementos sencillos para refrescarla?",
    "carta_tactica_asociada": "Sesgo de Costo Hundido",
    "protocolo_paso_cero": "Cambiar tu desayuno de hoy y modificar la música que escuchas al transportarte.",
    "microdosis_24h": "Aplicar las 7 preguntas SCAMPER a tu oferta comercial o rutina de trabajo.",
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
      "plantilla_excel": "27_SCAMPER_Innovacion.xlsx"
    },
    "metrica_impacto": {
      "kpi_nombre": "Nivel de Entusiasmo y Novedad",
      "formula_o_criterio": "Innovaciones implementadas en servicios o rutina personal",
      "tiempo_evaluacion": "30 días"
    }
  },
  {
    "id": "dnc_personal_aprendizaje",
    "nombre_oficial": "DNC Personal (Diagnóstico de Necesidades de Capacitación)",
    "nombre_humano": "Diagnóstico de tus Vacíos Reales de Aprendizaje",
    "pilar": "Pilar 3: Orden Mental & Operaciones",
    "fase_madurez": "Fase 2: Estructura & Soberanía",
    "triggers_diagnosticos": {
      "score_minimo": 6,
      "fuga_horas_min": 0,
      "variables_clave": [
        "ansiedad_intelectual",
        "acumulacion_cursos_sin_terminar",
        "sindrome_impostor"
      ]
    },
    "red_flags": [
      "Compro cursos online que nunca termino por falta de tiempo",
      "Siento que necesito estudiar más antes de poder lanzar mi proyecto"
    ],
    "pregunta_diagnostica": "¿Estás estudiando por ansiedad o tienes identificada la habilidad exacta que necesitas desarrollar para resolver tu principal dolor de hoy?",
    "carta_tactica_asociada": "Costo de Oportunidad",
    "protocolo_paso_cero": "Identificar el obstáculo técnico que te traba hoy y ver solo 1 video de 10 minutos enfocado en eso.",
    "microdosis_24h": "Completar la matriz DNC: Habilidad Requerida vs. Brecha Actual vs. Acción Quirúrgica.",
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
      "plantilla_excel": "28_DNC_Diagnostico_Habilidades.xlsx"
    },
    "metrica_impacto": {
      "kpi_nombre": "Ratio de Aplicación de Nuevas Habilidades",
      "formula_o_criterio": "Cursos terminados con aplicación práctica directa en < 14 días",
      "tiempo_evaluacion": "60 días"
    }
  },
  {
    "id": "inventario_sesiones_results",
    "nombre_oficial": "Inventario de Sesiones, Compromisos & Impacto",
    "nombre_humano": "La Bitácora Auditable de Vuelo y Evolución",
    "pilar": "Pilar 3: Orden Mental & Operaciones",
    "fase_madurez": "Fase 1: Rescate & Oxígeno",
    "triggers_diagnosticos": {
      "score_minimo": 0,
      "fuga_horas_min": 0,
      "variables_clave": [
        "todos_los_clientes",
        "seguimiento_acuerdos",
        "medicion_roi"
      ]
    },
    "red_flags": [
      "Siento que voy a sesiones de consultoría o terapia pero se me olvidan los acuerdos a la semana siguiente",
      "No sé si el proceso me está generando un impacto concreto en mi vida o bolsillo"
    ],
    "pregunta_diagnostica": "¿Tienes un registro claro de qué acordamos en la sesión anterior y qué métrica mejoró desde entonces?",
    "carta_tactica_asociada": "Sesgo de Planificación",
    "protocolo_paso_cero": "Marcar con check el único micro-compromiso de la semana.",
    "microdosis_24h": "Revisar el tab 'Sesiones' del portal al terminar la sesión con Diego y validar los 3 compromisos.",
    "sinergias": [
      "hub_imprimibles_maestro",
      "whatsapp_directo"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "tab-sesiones-timeline",
        "tipo_interaccion": "Timeline interactivo de sesiones con acordeón, diagnósticos y checkboxes de compromisos",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "ficha_inventario_sesion_resultados",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha 08: Hoja de Acuerdos y Próximo Vuelo"
      },
      "plantilla_excel": "06_Inventario_Resultados_Sesiones.xlsx"
    },
    "metrica_impacto": {
      "kpi_nombre": "Tasa de Adherencia a Compromisos de Sesión",
      "formula_o_criterio": "Compromisos cumplidos / Compromisos pactados (Meta >= 80%)",
      "tiempo_evaluacion": "Mensual"
    }
  },
  {
    "id": "hub_imprimibles_maestro",
    "nombre_oficial": "Hub Maestro Unificado de Imprimibles Físicos",
    "nombre_humano": "El Cuadernillo Físico Maestro de 1 Clic (Cero Dispersión)",
    "pilar": "Pilar 3: Orden Mental & Operaciones",
    "fase_madurez": "Fase 1: Rescate & Oxígeno",
    "triggers_diagnosticos": {
      "score_minimo": 0,
      "fuga_horas_min": 0,
      "variables_clave": [
        "todos_los_clientes",
        "preferencia_papel",
        "anti_fatiga_digital"
      ]
    },
    "red_flags": [
      "Tengo 15 archivos PDF distintos y nunca imprimo nada porque me da lata abrirlos uno a uno",
      "La pantalla del computador me cansa la vista y necesito rayar en papel"
    ],
    "pregunta_diagnostica": "¿Tienes todas tus herramientas físicas unificadas en un solo documento para imprimir en 1 clic?",
    "carta_tactica_asociada": "Sobrecarga Cognitiva",
    "protocolo_paso_cero": "Imprimir 1 sola hoja de la herramienta que vas a usar hoy.",
    "microdosis_24h": "Abrir el Hub_Imprimibles_<Cliente>.html e imprimir el cuadernillo completo de 9 páginas.",
    "sinergias": [
      "cero_pantallas_celular",
      "inventario_cero_culpa"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "hub-print-controller",
        "tipo_interaccion": "Barra de control no-print con selector desplegable de hoja única y botón Cuadernillo Completo",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "hub_imprimibles_maestro_html",
        "formato": "Cuadernillo Completo (9 Hojas Carta/A4 con saltos de página exactos)",
        "seccion_hub": "Hub Maestro Completo"
      },
      "plantilla_excel": ""
    },
    "metrica_impacto": {
      "kpi_nombre": "Eficiencia de Impresión y Uso Análogo",
      "formula_o_criterio": "Tiempo de acceso a plantillas físicas (< 15 segundos)",
      "tiempo_evaluacion": "Inmediato"
    }
  },
  {
    "id": "whatsapp_directo",
    "nombre_oficial": "Widget de Comunicación Contextual por WhatsApp",
    "nombre_humano": "Línea Directa con Diego con Detección de Contexto",
    "pilar": "Pilar 3: Orden Mental & Operaciones",
    "fase_madurez": "Fase 1: Rescate & Oxígeno",
    "triggers_diagnosticos": {
      "score_minimo": 0,
      "fuga_horas_min": 0,
      "variables_clave": [
        "todos_los_clientes",
        "soporte_continuo"
      ]
    },
    "red_flags": [
      "Me trabo a mitad de semana y me da pudor consultar o no sé cómo explicar en qué pantalla estoy"
    ],
    "pregunta_diagnostica": "Cuando tienes una duda en medio de tu trabajo, ¿puedes consultar a tu consultor con un solo toque?",
    "carta_tactica_asociada": "Efecto Zeigarnik",
    "protocolo_paso_cero": "Tocar el botón de WhatsApp flotante para enviar la consulta precargada con la pestaña activa.",
    "microdosis_24h": "Hacer una prueba de envío desde el portal web en PC o móvil.",
    "sinergias": [
      "inventario_sesiones_results"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "whatsapp-floating-widget",
        "tipo_interaccion": "Botón flotante con pre-llenado de mensaje contextual según el tab abierto",
        "persistencia": "sessionStorage"
      },
      "imprimible_fisico": {
        "template_id": "tarjeta_contacto_directo",
        "formato": "Pie de página en todas las hojas del Hub",
        "seccion_hub": "Pie de página unificado"
      },
      "plantilla_excel": ""
    },
    "metrica_impacto": {
      "kpi_nombre": "Velocidad de Desbloqueo Operativo",
      "formula_o_criterio": "Tiempo de resolución de trabas (< 24 horas)",
      "tiempo_evaluacion": "Continuo"
    }
  },
  {
    "id": "feedback_sbi_conversaciones",
    "nombre_oficial": "Feedback SBI (Situación, Comportamiento, Impacto)",
    "nombre_humano": "Decir las Cosas Claras Basados en Hechos, no en Juicios",
    "pilar": "Pilar 4: Finanzas & Negocio",
    "fase_madurez": "Fase 2: Estructura & Soberanía",
    "triggers_diagnosticos": {
      "score_minimo": 6,
      "fuga_horas_min": 0,
      "variables_clave": [
        "conflictos_pareja_socios",
        "conversaciones_dificiles",
        "reclamos_destructivos"
      ]
    },
    "red_flags": [
      "Es que tú siempre haces lo mismo",
      "Cuando le digo lo que me molesta, se pone a la defensiva de inmediato"
    ],
    "pregunta_diagnostica": "Cuando hablas de lo que te duele, ¿atacas la identidad de la otra persona o describes el hecho concreto y su impacto en ti?",
    "carta_tactica_asociada": "Miopía del Marketing",
    "protocolo_paso_cero": "Escribir la frase en estructura: 'En la situación X, hiciste Y, y yo me sentí Z'.",
    "microdosis_24h": "Tener la conversación difícil usando la tarjeta de preparación SBI.",
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
      "plantilla_excel": "29_Feedback_SBI_Guiones.xlsx"
    },
    "metrica_impacto": {
      "kpi_nombre": "Tasa de Resolución de Conflictos",
      "formula_o_criterio": "Conversaciones difíciles cerradas con acuerdos sin escalada emocional",
      "tiempo_evaluacion": "14 días"
    }
  },
  {
    "id": "ventana_johari_puntos_ciegos",
    "nombre_oficial": "Ventana de Johari (Puntos Ciegos y Vulnerabilidad)",
    "nombre_humano": "Descubrir tus Puntos Ciegos a Través de los Ojos del Otro",
    "pilar": "Pilar 4: Finanzas & Negocio",
    "fase_madurez": "Fase 2: Estructura & Soberanía",
    "triggers_diagnosticos": {
      "score_minimo": 6,
      "fuga_horas_min": 0,
      "variables_clave": [
        "relaciones_superficiales",
        "miedo_mostrar_debilidades"
      ]
    },
    "red_flags": [
      "Nadie me conoce de verdad",
      "Tengo miedo de que si muestro mis debilidades, me dejen de querer o respetar"
    ],
    "pregunta_diagnostica": "¿Qué porcentaje de lo que realmente sientes mantienes oculto de las personas más cercanas por miedo a su juicio?",
    "carta_tactica_asociada": "Sobrecarga Cognitiva",
    "protocolo_paso_cero": "Compartir una duda honesta hoy con alguien de confianza por 5 minutos.",
    "microdosis_24h": "Mapear los 4 cuadrantes de Johari (Área Libre, Ciega, Oculta y Desconocida).",
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
      "plantilla_excel": ""
    },
    "metrica_impacto": {
      "kpi_nombre": "Profundidad de Vínculos Clave",
      "formula_o_criterio": "Nivel de autenticidad percibido en relaciones íntimas y laborales",
      "tiempo_evaluacion": "30 días"
    }
  },
  {
    "id": "matriz_raci_hogar_equipo",
    "nombre_oficial": "Matriz RACI (Responsible, Accountable, Consulted, Informed)",
    "nombre_humano": "Rayar la Cancha en el Hogar y Proyectos Compartidos",
    "pilar": "Pilar 4: Finanzas & Negocio",
    "fase_madurez": "Fase 2: Estructura & Soberanía",
    "triggers_diagnosticos": {
      "score_minimo": 7,
      "fuga_horas_min": 6,
      "variables_clave": [
        "discusion_tareas_domesticas",
        "cuellos_botella_socios",
        "tareas_huerfanas"
      ]
    },
    "red_flags": [
      "Pensé que tú ibas a comprar la comida o enviar el informe",
      "Siento que yo hago todo en esta casa/proyecto y los demás solo miran"
    ],
    "pregunta_diagnostica": "En tu hogar o proyecto, ¿está definido por escrito quién es el responsable final de que cada tarea se ejecute?",
    "carta_tactica_asociada": "Task-Switching",
    "protocolo_paso_cero": "Definir 1 solo responsable oficial para la tarea que más roces genera.",
    "microdosis_24h": "Crear la tabla RACI con las 5 responsabilidades críticas del hogar o negocio.",
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
      "plantilla_excel": "30_Matriz_RACI_Responsabilidades.xlsx"
    },
    "metrica_impacto": {
      "kpi_nombre": "Reducción de Malentendidos Operativos",
      "formula_o_criterio": "Discusiones por tareas huérfanas en el mes (Reducción >= 80%)",
      "tiempo_evaluacion": "30 días"
    }
  },
  {
    "id": "piramide_minto_comunicacion",
    "nombre_oficial": "Principio de la Pirámide de Minto",
    "nombre_humano": "Ir Directo al Grano al Hablar y Escribir",
    "pilar": "Pilar 4: Finanzas & Negocio",
    "fase_madurez": "Fase 2: Estructura & Soberanía",
    "triggers_diagnosticos": {
      "score_minimo": 5,
      "fuga_horas_min": 0,
      "variables_clave": [
        "dar_mil_explicaciones",
        "inseguridad_pedir_limites",
        "correos_largos_no_leidos"
      ]
    },
    "red_flags": [
      "Me cuesta decir que no y doy explicaciones eternas",
      "La gente me interrumpe a menudo cuando intento contar algo"
    ],
    "pregunta_diagnostica": "Al comunicarte, ¿entregas tu conclusión y respuesta en la primera frase o la escondes al final de una larga historia?",
    "carta_tactica_asociada": "Sobrecarga Cognitiva",
    "protocolo_paso_cero": "Escribir un mensaje empezando con la petición directa en la primera línea.",
    "microdosis_24h": "Reestructurar tus propuestas comerciales y mensajes clave bajo la jerarquía Conclusión ➔ Argumentos ➔ Datos.",
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
      "plantilla_excel": ""
    },
    "metrica_impacto": {
      "kpi_nombre": "Efectividad de Mensajes y Respuestas",
      "formula_o_criterio": "Tasa de respuesta positiva y sin dudas a peticiones escritas",
      "tiempo_evaluacion": "14 días"
    }
  },
  {
    "id": "modelo_grow_coaching",
    "nombre_oficial": "Modelo GROW de Coaching (Goal, Reality, Options, Will)",
    "nombre_humano": "Ayudar a los Tuyos a Resolver sus Propios Problemas",
    "pilar": "Pilar 4: Finanzas & Negocio",
    "fase_madurez": "Fase 3: Expansión & Negocio",
    "triggers_diagnosticos": {
      "score_minimo": 6,
      "fuga_horas_min": 8,
      "variables_clave": [
        "solucionador_oficial",
        "mochilas_ajenas",
        "equipo_no_autonomo"
      ]
    },
    "red_flags": [
      "Me siento el solucionador oficial de la vida de todos",
      "Mi equipo o mis hijos no hacen nada sin mi aprobación"
    ],
    "pregunta_diagnostica": "Cuando alguien te pide ayuda, ¿le das el pez de inmediato o le haces preguntas para que descubra su propia caña de pescar?",
    "carta_tactica_asociada": "Sesgo de Planificación",
    "protocolo_paso_cero": "Ante la próxima pregunta de tu entorno, responder: '¿Y tú qué opciones crees que tenemos?'.",
    "microdosis_24h": "Guiar una conversación usando las 4 fases GROW (Meta, Realidad, Opciones, Compromiso).",
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
      "plantilla_excel": "31_Modelo_GROW_Coaching.xlsx"
    },
    "metrica_impacto": {
      "kpi_nombre": "Autonomía de Colaboradores / Entorno",
      "formula_o_criterio": "Reducción de consultas operativas que requerían tu intervención directa",
      "tiempo_evaluacion": "30 días"
    }
  },
  {
    "id": "enps_personal_relaciones",
    "nombre_oficial": "eNPS Personal (Employee / Environment Net Promoter Score)",
    "nombre_humano": "Nivel de Promoción y Nutrición de tu Entorno Íntimo",
    "pilar": "Pilar 4: Finanzas & Negocio",
    "fase_madurez": "Fase 2: Estructura & Soberanía",
    "triggers_diagnosticos": {
      "score_minimo": 6,
      "fuga_horas_min": 0,
      "variables_clave": [
        "distanciamiento_pareja_amigos",
        "culpa_laboral"
      ]
    },
    "red_flags": [
      "Mi pareja dice que estoy pero no estoy",
      "Hace meses que no tengo una conversación real y relajada con mis amigos"
    ],
    "pregunta_diagnostica": "Si tu círculo íntimo evaluara del 1 al 10 qué tan nutritiva es tu presencia en sus vidas hoy, ¿qué nota te pondrían?",
    "carta_tactica_asociada": "Costo de Oportunidad",
    "protocolo_paso_cero": "Escribirle a un ser querido solo para saludar con cariño sin pedir nada a cambio.",
    "microdosis_24h": "Hacer una cena o llamada de 30 minutos con cero pantallas de por medio.",
    "sinergias": [
      "ventana_johari_puntos_ciegos",
      "rueda_de_la_vida"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "enps-tracker-card",
        "tipo_interaccion": "Termómetro de calidad relacional con métricas de presencia consciente",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "hoja_enps_personal",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha: Termómetro eNPS de Salud Vincular"
      },
      "plantilla_excel": ""
    },
    "metrica_impacto": {
      "kpi_nombre": "Índice de Presencia Nutritiva",
      "formula_o_criterio": "Horas semanales de conexión real sin distracciones digitales",
      "tiempo_evaluacion": "30 días"
    }
  },
  {
    "id": "roles_belbin_sombreros",
    "nombre_oficial": "Roles de Belbin Internos (Gestión de Sombreros)",
    "nombre_humano": "Equilibrar tus Múltiples Sombreros Internos Sin Sabotaje",
    "pilar": "Pilar 4: Finanzas & Negocio",
    "fase_madurez": "Fase 2: Estructura & Soberanía",
    "triggers_diagnosticos": {
      "score_minimo": 6,
      "fuga_horas_min": 0,
      "variables_clave": [
        "pelea_roles_internos",
        "culpa_al_descansar",
        "ansiedad_al_trabajar"
      ]
    },
    "red_flags": [
      "Me siento culpable cuando descanso y ansioso cuando trabajo",
      "No logro darles espacio a mis hobbies sin descuidar mis deberes"
    ],
    "pregunta_diagnostica": "En tu día a día, ¿tienes definidos límites de tiempo para que tus diferentes roles internos se expresen sin sabotearse?",
    "carta_tactica_asociada": "Task-Switching",
    "protocolo_paso_cero": "Asignar un recreo de 20 minutos hoy exclusivo para tu rol creativo u ocio sin culpa.",
    "microdosis_24h": "Calibrar los 9 roles de Belbin (Acción, Sociales y Mentales) en tu dinámica personal o de equipo.",
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
      "plantilla_excel": "32_Roles_Belbin_Equipos.xlsx"
    },
    "metrica_impacto": {
      "kpi_nombre": "Equilibrio de Sombreros Operativos",
      "formula_o_criterio": "Puntuación de armonía entre ejecución, estrategia y descanso",
      "tiempo_evaluacion": "30 días"
    }
  },
  {
    "id": "evaluacion_360_feedback",
    "nombre_oficial": "Evaluación 360° Personal y Profesional",
    "nombre_humano": "El Espejo de Feedback Honesto y Radical",
    "pilar": "Pilar 4: Finanzas & Negocio",
    "fase_madurez": "Fase 3: Expansión & Negocio",
    "triggers_diagnosticos": {
      "score_minimo": 5,
      "fuga_horas_min": 0,
      "variables_clave": [
        "puntos_ciegos_caracter",
        "desconexion_percepcion_ajena"
      ]
    },
    "red_flags": [
      "Me sorprende que la gente a veces me evite o me responda con miedo",
      "Creo que soy muy claro pero los demás siempre me malinterpretan"
    ],
    "pregunta_diagnostica": "¿Tienes el valor de pedirle a 3 personas de tu total confianza que te digan con honestidad qué actitud tuya les genera fricción?",
    "carta_tactica_asociada": "Miopía del Marketing",
    "protocolo_paso_cero": "Hacer 1 sola pregunta a alguien cercano: '¿Hay algo en mi forma de hablarte que te haga sentir incómodo?'.",
    "microdosis_24h": "Enviar el formulario breve de 3 preguntas anónimas a 3 colegas o familiares.",
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
      "plantilla_excel": "33_Evaluacion_360_Feedback.xlsx"
    },
    "metrica_impacto": {
      "kpi_nombre": "Cierre de Puntos Ciegos de Liderazgo",
      "formula_o_criterio": "Diferencial de percepción personal vs. percepción de terceros",
      "tiempo_evaluacion": "60 días"
    }
  },
  {
    "id": "modelo_tuckman_transicion",
    "nombre_oficial": "Modelo de Tuckman (Forming, Storming, Norming, Performing)",
    "nombre_humano": "Comprender que el Caos Interno es Parte de Evolucionar",
    "pilar": "Pilar 4: Finanzas & Negocio",
    "fase_madurez": "Fase 2: Estructura & Soberanía",
    "triggers_diagnosticos": {
      "score_minimo": 6,
      "fuga_horas_min": 0,
      "variables_clave": [
        "frustracion_fase_caos",
        "renuncia_ante_primer_desorden"
      ]
    },
    "red_flags": [
      "Intenté cambiar pero las cosas se desordenaron más, así que volví a lo de antes",
      "Me frustra no adaptarme de inmediato al nuevo sistema"
    ],
    "pregunta_diagnostica": "¿Entiendes la tormenta del inicio de tu cambio de vida como un fracaso, o como la etapa obligatoria para encontrar un nuevo equilibrio?",
    "carta_tactica_asociada": "Sesgo de Costo Hundido",
    "protocolo_paso_cero": "Escribir un mensaje de autocompasión: 'Es normal sentir caos hoy, estoy reajustando mis piezas'.",
    "microdosis_24h": "Mapear en qué fase de Tuckman (Formación, Conflicto, Normalización o Desempeño) está tu proyecto actual.",
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
      "plantilla_excel": ""
    },
    "metrica_impacto": {
      "kpi_nombre": "Tolerancia a la Fricción de Cambio",
      "formula_o_criterio": "Días de sostenimiento de un nuevo hábito durante la fase de Storming",
      "tiempo_evaluacion": "21 días"
    }
  },
  {
    "id": "ocho_pasos_kotter_cambio",
    "nombre_oficial": "Los 8 Pasos de Kotter para la Gestión del Cambio",
    "nombre_humano": "Pasos Estructurados para Consolidar tus Cambios de Vida",
    "pilar": "Pilar 4: Finanzas & Negocio",
    "fase_madurez": "Fase 3: Expansión & Negocio",
    "triggers_diagnosticos": {
      "score_minimo": 6,
      "fuga_horas_min": 0,
      "variables_clave": [
        "resoluciones_muertas",
        "inercia_devora_cambios"
      ]
    },
    "red_flags": [
      "Mis resoluciones de año nuevo o proyectos duran solo dos semanas",
      "Sé que debo cambiar pero la inercia de la rutina me traga"
    ],
    "pregunta_diagnostica": "Antes de cambiar tu rutina, ¿has diseñado victorias rápidas y sencillas que te demuestren que vas por buen camino?",
    "carta_tactica_asociada": "Sesgo de Planificación",
    "protocolo_paso_cero": "Definir 1 sola victoria rápida de 2 minutos para hoy.",
    "microdosis_24h": "Revisar los 8 pasos de Kotter (Urgencia, Coalición, Visión, Comunicación, Obstáculos, Victorias Rápidas, Consolidación, Cultura).",
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
      "plantilla_excel": "34_Kotter_Gestion_Cambio.xlsx"
    },
    "metrica_impacto": {
      "kpi_nombre": "Tasa de Adopción Cultural del Hábito",
      "formula_o_criterio": "Sostenimiento del cambio post-60 días sin recaída",
      "tiempo_evaluacion": "60 días"
    }
  },
  {
    "id": "modelo_adkar_autotransformacion",
    "nombre_oficial": "Modelo ADKAR (Awareness, Desire, Knowledge, Ability, Reinforcement)",
    "nombre_humano": "Identificar el Tapón en tu Proceso de Cambio de Hábitos",
    "pilar": "Pilar 4: Finanzas & Negocio",
    "fase_madurez": "Fase 2: Estructura & Soberanía",
    "triggers_diagnosticos": {
      "score_minimo": 6,
      "fuga_horas_min": 0,
      "variables_clave": [
        "saber_que_hacer_pero_no_hacerlo",
        "bloqueo_motivacional"
      ]
    },
    "red_flags": [
      "Sé exactamente lo que tengo que hacer, pero simplemente no lo hago",
      "He leído mil libros sobre el tema pero sigo igual"
    ],
    "pregunta_diagnostica": "En tu intento de cambio, ¿el problema es que te falta conocimiento técnico, o que no has conectado con el deseo profundo de hacerlo?",
    "carta_tactica_asociada": "Parálisis por Análisis",
    "protocolo_paso_cero": "Calificar del 1 al 5 en cuál de los 5 pilares estás trabado: Conciencia, Deseo, Conocimiento, Habilidad o Refuerzo.",
    "microdosis_24h": "Diseñar la acción correctiva enfocada exclusivamente en el pilar con menor puntuación.",
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
      "plantilla_excel": "35_Modelo_ADKAR_Diagnostico.xlsx"
    },
    "metrica_impacto": {
      "kpi_nombre": "Desbloqueo de Barrera ADKAR",
      "formula_o_criterio": "Incremento de puntaje en el pilar crítico (de <3 a >=4)",
      "tiempo_evaluacion": "21 días"
    }
  },
  {
    "id": "matriz_9box_proyectos_vida",
    "nombre_oficial": "Matriz 9-Box (Desempeño vs Potencial Futuro)",
    "nombre_humano": "Evaluar el Impacto Actual vs el Potencial Futuro de tu Tiempo",
    "pilar": "Pilar 4: Finanzas & Negocio",
    "fase_madurez": "Fase 3: Expansión & Negocio",
    "triggers_diagnosticos": {
      "score_minimo": 6,
      "fuga_horas_min": 0,
      "variables_clave": [
        "atrapado_operatividad_baja",
        "falta_tiempo_estudiar_crecer"
      ]
    },
    "red_flags": [
      "No tengo tiempo de estudiar para salir de este trabajo que no me gusta",
      "Paso el día en tareas operativas que no me harán crecer a futuro"
    ],
    "pregunta_diagnostica": "¿Estás protegiendo al menos un 10% de tu semana para actividades que tienen el potencial de cambiar radicalmente tu futuro?",
    "carta_tactica_asociada": "Costo de Oportunidad",
    "protocolo_paso_cero": "Agendar 30 minutos inamovibles esta semana para 1 sola actividad de alto potencial futuro.",
    "microdosis_24h": "Ubicar tus proyectos y tareas en la cuadrícula de 9 cajas (Bajo/Medio/Alto Desempeño vs Potencial).",
    "sinergias": [
      "matriz_eisenhower",
      "plan_estrategico_hitos"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "nine-box-matrix-grid",
        "tipo_interaccion": "Cuadrícula interactiva de 9 cajas con posicionamiento de proyectos",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "hoja_matriz_9box",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha: Matriz 9-Box de Proyectos y Talento"
      },
      "plantilla_excel": "36_Matriz_9Box_Proyectos.xlsx"
    },
    "metrica_impacto": {
      "kpi_nombre": "Horas Protegidas de Alto Potencial",
      "formula_o_criterio": "Horas semanales dedicadas a proyectos de alta transformación futura",
      "tiempo_evaluacion": "30 días"
    }
  },
  {
    "id": "metodo_okr_trimestral",
    "nombre_oficial": "Método OKR (Objectives and Key Results)",
    "nombre_humano": "Conectar tus Tareas Diarias con tu Gran Sueño Trimestral",
    "pilar": "Pilar 4: Finanzas & Negocio",
    "fase_madurez": "Fase 3: Expansión & Negocio",
    "triggers_diagnosticos": {
      "score_minimo": 6,
      "fuga_horas_min": 0,
      "variables_clave": [
        "correr_sin_rumbo",
        "estancamiento_metas_grandes"
      ]
    },
    "red_flags": [
      "Tengo días muy productivos pero mi vida se siente estancada en lo importante",
      "No sé si lo que hago hoy me acerca al lugar donde quiero estar"
    ],
    "pregunta_diagnostica": "Tus metas diarias de esta semana, ¿están amarradas matemáticamente a un objetivo de vida de mediano plazo?",
    "carta_tactica_asociada": "Ley de Pareto (80/20)",
    "protocolo_paso_cero": "Definir 1 gran objetivo trimestral y 1 métrica numérica para evaluarlo este domingo.",
    "microdosis_24h": "Configurar los 3 Resultados Clave numéricos asociados a tu objetivo del trimestre.",
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
      "plantilla_excel": "37_Metodo_OKR_Trimestral.xlsx"
    },
    "metrica_impacto": {
      "kpi_nombre": "Progreso de OKRs Trimestrales",
      "formula_o_criterio": "% promedio de avance en los 3 Resultados Clave (Meta >= 70%)",
      "tiempo_evaluacion": "90 días"
    }
  },
  {
    "id": "finanzas_503020",
    "nombre_oficial": "Presupuesto y Distribución 50/30/20",
    "nombre_humano": "El Mapa de Paz y Seguridad para tu Dinero",
    "pilar": "Pilar 4: Finanzas & Negocio",
    "fase_madurez": "Fase 1: Rescate & Oxígeno",
    "triggers_diagnosticos": {
      "score_minimo": 5,
      "fuga_horas_min": 0,
      "variables_clave": [
        "incertidumbre_financiera",
        "mezcla_gastos_personales_negocio",
        "cero_ahorro"
      ]
    },
    "red_flags": [
      "No sé a dónde se me va el dinero a fin de mes",
      "Uso mis tarjetas personales para tapar agujeros cotidianos"
    ],
    "pregunta_diagnostica": "¿Tienes un porcentaje exacto de tus ingresos asignado a necesidades (50%), ocio (30%) y ahorro de paz (20%)?",
    "carta_tactica_asociada": "Costo de Oportunidad",
    "protocolo_paso_cero": "Separar en un sobre o cuenta digital el 10% del ingreso que entró hoy.",
    "microdosis_24h": "Calcular los 3 montos en la calculadora del portal e imprimir la planilla mensual.",
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
      "plantilla_excel": "07_Presupuesto_50_30_20.xlsx"
    },
    "metrica_impacto": {
      "kpi_nombre": "Porcentaje de Ahorro y Ocio Sostenido",
      "formula_o_criterio": "Ahorro mensual real >= 10% y Ocio protegido >= 20%",
      "tiempo_evaluacion": "30 días"
    }
  },
  {
    "id": "fondo_reserva_paz",
    "nombre_oficial": "Fondo de Reserva y Tranquilidad (3 Meses de Vida)",
    "nombre_humano": "El Blindaje Antigravedad Contra Imprevistos",
    "pilar": "Pilar 4: Finanzas & Negocio",
    "fase_madurez": "Fase 2: Estructura & Soberanía",
    "triggers_diagnosticos": {
      "score_minimo": 6,
      "fuga_horas_min": 0,
      "variables_clave": [
        "ansiedad_fin_de_mes",
        "dependencia_ingreso_inmediato"
      ]
    },
    "red_flags": [
      "Si este mes no vendo, no tengo cómo pagar mis gastos básicos",
      "Acepto clientes tóxicos por desesperación económica"
    ],
    "pregunta_diagnostica": "¿Cuántos meses podrías vivir exactamente con tu nivel de vida actual si mañana tus ingresos se van a cero?",
    "carta_tactica_asociada": "Costo de Oportunidad",
    "protocolo_paso_cero": "Definir el monto exacto de 1 mes de costo de vida mínimo de supervivencia.",
    "microdosis_24h": "Abrir una cuenta de ahorro separada e ingresar el primer depósito simbólico.",
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
      "plantilla_excel": "08_Fondo_Reserva_Paz.xlsx"
    },
    "metrica_impacto": {
      "kpi_nombre": "Meses de Reserva Blindados",
      "formula_o_criterio": "Fondo acumulado / Costo de vida mensual (Meta: 3 meses)",
      "tiempo_evaluacion": "90 días"
    }
  },
  {
    "id": "paquetizacion_servicios_mes",
    "nombre_oficial": "Paquetización de Servicios en Programas Mensuales",
    "nombre_humano": "De la Hora Suelta al Plan de 1 Mes (3x Ingresos y Paz de Agenda)",
    "pilar": "Pilar 4: Finanzas & Negocio",
    "fase_madurez": "Fase 3: Expansión & Negocio",
    "triggers_diagnosticos": {
      "score_minimo": 6,
      "fuga_horas_min": 8,
      "variables_clave": [
        "venta_hora_suelta",
        "agenda_inestable",
        "bajos_ingresos_profesionales"
      ]
    },
    "red_flags": [
      "Cobro por hora suelta y si el cliente cancela a última hora pierdo el ingreso",
      "Paso la mitad del mes buscando clientes nuevos en lugar de trabajar"
    ],
    "pregunta_diagnostica": "¿Por qué vender 1 sesión aislada cuando el resultado real de tu cliente requiere un proceso de 4 sesiones?",
    "carta_tactica_asociada": "Miopía del Marketing",
    "protocolo_paso_cero": "Ponerle nombre al 'Programa de 1 Mes' (ej. Plan Terapéutico Integral de 4 Sesiones).",
    "microdosis_24h": "Redactar la propuesta del paquete con valor cerrado y cupos limitados.",
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
      "plantilla_excel": "09_Simulador_Paquetes_Servicios.xlsx"
    },
    "metrica_impacto": {
      "kpi_nombre": "Multiplicador de Ingreso por Cliente",
      "formula_o_criterio": "Ticket promedio mensual por cliente (Meta: 2.5x a 3x)",
      "tiempo_evaluacion": "30 días"
    }
  },
  {
    "id": "calculadora_roi_capacitaciones",
    "nombre_oficial": "Modelado Financiero de Retorno de Inversión (ROI Cursos/Diplomados)",
    "nombre_humano": "La Calculadora de Amortización de Aprendizajes",
    "pilar": "Pilar 4: Finanzas & Negocio",
    "fase_madurez": "Fase 3: Expansión & Negocio",
    "triggers_diagnosticos": {
      "score_minimo": 5,
      "fuga_horas_min": 0,
      "variables_clave": [
        "duda_inversion_cursos",
        "capacitacion_profesional"
      ]
    },
    "red_flags": [
      "Quiero hacer un diplomado o certificación pero me da miedo no recuperar la plata invertida"
    ],
    "pregunta_diagnostica": "¿Cuántas sesiones o clientes nuevos a tu nueva tarifa necesitas exactamente para pagar este curso en menos de 90 días?",
    "carta_tactica_asociada": "Costo de Oportunidad",
    "protocolo_paso_cero": "Calcular la fórmula básica: Costo del Curso / Diferencial de Tarifa Nueva.",
    "microdosis_24h": "Simular el ROI en el portal web e ingresar la fecha estimada de retorno.",
    "sinergias": [
      "paquetizacion_servicios_mes"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "roi-training-calculator",
        "tipo_interaccion": "Calculadora con gráfico de punto de equilibrio y meses de recuperación",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "ficha_calculo_roi_capacitacion",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha 12: Evaluación de Inversión Formativa"
      },
      "plantilla_excel": "10_Calculadora_ROI_Capacitaciones.xlsx"
    },
    "metrica_impacto": {
      "kpi_nombre": "Tiempo de Retorno de Inversión (Payback)",
      "formula_o_criterio": "Meses para amortizar el 100% de la matrícula (< 4 meses)",
      "tiempo_evaluacion": "90 días"
    }
  },
  {
    "id": "somatica_y_autorregulacion_tea",
    "nombre_oficial": "Protocolo de Regulación Somática y Descargas Sensoriales TEA/PAS",
    "nombre_humano": "Blindaje de Batería Sensorial y Pausas de Stimming",
    "pilar": "Pilar 5: Neurodivergencia & Bienestar",
    "fase_madurez": "Fase 1: Rescate & Oxígeno",
    "triggers_diagnosticos": {
      "score_minimo": 7,
      "fuga_horas_min": 10,
      "variables_clave": [
        "neurodivergencia_tea",
        "alta_sensibilidad_pas",
        "saturacion_sensorial",
        "burnout_autista"
      ]
    },
    "red_flags": [
      "Llego a la tarde con el cerebro fundido por el ruido, las luces y la gente",
      "Me siento culpable por necesitar parar y aislarme en silencio"
    ],
    "pregunta_diagnostica": "¿Tienes agendadas tus pausas de descarga corporal y sensorial con el mismo nivel de respeto que una reunión de trabajo?",
    "carta_tactica_asociada": "Sobrecarga Cognitiva",
    "protocolo_paso_cero": "Cerrar los ojos, respirar 3 veces en 4-4-4 y estirar el cuerpo durante 60 segundos.",
    "microdosis_24h": "Agendar dos franjas innegociables de 15 minutos (10:15 y 16:45) para stimming libre sin pantallas.",
    "sinergias": [
      "cero_pantallas_celular",
      "inventario_cero_culpa",
      "mapeador_24h"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "stimming-protocol-timer",
        "tipo_interaccion": "Widget de pausa sensorial con campana suave y recordatorio de hidratación",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "guia_descarga_sensorial_tea",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha 13: Protocolo Diario de Autorregulación Sensorial"
      },
      "plantilla_excel": ""
    },
    "metrica_impacto": {
      "kpi_nombre": "Nivel de Batería Sensorial al Final del Día",
      "formula_o_criterio": "Autoevaluación de energía de 1 a 10 (Meta >= 6 al llegar la noche)",
      "tiempo_evaluacion": "14 días"
    }
  },
  {
    "id": "inventario_cero_culpa",
    "nombre_oficial": "Inventario Cero Culpa y Registro de Micro-Victorias Nocturnas",
    "nombre_humano": "El Desactivador de Rumiación Pre-Cama",
    "pilar": "Pilar 5: Neurodivergencia & Bienestar",
    "fase_madurez": "Fase 1: Rescate & Oxígeno",
    "triggers_diagnosticos": {
      "score_minimo": 6,
      "fuga_horas_min": 0,
      "variables_clave": [
        "rumiacion_nocturna",
        "pensamientos_intrusivos",
        "insomnio_por_ansiedad"
      ]
    },
    "red_flags": [
      "Me acuesto y mi mente empieza a repasar todo lo que no alcancé a hacer hoy",
      "Siento que no merezco descansar porque no fui lo suficientemente productivo"
    ],
    "pregunta_diagnostica": "¿Por qué le exiges a tu mente que duerma si antes de acostarte solo le recordaste tus fallas y no tus victorias?",
    "carta_tactica_asociada": "Efecto Zeigarnik",
    "protocolo_paso_cero": "Escribir en una hoja 1 sola cosa buena que hiciste hoy (incluso si fue levantarte y tomar agua).",
    "microdosis_24h": "Anotar 3 micro-victorias del día y validar el trabajo invisible de cuidados antes de apagar la luz.",
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
      "plantilla_excel": ""
    },
    "metrica_impacto": {
      "kpi_nombre": "Calidad de Conciliación del Sueño",
      "formula_o_criterio": "Minutos para conciliar el sueño (< 25 min) y reducción de rumiación",
      "tiempo_evaluacion": "14 días"
    }
  },
  {
    "id": "cero_pantallas_celular",
    "nombre_oficial": "Protocolo Análogo Cero Pantallas Celular para Lecturas Densas",
    "nombre_humano": "Emigración al Papel y Descompresión Visual",
    "pilar": "Pilar 5: Neurodivergencia & Bienestar",
    "fase_madurez": "Fase 1: Rescate & Oxígeno",
    "triggers_diagnosticos": {
      "score_minimo": 6,
      "fuga_horas_min": 10,
      "variables_clave": [
        "fatiga_visual",
        "lectura_academica_celular",
        "hiperestimulacion_digital"
      ]
    },
    "red_flags": [
      "Leo informes o textos de estudio en el celular y a los 10 minutos me arden los ojos",
      "Entro a leer un PDF y termino scrolleando en Instagram"
    ],
    "pregunta_diagnostica": "¿Por qué someter a tus ojos al estrés de una pantalla pequeña cuando puedes leer en papel con luz natural?",
    "carta_tactica_asociada": "Sobrecarga Cognitiva",
    "protocolo_paso_cero": "Imprimir 2 páginas del texto más importante y dejar el celular en otra habitación.",
    "microdosis_24h": "Imprimir el dossier o lecturas de la semana en formato físico análogo.",
    "sinergias": [
      "hub_imprimibles_maestro",
      "somatica_y_autorregulacion_tea"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "analog-reader-banner",
        "tipo_interaccion": "Banner de advertencia con botón 'Imprimir Documento para Lectura Análoga'",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "guia_estudio_analogo_papel",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha 15: Protocolo de Estudio y Lectura Análoga"
      },
      "plantilla_excel": ""
    },
    "metrica_impacto": {
      "kpi_nombre": "Reducción de Fatiga Ocular y Retención de Contenido",
      "formula_o_criterio": "Horas de lectura en papel vs. pantalla pequeña",
      "tiempo_evaluacion": "7 días"
    }
  },
  {
    "id": "arquetipos_energia",
    "nombre_oficial": "Matriz de Arquetipos de Energía Operativa",
    "nombre_humano": "Calibrar las 4 Identidades: Estratega, Ejecutora, Nutricia y Saboteadora",
    "pilar": "Pilar 5: Neurodivergencia & Bienestar",
    "fase_madurez": "Fase 2: Estructura & Soberanía",
    "triggers_diagnosticos": {
      "score_minimo": 6,
      "fuga_horas_min": 0,
      "variables_clave": [
        "autosabotaje",
        "desbalance_energia_cuidado"
      ]
    },
    "red_flags": [
      "Cuando tengo que planificar me pongo a limpiar, y cuando tengo que ejecutar me pongo a soñar",
      "Siento que hay una voz interna que me boicotea cada avance"
    ],
    "pregunta_diagnostica": "¿Cuál de tus 4 arquetipos está hoy al volante de tu día y cuál está amordazado en el maletero?",
    "carta_tactica_asociada": "Sobrecarga Cognitiva",
    "protocolo_paso_cero": "Nombrar en voz alta cuál arquetipo te está bloqueando en este instante.",
    "microdosis_24h": "Calificar el nivel de actividad de cada arquetipo en la matriz del portal.",
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
      "plantilla_excel": ""
    },
    "metrica_impacto": {
      "kpi_nombre": "Armonía de Arquetipos Personales",
      "formula_o_criterio": "Reducción de episodios de sabotaje interno por mes",
      "tiempo_evaluacion": "30 días"
    }
  },
  {
    "id": "oferta_somatica_yoga",
    "nombre_oficial": "Estructuración de Sesiones de Movimiento Somático",
    "nombre_humano": "Secuencias Restaurativas para Cuerpos Cansados",
    "pilar": "Pilar 6: Pedagogía & Movimiento",
    "fase_madurez": "Fase 2: Estructura & Soberanía",
    "triggers_diagnosticos": {
      "score_minimo": 6,
      "fuga_horas_min": 0,
      "variables_clave": [
        "fatiga_corporal_cronica",
        "tension_nerviosa"
      ]
    },
    "red_flags": [
      "Tengo el cuerpo contracturado y no logro relajarme ni durmiendo"
    ],
    "pregunta_diagnostica": "¿Tu rutina incluye movimientos suaves diseñados específicamente para desarmar la tensión de tu sistema nervioso?",
    "carta_tactica_asociada": "Sobrecarga Cognitiva",
    "protocolo_paso_cero": "Hacer 1 postura restaurativa en el suelo durante 3 minutos.",
    "microdosis_24h": "Seguir la secuencia somática de 15 minutos en el portal.",
    "sinergias": [
      "somatica_y_autorregulacion_tea",
      "biblioteca_musical_coreografica"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "somatic-yoga-flow",
        "tipo_interaccion": "Visor guiado de posturas somáticas con temporizador de permanencia",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "guia_posturas_somaticas_yoga",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha: Guía Visual de Movimiento Somático"
      },
      "plantilla_excel": ""
    },
    "metrica_impacto": {
      "kpi_nombre": "Nivel de Tensión Corporal Percibida",
      "formula_o_criterio": "Reducción en escala de dolor/tensión física (de 8/10 a < 4/10)",
      "tiempo_evaluacion": "14 días"
    }
  },
  {
    "id": "biblioteca_musical_coreografica",
    "nombre_oficial": "Biblioteca Musical & Armador de Clases de 55 Minutos",
    "nombre_humano": "El Secuenciador Pedagógico y Curva Somática",
    "pilar": "Pilar 6: Pedagogía & Movimiento",
    "fase_madurez": "Fase 2: Estructura & Soberanía",
    "triggers_diagnosticos": {
      "score_minimo": 5,
      "fuga_horas_min": 6,
      "variables_clave": [
        "instructores_danza_fitness",
        "clases_grupales",
        "armado_playlists_lento"
      ]
    },
    "red_flags": [
      "Paso horas improvisando qué música poner en mis clases y termino agotado",
      "Se me desordena el tiempo de la clase y el calentamiento o enfriamiento quedan cortos"
    ],
    "pregunta_diagnostica": "¿Tienes un inventario maestro de canciones que calcule automáticamente la curva de intensidad de tu clase?",
    "carta_tactica_asociada": "Task-Switching",
    "protocolo_paso_cero": "Elegir 3 canciones: Inicio suave, Clímax y Vuelta a la calma.",
    "microdosis_24h": "Armar una clase de 50-55 min en el secuenciador interactivo y exportarla a WhatsApp.",
    "sinergias": [
      "mochila_operativa_salidas",
      "pedagogia_quirurgica_bloques"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "music-class-builder",
        "tipo_interaccion": "Secuenciador de canciones con cálculo de minutos en vivo, selector de bpm/estilo y exportación",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "ficha_cancionero_coreografico",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha 16: Planilla de Estructura de Clase y Minutaje"
      },
      "plantilla_excel": "11_Biblioteca_Musical_Clases.xlsx"
    },
    "metrica_impacto": {
      "kpi_nombre": "Tiempo de Armado de Clase Semanal",
      "formula_o_criterio": "Reducción del tiempo de preparación (< 15 minutos por clase)",
      "tiempo_evaluacion": "7 días"
    }
  },
  {
    "id": "pedagogia_quirurgica_bloques",
    "nombre_oficial": "Pedagogía Quirúrgica en Bloques y Micro-Pausas de Voz",
    "nombre_humano": "Estandarización de Bloques con Cuidado de la Voz",
    "pilar": "Pilar 6: Pedagogía & Movimiento",
    "fase_madurez": "Fase 2: Estructura & Soberanía",
    "triggers_diagnosticos": {
      "score_minimo": 5,
      "fuga_horas_min": 0,
      "variables_clave": [
        "fatiga_vocal",
        "docencia_clases_largas",
        "dispersion_alumnos"
      ]
    },
    "red_flags": [
      "Termino mis clases con la garganta destruida o la voz ronca",
      "Los alumnos pierden la atención a la mitad de la clase"
    ],
    "pregunta_diagnostica": "¿Tienes estructuradas tus clases en bloques de 15 minutos con micro-pausas conscientes de 2 minutos para hidratar la voz?",
    "carta_tactica_asociada": "Ley de Parkinson",
    "protocolo_paso_cero": "Beber 1 sorbo de agua y hacer 1 ejercicio de calentamiento vocal de 60 segundos.",
    "microdosis_24h": "Dividir la estructura de tu próxima clase en 3 bloques pedagógicos con sus pausas.",
    "sinergias": [
      "biblioteca_musical_coreografica",
      "mochila_operativa_salidas"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "vocal-care-timer",
        "tipo_interaccion": "Temporizador de bloques de clase con alertas visuales de descanso vocal",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "hoja_pedagogia_bloques_voz",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha: Estructura Pedagógica Quirúrgica y Cuidado Vocal"
      },
      "plantilla_excel": ""
    },
    "metrica_impacto": {
      "kpi_nombre": "Salud Vocal y Adherencia de Alumnos",
      "formula_o_criterio": "0 episodios de disfonía y evaluación positiva de dinamismo en clase",
      "tiempo_evaluacion": "30 días"
    }
  },
  {
    "id": "laboratorio_creativo_composicion",
    "nombre_oficial": "Laboratorio Creativo de Composición en 4 Pasos",
    "nombre_humano": "Materializar Obras Personales sin Traba Mental",
    "pilar": "Pilar 6: Pedagogía & Movimiento",
    "fase_madurez": "Fase 3: Expansión & Negocio",
    "triggers_diagnosticos": {
      "score_minimo": 6,
      "fuga_horas_min": 0,
      "variables_clave": [
        "bloqueo_creativo_artistico",
        "ideas_sin_materializar"
      ]
    },
    "red_flags": [
      "Tengo mil melodías o ideas de proyectos en la cabeza pero no grabo ni termino ninguna",
      "Me da miedo que lo que componga o cree sea malo"
    ],
    "pregunta_diagnostica": "¿Tienes un método ágil para pasar de una frase semilla a una maqueta grabada en menos de 20 minutos?",
    "carta_tactica_asociada": "Parálisis por Análisis",
    "protocolo_paso_cero": "Grabar un audio de WhatsApp de 15 segundos con una melodía o frase tarareada.",
    "microdosis_24h": "Seguir los 4 pasos (Frase semilla, Pulso rítmico, Motivo melódico, Grabación de 30s) en el portal.",
    "sinergias": [
      "time_blocking_flexible",
      "inventario_cero_culpa"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "creative-lab-step-recorder",
        "tipo_interaccion": "Grabadora y bitácora de maquetas creativas en 4 pasos",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "hoja_laboratorio_composicion",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha: Bitácora de Composición y Creación"
      },
      "plantilla_excel": ""
    },
    "metrica_impacto": {
      "kpi_nombre": "Obras / Maquetas Materializadas",
      "formula_o_criterio": "N° de piezas creativas terminadas y grabadas por mes",
      "tiempo_evaluacion": "30 días"
    }
  },
  {
    "id": "mochila_operativa_salidas",
    "nombre_oficial": "Checklist de Mochila Operativa para Servicios en Terreno",
    "nombre_humano": "El Blindaje Cero Olvidos para Clases y Terreno",
    "pilar": "Pilar 6: Pedagogía & Movimiento",
    "fase_madurez": "Fase 1: Rescate & Oxígeno",
    "triggers_diagnosticos": {
      "score_minimo": 5,
      "fuga_horas_min": 4,
      "variables_clave": [
        "servicios_aire_libre",
        "atencion_domicilio",
        "olvido_materiales"
      ]
    },
    "red_flags": [
      "Llego a la clase o evento y me doy cuenta de que se me quedó el cable, el parlante o el agua",
      "Salgo de mi casa con el corazón acelerado revisando cinco veces si llevo todo"
    ],
    "pregunta_diagnostica": "¿Tienes un checklist visual pegado en tu mochila para revisar en 30 segundos antes de salir?",
    "carta_tactica_asociada": "Efecto Zeigarnik",
    "protocolo_paso_cero": "Verificar únicamente el ítem más crítico (ej. Micrófono cargado al 100%).",
    "microdosis_24h": "Imprimir el checklist en micas y colocarlo en el bolsillo frontal de la mochila de trabajo.",
    "sinergias": [
      "biblioteca_musical_coreografica",
      "pedagogia_quirurgica_bloques"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "pack-checklist-widget",
        "tipo_interaccion": "Checklist táctil interactivo con estado de carga de baterías y confirmación sonora",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "hoja_checklist_mochila_terreno",
        "formato": "1 Hoja Carta/A4 (.sheet-page plastificable)",
        "seccion_hub": "Ficha 17: Checklist Innegociable de Salida a Terreno"
      },
      "plantilla_excel": ""
    },
    "metrica_impacto": {
      "kpi_nombre": "Tasa de Olvidos en Terreno",
      "formula_o_criterio": "0 olvidos materiales en actividades fuera de casa",
      "tiempo_evaluacion": "30 días"
    }
  },
  {
    "id": "alianzas_operativas_duetos",
    "nombre_oficial": "Protocolo de Alianzas Comerciales en Duetos y Campañas",
    "nombre_humano": "Alianzas Estratégicas 2x1 y Reparto Equitativo de Insumos",
    "pilar": "Pilar 6: Pedagogía & Movimiento",
    "fase_madurez": "Fase 3: Expansión & Negocio",
    "triggers_diagnosticos": {
      "score_minimo": 6,
      "fuga_horas_min": 0,
      "variables_clave": [
        "sobrecarga_servicios_individuales",
        "oportunidad_dueto_socios"
      ]
    },
    "red_flags": [
      "Quiero hacer eventos con otro colega pero nos cuesta ponernos de acuerdo en costos y ganancias",
      "Me cansa físicamente sostener toda la clase solo"
    ],
    "pregunta_diagnostica": "¿Tienes una matriz clara para compartir insumos, rotar descansos físicos y repartir ganancias al 50% con tus socios?",
    "carta_tactica_asociada": "Costo de Oportunidad",
    "protocolo_paso_cero": "Escribir los 3 acuerdos básicos de dinero y descanso para la próxima sesión conjunta.",
    "microdosis_24h": "Diligenciar la plantilla de reparto de utilidades y guion de promoción en dueto.",
    "sinergias": [
      "matriz_raci_hogar_equipo",
      "paquetizacion_servicios_mes"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "duet-partnership-calculator",
        "tipo_interaccion": "Calculadora de reparto de utilidades en dueto con división de gastos compartidos",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "hoja_acuerdo_alianzas_duetos",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha: Acuerdo de Alianzas en Dueto y Campañas"
      },
      "plantilla_excel": "38_Alianzas_Duetos_Reparto.xlsx"
    },
    "metrica_impacto": {
      "kpi_nombre": "Rentabilidad y Descanso Físico en Duetos",
      "formula_o_criterio": "Aumento del margen neto y reducción del 50% de esfuerzo físico por sesión",
      "tiempo_evaluacion": "30 días"
    }
  },
  {
    "id": "ia_chatgpt_prompts_puente",
    "nombre_oficial": "Playbook de Prompts IA Puente (ChatGPT ➔ Ficha Maestra Antigravity)",
    "nombre_humano": "El Extractor Inteligente de Diagnósticos Clínicos",
    "pilar": "Pilar 7: Inteligencia Artificial & Automatización",
    "fase_madurez": "Fase 2: Estructura & Soberanía",
    "triggers_diagnosticos": {
      "score_minimo": 0,
      "fuga_horas_min": 0,
      "variables_clave": [
        "todos_los_consultores",
        "automatizacion_informes",
        "extraccion_datos_ia"
      ]
    },
    "red_flags": [
      "Paso 2 horas transcribiendo notas de audio o respuestas de clientes para armar su plan de vuelo"
    ],
    "pregunta_diagnostica": "¿Utilizas prompts estandarizados para que la IA extraiga el JSON clínico exacto de la sesión en 5 segundos?",
    "carta_tactica_asociada": "Parálisis por Análisis",
    "protocolo_paso_cero": "Copiar el prompt de extracción estándar y pegar el texto crudo del cliente.",
    "microdosis_24h": "Procesar el Sondeo de un cliente mediante el prompt puente para generar su Ficha_Maestra.json.",
    "sinergias": [
      "seguridad_pin",
      "inventario_sesiones_results",
      "hub_imprimibles_maestro"
    ],
    "contraindicaciones": [],
    "doble_salida": {
      "componente_web": {
        "widget_id": "prompt-bridge-copy-box",
        "tipo_interaccion": "Generador de prompts con botón de copiado en 1 clic y selector de variables",
        "persistencia": "localStorage"
      },
      "imprimible_fisico": {
        "template_id": "playbook_prompts_ia_aicc",
        "formato": "1 Hoja Carta/A4 (.sheet-page)",
        "seccion_hub": "Ficha 18: Playbook de Prompts Clínicos IA"
      },
      "plantilla_excel": ""
    },
    "metrica_impacto": {
      "kpi_nombre": "Ahorro de Tiempo en Elaboración de Informes",
      "formula_o_criterio": "Reducción del tiempo de armado de Plan de Vuelo de 120 min a < 15 min",
      "tiempo_evaluacion": "Por cliente"
    }
  }
];
