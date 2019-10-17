export class Scene {
    constructor(entities = [], gridSize = 200, viewConstraints = new ViewConstraints(0, 0, 0, 0), viewOffsetX = 0, viewOffsetY = 0) {
        this.entities = entities;
        this.gridSize = gridSize;
        this.viewConstraints = viewConstraints;
        this.viewOffsetX = viewOffsetX;
        this.viewOffsetY = viewOffsetY;
    }

    static get emptyScene() { return new Scene([]); }

    static getEntityById(id, scene) {
        return scene.entities.find(e => e.id == id);
    }

    static scrollScene(scene, scrollX, scrollY) {
        scene.viewOffsetX -= scrollX;
        if (scene.viewOffsetX < scene.viewConstraints.lowerX) scene.viewOffsetX = scene.viewConstraints.lowerX;
        if (scene.viewOffsetX > scene.viewConstraints.upperX) scene.viewOffsetX = scene.viewConstraints.upperX;
        scene.viewOffsetY -= scrollY;
        if (scene.viewOffsetY < scene.viewConstraints.lowerY) scene.viewOffsetY = scene.viewConstraints.lowerY;
        if (scene.viewOffsetY > scene.viewConstraints.upperY) scene.viewOffsetY = scene.viewConstraints.upperY;
    }
}

export class ViewConstraints {
    constructor(lowerX, upperX, lowerY, upperY) {
        this.lowerX = lowerX;
        this.upperX = upperX;
        this.lowerY = lowerY;
        this.upperY = upperY;
    }
}