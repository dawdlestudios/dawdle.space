import barba from "@barba/core";
import { audioViz } from "./viz";

// https://peerjs.com

barba.init({
  transitions: [
    {

      name: "default-transition",

      prevent: ({ el }) => el.classList && el.classList.contains("prevent"),
    },
  ],
  views: [
    {
      namespace: "animated",
      afterEnter() {
        console.log("afterEnter animated");
      },
      beforeEnter() {
        console.log("entering animated");
        audioViz.play();
      },
      afterLeave(e) {
        console.log("afterLeave animated");
        if (e.next.namespace !== "animated") {
          audioViz.pause();
        }
      }
    },
    {
      namespace: "bookclub",
      beforeEnter() {
        import("./bookshelf").then(({ randomize }) => {
          randomize();
        });
      },
    },
  ],
});

