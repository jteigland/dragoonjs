import { DrawableComponent } from './drawable.component.js';
import { ElementHelper } from '../helpers/element.helper.js';
import { Entity } from '../entity.js';
import { TextComponent } from './text.component.js';

export class HeadingComponent extends DrawableComponent {
    constructor(headingType = 'h1') {
        super();
        this._onAttach = () => {
            this._textComponent = Entity.getComponent(TextComponent, this._entity); //TODO: Allow components to Require dependent components
        }
        this._headingType = headingType;
    }

    get element() {
        const e = document.createElement(this._headingType);
        e.innerHTML = this._textComponent.text;
        ElementHelper.addStyles(e, this._textComponent.fontOptions);
        return e;
    }
}