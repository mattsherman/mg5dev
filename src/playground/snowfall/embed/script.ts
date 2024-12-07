const body = document.getElementsByTagName('body')[0];

function getRandomInteger(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomFloat(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function createSnowflake(): HTMLElement {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.innerHTML = '❄️';

  const left = getRandomInteger(0, 100);
  const fallDuration = getRandomFloat(9, 10);

  snowflake.style.left = `${left}%`;

  snowflake.style.setProperty('--fall-duration', `${fallDuration}s`);

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
