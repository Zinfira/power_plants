import { feed } from './../src/plant.js';

describe('feed', () => {
  test('should increment a plant soil by 1', () => {
    const plant = {};
    const newPlant = feed(1)(plant)
    expect(newPlant.soil).toEqual(1);
  });
});