import { FaceDetector } from "@mediapipe/tasks-vision";
/** @class Application */
export declare class Application {
    lastVideoTime: number;
    video?: HTMLVideoElement;
    faceDetector?: FaceDetector;
    constructor();
    run(): Promise<void>;
    renderLoop(): void;
}
