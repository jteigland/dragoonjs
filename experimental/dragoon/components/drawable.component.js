import { Component } from './component.js.js';

export class DrawableComponent extends Component {
    constructor() {
        super();
    }

    get element() {
        return document.createElement('div');
    }
}