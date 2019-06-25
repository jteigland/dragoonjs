import { Component } from './component.js';

export class DrawableComponent extends Component {
    constructor() {
        super();
    }

    get element() {
        return document.createElement('div');
    }
}