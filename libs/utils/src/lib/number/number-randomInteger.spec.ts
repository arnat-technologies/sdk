import randomInteger from './number-randomInteger';

describe('Generate a random Integer in given range', function () {
  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.2);
  });

  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
  });

  it('generating a number', function () {
    expect(randomInteger(1, 5)).toBe(2);
  });
});
