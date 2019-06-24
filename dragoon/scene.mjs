export class Scene {
    constructor(entities = [], gridSize = 200) {
        this.entities = entities;
        this.gridSize = gridSize;
    }

    static get emptyScene() { return new Scene([]); }

    static getEntityById(id) {
        return this.entities.find(e => e.id == id);
    }
}