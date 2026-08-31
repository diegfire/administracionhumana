/**
 * Motor de Inferencia y Prescripción Clínica — Administración Humana (AICC v2.0)
 * Sistema Operativo Antigravity
 * 
 * Base de Datos: modulos_db.json (60 Módulos Oficiales)
 */

class AICCPrescriptorEngine {
  constructor(modulosDb) {
    this.db = modulosDb || [];
  }

  /**
   * Evalúa el perfil del cliente y retorna el Plan de Módulos Prescrito
   * @param {Object} p - Perfil del cliente evaluado
   * @returns {Object} Receta completa de intervención
   */
  prescribir(p) {
    const {
      nombre = 'Cliente AICC',
      horasFugaSemana = 0,
      saturacionSensorial = 0,
      dificultadHorarios = false,
      multipotencialFrentes = 1,
      ventaHoraSuelta = false,
      rumiacionNocturna = 0,
      condicionTeaPas = false,
      instructorDanzaFitness = false,
      serviciosTerreno = false,
      dudaInversionCursos = false,
      faltaProposito = false,
      apagaIncendios = false,
      multitareaCompulsiva = false,
      problemasRecurrentes = false,
      desordenEspacioFisico = false,
      conflictosComunicacion = false,
      desacuerdoRolesHogar = false,
      abandonoHabitos = false,
      deseoEmprenderSinValidar = false
    } = p;

    const modulosSeleccionados = [];
    const widgetsWeb = [];
    const hojasImprimibles = [];
    const pasosCeroInmediatos = [];

    // 1. Cimientos Universales (Innegociables)
    this._agregar('seguridad_pin', modulosSeleccionados, widgetsWeb, hojasImprimibles, pasosCeroInmediatos);
    this._agregar('inventario_sesiones_results', modulosSeleccionados, widgetsWeb, hojasImprimibles, pasosCeroInmediatos);
    this._agregar('hub_imprimibles_maestro', modulosSeleccionados, widgetsWeb, hojasImprimibles, pasosCeroInmediatos);
    this._agregar('whatsapp_directo', modulosSeleccionados, widgetsWeb, hojasImprimibles, pasosCeroInmediatos);

    // 2. Propósito & Claridad
    if (faltaProposito) {
      this._agregar('circulo_dorado', modulosSeleccionados, widgetsWeb, hojasImprimibles, pasosCeroInmediatos);
      this._agregar('foda_came', modulosSeleccionados, widgetsWeb, hojasImprimibles, pasosCeroInmediatos);
    }

    // 3. Auditoría & Diagnóstico 168H
    if (horasFugaSemana >= 10 || p.auditoriaRequerida) {
      this._agregar('diagnostico_estructura', modulosSeleccionados, widgetsWeb, hojasImprimibles, pasosCeroInmediatos);
    }

    // 4. Gestión del Tiempo & Horarios
    if (dificultadHorarios || horasFugaSemana >= 12) {
      this._agregar('mapeador_24h', modulosSeleccionados, widgetsWeb, hojasImprimibles, pasosCeroInmediatos);
      this._agregar('time_blocking_flexible', modulosSeleccionados, widgetsWeb, hojasImprimibles, pasosCeroInmediatos);
      this._agregar('protocolo_paso_cero', modulosSeleccionados, widgetsWeb, hojasImprimibles, pasosCeroInmediatos);
    }

    if (apagaIncendios || horasFugaSemana >= 14) {
      this._agregar('matriz_eisenhower', modulosSeleccionados, widgetsWeb, hojasImprimibles, pasosCeroInmediatos);
      this._agregar('ley_pareto_8020', modulosSeleccionados, widgetsWeb, hojasImprimibles, pasosCeroInmediatos);
    }

    if (multitareaCompulsiva || horasFugaSemana >= 10) {
      this._agregar('batching_agrupacion_tareas', modulosSeleccionados, widgetsWeb, hojasImprimibles, pasosCeroInmediatos);
      this._agregar('tecnica_pomodoro_foco', modulosSeleccionados, widgetsWeb, hojasImprimibles, pasosCeroInmediatos);
    }

    // 5. Multipotencialidad & Frentes
    if (multipotencialFrentes >= 2) {
      this._agregar('triangulacion_roles', modulosSeleccionados, widgetsWeb, hojasImprimibles, pasosCeroInmediatos);
      this._agregar('kanban_gtd_wip2', modulosSeleccionados, widgetsWeb, hojasImprimibles, pasosCeroInmediatos);
      this._agregar('principio_mece_categorizacion', modulosSeleccionados, widgetsWeb, hojasImprimibles, pasosCeroInmediatos);
    }

    // 6. Neurodivergencia & Cuidado Sensorial
    if (condicionTeaPas || saturacionSensorial >= 6) {
      this._agregar('somatica_y_autorregulacion_tea', modulosSeleccionados, widgetsWeb, hojasImprimibles, pasosCeroInmediatos);
      this._agregar('cero_pantallas_celular', modulosSeleccionados, widgetsWeb, hojasImprimibles, pasosCeroInmediatos);
    }

    if (rumiacionNocturna >= 5) {
      this._agregar('inventario_cero_culpa', modulosSeleccionados, widgetsWeb, hojasImprimibles, pasosCeroInmediatos);
      this._agregar('gtd_vaciado_mental', modulosSeleccionados, widgetsWeb, hojasImprimibles, pasosCeroInmediatos);
    }

    // 7. Orden Físico & Resolución de Problemas
    if (desordenEspacioFisico) {
      this._agregar('metodologia_5s_espacio', modulosSeleccionados, widgetsWeb, hojasImprimibles, pasosCeroInmediatos);
    }

    if (problemasRecurrentes) {
      this._agregar('cinco_porques_raiz', modulosSeleccionados, widgetsWeb, hojasImprimibles, pasosCeroInmediatos);
      this._agregar('diagrama_ishikawa_sistema', modulosSeleccionados, widgetsWeb, hojasImprimibles, pasosCeroInmediatos);
    }

    if (abandonoHabitos) {
      this._agregar('kaizen_mejora_continua', modulosSeleccionados, widgetsWeb, hojasImprimibles, pasosCeroInmediatos);
      this._agregar('modelo_adkar_autotransformacion', modulosSeleccionados, widgetsWeb, hojasImprimibles, pasosCeroInmediatos);
    }

    // 8. Comunicación & Acuerdos
    if (conflictosComunicacion) {
      this._agregar('feedback_sbi_conversaciones', modulosSeleccionados, widgetsWeb, hojasImprimibles, pasosCeroInmediatos);
      this._agregar('piramide_minto_comunicacion', modulosSeleccionados, widgetsWeb, hojasImprimibles, pasosCeroInmediatos);
    }

    if (desacuerdoRolesHogar) {
      this._agregar('matriz_raci_hogar_equipo', modulosSeleccionados, widgetsWeb, hojasImprimibles, pasosCeroInmediatos);
    }

    // 9. Finanzas & Negocio
    if (ventaHoraSuelta) {
      this._agregar('paquetizacion_servicios_mes', modulosSeleccionados, widgetsWeb, hojasImprimibles, pasosCeroInmediatos);
      this._agregar('finanzas_503020', modulosSeleccionados, widgetsWeb, hojasImprimibles, pasosCeroInmediatos);
      this._agregar('fondo_reserva_paz', modulosSeleccionados, widgetsWeb, hojasImprimibles, pasosCeroInmediatos);
      this._agregar('oceano_azul_diferencial', modulosSeleccionados, widgetsWeb, hojasImprimibles, pasosCeroInmediatos);
    }

    if (dudaInversionCursos) {
      this._agregar('calculadora_roi_capacitaciones', modulosSeleccionados, widgetsWeb, hojasImprimibles, pasosCeroInmediatos);
      this._agregar('dnc_personal_aprendizaje', modulosSeleccionados, widgetsWeb, hojasImprimibles, pasosCeroInmediatos);
    }

    if (deseoEmprenderSinValidar) {
      this._agregar('design_thinking_prototipado', modulosSeleccionados, widgetsWeb, hojasImprimibles, pasosCeroInmediatos);
    }

    // 10. Especialidades de Nicho
    if (instructorDanzaFitness) {
      this._agregar('biblioteca_musical_coreografica', modulosSeleccionados, widgetsWeb, hojasImprimibles, pasosCeroInmediatos);
      this._agregar('pedagogia_quirurgica_bloques', modulosSeleccionados, widgetsWeb, hojasImprimibles, pasosCeroInmediatos);
    }

    if (serviciosTerreno) {
      this._agregar('mochila_operativa_salidas', modulosSeleccionados, widgetsWeb, hojasImprimibles, pasosCeroInmediatos);
    }

    return {
      cliente: nombre,
      totalModulosPrescritos: modulosSeleccionados.length,
      modulos: modulosSeleccionados,
      configuracionPortal: {
        widgetsRequeridos: [...new Set(widgetsWeb)],
        totalHojasHubImprimibles: hojasImprimibles.length,
        hojasHub: hojasImprimibles
      },
      planAccion24Horas: pasosCeroInmediatos
    };
  }

