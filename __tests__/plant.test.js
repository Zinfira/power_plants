import { feed, blueFood, hydrate, giveLight, greenFood, yuckyFood, changeState, plant, stateChanger } from './../src/plant.js';

describe('feed', () => {
  test('should increment a plant soil by 1', () => {
    const plant = {};
    const newPlant = feed(1)(plant);
    expect(newPlant.soil).toEqual(1);
  });
});

describe('blueFood', () => {
  test('should increment a plant soil by 5', () => {
    const plant = {};
    const newPlant = blueFood(plant);
    expect(newPlant.soil).toEqual(5);
  });
});

describe('hydrate', () => {
  test('should increment a plant water by 1', () => {
    const plant = {};
    const newPlant = hydrate(1)(plant);
    expect(newPlant.water).toEqual(1);
  });
});

describe('giveLight', () => {
  test('should increment a plant light by 1', () => {
    const plant = {};
    const newPlant = giveLight(1)(plant);
    expect(newPlant.light).toEqual(1);
  });
});

describe('stateChanger', () => {
  test('should change state by a specified function', () => {
    const fedPlant = stateChanger(greenFood);
    expect(fedPlant.soil).toBe(10);
  });
});