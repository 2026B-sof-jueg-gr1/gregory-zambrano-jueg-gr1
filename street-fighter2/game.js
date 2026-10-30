// =============================================================================
// STREET FIGHTER II: ECUADOR EDITION - PHASER 3 (NATIVE JAVASCRIPT)
// 8 Personajes Históricos + Pantalla de Selección SF2 + Mapa de Ecuador + Poderes
// =============================================================================

// -----------------------------------------------------------------------------
// 1. DEFINICIÓN DE LOS 8 LUCHADORES HISTÓRICOS (ROSTER OFICIAL DE SF2)
// -----------------------------------------------------------------------------
const CHARACTERS = [
  // --- FILA 1 ---
  {
    id: 'alfaro',
    name: 'ELOY ALFARO',
    shortName: 'ALFARO',
    title: 'El Viejo Luchador',
    origin: 'MONTECRISTI, MANABÍ',
    city: 'Montecristi',
    province: 'Manabí',
    region: 'COSTA',
    mapCoords: { x: 338, y: 124 },
    colorHex: '#0284c7',
    colorNum: 0x0284c7,
    portraitKey: 'portrait_alfaro',
    portraitPath: 'assets/portraits/portrait_alfaro.png',
    faceKey: 'face_alfaro',
    facePath: 'assets/portraits/face_alfaro.png',
    beatenKey: 'beaten_alfaro',
    beatenPath: 'assets/portraits/beaten_alfaro.png',
    spriteKey: 'sprite_alfaro',
    spritePath: 'assets/fighters/sprite_alfaro.png',
    frameWidth: 250,
    frameHeight: 250,
    stageKey: 'stage_plaza_grande',
    powerName: 'Corte Montonero',
    powerCallout: '¡CORTE MONTONERO!',
    projectileType: 'blade',
    projectileColor: 0x38bdf8,
    projectileSpeed: 520,
    projectileDamage: 16,
    quote: '¡La libertad no se implora de rodillas, se conquista en los campos de batalla!'
  },
  {
    id: 'saenz',
    name: 'MANUELA SÁENZ',
    shortName: 'SÁENZ',
    title: 'La Libertadora',
    origin: 'QUITO, PICHINCHA',
    city: 'Quito',
    province: 'Pichincha',
    region: 'SIERRA',
    mapCoords: { x: 412, y: 96 },
    colorHex: '#e11d48',
    colorNum: 0xe11d48,
    portraitKey: 'portrait_saenz',
    portraitPath: 'assets/portraits/portrait_saenz.png',
    faceKey: 'face_saenz',
    facePath: 'assets/portraits/face_saenz.png',
    beatenKey: 'beaten_saenz',
    beatenPath: 'assets/portraits/beaten_saenz.png',
    spriteKey: 'sprite_saenz',
    spritePath: 'assets/fighters/sprite_saenz.png',
    frameWidth: 250,
    frameHeight: 250,
    stageKey: 'stage_plaza_grande',
    powerName: 'Fuego Insurgente',
    powerCallout: '¡FUEGO INSURGENTE!',
    projectileType: 'fireball',
    projectileColor: 0xf43f5e,
    projectileSpeed: 500,
    projectileDamage: 16,
    quote: '¡Ni los imperios ni las cadenas detendrán el fuego inextinguible de la libertad!'
  },
  {
    id: 'ruminahui',
    name: 'RUMIÑAHUI',
    shortName: 'RUMIÑAHUI',
    title: 'Cara de Piedra',
    origin: 'PÍLLARO, TUNGURAHUA',
    city: 'Píllaro',
    province: 'Tungurahua',
    region: 'SIERRA',
    mapCoords: { x: 418, y: 134 },
    colorHex: '#d97706',
    colorNum: 0xd97706,
    portraitKey: 'portrait_ruminahui',
    portraitPath: 'assets/portraits/portrait_ruminahui.png',
    faceKey: 'face_ruminahui',
    facePath: 'assets/portraits/face_ruminahui.png',
    beatenKey: 'beaten_ruminahui',
    beatenPath: 'assets/portraits/beaten_ruminahui.png',
    spriteKey: 'sprite_ruminahui',
    spritePath: 'assets/fighters/sprite_ruminahui.png',
    frameWidth: 250,
    frameHeight: 250,
    stageKey: 'stage_ingapirca',
    powerName: 'Furia del Cotopaxi',
    powerCallout: '¡FURIA DEL COTOPAXI!',
    projectileType: 'magma',
    projectileColor: 0xf59e0b,
    projectileSpeed: 480,
    projectileDamage: 18,
    quote: '¡Antes veré a la ciudad arder en cenizas que arrodillada ante el invasor!'
  },
  {
    id: 'espejo',
    name: 'EUGENIO ESPEJO',
    shortName: 'ESPEJO',
    title: 'El Ilustrado Rebelde',
    origin: 'QUITO, PICHINCHA',
    city: 'Quito',
    province: 'Pichincha',
    region: 'SIERRA',
    mapCoords: { x: 406, y: 104 },
    colorHex: '#16a34a',
    colorNum: 0x16a34a,
    portraitKey: 'portrait_espejo',
    portraitPath: 'assets/portraits/portrait_espejo.png',
    faceKey: 'face_espejo',
    facePath: 'assets/portraits/face_espejo.png',
    beatenKey: 'beaten_espejo',
    beatenPath: 'assets/portraits/beaten_espejo.png',
    spriteKey: 'sprite_espejo',
    spritePath: 'assets/fighters/sprite_espejo.png',
    frameWidth: 250,
    frameHeight: 250,
    stageKey: 'stage_plaza_grande',
    powerName: 'Rayo Ilustrado',
    powerCallout: '¡RAYO ILUSTRADO!',
    projectileType: 'lightning',
    projectileColor: 0x22c55e,
    projectileSpeed: 550,
    projectileDamage: 16,
    quote: '¡La verdad y la ciencia son más letales que mil bayonetas opresoras!'
  },

  // --- FILA 2 ---
  {
    id: 'atahualpa',
    name: 'ATAHUALPA',
    shortName: 'ATAHUALPA',
    title: 'Soberano del Tahuantinsuyo',
    origin: 'CARANQUI, IMBABURA',
    city: 'Caranqui',
    province: 'Imbabura',
    region: 'SIERRA',
    mapCoords: { x: 422, y: 74 },
    colorHex: '#ca8a04',
    colorNum: 0xca8a04,
    portraitKey: 'portrait_atahualpa',
    portraitPath: 'assets/portraits/portrait_atahualpa.png',
    faceKey: 'face_atahualpa',
    facePath: 'assets/portraits/face_atahualpa.png',
    beatenKey: 'beaten_atahualpa',
    beatenPath: 'assets/portraits/beaten_atahualpa.png',
    spriteKey: 'sprite_atahualpa',
    spritePath: 'assets/fighters/sprite_atahualpa.png',
    frameWidth: 250,
    frameHeight: 250,
    stageKey: 'stage_ingapirca',
    powerName: 'Ira del Sol',
    powerCallout: '¡IRA DEL SOL (INTI)!',
    projectileType: 'solar',
    projectileColor: 0xfacc15,
    projectileSpeed: 530,
    projectileDamage: 18,
    quote: '¡El poder del Padre Sol Inti es eterno; el imperio jamás será doblegado!'
  },
  {
    id: 'amaguana',
    name: 'TRÁNSITO AMAGUAÑA',
    shortName: 'AMAGUAÑA',
    title: 'Fuerza del Páramo',
    origin: 'CAYAMBE, PICHINCHA',
    city: 'Cayambe',
    province: 'Pichincha',
    region: 'SIERRA',
    mapCoords: { x: 428, y: 86 },
    colorHex: '#db2777',
    colorNum: 0xdb2777,
    portraitKey: 'portrait_amaguana',
    portraitPath: 'assets/portraits/portrait_amaguana.png',
    faceKey: 'face_amaguana',
    facePath: 'assets/portraits/face_amaguana.png',
    beatenKey: 'beaten_amaguana',
    beatenPath: 'assets/portraits/beaten_amaguana.png',
    spriteKey: 'sprite_amaguana',
    spritePath: 'assets/fighters/sprite_amaguana.png',
    frameWidth: 250,
    frameHeight: 250,
    stageKey: 'stage_ingapirca',
    powerName: 'Fuerza Telúrica',
    powerCallout: '¡FUERZA TELÚRICA!',
    projectileType: 'earth',
    projectileColor: 0xf472b6,
    projectileSpeed: 490,
    projectileDamage: 17,
    quote: '¡Somos como la paja de páramo: si nos arrancan la hierba, volvemos a brotar!'
  },
  {
    id: 'calderon',
    name: 'ABDÓN CALDERÓN',
    shortName: 'CALDERÓN',
    title: 'El Héroe Niño',
    origin: 'CUENCA, AZUAY',
    city: 'Cuenca',
    province: 'Azuay',
    region: 'SIERRA',
    mapCoords: { x: 396, y: 172 },
    colorHex: '#2563eb',
    colorNum: 0x2563eb,
    portraitKey: 'portrait_calderon',
    portraitPath: 'assets/portraits/portrait_calderon.png',
    faceKey: 'face_calderon',
    facePath: 'assets/portraits/face_calderon.png',
    beatenKey: 'beaten_calderon',
    beatenPath: 'assets/portraits/beaten_calderon.png',
    spriteKey: 'sprite_calderon',
    spritePath: 'assets/fighters/sprite_calderon.png',
    frameWidth: 250,
    frameHeight: 250,
    stageKey: 'stage_plaza_grande',
    powerName: 'Carga del Pichincha',
    powerCallout: '¡CARGA DEL PICHINCHA!',
    projectileType: 'sabre',
    projectileColor: 0x60a5fa,
    projectileSpeed: 540,
    projectileDamage: 16,
    quote: '¡Aun herido en batalla, juré no soltar jamás el estandarte de la patria libre!'
  },
  {
    id: 'matilde',
    name: 'MATILDE HIDALGO',
    shortName: 'MATILDE',
    title: 'Pionera del Derecho',
    origin: 'LOJA, LOJA',
    city: 'Loja',
    province: 'Loja',
    region: 'SIERRA',
    mapCoords: { x: 388, y: 198 },
    colorHex: '#7c3aed',
    colorNum: 0x7c3aed,
    portraitKey: 'portrait_matilde',
    portraitPath: 'assets/portraits/portrait_matilde.png',
    faceKey: 'face_matilde',
    facePath: 'assets/portraits/face_matilde.png',
    beatenKey: 'beaten_matilde',
    beatenPath: 'assets/portraits/beaten_matilde.png',
    spriteKey: 'sprite_matilde',
    spritePath: 'assets/fighters/sprite_matilde.png',
    frameWidth: 250,
    frameHeight: 250,
    stageKey: 'stage_plaza_grande',
    powerName: 'Centella Cívica',
    powerCallout: '¡CENTELLA CÍVICA!',
    projectileType: 'star',
    projectileColor: 0xa78bfa,
    projectileSpeed: 510,
    projectileDamage: 16,
    quote: '¡Abrí las urnas y la ciencia para todos; la igualdad no dará un paso atrás!'
  }
];

