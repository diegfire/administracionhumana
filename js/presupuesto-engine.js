/**
 * ==========================================================================
 * MOTOR MAESTRO DE PRESUPUESTO 50/30/20 • SSOT
 * Administración Humana / AICC Architecture
 * Salud Financiera, Control de Desvíos, Prescripción Clínica y Exportación WhatsApp
 * ==========================================================================
 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.initPresupuestoEngine = factory().initPresupuestoEngine;
        root.PresupuestoEngine = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {

    const PRESETS = {
        diego: {
            name: "Perfil Real Diego ($1.500.000)",
            income: 1500000,
            ledger: [
                { id: 1, detail: "Arriendo Casa", amount: 504520, category: "needs", account: "Efectivo" },
                { id: 2, detail: "Cuentas Básicas (Luz, Agua, Net, Gas)", amount: 108000, category: "needs", account: "Efectivo" },
                { id: 3, detail: "Pensión Matías (Mes Base)", amount: 200000, category: "needs", account: "Transferencia" },
                { id: 4, detail: "Alimentación / Supermercado", amount: 200000, category: "needs", account: "Tarjeta" },
                { id: 5, detail: "Abono Regularización Ángela", amount: 200000, category: "savings", account: "Transferencia" },
                { id: 6, detail: "Ocio / Cafés / Salidas", amount: 150000, category: "wants", account: "Tarjeta" },
                { id: 7, detail: "Fondo Imprevistos / Reserva", amount: 137480, category: "savings", account: "Efectivo" }
            ]
        },
        freelancer: {
            name: "Freelancer Inicial ($800.000)",
            income: 800000,
            ledger: [
                { id: 1, detail: "Pieza / Arriendo Compartido", amount: 280000, category: "needs", account: "Efectivo" },
                { id: 2, detail: "Supermercado Básico", amount: 120000, category: "needs", account: "Tarjeta" },
                { id: 3, detail: "Internet y Teléfono", amount: 35000, category: "needs", account: "Efectivo" },
                { id: 4, detail: "Salidas y Pedidos Ya", amount: 120000, category: "wants", account: "Tarjeta" },
                { id: 5, detail: "Suscripciones Software", amount: 45000, category: "wants", account: "Tarjeta" },
                { id: 6, detail: "Colchón de Seguridad", amount: 160000, category: "savings", account: "Transferencia" }
            ]
        },
        consolidado: {
            name: "Emprendedor Consolidado ($2.500.000)",
            income: 2500000,
            ledger: [
                { id: 1, detail: "Dividendo / Arriendo", amount: 750000, category: "needs", account: "Efectivo" },
                { id: 2, detail: "Gastos Familiares y Supermercado", amount: 350000, category: "needs", account: "Tarjeta" },
                { id: 3, detail: "Seguros y Salud", amount: 150000, category: "needs", account: "Efectivo" },
                { id: 4, detail: "Viajes y Ocio Fin de Semana", amount: 450000, category: "wants", account: "Tarjeta" },
                { id: 5, detail: "Gimnasio y Cursos", amount: 120000, category: "wants", account: "Tarjeta" },
                { id: 6, detail: "Aporte Inversión / CAPEX", amount: 500000, category: "savings", account: "Transferencia" }
            ]
        },
        reset: {
            name: "Reinicio Vacío ($1.000.000)",
            income: 1000000,
            ledger: []
        }
    };

    class PresupuestoEngineInstance {
        constructor(options = {}) {
            this.incomeStorageKey = options.incomeStorageKey || "aicc_budget_income";
            this.ledgerStorageKey = options.ledgerStorageKey || "aicc_budget_ledger";
            this.onUpdate = options.onUpdate || null;

            this.income = 1500000;
            this.ledger = [];
            this.currentFilter = "all"; // all | needs | wants | savings
            this.selectedFormCategory = "needs"; // needs | wants | savings
            this.activeTab = "balance"; // balance | add_expense | ledger | diagnosis

            this.loadData();
            this.init();
        }

        loadData() {
            try {
                const storedIncome = localStorage.getItem(this.incomeStorageKey);
                if (storedIncome) {
                    this.income = parseFloat(storedIncome) || 1500000;
                }
                const storedLedger = localStorage.getItem(this.ledgerStorageKey);
                if (storedLedger) {
                    this.ledger = JSON.parse(storedLedger);
                } else {
                    // Cargar perfil por defecto (Diego)
                    this.income = PRESETS.diego.income;
                    this.ledger = JSON.parse(JSON.stringify(PRESETS.diego.ledger));
                    this.saveData();
                }
            } catch (e) {
                console.warn("[PresupuestoEngine] Error cargando datos:", e);
                this.income = 1500000;
                this.ledger = [];
            }
        }

        saveData() {
            try {
                localStorage.setItem(this.incomeStorageKey, this.income.toString());
                localStorage.setItem(this.ledgerStorageKey, JSON.stringify(this.ledger));
            } catch (e) {
                console.error("[PresupuestoEngine] Error guardando datos:", e);
            }
            if (typeof this.onUpdate === "function") {
                this.onUpdate({ income: this.income, ledger: this.ledger });
            }
        }

        init() {
            const incomeInput = document.getElementById("prIncomeInput");
            if (incomeInput) {
                incomeInput.value = this.income;
            }

            this.setupCategoryPills();
            this.setupMobileTabs();
            this.setupFilterPills();
            this.calculateAndRender();
        }

        formatCurrency(val) {
            return new Intl.NumberFormat('es-CL', {
                style: 'currency',
                currency: 'CLP',
                maximumFractionDigits: 0
            }).format(val || 0);
        }

        setIncome(val) {
            this.income = Math.max(0, parseFloat(val) || 0);
            this.saveData();
            this.calculateAndRender();
        }

        setupCategoryPills() {
            const pills = document.querySelectorAll(".pr-cat-pill-btn");
            pills.forEach(pill => {
                pill.addEventListener("click", () => {
                    const cat = pill.dataset.cat;
                    this.selectedFormCategory = cat;
                    pills.forEach(p => p.classList.remove("active"));
                    pill.classList.add("active");
                });
            });
        }

        setupFilterPills() {
            const filters = document.querySelectorAll(".pr-filter-btn");
            filters.forEach(btn => {
                btn.addEventListener("click", () => {
                    this.currentFilter = btn.dataset.filter;
                    filters.forEach(b => b.classList.remove("active"));
                    btn.classList.add("active");
                    this.renderLedgerTable();
                });
            });
        }

        setupMobileTabs() {
            const tabs = document.querySelectorAll(".pr-tab-btn");
            tabs.forEach(tab => {
                tab.addEventListener("click", () => {
                    const tabKey = tab.dataset.tab;
                    this.switchTab(tabKey);
                });
            });
        }

        switchTab(tabKey) {
            this.activeTab = tabKey;
            document.querySelectorAll(".pr-tab-btn").forEach(btn => {
                btn.classList.toggle("active", btn.dataset.tab === tabKey);
            });

            const configCol = document.getElementById("prConfigCol");
            const ledgerCol = document.getElementById("prLedgerCol");
            const incomeCard = document.getElementById("prIncomeCard");
            const deviationsCard = document.getElementById("prDeviationsCard");
            const peaceCard = document.getElementById("prPeaceCard");
            const prescriptionCard = document.getElementById("prPrescriptionCard");
            const formCard = document.getElementById("prFormCard");
            const ledgerCard = document.getElementById("prLedgerCard");

            if (window.innerWidth <= 1024) {
                if (tabKey === "balance") {
                    configCol.classList.remove("pr-section-hidden");
                    ledgerCol.classList.add("pr-section-hidden");
                    if (incomeCard) incomeCard.classList.remove("pr-section-hidden");
                    if (deviationsCard) deviationsCard.classList.remove("pr-section-hidden");
                    if (peaceCard) peaceCard.classList.remove("pr-section-hidden");
                    if (prescriptionCard) prescriptionCard.classList.add("pr-section-hidden");
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else if (tabKey === "add_expense") {
                    configCol.classList.add("pr-section-hidden");
                    ledgerCol.classList.remove("pr-section-hidden");
                    if (formCard) formCard.classList.remove("pr-section-hidden");
                    if (ledgerCard) ledgerCard.classList.add("pr-section-hidden");
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else if (tabKey === "ledger") {
                    configCol.classList.add("pr-section-hidden");
                    ledgerCol.classList.remove("pr-section-hidden");
                    if (formCard) formCard.classList.add("pr-section-hidden");
                    if (ledgerCard) ledgerCard.classList.remove("pr-section-hidden");
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else if (tabKey === "diagnosis") {
                    configCol.classList.remove("pr-section-hidden");
                    ledgerCol.classList.add("pr-section-hidden");
                    if (incomeCard) incomeCard.classList.add("pr-section-hidden");
                    if (deviationsCard) deviationsCard.classList.add("pr-section-hidden");
                    if (peaceCard) peaceCard.classList.remove("pr-section-hidden");
                    if (prescriptionCard) prescriptionCard.classList.remove("pr-section-hidden");
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            } else {
                // Desktop: Restaurar todo
                configCol.classList.remove("pr-section-hidden");
                ledgerCol.classList.remove("pr-section-hidden");
                [incomeCard, deviationsCard, peaceCard, prescriptionCard, formCard, ledgerCard].forEach(el => {
                    if (el) el.classList.remove("pr-section-hidden");
                });
            }
        }

        /* -------------------------------------------------------------
           CÁLCULO PRINCIPAL Y RENDERIZADO
        ------------------------------------------------------------- */
        calculateAndRender() {
            // Metas teóricas
            const targetNeeds = this.income * 0.50;
            const targetWants = this.income * 0.30;
            const targetSavings = this.income * 0.20;

            // Actualizar tarjetas de metas
            const tgtNeedsElem = document.getElementById("prTargetNeeds");
            const tgtWantsElem = document.getElementById("prTargetWants");
            const tgtSavingsElem = document.getElementById("prTargetSavings");

            if (tgtNeedsElem) tgtNeedsElem.textContent = this.formatCurrency(targetNeeds);
            if (tgtWantsElem) tgtWantsElem.textContent = this.formatCurrency(targetWants);
            if (tgtSavingsElem) tgtSavingsElem.textContent = this.formatCurrency(targetSavings);

            // Gastos reales por categoría
            const realNeeds = this.ledger.filter(tx => tx.category === "needs").reduce((s, tx) => s + tx.amount, 0);
            const realWants = this.ledger.filter(tx => tx.category === "wants").reduce((s, tx) => s + tx.amount, 0);
            const realExplicitSavings = this.ledger.filter(tx => tx.category === "savings").reduce((s, tx) => s + tx.amount, 0);

            // Ahorro real neto = Ingreso - Gastos en Necesidades - Gastos en Deseos
            const netSavings = this.income - realNeeds - realWants;
            const savingsRate = this.income > 0 ? (netSavings / this.income) * 100 : 0;

            // Barras de progreso de desvío
            this.updateDeviationBar("needs", realNeeds, targetNeeds);
            this.updateDeviationBar("wants", realWants, targetWants);
            this.updateSavingsIndicator(netSavings, savingsRate, realExplicitSavings);

            // Diagnóstico y prescripción clínica
            this.generateClinicalPrescription(realNeeds, targetNeeds, realWants, targetWants, netSavings, savingsRate);

            // Renderizar tabla ledger
            this.renderLedgerTable();
        }

        updateDeviationBar(category, real, target) {
            const textElem = document.getElementById(`prDev${category === 'needs' ? 'Needs' : 'Wants'}Text`);
            const barElem = document.getElementById(`prDev${category === 'needs' ? 'Needs' : 'Wants'}Bar`);
            if (!textElem || !barElem) return;

            const pct = target > 0 ? (real / target) * 100 : 0;
            textElem.textContent = `${this.formatCurrency(real)} de ${this.formatCurrency(target)} (${Math.round(pct)}%)`;

            barElem.style.width = `${Math.min(pct, 100)}%`;
            if (pct > 100) {
                barElem.classList.add("overdrawn");
            } else {
                barElem.classList.remove("overdrawn");
            }
        }

        updateSavingsIndicator(netSavings, savingsRate, explicitSavings) {
            const rateElem = document.getElementById("prPeaceRate");
            const descElem = document.getElementById("prPeaceDesc");
            const barElem = document.getElementById("prPeaceBar");

            if (rateElem) {
                rateElem.textContent = `${Math.round(savingsRate)}%`;
                rateElem.style.color = savingsRate >= 20 ? 'var(--pr-teal-light)' : (savingsRate >= 10 ? 'var(--pr-amber-light)' : 'var(--pr-coral-light)');
            }

            if (barElem) {
                barElem.style.width = `${Math.min(Math.max(savingsRate, 0), 100)}%`;
                if (savingsRate < 10) {
                    barElem.classList.add("overdrawn");
                } else {
                    barElem.classList.remove("overdrawn");
                }
            }

            if (descElem) {
                let statusHtml = `Margen de ahorro/paz calculado: <strong>${this.formatCurrency(netSavings)}</strong>. `;
                if (savingsRate >= 20) {
                    statusHtml += `🎉 ¡Excelente! Cumples con la regla del 20% para tu "Camión de Gira" y fondo de tranquilidad.`;
                } else if (savingsRate >= 10) {
                    statusHtml += `⚠️ Zona media. Ahorras un margen positivo pero vulnerable ante imprevistos mayores.`;
                } else if (savingsRate > 0) {
                    statusHtml += `🚨 Margen muy bajo (<10%). Cualquier falla técnica o imprevisto de salud generará endeudamiento.`;
                } else {
                    statusHtml += `🔥 <strong>Déficit Operativo (${this.formatCurrency(Math.abs(netSavings))})</strong>. Tus gastos superan tus ingresos. Se requiere ajuste de emergencia.`;
                }
                descElem.innerHTML = statusHtml;
            }
        }

        /* -------------------------------------------------------------
           PRESCRIPIÓN CLÍNICA DINÁMICA (METODOLOGÍA AICC)
        ------------------------------------------------------------- */
        generateClinicalPrescription(realNeeds, targetNeeds, realWants, targetWants, netSavings, savingsRate) {
            const container = document.getElementById("prPrescriptionContent");
            if (!container) return;

            const needsPctOfIncome = this.income > 0 ? (realNeeds / this.income) * 100 : 0;
            const wantsPctOfIncome = this.income > 0 ? (realWants / this.income) * 100 : 0;

            let title = "Diagnóstico Financiero";
            let message = "";
            let toolTag = "Time Blocker Semanal";
            let toolLink = "apps/timeblocker/index.html";

            // Patrón 1: Vivir en el 90/10/0 (Costos Fijos Asfixiantes)
            if (needsPctOfIncome >= 65) {
                title = "🚨 Alerta: Estructura de Costos Asfixiante (Síndrome 90/10/0)";
                message = `Tus necesidades consumen el ${Math.round(needsPctOfIncome)}% de tus ingresos líquidos (Meta: &le; 50%). Cuando el escenario cuesta tanto, el actor vive agotado. No tienes espacio para respirar ni ahorrar. Necesitas aplicar Kaizen (-1%) para auditar gastos fijos o renegociar contratos.`;
                toolTag = "Auditoría de Resultados & ROE";
                toolLink = "07_Inventario_Resultados/index.html";
            }
            // Patrón 2: Fuga de Deseos Disfrazados
            else if (wantsPctOfIncome >= 35) {
                title = "⚠️ Fuga por 'Deseos Disfrazados' y Salidas Recurrentes";
                message = `Tus deseos absorben el ${Math.round(wantsPctOfIncome)}% de tu dinero (Meta: &le; 30%). Recuerda el principio AICC: <em>no esperes a fin de mes para ver qué sobra, págate a ti primero</em>. Recorta suscripciones fantasma y compras impulsivas provocadas por el estrés laboral.`;
                toolTag = "Tablero GTD Pro (Lista de Espera 7 Días)";
                toolLink = "apps/gtd/index.html";
            }
            // Patrón 3: Déficit Crítico
            else if (netSavings < 0) {
                title = "🔥 Estado de Déficit: Sangrado de Caja Activo";
                message = `Estás gastando ${this.formatCurrency(Math.abs(netSavings))} más de lo que produces al mes. Entrar en deuda para financiar el estilo de vida destruye la soberanía temporal. Congela los gastos en 'Deseos' al 0% temporalmente hasta estabilizar la caja.`;
                toolTag = "Matriz de Eisenhower (Eliminar Gastos Urgentes Falsos)";
                toolLink = "apps/eisenhower/index.html";
            }
            // Patrón 4: Salud y Paz Financiera
            else if (savingsRate >= 20) {
                title = "✨ Coherencia Financiera y Paz Operativa";
                message = `Tu estructura es liviana y sostenible (${Math.round(needsPctOfIncome)}% Necesidades / ${Math.round(wantsPctOfIncome)}% Deseos / ${Math.round(savingsRate)}% Ahorro). Tu 'Camión de Gira' está abastecido. Puedes reinvertir excedentes en capacitación o crecimiento estratégico.`;
                toolTag = "Generador de Horarios & Sondeo 24H";
                toolLink = "apps/horarios/index.html";
            } else {
                title = "⚖️ Presupuesto en Ajuste Preventivo";
                message = `Tus gastos están cerca de los umbrales seguros. Para elevar tu paz financiera del ${Math.round(savingsRate)}% al 20%, transfiere tu cuota de ahorro al inicio del mes apenas recibas tus ingresos.`;
                toolTag = "Rueda de la Vida (Dimensión Finanzas)";
                toolLink = "apps/rueda/index.html";
            }

            container.innerHTML = `
                <div style="font-weight:700; color:#fff; font-size:0.95rem; margin-bottom:4px;">${title}</div>
                <div style="font-size:0.84rem; color:var(--pr-text-secondary); line-height:1.5;">${message}</div>
                <div style="margin-top:10px;">
                    <a href="${toolLink}" class="rd-prescription-tag" style="display:inline-block; padding:4px 10px; border-radius:6px; background:rgba(45,212,191,0.12); color:var(--pr-teal-light); text-decoration:none; font-size:0.75rem; font-weight:700; border:1px solid rgba(45,212,191,0.3);">
                        👉 Recomendación Metodológica: <strong>${toolTag}</strong> &rarr;
                    </a>
                </div>
            `;
        }

        /* -------------------------------------------------------------
           LEDGER: REGISTRO Y GESTIÓN DE TRANSACCIONES
        ------------------------------------------------------------- */
        addTransactionFromForm() {
            const detailInput = document.getElementById("prDetailInput");
            const amountInput = document.getElementById("prAmountInput");
            const accountSelect = document.getElementById("prAccountSelect");

            const detail = detailInput ? detailInput.value.trim() : "";
            const amount = amountInput ? parseFloat(amountInput.value) || 0 : 0;
            const account = accountSelect ? accountSelect.value : "Efectivo";
            const category = this.selectedFormCategory;

            if (!detail) {
                alert("Por favor escribe el detalle o proveedor del gasto.");
                return;
            }
            if (amount <= 0) {
                alert("El monto debe ser mayor a 0.");
                return;
            }

            const id = this.ledger.length > 0 ? Math.max(...this.ledger.map(t => t.id)) + 1 : 1;
            this.ledger.unshift({ id, detail, amount, category, account, date: new Date().toISOString() });

            this.saveData();
            this.calculateAndRender();

            if (detailInput) detailInput.value = "";
            if (amountInput) amountInput.value = "";

            this.showToast(`Gasto "${detail}" (${this.formatCurrency(amount)}) registrado.`);
        }

        deleteTransaction(id) {
            if (confirm("¿Eliminar este registro de gasto?")) {
                this.ledger = this.ledger.filter(tx => tx.id !== id);
                this.saveData();
                this.calculateAndRender();
                this.showToast("Gasto eliminado.");
            }
        }

        clearLedger() {
            if (confirm("¿Estás seguro de que deseas vaciar toda la bitácora de transacciones?")) {
                this.ledger = [];
                this.saveData();
                this.calculateAndRender();
                this.showToast("Bitácora reiniciada.");
            }
        }

        renderLedgerTable() {
            const tbody = document.getElementById("prLedgerBody");
            const emptyNotice = document.getElementById("prEmptyLedger");
            if (!tbody) return;

            tbody.innerHTML = "";

            let list = this.ledger;
            if (this.currentFilter !== "all") {
                list = list.filter(tx => tx.category === this.currentFilter);
            }

            if (list.length === 0) {
                if (emptyNotice) emptyNotice.style.display = "block";
                return;
            } else {
                if (emptyNotice) emptyNotice.style.display = "none";
            }

            const catLabels = {
                needs: "❤️ Necesidad",
                wants: "🎨 Deseo",
                savings: "🚀 Ahorro/Deuda"
            };

            list.forEach(tx => {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td><strong>${tx.detail}</strong></td>
                    <td><span class="pr-badge ${tx.category}">${catLabels[tx.category] || tx.category}</span></td>
                    <td style="font-family:var(--font-mono); font-weight:700;">${this.formatCurrency(tx.amount)}</td>
                    <td style="font-size:0.75rem; color:var(--pr-text-secondary);">${tx.account || 'Efectivo'}</td>
                    <td>
                        <button type="button" class="pr-del-btn" onclick="window.__presupuestoEngine.deleteTransaction(${tx.id})" title="Eliminar">&times;</button>
                    </td>
                `;
                tbody.appendChild(tr);
            });
        }

        /* -------------------------------------------------------------
           PRESETS
        ------------------------------------------------------------- */
        applyPreset(presetKey) {
            const preset = PRESETS[presetKey];
            if (!preset) return;

            if (confirm(`¿Cargar arquetipo "${preset.name}"? Esto configurará el ingreso a ${this.formatCurrency(preset.income)} y cargará sus gastos base.`)) {
                this.income = preset.income;
                this.ledger = JSON.parse(JSON.stringify(preset.ledger));

                const incomeInput = document.getElementById("prIncomeInput");
                if (incomeInput) incomeInput.value = this.income;

                this.saveData();
                this.calculateAndRender();
                this.showToast(`Arquetipo "${preset.name}" aplicado.`);
            }
        }

        /* -------------------------------------------------------------
           WHATSAPP EXPORTER & COPIAR
        ------------------------------------------------------------- */
        generateWhatsAppText() {
            const targetNeeds = this.income * 0.50;
            const targetWants = this.income * 0.30;
            const targetSavings = this.income * 0.20;

            const realNeeds = this.ledger.filter(tx => tx.category === "needs").reduce((s, tx) => s + tx.amount, 0);
            const realWants = this.ledger.filter(tx => tx.category === "wants").reduce((s, tx) => s + tx.amount, 0);
            const realSavings = this.ledger.filter(tx => tx.category === "savings").reduce((s, tx) => s + tx.amount, 0);

            const netSavings = this.income - realNeeds - realWants;
            const savingsRate = this.income > 0 ? (netSavings / this.income) * 100 : 0;

            let txt = `📊 *AUDITORÍA FINANCIERA 50/30/20 • AICC*\n`;
            txt += `📅 Fecha: ${new Date().toLocaleDateString()}\n`;
            txt += `💰 *Ingreso Neto Mensual:* ${this.formatCurrency(this.income)}\n`;
            txt += `────────────────────────────\n\n`;

            txt += `*DESGLOSE DE CONSUMO REAL:*\n`;
            txt += `❤️ *Necesidades (50%):* ${this.formatCurrency(realNeeds)} / Meta: ${this.formatCurrency(targetNeeds)} (${Math.round((realNeeds/targetNeeds)*100)}%)\n`;
            txt += `🎨 *Deseos (30%):* ${this.formatCurrency(realWants)} / Meta: ${this.formatCurrency(targetWants)} (${Math.round((realWants/targetWants)*100)}%)\n`;
            txt += `🚀 *Ahorro / Deuda Directo:* ${this.formatCurrency(realSavings)}\n\n`;

            txt += `────────────────────────────\n`;
            txt += `✨ *INDICADOR DE PAZ FINANCIERA:*\n`;
            txt += `• *Ahorro Neto Real:* ${this.formatCurrency(netSavings)}\n`;
            txt += `• *Tasa de Retención:* ${Math.round(savingsRate)}% (Meta: &ge; 20%)\n`;

            if (savingsRate >= 20) {
                txt += `✅ *Estado:* Estructura Saludable. Tienes control de tu flujo de caja.\n`;
            } else if (savingsRate >= 10) {
                txt += `⚠️ *Estado:* Ajuste Preventivo. Reducir gastos en deseos discrecionales.\n`;
            } else {
                txt += `🚨 *Estado:* Alerta Financiera. Se requiere auditoría inmediata de costos fijos.\n`;
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
                this.showToast("Informe de presupuesto copiado.");
            }).catch(err => {
                console.error("Error al copiar:", err);
            });
        }

        /* -------------------------------------------------------------
           JSON EXPORT / IMPORT
        ------------------------------------------------------------- */
        exportJson() {
            const payload = {
                income: this.income,
                ledger: this.ledger,
                exportedAt: new Date().toISOString()
            };
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(payload, null, 2));
            const dlAnchor = document.createElement('a');
            dlAnchor.setAttribute("href", dataStr);
            dlAnchor.setAttribute("download", `presupuesto_50_30_20_${new Date().toISOString().slice(0, 10)}.json`);
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
                    if (parsed && typeof parsed.income === "number" && Array.isArray(parsed.ledger)) {
                        this.income = parsed.income;
                        this.ledger = parsed.ledger;
                        const incomeInput = document.getElementById("prIncomeInput");
                        if (incomeInput) incomeInput.value = this.income;
                        this.saveData();
                        this.calculateAndRender();
                        this.showToast("Datos importados exitosamente.");
                    } else if (Array.isArray(parsed)) {
                        this.ledger = parsed;
                        this.saveData();
                        this.calculateAndRender();
                        this.showToast("Bitácora importada exitosamente.");
                    } else {
                        alert("El archivo no tiene el formato válido de presupuesto.");
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
            let toast = document.getElementById("prToast");
            if (!toast) {
                toast = document.createElement("div");
                toast.id = "prToast";
                toast.className = "pr-toast";
                document.body.appendChild(toast);
            }
            toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color:var(--pr-teal-light);"></i> ${msg}`;
            toast.classList.add("show");
            setTimeout(() => {
                toast.classList.remove("show");
            }, 2500);
        }
    }

    return {
        initPresupuestoEngine: function(options) {
            window.__presupuestoEngine = new PresupuestoEngineInstance(options);
            return window.__presupuestoEngine;
        },
        PRESETS
    };
}));
