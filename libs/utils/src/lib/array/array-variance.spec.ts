import variance from './array-variance';

it('array of numbers returns variance value', function () {
  expect(variance([1, 2, 3, 2, 4, 1]).toFixed(4)).toBe('1.3667');
  expect(variance([3, 2.5, 1]).toFixed(4)).toBe('1.0833');
  expect(variance([1, 2, 3, 4, 5, 6])).toBe(3.5);
  expect(variance([1, 2, 3, 4, 5, -6])).toBe(15.5);
});

it('list of numeric arguments variance value', function () {
  expect(variance(1, 8, 6)).toBe(13);
  expect(variance(100, 100, 100.1, 100).toFixed(4)).toBe('0.0025');
  expect(variance(-1, -2)).toBe(0.5);
  expect(variance(0.1, 0.2, 0.3).toFixed(2)).toBe('0.01');
});

it('one or fewer values throw', function () {
  expect(() => variance([1])).toThrowError(
    'less than one value was passed to `variance`'
  );
  expect(() => variance([17.1])).toThrowError(
    'less than one value was passed to `variance`'
  );
  expect(() => variance()).toThrowError(
    'less than one value was passed to `variance`'
  );
  expect(() => variance([])).toThrowError(
    'less than one value was passed to `variance`'
  );
});

it('non-numeric values throw', function () {
  expect(() => variance(['1', '2', '3'])).toThrowError(
    'all values passed to `variance` must be numeric'
  );
  expect(() => variance(['a', 'b', 'c'])).toThrowError(
    'all values passed to `variance` must be numeric'
  );
  expect(() => variance(undefined)).toThrowError(
    'less than one value was passed to `variance`'
  );
  expect(() => variance([NaN, NaN])).toThrowError(
    'all values passed to `variance` must be numeric'
  );
});
