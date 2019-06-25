import { DrawableComponent } from './drawable.component.js';
import { EventSystem } from '../systems/event.system.js';

export class TextComponent extends DrawableComponent {
    constructor(text) {
        super();
        this._text = text;
    }

    get element() {
        const e = document.createElement('span');
        e.innerHTML = this.text;
        return e;
    }

    get text() {
        return this._text;
    }

    set text(value) {
        this._text = value;
        EventSystem.triggerEvent('contextchange');
    }
}