  _agregar(idModulo, listaModulos, widgets, hojas, pasosCero) {
    const mod = this.db.find(m => m.id === idModulo);
    if (!mod || listaModulos.some(m => m.id === idModulo)) return;

    listaModulos.push({
      id: mod.id,
      nombre: mod.nombre_oficial,
      metafora: mod.nombre_humano,
      pilar: mod.pilar,
      fase: mod.fase_madurez,
      pasoCero: mod.protocolo_paso_cero,
      carta: mod.carta_tactica_asociada,
      kpi: mod.metrica_impacto
    });

    if (mod.doble_salida?.componente_web?.widget_id) {
      widgets.push(mod.doble_salida.componente_web.widget_id);
    }

    if (mod.doble_salida?.imprimible_fisico?.template_id) {
      hojas.push({
        templateId: mod.doble_salida.imprimible_fisico.template_id,
        seccion: mod.doble_salida.imprimible_fisico.seccion_hub
      });
    }

    if (mod.protocolo_paso_cero) {
      pasosCero.push({
        moduloId: mod.id,
        accion: mod.protocolo_paso_cero
      });
    }
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = AICCPrescriptorEngine;
} else if (typeof window !== 'undefined') {
  window.AICCPrescriptorEngine = AICCPrescriptorEngine;
}
