import { DrawableComponent } from './drawable.component.mjs';
import { Entity } from './entity.mjs';

export class RenderSystem {
    static render(context) {
        context.viewFrame.innerHTML = '';
        context.activeScene.entities.forEach(e => {
            const drawable = Entity.getComponent(DrawableComponent, e);
            if (typeof (drawable) !== 'undefined') RenderSystem.draw(drawable, context.viewFrame);
        });
    }

    static draw(drawable, frame) {
        //TODO: position element based on internal grid system
        frame.appendChild(drawable.element);
    }
}