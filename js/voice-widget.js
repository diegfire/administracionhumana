/**
 * AICC VOICE & ASSERTIVE COMMUNICATION WIDGET
 */

const VOICE_SCENARIOS = {
    error: {
        title: "🚨 Cometí un error o no cumplí un acuerdo",
        tool: "Pirámide de Minto (Conclusión Primero)",
        script: "“Papá, te quiero decir algo de frente y sin rodeos: hoy me equivoqué en [mencionar el error específico]. No te inventé ninguna excusa porque quiero cuidar nuestra confianza. Mi plan para solucionarlo de inmediato es [mencionar 1 acción concreta]. ¿Me puedes apoyar con esto?”",
        why: "Decir la conclusión en los primeros 5 segundos desarma la sospecha, demuestra valentía y elimina el hábito de la mentira."
    },
    school: {
        title: "📚 Me atrasé con una materia o tarea escolar",
        tool: "Los 5 Porqués + Feedback SBI",
        script: "“Papá, me quedé atrasado en [asignatura]. No te lo dije antes porque me dio vergüenza y me sentí abrumado. Revisé mis apuntes mínimos y sé exactamente qué me falta: son [número] ejercicios. Me voy a poner un bloque de 25 minutos ahora mismo para avanzar la mitad.”",
        why: "Admitir el retraso antes de que te pregunten demuestra que estás tomando el control de tu estudio sin esperar a que te interroguen."
    },
    abrumo: {
        title: "🤯 Me siento bloqueado / abrumado por las tareas",
        tool: "Feedback SBI (Situación, Comportamiento, Impacto)",
        script: "“Papá, cuando veo todo lo que tengo pendiente acumulado (Situación), me cuesta mucho arrancar y tiendo a paralizarme en silencio (Comportamiento). Siento mucha presión en el pecho y miedo a no rendir (Impacto). ¿Podemos sentarnos 5 minutos a elegir juntos el 'Paso Cero' en mi Kanban?”",
        why: "Ponerle nombre a la emoción evita que te encierres en tu cuarto o te aisles defensivamente."
    },
    pausa: {
        title: "⏳ Necesito una pausa antes de seguir hablando (Efecto Zeigarnik)",
        tool: "Protocolo Zeigarnik de Pausa con Retorno Fijo",
        script: "“Papá, en este momento me siento muy tenso y me cuesta pensar con calma para no responder mal. Te prometo que no estoy evadiendo la conversación. ¿Podemos hacer una pausa de 30 minutos y yo mismo me acerco a hablar contigo exactamente a las [hora fija, ej: 18:30]?”",
        why: "Poner una hora exacta de retorno desactiva el conflicto y te da tiempo para calmarte sin abrir un bucle de evasión."
    },
    verdad: {
        title: "🤍 Dije algo que no era verdad y quiero corregirlo",
        tool: "La Ventana de Johari (Foco en el Área Oculta)",
        script: "“Papá, antes te dije que [mencionar la mentira o versión incompleta], pero la verdad real es [decir la verdad completa]. Me dio miedo decírtelo en el momento, pero prefiero ser honesto contigo aunque me dé vergüenza. Asumo las consecuencias que correspondan.”",
        why: "Rectificar una mentira por propia iniciativa es la acción de mayor madurez y valor que suma triple a tu Cuenta de Confianza."
    },
    opinion: {
        title: "💭 Tengo una opinión diferente y quiero expresarla con respeto",
        tool: "Evaluación 360 & Comunicación Asertiva",
        script: "“Papá, entiendo tu punto de vista sobre [tema] y sé que buscas lo mejor para mí. Sin embargo, me gustaría compartirte cómo lo veo yo desde mi experiencia: [explicar con calma]. ¿Qué opinas si probamos un punto medio?”",
        why: "Aprender a disentir con argumentos y respeto te entrena en liderazgo personal sin caer en rebeldía infantil."
    }
};

function selectVoiceScenario(key) {
    const data = VOICE_SCENARIOS[key];
    if (!data) return;

    document.querySelectorAll('.scenario-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-scenario') === key) {
            btn.classList.add('active');
        }
    });

    const titleEl = document.getElementById("voice-scenario-title");
    const toolEl = document.getElementById("voice-scenario-tool");
    const scriptEl = document.getElementById("voice-scenario-script");
    const whyEl = document.getElementById("voice-scenario-why");

    if (titleEl) titleEl.innerText = data.title;
    if (toolEl) toolEl.innerText = data.tool;
    if (scriptEl) scriptEl.innerText = data.script;
    if (whyEl) whyEl.innerText = data.why;
}

function copyVoiceScript() {
    const scriptEl = document.getElementById("voice-scenario-script");
    if (!scriptEl) return;
    const text = scriptEl.innerText.replace(/^“|”$/g, '');
    navigator.clipboard.writeText(text).then(() => {
        const btn = document.getElementById("btn-copy-voice-script");
        if (btn) {
            const originalHTML = btn.innerHTML;
            btn.innerHTML = '<i class="fa-solid fa-check"></i> ¡Copiado!';
            btn.style.background = '#10B981';
            btn.style.color = '#FFFFFF';
            setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.style.background = '';
                btn.style.color = '';
            }, 2000);
        }
    }).catch(err => {
        alert("No se pudo copiar automáticamente: " + err);
    });
}
