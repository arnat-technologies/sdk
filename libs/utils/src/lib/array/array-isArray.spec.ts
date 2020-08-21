import isArray from './array-isArray';

it('return a boolean when a value is passed', function () {
  expect(isArray([])).toBeTruthy();
  expect(isArray({})).toBeFalsy();
  expect(isArray('string')).toBeFalsy();
  expect(isArray(true)).toBeFalsy();
  expect(isArray(/regex/)).toBeFalsy();
  expect(
    isArray(function () {
      /*comment goes here */
    })
  ).toBeFalsy();
});

it('Throw when a parameter is not passed', function () {
  expect(() => isArray(false)).toThrowError('you should pass an argument');
  expect(() => isArray(NaN)).toThrowError('you should pass an argument');
  expect(() => isArray(0)).toThrowError('you should pass an argument');
  expect(() => isArray('')).toThrowError('you should pass an argument');
  expect(() => isArray(undefined)).toThrowError('you should pass an argument');
  expect(() => isArray(null)).toThrowError('you should pass an argument');
  expect(() => isArray()).toThrowError('you should pass an argument');
});
