export class Entity {
    constructor(id = 0, components = []) {
        this.id = id;
        this.components = components;
        this.components.forEach(c => c.entity = this);
        Object.freeze(this);
    }

    static getComponent(componentType, entity) {
        return entity.components.find(c => c instanceof componentType);
    }
}