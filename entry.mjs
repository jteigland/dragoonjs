import { Context } from './dragoon/context.mjs';
import { RenderSystem } from './dragoon/render.system.mjs';
import { Scene } from './dragoon/scene.mjs';
import { Entity } from './dragoon/entity.mjs';
import { TransformComponent, Position, Dimension } from './dragoon/components/transform.component.mjs';
import { TextComponent } from './dragoon/components/text.component.mjs';

const frame = document.getElementById('main-view');
const mainScene = new Scene([
    new Entity(1, [
        new TransformComponent(new Position(0, 0), new Dimension(11, 2.5)),
        new TextComponent('Hello World.')
    ])
]);
let appContext = new Context(frame, mainScene);
RenderSystem.render(appContext);
//TODO: detect changes to the context and re-render the scene