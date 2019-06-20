export class Scene {
    constructor(entities = [], gridWidth = 200) {
        this.entities = entities;
        this.gridWidth = gridWidth;
    }

    static get emptyScene() { return new Scene([]); }

    static getEntityById(id) {
        return this.entities.find(e => e.id == id);
    }
}