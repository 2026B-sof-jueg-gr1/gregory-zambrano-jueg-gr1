// =============================================================================
// Configuración principal de Phaser 3 - Street Fighter: Ecuador Edition
// =============================================================================
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game-container',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 500 }, // Gravedad vertical en el eje Y configurada a 500
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

const game = new Phaser.Game(config);

// Variables de personajes, físicas y entradas
let jugador1;
let jugador2;
let keysP1;
let cursorsP2;
let attackKeyP1;
let attackKeyP2;

// Estados de combate
let isP1Attacking = false;
let isP2Attacking = false;
let p1Health = 100;
let p2Health = 100;
let p1HealthBar;
let p2HealthBar;

// =============================================================================
// 1. PRELOAD: Carga de recursos desde la carpeta local 'assets/'
// =============================================================================
function preload() {
  // Escenario de fondo
  this.load.image('fondo', 'assets/PlazaGrande.jpg');

  // Spritesheets transparentes en cuadrícula uniforme (4 fotogramas de 250x250 c/u)
  // Fotograma 0: Postura Idle 1
  // Fotograma 1: Postura Idle 2 (respiración / movimiento)
  // Fotograma 2: Ataque (Machetazo para Eloy / Puñetazo directo para Manuela)
  // Fotograma 3: Salto (Pose aérea con arma alzada / Patada voladora)
  this.load.spritesheet('eloy', 'assets/eloy_sheet.png', {
    frameWidth: 250,
    frameHeight: 250
  });

  this.load.spritesheet('manuela', 'assets/manuela_sheet.png', {
    frameWidth: 250,
    frameHeight: 250
  });
}

// =============================================================================
// 2. CREATE: Inicialización del escenario, animaciones, físicas y HUD
// =============================================================================
function create() {
  // 1. Fondo del escenario centrado en el lienzo de 800x600
  const fondo = this.add.image(400, 300, 'fondo');
  fondo.setDisplaySize(800, 600);

  // 2. Animaciones para Eloy Alfaro (Jugador 1)
  this.anims.create({
    key: 'eloy_idle',
    frames: this.anims.generateFrameNumbers('eloy', { frames: [0, 1] }),
    frameRate: 3,
    repeat: -1
  });

  this.anims.create({
    key: 'eloy_attack',
    frames: [{ key: 'eloy', frame: 2 }],
    frameRate: 10
  });

  this.anims.create({
    key: 'eloy_jump',
    frames: [{ key: 'eloy', frame: 3 }],
    frameRate: 1
  });

  // 3. Animaciones para Manuela Cañizares (Jugador 2)
  this.anims.create({
    key: 'manuela_idle',
    frames: this.anims.generateFrameNumbers('manuela', { frames: [0, 1] }),
    frameRate: 3,
    repeat: -1
  });

  this.anims.create({
    key: 'manuela_attack',
    frames: [{ key: 'manuela', frame: 2 }],
    frameRate: 10
  });

  this.anims.create({
    key: 'manuela_jump',
    frames: [{ key: 'manuela', frame: 3 }],
    frameRate: 1
  });

  // 4. Instanciación de los dos sprites con físicas Arcade
  // Jugador 1 (Eloy Alfaro)
  jugador1 = this.physics.add.sprite(200, 480, 'eloy');
  jugador1.setCollideWorldBounds(true);
  jugador1.setSize(85, 175);
  jugador1.setOffset(82, 70);
  jugador1.play('eloy_idle');

  // Jugador 2 (Manuela Cañizares)
  jugador2 = this.physics.add.sprite(600, 480, 'manuela');
  jugador2.setCollideWorldBounds(true);
  jugador2.setSize(85, 175);
  jugador2.setOffset(82, 70);
  jugador2.setFlipX(true); // Mirar hacia la izquierda
  jugador2.play('manuela_idle');

  // Colisión física sólida entre ambos peleadores
  this.physics.add.collider(jugador1, jugador2);

  // 5. Configuración de controles
  // Jugador 1: A y D para movimiento horizontal, W para saltar
  keysP1 = this.input.keyboard.addKeys({
    up: Phaser.Input.Keyboard.KeyCodes.W,
    left: Phaser.Input.Keyboard.KeyCodes.A,
    right: Phaser.Input.Keyboard.KeyCodes.D
  });
  // Ataque P1: Tecla J o Barra Espaciadora
  attackKeyP1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);
  const spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

  // Jugador 2: Flechas del cursor (Izquierda, Derecha, Arriba)
  cursorsP2 = this.input.keyboard.createCursorKeys();
  // Ataque P2: Tecla L o Teclado Numérico 0
  attackKeyP2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L);

  // 6. HUD / Barras de vida estilo Arcade Retro
  crearHUD(this);

  // Evento de ataque para P1
  const dispararAtaqueP1 = () => {
    if (!isP1Attacking) {
      isP1Attacking = true;
      jugador1.play('eloy_attack');
      verificarGolpe(this, jugador1, jugador2, 1);
      this.time.delayedCall(300, () => {
        isP1Attacking = false;
      });
    }
  };
  attackKeyP1.on('down', dispararAtaqueP1);
  spaceKey.on('down', dispararAtaqueP1);

  // Evento de ataque para P2
  attackKeyP2.on('down', () => {
    if (!isP2Attacking) {
      isP2Attacking = true;
      jugador2.play('manuela_attack');
      verificarGolpe(this, jugador2, jugador1, 2);
      this.time.delayedCall(300, () => {
        isP2Attacking = false;
      });
    }
  });
}

