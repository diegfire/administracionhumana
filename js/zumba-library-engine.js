/* Zumba Library & Choreographic Engine JS v3.3 - Administración Humana */

const DEFAULT_ZUMBA_SONGS = [
    {
        id: "zumba-01",
        title: "Limbo",
        artist: "Daddy Yankee",
        rhythm: "warmup",
        rhythmLabel: "Calentamiento",
        duration: "3:45",
        durationSec: 225,
        bpm: 122,
        intensity: 2, // 1 to 5
        status: "mastered", // mastered, practice, learning, archived
        statusLabel: "100% Dominada",
        audioSource: "hq_paypal", // hq_paypal, spotify, youtube, other
        audioSourceLabel: "⭐ Pista Original HQ (Limpia)",
        audioUrl: "https://open.spotify.com/search/Daddy%20Yankee%20Limbo",
        notes: "Activación articular en 4 tiempos; brazos en molino; rodillas suaves en coro; transiciona hacia cardio moderado."
    },
    {
        id: "zumba-02",
        title: "La Dueña del Swing",
        artist: "Los Hermanos Rosario",
        rhythm: "merengue",
        rhythmLabel: "Merengue",
        duration: "4:10",
        durationSec: 250,
        bpm: 148,
        intensity: 4,
        status: "mastered",
        statusLabel: "100% Dominada",
        audioSource: "hq_paypal",
        audioSourceLabel: "⭐ Comprada PayPal (Master)",
        audioUrl: "",
        notes: "Paso básico de merengue acelerado; cruce de piernas en coro; toque de cadera con disociación de brazos arriba."
    },
    {
        id: "zumba-03",
        title: "Vivir Mi Vida",
        artist: "Marc Anthony",
        rhythm: "salsa",
        rhythmLabel: "Salsa",
        duration: "4:12",
        durationSec: 252,
        bpm: 105,
        intensity: 3,
        status: "mastered",
        statusLabel: "100% Dominada",
        audioSource: "spotify",
        audioSourceLabel: "🟢 Spotify Master",
        audioUrl: "https://open.spotify.com/search/Vivir%20mi%20vida%20Marc%20Anthony",
        notes: "Disociación de hombros; paso atrás y vuelta en 8 tiempos; palmas arriba en 'voy a reír, voy a bailar'."
    },
    {
        id: "zumba-04",
        title: "Pegao",
        artist: "Omega 'El Fuerte'",
        rhythm: "merengue",
        rhythmLabel: "Merengue Urbano",
        duration: "3:30",
        durationSec: 210,
        bpm: 152,
        intensity: 4,
        status: "mastered",
        statusLabel: "100% Dominada",
        audioSource: "hq_paypal",
        audioSourceLabel: "⭐ Comprada PayPal (Master)",
        audioUrl: "",
        notes: "Mambo callejero rápido; cambio de nivel (sentadilla corta y subida); juego de palmas dinámico."
    },
    {
        id: "zumba-05",
        title: "La Pollera Colorá",
        artist: "Sonora Dinamita",
        rhythm: "cumbia",
        rhythmLabel: "Cumbia",
        duration: "3:20",
        durationSec: 200,
        bpm: 96,
        intensity: 2,
        status: "mastered",
        statusLabel: "100% Dominada",
        audioSource: "spotify",
        audioSourceLabel: "🟢 Spotify Master",
        audioUrl: "",
        notes: "Paso machete clásico con faldas imaginarias; balanceo lateral; descanso cardio activo para recuperar aire."
    },
    {
        id: "zumba-06",
        title: "Despacito",
        artist: "Luis Fonsi ft. Daddy Yankee",
        rhythm: "bachata",
        rhythmLabel: "Bachata / Pop",
        duration: "3:50",
        durationSec: 230,
        bpm: 89,
        intensity: 2,
        status: "mastered",
        statusLabel: "100% Dominada",
        audioSource: "hq_paypal",
        audioSourceLabel: "⭐ Pista Original HQ (Limpia)",
        audioUrl: "",
        notes: "Aislamiento de cadera en 4 tiempos; onda corporal suave; elongación activa de columna durante el puente."
    },
    {
        id: "zumba-07",
        title: "Dura",
        artist: "Daddy Yankee",
        rhythm: "reggaeton",
        rhythmLabel: "Reggaetón",
        duration: "3:20",
        durationSec: 200,
        bpm: 95,
        intensity: 4,
        status: "mastered",
        statusLabel: "100% Dominada",
        audioSource: "hq_paypal",
        audioSourceLabel: "⭐ Pista Original HQ (Limpia)",
        audioUrl: "",
        notes: "Sentadillas en el drop; brazos en tijera; paso cruzado con rebote; alta quema aeróbica en el tren inferior."
    },
    {
        id: "zumba-08",
        title: "Pepas (Zumba Edit)",
        artist: "Farruko",
        rhythm: "peak",
        rhythmLabel: "Peak Cardio / Electro",
        duration: "3:40",
        durationSec: 220,
        bpm: 130,
        intensity: 5,
        status: "practice",
        statusLabel: "🔄 En Práctica",
        audioSource: "hq_paypal",
        audioSourceLabel: "⭐ Comprada PayPal (Master)",
        audioUrl: "",
        notes: "Clímax de la clase; saltos con rodillas arriba en estribillo; animación vocal fuerte ('no me importa lo que diga la gente')."
    },
    {
        id: "zumba-09",
        title: "Bailando",
        artist: "Enrique Iglesias ft. Gente de Zona",
        rhythm: "urbano",
        rhythmLabel: "Flamenco / Pop Urbano",
        duration: "4:03",
        durationSec: 243,
        bpm: 91,
        intensity: 3,
        status: "mastered",
        statusLabel: "100% Dominada",
        audioSource: "spotify",
        audioSourceLabel: "🟢 Spotify Master",
        audioUrl: "",
        notes: "Braceo español en la intro; zapateo suave; giro suave en 8 tiempos; conexión grupal con palmas."
    },
    {
        id: "zumba-10",
        title: "Stand by Me",
        artist: "Prince Royce",
        rhythm: "cooldown",
        rhythmLabel: "Vuelta a la Calma",
        duration: "3:25",
        durationSec: 205,
        bpm: 125,
        intensity: 1,
        status: "mastered",
        statusLabel: "100% Dominada",
        audioSource: "spotify",
        audioSourceLabel: "🟢 Spotify Master",
        audioUrl: "",
        notes: "Descenso de frecuencia cardíaca; elongación de gemelos, cuádriceps y hombros; respiración profunda y aplauso final."
    }
];

