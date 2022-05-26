import barba from "https://cdn.skypack.dev/@barba/core@v2.9.7";
import butterchurn from "https://cdn.skypack.dev/butterchurn@v2.6.7";
import butterchurnPresets from "https://cdn.skypack.dev/butterchurn-presets@v2.4.7";

barba.init({});

const audioEl = playSong();
const [audioCtx, audioNode] = createAudioContext(audioEl);
const visualizer = setupAudioVisualizer(audioCtx, audioNode);
connectToAudioAnalyzer(visualizer, audioCtx, audioNode);

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

  const presets = butterchurnPresets.getPresets();
  const preset =
    presets[
      Object.keys(presets)[
        Math.floor(Math.random() * Object.keys(presets).length)
      ]
    ];

  console.log(
    Object.keys(presets)[
      Math.floor(Math.random() * Object.keys(presets).length)
    ]
  );

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
  const biquadFilter = audioCtx.createBiquadFilter();
  gainNode.gain.value = 2;
  sourceNode.connect(gainNode);
  gainNode.connect(biquadFilter);

  visualizer.connectAudio(biquadFilter);
}
