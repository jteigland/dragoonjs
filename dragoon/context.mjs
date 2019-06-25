import { Scene } from './scene.mjs';
import { EventSystem } from './systems/event.system.mjs';

export class Context {
    constructor(viewFrame, activeScene = Scene.emptyScene) {
        this.viewFrame = viewFrame;
        this._activeScene = activeScene;
    }

    get activeScene() {
        return this._activeScene;
    }

    set activeScene(value) {
        this._activeScene = value;
        EventSystem.triggerEvent('contextchange');
    }
}