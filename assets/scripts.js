import barba from "https://cdn.skypack.dev/@barba/core@2.9.7";

barba.init({});

let audio = document.createElement("audio");
audio.volume = 0.1;
audio.loop = true;
audio.src = "/assets/sound/lounge.ogg";
audio.autoplay = true;
document.body.appendChild(audio);

document.onclick = () => audio.play();
