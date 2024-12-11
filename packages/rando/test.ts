import { expect } from 'jsr:@std/expect';

import { getRandomInteger, getRandomFloat } from './mod.ts';

Deno.test(
  'getRandomInteger(1, 10) should return a random integer between 1 and 10',
  () => {
    const randomInteger = getRandomInteger(1, 10);

    expect(randomInteger).toBeGreaterThanOrEqual(1);
    expect(randomInteger).toBeLessThanOrEqual(10);
  }
);

Deno.test(
  'getRandomFloat(1, 10) should return a random float between 1 and 10',
  () => {
    const randomFloat = getRandomFloat(1, 10);

    expect(randomFloat).toBeGreaterThanOrEqual(1);
    expect(randomFloat).toBeLessThanOrEqual(10);
  }
);

Deno.test(
  'getRandomFloat(1, 10, 4) should return a random float between 1 and 10 with 4 decimal places',
  () => {
    const randomFloat = getRandomFloat(1, 10, 4);

    expect(randomFloat).toBeGreaterThanOrEqual(1);
    expect(randomFloat).toBeLessThanOrEqual(10);
    expect(randomFloat.toString().split('.')[1].length).toEqual(4);
  }
);
