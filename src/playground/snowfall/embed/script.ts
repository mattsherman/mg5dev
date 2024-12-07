const body = document.getElementsByTagName('body')[0];

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
  const size = getRandomFloat(18, 20);
  const fallDuration = getRandomFloat(9, 10);
  const delay = getRandomFloat(0, 1);

  snowflake.style.left = `${left}%`;

  snowflake.style.setProperty('--size', `${size}px`);
  snowflake.style.setProperty('--fall-duration', `${fallDuration}s`);
  snowflake.style.setProperty('--fall-delay', `${delay}s`);

  return snowflake;
}

function createSnowflakes(num: number): DocumentFragment {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < num; i++) {
    const snowflake = createSnowflake();
    fragment.appendChild(snowflake);
  }

  return fragment;
}

body.appendChild(createSnowflakes(500));
