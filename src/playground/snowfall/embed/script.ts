const container = document.getElementsByTagName('body')[0];
const containerHeight = container.clientHeight;
const containerWidth = container.clientWidth;

function getRandomInteger(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomFloat(
  min: number,
  max: number,
  decimalPlaces: number = 2
): number {
  const randomFloat = Math.random() * (max - min) + min;
  return parseFloat(randomFloat.toFixed(decimalPlaces));
}

function createSnowflake(): HTMLElement {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.innerHTML = '❄️';

  const left = getRandomInteger(0, 100);
  const size = getRandomFloat(5, 20);
  const fallDuration = 20 - size / 2 + getRandomFloat(-2, 2);
  const delay = getRandomFloat(0, 10);
  const sway1 = getRandomFloat(-0.02, 0.02);
  const sway2 = getRandomFloat(-0.02, 0.02);

  snowflake.style.left = `${left}%`;

  snowflake.style.setProperty('--container-height', `${containerHeight}px`);
  snowflake.style.setProperty('--container-width', `${containerWidth}px`);
  snowflake.style.setProperty('--size', `${size}px`);
  snowflake.style.setProperty('--fall-duration', `${fallDuration}s`);
  snowflake.style.setProperty('--fall-delay', `${delay}s`);
  snowflake.style.setProperty('--sway1', `${sway1}`);
  snowflake.style.setProperty('--sway2', `${sway2}`);

  return snowflake;
}

function createSnowflakes(num: number): DocumentFragment {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < num; i++) {
    const snowflake = createSnowflake();
    fragment.appendChild(snowflake);

    snowflake.addEventListener('animationend', () => {
      snowflake.remove();
    });
  }

  return fragment;
}

let lastTime: number;

function tick(timestamp: number) {
  if (lastTime === undefined) {
    lastTime = timestamp;
  }
  const delta = timestamp - lastTime;

  if (delta > 2000) {
    lastTime = timestamp;
    container.appendChild(createSnowflakes(500));
  }

  globalThis.requestAnimationFrame(tick);
}

container.appendChild(createSnowflakes(2000));

globalThis.requestAnimationFrame(tick);