import { Context } from './dragoon/context.mjs';
import { AppSystem } from './dragoon/systems/app.system.mjs';
import { Scene } from './dragoon/scene.mjs';
import { Entity } from './dragoon/entity.mjs';
import { TransformComponent, Position, Dimension } from './dragoon/components/transform.component.mjs';
import { TextComponent } from './dragoon/components/text.component.mjs';
import { App } from './dragoon/app.mjs';

const frame = document.getElementById('main-view');
const mainScene = new Scene([
    new Entity(1, [
        new TransformComponent(new Position(0, 0), new Dimension(11.5, 7.5)),
        new TextComponent('Hello World.')
    ])
]);
const app = new App(new Context(frame, mainScene));
AppSystem.start(app);