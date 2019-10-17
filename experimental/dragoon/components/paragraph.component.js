import { DrawableComponent } from './drawable.component.js';
import { ElementHelper } from '../helpers/element.helper.js';
import { Entity } from '../entity.js';
import { TextComponent } from './text.component.js';

export class ParagraphComponent extends DrawableComponent {
    constructor() {
        super();
        this._onAttach = () => {
            this._textComponent = Entity.getComponent(TextComponent, this._entity); //TODO: Allow components to Require dependent components
        }
    }

    get element() {
        const e = document.createElement('p');
        e.innerHTML = this._textComponent.text;
        ElementHelper.addStyles(e, this._textComponent.fontOptions);
        return e;
    }
}