const STAGES = {
  stage_plaza_grande: {
    key: 'stage_plaza_grande',
    name: 'Plaza Grande, Quito',
    path: 'assets/stages/plaza_grande.jpg'
  },
  stage_ingapirca: {
    key: 'stage_ingapirca',
    name: 'Ruinas de Ingapirca, Cañar',
    path: 'assets/stages/ingapirca.jpg'
  }
};

// -----------------------------------------------------------------------------
// 2. SISTEMA DE AUDIO RETRO SINTETIZADO (Web Audio API)
// -----------------------------------------------------------------------------
const RetroAudio = {
  ctx: null,
  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  },
  play(freq, type = 'square', duration = 0.08, vol = 0.14) {
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(vol, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) { }
  },
  cursor() {
    this.play(440, 'triangle', 0.05, 0.1);
  },
  confirm() {
    this.play(523, 'square', 0.09, 0.15);
    setTimeout(() => this.play(659, 'square', 0.14, 0.15), 85);
  },
  attack() {
    this.play(260, 'sawtooth', 0.07, 0.15);
  },
  hit() {
    this.play(130, 'square', 0.15, 0.22);
  },
  special(charId) {
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      switch (charId) {
        case 'alfaro':
        case 'calderon':
          // Tajo eólico cortante
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(460, now);
          osc.frequency.exponentialRampToValueAtTime(140, now + 0.22);
          gain.gain.setValueAtTime(0.24, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.24);
          break;
        case 'saenz':
        case 'ruminahui':
          // Disparo de cañón / magma enérgico
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(160, now);
          osc.frequency.exponentialRampToValueAtTime(700, now + 0.24);
          gain.gain.setValueAtTime(0.28, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.26);
          break;
        case 'espejo':
          // Chisporroteo eléctrico
          osc.type = 'square';
          osc.frequency.setValueAtTime(900, now);
          osc.frequency.setValueAtTime(260, now + 0.06);
          osc.frequency.setValueAtTime(800, now + 0.12);
          gain.gain.setValueAtTime(0.22, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
          break;
        case 'atahualpa':
          // Campana resonante sagrada Inti
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(587.33, now);
          osc.frequency.exponentialRampToValueAtTime(1174.66, now + 0.28);
          gain.gain.setValueAtTime(0.3, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
          break;
        case 'amaguana':
          // Frecuencia baja telúrica
          osc.type = 'sine';
          osc.frequency.setValueAtTime(90, now);
          osc.frequency.exponentialRampToValueAtTime(180, now + 0.14);
          osc.frequency.exponentialRampToValueAtTime(45, now + 0.26);
          gain.gain.setValueAtTime(0.35, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
          break;
        case 'matilde':
          // Acorde astral armónico
          osc.type = 'sine';
          osc.frequency.setValueAtTime(659.25, now);
          osc.frequency.exponentialRampToValueAtTime(1318.5, now + 0.22);
          gain.gain.setValueAtTime(0.26, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
          break;
        default:
          this.fireball();
          return;
      }
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(now + 0.32);
    } catch (e) {
      this.fireball();
    }
  },
  fireball() {
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(750, this.ctx.currentTime + 0.22);
      gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.24);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.24);
    } catch (e) { }
  },
  specialHit() {
    this.play(90, 'sawtooth', 0.26, 0.28);
    setTimeout(() => this.play(60, 'square', 0.2, 0.2), 60);
  },
  jump() {
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(220, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(560, this.ctx.currentTime + 0.14);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.14);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.14);
    } catch (e) { }
  },
  victory() {
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, idx) => {
      setTimeout(() => this.play(freq, 'square', 0.18, 0.18), idx * 120);
    });
  }
};

// -----------------------------------------------------------------------------
// 3. RESPALDO PROCEDURAL (Garantiza ejecución sin importar recursos faltantes)
// -----------------------------------------------------------------------------
function ensureTextureExists(scene, key, width, height, colorHex, label) {
  if (scene.textures.exists(key) && scene.textures.get(key).key !== '__MISSING') return;
  if (scene.textures.exists(key)) scene.textures.remove(key);

  const canvasTex = scene.textures.createCanvas(key, width, height);
  const ctx = canvasTex.getContext();
  ctx.fillStyle = colorHex || '#1e293b';
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = '#fbbf24';
  ctx.lineWidth = 3;
  ctx.strokeRect(2, 2, width - 4, height - 4);
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 12px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(label || key, width / 2, height / 2);
  canvasTex.refresh();
}

// =============================================================================
// ESCENA 1: SELECTSCENE (Pantalla de Selección Estilo Street Fighter II)
// =============================================================================
class SelectScene extends Phaser.Scene {
  constructor() {
    super('SelectScene');
  }

  preload() {
    this.load.on('loaderror', () => { });

    CHARACTERS.forEach(char => {
      this.load.image(char.portraitKey, char.portraitPath);
      this.load.image(char.faceKey, char.facePath);
      this.load.image(char.beatenKey, char.beatenPath);
      this.load.spritesheet(char.spriteKey, char.spritePath, {
        frameWidth: char.frameWidth,
        frameHeight: char.frameHeight
      });
    });

    Object.values(STAGES).forEach(stg => {
      this.load.image(stg.key, stg.path);
    });
  }

  create() {
    // 1. Respaldo procedural si falta algún asset
    CHARACTERS.forEach(char => {
      ensureTextureExists(this, char.portraitKey, 180, 185, char.colorHex, char.name);
      ensureTextureExists(this, char.faceKey, 64, 64, char.colorHex, char.shortName);
      ensureTextureExists(this, char.beatenKey, 180, 185, '#450a0a', 'KO');
    });

    // 2. Registro de animaciones para los 8 contendientes
    CHARACTERS.forEach(char => {
      if (!this.anims.exists(`${char.id}_idle`)) {
        this.anims.create({
          key: `${char.id}_idle`,
          frames: this.anims.generateFrameNumbers(char.spriteKey, { frames: [0, 1] }),
          frameRate: 3,
          repeat: -1
        });
      }
      if (!this.anims.exists(`${char.id}_attack`)) {
        this.anims.create({
          key: `${char.id}_attack`,
          frames: [{ key: char.spriteKey, frame: 2 }],
          frameRate: 10
        });
      }
      if (!this.anims.exists(`${char.id}_jump`)) {
        this.anims.create({
          key: `${char.id}_jump`,
          frames: [{ key: char.spriteKey, frame: 3 }],
          frameRate: 1
        });
      }
    });

    // 3. Fondo azul rey arcade característico de Street Fighter 2
    const bg = this.add.graphics();
    bg.fillGradientStyle(0x000d2b, 0x000d2b, 0x001d5c, 0x001d5c, 1);
    bg.fillRect(0, 0, 800, 600);

    // 4. Título Superior 'PLAYER SELECT'
    this.crearTituloArcade();

    // 5. Mapa de Ecuador Ultra-Detallado con provincias, volcanes y Galápagos
    this.crearMapaEcuador();

    // 6. Retratos Gigantes de las Esquinas (1P y 2P)
    this.crearRetratosLaterales();

    // 7. Cuadrícula de 8 Rostros (2 filas x 4 columnas)
    this.crearCuadriculaRostros();

    // 8. Estado inicial y cursores
    this.p1Index = 0; // Eloy Alfaro
    this.p2Index = 1; // Manuela Sáenz
    this.p1Locked = false;
    this.p2Locked = false;
    this.transitionStarted = false;

    this.cursorGfx = this.add.graphics();
    this.beaconGfx = this.add.graphics();

    // 9. Teclas de Navegación 2D (A/D/W/S y Flechas)
    this.keys = this.input.keyboard.addKeys({
      p1A: Phaser.Input.Keyboard.KeyCodes.A,
      p1D: Phaser.Input.Keyboard.KeyCodes.D,
      p1W: Phaser.Input.Keyboard.KeyCodes.W,
      p1S: Phaser.Input.Keyboard.KeyCodes.S,
      p1Confirm1: Phaser.Input.Keyboard.KeyCodes.SPACE,
      p1Confirm2: Phaser.Input.Keyboard.KeyCodes.F,

      p2Left: Phaser.Input.Keyboard.KeyCodes.LEFT,
      p2Right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
      p2Up: Phaser.Input.Keyboard.KeyCodes.UP,
      p2Down: Phaser.Input.Keyboard.KeyCodes.DOWN,
      p2Confirm1: Phaser.Input.Keyboard.KeyCodes.ENTER,
      p2Confirm2: Phaser.Input.Keyboard.KeyCodes.L,
      p2Enter: Phaser.Input.Keyboard.KeyCodes.ENTER,
      p2L: Phaser.Input.Keyboard.KeyCodes.L
    });

    this.actualizarUI();
  }

  crearTituloArcade() {
    this.add.text(402, 23, 'PLAYER SELECT', {
      fontFamily: 'impact, sans-serif',
      fontSize: '32px',
      letterSpacing: 4,
      color: '#dc2626'
    }).setOrigin(0.5);

    const title = this.add.text(400, 21, 'PLAYER SELECT', {
      fontFamily: 'impact, sans-serif',
      fontSize: '32px',
      letterSpacing: 4,
      color: '#fbbf24',
      stroke: '#7c2d12',
      strokeThickness: 4
    }).setOrigin(0.5);

    this.tweens.add({
      targets: title,
      scaleX: 1.02,
      scaleY: 1.02,
      duration: 800,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    });
  }

