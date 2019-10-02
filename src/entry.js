import { Context } from '../dragoon/context.js';
import { AppSystem } from '../dragoon/systems/app.system.js';
import { Scene, ViewConstraints } from '../dragoon/scene.js';
import { Entity } from '../dragoon/entity.js';
import { TransformComponent, Position, Dimension } from '../dragoon/components/transform.component.js';
import { TextComponent, FontOptions } from '../dragoon/components/text.component.js';
import { App } from '../dragoon/app.js';

const frame = document.getElementById('main-view');

const mainScene = new Scene([
    new Entity(1, [
        new TransformComponent(new Position(0, 0), new Dimension(20, 12)),
        new TextComponent('Hello World.', new FontOptions({ size: '18pt', align: 'center' }))
    ])
], 200, new ViewConstraints(0, 0, 0, 0));

const app = new App(new Context(frame, mainScene));
AppSystem.start(app);