const DEFAULT_CLASS_FLOW = [
    "zumba-01", // Limbo (Calentamiento)
    "zumba-02", // La Dueña del Swing (Merengue)
    "zumba-05", // La Pollera Colorá (Cumbia)
    "zumba-03", // Vivir Mi Vida (Salsa)
    "zumba-04", // Pegao (Merengue Urbano)
    "zumba-06", // Despacito (Bachata)
    "zumba-07", // Dura (Reggaeton)
    "zumba-08", // Pepas (Peak Cardio)
    "zumba-09", // Bailando (Flamenco Urbano)
    "zumba-10"  // Stand by Me (Cool-down)
];

// STATE CONTROLLER
let zumbaSongs = [];
let zumbaClassFlow = [];

function initZumbaLibrary() {
    const storedSongs = localStorage.getItem('ah_antonia_zumba_songs');
    if (storedSongs) {
        try {
            zumbaSongs = JSON.parse(storedSongs);
        } catch (e) {
            zumbaSongs = [...DEFAULT_ZUMBA_SONGS];
        }
    } else {
        zumbaSongs = [...DEFAULT_ZUMBA_SONGS];
        saveZumbaSongsStorage();
    }

    const storedClass = localStorage.getItem('ah_antonia_zumba_class_flow');
    if (storedClass) {
        try {
            zumbaClassFlow = JSON.parse(storedClass);
        } catch (e) {
            zumbaClassFlow = [...DEFAULT_CLASS_FLOW];
        }
    } else {
        zumbaClassFlow = [...DEFAULT_CLASS_FLOW];
        saveZumbaClassStorage();
    }

    renderZumbaDashboard();
    renderZumbaClassFlow();
    renderZumbaInventory();
}

function saveZumbaSongsStorage() {
    localStorage.setItem('ah_antonia_zumba_songs', JSON.stringify(zumbaSongs));
}

function saveZumbaClassStorage() {
    localStorage.setItem('ah_antonia_zumba_class_flow', JSON.stringify(zumbaClassFlow));
}