  // ---------------------------------------------------------------------------
  // MAPA DEL ECUADOR DETALLADO (Estilo Street Fighter II World Warrior)
  // ---------------------------------------------------------------------------
  crearMapaEcuador() {
    const mapBox = this.add.graphics();
    const mx = 215;
    const my = 40;
    const mw = 370;
    const mh = 175;

    // 1. Fondo Oceánico con degradado profundo
    mapBox.fillGradientStyle(0x02112e, 0x02112e, 0x0a224f, 0x0a224f, 1);
    mapBox.fillRect(mx, my, mw, mh);

    // Marco exterior biselado arcade
    mapBox.lineStyle(3, 0xf59e0b, 1);
    mapBox.strokeRect(mx, my, mw, mh);
    mapBox.lineStyle(1, 0x38bdf8, 0.8);
    mapBox.strokeRect(mx + 3, my + 3, mw - 6, mh - 6);

    // 2. Cuadrícula de coordenadas geográficas
    mapBox.lineStyle(1, 0x1d4ed8, 0.35);
    for (let x = mx; x <= mx + mw; x += 32) mapBox.lineBetween(x, my, x, my + mh);
    for (let y = my; y <= my + mh; y += 26) mapBox.lineBetween(mx, y, mx + mw, y);

    // Línea Ecuatorial (Latitud 0°)
    mapBox.lineStyle(1, 0xfbbf24, 0.6);
    mapBox.lineBetween(mx, 88, mx + mw, 88);
    this.add.text(mx + 6, 82, '0° ECUADOR', {
      fontFamily: 'monospace',
      fontSize: '8px',
      fontWeight: 'bold',
      color: '#fde047'
    });

    // 3. Región Insular: Archipiélago de Galápagos (Oeste)
    // Fondo de plataforma marina de Galápagos
    mapBox.fillStyle(0x0284c7, 0.25);
    mapBox.fillEllipse(262, 114, 56, 44);

    // Isla Isabela (silueta curvada en forma de caballito de mar)
    mapBox.fillStyle(0xd97706, 0.95);
    mapBox.beginPath();
    mapBox.moveTo(250, 94);
    mapBox.lineTo(256, 92);
    mapBox.lineTo(258, 104);
    mapBox.lineTo(254, 118);
    mapBox.lineTo(262, 130);
    mapBox.lineTo(258, 136);
    mapBox.lineTo(250, 126);
    mapBox.lineTo(252, 108);
    mapBox.closePath();
    mapBox.fill();

    // Isla Santa Cruz & Fernandina & San Cristóbal
    mapBox.fillCircle(272, 112, 6); // Santa Cruz
    mapBox.fillCircle(244, 108, 4); // Fernandina
    mapBox.fillCircle(284, 118, 5); // San Cristóbal
    mapBox.fillCircle(268, 96, 3);  // Santiago

    mapBox.lineStyle(1, 0xfef08a, 0.8);
    mapBox.strokeCircle(272, 112, 6);
    mapBox.strokeCircle(284, 118, 5);

    this.add.text(264, 142, 'ISLAS GALÁPAGOS', {
      fontFamily: 'system-ui, sans-serif',
      fontSize: '7px',
      fontWeight: 'bold',
      color: '#7dd3fc'
    }).setOrigin(0.5);

    // 4. Silueta Continental de Ecuador (Costa, Sierra y Amazonía)
    // Fondo base del territorio continental
    mapBox.fillStyle(0x1e3a24, 0.98); // Amazonía (verde selva)
    mapBox.beginPath();
    mapBox.moveTo(375, 54);  // Límite norte Carchi/Esmeraldas
    mapBox.lineTo(435, 58);  // Sucumbíos norte
    mapBox.lineTo(495, 78);  // Frontera oriental
    mapBox.lineTo(550, 105); // Oriente noreste
    mapBox.lineTo(545, 175); // Morona Santiago
    mapBox.lineTo(485, 206); // Zamora Chinchipe sur
    mapBox.lineTo(425, 210); // Loja sur
    mapBox.lineTo(370, 202); // El Oro frontera
    mapBox.lineTo(352, 185); // Golfo interior
    mapBox.lineTo(332, 168); // Santa Elena
    mapBox.lineTo(326, 128); // Manabí Cabo Pasado
    mapBox.lineTo(354, 88);  // Esmeraldas
    mapBox.lineTo(365, 62);  // San Lorenzo
    mapBox.closePath();
    mapBox.fill();

    // Región Costa (Franja litoral dorada/tierra cálida)
    mapBox.fillStyle(0xb47b36, 0.98);
    mapBox.beginPath();
    mapBox.moveTo(375, 54);
    mapBox.lineTo(396, 68);
    mapBox.lineTo(385, 110);
    mapBox.lineTo(370, 150);
    mapBox.lineTo(370, 202);
    mapBox.lineTo(352, 185);
    mapBox.lineTo(332, 168);
    mapBox.lineTo(326, 128);
    mapBox.lineTo(354, 88);
    mapBox.lineTo(365, 62);
    mapBox.closePath();
    mapBox.fill();

    // Isla Puná en el Golfo de Guayaquil
    mapBox.fillEllipse(345, 174, 9, 7);

    // Región Sierra (Cordillera de los Andes central en terracota montañosa)
    mapBox.fillStyle(0x78350f, 0.95);
    mapBox.beginPath();
    mapBox.moveTo(396, 68);
    mapBox.lineTo(438, 66);
    mapBox.lineTo(446, 125);
    mapBox.lineTo(428, 178);
    mapBox.lineTo(418, 208);
    mapBox.lineTo(380, 202);
    mapBox.lineTo(370, 150);
    mapBox.lineTo(385, 110);
    mapBox.closePath();
    mapBox.fill();

    // Contorno exterior iluminado de la costa pacífica
    mapBox.lineStyle(2, 0x38bdf8, 1);
    mapBox.beginPath();
    mapBox.moveTo(365, 62);
    mapBox.lineTo(354, 88);
    mapBox.lineTo(326, 128);
    mapBox.lineTo(332, 168);
    mapBox.lineTo(352, 185);
    mapBox.lineTo(370, 202);
    mapBox.stroke();

    // Frontera continental oriental
    mapBox.lineStyle(1.5, 0x64748b, 0.7);
    mapBox.beginPath();
    mapBox.moveTo(375, 54);
    mapBox.lineTo(435, 58);
    mapBox.lineTo(495, 78);
    mapBox.lineTo(550, 105);
    mapBox.lineTo(545, 175);
    mapBox.lineTo(485, 206);
    mapBox.lineTo(425, 210);
    mapBox.stroke();

    // Ríos Amazónicos principales (Napo y Pastaza)
    mapBox.lineStyle(1.5, 0x0284c7, 0.85);
    // Río Napo
    mapBox.beginPath();
    mapBox.moveTo(438, 104);
    mapBox.lineTo(478, 110);
    mapBox.lineTo(545, 118);
    mapBox.stroke();
    // Río Pastaza
    mapBox.beginPath();
    mapBox.moveTo(432, 142);
    mapBox.lineTo(482, 158);
    mapBox.lineTo(535, 182);
    mapBox.stroke();

    // 5. Volcanes Nevados de la Avenida de los Volcanes (Picos 3D con nieve)
    const volcanes = [
      { name: 'Cayambe', x: 428, y: 86 },
      { name: 'Pichincha', x: 408, y: 98 },
      { name: 'Cotopaxi', x: 418, y: 120 },
      { name: 'Tungurahua', x: 416, y: 138 },
      { name: 'Chimborazo', x: 398, y: 152 }
    ];

    volcanes.forEach(vol => {
      // Sombra montañosa
      mapBox.fillStyle(0x3e1a05, 1);
      mapBox.fillTriangle(vol.x, vol.y - 8, vol.x - 7, vol.y + 4, vol.x + 7, vol.y + 4);
      // Nieve en la cumbre
      mapBox.fillStyle(0xffffff, 1);
      mapBox.fillTriangle(vol.x, vol.y - 8, vol.x - 3, vol.y - 2, vol.x + 3, vol.y - 2);
    });

    // 6. Etiquetas de las Regiones Geográficas
    this.add.text(342, 102, 'COSTA', {
      fontFamily: 'impact, sans-serif',
      fontSize: '9px',
      letterSpacing: 1,
      color: '#fde047'
    }).setOrigin(0.5);

    this.add.text(408, 114, 'SIERRA', {
      fontFamily: 'impact, sans-serif',
      fontSize: '9px',
      letterSpacing: 1,
      color: '#f97316'
    }).setOrigin(0.5);

    this.add.text(495, 136, 'AMAZONÍA', {
      fontFamily: 'impact, sans-serif',
      fontSize: '9px',
      letterSpacing: 1,
      color: '#4ade80'
    }).setOrigin(0.5);

    // Título superior del mapa
    this.add.text(400, 48, '★ REPÚBLICA DEL ECUADOR ★', {
      fontFamily: 'impact, sans-serif',
      fontSize: '11px',
      letterSpacing: 2,
      color: '#fbbf24'
    }).setOrigin(0.5);

    // Banner flotante para mostrar la provincia activa en el mapa
    this.mapInfoText = this.add.text(400, 204, '', {
      fontFamily: 'system-ui, sans-serif',
      fontSize: '9px',
      fontWeight: 'bold',
      color: '#ffffff',
      backgroundColor: 'rgba(2, 6, 23, 0.85)',
      padding: { x: 8, y: 2 }
    }).setOrigin(0.5);
  }

