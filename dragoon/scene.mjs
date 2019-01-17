export class Scene {
    constructor(entities = []) {
        this.entities = entities;
    }

    static get emptyScene() { return new Scene([]); }

    static getEntityById(id) {
        return this.entities.find(e => e.id == id);
    }
}