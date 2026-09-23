/**
 * ==========================================================================
 * MOTOR MAESTRO DEL CÍRCULO DORADO (M08) • SSOT
 * Administración Humana / AICC Architecture
 * Simon Sinek, Propósito Inside-Out, Diagnóstico de Coherencia & Exportación WhatsApp
 * ==========================================================================
 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.initCirculoDoradoEngine = factory().initCirculoDoradoEngine;
        root.CirculoDoradoEngine = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {

    const PRESETS = {
        dondiego: {
            name: "Don Diego Vapor y Extracción",
            why: "Creemos que una casa limpia no es un lujo estético, sino el santuario de salud y paz donde una familia descansa tranquila.",
            how: "Con protocolos hospitalarios a 140°C, productos biodegradables inocuos para mascotas y una puntualidad estricta e innegociable.",
            what: "Servicios profesionales de limpieza profunda, desinfección y desmanchado de tapices, alfombras y colchones a vapor."
        },
        risalfajores: {
            name: "Risalfajores (Repostería Artesanal)",
            why: "Creemos que un dulce no es solo comida, sino una pausa de afecto sincero y alegría que alegra el día de quien lo recibe.",
            how: "Elaborando cada pieza 100% a mano con dosificación exacta de ManteMagic, ingredientes nobles y sin químicos industriales.",
            what: "Alfajores artesanales premium y cajas de regalo gourmet con texturas y rellenos inolvidables."
        },
        administracion: {
            name: "Administración Humana (AICC)",
            why: "Creemos que a los emprendedores no les falta disciplina sino herramientas humanas, y que un negocio exitoso sobre un dueño quebrado es un error de cálculo.",
            how: "Traduciendo herramientas complejas de grandes empresas a metodologías visuales simples 'en la palma de tu mano' y con empatía radical.",
            what: "Consultorías de claridad operativa, tableros de gestión del tiempo y sistemas de planificación integral para dueños de negocio."
        },
        reset: {
            name: "Reinicio Vacío",
            why: "",
            how: "",
            what: ""
        }
    };

    class CirculoDoradoEngineInstance {
        constructor(options = {}) {
            this.storageKey = options.storageKey || "ah_client_circulo_dorado";
            this.onUpdate = options.onUpdate || null;

            this.why = "";
            this.how = "";
            this.what = "";
            this.pitchMode = "inside_out"; // inside_out | elevator | social
            this.activeTab = "circulos"; // circulos | pitch | diagnosis

            this.loadData();
            this.init();
        }

        loadData() {
            try {
                const stored = localStorage.getItem(this.storageKey) || localStorage.getItem("aicc_circulo_dorado");
                if (stored) {
                    const parsed = JSON.parse(stored);
                    this.why = parsed.why || "";
                    this.how = parsed.how || "";
                    this.what = parsed.what || "";
                    return;
                }
            } catch (e) {
                console.warn("[CirculoDorado] Error cargando storage:", e);
            }

            // Datos por defecto inspirados en Don Diego
            this.why = PRESETS.dondiego.why;
            this.how = PRESETS.dondiego.how;
            this.what = PRESETS.dondiego.what;
            this.saveData();
        }

        saveData() {
            try {
                const payload = { why: this.why, how: this.how, what: this.what };
                localStorage.setItem(this.storageKey, JSON.stringify(payload));
            } catch (e) {
                console.error("[CirculoDorado] Error guardando storage:", e);
            }
            if (typeof this.onUpdate === "function") {
                this.onUpdate({ why: this.why, how: this.how, what: this.what });
            }
        }

        init() {
            const txtWhy = document.getElementById("cdInputWhy");
            const txtHow = document.getElementById("cdInputHow");
            const txtWhat = document.getElementById("cdInputWhat");

            if (txtWhy) txtWhy.value = this.why;
            if (txtHow) txtHow.value = this.how;
            if (txtWhat) txtWhat.value = this.what;

            this.setupMobileTabs();
            this.setupModeTabs();
            this.setupSvgRings();
            this.updatePitchAndDiagnosis();
        }

        /* -------------------------------------------------------------
           SVG INTERACTIVO: CÍRCULOS CONCÉNTRICOS
        ------------------------------------------------------------- */
        setupSvgRings() {
            const ringWhy = document.getElementById("cdRingWhy");
            const ringHow = document.getElementById("cdRingHow");
            const ringWhat = document.getElementById("cdRingWhat");

            if (ringWhy) ringWhy.addEventListener("click", () => this.focusCircle("why"));
            if (ringHow) ringHow.addEventListener("click", () => this.focusCircle("how"));
            if (ringWhat) ringWhat.addEventListener("click", () => this.focusCircle("what"));
        }

        focusCircle(circleKey) {
            // En móvil, si estamos en otra pestaña, cambiamos a circulos
            if (window.innerWidth <= 1024 && this.activeTab !== "circulos") {
                this.switchTab("circulos");
            }

            const inputId = circleKey === "why" ? "cdInputWhy" : (circleKey === "how" ? "cdInputHow" : "cdInputWhat");
            const inputElem = document.getElementById(inputId);
            const cardElem = document.getElementById(`cdCard${circleKey.charAt(0).toUpperCase() + circleKey.slice(1)}`);

            if (cardElem) {
                cardElem.scrollIntoView({ behavior: 'smooth', block: 'center' });
                cardElem.style.borderColor = "var(--cd-gold-light)";
                cardElem.style.boxShadow = "0 0 20px var(--cd-gold-glow)";
                setTimeout(() => {
                    cardElem.style.borderColor = "";
                    cardElem.style.boxShadow = "";
                }, 1200);
            }

            if (inputElem) {
                setTimeout(() => inputElem.focus(), 300);
            }
        }

        /* -------------------------------------------------------------
           ACTUALIZACIÓN DE TEXTOS Y EVENTOS
        ------------------------------------------------------------- */
        updateWhy(val) {
            this.why = val;
            this.saveData();
            this.updatePitchAndDiagnosis();
        }

        updateHow(val) {
            this.how = val;
            this.saveData();
            this.updatePitchAndDiagnosis();
        }

        updateWhat(val) {
            this.what = val;
            this.saveData();
            this.updatePitchAndDiagnosis();
        }

        /* -------------------------------------------------------------
           GENERADOR DE PITCHES SEGÚN MODO
        ------------------------------------------------------------- */
        setupModeTabs() {
            const modeButtons = document.querySelectorAll(".cd-mode-btn");
            modeButtons.forEach(btn => {
                btn.addEventListener("click", () => {
                    this.pitchMode = btn.dataset.mode;
                    modeButtons.forEach(b => b.classList.remove("active"));
                    btn.classList.add("active");
                    this.updatePitchAndDiagnosis();
                });
            });
        }

        formatSentence(str) {
            if (!str) return "";
            let s = str.trim();
            s = s.charAt(0).toLowerCase() + s.slice(1);
            if (s.endsWith(".")) s = s.slice(0, -1);
            return s;
        }

        generatePitchHtml() {
            const whyClean = this.formatSentence(this.why);
            const howClean = this.formatSentence(this.how);
            const whatClean = this.formatSentence(this.what);

            if (!this.why && !this.how && !this.what) {
                return `<span class="cd-pitch-placeholder">Completa tus respuestas en los 3 círculos de la izquierda para generar tu Discurso de Valor...</span>`;
            }

            if (this.pitchMode === "inside_out") {
                // Modo Sinek Puro: Porqué -> Cómo -> Qué
                const pWhy = this.why ? `Creemos firmemente que <strong class="why">${whyClean}</strong>. ` : "Creemos firmemente en nuestro propósito. ";
                const pHow = this.how ? `Por eso, <strong class="how">${howClean}</strong>. ` : "";
                const pWhat = this.what ? `Y es por esto que creamos <strong class="what">${whatClean}</strong>.` : "";
                return `<div class="cd-pitch-text">"${pWhy}${pHow}${pWhat}"</div>`;
            } else if (this.pitchMode === "elevator") {
                // Modo Elevator Pitch: Qué -> Cómo -> Porqué
                const pWhat = this.what ? `Nos dedicamos a <strong class="what">${whatClean}</strong>` : "Ofrecemos nuestra solución";
                const pHow = this.how ? `, diferenciándonos porque <strong class="how">${howClean}</strong>` : "";
                const pWhy = this.why ? `. Pero más allá de eso, lo hacemos porque creemos que <strong class="why">${whyClean}</strong>.` : ".";
                return `<div class="cd-pitch-text">"Hola, ${pWhat}${pHow}${pWhy}"</div>`;
            } else {
                // Modo Redes Sociales / Bio
                const lWhy = this.why ? `❤️ <strong>Propósito:</strong> ${this.why}\n` : "";
                const lHow = this.how ? `🛠️ <strong>Cómo lo hacemos:</strong> ${this.how}\n` : "";
                const lWhat = this.what ? `📦 <strong>Entregable:</strong> ${this.what}` : "";
                return `<div class="cd-pitch-text" style="font-size:0.95rem; white-space:pre-line;">${lWhy}${lHow}${lWhat}</div>`;
            }
        }

        generateRawPitchText() {
            const div = document.createElement("div");
            div.innerHTML = this.generatePitchHtml();
            return div.innerText.trim();
        }

        updatePitchAndDiagnosis() {
            const box = document.getElementById("cdPitchBox");
            if (box) {
                box.innerHTML = this.generatePitchHtml();
            }

            this.generateClinicalDiagnosis();
        }

        /* -------------------------------------------------------------
           DIAGNÓSTICO CLÍNICO DE COHERENCIA (METODOLOGÍA AICC)
        ------------------------------------------------------------- */
        generateClinicalDiagnosis() {
            const container = document.getElementById("cdDiagnosisContent");
            if (!container) return;

            const hasWhy = this.why.trim().length > 10;
            const hasHow = this.how.trim().length > 10;
            const hasWhat = this.what.trim().length > 10;

            const whyLower = this.why.toLowerCase();
            const howLower = this.how.toLowerCase();

            let title = "Diagnóstico de Coherencia";
            let message = "";
            let nextTool = "Creador de Contenido & Copys";
            let toolLink = "06_Creador_Contenido/index.html";

            // Antipatrón 1: Confundir el Porqué con Dinero
            if (whyLower.includes("plata") || whyLower.includes("dinero") || whyLower.includes("millonario") || whyLower.includes("vender más")) {
                title = "🚨 Antipatrón Detectado: Confundir Propósito con Combustible";
                message = `Tu 'Porqué' menciona hacer dinero o vender. Como dice el principio AICC: <em>el dinero es la bencina del auto, pero nadie viaja solo por comprar bencina; viajas por el destino</em>. El dinero es una consecuencia de resolver un dolor real con maestría.`;
                nextTool = "Rueda de la Vida (Dimensión Mental y Propósito)";
                toolLink = "apps/rueda/index.html";
            }
            // Antipatrón 2: CÓMO genérico (Calidad y buen servicio)
            else if (howLower.includes("calidad") && howLower.length < 35) {
                title = "⚠️ Alerta de Diferenciación Débil";
                message = `Decir 'calidad y buen servicio' en el CÓMO no diferencia a nadie porque todos dicen lo mismo. Especifica qué haces con cariño o maña que otros hacen solo por cumplir (ej: puntualidad estricta, recetas tradicionales, dosificación exacta).`;
                nextTool = "Design Thinking: Empatía Radical";
                toolLink = "apps/eisenhower/index.html";
            }
            // Estado Incompleto
            else if (!hasWhy || !hasHow || !hasWhat) {
                title = "📝 Círculo en Construcción";
                message = `Para salir de la 'guerra de precios' necesitas completar los 3 anillos. Recuerda que la gente no compra lo que haces (el vehículo), compra por qué lo haces (tu motor).`;
                nextTool = "Tablero GTD Pro";
                toolLink = "apps/gtd/index.html";
            }
            // Estado Óptimo: Coherencia Biológica (Inside-Out)
            else {
                title = "✨ Coherencia Biológica y Diferenciación Magnética";
                message = `Tu propuesta apela directamente al Cerebro Límbico (emoción, confianza y lealtad incondicional). Al comunicar de adentro hacia afuera, dejas de perseguir clientes que regatean precios y comienzas a atraer personas que comparten tu causa.`;
                nextTool = "Creador de Contenido (Convertir Pitch en Carruseles y Reels)";
                toolLink = "06_Creador_Contenido/index.html";
            }

            container.innerHTML = `
                <div style="font-weight:700; color:#fff; font-size:0.95rem; margin-bottom:4px;">${title}</div>
                <div style="font-size:0.84rem; color:var(--cd-text-secondary); line-height:1.5;">${message}</div>
                <div style="margin-top:10px;">
                    <a href="${toolLink}" style="display:inline-block; padding:4px 10px; border-radius:6px; background:rgba(245,158,11,0.12); color:var(--cd-gold-light); text-decoration:none; font-size:0.75rem; font-weight:700; border:1px solid rgba(245,158,11,0.3);">
                        👉 Siguiente Paso Recomendado: <strong>${nextTool}</strong> &rarr;
                    </a>
                </div>
            `;
        }

        /* -------------------------------------------------------------
           MOBILE TABS
        ------------------------------------------------------------- */
        setupMobileTabs() {
            const tabs = document.querySelectorAll(".cd-tab-btn");
            tabs.forEach(tab => {
                tab.addEventListener("click", () => {
                    const tabKey = tab.dataset.tab;
                    this.switchTab(tabKey);
                });
            });
        }

        switchTab(tabKey) {
            this.activeTab = tabKey;
            document.querySelectorAll(".cd-tab-btn").forEach(btn => {
                btn.classList.toggle("active", btn.dataset.tab === tabKey);
            });

            const leftCol = document.getElementById("cdLeftCol");
            const rightCol = document.getElementById("cdRightCol");
            const visualCard = document.getElementById("cdVisualCard");
            const inputsGroup = document.getElementById("cdInputsGroup");
            const pitchCard = document.getElementById("cdPitchCard");
            const diagnosisCard = document.getElementById("cdDiagnosisCard");

            if (window.innerWidth <= 1024) {
                if (tabKey === "circulos") {
                    leftCol.classList.remove("cd-section-hidden");
                    rightCol.classList.add("cd-section-hidden");
                    if (visualCard) visualCard.classList.remove("cd-section-hidden");
                    if (inputsGroup) inputsGroup.classList.remove("cd-section-hidden");
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else if (tabKey === "pitch") {
                    leftCol.classList.add("cd-section-hidden");
                    rightCol.classList.remove("cd-section-hidden");
                    if (pitchCard) pitchCard.classList.remove("cd-section-hidden");
                    if (diagnosisCard) diagnosisCard.classList.add("cd-section-hidden");
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else if (tabKey === "diagnosis") {
                    leftCol.classList.add("cd-section-hidden");
                    rightCol.classList.remove("cd-section-hidden");
                    if (pitchCard) pitchCard.classList.add("cd-section-hidden");
                    if (diagnosisCard) diagnosisCard.classList.remove("cd-section-hidden");
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            } else {
                // Desktop: Restaurar todo
                leftCol.classList.remove("cd-section-hidden");
                rightCol.classList.remove("cd-section-hidden");
                [visualCard, inputsGroup, pitchCard, diagnosisCard].forEach(el => {
                    if (el) el.classList.remove("cd-section-hidden");
                });
            }
        }

        /* -------------------------------------------------------------
           PRESETS
        ------------------------------------------------------------- */
        applyPreset(presetKey) {
            const preset = PRESETS[presetKey];
            if (!preset) return;

            if (confirm(`¿Cargar arquetipo "${preset.name}"? Esto completará el Qué, Cómo y Porqué.`)) {
                this.why = preset.why;
                this.how = preset.how;
                this.what = preset.what;

                const txtWhy = document.getElementById("cdInputWhy");
                const txtHow = document.getElementById("cdInputHow");
                const txtWhat = document.getElementById("cdInputWhat");

                if (txtWhy) txtWhy.value = this.why;
                if (txtHow) txtHow.value = this.how;
                if (txtWhat) txtWhat.value = this.what;

                this.saveData();
                this.updatePitchAndDiagnosis();
                this.showToast(`Arquetipo "${preset.name}" cargado.`);
            }
        }

        clearAll() {
            if (confirm("¿Estás seguro de que deseas limpiar los 3 campos?")) {
                this.applyPreset("reset");
            }
        }

        /* -------------------------------------------------------------
           WHATSAPP & CLIPBOARD
        ------------------------------------------------------------- */
        generateWhatsAppText() {
            let txt = `🟡 *CÍRCULO DORADO DE PROPÓSITO (M08) • AICC*\n`;
            txt += `📅 Fecha: ${new Date().toLocaleDateString()}\n`;
            txt += `────────────────────────────\n\n`;

            txt += `❤️ *1. EL PORQUÉ (El Motor / Límbico):*\n${this.why || 'Sin registrar'}\n\n`;
            txt += `🛠️ *2. EL CÓMO (El Mapa / Valores en Acción):*\n${this.how || 'Sin registrar'}\n\n`;
            txt += `📦 *3. EL QUÉ (El Auto / Vehículo Tangible):*\n${this.what || 'Sin registrar'}\n\n`;

            txt += `────────────────────────────\n`;
            txt += `🎯 *DISCURSO DE VALOR (INSIDE-OUT):*\n`;
            txt += `${this.generateRawPitchText()}\n\n`;

            txt += `🔗 *Suite AICC:* http://localhost:8000/Administracion%20Humana/03_PRODUCTOS_Y_APLICACIONES/00_Sondeo_Maestro/suite.html`;
            return txt;
        }

        exportWhatsApp() {
            const text = this.generateWhatsAppText();
            const phone = "56975590132"; // WhatsApp oficial de Diego
            const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
            window.open(url, "_blank");
        }

        copyPitch() {
            const rawText = this.generateRawPitchText();
            navigator.clipboard.writeText(rawText).then(() => {
                this.showToast("Pitch de valor copiado al portapapeles.");
            }).catch(err => {
                console.error("Error al copiar:", err);
            });
        }

        /* -------------------------------------------------------------
           JSON EXPORT / IMPORT
        ------------------------------------------------------------- */
        exportJson() {
            const payload = {
                why: this.why,
                how: this.how,
                what: this.what,
                exportedAt: new Date().toISOString()
            };
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(payload, null, 2));
            const dlAnchor = document.createElement('a');
            dlAnchor.setAttribute("href", dataStr);
            dlAnchor.setAttribute("download", `circulo_dorado_${new Date().toISOString().slice(0, 10)}.json`);
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
                    if (parsed && typeof parsed.why === "string" && typeof parsed.how === "string" && typeof parsed.what === "string") {
                        this.why = parsed.why;
                        this.how = parsed.how;
                        this.what = parsed.what;

                        const txtWhy = document.getElementById("cdInputWhy");
                        const txtHow = document.getElementById("cdInputHow");
                        const txtWhat = document.getElementById("cdInputWhat");

                        if (txtWhy) txtWhy.value = this.why;
                        if (txtHow) txtHow.value = this.how;
                        if (txtWhat) txtWhat.value = this.what;

                        this.saveData();
                        this.updatePitchAndDiagnosis();
                        this.showToast("Datos importados exitosamente.");
                    } else {
                        alert("El archivo no tiene el formato válido de Círculo Dorado.");
                    }
                } catch (err) {
                    alert("Error leyendo el archivo JSON: " + err.message);
                }
            };
            reader.readAsText(file);
            fileInput.value = "";
        }

        /* -------------------------------------------------------------
           UI TOAST
        ------------------------------------------------------------- */
        showToast(msg) {
            let toast = document.getElementById("cdToast");
            if (!toast) {
                toast = document.createElement("div");
                toast.id = "cdToast";
                toast.className = "cd-toast";
                document.body.appendChild(toast);
            }
            toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color:var(--cd-gold-light);"></i> ${msg}`;
            toast.classList.add("show");
            setTimeout(() => {
                toast.classList.remove("show");
            }, 2500);
        }
    }

    return {
        initCirculoDoradoEngine: function(options) {
            window.__circuloDoradoEngine = new CirculoDoradoEngineInstance(options);
            return window.__circuloDoradoEngine;
        },
        PRESETS
    };
}));
