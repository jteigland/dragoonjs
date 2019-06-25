import { App } from './app.mjs';
import { RenderSystem } from './systems/render.system.mjs';

class Dragoon {
    constructor() {
        this.app = new App();
        this.handlers = {
            'viewresize': () => {
                RenderSystem.render(this.app);
            },
            'contextchange': () => {
                RenderSystem.render(this.app);
            }
        }
    }
}
export default (new Dragoon);