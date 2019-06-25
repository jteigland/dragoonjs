import { RenderSystem } from './render.system.mjs';
import Dragoon from '../dragoon.mjs';
import { InputSystem } from './input.system.mjs';

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