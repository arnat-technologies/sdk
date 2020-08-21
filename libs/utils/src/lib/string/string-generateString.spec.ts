import generateString from './string-generateString';

describe('test generateString with random usage', () => {
  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.2);
  });

  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
  });

  it('Generate a random string from given characters', function () {
    expect(
      generateString(
        10,
        '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
      )
    ).toBe('cccccccccc');
  });
});
