import skewness from './array-skewness';

it('array of numbers returns skewness', function () {
  expect(skewness(1, 2, 3, 4, 5, -6)).toBe(-0.762000762001143);
  expect(skewness([1, 2, 3, 4, 9])).toBe(0.7705935588815224);
  expect(skewness([3, 2, 1])).toBe(0);
  expect(skewness([1, 2, 3, 2, 4, 1])).toBe(0.4276994613841504);
  expect(skewness([10, 30, 50, 70])).toBe(0);
  expect(skewness([1, 2, 3, 2, 4, 1]).toFixed(4)).toBe('0.4277');
  expect(skewness([1, 2, 3, 4, 9]).toFixed(4)).toBe('0.7706');
  expect(skewness([-3, 1, -2]).toFixed(4)).toBe('0.9608');
});

it('list of numeric arguments returns skewness', function () {
  expect(skewness(2, 6, 4)).toBe(0);
  expect(skewness(4, 4, 4, 19)).toBe(1.5);
  expect(skewness(-1, -2, -9).toFixed(4)).toBe('-1.3765');
  expect(skewness(34, 0, 0, 0, 0).toFixed(4)).toBe('1.3416');
});

it('identical numbers returns NaN', function () {
  expect(String(skewness(10, 10, 10, 10))).toBe('NaN');
  expect(String(skewness(0, 0, 0))).toBe('NaN');
});

it('one or fewer values throw', function () {
  expect(() => skewness([1])).toThrowError(
    'less than one value was passed to `skewness`'
  );
  expect(() => skewness(17.1)).toThrowError(
    'less than one value was passed to `skewness`'
  );
  expect(() => skewness()).toThrowError(
    'less than one value was passed to `skewness`'
  );
  expect(() => skewness([])).toThrowError(
    'less than one value was passed to `skewness`'
  );
});

it('non-numeric values throw', function () {
  expect(() => skewness(['1', '2', '3'])).toThrowError(
    'all values passed to `skewness` must be numeric'
  );
  expect(() => skewness(['a', 'b', 'c'])).toThrowError(
    'all values passed to `skewness` must be numeric'
  );
  expect(() => skewness(undefined)).toThrowError(
    'less than one value was passed to `skewness`'
  );
  expect(() => skewness([NaN, NaN])).toThrowError(
    'all values passed to `skewness` must be numeric'
  );
});