  // ---------------------------------------------------------------------------
  // Retratos Gigantes Laterales (1P Izquierda, 2P Derecha)
  // ---------------------------------------------------------------------------
  crearRetratosLaterales() {
    // --- 1P IZQUIERDA ---
    const cx1 = 115;
    const cy1 = 410;

    this.add.text(cx1 - 65, cy1 - 165, '1P', {
      fontFamily: 'impact, sans-serif',
      fontSize: '28px',
      letterSpacing: 2,
      color: '#38bdf8',
      stroke: '#0369a1',
      strokeThickness: 4
    });

    this.p1NameText = this.add.text(cx1, cy1 - 130, 'ELOY ALFARO', {
      fontFamily: 'impact, system-ui, sans-serif',
      fontSize: '19px',
      letterSpacing: 1,
      color: '#ffffff',
      stroke: '#000000',
      strokeThickness: 4
    }).setOrigin(0.5);

    this.p1OriginText = this.add.text(cx1, cy1 - 108, 'MONTECRISTI, MANABÍ', {
      fontFamily: 'system-ui, sans-serif',
      fontSize: '10px',
      fontWeight: 'bold',
      color: '#fbbf24'
    }).setOrigin(0.5);

    const p1Frame = this.add.graphics();
    p1Frame.fillStyle(0x0f172a, 1);
    p1Frame.fillRect(cx1 - 92, cy1 - 92, 184, 184);
    p1Frame.lineStyle(3, 0x0284c7, 1);
    p1Frame.strokeRect(cx1 - 92, cy1 - 92, 184, 184);

    this.p1Portrait = this.add.image(cx1, cy1, CHARACTERS[0].portraitKey);
    this.p1Portrait.setDisplaySize(180, 180);

    this.p1PowerText = this.add.text(cx1, cy1 + 104, '⚡ PODER: CORTE MONTONERO', {
      fontFamily: 'system-ui, sans-serif',
      fontSize: '10px',
      fontWeight: 'bold',
      color: '#38bdf8',
      backgroundColor: '#0c4a6e',
      padding: { x: 6, y: 3 }
    }).setOrigin(0.5);

    // --- 2P DERECHA ---
    const cx2 = 685;
    const cy2 = 410;

    this.add.text(cx2 + 35, cy2 - 165, '2P', {
      fontFamily: 'impact, sans-serif',
      fontSize: '28px',
      letterSpacing: 2,
      color: '#f87171',
      stroke: '#b91c1c',
      strokeThickness: 4
    });

    this.p2NameText = this.add.text(cx2, cy2 - 130, 'MANUELA SÁENZ', {
      fontFamily: 'impact, system-ui, sans-serif',
      fontSize: '19px',
      letterSpacing: 1,
      color: '#ffffff',
      stroke: '#000000',
      strokeThickness: 4
    }).setOrigin(0.5);

    this.p2OriginText = this.add.text(cx2, cy2 - 108, 'QUITO, PICHINCHA', {
      fontFamily: 'system-ui, sans-serif',
      fontSize: '10px',
      fontWeight: 'bold',
      color: '#fbbf24'
    }).setOrigin(0.5);

    const p2Frame = this.add.graphics();
    p2Frame.fillStyle(0x0f172a, 1);
    p2Frame.fillRect(cx2 - 92, cy2 - 92, 184, 184);
    p2Frame.lineStyle(3, 0xe11d48, 1);
    p2Frame.strokeRect(cx2 - 92, cy2 - 92, 184, 184);

    this.p2Portrait = this.add.image(cx2, cy2, CHARACTERS[1].portraitKey);
    this.p2Portrait.setDisplaySize(180, 180);
    this.p2Portrait.setFlipX(true);

    this.p2PowerText = this.add.text(cx2, cy2 + 104, '⚡ PODER: FUEGO INSURGENTE', {
      fontFamily: 'system-ui, sans-serif',
      fontSize: '10px',
      fontWeight: 'bold',
      color: '#f87171',
      backgroundColor: '#881337',
      padding: { x: 6, y: 3 }
    }).setOrigin(0.5);
  }

  // ---------------------------------------------------------------------------
  // Cuadrícula Central de Rostros (2x4 Celdas estilo Street Fighter 2)
  // ---------------------------------------------------------------------------
  crearCuadriculaRostros() {
    const gridOriginX = 400;
    const gridOriginY = 365;

    const gridMetal = this.add.graphics();
    gridMetal.fillStyle(0x1e293b, 1);
    gridMetal.fillRect(gridOriginX - 155, gridOriginY - 80, 310, 165);
    gridMetal.lineStyle(4, 0x64748b, 1);
    gridMetal.strokeRect(gridOriginX - 155, gridOriginY - 80, 310, 165);

    this.cellPositions = [];
    const cellW = 70;
    const cellH = 70;
    const gapX = 6;
    const gapY = 6;

    CHARACTERS.forEach((char, index) => {
      const row = Math.floor(index / 4);
      const col = index % 4;
      const x = gridOriginX - 114 + col * (cellW + gapX);
      const y = gridOriginY - 40 + row * (cellH + gapY);

      this.cellPositions.push({ x, y });

      const cellBox = this.add.graphics();
      cellBox.fillStyle(0x0f172a, 1);
      cellBox.fillRect(x - cellW / 2, y - cellH / 2, cellW, cellH);
      cellBox.lineStyle(2, 0x334155, 1);
      cellBox.strokeRect(x - cellW / 2, y - cellH / 2, cellW, cellH);

      const face = this.add.image(x, y - 5, char.faceKey);
      face.setDisplaySize(cellW - 6, cellH - 16);

      // Etiqueta del nombre debajo de la cara
      const nameBar = this.add.graphics();
      nameBar.fillStyle(0x0f172a, 0.95);
      nameBar.fillRect(x - cellW / 2 + 2, y + cellH / 2 - 15, cellW - 4, 13);
      this.add.text(x, y + cellH / 2 - 9, char.shortName, {
        fontFamily: 'monospace',
        fontSize: '9px',
        fontWeight: 'bold',
        color: '#f8fafc'
      }).setOrigin(0.5);
    });

    this.blinkingPrompt = this.add.text(400, 480, '★ INSERT COIN / PRESS SPACE TO FIGHT ★', {
      fontFamily: 'impact, system-ui, sans-serif',
      fontSize: '15px',
      letterSpacing: 2,
      color: '#fbbf24',
      stroke: '#b45309',
      strokeThickness: 3
    }).setOrigin(0.5);

    this.tweens.add({
      targets: this.blinkingPrompt,
      alpha: 0.15,
      duration: 450,
      yoyo: true,
      repeat: -1
    });

    this.add.text(400, 580, 'P1: [A / D / W / S] Navegar  [ESPACIO/F] Confirmar  |  P2: [FLECHAS] Navegar  [ENTER/L] Confirmar', {
      fontFamily: 'system-ui, sans-serif',
      fontSize: '12px',
      color: '#94a3b8'
    }).setOrigin(0.5);
  }

  // ---------------------------------------------------------------------------
  // ACTUALIZACIÓN DE UI: CURSORES, RETRATOS, BANDERAS Y BALIZAS EN EL MAPA
  // ---------------------------------------------------------------------------
  actualizarUI() {
    const p1Char = CHARACTERS[this.p1Index];
    const p2Char = CHARACTERS[this.p2Index];

    this.p1Portrait.setTexture(p1Char.portraitKey);
    this.p1Portrait.setDisplaySize(180, 180);
    this.p1NameText.setText(p1Char.name);
    this.p1OriginText.setText(`${p1Char.origin} - ${p1Char.region}`);
    this.p1PowerText.setText(`⚡ PODER: ${p1Char.powerName.toUpperCase()}`);

    this.p2Portrait.setTexture(p2Char.portraitKey);
    this.p2Portrait.setDisplaySize(180, 180);
    this.p2Portrait.setFlipX(true);
    this.p2NameText.setText(p2Char.name);
    this.p2OriginText.setText(`${p2Char.origin} - ${p2Char.region}`);
    this.p2PowerText.setText(`⚡ PODER: ${p2Char.powerName.toUpperCase()}`);

    // Cursores en la cuadrícula
    this.cursorGfx.clear();
    const cellW = 74;
    const cellH = 74;
    const p1Pos = this.cellPositions[this.p1Index];
    const p2Pos = this.cellPositions[this.p2Index];

    // Cursor 1P
    const p1Col = this.p1Locked ? 0xfbbf24 : 0x38bdf8;
    this.cursorGfx.lineStyle(4, p1Col, 1);
    this.cursorGfx.strokeRect(p1Pos.x - cellW / 2, p1Pos.y - cellH / 2, cellW, cellH);
    this.cursorGfx.fillStyle(p1Col, 1);
    this.cursorGfx.fillRoundedRect(p1Pos.x - cellW / 2 - 2, p1Pos.y - cellH / 2 - 12, 30, 16, 3);

    // Cursor 2P
    const p2Col = this.p2Locked ? 0xfbbf24 : 0xf87171;
    this.cursorGfx.lineStyle(4, p2Col, 1);
    this.cursorGfx.strokeRect(p2Pos.x - cellW / 2 + 2, p2Pos.y - cellH / 2 + 2, cellW - 4, cellH - 4);
    this.cursorGfx.fillStyle(p2Col, 1);
    this.cursorGfx.fillRoundedRect(p2Pos.x + cellW / 2 - 28, p2Pos.y - cellH / 2 - 12, 30, 16, 3);

    if (!this.p1Tag) {
      this.p1Tag = this.add.text(0, 0, '1P', { fontFamily: 'impact', fontSize: '11px', color: '#000' }).setOrigin(0.5);
      this.p2Tag = this.add.text(0, 0, '2P', { fontFamily: 'impact', fontSize: '11px', color: '#000' }).setOrigin(0.5);
    }
    this.p1Tag.setPosition(p1Pos.x - cellW / 2 + 13, p1Pos.y - cellH / 2 - 4);
    this.p2Tag.setPosition(p2Pos.x + cellW / 2 - 13, p2Pos.y - cellH / 2 - 4);

    // DIBUJAR BALIZAS Y BANDERAS INTERACTIVAS EN EL MAPA DE ECUADOR
    this.beaconGfx.clear();

    // 1. Líneas de radar de vuelo (Dotted arcade flight path)
    this.beaconGfx.lineStyle(2, 0x38bdf8, 0.7);
    this.beaconGfx.lineBetween(115, 300, p1Char.mapCoords.x, p1Char.mapCoords.y);

    this.beaconGfx.lineStyle(2, 0xf87171, 0.7);
    this.beaconGfx.lineBetween(685, 300, p2Char.mapCoords.x, p2Char.mapCoords.y);

    // 2. Ondas de radar circulares en la provincia de P1 y P2
    this.beaconGfx.lineStyle(1.5, 0x38bdf8, 0.85);
    this.beaconGfx.strokeCircle(p1Char.mapCoords.x, p1Char.mapCoords.y, 10);
    this.beaconGfx.strokeCircle(p1Char.mapCoords.x, p1Char.mapCoords.y, 16);

    this.beaconGfx.lineStyle(1.5, 0xf87171, 0.85);
    this.beaconGfx.strokeCircle(p2Char.mapCoords.x, p2Char.mapCoords.y, 10);
    this.beaconGfx.strokeCircle(p2Char.mapCoords.x, p2Char.mapCoords.y, 16);

    // 3. Dibujar Banderas Tricolores de Ecuador (Amarillo, Azul, Rojo) en los pines
    this.dibujarBanderaEcuador(this.beaconGfx, p1Char.mapCoords.x - 14, p1Char.mapCoords.y - 18, '1P');
    this.dibujarBanderaEcuador(this.beaconGfx, p2Char.mapCoords.x + 2, p2Char.mapCoords.y - 18, '2P');

    // 4. Texto informativo en el mapa
    if (this.mapInfoText) {
      this.mapInfoText.setText(`[1P: ${p1Char.city.toUpperCase()} (${p1Char.region})]   VS   [2P: ${p2Char.city.toUpperCase()} (${p2Char.region})]`);
    }
  }

