import { Scene } from './scene.mjs';

export class Context {
    constructor(viewFrame, activeScene = Scene.emptyScene) {
        this.viewFrame = viewFrame;
        this.activeScene = activeScene;
    }
}