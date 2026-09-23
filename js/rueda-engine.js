/**
 * ==========================================================================
 * MOTOR MAESTRO DE LA RUEDA DE LA VIDA (M03) • SSOT
 * Administración Humana / AICC Architecture
 * Soporta Touch Drag, Mobile Tabs, Prescripción Clínica y Exportación WhatsApp
 * ==========================================================================
 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.initRuedaEngine = factory().initRuedaEngine;
        root.RuedaEngine = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {

    // 8 Dimensiones Sistémicas Fundamentales (Paul J. Meyer / AICC)
    const DEFAULT_DIMENSIONS = [
        { name: "Salud y Bienestar", icon: "❤️", score: 6, pain: "", action: "" },
        { name: "Finanzas Personales", icon: "📊", score: 5, pain: "", action: "" },
        { name: "Carrera / Negocio", icon: "💼", score: 7, pain: "", action: "" },
        { name: "Familia y Relaciones", icon: "🤝", score: 8, pain: "", action: "" },
        { name: "Crecimiento Personal", icon: "🧠", score: 6, pain: "", action: "" },
        { name: "Ocio y Diversión", icon: "🎨", score: 4, pain: "", action: "" },
        { name: "Entorno Físico", icon: "🏡", score: 5, pain: "", action: "" },
        { name: "Mental / Espiritual", icon: "🧘", score: 6, pain: "", action: "" }
    ];

    // Metadata Didáctica y Preguntas al Hueso
    const DIMENSION_METADATA = {
        "Salud y Bienestar": {
            guide: "Energía vital, calidad de sueño, nutrición, descanso biológico y actividad física.",
            question: "¿Tu cuerpo tiene energía suficiente para sostener tu visión sin depender de estimulantes?",
            painPlaceholder: "Ej: Duermo 5h y despierto agotado / Sin constancia en ejercicio",
            actionPlaceholder: "Ej: Apagar pantallas a las 22:30 hoy / Agendar 3 caminatas"
        },
        "Finanzas Personales": {
            guide: "Claridad de gastos, control de presupuesto, fondo de paz mental y ahorro.",
            question: "¿Tus finanzas te dan paz o te obligan a aceptar clientes abusivos por necesidad?",
            painPlaceholder: "Ej: No sé dónde se va la plata / Llego a fin de mes con ansiedad",
            actionPlaceholder: "Ej: Anotar todos los gastos de 7 días / Probar plantilla 50/30/20"
        },
        "Carrera / Negocio": {
            guide: "Foco estratégico, valor de mercado, proyectos clave vs. incendios del día a día.",
            question: "¿El negocio trabaja para ti o tú te convertiste en el empleado peor pagado de tu empresa?",
            painPlaceholder: "Ej: Paso el día apagando incendios y no avanzo en mis prioridades",
            actionPlaceholder: "Ej: Definir mi prioridad #1 de mañana antes de cerrar la jornada hoy"
        },
        "Familia y Relaciones": {
            guide: "Presencia real, desconexión laboral en casa, comunicación y tiempo de calidad.",
            question: "¿Cuándo estás con tu familia estás presente o tienes la mente en los correos?",
            painPlaceholder: "Ej: Respondo chats de trabajo en la cena familiar / Poca paciencia en casa",
            actionPlaceholder: "Ej: Dejar el teléfono en otra habitación durante la cena"
        },
        "Crecimiento Personal": {
            guide: "Lectura, desarrollo de habilidades, autorreflexión y cultivo intelectual.",
            question: "¿Cuánto tiempo dedicas a nutrir tu cabeza fuera de la rutina operativa?",
            painPlaceholder: "Ej: Compro libros que nunca leo / No tengo tiempo de aprender",
            actionPlaceholder: "Ej: Leer 10 minutos de un libro al despertar"
        },
        "Ocio y Diversión": {
            guide: "Desconexión libre de culpa, pasatiempos, arte, risa y descanso lúdico.",
            question: "¿Te permites descansar sin sentir culpa de que deberías estar produciendo?",
            painPlaceholder: "Ej: Siento culpa si no trabajo un domingo / Sin hobbies",
            actionPlaceholder: "Ej: Bloquear una tarde libre innegociable este fin de semana"
        },
        "Entorno Físico": {
            guide: "Orden 5S de tu espacio, claridad visual, comodidad y limpieza del entorno.",
            question: "¿Tu espacio de trabajo te genera foco mental o estrés por desorden?",
            painPlaceholder: "Ej: Mi escritorio es un caos de papeles y cables que me desconcentra",
            actionPlaceholder: "Ej: Aplicar orden 5S y despejar mi mesa durante 15 minutos"
        },
        "Mental / Espiritual": {
            guide: "Paz interior, presencia, nivel de ruido diario y vaciado de la RAM mental.",
            question: "¿Tu cabeza se silencia al acostarte o tienes 40 pestañas abiertas al dormir?",
            painPlaceholder: "Ej: Rumiación nocturna y ansiedad por pendientes sin anotar",
            actionPlaceholder: "Ej: Hacer una captura mental GTD en libreta antes de acostarme"
        }
    };

    // Arquetipos y Presets Didácticos
    const PRESETS = {
        burnout: {
            name: "Emprendedor en Burnout",
            scores: [3, 6, 9, 4, 5, 2, 5, 3]
        },
        piloto: {
            name: "Piloto Automático",
            scores: [5, 7, 7, 5, 4, 3, 6, 4]
        },
        equilibrio: {
            name: "Equilibrio Consciente",
            scores: [8, 8, 7, 8, 7, 7, 8, 8]
        },
        reset: {
            name: "Reinicio Neutro (5/10)",
            scores: [5, 5, 5, 5, 5, 5, 5, 5]
        }
    };

    class RuedaEngineInstance {
        constructor(options = {}) {
            this.storageKey = options.storageKey || "aicc_rueda_dimensions";
            this.historyStorageKey = options.historyStorageKey || "aicc_rueda_history";
            this.container = options.container || document.body;
            this.onUpdate = options.onUpdate || null;
            this.readOnly = !!options.readOnly;

            // Coordenadas SVG Radar
            this.cx = 200;
            this.cy = 200;
            this.rMax = 145;
            this.activeDragIndex = null;
            this.wasDragged = false;
            this.activeTab = "radar"; // radar | dimensions | diagnosis | history

            this.dimensions = [];
            this.loadData();
            this.init();
        }

        loadData() {
            try {
                const stored = localStorage.getItem(this.storageKey);
                if (stored) {
                    const parsed = JSON.parse(stored);
                    if (Array.isArray(parsed) && parsed.length === 8) {
                        this.dimensions = parsed;
                        return;
                    }
                }
            } catch (e) {
                console.warn("[RuedaEngine] Error leyendo storage:", e);
            }
            this.dimensions = JSON.parse(JSON.stringify(DEFAULT_DIMENSIONS));
            this.saveData();
        }

        saveData() {
            try {
                localStorage.setItem(this.storageKey, JSON.stringify(this.dimensions));
            } catch (e) {
                console.error("[RuedaEngine] Error guardando storage:", e);
            }
            if (typeof this.onUpdate === "function") {
                this.onUpdate(this.dimensions);
            }
        }

        init() {
            this.renderSvgWheel();
            this.renderDimensionCards();
            this.updateMetricsAndPrescription();
            this.setupMobileTabs();
            this.setupTouchDrag();
            this.updateHistoryDropdown();
        }

        /* -------------------------------------------------------------
           RENDERIZADO DEL RADAR SVG
        ------------------------------------------------------------- */
        renderSvgWheel() {
            const svg = document.getElementById("wheelSvg");
            if (!svg) return;

            // Limpiar grupos dinámicos
            const gridGroup = document.getElementById("rdGridGroup");
            const axesGroup = document.getElementById("rdAxesGroup");
            const labelsGroup = document.getElementById("rdLabelsGroup");
            const verticesGroup = document.getElementById("rdVerticesGroup");
            const polygon = document.getElementById("rdPolygon");

            if (gridGroup) gridGroup.innerHTML = "";
            if (axesGroup) axesGroup.innerHTML = "";
            if (labelsGroup) labelsGroup.innerHTML = "";
            if (verticesGroup) verticesGroup.innerHTML = "";

            // 1. Círculos concéntricos (del nivel 1 al 10)
            if (gridGroup) {
                for (let level = 1; level <= 10; level++) {
                    const r = (level / 10) * this.rMax;
                    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                    circle.setAttribute("cx", this.cx);
                    circle.setAttribute("cy", this.cy);
                    circle.setAttribute("r", r);

                    if (level === 5) {
                        circle.setAttribute("class", "rd-grid-circle-bold");
                    } else if (level === 10) {
                        circle.setAttribute("class", "rd-grid-circle-max");
                    } else {
                        circle.setAttribute("class", "rd-grid-circle");
                    }
                    gridGroup.appendChild(circle);

                    // Indicador numérico sutil en el eje vertical
                    if (level % 2 === 0) {
                        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
                        text.setAttribute("x", this.cx + 4);
                        text.setAttribute("y", this.cy - r + 3);
                        text.setAttribute("fill", "rgba(148, 163, 184, 0.4)");
                        text.setAttribute("font-size", "8");
                        text.setAttribute("font-family", "JetBrains Mono");
                        text.textContent = level;
                        gridGroup.appendChild(text);
                    }
                }
            }

            // 2. Ejes radiales y etiquetas
            this.dimensions.forEach((dim, idx) => {
                const angle = (idx * 45 - 90) * (Math.PI / 180);
                const xEdge = this.cx + this.rMax * Math.cos(angle);
                const yEdge = this.cy + this.rMax * Math.sin(angle);

                // Línea de eje
                if (axesGroup) {
                    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
                    line.setAttribute("x1", this.cx);
                    line.setAttribute("y1", this.cy);
                    line.setAttribute("x2", xEdge);
                    line.setAttribute("y2", yEdge);
                    line.setAttribute("class", "rd-axis-line");
                    axesGroup.appendChild(line);
                }

                // Etiqueta externa interactiva
                if (labelsGroup) {
                    const rLabel = this.rMax + 26;
                    const xLabel = this.cx + rLabel * Math.cos(angle);
                    const yLabel = this.cy + rLabel * Math.sin(angle) + 4;

                    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
                    text.setAttribute("x", xLabel);
                    text.setAttribute("y", yLabel);
                    text.setAttribute("class", `rd-axis-label ${dim.score <= 5 ? 'alert' : ''}`);
                    text.setAttribute("id", `rd-axis-label-${idx}`);
                    text.textContent = `${dim.icon} ${dim.name.split(' ')[0]}`;
                    text.addEventListener("click", () => this.scrollToCard(idx));
                    labelsGroup.appendChild(text);
                }
            });

            this.updatePolygonAndVertices();
        }

        updatePolygonAndVertices() {
            const polygon = document.getElementById("rdPolygon");
            const verticesGroup = document.getElementById("rdVerticesGroup");
            if (!polygon || !verticesGroup) return;

            verticesGroup.innerHTML = "";
            const points = [];

            this.dimensions.forEach((dim, idx) => {
                const angle = (idx * 45 - 90) * (Math.PI / 180);
                const r = (dim.score / 10) * this.rMax;
                const px = this.cx + r * Math.cos(angle);
                const py = this.cy + r * Math.sin(angle);

                points.push(`${px},${py}`);

                // Hitbox invisible para touch cómodo
                const hitbox = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                hitbox.setAttribute("cx", px);
                hitbox.setAttribute("cy", py);
                hitbox.setAttribute("r", 24);
                hitbox.setAttribute("class", "rd-vertex-hitbox");
                hitbox.setAttribute("data-index", idx);

                // Eventos de arrastre
                hitbox.addEventListener("mousedown", (e) => this.startDrag(idx, e));
                hitbox.addEventListener("touchstart", (e) => this.startDrag(idx, e), { passive: false });
                hitbox.addEventListener("click", () => {
                    if (!this.wasDragged) this.scrollToCard(idx);
                });

                // Vértice visible
                const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                dot.setAttribute("cx", px);
                dot.setAttribute("cy", py);
                dot.setAttribute("class", "rd-vertex-point");
                dot.setAttribute("id", `rd-dot-${idx}`);

                if (dim.score <= 5) {
                    dot.style.stroke = "var(--rd-coral-light)";
                } else if (dim.score <= 7) {
                    dot.style.stroke = "var(--rd-amber-light)";
                } else {
                    dot.style.stroke = "var(--rd-teal-light)";
                }

                verticesGroup.appendChild(hitbox);
                verticesGroup.appendChild(dot);

                // Actualizar etiqueta del eje
                const label = document.getElementById(`rd-axis-label-${idx}`);
                if (label) {
                    if (dim.score <= 5) {
                        label.classList.add("alert");
                    } else {
                        label.classList.remove("alert");
                    }
                }
            });

            polygon.setAttribute("points", points.join(" "));
        }

        /* -------------------------------------------------------------
           TOUCH & MOUSE DRAG EN EL RADAR
        ------------------------------------------------------------- */
        setupTouchDrag() {
            this.handleDragBound = this.handleDrag.bind(this);
            this.stopDragBound = this.stopDrag.bind(this);
        }

        startDrag(idx, event) {
            if (this.readOnly) return;
            this.activeDragIndex = idx;
            this.wasDragged = false;
            event.preventDefault();

            window.addEventListener("mousemove", this.handleDragBound);
            window.addEventListener("mouseup", this.stopDragBound);
            window.addEventListener("touchmove", this.handleDragBound, { passive: false });
            window.addEventListener("touchend", this.stopDragBound);
        }

        handleDrag(event) {
            if (this.activeDragIndex === null) return;
            this.wasDragged = true;
            event.preventDefault();

            const svg = document.getElementById("wheelSvg");
            if (!svg) return;

            let clientX, clientY;
            if (event.touches && event.touches.length > 0) {
                clientX = event.touches[0].clientX;
                clientY = event.touches[0].clientY;
            } else {
                clientX = event.clientX;
                clientY = event.clientY;
            }

            const pt = svg.createSVGPoint();
            pt.x = clientX;
            pt.y = clientY;
            const svgP = pt.matrixTransform(svg.getScreenCTM().inverse());

            const dx = svgP.x - this.cx;
            const dy = svgP.y - this.cy;
            const distance = Math.sqrt(dx * dx + dy * dy);

            const rawScore = (distance / this.rMax) * 10;
            const newScore = Math.max(1, Math.min(10, Math.round(rawScore)));

            if (this.dimensions[this.activeDragIndex].score !== newScore) {
                this.setScore(this.activeDragIndex, newScore, false);
            }
        }

        stopDrag() {
            this.activeDragIndex = null;
            window.removeEventListener("mousemove", this.handleDragBound);
            window.removeEventListener("mouseup", this.stopDragBound);
            window.removeEventListener("touchmove", this.handleDragBound);
            window.removeEventListener("touchend", this.stopDragBound);

            this.saveData();
            this.updatePolygonAndVertices();
            this.updateMetricsAndPrescription();
        }

        /* -------------------------------------------------------------
           RENDERIZADO DE TARJETAS DE DIMENSIONES (MOBILE-FIRST)
        ------------------------------------------------------------- */
        renderDimensionCards() {
            const container = document.getElementById("rdDimensionsContainer");
            if (!container) return;

            container.innerHTML = "";

            this.dimensions.forEach((dim, idx) => {
                const meta = DIMENSION_METADATA[dim.name] || {};
                const statusClass = dim.score <= 5 ? 'alert' : (dim.score <= 7 ? 'warning' : 'solid');

                const card = document.createElement("div");
                card.className = `rd-dim-card ${statusClass}`;
                card.id = `rd-dim-card-${idx}`;

                // Generar los 10 pills táctiles (1-10)
                let pillsHtml = "";
                for (let num = 1; num <= 10; num++) {
                    const activeClass = num === dim.score ? 'active' : '';
                    pillsHtml += `<button type="button" class="rd-score-pill-btn ${activeClass}" onclick="window.__ruedaEngine.setScore(${idx}, ${num})">${num}</button>`;
                }

                card.innerHTML = `
                    <div class="rd-dim-top">
                        <div class="rd-dim-info">
                            <h3 class="rd-dim-name">
                                <span class="rd-dim-icon">${dim.icon}</span> ${idx + 1}. ${dim.name}
                            </h3>
                            <span class="rd-dim-guide">💡 ${meta.guide || ''}</span>
                        </div>
                        <div class="rd-dim-score-badge">
                            <span class="score-number" id="rd-score-num-${idx}">${dim.score}</span>
                            <span class="score-max">/10</span>
                        </div>
                    </div>

                    <div class="rd-score-selector-wrapper">
                        <div class="rd-score-pills" id="rd-pills-row-${idx}">
                            ${pillsHtml}
                        </div>
                    </div>

                    <div class="rd-inputs-group">
                        <div class="rd-input-wrap">
                            <label class="rd-input-label">
                                <i class="fa-solid fa-triangle-exclamation"></i> Fuga o molestia principal:
                            </label>
                            <input type="text" class="rd-text-input" 
                                value="${dim.pain || ''}" 
                                placeholder="${meta.painPlaceholder || '¿Qué drena tu energía aquí?'}"
                                oninput="window.__ruedaEngine.updatePain(${idx}, this.value)"
                            />
                        </div>
                        <div class="rd-input-wrap">
                            <label class="rd-input-label">
                                <i class="fa-solid fa-bolt"></i> Microacción de 24 horas:
                            </label>
                            <input type="text" class="rd-text-input" 
                                value="${dim.action || ''}" 
                                placeholder="${meta.actionPlaceholder || 'Paso simple e inmediato...'}"
                                oninput="window.__ruedaEngine.updateAction(${idx}, this.value)"
                            />
                        </div>
                    </div>
                `;

                container.appendChild(card);
            });
        }

        /* -------------------------------------------------------------
           ACTUALIZACIÓN DE PUNTAJES Y TEXTOS
        ------------------------------------------------------------- */
        setScore(idx, score, triggerSave = true) {
            score = Math.max(1, Math.min(10, parseInt(score) || 5));
            this.dimensions[idx].score = score;

            // Actualizar badge numérico
            const scoreNum = document.getElementById(`rd-score-num-${idx}`);
            if (scoreNum) scoreNum.textContent = score;

            // Actualizar pills de botones
            const pillsRow = document.getElementById(`rd-pills-row-${idx}`);
            if (pillsRow) {
                const buttons = pillsRow.querySelectorAll(".rd-score-pill-btn");
                buttons.forEach((btn, bIdx) => {
                    if (bIdx + 1 === score) {
                        btn.classList.add("active");
                    } else {
                        btn.classList.remove("active");
                    }
                });
            }

            // Actualizar estado visual de la tarjeta
            const card = document.getElementById(`rd-dim-card-${idx}`);
            if (card) {
                card.classList.remove("alert", "warning", "solid");
                const newClass = score <= 5 ? 'alert' : (score <= 7 ? 'warning' : 'solid');
                card.classList.add(newClass);
            }

            this.updatePolygonAndVertices();
            this.updateMetricsAndPrescription();

            if (triggerSave) {
                this.saveData();
            }
        }

        updatePain(idx, val) {
            this.dimensions[idx].pain = val;
            this.saveData();
        }

        updateAction(idx, val) {
            this.dimensions[idx].action = val;
            this.saveData();
        }

        /* -------------------------------------------------------------
           CÁLCULO DE MÉTRICAS & PRESCRIPIÓN CLÍNICA INTELIGENTE
        ------------------------------------------------------------- */
        updateMetricsAndPrescription() {
            const scores = this.dimensions.map(d => d.score);
            const sum = scores.reduce((a, b) => a + b, 0);
            const avg = (sum / scores.length).toFixed(1);

            // Desviación estándar (Medida del rodaje de la rueda)
            const mean = sum / scores.length;
            const variance = scores.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / scores.length;
            const stdDev = Math.sqrt(variance).toFixed(1);

            // Conteo de áreas críticas
            const criticals = this.dimensions.filter(d => d.score <= 5);
            const criticalCount = criticals.length;

            // Actualizar widgets numéricos
            const avgElem = document.getElementById("rdMetricAvg");
            const critElem = document.getElementById("rdMetricCrit");
            const balanceElem = document.getElementById("rdMetricBalance");

            if (avgElem) {
                avgElem.textContent = `${avg}/10`;
                avgElem.className = `rd-metric-val ${avg < 5.5 ? 'coral' : (avg < 7.5 ? 'amber' : 'teal')}`;
            }

            if (critElem) {
                critElem.textContent = criticalCount;
                critElem.className = `rd-metric-val ${criticalCount > 2 ? 'coral' : (criticalCount > 0 ? 'amber' : 'teal')}`;
            }

            if (balanceElem) {
                let balanceLabel = "Fluido";
                let balanceColor = "teal";
                if (stdDev >= 2.5) {
                    balanceLabel = "Estrella Ninja";
                    balanceColor = "coral";
                } else if (stdDev >= 1.5) {
                    balanceLabel = "Desigual";
                    balanceColor = "amber";
                }
                balanceElem.textContent = balanceLabel;
                balanceElem.className = `rd-metric-val ${balanceColor}`;
                const sub = document.getElementById("rdMetricBalanceSub");
                if (sub) sub.textContent = `Dispersión: ±${stdDev}`;
            }

            // Diagnóstico Clínico Dinámico
            this.generateClinicalPrescription(avg, stdDev, criticals);
        }

        generateClinicalPrescription(avg, stdDev, criticals) {
            const container = document.getElementById("rdPrescriptionContent");
            if (!container) return;

            const work = this.dimensions.find(d => d.name.includes("Carrera"))?.score || 5;
            const health = this.dimensions.find(d => d.name.includes("Salud"))?.score || 5;
            const leisure = this.dimensions.find(d => d.name.includes("Ocio"))?.score || 5;
            const mental = this.dimensions.find(d => d.name.includes("Mental"))?.score || 5;
            const finances = this.dimensions.find(d => d.name.includes("Finanzas"))?.score || 5;

            let diagnosisTitle = "Diagnóstico Operativo Estable";
            let diagnosisBody = "";
            let recommendedTool = "Time Blocker Semanal";
            let toolLink = "apps/timeblocker/index.html";

            // Patrón 1: Emprendedor Mártir (Negocio alto, Salud u Ocio colapsados)
            if (work >= 7 && (health <= 4 || leisure <= 4)) {
                diagnosisTitle = "🚨 Síndrome del Emprendedor Mártir";
                diagnosisBody = `Tu negocio está creciendo a costa de tu propio cuerpo y vitalidad (${work}/10 en Carrera vs ${health}/10 en Salud y ${leisure}/10 en Ocio). Como dice la metodología AICC: <em>un negocio exitoso sobre un dueño quebrado no es éxito, es un error de cálculo</em>.`;
                recommendedTool = "Time Blocker Semanal (Proteger Bloques de Recuperación)";
                toolLink = "apps/timeblocker/index.html";
            }
            // Patrón 2: Rueda Saltarina / Estrella Ninja (Gran dispersión)
            else if (stdDev >= 2.5) {
                diagnosisTitle = "⚠️ Rueda con Dispersión Crítica (Estrella Ninja)";
                diagnosisBody = `Tu rueda no puede rodar suavemente porque tiene picos muy altos y valles muy profundos (Dispersión ±${stdDev}). A 100 km/h en la carretera, este desbalance destruirá los amortiguadores de tu salud y tus relaciones.`;
                recommendedTool = "Matriz de Eisenhower (Eliminar Tareas Ladronas)";
                toolLink = "apps/eisenhower/index.html";
            }
            // Patrón 3: RAM Mental Saturada
            else if (mental <= 4) {
                diagnosisTitle = "🧠 Sobrecarga Cognitiva y RAM Saturada";
                diagnosisBody = `Puntaje bajo en Paz Mental (${mental}/10). Tienes demasiadas pestañas abiertas en la cabeza al dormir. Necesitas vaciar los pendientes en un Inbox externo para recuperar el sueño reparador.`;
                recommendedTool = "Tablero GTD Pro (Captura de RAM Mental)";
                toolLink = "apps/gtd/index.html";
            }
            // Patrón 4: Fuga Financiera
            else if (finances <= 5) {
                diagnosisTitle = "📊 Vulnerabilidad Financiera y Fuga de Flujo";
                diagnosisBody = `Tu tranquilidad económica está comprometida (${finances}/10). Sin claridad financiera, el negocio te obliga a operar en modo de supervivencia.`;
                recommendedTool = "Calculadora Presupuesto 50/30/20";
                toolLink = "05_Presupuesto_50_30_20/index.html";
            }
            // Patrón 5: Armonía Sistémica
            else if (criticals.length === 0 && avg >= 7.0) {
                diagnosisTitle = "✨ Alta Coherencia y Equilibrio Sistémico";
                diagnosisBody = `Tu rueda tiene un rodaje equilibrado (Promedio ${avg}/10 sin áreas críticas activas). Tu foco ahora es la optimización y la protección innegociable de tus límites semanales.`;
                recommendedTool = "Generador de Horarios & Sondeo Semanal";
                toolLink = "apps/horarios/index.html";
            } else {
                diagnosisTitle = `Diagnóstico: ${criticals.length} Fugas Activas`;
                const critNames = criticals.map(c => `<strong>${c.name}</strong> (${c.score}/10)`).join(", ");
                diagnosisBody = `Detectamos atención urgente en: ${critNames}. Comienza ejecutando las microacciones de 24 horas registradas para cerrar las brechas antes del fin de semana.`;
                recommendedTool = "Time Blocker Semanal";
                toolLink = "apps/timeblocker/index.html";
            }

            container.innerHTML = `
                <div style="font-weight:700; color:#fff; font-size:0.95rem; margin-bottom:4px;">${diagnosisTitle}</div>
                <div style="font-size:0.84rem; color:var(--rd-text-secondary); line-height:1.5;">${diagnosisBody}</div>
                <div style="margin-top:10px;">
                    <a href="${toolLink}" class="rd-prescription-tag" style="text-decoration:none;">
                        👉 Herramienta Prescrita: <strong>${recommendedTool}</strong> &rarr;
                    </a>
                </div>
            `;
        }

        /* -------------------------------------------------------------
           APLICACIÓN DE PRESETS
        ------------------------------------------------------------- */
        applyPreset(presetKey) {
            const preset = PRESETS[presetKey];
            if (!preset) return;

            if (confirm(`¿Aplicar arquetipo "${preset.name}"? Esto ajustará los puntajes actuales.`)) {
                preset.scores.forEach((score, idx) => {
                    this.dimensions[idx].score = score;
                });
                this.saveData();
                this.renderDimensionCards();
                this.updatePolygonAndVertices();
                this.updateMetricsAndPrescription();
                this.showToast(`Arquetipo "${preset.name}" aplicado.`);
            }
        }

        /* -------------------------------------------------------------
           MOBILE TABS & NAVEGACIÓN
        ------------------------------------------------------------- */
        setupMobileTabs() {
            const tabs = document.querySelectorAll(".rd-tab-btn");
            tabs.forEach(tab => {
                tab.addEventListener("click", () => {
                    const tabKey = tab.dataset.tab;
                    this.switchTab(tabKey);
                });
            });
        }

        switchTab(tabKey) {
            this.activeTab = tabKey;
            document.querySelectorAll(".rd-tab-btn").forEach(btn => {
                btn.classList.toggle("active", btn.dataset.tab === tabKey);
            });

            // En móviles, controlar visibilidad de secciones
            const visualCol = document.getElementById("rdVisualCol");
            const dimCol = document.getElementById("rdDimensionsCol");
            const prescriptionCard = document.getElementById("rdPrescriptionCard");
            const historyPanel = document.getElementById("rdHistoryPanel");

            if (window.innerWidth <= 1024) {
                const dimHeader = dimCol ? dimCol.querySelector(".rd-col-header") : null;
                const dimContainer = document.getElementById("rdDimensionsContainer");

                if (tabKey === "radar") {
                    visualCol.classList.remove("rd-section-hidden");
                    dimCol.classList.add("rd-section-hidden");
                    if (prescriptionCard) prescriptionCard.classList.add("rd-section-hidden");
                    if (historyPanel) historyPanel.classList.add("rd-section-hidden");
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else if (tabKey === "dimensions") {
                    visualCol.classList.add("rd-section-hidden");
                    dimCol.classList.remove("rd-section-hidden");
                    if (dimHeader) dimHeader.classList.remove("rd-section-hidden");
                    if (dimContainer) dimContainer.classList.remove("rd-section-hidden");
                    if (prescriptionCard) prescriptionCard.classList.add("rd-section-hidden");
                    if (historyPanel) historyPanel.classList.add("rd-section-hidden");
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else if (tabKey === "diagnosis") {
                    visualCol.classList.remove("rd-section-hidden");
                    dimCol.classList.add("rd-section-hidden");
                    if (prescriptionCard) {
                        prescriptionCard.classList.remove("rd-section-hidden");
                        prescriptionCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                    if (historyPanel) historyPanel.classList.add("rd-section-hidden");
                } else if (tabKey === "history") {
                    visualCol.classList.add("rd-section-hidden");
                    dimCol.classList.remove("rd-section-hidden");
                    if (dimHeader) dimHeader.classList.add("rd-section-hidden");
                    if (dimContainer) dimContainer.classList.add("rd-section-hidden");
                    if (prescriptionCard) prescriptionCard.classList.add("rd-section-hidden");
                    if (historyPanel) historyPanel.classList.remove("rd-section-hidden");
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            } else {
                // Desktop: Restaurar todo
                const dimHeader = dimCol ? dimCol.querySelector(".rd-col-header") : null;
                const dimContainer = document.getElementById("rdDimensionsContainer");
                visualCol.classList.remove("rd-section-hidden");
                dimCol.classList.remove("rd-section-hidden");
                if (dimHeader) dimHeader.classList.remove("rd-section-hidden");
                if (dimContainer) dimContainer.classList.remove("rd-section-hidden");
                if (prescriptionCard) prescriptionCard.classList.remove("rd-section-hidden");
                if (historyPanel) historyPanel.classList.remove("rd-section-hidden");
            }
        }

        scrollToCard(idx) {
            // Si estamos en móvil y en otra pestaña, cambiamos a dimensions
            if (window.innerWidth <= 1024 && this.activeTab !== "dimensions") {
                this.switchTab("dimensions");
            }
            const card = document.getElementById(`rd-dim-card-${idx}`);
            if (card) {
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                card.style.borderColor = "var(--rd-teal-light)";
                card.style.boxShadow = "0 0 20px var(--rd-teal-glow)";
                setTimeout(() => {
                    card.style.borderColor = "";
                    card.style.boxShadow = "";
                }, 1200);
            }
        }

        /* -------------------------------------------------------------
           SNAPSHOTS & HISTORIAL DE MESES
        ------------------------------------------------------------- */
        saveSnapshot() {
            const input = document.getElementById("rdHistoryMonthInput");
            const monthName = input ? input.value.trim() : "";
            if (!monthName) {
                alert("Por favor escribe un nombre o fecha para el snapshot (ej. Marzo 2026).");
                return;
            }

            let history = [];
            try {
                history = JSON.parse(localStorage.getItem(this.historyStorageKey) || "[]");
            } catch (e) { history = []; }

            const existingIdx = history.findIndex(h => h.date.toLowerCase() === monthName.toLowerCase());
            const snapshot = {
                date: monthName,
                timestamp: new Date().toISOString(),
                data: JSON.parse(JSON.stringify(this.dimensions))
            };

            if (existingIdx !== -1) {
                if (confirm(`Ya existe una evaluación para "${monthName}". ¿Deseas sobrescribirla?`)) {
                    history[existingIdx] = snapshot;
                } else {
                    return;
                }
            } else {
                history.push(snapshot);
            }

            localStorage.setItem(this.historyStorageKey, JSON.stringify(history));
            this.updateHistoryDropdown();
            this.showToast(`Snapshot "${monthName}" guardado.`);
            if (input) input.value = "";
        }

        loadSnapshot(monthName) {
            if (!monthName) return;
            let history = [];
            try {
                history = JSON.parse(localStorage.getItem(this.historyStorageKey) || "[]");
            } catch (e) { return; }

            const found = history.find(h => h.date === monthName);
            if (found && Array.isArray(found.data)) {
                if (confirm(`¿Cargar la evaluación guardada de "${monthName}"?`)) {
                    this.dimensions = JSON.parse(JSON.stringify(found.data));
                    this.saveData();
                    this.renderDimensionCards();
                    this.updatePolygonAndVertices();
                    this.updateMetricsAndPrescription();
                    this.showToast(`Cargada evaluación: ${monthName}`);
                }
            }
        }

        deleteSelectedSnapshot() {
            const select = document.getElementById("rdHistorySelect");
            const monthName = select ? select.value : "";
            if (!monthName) {
                alert("Selecciona un mes del historial para eliminar.");
                return;
            }

            if (confirm(`¿Eliminar definitivamente el snapshot de "${monthName}"?`)) {
                let history = JSON.parse(localStorage.getItem(this.historyStorageKey) || "[]");
                history = history.filter(h => h.date !== monthName);
                localStorage.setItem(this.historyStorageKey, JSON.stringify(history));
                this.updateHistoryDropdown();
                this.showToast(`Snapshot eliminado.`);
            }
        }

        updateHistoryDropdown() {
            const select = document.getElementById("rdHistorySelect");
            if (!select) return;

            select.innerHTML = '<option value="">-- Cargar mes anterior --</option>';
            try {
                const history = JSON.parse(localStorage.getItem(this.historyStorageKey) || "[]");
                history.forEach(item => {
                    const opt = document.createElement("option");
                    opt.value = item.date;
                    opt.textContent = `${item.date} (${new Date(item.timestamp || Date.now()).toLocaleDateString()})`;
                    select.appendChild(opt);
                });
            } catch (e) {
                console.warn("[RuedaEngine] Error leyendo historial:", e);
            }
        }

        /* -------------------------------------------------------------
           EXPORTACIÓN WHATSAPP & CLIPBOARD
        ------------------------------------------------------------- */
        generateWhatsAppText() {
            const scores = this.dimensions.map(d => d.score);
            const avg = (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1);
            const criticals = this.dimensions.filter(d => d.score <= 5);

            let txt = `🎯 *DIAGNÓSTICO RUEDA DE LA VIDA (M03) • AICC*\n`;
            txt += `📅 Fecha: ${new Date().toLocaleDateString()}\n`;
            txt += `📊 *Promedio Vital:* ${avg}/10 | *Fugas Críticas:* ${criticals.length}\n`;
            txt += `────────────────────────────\n\n`;

            txt += `*PUNTAJES POR DIMENSIÓN:*\n`;
            this.dimensions.forEach((dim, idx) => {
                const alertTag = dim.score <= 5 ? " 🚨" : (dim.score <= 7 ? " ⚠️" : " ✅");
                txt += `${dim.icon} ${idx + 1}. *${dim.name}*: ${dim.score}/10${alertTag}\n`;
                if (dim.pain) txt += `   📌 Fuga: ${dim.pain}\n`;
                if (dim.action) txt += `   🎯 Acción 24h: ${dim.action}\n`;
            });

            txt += `\n────────────────────────────\n`;
            txt += `*PLAN DE VUELO INMEDIATO:*\n`;
            if (criticals.length > 0) {
                txt += `🚨 *Áreas Prioritarias a Intervenir:*\n`;
                criticals.forEach(c => {
                    txt += `• *${c.name}* (${c.score}/10): ${c.action || 'Ejecutar micro-hábito 24h'}\n`;
                });
            } else {
                txt += `✅ *Estructura Equilibrada:* Sin áreas críticas bajo 5/10. Mantener soberanía de bloques.\n`;
            }

            txt += `\n🔗 *Suite AICC:* http://localhost:8000/Administracion%20Humana/03_PRODUCTOS_Y_APLICACIONES/00_Sondeo_Maestro/suite.html`;
            return txt;
        }

        exportWhatsApp() {
            const text = this.generateWhatsAppText();
            const phone = "56975590132"; // WhatsApp oficial de Diego
            const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
            window.open(url, "_blank");
        }

        copyToClipboard() {
            const text = this.generateWhatsAppText();
            navigator.clipboard.writeText(text).then(() => {
                this.showToast("Resumen copiado al portapapeles.");
            }).catch(err => {
                console.error("Error al copiar:", err);
            });
        }

        /* -------------------------------------------------------------
           EXPORTACIÓN / IMPORTACIÓN JSON
        ------------------------------------------------------------- */
        exportJson() {
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.dimensions, null, 2));
            const dlAnchor = document.createElement('a');
            dlAnchor.setAttribute("href", dataStr);
            dlAnchor.setAttribute("download", `rueda_de_la_vida_${new Date().toISOString().slice(0, 10)}.json`);
            dlAnchor.click();
            this.showToast("Archivo JSON descargado.");
        }

        importJson(fileInput) {
            const file = fileInput.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const parsed = JSON.parse(e.target.result);
                    if (Array.isArray(parsed) && parsed.length === 8) {
                        this.dimensions = parsed;
                        this.saveData();
                        this.renderDimensionCards();
                        this.updatePolygonAndVertices();
                        this.updateMetricsAndPrescription();
                        this.showToast("Datos importados exitosamente.");
                    } else {
                        alert("El archivo no tiene el formato válido de 8 dimensiones.");
                    }
                } catch (err) {
                    alert("Error leyendo el archivo JSON: " + err.message);
                }
            };
            reader.readAsText(file);
            fileInput.value = "";
        }

        /* -------------------------------------------------------------
           UI TOAST HELPER
        ------------------------------------------------------------- */
        showToast(msg) {
            let toast = document.getElementById("rdToast");
            if (!toast) {
                toast = document.createElement("div");
                toast.id = "rdToast";
                toast.className = "rd-toast";
                document.body.appendChild(toast);
            }
            toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color:var(--rd-teal-light);"></i> ${msg}`;
            toast.classList.add("show");
            setTimeout(() => {
                toast.classList.remove("show");
            }, 2500);
        }
    }

    return {
        initRuedaEngine: function(options) {
            window.__ruedaEngine = new RuedaEngineInstance(options);
            return window.__ruedaEngine;
        },
        DEFAULT_DIMENSIONS,
        DIMENSION_METADATA,
        PRESETS
    };
}));