// =============================================================================
// 3. UPDATE: Ciclo de movimiento, salto y animaciones a 60 FPS
// =============================================================================
function update() {
  const VELOCIDAD = 260;
  const FUERZA_SALTO = -380;

  // Estados de piso (tocando el límite inferior del lienzo de 800x600 o plataforma)
  const p1EnPiso = jugador1.body.blocked.down || jugador1.body.touching.down;
  const p2EnPiso = jugador2.body.blocked.down || jugador2.body.touching.down;

  // -------------------------------------------------------------
  // MOVIMIENTO Y SALTO JUGADOR 1 (WASD)
  // -------------------------------------------------------------
  if (keysP1.left.isDown) {
    jugador1.setVelocityX(-VELOCIDAD);
    jugador1.setFlipX(true);
  } else if (keysP1.right.isDown) {
    jugador1.setVelocityX(VELOCIDAD);
    jugador1.setFlipX(false);
  } else {
    jugador1.setVelocityX(0);
  }

  // Salto condicionado a estar en el piso
  if (keysP1.up.isDown && p1EnPiso) {
    jugador1.setVelocityY(FUERZA_SALTO);
  }

  // Gestión de animación P1
  if (!isP1Attacking) {
    if (!p1EnPiso) {
      jugador1.play('eloy_jump', true);
    } else {
      jugador1.play('eloy_idle', true);
    }
  }

  // -------------------------------------------------------------
  // MOVIMIENTO Y SALTO JUGADOR 2 (FLECHAS)
  // -------------------------------------------------------------
  if (cursorsP2.left.isDown) {
    jugador2.setVelocityX(-VELOCIDAD);
    jugador2.setFlipX(false);
  } else if (cursorsP2.right.isDown) {
    jugador2.setVelocityX(VELOCIDAD);
    jugador2.setFlipX(true);
  } else {
    jugador2.setVelocityX(0);
  }

  // Salto condicionado a estar en el piso
  if (cursorsP2.up.isDown && p2EnPiso) {
    jugador2.setVelocityY(FUERZA_SALTO);
  }

  // Gestión de animación P2
  if (!isP2Attacking) {
    if (!p2EnPiso) {
      jugador2.play('manuela_jump', true);
    } else {
      jugador2.play('manuela_idle', true);
    }
  }
}

// =============================================================================
// FUNCIONES AUXILIARES: HUD y Combate
// =============================================================================
function crearHUD(scene) {
  // Fondo superior oscurecido para el HUD
  const hudBg = scene.add.graphics();
  hudBg.fillStyle(0x000000, 0.45);
  hudBg.fillRect(0, 0, 800, 65);

  // --- Barra Jugador 1 ---
  scene.add.text(40, 12, 'ELOY ALFARO', {
    fontFamily: 'system-ui, sans-serif',
    fontSize: '15px',
    fontWeight: 'bold',
    color: '#38bdf8'
  });

  const p1BarBg = scene.add.graphics();
  p1BarBg.fillStyle(0x334155, 1);
  p1BarBg.fillRect(40, 34, 300, 16);

  p1HealthBar = scene.add.graphics();
  actualizarBarra(p1HealthBar, 40, 34, p1Health, 0x38bdf8, false);

  // --- Timer central retro ---
  const timerText = scene.add.text(400, 24, '99', {
    fontFamily: 'monospace',
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#fbbf24'
  }).setOrigin(0.5);

  let timeLeft = 99;
  scene.time.addEvent({
    delay: 1000,
    repeat: 98,
    callback: () => {
      timeLeft--;
      timerText.setText(timeLeft < 10 ? '0' + timeLeft : '' + timeLeft);
    }
  });

  // --- Barra Jugador 2 ---
  scene.add.text(760, 12, 'MANUELA CAÑIZARES', {
    fontFamily: 'system-ui, sans-serif',
    fontSize: '15px',
    fontWeight: 'bold',
    color: '#f87171'
  }).setOrigin(1, 0);

  const p2BarBg = scene.add.graphics();
  p2BarBg.fillStyle(0x334155, 1);
  p2BarBg.fillRect(460, 34, 300, 16);

  p2HealthBar = scene.add.graphics();
  actualizarBarra(p2HealthBar, 460, 34, p2Health, 0xf87171, true);
}

function actualizarBarra(graphics, x, y, health, color, flipFromRight) {
  graphics.clear();
  graphics.fillStyle(color, 1);
  const width = Math.max(0, (health / 100) * 300);
  if (flipFromRight) {
    graphics.fillRect(x + (300 - width), y, width, 16);
  } else {
    graphics.fillRect(x, y, width, 16);
  }
}

function verificarGolpe(scene, atacante, defensor, jugadorAtacante) {
  const distancia = Phaser.Math.Distance.Between(atacante.x, atacante.y, defensor.x, defensor.y);

  // Si están en rango de ataque cuerpo a cuerpo
  if (distancia < 150) {
    // Empuje hacia atrás al recibir impacto
    const direccion = atacante.x < defensor.x ? 1 : -1;
    defensor.setVelocityX(direccion * 220);
    defensor.setTint(0xff5555);

    // Destello de chispas de impacto arcade
    const spark = scene.add.circle((atacante.x + defensor.x) / 2, atacante.y - 10, 18, 0xffeb3b, 0.9);
    scene.tweens.add({
      targets: spark,
      scale: 2,
      alpha: 0,
      duration: 180,
      onComplete: () => spark.destroy()
    });

    scene.time.delayedCall(120, () => {
      defensor.clearTint();
    });

    // Descontar vida
    if (jugadorAtacante === 1) {
      p2Health = Math.max(0, p2Health - 8);
      actualizarBarra(p2HealthBar, 460, 34, p2Health, 0xf87171, true);
    } else {
      p1Health = Math.max(0, p1Health - 8);
      actualizarBarra(p1HealthBar, 40, 34, p1Health, 0x38bdf8, false);
    }
  }
}
