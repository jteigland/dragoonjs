import Dragoon from '../dragoon.mjs';

export class EventSystem {
    static addEvent(event, handler) {
        Dragoon.handlers[event] = handler;
    }

    static triggerEvent(event) {
        Dragoon.handlers[event]();
    }
}