import { Component } from './component.js';
import { EventSystem } from '../systems/event.system.js';

export class TextComponent extends Component {
    constructor(text, fontOptions) {
        super();
        this._text = text;
        this._fontOptions = fontOptions;
    }

    get text() {
        return this._text;
    }

    set text(value) {
        this._text = value;
        EventSystem.triggerEvent('contextchange');
    }

    get fontOptions() {
        return this._fontOptions;
    }

    set fontOptions(value) {
        this._fontOptions = value;
        EventSystem.triggerEvent('contextchange');
    }
}

export class FontOptions {
    constructor({
        size = '',
        align = '',
        family = '',
        style = '',
        weight = '',
        variant = '',
        decoration = '',
        indent = '',
        letterSpacing = '',
        wordSpacing = '',
        lineHeight = '',
        direction = '',
        transform = '',
        color = '',
        shadow = ''
    } = {}) {
        this.fontSize = size;
        this.textAlign = align;
        this.fontFamily = family;
        this.fontStyle = style;
        this.fontWeight = weight;
        this.fontVariant = variant;
        this.textDecoration = decoration;
        this.textIndent = indent;
        this.letterSpacing = letterSpacing;
        this.wordSpacing = wordSpacing;
        this.lineHeight = lineHeight;
        this.textDirection = direction;
        this.textTransform = transform;
        this.color = color;
        this.textShadow = shadow;
        Object.freeze(this);
    }
}