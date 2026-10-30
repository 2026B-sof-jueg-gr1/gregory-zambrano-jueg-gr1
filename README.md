# Street Fighter II: Ecuador Edition 🇪🇨

**Autor:** Gregory Jhair Zambrano Paucar  
**Materia:** Juegos Interactivos - Grupo 1 (EPN)  
**Tecnología:** Phaser 3 (JavaScript nativo, Arcade Physics, Web Audio API)  
**Juega en línea (GitHub Pages):** [https://2026b-sof-jueg-gr1.github.io/gregory-zambrano-jueg-gr1/](https://2026b-sof-jueg-gr1.github.io/gregory-zambrano-jueg-gr1/)

---

## 🎮 Descripción del Juego

Videojuego de lucha en 2D al estilo clásico de **Street Fighter II: The World Warrior** (Capcom 16-bits), ambientado en la historia del Ecuador con próceres, revolucionarios y líderes indígenas nacionales. 

El juego cuenta con un flujo completo de dos escenas (`SelectScene` y `FightScene`):
1. **Pantalla de Selección (`SelectScene`):**
   - Rótulo retro 3D animado `PLAYER SELECT`.
   - **Mapa de Combate del Ecuador:** Silueta geográfica detallada (Costa, Sierra, Amazonía e Islas Galápagos), volcanes nevados en relieve 3D (Cayambe, Pichincha, Cotopaxi, Chimborazo, Tungurahua), ríos amazónicos (Napo, Pastaza), cuadrícula náutica con la Línea Ecuatorial (0° 00' 00"), y banderas tricolores animadas 🇪🇨 con balizas de radar sonar sobre la provincia natal del luchador seleccionado.
   - Retratos gigantes arcade de los combatientes (1P y 2P) con sus títulos, provincias y poderes especiales.
   - Cuadrícula central de 8 personajes (2 filas x 4 columnas) con medallas identificadoras y animaciones de selección.
2. **Combate en 2D (`FightScene`):**
   - Físicas Arcade con gravedad vertical en el eje Y configurada en 500 y colisión sólida entre ambos luchadores.
   - Poderes especiales únicos con proyectiles balísticos, efectos de partículas y empuje cinético.
   - Efectos arcade de impacto, destellos de chispas y *screen shake*.
   - **Animaciones de Victoria y Derrota estilo SF2:**
     - El derrotado cae derribado al piso con rotación dramática y sombreado gris.
     - El ganador salta al cielo con aura dorada resplandeciente y fanfarria triunfal de 4 notas.
   - **Pantalla de Resultados (`Results Screen`):** Muestra el retrato de gloria del vencedor (`WINS`), el retrato golpeado y vendado del derrotado (`DEFEAT` estilo *beaten face* de SF2), rótulo de `★ PERFECT! ★` si no recibió daño, y su frase histórica célebre.
   - Opción de revancha inmediata con la tecla <kbd>R</kbd> o retorno a la selección con <kbd>Espacio</kbd> / <kbd>Enter</kbd>.

---

## 🥊 Los 8 Contendientes Ecuatorianos

| # | Personaje | Título Histórico | Procedencia Geográfica | Poder Especial (Hadouken) |
| :-: | :--- | :--- | :--- | :--- |
| **1** | **Eloy Alfaro** | *El Viejo Luchador* | Montecristi, Manabí (Costa) | ⚡ **Corte Montonero** (Tajo creciente de machete eólico) |
| **2** | **Manuela Sáenz** | *La Libertadora* | Quito, Pichincha (Sierra) | ⚡ **Fuego Insurgente** (Esfera ígnea de cañón libertario) |
| **3** | **Rumiñahui** | *Cara de Piedra* | Píllaro, Tungurahua (Sierra) | ⚡ **Furia del Cotopaxi** (Roca volcánica de magma rodante) |
| **4** | **Eugenio Espejo** | *El Ilustrado Rebelde* | Quito, Pichincha (Sierra) | ⚡ **Rayo Ilustrado** (Chispa de plasma bioeléctrico) |
| **5** | **Atahualpa** | *Soberano del Tahuantinsuyo* | Caranqui, Imbabura (Sierra) | ⚡ **Ira del Sol (Inti)** (Disco solar sagrado con 8 rayos de oro) |
| **6** | **Tránsito Amaguaña** | *Fuerza del Páramo* | Cayambe, Pichincha (Sierra) | ⚡ **Fuerza Telúrica** (Onda de choque sísmica andina) |
| **7** | **Abdón Calderón** | *El Héroe Niño* | Cuenca, Azuay (Sierra) | ⚡ **Carga del Pichincha** (Estocada celeste de sable patriota) |
| **8** | **Matilde Hidalgo** | *Pionera del Derecho* | Loja, Loja (Sierra) | ⚡ **Centella Cívica** (Estrella estelar de justicia y razón) |

---

## 🕹️ Controles del Juego

### 1. Pantalla de Selección (`SelectScene`)
* **Jugador 1 (P1):**
  * <kbd>A</kbd> / <kbd>D</kbd>: Moverse entre columnas (izquierda / derecha).
  * <kbd>W</kbd> / <kbd>S</kbd>: Moverse entre filas (Fila 1 / Fila 2).
  * <kbd>Espacio</kbd> o <kbd>F</kbd>: Confirmar luchador.
* **Jugador 2 (P2):**
  * <kbd>←</kbd> / <kbd>→</kbd>: Moverse entre columnas.
  * <kbd>↑</kbd> / <kbd>↓</kbd>: Moverse entre filas.
  * <kbd>Enter</kbd> o <kbd>L</kbd>: Confirmar luchador.

### 2. Combate en Vivo (`FightScene`)
* **Jugador 1 (P1):**
  * <kbd>A</kbd> / <kbd>D</kbd>: Moverse a la izquierda / derecha.
  * <kbd>W</kbd>: Saltar.
  * <kbd>Espacio</kbd> o <kbd>F</kbd>: Golpe normal cuerpo a cuerpo.
  * <kbd>J</kbd>: **¡Poder Especial!** (Proyectil característico).
* **Jugador 2 (P2):**
  * <kbd>←</kbd> / <kbd>→</kbd>: Moverse a la izquierda / derecha.
  * <kbd>↑</kbd>: Saltar.
  * <kbd>Enter</kbd> o <kbd>L</kbd>: Golpe normal cuerpo a cuerpo.
  * <kbd>P</kbd>: **¡Poder Especial!** (Proyectil característico).
* **Generales:**
  * <kbd>R</kbd>: Revancha inmediata tras el combate.
  * <kbd>ESC</kbd>: Volver al menú de selección de personajes en cualquier momento.

---

## 📁 Estructura del Proyecto

```text
gregory-zambrano-jueg-gr1/
├── index.html                   # Redirección automática para GitHub Pages
├── README.md                    # Documentación y controles
└── street-fighter2/
    ├── index.html               # Vista principal del juego
    ├── game.js                  # Lógica completa de Phaser 3 (SelectScene + FightScene)
    └── assets/
        ├── stages/              # Fondos de combate (Plaza Grande, Ruinas de Ingapirca)
        ├── portraits/           # 8 retratos 16-bits, 8 iconos de cuadrícula y 8 caras de derrota
        └── fighters/            # 8 spritesheets transparentes de 4 fotogramas (250x250 c/u)
```
