import barba from "https://cdn.skypack.dev/@barba/core@v2.9.7";
import butterchurn from "https://cdn.skypack.dev/butterchurn@v2.6.7";
import butterchurnPresets from "https://cdn.skypack.dev/butterchurn-presets@v2.4.7";

const audioEl = playSong();
const [audioCtx, audioNode] = createAudioContext(audioEl);
const visualizer = setupAudioVisualizer(audioCtx, audioNode);
connectToAudioAnalyzer(visualizer, audioCtx, audioNode);

// https://peerjs.com

barba.init({
  transitions: [
    {
      name: "default-transition",
      enter() {
        nextPreset(visualizer);
      },
    },
  ],
});

window.playSong = playSong;

window.addEventListener(
  "resize",
  debounce(() =>
    visualizer.setRendererSize(window.innerWidth, window.innerHeight)
  )
);

window.addEventListener("click", () => {
  // check if context is in suspended state (autoplay policy)
  if (audioCtx.state === "suspended") audioCtx.resume();
  audioEl.play();
});

function debounce(func) {
  var timer;
  return function (event) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(func, 100, event);
  };
}

function playSong(song = "/assets/sound/lounge.ogg") {
  let audioEl = document.querySelector("#music");
  audioEl.volume = 0.1;
  audioEl.loop = true;
  audioEl.src = song;
  audioEl.play();
  return audioEl;
}

function createAudioContext(audioEl) {
  const audioCtx = new AudioContext();
  const node = audioCtx.createMediaElementSource(audioEl);
  node.connect(audioCtx.destination);
  return [audioCtx, node];
}

function setupAudioVisualizer(audioCtx, audioNode) {
  const canvas = document.querySelector("#background");

  const visualizer = butterchurn.createVisualizer(audioCtx, canvas, {
    width: window.innerWidth,
    height: window.innerHeight,
  });
 
  const preset = selectRandomPreset();

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
  const presets = butterchurnPresets.getPresets();
  // const keys = Object.keys(presets);
  const keys = ["martin - mandelbox explorer - high speed demo version", "Flexi - mindblob mix", "martin + flexi - diamond cutter [prismaticvortex.com] - camille - i wish i wish i wish i was constrained", "Phat+fiShbRaiN+Eo.S_Mandala_Chasers_remix", "Martin - acid wiring", "Flexi, martin + geiss - dedicated to the sherwin maxawow", "Aderrasi - Potion of Spirits",  "flexi + amandio c - organic12-3d-2.milk", "Flexi + stahlregen - jelly showoff parade",  "martin - castle in the air", "$$$ Royal - Mashup (197)", "suksma - heretical crosscut playpen", "Flexi - predator-prey-spirals", "Fumbling_Foo & Flexi, Martin, Orb, Unchained - Star Nova v7b", "martin - another kind of groove"];
  const randomKey = Math.floor(Math.random() * keys.length);
  const key = keys[randomKey];
  const preset = presets[key];
  return preset;
}

function nextPreset(visualizer) {
  visualizer.loadPreset(selectRandomPreset(), 1.5);
}