  dibujarBanderaEcuador(gfx, x, y, playerLabel) {
    // Asta dorada
    gfx.fillStyle(0xd97706, 1);
    gfx.fillRect(x, y - 2, 2, 16);

    // Bandera Tricolor (18px x 11px)
    // Amarillo (mitad superior = 5px)
    gfx.fillStyle(0xfacc15, 1);
    gfx.fillRect(x + 2, y - 2, 16, 6);
    // Azul (cuarto medio = 3px)
    gfx.fillStyle(0x2563eb, 1);
    gfx.fillRect(x + 2, y + 4, 16, 3);
    // Rojo (cuarto inferior = 3px)
    gfx.fillStyle(0xdc2626, 1);
    gfx.fillRect(x + 2, y + 7, 16, 3);

    // Borde negro fino
    gfx.lineStyle(1, 0x000000, 0.8);
    gfx.strokeRect(x + 2, y - 2, 16, 12);

    // Indicador 1P o 2P sobre la bandera
    const col = playerLabel === '1P' ? 0x38bdf8 : 0xf87171;
    gfx.fillStyle(col, 1);
    gfx.fillCircle(x + 1, y - 3, 3);
  }

  update() {
    if (!this.keys || this.transitionStarted) return;

    // --- P1 (A / D horizontal, W / S vertical) ---
    if (!this.p1Locked) {
      if (this.keys.p1A && Phaser.Input.Keyboard.JustDown(this.keys.p1A)) {
        this.p1Index = (this.p1Index - 1 + CHARACTERS.length) % CHARACTERS.length;
        RetroAudio.cursor();
        this.actualizarUI();
      } else if (this.keys.p1D && Phaser.Input.Keyboard.JustDown(this.keys.p1D)) {
        this.p1Index = (this.p1Index + 1) % CHARACTERS.length;
        RetroAudio.cursor();
        this.actualizarUI();
      } else if (
        (this.keys.p1W && Phaser.Input.Keyboard.JustDown(this.keys.p1W)) ||
        (this.keys.p1S && Phaser.Input.Keyboard.JustDown(this.keys.p1S))
      ) {
        this.p1Index = (this.p1Index + 4) % CHARACTERS.length;
        RetroAudio.cursor();
        this.actualizarUI();
      }

      if (
        (this.keys.p1Confirm1 && Phaser.Input.Keyboard.JustDown(this.keys.p1Confirm1)) ||
        (this.keys.p1Confirm2 && Phaser.Input.Keyboard.JustDown(this.keys.p1Confirm2))
      ) {
        this.p1Locked = true;
        RetroAudio.confirm();
        this.actualizarUI();
        this.verificarTransicionCombate();
      }
    }

    // --- P2 (Flechas horizontal y vertical) ---
    if (!this.p2Locked) {
      if (this.keys.p2Left && Phaser.Input.Keyboard.JustDown(this.keys.p2Left)) {
        this.p2Index = (this.p2Index - 1 + CHARACTERS.length) % CHARACTERS.length;
        RetroAudio.cursor();
        this.actualizarUI();
      } else if (this.keys.p2Right && Phaser.Input.Keyboard.JustDown(this.keys.p2Right)) {
        this.p2Index = (this.p2Index + 1) % CHARACTERS.length;
        RetroAudio.cursor();
        this.actualizarUI();
      } else if (
        (this.keys.p2Up && Phaser.Input.Keyboard.JustDown(this.keys.p2Up)) ||
        (this.keys.p2Down && Phaser.Input.Keyboard.JustDown(this.keys.p2Down))
      ) {
        this.p2Index = (this.p2Index + 4) % CHARACTERS.length;
        RetroAudio.cursor();
        this.actualizarUI();
      }

      if (
        (this.keys.p2Enter && Phaser.Input.Keyboard.JustDown(this.keys.p2Enter)) ||
        (this.keys.p2L && Phaser.Input.Keyboard.JustDown(this.keys.p2L)) ||
        (this.keys.p2Confirm1 && Phaser.Input.Keyboard.JustDown(this.keys.p2Confirm1)) ||
        (this.keys.p2Confirm2 && Phaser.Input.Keyboard.JustDown(this.keys.p2Confirm2))
      ) {
        this.p2Locked = true;
        RetroAudio.confirm();
        this.actualizarUI();
        this.verificarTransicionCombate();
      }
    }
  }

  verificarTransicionCombate() {
    if (this.p1Locked && this.p2Locked && !this.transitionStarted) {
      this.transitionStarted = true;
      this.cameras.main.flash(350, 255, 255, 255);

      const vsBanner = this.add.text(400, 250, '¡BATTLE START!', {
        fontFamily: 'impact, sans-serif',
        fontSize: '44px',
        letterSpacing: 3,
        color: '#fbbf24',
        stroke: '#000000',
        strokeThickness: 8
      }).setOrigin(0.5).setScale(0);

      this.tweens.add({
        targets: vsBanner,
        scale: 1,
        ease: 'Back.easeOut',
        duration: 400
      });

      this.time.delayedCall(1300, () => {
        this.cameras.main.fade(300, 0, 0, 0, false, (cam, prog) => {
          if (prog === 1) {
            this.scene.start('FightScene', {
              p1: CHARACTERS[this.p1Index],
              p2: CHARACTERS[this.p2Index]
            });
          }
        });
      });
    }
  }
}

// =============================================================================
// ESCENA 2: FIGHTSCENE (Combate con Poderes Especiales y Pantalla de Resultados SF2)
// =============================================================================
class FightScene extends Phaser.Scene {
  constructor() {
    super('FightScene');
  }

  init(data) {
    this.p1Data = data.p1 || CHARACTERS[0];
    this.p2Data = data.p2 || CHARACTERS[1];
  }

  create() {
    const stageKey = this.p1Data.stageKey || 'stage_plaza_grande';
    this.bg = this.add.image(400, 300, stageKey);
    this.bg.setDisplaySize(800, 600);

    this.physics.world.setBounds(0, 0, 800, 600);
    this.physics.world.gravity.y = 500;

    this.projectiles = this.physics.add.group();

    // 1. Luchador 1
    this.jugador1 = this.physics.add.sprite(200, 480, this.p1Data.spriteKey);
    this.jugador1.setCollideWorldBounds(true);
    this.jugador1.setSize(85, 175);
    this.jugador1.setOffset(82, 70);
    this.jugador1.play(`${this.p1Data.id}_idle`);

    // 2. Luchador 2
    this.jugador2 = this.physics.add.sprite(600, 480, this.p2Data.spriteKey);
    this.jugador2.setCollideWorldBounds(true);
    this.jugador2.setSize(85, 175);
    this.jugador2.setOffset(82, 70);
    this.jugador2.setFlipX(true);
    this.jugador2.play(`${this.p2Data.id}_idle`);

    if (this.p1Data.id === this.p2Data.id) {
      this.jugador2.setTint(0xfca5a5);
    }

    this.physics.add.collider(this.jugador1, this.jugador2);

    this.physics.add.overlap(this.projectiles, this.jugador2, (proj, defender) => {
      if (proj.owner === 1) this.impactarProyectil(proj, defender, 2);
    });

    this.physics.add.overlap(this.projectiles, this.jugador1, (proj, defender) => {
      if (proj.owner === 2) this.impactarProyectil(proj, defender, 1);
    });

    this.p1Health = 100;
    this.p2Health = 100;
    this.isP1Attacking = false;
    this.isP2Attacking = false;
    this.p1PowerReady = true;
    this.p2PowerReady = true;
    this.gameOver = false;
    this.canRestart = false;

    this.keys = this.input.keyboard.addKeys({
      p1Left: Phaser.Input.Keyboard.KeyCodes.A,
      p1Right: Phaser.Input.Keyboard.KeyCodes.D,
      p1Up: Phaser.Input.Keyboard.KeyCodes.W,
      p1Attack: Phaser.Input.Keyboard.KeyCodes.SPACE,
      p1AttackF: Phaser.Input.Keyboard.KeyCodes.F,
      p1Special: Phaser.Input.Keyboard.KeyCodes.J,

      p2Left: Phaser.Input.Keyboard.KeyCodes.LEFT,
      p2Right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
      p2Up: Phaser.Input.Keyboard.KeyCodes.UP,
      p2Attack: Phaser.Input.Keyboard.KeyCodes.ENTER,
      p2AttackL: Phaser.Input.Keyboard.KeyCodes.L,
      p2Special: Phaser.Input.Keyboard.KeyCodes.P,

      restart: Phaser.Input.Keyboard.KeyCodes.R,
      esc: Phaser.Input.Keyboard.KeyCodes.ESC
    });

    this.crearHUD();
    this.cameras.main.fadeIn(300, 0, 0, 0);
  }