// FORMAT TIME HELPER
function formatSecToMin(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// RENDER DASHBOARD STATS
function renderZumbaDashboard() {
    const totalSongs = zumbaSongs.length;
    const hqCount = zumbaSongs.filter(s => s.audioSource === 'hq_paypal').length;
    const masteredCount = zumbaSongs.filter(s => s.status === 'mastered').length;
    
    let totalSec = zumbaSongs.reduce((acc, s) => acc + (s.durationSec || 210), 0);
    const totalMin = Math.round(totalSec / 60);

    const statTotalElem = document.getElementById('zumba-stat-total');
    const statHqElem = document.getElementById('zumba-stat-hq');
    const statMasteredElem = document.getElementById('zumba-stat-mastered');
    const statMinElem = document.getElementById('zumba-stat-minutes');

    if (statTotalElem) statTotalElem.innerText = `${totalSongs} Temas`;
    if (statHqElem) statHqElem.innerText = `${hqCount} Pistas HQ`;
    if (statMasteredElem) statMasteredElem.innerText = `${masteredCount} Dominadas`;
    if (statMinElem) statMinElem.innerText = `~${totalMin} Minutos`;
}

// RENDER CLASS BUILDER (CLASS FLOW)
function renderZumbaClassFlow() {
    const container = document.getElementById('zumba-class-flow-list');
    const countElem = document.getElementById('class-flow-count');
    const timeElem = document.getElementById('class-flow-duration');
    const curveBar = document.getElementById('class-flow-curve-bar');

    if (!container) return;

    if (zumbaClassFlow.length === 0) {
        container.innerHTML = `
            <div class="class-flow-empty">
                <i class="fa-solid fa-music" style="font-size: 1.8rem; margin-bottom: 0.5rem; opacity: 0.4;"></i>
                <div>No hay canciones en la clase actual.</div>
                <div style="font-size: 0.76rem; color: #888; margin-top: 4px;">
                    Haz clic en <strong>"+ Añadir a la Clase"</strong> en cualquier canción del inventario o presiona "Cargar Setlist Sugerido".
                </div>
            </div>
        `;
        if (countElem) countElem.innerText = "0 canciones";
        if (timeElem) timeElem.innerText = "0:00 min";
        if (curveBar) curveBar.innerHTML = `<div style="width: 100%; background: #222; height: 100%;"></div>`;
        return;
    }

    let html = '';
    let totalSeconds = 0;
    let curveSegments = '';

    zumbaClassFlow.forEach((songId, index) => {
        const song = zumbaSongs.find(s => s.id === songId);
        if (!song) return;

        totalSeconds += (song.durationSec || 210);

        let rhythmClass = `rhythm-${song.rhythm || 'merengue'}`;
        let energyFlames = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= (song.intensity || 3)) {
                energyFlames += '<i class="fa-solid fa-fire" style="color: #f59e0b;"></i>';
            } else {
                energyFlames += '<i class="fa-solid fa-fire" style="color: #333;"></i>';
            }
        }

        // Color for intensity curve
        let curveColor = '#f59e0b';
        if (song.rhythm === 'warmup') curveColor = '#38bdf8';
        else if (song.rhythm === 'cooldown') curveColor = '#818cf8';
        else if (song.rhythm === 'peak') curveColor = '#fb7185';
        else if (song.intensity >= 4) curveColor = '#ef4444';
        else if (song.intensity === 3) curveColor = '#f59e0b';
        else curveColor = '#34d399';

        curveSegments += `<div class="intensity-curve-segment" style="flex: 1; background: ${curveColor};" title="${index + 1}. ${song.title} (${song.rhythmLabel})"></div>`;

        html += `
            <div class="class-flow-item">
                <div class="class-item-num">${index + 1}</div>
                <div class="class-item-info">
                    <div class="class-item-title">${song.title} <span style="font-weight: 400; color: #888; font-size: 0.8rem;">— ${song.artist}</span></div>
                    <div class="class-item-sub">
                        <span class="rhythm-badge ${rhythmClass}">${song.rhythmLabel}</span>
                        <span><i class="fa-regular fa-clock"></i> ${song.duration}</span>
                        <span class="song-energy-bar">${energyFlames}</span>
                        ${song.audioSource === 'hq_paypal' ? '<span style="color: #fbbf24; font-size: 0.72rem;"><i class="fa-solid fa-star"></i> HQ PayPal</span>' : ''}
                    </div>
                </div>
                <div style="font-size: 0.78rem; color: #aaa; text-align: right; max-width: 250px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                    <i class="fa-solid fa-shoe-prints" style="color: #ec4899; font-size: 0.7rem;"></i> ${song.notes || 'Paso base'}
                </div>
                <div class="class-item-actions">
                    <button class="btn-flow-action" onclick="moveClassSongUp(${index})" title="Subir orden" ${index === 0 ? 'disabled style="opacity:0.3;"' : ''}>
                        <i class="fa-solid fa-chevron-up"></i>
                    </button>
                    <button class="btn-flow-action" onclick="moveClassSongDown(${index})" title="Bajar orden" ${index === zumbaClassFlow.length - 1 ? 'disabled style="opacity:0.3;"' : ''}>
                        <i class="fa-solid fa-chevron-down"></i>
                    </button>
                    <button class="btn-flow-action btn-flow-delete" onclick="removeClassSong(${index})" title="Quitar de la clase">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;

    const formattedTotal = formatSecToMin(totalSeconds);
    if (countElem) countElem.innerText = `${zumbaClassFlow.length} canciones`;
    if (timeElem) timeElem.innerHTML = `<strong>${formattedTotal} min</strong> <span style="font-size:0.75rem; color:#888;">(Meta: 50-55 min)</span>`;
    if (curveBar) curveBar.innerHTML = curveSegments;
}

// CLASS FLOW ACTIONS
function addSongToClassFlow(songId) {
    zumbaClassFlow.push(songId);
    saveZumbaClassStorage();
    renderZumbaClassFlow();
    showToastNotification("🎶 Canción agregada a la secuencia de clase");
}

function removeClassSong(index) {
    zumbaClassFlow.splice(index, 1);
    saveZumbaClassStorage();
    renderZumbaClassFlow();
}

function moveClassSongUp(index) {
    if (index <= 0) return;
    const temp = zumbaClassFlow[index];
    zumbaClassFlow[index] = zumbaClassFlow[index - 1];
    zumbaClassFlow[index - 1] = temp;
    saveZumbaClassStorage();
    renderZumbaClassFlow();
}

function moveClassSongDown(index) {
    if (index >= zumbaClassFlow.length - 1) return;
    const temp = zumbaClassFlow[index];
    zumbaClassFlow[index] = zumbaClassFlow[index + 1];
    zumbaClassFlow[index + 1] = temp;
    saveZumbaClassStorage();
    renderZumbaClassFlow();
}

function loadSuggestedClassFlow() {
    zumbaClassFlow = [...DEFAULT_CLASS_FLOW];
    saveZumbaClassStorage();
    renderZumbaClassFlow();
    showToastNotification("✨ Setlist estándar de 10 canciones (55 min) cargado");
}

function clearClassFlow() {
    if (confirm("¿Deseas vaciar la clase actual? Podrás armarla de nuevo seleccionando canciones.")) {
        zumbaClassFlow = [];
        saveZumbaClassStorage();
        renderZumbaClassFlow();
    }
}

// COPY CLASS SETLIST FOR WHATSAPP / MOBILE
function copyClassSetlistWhatsApp(btnElement) {
    if (zumbaClassFlow.length === 0) {
        alert("Primero añade canciones a la clase para poder exportar el setlist.");
        return;
    }

    let totalSec = 0;
    let text = `💃 *PLAN DE CLASE ZUMBA • ANTONIA JOFRÉ* 🎶\n`;
    text += `⏱️ Duración estimada: [TIEMPO_TOTAL] | 🧘‍♀️ Curva de Intensidad Somática\n\n`;

    zumbaClassFlow.forEach((songId, idx) => {
        const song = zumbaSongs.find(s => s.id === songId);
        if (!song) return;
        totalSec += (song.durationSec || 210);

        let emoji = '🎵';
        if (song.rhythm === 'warmup') emoji = '❄️';
        else if (song.rhythm === 'peak') emoji = '🔥';
        else if (song.rhythm === 'cooldown') emoji = '🧘‍♀️';
        else if (song.intensity >= 4) emoji = '⚡';

        text += `${idx + 1}. ${emoji} *${song.title}* — ${song.artist}\n`;
        text += `   ↳ Ritmo: ${song.rhythmLabel} | Duración: ${song.duration} | ${song.audioSource === 'hq_paypal' ? '⭐ HQ Original' : 'Audio Master'}\n`;
        if (song.notes) {
            text += `   ↳ Pasos: ${song.notes}\n`;
        }
        text += `\n`;
    });

    const totalMinStr = formatSecToMin(totalSec);
    text = text.replace('[TIEMPO_TOTAL]', `${totalMinStr} min`);

    navigator.clipboard.writeText(text).then(() => {
        showToastNotification("📋 ¡Setlist copiado para WhatsApp!");
        if (btnElement) {
            const orig = btnElement.innerHTML;
            btnElement.innerHTML = '<i class="fa-solid fa-check"></i> ¡Copiado!';
            setTimeout(() => { btnElement.innerHTML = orig; }, 2500);
        }
    }).catch(err => {
        alert("No se pudo copiar automáticamente. Por favor copia el texto manualmente.");
    });
}

// PRINT CLASS SHEET
function printZumbaClassSheet() {
    if (zumbaClassFlow.length === 0) {
        alert("Primero añade canciones a la clase para poder imprimir la ficha.");
        return;
    }

    let totalSec = 0;
    let tracksHtml = '';

    zumbaClassFlow.forEach((songId, idx) => {
        const song = zumbaSongs.find(s => s.id === songId);
        if (!song) return;
        totalSec += (song.durationSec || 210);

        tracksHtml += `
            <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 8px 6px; font-weight: bold; text-align: center;">${idx + 1}</td>
                <td style="padding: 8px 6px;"><strong>${song.title}</strong><br><span style="color:#666; font-size:11px;">${song.artist}</span></td>
                <td style="padding: 8px 6px;"><span style="background:#eee; padding:2px 6px; border-radius:4px; font-size:11px; font-weight:bold;">${song.rhythmLabel}</span></td>
                <td style="padding: 8px 6px; text-align: center;">${song.duration}</td>
                <td style="padding: 8px 6px; font-size: 11px;">${song.notes || 'Paso base'}</td>
                <td style="padding: 8px 6px; text-align: center; font-size: 11px;">${song.audioSource === 'hq_paypal' ? '⭐ Pista HQ' : 'Master'}</td>
            </tr>
        `;
    });

    const totalMin = formatSecToMin(totalSec);

    const printWin = window.open('', '_blank');
    printWin.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Ficha de Clase de Zumba • Antonia Jofré</title>
            <style>
                body { font-family: 'Helvetica Neue', Arial, sans-serif; padding: 25px; color: #111; font-size: 13px; line-height: 1.4; }
                h1 { margin: 0 0 4px 0; font-size: 20px; text-transform: uppercase; letter-spacing: 0.5px; }
                .subtitle { color: #555; margin-bottom: 15px; font-size: 12px; }
                table { width: 100%; border-collapse: collapse; margin-top: 10px; }
                th { background: #f0f0f0; border-bottom: 2px solid #333; padding: 8px 6px; font-size: 11px; text-align: left; text-transform: uppercase; }
                .footer { margin-top: 25px; border-top: 1px solid #ccc; padding-top: 10px; font-size: 10px; color: #777; display: flex; justify-content: space-between; }
                .badge-box { display: inline-block; background: #f5f5f5; border: 1px solid #ddd; padding: 4px 10px; border-radius: 6px; font-weight: bold; margin-bottom: 10px; }
            </style>
        </head>
        <body>
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <div>
                    <h1>💃 Ficha Operativa de Clase • Zumba & Movimiento</h1>
                    <div class="subtitle">Instructora: Antonia Jofré • Administración Humana</div>
                </div>
                <div class="badge-box">⏱️ Duración: ${totalMin} min (${zumbaClassFlow.length} canciones)</div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th style="width: 30px; text-align: center;">#</th>
                        <th>Canción / Artista</th>
                        <th style="width: 100px;">Ritmo</th>
                        <th style="width: 55px; text-align: center;">Tiempo</th>
                        <th>Pasos Clave & Coreografía</th>
                        <th style="width: 80px; text-align: center;">Audio</th>
                    </tr>
                </thead>
                <tbody>
                    ${tracksHtml}
                </tbody>
            </table>

            <div class="footer">
                <div>Administración Humana • Sistema Operativo Antigravity</div>
                <div>Impreso: ${new Date().toLocaleDateString('es-CL')}</div>
            </div>
            <script>
                window.onload = function() { window.print(); }
            <\/script>
        </body>
        </html>
    `);
    printWin.document.close();
}

