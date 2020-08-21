import split from './array-split';

it('should return empty array if empty array is passed as first arg', function () {
  expect(split([])).toStrictEqual([]);
  expect(split([], 4)).toStrictEqual([]);
  expect(split([], null)).toStrictEqual([]);
});

it('if only array is passed as argument, treat n as the length of array', function () {
  expect(split([1, 2, 3, 4, 5, 6, 7, 8, 9])).toStrictEqual([
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
  ]);
  expect(split([100, 100, 100, 200, 300, 400])).toStrictEqual([
    [100, 100, 100, 200, 300, 400],
  ]);
});

it('splits array into groups of n size if array length divisible by n', function () {
  expect(split([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).toStrictEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);
  expect(split([100, 100, 100, 200, 300, 400], 2)).toStrictEqual([
    [100, 100],
    [100, 200],
    [300, 400],
  ]);
});

it('splits array into groups of n size plus a trailing array of length < n', function () {
  expect(split([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)).toStrictEqual([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9],
  ]);
  expect(split([100, 100, 100, 200, 300, 400], 4)).toStrictEqual([
    [100, 100, 100, 200],
    [300, 400],
  ]);
});

it('throws if first argument is not an array', function () {
  expect(() => split(undefined, 2)).toThrowError(
    'expected an array for the first argument'
  );
  expect(() => split(null, 4)).toThrowError(
    'expected an array for the first argument'
  );
  expect(() => split({}, 3)).toThrowError(
    'expected an array for the first argument'
  );
});

it('throws if second argument is not null/undefined or a number', function () {
  expect(() => split([1, 2, 3, 4], '2')).toThrowError(
    'expected a number or null for the second argument'
  );
  expect(() => split([1, 2, 3, 4], {})).toThrowError(
    'expected a number or null for the second argument'
  );
});
