import { getRandomInteger, getRandomFloat } from '../rando/mod.ts';

export class SnowfallScene {
  #container: HTMLElement;
  #lastTime: number | undefined;

  constructor(container: HTMLElement) {
    this.#container = container;
  }

  start() {
    this.#container.appendChild(this.#createSnowflakes(2000));
    globalThis.requestAnimationFrame((timestamp) => this.#tick(timestamp));
  }

  #tick(timestamp: number) {
    if (this.#lastTime === undefined) {
      this.#lastTime = timestamp;
    }
    const delta = timestamp - this.#lastTime;

    if (delta > 2000) {
      this.#lastTime = timestamp;
      this.#container.appendChild(this.#createSnowflakes(500));
    }

    globalThis.requestAnimationFrame((timestamp) => this.#tick(timestamp));
  }

  #createSnowflakes(num: number): DocumentFragment {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < num; i++) {
      const snowflake = this.#createSnowflake();
      fragment.appendChild(snowflake);

      snowflake.addEventListener('animationend', () => {
        globalThis.setTimeout(
          () => snowflake.remove(),
          getRandomInteger(100, 5000)
        );
      });
    }

    return fragment;
  }

  #createSnowflake(): HTMLElement {
    const containerHeight = this.#container.clientHeight;
    const containerWidth = this.#container.clientWidth;

    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '❄️';

    const left = getRandomFloat(0, 100);
    const size = getRandomFloat(5, 20);
    const fallDuration = 20 - size / 2 + getRandomFloat(-2, 2);
    const delay = getRandomFloat(0, 10);
    const sway1 = getRandomFloat(-0.02, 0.02);
    const sway2 = getRandomFloat(-0.02, 0.02);
    const rotation1 = getRandomFloat(-90, 90);
    const rotation2 = getRandomFloat(-90, 90);
    const depth = getRandomInteger(-10, 10);

    snowflake.style.left = `${left}%`;

    snowflake.style.setProperty('--container-height', `${containerHeight}px`);
    snowflake.style.setProperty('--container-width', `${containerWidth}px`);
    snowflake.style.setProperty('--depth', `${depth}px`);
    snowflake.style.setProperty('--size', `${size}px`);
    snowflake.style.setProperty('--fall-duration', `${fallDuration}s`);
    snowflake.style.setProperty('--fall-delay', `${delay}s`);
    snowflake.style.setProperty('--sway1', `${sway1}`);
    snowflake.style.setProperty('--sway2', `${sway2}`);
    snowflake.style.setProperty('--rotation1', `${rotation1}deg`);
    snowflake.style.setProperty('--rotation2', `${rotation2}deg`);

    return snowflake;
  }
}
