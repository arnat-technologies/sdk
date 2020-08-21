import mode from './array-mode';
import compare from '../collection/collection-compare';

it('array of numbers with one mode', function () {
  expect(mode([1, 2, 3, 2])).toBe(2);
  expect(mode([1, 1, -3, -3, -3])).toBe(-3);
  expect(mode([1])).toBe(1);
});

it('list of number arguments with one mode', function () {
  expect(mode(1, 1, 2, 3, 4)).toBe(1);
  expect(mode(100, 100, 100)).toBe(100);
  expect(mode(3)).toBe(3);
});

it('array of numbers with multiple modes', function () {
  expect(compare(mode([1, 2, 3, 4]), [1, 2, 3, 4])).toBeTruthy();
  expect(compare(mode([4, 3, 2, 1]), [1, 2, 3, 4])).toBeTruthy();
  expect(compare(mode([-3, -3, -4, -4]), [-4, -3])).toBeTruthy();
});

it('list of number arguments with multiple modes', function () {
  expect(compare(mode(1, 2, 34, 4), [1, 2, 4, 34])).toBeTruthy();
  expect(compare(mode(0.1, 0.01, 0.001), [0.001, 0.01, 0.1])).toBeTruthy();
  expect(compare(mode(-4, -4, -3, -3), [-4, -3])).toBeTruthy();
});

it('non-numeric values throw', function () {
  expect(() => mode([1, '2', 3, 4, 5])).toThrowError(
    'all values passed to `mode` must be numeric'
  );
  expect(() => mode({ a: 2 }, { b: 3 })).toThrowError(
    'all values passed to `mode` must be numeric'
  );
  expect(() => mode(undefined)).toThrowError(
    'all values passed to `mode` must be numeric'
  );
});
