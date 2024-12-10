import { SnowfallScene } from '../../../../../../packages/snowfall/mod.ts';

const container = document.getElementsByTagName('body')[0];

const scene = new SnowfallScene(container);
scene.start();
