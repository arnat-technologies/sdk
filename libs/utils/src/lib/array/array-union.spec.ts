import union from './array-union';

it("union of intersecting arrays doesn't include dupliccates", function () {
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [3, 4, 5, 6, 7];
  expect(union(arr1, arr2)).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
});

it('union of non-intersecting arrays return all members', function () {
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [6, 7, 8, 9, 10];
  expect(union(arr1, arr2)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

it('does not mutate', function () {
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [6, 7, 8, 9, 10];
  expect(union(arr1, arr2)).not.toStrictEqual(arr1);
});

it("throws if first two arguments aren't arrays", function () {
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [6, 7, 8, 9, 10];

  expect(() => union(undefined, arr2)).toThrowError(
    'expected both arguments to be arrays'
  );
  expect(() => union(null, arr2)).toThrowError(
    'expected both arguments to be arrays'
  );
  expect(() => union({}, arr2)).toThrowError(
    'expected both arguments to be arrays'
  );
  expect(() => union('a', arr2)).toThrowError(
    'expected both arguments to be arrays'
  );
  expect(() => union(arr1, undefined)).toThrowError(
    'expected both arguments to be arrays'
  );
  expect(() => union(arr1, null)).toThrowError(
    'expected both arguments to be arrays'
  );
  expect(() => union(arr1, {})).toThrowError(
    'expected both arguments to be arrays'
  );
  expect(() => union(arr1, 'a')).toThrowError(
    'expected both arguments to be arrays'
  );
});