// RENDER INVENTORY SONGS
function renderZumbaInventory() {
    const grid = document.getElementById('zumba-songs-grid');
    const searchVal = (document.getElementById('zumba-search-input')?.value || '').toLowerCase().trim();
    const rhythmVal = document.getElementById('zumba-filter-rhythm')?.value || 'all';
    const intensityVal = document.getElementById('zumba-filter-intensity')?.value || 'all';
    const statusVal = document.getElementById('zumba-filter-status')?.value || 'all';
    const audioVal = document.getElementById('zumba-filter-audio')?.value || 'all';

    if (!grid) return;

    const filtered = zumbaSongs.filter(song => {
        // Search text
        if (searchVal) {
            const titleMatch = (song.title || '').toLowerCase().includes(searchVal);
            const artistMatch = (song.artist || '').toLowerCase().includes(searchVal);
            const notesMatch = (song.notes || '').toLowerCase().includes(searchVal);
            const rhythmMatch = (song.rhythmLabel || '').toLowerCase().includes(searchVal);
            if (!titleMatch && !artistMatch && !notesMatch && !rhythmMatch) return false;
        }

        // Rhythm filter
        if (rhythmVal !== 'all' && song.rhythm !== rhythmVal) return false;

        // Intensity filter
        if (intensityVal !== 'all') {
            if (parseInt(intensityVal) !== song.intensity) return false;
        }

        // Status filter
        if (statusVal !== 'all' && song.status !== statusVal) return false;

        // Audio source filter
        if (audioVal !== 'all' && song.audioSource !== audioVal) return false;

        return true;
    });

    const countElem = document.getElementById('zumba-inventory-count');
    if (countElem) {
        countElem.innerText = `Mostrando ${filtered.length} de ${zumbaSongs.length} canciones`;
    }

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: #777; background: rgba(255,255,255,0.02); border-radius: 12px; border: 1px dashed #333;">
                <i class="fa-solid fa-magnifying-glass" style="font-size: 2rem; margin-bottom: 0.8rem; opacity: 0.4;"></i>
                <div style="font-size: 1rem; color: #ccc;">No se encontraron canciones con los filtros seleccionados.</div>
                <button class="btn-schedule-action" onclick="resetZumbaFilters()" style="margin-top: 1rem;">Limpiar Filtros</button>
            </div>
        `;
        return;
    }

    let html = '';
    filtered.forEach(song => {
        let rhythmClass = `rhythm-${song.rhythm || 'merengue'}`;
        
        let audioBadgeClass = 'audio-source-other';
        if (song.audioSource === 'hq_paypal') audioBadgeClass = 'audio-source-hq';
        else if (song.audioSource === 'spotify') audioBadgeClass = 'audio-source-spotify';
        else if (song.audioSource === 'youtube') audioBadgeClass = 'audio-source-youtube';

        let statusColor = '#10b981';
        if (song.status === 'practice') statusColor = '#f59e0b';
        else if (song.status === 'learning') statusColor = '#60a5fa';
        else if (song.status === 'archived') statusColor = '#71717a';

        let energyFlames = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= (song.intensity || 3)) {
                energyFlames += '<i class="fa-solid fa-fire" style="color: #f59e0b;"></i>';
            } else {
                energyFlames += '<i class="fa-solid fa-fire" style="color: #333;"></i>';
            }
        }

        html += `
            <div class="zumba-song-card" id="song-card-${song.id}">
                <div>
                    <div class="song-card-header">
                        <div>
                            <div class="song-card-title">${song.title}</div>
                            <div class="song-card-artist">${song.artist}</div>
                        </div>
                        <span class="rhythm-badge ${rhythmClass}">${song.rhythmLabel}</span>
                    </div>

                    <div class="song-card-meta-row" style="margin-top: 0.8rem;">
                        <span class="audio-source-badge ${audioBadgeClass}">
                            ${song.audioSource === 'hq_paypal' ? '<i class="fa-solid fa-star"></i>' : (song.audioSource === 'spotify' ? '<i class="fa-brands fa-spotify"></i>' : '<i class="fa-brands fa-youtube"></i>')}
                            ${song.audioSourceLabel}
                        </span>
                        <span style="font-size: 0.72rem; color: #aaa; background: rgba(255,255,255,0.05); padding: 2px 6px; border-radius: 4px;">
                            <i class="fa-regular fa-clock"></i> ${song.duration}
                        </span>
                        ${song.bpm ? `<span style="font-size: 0.72rem; color: #aaa; background: rgba(255,255,255,0.05); padding: 2px 6px; border-radius: 4px;">${song.bpm} BPM</span>` : ''}
                    </div>

                    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.6rem; font-size: 0.74rem;">
                        <div class="song-energy-bar" title="Intensidad: ${song.intensity}/5">
                            <span style="color: #888; font-size: 0.7rem; text-transform: uppercase;">Intensidad:</span> ${energyFlames}
                        </div>
                        <div style="color: ${statusColor}; font-weight: 700;">
                            ${song.statusLabel}
                        </div>
                    </div>

                    <div class="song-coreo-box" style="margin-top: 0.8rem;">
                        <div style="font-size: 0.7rem; font-weight: 700; color: #ec4899; text-transform: uppercase; margin-bottom: 2px;">
                            <i class="fa-solid fa-shoe-prints"></i> Pasos Clave / Coreografía:
                        </div>
                        ${song.notes || 'Paso base de calentamiento y ritmo lateral.'}
                    </div>
                </div>

                <div class="song-card-footer">
                    <button class="btn-add-to-class" onclick="addSongToClassFlow('${song.id}')">
                        <i class="fa-solid fa-plus"></i> Añadir a Clase
                    </button>
                    <div style="display: flex; gap: 6px;">
                        ${song.audioUrl ? `<a href="${song.audioUrl}" target="_blank" class="btn-icon-action" title="Abrir audio / link"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : ''}
                        <button class="btn-icon-action" onclick="openEditSongModal('${song.id}')" title="Editar canción">
                            <i class="fa-regular fa-pen-to-square"></i>
                        </button>
                        <button class="btn-icon-action" onclick="deleteZumbaSong('${song.id}')" title="Eliminar del inventario" style="color: #ef4444;">
                            <i class="fa-regular fa-trash-can"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    });

    grid.innerHTML = html;
}

function resetZumbaFilters() {
    const searchInput = document.getElementById('zumba-search-input');
    const filterRhythm = document.getElementById('zumba-filter-rhythm');
    const filterIntensity = document.getElementById('zumba-filter-intensity');
    const filterStatus = document.getElementById('zumba-filter-status');
    const filterAudio = document.getElementById('zumba-filter-audio');

    if (searchInput) searchInput.value = '';
    if (filterRhythm) filterRhythm.value = 'all';
    if (filterIntensity) filterIntensity.value = 'all';
    if (filterStatus) filterStatus.value = 'all';
    if (filterAudio) filterAudio.value = 'all';

    renderZumbaInventory();
}

// MODAL ADD / EDIT SONG
function openAddSongModal() {
    const modal = document.getElementById('modal-zumba-song-editor');
    const titleElem = document.getElementById('zumba-modal-title');
    const songIdInput = document.getElementById('song-edit-id');

    if (!modal) return;

    if (titleElem) titleElem.innerHTML = '<span>➕ Agregar Nueva Canción a la Biblioteca</span>';
    if (songIdInput) songIdInput.value = '';

    document.getElementById('song-edit-title').value = '';
    document.getElementById('song-edit-artist').value = '';
    document.getElementById('song-edit-rhythm').value = 'merengue';
    document.getElementById('song-edit-duration').value = '3:30';
    document.getElementById('song-edit-bpm').value = '130';
    document.getElementById('song-edit-intensity').value = '3';
    document.getElementById('song-edit-status').value = 'mastered';
    document.getElementById('song-edit-audio-source').value = 'hq_paypal';
    document.getElementById('song-edit-url').value = '';
    document.getElementById('song-edit-notes').value = '';

    modal.classList.add('active');
}

function openEditSongModal(songId) {
    const song = zumbaSongs.find(s => s.id === songId);
    if (!song) return;

    const modal = document.getElementById('modal-zumba-song-editor');
    const titleElem = document.getElementById('zumba-modal-title');
    const songIdInput = document.getElementById('song-edit-id');

    if (!modal) return;

    if (titleElem) titleElem.innerHTML = `<span>✏️ Editar Canción: ${song.title}</span>`;
    if (songIdInput) songIdInput.value = song.id;

    document.getElementById('song-edit-title').value = song.title || '';
    document.getElementById('song-edit-artist').value = song.artist || '';
    document.getElementById('song-edit-rhythm').value = song.rhythm || 'merengue';
    document.getElementById('song-edit-duration').value = song.duration || '3:30';
    document.getElementById('song-edit-bpm').value = song.bpm || '';
    document.getElementById('song-edit-intensity').value = song.intensity || 3;
    document.getElementById('song-edit-status').value = song.status || 'mastered';
    document.getElementById('song-edit-audio-source').value = song.audioSource || 'hq_paypal';
    document.getElementById('song-edit-url').value = song.audioUrl || '';
    document.getElementById('song-edit-notes').value = song.notes || '';

    modal.classList.add('active');
}

function closeZumbaSongModal() {
    const modal = document.getElementById('modal-zumba-song-editor');
    if (modal) modal.classList.remove('active');
}

function saveZumbaSongFromModal() {
    const songIdInput = document.getElementById('song-edit-id');
    const title = document.getElementById('song-edit-title').value.trim();
    const artist = document.getElementById('song-edit-artist').value.trim();
    const rhythm = document.getElementById('song-edit-rhythm').value;
    const duration = document.getElementById('song-edit-duration').value.trim() || '3:30';
    const bpm = parseInt(document.getElementById('song-edit-bpm').value) || null;
    const intensity = parseInt(document.getElementById('song-edit-intensity').value) || 3;
    const status = document.getElementById('song-edit-status').value;
    const audioSource = document.getElementById('song-edit-audio-source').value;
    const audioUrl = document.getElementById('song-edit-url').value.trim();
    const notes = document.getElementById('song-edit-notes').value.trim();

    if (!title || !artist) {
        alert("Por favor ingresa al menos el título de la canción y el artista.");
        return;
    }

    // Calculate duration in seconds
    let durSec = 210;
    if (duration.includes(':')) {
        const parts = duration.split(':');
        durSec = (parseInt(parts[0]) || 3) * 60 + (parseInt(parts[1]) || 0);
    }

    // Label dictionaries
    const rhythmLabels = {
        warmup: "Calentamiento",
        merengue: "Merengue",
        salsa: "Salsa",
        reggaeton: "Reggaetón",
        cumbia: "Cumbia",
        bachata: "Bachata",
        urbano: "Urbano / Pop",
        peak: "Peak Cardio",
        cooldown: "Vuelta a la Calma"
    };

    const statusLabels = {
        mastered: "✅ 100% Dominada",
        practice: "🔄 En Práctica",
        learning: "💡 Por Aprender",
        archived: "📁 Archivada"
    };

    const audioSourceLabels = {
        hq_paypal: "⭐ Pista Original HQ (PayPal)",
        spotify: "🟢 Spotify Master",
        youtube: "🟠 YouTube / Ref",
        other: "🎵 Audio Propio"
    };

    const songData = {
        title,
        artist,
        rhythm,
        rhythmLabel: rhythmLabels[rhythm] || "Ritmo Latino",
        duration,
        durationSec: durSec,
        bpm,
        intensity,
        status,
        statusLabel: statusLabels[status] || "Activa",
        audioSource,
        audioSourceLabel: audioSourceLabels[audioSource] || "Audio Master",
        audioUrl,
        notes
    };

    const existingId = songIdInput ? songIdInput.value : '';

    if (existingId) {
        // Edit
        const idx = zumbaSongs.findIndex(s => s.id === existingId);
        if (idx !== -1) {
            zumbaSongs[idx] = { ...zumbaSongs[idx], ...songData };
        }
        showToastNotification(`✨ Canción "${title}" actualizada`);
    } else {
        // Create new
        const newId = 'zumba-' + Date.now().toString(36);
        zumbaSongs.unshift({ id: newId, ...songData });
        showToastNotification(`🎉 Canción "${title}" agregada al inventario`);
    }

    saveZumbaSongsStorage();
    closeZumbaSongModal();
    renderZumbaDashboard();
    renderZumbaClassFlow();
    renderZumbaInventory();
}

function deleteZumbaSong(songId) {
    const song = zumbaSongs.find(s => s.id === songId);
    if (!song) return;

    if (confirm(`¿Eliminar "${song.title}" de la biblioteca?`)) {
        zumbaSongs = zumbaSongs.filter(s => s.id !== songId);
        zumbaClassFlow = zumbaClassFlow.filter(id => id !== songId);
        saveZumbaSongsStorage();
        saveZumbaClassStorage();
        renderZumbaDashboard();
        renderZumbaClassFlow();
        renderZumbaInventory();
        showToastNotification("🗑️ Canción eliminada del inventario");
    }
}

function resetZumbaDefaultSongs() {
    if (confirm("¿Restablecer la biblioteca a las canciones predeterminadas oficiales?")) {
        zumbaSongs = [...DEFAULT_ZUMBA_SONGS];
        zumbaClassFlow = [...DEFAULT_CLASS_FLOW];
        saveZumbaSongsStorage();
        saveZumbaClassStorage();
        renderZumbaDashboard();
        renderZumbaClassFlow();
        renderZumbaInventory();
        showToastNotification("🔄 Biblioteca restablecida con pistas modelo oficiales");
    }
}

function showToastNotification(msg) {
    const toast = document.getElementById('toast-notification');
    if (toast) {
        toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #10b981;"></i> <span>${msg}</span>`;
        toast.style.display = 'flex';
        setTimeout(() => { toast.style.display = 'none'; }, 3500);
    }
}

// AUTO INIT ON DOM READY
document.addEventListener('DOMContentLoaded', () => {
    initZumbaLibrary();
});
