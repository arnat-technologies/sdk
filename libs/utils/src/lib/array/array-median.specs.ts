import median from './array-median';

it('array of numbers (length is odd) returns middle sorted value', function () {
  expect(median([1, 2, 3, 4, 5])).toBe(3);
  expect(median([5, 4, 1, 2, 4])).toBe(4);
  expect(median([-1, -8, 312, 4, 5, 0, 0, 2, 1])).toBe(1);
  expect(median(5)).toBe(5);
});

it('array of numbers (length is even) returns mean of middle 2 sorted values', function () {
  expect(median([1, 2, 4, 5])).toBe(3);
  expect(median([-2, -1, -2, -1])).toBe(-1.5);
});

it('non-numeric values throw', function () {
  expect(() => median([1, '2', 3, 4, 5])).toThrowError('');
  expect(() => median({ a: 2 }, { b: 3 })).toThrowError('');
  expect(() => median(undefined)).toThrowError('');
});
