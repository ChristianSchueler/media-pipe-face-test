// Google Media Pipe Face Detection Test using Typescript, (c) 2023 Christian Schüler, christianschueler.at

import { ScaleToFitWindow } from "./ScaleToFitWindow.js";
import { gsap } from "gsap";

/** @class Application */
export class Application {

  constructor() {
    console.log("Google Media Pipe Face Detection Test using Typescript, (c) 2023 Christian Schüler, christianschueler.at");

    //new ScaleToFitWindow("#screen");
  }

  async run(): Promise<void> {

    if (!('mediaDevices' in navigator)) return;
    if (!('getUserMedia' in navigator.mediaDevices)) return;

    console.log("media api: go");

    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        width: {
          min: 1280,
          ideal: 1920,
          max: 2560,
        },
        height: {
          min: 720,
          ideal: 1080,
          max: 1440
        },
        facingMode: 'user'
      }
    });

    console.log("camera activated", stream);

    const video = document.getElementById("video") as HTMLVideoElement;
    console.log(video);
    video.srcObject = stream;
  }
}

// go!
const app = new Application();
await app.run();