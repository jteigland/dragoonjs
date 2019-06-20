import { DrawableComponent } from './components/drawable.component.mjs';
import { TransformComponent } from './components/transform.component.mjs';
import { Entity } from './entity.mjs';

export class RenderSystem {
    static render(context) {
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
        const pixelUnit = viewWidth / context.activeScene.gridWidth;
        console.log(pixelUnit);
        const element = drawable.element;
        element.style.left = viewWidth / 2 + (transform.position.x - (transform.dimension.width / 2)) * pixelUnit;
        element.style.top = viewHeight / 2 + (transform.position.y - (transform.dimension.height / 2)) * pixelUnit;
        element.style.width = transform.dimension.width * pixelUnit;
        element.style.height = transform.dimension.height * pixelUnit;
        context.viewFrame.appendChild(element);
    }
}