  crearHUD() {
    this.hudContainer = this.add.container(0, 0);

    const hudBg = this.add.graphics();
    hudBg.fillStyle(0x000000, 0.7);
    hudBg.fillRect(0, 0, 800, 78);
    hudBg.lineStyle(1, 0x334155, 1);
    hudBg.lineBetween(0, 78, 800, 78);
    this.hudContainer.add(hudBg);

    // --- P1 HUD ---
    const p1Name = this.add.text(40, 8, this.p1Data.name, {
      fontFamily: 'impact, sans-serif',
      fontSize: '18px',
      letterSpacing: 1,
      color: '#38bdf8'
    });
    const p1Origin = this.add.text(40, 28, `${this.p1Data.origin} [${this.p1Data.region}]`, {
      fontFamily: 'system-ui, sans-serif',
      fontSize: '10px',
      fontWeight: 'bold',
      color: '#94a3b8'
    });
    this.hudContainer.add([p1Name, p1Origin]);

    const p1BarBg = this.add.graphics();
    p1BarBg.fillStyle(0x1e293b, 1);
    p1BarBg.fillRect(40, 46, 300, 16);
    this.p1HealthBar = this.add.graphics();
    this.actualizarBarra(this.p1HealthBar, 40, 46, this.p1Health, 0x38bdf8, false);
    this.hudContainer.add([p1BarBg, this.p1HealthBar]);

    this.p1PowerBadge = this.add.text(40, 64, `[J] PODER: ${this.p1Data.powerName.toUpperCase()}`, {
      fontFamily: 'system-ui, sans-serif',
      fontSize: '9px',
      fontWeight: 'bold',
      color: '#38bdf8'
    });
    this.hudContainer.add(this.p1PowerBadge);

    // --- TEMPORIZADOR RETRO ---
    this.timerText = this.add.text(400, 24, '99', {
      fontFamily: 'impact, monospace',
      fontSize: '32px',
      color: '#fbbf24',
      stroke: '#000000',
      strokeThickness: 4
    }).setOrigin(0.5);

    const roundText = this.add.text(400, 52, 'ROUND 1', {
      fontFamily: 'system-ui, sans-serif',
      fontSize: '10px',
      fontWeight: 'bold',
      letterSpacing: 2,
      color: '#ef4444'
    }).setOrigin(0.5);
    this.hudContainer.add([this.timerText, roundText]);

    this.timeLeft = 99;
    this.time.addEvent({
      delay: 1000,
      repeat: 98,
      callback: () => {
        if (!this.gameOver) {
          this.timeLeft--;
          this.timerText.setText(this.timeLeft < 10 ? '0' + this.timeLeft : '' + this.timeLeft);
          if (this.timeLeft === 0) this.finalizarPorTiempo();
        }
      }
    });

    // --- P2 HUD ---
    const p2Name = this.add.text(760, 8, this.p2Data.name, {
      fontFamily: 'impact, sans-serif',
      fontSize: '18px',
      letterSpacing: 1,
      color: '#f87171'
    }).setOrigin(1, 0);

    const p2Origin = this.add.text(760, 28, `${this.p2Data.origin} [${this.p2Data.region}]`, {
      fontFamily: 'system-ui, sans-serif',
      fontSize: '10px',
      fontWeight: 'bold',
      color: '#94a3b8'
    }).setOrigin(1, 0);
    this.hudContainer.add([p2Name, p2Origin]);

    const p2BarBg = this.add.graphics();
    p2BarBg.fillStyle(0x1e293b, 1);
    p2BarBg.fillRect(460, 46, 300, 16);
    this.p2HealthBar = this.add.graphics();
    this.actualizarBarra(this.p2HealthBar, 460, 46, this.p2Health, 0xf87171, true);
    this.hudContainer.add([p2BarBg, this.p2HealthBar]);

    this.p2PowerBadge = this.add.text(760, 64, `[P] PODER: ${this.p2Data.powerName.toUpperCase()}`, {
      fontFamily: 'system-ui, sans-serif',
      fontSize: '9px',
      fontWeight: 'bold',
      color: '#f87171'
    }).setOrigin(1, 0);
    this.hudContainer.add(this.p2PowerBadge);

    const escHint = this.add.text(400, 585, '[ESC] Volver a la selección', {
      fontFamily: 'system-ui, sans-serif',
      fontSize: '11px',
      color: 'rgba(255, 255, 255, 0.45)'
    }).setOrigin(0.5);
    this.hudContainer.add(escHint);
  }

  actualizarBarra(graphics, x, y, health, color, flipFromRight) {
    graphics.clear();
    graphics.fillStyle(color, 1);
    const width = Math.max(0, (health / 100) * 300);
    if (flipFromRight) {
      graphics.fillRect(x + (300 - width), y, width, 16);
    } else {
      graphics.fillRect(x, y, width, 16);
    }
  }

  update() {
    if (!this.keys) return;

    if (this.keys.esc && Phaser.Input.Keyboard.JustDown(this.keys.esc)) {
      this.scene.start('SelectScene');
      return;
    }

    if (this.gameOver && this.canRestart) {
      if (
        (this.keys.p1Attack && Phaser.Input.Keyboard.JustDown(this.keys.p1Attack)) ||
        (this.keys.p2Attack && Phaser.Input.Keyboard.JustDown(this.keys.p2Attack))
      ) {
        this.scene.start('SelectScene');
        return;
      }
      if (this.keys.restart && Phaser.Input.Keyboard.JustDown(this.keys.restart)) {
        this.scene.restart({ p1: this.p1Data, p2: this.p2Data });
        return;
      }
    }

    if (this.gameOver) return;

    const VELOCIDAD = 260;
    const FUERZA_SALTO = -380;
    const p1EnPiso = this.jugador1.body.blocked.down || this.jugador1.body.touching.down;
    const p2EnPiso = this.jugador2.body.blocked.down || this.jugador2.body.touching.down;

    // --- P1 Movimiento ---
    if (this.keys.p1Left.isDown) {
      this.jugador1.setVelocityX(-VELOCIDAD);
      this.jugador1.setFlipX(true);
    } else if (this.keys.p1Right.isDown) {
      this.jugador1.setVelocityX(VELOCIDAD);
      this.jugador1.setFlipX(false);
    } else {
      this.jugador1.setVelocityX(0);
      if (this.jugador1.x < this.jugador2.x) {
        this.jugador1.setFlipX(false);
      } else {
        this.jugador1.setFlipX(true);
      }
    }

    if (this.keys.p1Up.isDown && p1EnPiso) {
      this.jugador1.setVelocityY(FUERZA_SALTO);
      RetroAudio.jump();
    }

    if (!this.isP1Attacking) {
      if (!p1EnPiso) {
        this.jugador1.play(`${this.p1Data.id}_jump`, true);
      } else {
        this.jugador1.play(`${this.p1Data.id}_idle`, true);
      }
    }

    if (
      (this.keys.p1Attack && Phaser.Input.Keyboard.JustDown(this.keys.p1Attack)) ||
      (this.keys.p1AttackF && Phaser.Input.Keyboard.JustDown(this.keys.p1AttackF))
    ) {
      this.ejecutarAtaqueNormal(1);
    }

    if (this.keys.p1Special && Phaser.Input.Keyboard.JustDown(this.keys.p1Special)) {
      this.lanzarPoderEspecial(1);
    }

    // --- P2 Movimiento (Corregido y Natural) ---
    if (this.keys.p2Left.isDown) {
      this.jugador2.setVelocityX(-VELOCIDAD);
      this.jugador2.setFlipX(true);
    } else if (this.keys.p2Right.isDown) {
      this.jugador2.setVelocityX(VELOCIDAD);
      this.jugador2.setFlipX(false);
    } else {
      this.jugador2.setVelocityX(0);
      if (this.jugador2.x > this.jugador1.x) {
        this.jugador2.setFlipX(true);
      } else {
        this.jugador2.setFlipX(false);
      }
    }

    if (this.keys.p2Up.isDown && p2EnPiso) {
      this.jugador2.setVelocityY(FUERZA_SALTO);
      RetroAudio.jump();
    }

    if (!this.isP2Attacking) {
      if (!p2EnPiso) {
        this.jugador2.play(`${this.p2Data.id}_jump`, true);
      } else {
        this.jugador2.play(`${this.p2Data.id}_idle`, true);
      }
    }

    if (
      (this.keys.p2Attack && Phaser.Input.Keyboard.JustDown(this.keys.p2Attack)) ||
      (this.keys.p2AttackL && Phaser.Input.Keyboard.JustDown(this.keys.p2AttackL))
    ) {
      this.ejecutarAtaqueNormal(2);
    }

    if (this.keys.p2Special && Phaser.Input.Keyboard.JustDown(this.keys.p2Special)) {
      this.lanzarPoderEspecial(2);
    }

    this.projectiles.children.each(proj => {
      if (proj && (proj.x < -50 || proj.x > 850)) {
        if (proj.customGfx) proj.customGfx.destroy();
        proj.destroy();
      }
    });
  }

  ejecutarAtaqueNormal(jugadorId) {
    if (jugadorId === 1) {
      if (!this.isP1Attacking) {
        this.isP1Attacking = true;
        this.jugador1.play(`${this.p1Data.id}_attack`);
        RetroAudio.attack();
        this.verificarGolpeMelee(this.jugador1, this.jugador2, 1);
        this.time.delayedCall(280, () => (this.isP1Attacking = false));
      }
    } else {
      if (!this.isP2Attacking) {
        this.isP2Attacking = true;
        this.jugador2.play(`${this.p2Data.id}_attack`);
        RetroAudio.attack();
        this.verificarGolpeMelee(this.jugador2, this.jugador1, 2);
        this.time.delayedCall(280, () => (this.isP2Attacking = false));
      }
    }
  }

