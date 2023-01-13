import butterchurn from "butterchurn";
import butterchurnPresets from "butterchurn-presets";

const presets = butterchurnPresets.getPresets();
let pausePreset = presets["martin - chain breaker"];

class AudioViz {
  visualizer;
  #audioCtx;
  #audioNode;
  paused = true;

  pause() {
    if (this.paused) return;
    this.audioEl.pause();
    this.visualizer.loadPreset(pausePreset, 1.5);
  }

  play() {
    this.audioEl.play();
    this.nextPreset();
    if (this.paused) {
      this.paused = false;
    }
  }

  nextPreset() {
    this.visualizer.loadPreset(selectRandomPreset(), 1.5);
  }

  updateRendererSize() {
    this.visualizer.setRendererSize(window.innerWidth, window.innerHeight);
  }

  constructor() {
    this.audioEl = playSong();
    [this.#audioCtx, this.#audioNode] = createAudioContext(this.audioEl);
    this.visualizer = setupAudioVisualizer(this.#audioCtx, this.#audioNode);

    console.log(this.visualizer);

    window.visualizer = this.visualizer;
    window.addEventListener("resize", debounce(this.updateRendererSize));
    window.addEventListener("click", () => {
      if (this.paused) return;
      // check if context is in suspended state (autoplay policy)
      if (this.#audioCtx.state === "suspended") this.#audioCtx.resume();
      this.audioEl.play();
    });

    connectToAudioAnalyzer(this.visualizer, this.#audioCtx, this.#audioNode);
  }
}

export const audioViz = new AudioViz();
window.audioViz = audioViz;

function debounce(func) {
  let timer;
  return function (event) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(func, 100, event);
  };
}

function playSong(song = "/assets/sound/lounge.ogg") {
  let audioEl = document.querySelector("#music");

  try {
    audioEl.volume = 0.1;
    audioEl.loop = true;
    audioEl.src = song;
    // audioEl.play();
  } catch (_) {}

  return audioEl;
}

function createAudioContext(audioEl) {
  const audioCtx = new AudioContext();
  const node = audioCtx.createMediaElementSource(audioEl);
  node.connect(audioCtx.destination);
  return [audioCtx, node];
}

function setupAudioVisualizer(audioCtx) {
  const canvas = document.querySelector("#background");

  const visualizer = butterchurn.createVisualizer(audioCtx, canvas, {
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const preset = pausePreset;

  visualizer.loadPreset(preset, 0.0);
  window.requestAnimationFrame(loop);

  function loop() {
    visualizer.render();
    window.requestAnimationFrame(loop);
  }

  return visualizer;
}

function connectToAudioAnalyzer(visualizer, audioCtx, sourceNode) {
  const gainNode = audioCtx.createGain();
  gainNode.gain.value = 4;
  sourceNode.connect(gainNode);

  const analyzer = audioCtx.createAnalyser();
  analyzer.fftSize = 2048;
  gainNode.connect(analyzer);

  visualizer.connectAudio(analyzer);
}

function selectRandomPreset() {
  // const keys = Object.keys(presets);
  const keys = [
    // great
    "$$$ Royal - Mashup (197)", // a bit flashy

    "martin - mandelbox explorer - high speed demo version",
    "Flexi - mindblob mix",
    "martin + flexi - diamond cutter [prismaticvortex.com] - camille - i wish i wish i wish i was constrained",
    "Phat+fiShbRaiN+Eo.S_Mandala_Chasers_remix",
    "Martin - acid wiring",
    "Flexi, martin + geiss - dedicated to the sherwin maxawow",
    "Aderrasi - Potion of Spirits",
    "flexi + amandio c - organic12-3d-2.milk",
    "Flexi + stahlregen - jelly showoff parade",
    "martin - castle in the air",
    "suksma - heretical crosscut playpen",
    "Flexi - predator-prey-spirals",
    "Fumbling_Foo & Flexi, Martin, Orb, Unchained - Star Nova v7b",
    "martin - another kind of groove",
  ];

  const randomKey = Math.floor(Math.random() * keys.length);
  const key = keys[randomKey];
  console.log(key);
  const preset = presets[key];
  return preset;
}
