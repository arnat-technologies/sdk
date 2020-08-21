import randomFloat from './number-randomFloat';

describe('Generate a random floating point number in given range', function () {
  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.2);
  });

  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
  });

  it('generate', function () {
    expect(randomFloat(1, 2)).toBe(1.2);
  });
});
