import min from './array-min';

it('Find the minimum item of an array', function () {
  expect(min([1, 2, 3, 4, 5, 6, 7])).toBe(1);
  expect(min([2, 3, 4, 5, 6, 7])).toBe(2);
  expect(min([7, 6, 5, 4])).toBe(4);
  expect(min([3, 2.21, 76, -2, 34])).toBe(-2);
});

it('should pass an array and throw it', function () {
  expect(() => min({ foo: 1, bar: 2 })).toThrowError(
    'you should pass an array'
  );
  expect(() => min('string')).toThrowError('you should pass an array');
  expect(() => min(/regx/)).toThrowError('you should pass an array');
  expect(() => min(10)).toThrowError('you should pass an array');
  expect(() => min(new Date())).toThrowError('you should pass an array');
  expect(() => min(new Map())).toThrowError('you should pass an array');
});
