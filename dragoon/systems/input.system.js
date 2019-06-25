import { EventSystem } from './event.system.js';

export class InputSystem {
    static registerInputEvents() {
        window.onresize = () => {
            EventSystem.triggerEvent('viewresize');
        };
    }
}