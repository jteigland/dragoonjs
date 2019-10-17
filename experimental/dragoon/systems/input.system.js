import { EventSystem } from './event.system.js';

export class InputSystem {
    static registerInputEvents() {
        window.onresize = () => {
            EventSystem.triggerEvent('viewresize');
        };
        window.onmousewheel = ev => {
            EventSystem.triggerEvent('mousewheel', ev);
        };
    }
}