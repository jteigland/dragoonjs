import { App } from './app.js.js';
import { RenderSystem } from './systems/render.system.js.js';
import { Scene } from './scene.js.js';
import { EventSystem } from './systems/event.system.js.js';

class Dragoon {
    constructor() {
        this.app = new App();
        this.handlers = {
            'viewresize': () => {
                RenderSystem.render(this.app);
            },
            'contextchange': () => {
                RenderSystem.render(this.app);
            },
            'mousewheel': (wheelEvent) => {
                const scrollX = wheelEvent.deltaX / RenderSystem.screenXUnit(this.app.context);
                const scrollY = wheelEvent.deltaY / RenderSystem.screenYUnit(this.app.context);
                Scene.scrollScene(this.app.context.activeScene, scrollX, scrollY);
                EventSystem.triggerEvent('viewmove');
            },
            'viewmove': () => {
                RenderSystem.render(this.app);
            }
        }
    }
}
export default (new Dragoon);