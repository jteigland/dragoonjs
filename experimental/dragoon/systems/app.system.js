import { RenderSystem } from './render.system.js';
import Dragoon from '../dragoon.js';
import { InputSystem } from './input.system.js';

export class AppSystem {
    static start(app) {
        Dragoon.app = app;
        InputSystem.registerInputEvents();
        RenderSystem.render(app);
    }

    static get app() {
        return Dragoon.app;
    }
}