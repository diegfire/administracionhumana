import os

index_path = r'c:\Users\diego\Mi unidad\LAPEGUITA\Diego\Administracion Humana\03_PRODUCTOS_Y_APLICACIONES\00_Sondeo_Maestro\index.html'

with open(index_path, 'r', encoding='utf-8') as f:
    content = f.read()

diff_section_html = '''
<!-- SECCIÓN DIFERENCIACIÓN: PSICOLOGÍA VS ADMINISTRACIÓN HUMANA -->
<section class="differentiation-section" id="diferenciacion-psicologia" style="background: linear-gradient(180deg, #0a0a0a 0%, #000000 100%); border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border); padding: 80px 0;">
  <div class="container">
    <div style="text-align:center; max-width:800px; margin:0 auto 36px auto;">
      <span class="section-tag" style="background:rgba(56,189,248,0.12); border:1px solid rgba(56,189,248,0.3); color:#38bdf8; font-size:0.75rem; font-weight:800; padding:4px 12px; border-radius:20px; text-transform:uppercase;">
        🧭 El Rol de la Administración en tu Vida
      </span>
      <h2 class="section-title" style="margin-top:10px;">
        «En Chile te dicen: <em>"Ándate al psicólogo"</em>.<br />Pero nadie te dijo: <em>"Anda al Administrador"</em>.»
      </h2>
      <p class="section-sub" style="color:#a1a1aa; font-size:0.95rem; line-height:1.6; margin-top:8px;">
        La administración suele confundirse con papeleo burocrático de oficina. En realidad, es la <b>ciencia universal de cuidar tus recursos más valiosos</b>: tu tiempo, tu energía, tu dinero y tu atención.
      </p>
    </div>

    <!-- COMPARADOR VISUAL: LA METÁFORA DEL AUTOMÓVIL -->
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:24px; max-width:1040px; margin:0 auto 32px auto;">
      <!-- CARD PSICÓLOGO -->
      <div style="background:#0d0d0d; border:1px solid #262626; border-radius:var(--radius-lg); padding:32px 28px; position:relative;">
        <div style="display:flex; align-items:center; gap:12px; margin-bottom:16px;">
          <span style="font-size:2rem; background:rgba(255,255,255,0.05); width:50px; height:50px; border-radius:12px; display:flex; align-items:center; justify-content:center; border:1px solid #333;">🧠</span>
          <div>
            <h3 style="font-family:var(--font-heading); font-size:1.2rem; color:#fff; font-weight:800;">El Psicólogo Clínico</h3>
            <span style="font-size:0.75rem; color:#888; text-transform:uppercase; font-weight:700;">Ciencias de la Salud & Salud Mental</span>
          </div>
        </div>
        <div style="font-size:0.88rem; color:#d4d4d8; line-height:1.55; margin-bottom:16px;">
          <b>Repara el motor interno:</b> Te ayuda a entender y sanar por dentro, tratando emociones profundas, traumas, apegos y patrones de conducta inconscientes.
        </div>
        <div style="background:#141414; border-left:3px solid #888; padding:10px 14px; border-radius:6px; font-size:0.8rem; color:#a1a1aa; margin-bottom:16px;">
          💬 <i>«¿Por qué sientes lo que sientes y de dónde viene esa herida en tu historia?»</i>
        </div>
        <ul style="list-style:none; font-size:0.82rem; color:#888; display:flex; flex-direction:column; gap:6px;">
          <li>✦ Foco: Pasado ➔ Presente (Insight y sanación)</li>
          <li>✦ Entregable: Reestructuración cognitiva y contención</li>
          <li>✦ Es indispensable cuando la carga interna desborda</li>
        </ul>
      </div>

      <!-- CARD ADMINISTRACIÓN HUMANA -->
      <div style="background:linear-gradient(180deg, rgba(56,189,248,0.06) 0%, rgba(13,13,13,1) 100%); border:1px solid rgba(56,189,248,0.4); border-radius:var(--radius-lg); padding:32px 28px; position:relative; box-shadow:0 0 30px rgba(56,189,248,0.1);">
        <div style="display:flex; align-items:center; gap:12px; margin-bottom:16px;">
          <span style="font-size:2rem; background:rgba(56,189,248,0.15); width:50px; height:50px; border-radius:12px; display:flex; align-items:center; justify-content:center; border:1px solid #38bdf8;">🧭</span>
          <div>
            <h3 style="font-family:var(--font-heading); font-size:1.2rem; color:#38bdf8; font-weight:800;">Administración Humana</h3>
            <span style="font-size:0.75rem; color:#38bdf8; text-transform:uppercase; font-weight:700;">Ciencias de la Administración & Operaciones</span>
          </div>
        </div>
        <div style="font-size:0.88rem; color:#f3f4f6; line-height:1.55; margin-bottom:16px;">
          <b>Diseña tu GPS, tablero y hoja de ruta:</b> Te ayuda a ordenar tu afuera, construyendo herramientas que le quitan peso a tu mente (horarios 24H, finanzas 50/30/20, proyectos Kanban).
        </div>
        <div style="background:#141414; border-left:3px solid #38bdf8; padding:10px 14px; border-radius:6px; font-size:0.8rem; color:#38bdf8; margin-bottom:16px;">
          💬 <i>«¿Qué recursos tienes hoy y qué sistema concreto necesitas para que tu semana deje de ser un incendio?»</i>
        </div>
        <ul style="list-style:none; font-size:0.82rem; color:#e5e7eb; display:flex; flex-direction:column; gap:6px;">
          <li><span style="color:#10b981;">✓</span> Foco: Presente ➔ Futuro Operativo (Acción y sistemas)</li>
          <li><span style="color:#10b981;">✓</span> Entregable: Plan de Vuelo, Mapeador 24H, Plantillas Excel y Hub Físico</li>
          <li><span style="color:#10b981;">✓</span> Tu soporte logístico para que tengas tiempo y paz mental</li>
        </ul>
      </div>
    </div>

    <!-- MANTRA DE CIERRE DE LA SECCIÓN -->
    <div style="background:rgba(255,255,255,0.03); border:1px solid #262626; border-radius:14px; padding:20px 24px; max-width:860px; margin:0 auto; text-align:center;">
      <p style="font-size:0.92rem; color:#fff; line-height:1.6; font-weight:600; margin-bottom:6px;">
        💡 <b>«Aliviar la carga mental mediante el orden práctico, la claridad de prioridades y el diseño de sistemas no es psicología: es buena administración puesta al servicio de las personas.»</b>
      </p>
      <span style="font-size:0.78rem; color:#888;">— Diego González Yáñez • Consultor en Administración Humana</span>
    </div>
  </div>
</section>
'''

target_before_caminos = '<!-- CAMINOS (METHODOLOGIES) -->'
if target_before_caminos in content and 'id="diferenciacion-psicologia"' not in content:
    content = content.replace(target_before_caminos, diff_section_html + '\n' + target_before_caminos)

with open(index_path, 'w', encoding='utf-8') as f:
    f.write(content)

print('index.html updated with Psicología vs Administración Humana section!')
