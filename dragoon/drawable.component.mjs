import { Component } from './component.mjs';

export class DrawableComponent extends Component {
    constructor() {
        super();
    }

    get element() {
        return document.createElement('div');
    }
}