import { getRandomInteger, getRandomFloat } from '../rando/mod.ts';

export class SnowfallScene {
  #rootElement: HTMLElement;
  #lastTime: number | undefined;

  constructor(container: HTMLElement) {
    this.#rootElement = this.#createRootElement(container.ownerDocument);
    container.appendChild(this.#rootElement);
  }

  start() {
    this.#rootElement.appendChild(this.#createSnowflakes(2000));
    globalThis.requestAnimationFrame((timestamp) => this.#tick(timestamp));
  }

  #createRootElementStyle(doc: Document): HTMLStyleElement {
    const style = doc.createElement('style');
    style.textContent = `
      .mg5dev-snowfall-scene {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        background-color: white;
      }

      .mg5dev-snowfall-scene .snowflake {
        position: absolute;
        top: -20px;
      
        opacity: 0.5;

        font-size: var(--size);
        z-index: var(--size);

        animation: linear 1 forwards fall;
        animation-duration: var(--fall-duration);
        animation-delay: var(--fall-delay);

        will-change: transform;

        pointer-events: none;
        user-select: none;
      }

      @keyframes fall {
        0% {
          transform:
            translateY(0)
            translateX(0);
        }
        25% {
          transform:
            translateY(calc(var(--container-height) * 0.25))
            translateX(calc(var(--container-width) * var(--sway1)))
            rotate(var(--rotation1));
        }
        75% {
          transform:
            translateY(calc(var(--container-height) * 0.75))
            translateX(calc(var(--container-width) * var(--sway2)))
            rotate(var(--rotation2));
        }
        100% {
          transform:
            translateY(calc(var(--container-height) - var(--depth)))
            translateX(0);
        }
      }
    `;
    return style;
  }

  #createRootElement(doc: Document): HTMLElement {
    const rootElement = doc.createElement('div');

    rootElement.classList.add('mg5dev-snowfall-scene');
    rootElement.appendChild(this.#createRootElementStyle(doc));

    return rootElement;
  }

  #tick(timestamp: number) {
    if (this.#lastTime === undefined) {
      this.#lastTime = timestamp;
    }
    const delta = timestamp - this.#lastTime;

    if (delta > 2000) {
      this.#lastTime = timestamp;
      this.#rootElement.appendChild(this.#createSnowflakes(500));
    }

    globalThis.requestAnimationFrame((timestamp) => this.#tick(timestamp));
  }

  #createSnowflakes(num: number): DocumentFragment {
    const fragment = this.#rootElement.ownerDocument.createDocumentFragment();

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
    const containerHeight = this.#rootElement.clientHeight;
    const containerWidth = this.#rootElement.clientWidth;

    const snowflake = this.#rootElement.ownerDocument.createElement('div');
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
