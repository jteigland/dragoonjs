import Dragoon from '../dragoon.js';

export class EventSystem {
    static addEvent(event, handler) {
        Dragoon.handlers[event] = handler;
    }

    static triggerEvent(event) {
        Dragoon.handlers[event]();
    }
}