import { DrawableComponent } from '../components/drawable.component.js';
import { TransformComponent } from '../components/transform.component.js';
import { Entity } from '../entity.js';

export class RenderSystem {
    static render(app) {
        const context = app.context;
        context.viewFrame.innerHTML = '';
        context.activeScene.entities.forEach(e => {
            const transform = Entity.getComponent(TransformComponent, e);
            const drawable = Entity.getComponent(DrawableComponent, e);
            if (typeof transform !== 'undefined' && typeof drawable !== 'undefined') RenderSystem.draw(transform, drawable, context);
        });
    }

    static draw(transform, drawable, context) {
        const viewWidth = context.viewFrame.offsetWidth;
        const viewHeight = context.viewFrame.offsetHeight;
        const screenXUnit = this.screenXUnit(context);
        const screenYUnit = this.screenYUnit(context);
        const screenOffsetX = context.activeScene.viewOffsetX * screenXUnit;
        const screenOffsetY = context.activeScene.viewOffsetY * screenYUnit;
        console.log(screenOffsetY);
        const element = drawable.element;
        element.style.left = viewWidth / 2 + (transform.position.x - (transform.dimension.width / 2)) * screenXUnit + screenOffsetX;
        element.style.bottom = viewHeight / 2 + (transform.position.y - (transform.dimension.height / 2)) * screenYUnit - screenOffsetY;
        element.style.width = transform.dimension.width * screenXUnit;
        element.style.height = transform.dimension.height * screenYUnit;
        context.viewFrame.appendChild(element);
    }

    static screenXUnit(context) {
        return context.viewFrame.offsetWidth / context.activeScene.gridSize;
    }

    static screenYUnit(context) {
        return context.viewFrame.offsetHeight / context.activeScene.gridSize;
    }
}