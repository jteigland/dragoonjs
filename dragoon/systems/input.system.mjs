import { EventSystem } from './event.system.mjs';

export class InputSystem {
    static registerInputEvents() {
        window.onresize = () => {
            EventSystem.triggerEvent('viewresize');
        };
    }
}