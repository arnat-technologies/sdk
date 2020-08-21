import randomItem from './array-randomItem';

describe('Test with random usage', () => {
  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.2);
  });

  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
  });

  it('assigns random the values that we want to mock in order', () => {
    expect(randomItem([5, 3, 6, 9, 1])).toBe(3);
  });
});