  verificarGolpeMelee(atacante, defensor, jugadorAtacante) {
    const dist = Phaser.Math.Distance.Between(atacante.x, atacante.y, defensor.x, defensor.y);
    if (dist < 150 && Math.abs(atacante.y - defensor.y) < 80) {
      const dir = atacante.x < defensor.x ? 1 : -1;
      defensor.setVelocityX(dir * 220);
      defensor.setTint(0xff3333);
      RetroAudio.hit();

      const spark = this.add.circle((atacante.x + defensor.x) / 2, atacante.y - 15, 18, 0xfde047, 0.9);
      this.tweens.add({
        targets: spark,
        scale: 2,
        alpha: 0,
        duration: 160,
        onComplete: () => spark.destroy()
      });

      this.time.delayedCall(120, () => {
        if (!this.gameOver) {
          if (this.p1Data.id === this.p2Data.id && defensor === this.jugador2) {
            defensor.setTint(0xfca5a5);
          } else {
            defensor.clearTint();
          }
        }
      });

      if (jugadorAtacante === 1) {
        this.p2Health = Math.max(0, this.p2Health - 9);
        this.actualizarBarra(this.p2HealthBar, 460, 46, this.p2Health, 0xf87171, true);
        if (this.p2Health === 0) this.declararKO(1);
      } else {
        this.p1Health = Math.max(0, this.p1Health - 9);
        this.actualizarBarra(this.p1HealthBar, 40, 46, this.p1Health, 0x38bdf8, false);
        if (this.p1Health === 0) this.declararKO(2);
      }
    }
  }

  // ---------------------------------------------------------------------------
  // LANZAMIENTO DE PODERES ESPECIALES CARACTERÍSTICOS
  // ---------------------------------------------------------------------------
  lanzarPoderEspecial(jugadorId) {
    if (jugadorId === 1) {
      if (!this.p1PowerReady || this.isP1Attacking) return;
      this.p1PowerReady = false;
      this.isP1Attacking = true;
      this.jugador1.play(`${this.p1Data.id}_attack`);
      RetroAudio.special(this.p1Data.id);

      const dir = this.jugador1.flipX ? -1 : 1;
      const spawnX = this.jugador1.x + dir * 60;
      const spawnY = this.jugador1.y - 10;

      this.crearGraficoProyectil(spawnX, spawnY, dir, this.p1Data, 1);
      this.mostrarAnuncioPoder(this.p1Data.powerCallout, '#38bdf8');

      this.time.delayedCall(300, () => (this.isP1Attacking = false));
      this.time.delayedCall(800, () => (this.p1PowerReady = true));
    } else {
      if (!this.p2PowerReady || this.isP2Attacking) return;
      this.p2PowerReady = false;
      this.isP2Attacking = true;
      this.jugador2.play(`${this.p2Data.id}_attack`);
      RetroAudio.special(this.p2Data.id);

      const dir = this.jugador2.flipX ? -1 : 1;
      const spawnX = this.jugador2.x + dir * 60;
      const spawnY = this.jugador2.y - 10;

      this.crearGraficoProyectil(spawnX, spawnY, dir, this.p2Data, 2);
      this.mostrarAnuncioPoder(this.p2Data.powerCallout, '#f87171');

      this.time.delayedCall(300, () => (this.isP2Attacking = false));
      this.time.delayedCall(800, () => (this.p2PowerReady = true));
    }
  }

  crearGraficoProyectil(x, y, dir, charData, ownerId) {
    // Proyectil Físico Base
    const projectile = this.add.circle(x, y, 22, charData.projectileColor, 0);
    this.physics.add.existing(projectile);
    projectile.body.setAllowGravity(false);
    projectile.body.setVelocityX(dir * charData.projectileSpeed);
    projectile.owner = ownerId;
    projectile.charData = charData;

    // Objeto Gráfico Especial Personalizado para cada personaje
    const gfx = this.add.graphics();
    projectile.customGfx = gfx;

    const updateEvent = this.time.addEvent({
      delay: 16,
      repeat: 85,
      callback: () => {
        if (projectile && projectile.body && projectile.active) {
          const px = projectile.x;
          const py = projectile.y;
          gfx.clear();

          // Renderizar gráfica específica del poder
          switch (charData.projectileType) {
            case 'blade':
              // Alfaro: Tajo creciente de machete
              gfx.fillStyle(0x38bdf8, 0.95);
              gfx.beginPath();
              gfx.arc(px, py, 26, -Math.PI / 2.2, Math.PI / 2.2, false);
              gfx.arc(px - dir * 12, py, 18, Math.PI / 2.2, -Math.PI / 2.2, true);
              gfx.closePath();
              gfx.fill();
              gfx.lineStyle(2, 0xffffff, 1);
              gfx.stroke();
              break;

            case 'fireball':
              // Sáenz: Cañón de fuego insurgente con núcleo ardiente
              gfx.fillStyle(0xf43f5e, 0.9);
              gfx.fillCircle(px, py, 22);
              gfx.fillStyle(0xfbbf24, 1);
              gfx.fillCircle(px, py, 12);
              gfx.fillStyle(0xffffff, 1);
              gfx.fillCircle(px + dir * 4, py, 6);
              break;

            case 'magma':
              // Rumiñahui: Roca volcánica del Cotopaxi
              gfx.fillStyle(0x78350f, 1);
              gfx.fillCircle(px, py, 24);
              gfx.fillStyle(0xf97316, 1);
              gfx.fillCircle(px - dir * 4, py - 3, 13);
              gfx.fillStyle(0xfef08a, 1);
              gfx.fillCircle(px + dir * 2, py + 2, 6);
              break;

            case 'lightning':
              // Espejo: Rayo eléctrico de plasma
              gfx.fillStyle(0x22c55e, 0.9);
              gfx.fillCircle(px, py, 18);
              gfx.lineStyle(3, 0xffffff, 1);
              gfx.beginPath();
              gfx.moveTo(px - dir * 15, py - 12);
              gfx.lineTo(px, py + 4);
              gfx.lineTo(px + dir * 6, py - 6);
              gfx.lineTo(px + dir * 20, py + 10);
              gfx.stroke();
              break;

            case 'solar':
              // Atahualpa: Disco Solar del Inti con 8 rayos dorados
              gfx.fillStyle(0xfacc15, 1);
              gfx.fillCircle(px, py, 18);
              gfx.fillStyle(0xffffff, 1);
              gfx.fillCircle(px, py, 9);
              gfx.lineStyle(2, 0xf59e0b, 1);
              for (let i = 0; i < 8; i++) {
                const ang = (i * Math.PI) / 4;
                gfx.lineBetween(
                  px + Math.cos(ang) * 18,
                  py + Math.sin(ang) * 18,
                  px + Math.cos(ang) * 28,
                  py + Math.sin(ang) * 28
                );
              }
              break;

            case 'earth':
              // Amaguaña: Masa telúrica rodante
              gfx.fillStyle(0x831843, 1);
              gfx.fillCircle(px, py, 22);
              gfx.fillStyle(0xf472b6, 1);
              gfx.fillCircle(px, py, 12);
              gfx.fillStyle(0xffffff, 1);
              gfx.fillCircle(px, py, 5);
              break;

            case 'sabre':
              // Calderón: Estocada relampagueante de sable
              gfx.fillStyle(0x60a5fa, 0.95);
              gfx.beginPath();
              gfx.moveTo(px + dir * 26, py);
              gfx.lineTo(px - dir * 18, py - 14);
              gfx.lineTo(px - dir * 8, py);
              gfx.lineTo(px - dir * 18, py + 14);
              gfx.closePath();
              gfx.fill();
              gfx.lineStyle(2, 0xffffff, 1);
              gfx.stroke();
              break;

            case 'star':
              // Matilde: Centella cívica estelar
              gfx.fillStyle(0xa78bfa, 0.95);
              gfx.fillCircle(px, py, 18);
              gfx.fillStyle(0xfef08a, 1);
              // Estrella de 4 puntas
              gfx.beginPath();
              gfx.moveTo(px, py - 24);
              gfx.lineTo(px + 6, py - 6);
              gfx.lineTo(px + 24, py);
              gfx.lineTo(px + 6, py + 6);
              gfx.lineTo(px, py + 24);
              gfx.lineTo(px - 6, py + 6);
              gfx.lineTo(px - 24, py);
              gfx.lineTo(px - 6, py - 6);
              gfx.closePath();
              gfx.fill();
              break;

            default:
              gfx.fillStyle(charData.projectileColor, 1);
              gfx.fillCircle(px, py, 20);
          }

          // Estela de partículas
          const trail = this.add.circle(px - dir * 12, py, 14, charData.projectileColor, 0.45);
          this.tweens.add({
            targets: trail,
            scale: 0.1,
            alpha: 0,
            duration: 170,
            onComplete: () => trail.destroy()
          });
        } else {
          gfx.destroy();
          updateEvent.remove();
        }
      }
    });

    this.projectiles.add(projectile);
  }

  impactarProyectil(proyectil, defensor, jugadorDefensor) {
    if (!proyectil || !proyectil.active) return;
    if (proyectil.customGfx) proyectil.customGfx.destroy();
    const charData = proyectil.charData;
    const hitX = proyectil.x;
    const hitY = proyectil.y;
    proyectil.destroy();

    RetroAudio.specialHit();

    const dir = hitX < defensor.x ? 1 : -1;
    defensor.setVelocityX(dir * 320);
    defensor.setTint(0xff5555);

    const blast = this.add.circle(hitX, hitY, 35, charData.projectileColor, 0.9);
    const blastCore = this.add.circle(hitX, hitY, 20, 0xffffff, 1);

    this.tweens.add({
      targets: [blast, blastCore],
      scale: 2.2,
      alpha: 0,
      duration: 220,
      onComplete: () => {
        blast.destroy();
        blastCore.destroy();
      }
    });

    this.time.delayedCall(160, () => {
      if (!this.gameOver) {
        if (this.p1Data.id === this.p2Data.id && defensor === this.jugador2) {
          defensor.setTint(0xfca5a5);
        } else {
          defensor.clearTint();
        }
      }
    });

    if (jugadorDefensor === 2) {
      this.p2Health = Math.max(0, this.p2Health - charData.projectileDamage);
      this.actualizarBarra(this.p2HealthBar, 460, 46, this.p2Health, 0xf87171, true);
      if (this.p2Health === 0) this.declararKO(1);
    } else {
      this.p1Health = Math.max(0, this.p1Health - charData.projectileDamage);
      this.actualizarBarra(this.p1HealthBar, 40, 46, this.p1Health, 0x38bdf8, false);
      if (this.p1Health === 0) this.declararKO(2);
    }
  }

