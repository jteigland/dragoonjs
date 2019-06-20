import { Component } from './component.mjs';

export class TransformComponent extends Component {
    constructor(position = new Position(0, 0), dimension = new Dimension(0, 0)) {
        super();
        this.position = position;
        this.dimension = dimension;
    }
}

export class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

export class Dimension {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}