import Dragoon from '../dragoon.js.js';

export class EventSystem {
    static addEvent(event, handler) {
        Dragoon.handlers[event] = handler;
    }

    static triggerEvent(event, value) {
        Dragoon.handlers[event](value);
    }
}