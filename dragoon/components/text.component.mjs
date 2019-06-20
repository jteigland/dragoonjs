import { DrawableComponent } from './drawable.component.mjs';

export class TextComponent extends DrawableComponent {
    constructor(text) {
        super();
        this.text = text;
    }

    get element() {
        const e = document.createElement('span');
        e.innerHTML = this.text;
        return e;
    }
}