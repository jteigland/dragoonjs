import { Component } from './component.js';
import { EventSystem } from '../systems/event.system.js';

export class TransformComponent extends Component {
    constructor(position = new Position(0, 0), dimension = new Dimension(0, 0)) {
        super();
        this._position = position;
        this._dimension = dimension;
    }

    get position() {
        return this._position;
    }

    set position(value) {
        this._position = value;
        EventSystem.triggerEvent('contextchange');
    }

    get dimension() {
        return this._dimension;
    }

    set dimension(value) {
        this._dimension = value;
        EventSystem.triggerEvent('contextchange');
    }
}

export class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        Object.freeze(this);
    }
}

export class Dimension {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        Object.freeze(this);
    }
}