  mostrarAnuncioPoder(texto, colorHex) {
    const banner = this.add.text(400, 110, texto, {
      fontFamily: 'impact, sans-serif',
      fontSize: '24px',
      letterSpacing: 2,
      color: colorHex,
      stroke: '#000000',
      strokeThickness: 5
    }).setOrigin(0.5).setScale(0);

    this.tweens.add({
      targets: banner,
      scale: 1,
      duration: 180,
      yoyo: true,
      hold: 400,
      onComplete: () => banner.destroy()
    });
  }

  // ---------------------------------------------------------------------------
  // ANIMACIONES DE VICTORIA Y DERROTA (ESTILO STREET FIGHTER II)
  // ---------------------------------------------------------------------------
  declararKO(ganadorNum) {
    this.gameOver = true;
    this.jugador1.setVelocityX(0);
    this.jugador2.setVelocityX(0);

    const ganador = ganadorNum === 1 ? this.p1Data : this.p2Data;
    const perdedor = ganadorNum === 1 ? this.p2Data : this.p1Data;
    const ganadorSprite = ganadorNum === 1 ? this.jugador1 : this.jugador2;
    const perdedorSprite = ganadorNum === 1 ? this.jugador2 : this.jugador1;

    // 1. IMPACTO Y TEMBLOR DE PANTALLA
    this.cameras.main.shake(320, 0.025);
    RetroAudio.specialHit();

    // 2. ANIMACIÓN DE DERROTA DEL PERDEDOR (Cae al piso, girado y ensombrecido)
    const fallDir = ganadorSprite.x < perdedorSprite.x ? 1 : -1;
    perdedorSprite.setVelocityX(fallDir * 180);
    perdedorSprite.setVelocityY(-200);
    perdedorSprite.setTint(0x64748b);
    this.tweens.add({
      targets: perdedorSprite,
      angle: fallDir * 75,
      duration: 400,
      ease: 'Quad.easeOut'
    });

    // 3. ANIMACIÓN DE VICTORIA DEL GANADOR (Salto de victoria y destello dorado)
    ganadorSprite.play(`${ganador.id}_jump`, true);
    ganadorSprite.setVelocityY(-260);
    ganadorSprite.setTint(0xfff066); // Aura dorada de campeón
    RetroAudio.victory();

    this.tweens.add({
      targets: ganadorSprite,
      scaleX: 1.15,
      scaleY: 1.15,
      duration: 250,
      yoyo: true,
      repeat: 2
    });

    // 4. RÓTULO K.O.! RETRO
    const koText = this.add.text(400, 220, 'K.O.!', {
      fontFamily: 'impact, sans-serif',
      fontSize: '78px',
      letterSpacing: 4,
      color: '#ef4444',
      stroke: '#000000',
      strokeThickness: 9
    }).setOrigin(0.5).setScale(0);

    this.tweens.add({
      targets: koText,
      scale: 1,
      ease: 'Back.easeOut',
      duration: 500
    });

    // 5. TRANSICIÓN A LA PANTALLA DE RESULTADOS DE STREET FIGHTER II
    this.time.delayedCall(1600, () => {
      this.mostrarPantallaResultadosSF2(ganador, perdedor, ganadorNum);
    });
  }

  finalizarPorTiempo() {
    this.gameOver = true;
    this.jugador1.setVelocityX(0);
    this.jugador2.setVelocityX(0);

    let ganadorNum = 0;
    if (this.p1Health > this.p2Health) ganadorNum = 1;
    else if (this.p2Health > this.p1Health) ganadorNum = 2;

    if (ganadorNum > 0) {
      this.declararKO(ganadorNum);
    } else {
      this.add.text(400, 240, 'TIME UP - ¡EMPATE!', {
        fontFamily: 'impact, sans-serif',
        fontSize: '44px',
        color: '#fbbf24',
        stroke: '#000000',
        strokeThickness: 8
      }).setOrigin(0.5);
      this.time.delayedCall(1500, () => {
        this.scene.start('SelectScene');
      });
    }
  }

  // ---------------------------------------------------------------------------
  // PANTALLA DE RESULTADOS ESTILO STREET FIGHTER II (WINNER QUOTE + BEATEN FACE)
  // ---------------------------------------------------------------------------
  mostrarPantallaResultadosSF2(ganador, perdedor, ganadorNum) {
    if (this.hudContainer) {
      this.hudContainer.setVisible(false);
    }

    const resultsBg = this.add.graphics();
    resultsBg.fillStyle(0x020817, 0.94);
    resultsBg.fillRect(0, 0, 800, 600);
    resultsBg.setDepth(90);
    resultsBg.setAlpha(0);

    this.tweens.add({
      targets: resultsBg,
      alpha: 1,
      duration: 350
    });

    const resContainer = this.add.container(0, 0);
    resContainer.setDepth(100);
    resContainer.setAlpha(0);

    // Líneas de rayos diagonales dorados
    const rays = this.add.graphics();
    rays.lineStyle(2, 0xd97706, 0.3);
    for (let i = -200; i < 1000; i += 60) {
      rays.lineBetween(i, 0, i + 300, 600);
    }
    resContainer.add(rays);

    const vicTitle = this.add.text(400, 42, '★ VICTORY ★', {
      fontFamily: 'impact, sans-serif',
      fontSize: '38px',
      letterSpacing: 4,
      color: '#fbbf24',
      stroke: '#92400e',
      strokeThickness: 6
    }).setOrigin(0.5);
    resContainer.add(vicTitle);

    // --- LADO IZQUIERDO: RETRATO DEL GANADOR EN PLENA GLORIA ---
    const winFrame = this.add.graphics();
    winFrame.fillStyle(0x0f172a, 1);
    winFrame.fillRect(80, 95, 190, 190);
    winFrame.lineStyle(4, 0xfbbf24, 1);
    winFrame.strokeRect(80, 95, 190, 190);
    resContainer.add(winFrame);

    const winPortrait = this.add.image(175, 190, ganador.portraitKey);
    winPortrait.setDisplaySize(182, 182);
    resContainer.add(winPortrait);

    const winBadge = this.add.text(175, 305, `${ganador.name} WINS`, {
      fontFamily: 'impact, sans-serif',
      fontSize: '22px',
      letterSpacing: 2,
      color: '#38bdf8',
      stroke: '#000000',
      strokeThickness: 4
    }).setOrigin(0.5);
    resContainer.add(winBadge);

    const isPerfect = (ganadorNum === 1 && this.p1Health === 100) || (ganadorNum === 2 && this.p2Health === 100);
    if (isPerfect) {
      const perfectText = this.add.text(175, 335, '★ PERFECT! ★', {
        fontFamily: 'impact, sans-serif',
        fontSize: '18px',
        color: '#fbbf24',
        stroke: '#b45309',
        strokeThickness: 4
      }).setOrigin(0.5);
      resContainer.add(perfectText);
    }

    // --- LADO DERECHO: RETRATO DEL PERDEDOR HERIDO / MORETONEADO (SF2 BEATEN) ---
    const loseFrame = this.add.graphics();
    loseFrame.fillStyle(0x1e1b4b, 1);
    loseFrame.fillRect(530, 95, 190, 190);
    loseFrame.lineStyle(4, 0xef4444, 1);
    loseFrame.strokeRect(530, 95, 190, 190);
    resContainer.add(loseFrame);

    const losePortrait = this.add.image(625, 190, perdedor.beatenKey);
    losePortrait.setDisplaySize(182, 182);
    losePortrait.setFlipX(true);
    resContainer.add(losePortrait);

    const loseBadge = this.add.text(625, 305, `${perdedor.name} DEFEAT`, {
      fontFamily: 'impact, sans-serif',
      fontSize: '20px',
      letterSpacing: 1,
      color: '#94a3b8',
      stroke: '#000000',
      strokeThickness: 4
    }).setOrigin(0.5);
    resContainer.add(loseBadge);

    // --- CENTRO INFERIOR: FRASE CÉLEBRE DE VICTORIA ESTILO STREET FIGHTER 2 ---
    const quoteBox = this.add.graphics();
    quoteBox.fillStyle(0x0b1329, 0.95);
    quoteBox.fillRect(60, 360, 680, 120);
    quoteBox.lineStyle(3, 0xfbbf24, 1);
    quoteBox.strokeRect(60, 360, 680, 120);
    resContainer.add(quoteBox);

    const quoteHeader = this.add.text(80, 372, `"${ganador.name}" DICE:`, {
      fontFamily: 'system-ui, sans-serif',
      fontSize: '11px',
      fontWeight: 'bold',
      letterSpacing: 2,
      color: '#fbbf24'
    });
    resContainer.add(quoteHeader);

    const quoteBody = this.add.text(400, 425, `“ ${ganador.quote} ”`, {
      fontFamily: 'system-ui, sans-serif',
      fontSize: '17px',
      fontWeight: 'bold',
      fontStyle: 'italic',
      color: '#ffffff',
      align: 'center',
      wordWrap: { width: 620 }
    }).setOrigin(0.5);
    resContainer.add(quoteBody);

    // --- OPCIONES INFERIORES: CONTINUAR O REVANCHA ---
    const prompt1 = this.add.text(400, 520, '★ Presiona [ESPACIO] o [ENTER] para Volver a Selección ★', {
      fontFamily: 'impact, system-ui, sans-serif',
      fontSize: '17px',
      letterSpacing: 1,
      color: '#fbbf24',
      stroke: '#000000',
      strokeThickness: 3
    }).setOrigin(0.5);

    const prompt2 = this.add.text(400, 555, 'Presiona [R] para Revancha Inmediata', {
      fontFamily: 'system-ui, sans-serif',
      fontSize: '13px',
      color: '#94a3b8'
    }).setOrigin(0.5);

    resContainer.add([prompt1, prompt2]);

    this.tweens.add({
      targets: prompt1,
      alpha: 0.25,
      duration: 450,
      yoyo: true,
      repeat: -1
    });

    this.tweens.add({
      targets: resContainer,
      alpha: 1,
      duration: 400
    });

    this.canRestart = true;
  }
}

// =============================================================================
// CONFIGURACIÓN DE PHASER 3
// =============================================================================
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game-container',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 500 },
      debug: false
    }
  },
  scene: [SelectScene, FightScene]
};

const game = new Phaser.Game(config);
window.game = game;
