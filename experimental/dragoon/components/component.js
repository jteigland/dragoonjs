export class Component {
    constructor() {
        this._entity = null;
        this._onAttach = () => { };
    }

    set entity(value) {
        this._entity = value;
        this._onAttach();
    }
}