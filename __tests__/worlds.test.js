import { Solar } from '../src/planets';

describe('Mercury', () => {

  let mercury;

  beforeEach(() => {
    mercury = new Solar(43);

    mercury.mercuryYears();
  })

  test('mercurian age calculated for my age, see above', () => {
    expect(mercury.age).toEqual(179.17);
  })

  test('mercurian life expectancy', () => {
    expect(mercury.lifeSpan).toEqual(341.67);
  })

  test('mercurian years remaining 162.50', () => {
    expect(mercury.death).toEqual(162.5);
  })

});

describe('Venus', () => {

  let venus;

  beforeEach(() => {
    venus = new Solar(43);

    venus.venusYears();
  })

  test('venusian age', () => {
    expect(venus.age).toEqual(69.35);
  })

  test('lifespan', () => {
    expect(venus.lifeSpan).toEqual(132.26);
  })

  test('venusian years remaining', () => {
    expect(venus.death).toEqual(62.91);
  })

});

describe('Mars', () => {

  let mars;

  beforeEach(() => {
    mars = new Solar(43);

    mars.marsYears();
  })

  test('martian age', () => {
    expect(mars.age).toEqual(22.87);
  })

  test('lifespan', () => {
    expect(mars.lifeSpan).toEqual(43.62);
  })

  test('remaining years, 20.75', () => {
    expect(mars.death).toEqual(20.75);
  })

});

describe('Jupiter', () => {

  let jupiter;

  beforeEach(() => {
    jupiter = new Solar(43);

    jupiter.jupiterYears();
  })

  test('jupiterian age', () => {
    expect(jupiter.age).toEqual(3.63);
  })

  test('lifespan', () => {
    expect(jupiter.lifeSpan).toEqual(6.91);
  })

  test('remaining years, 3.28', () => {
    expect(jupiter.death).toEqual(3.28);
  })

});