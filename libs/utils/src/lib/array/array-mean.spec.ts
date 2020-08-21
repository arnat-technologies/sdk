import mean from './array-mean';

it('array of numbers returns mean', function () {
  expect(mean([1, 2, 3, 2, 4, 1]).toFixed(4)).toBe('2.1667');
  expect(mean([4.5, -1.1, 98.6])).toBe(34);
  expect(mean([4])).toBe(4);
});

it('list of numeric arguments returns mean', function () {
  expect(mean(1, 2, 5, 2, 4, 1)).toBe(2.5);
  expect(mean(100, 100, 100.1, 100)).toBe(100.025);
  expect(mean(-4)).toBe(-4);
});

it('non-numeric values throw', function () {
  expect(() => mean([1, '2', 3, 4])).toThrowError(
    'all values passed to `mean` must be numeric'
  );
  expect(() => mean({ a: 2 })).toThrowError(
    'all values passed to `mean` must be numeric'
  );
  expect(() => mean(undefined)).toThrowError(
    'all values passed to `mean` must be numeric'
  );
  expect(() => mean()).toThrowError('no values were passed to `mean`');
});
