import { EventSystem } from './systems/event.system.js.js';

export class App {
    constructor(context, name = 'App') {
        this._context = context;
        this.name = name;
    }

    get context() {
        return this._context;
    }

    set context(value) {
        this._context = value;
        EventSystem.triggerEvent('contextchange');
    }
}