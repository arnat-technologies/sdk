import intersect from './array-intersect';

it('intersecting arrays return intersect', function () {
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [3, 4, 5, 6, 7];
  expect(intersect(arr1, arr2)).toStrictEqual([3, 4, 5]);
});

it('result is de-duped', function () {
  const arr1 = [1, 2, 2, 4, 5];
  const arr2 = [3, 2, 2, 5, 7];
  expect(intersect(arr1, arr2)).toStrictEqual([2, 5]);
});

it('non intersecting arrays return empty array', function () {
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [6, 7, 8, 9, 10];
  expect(intersect(arr1, arr2)).toStrictEqual([]);
});

it("throws if first two arguments aren't arrays", function () {
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [6, 7, 8, 9, 10];
  expect(() => intersect(undefined, arr2)).toThrowError(
    'expected both arguments to be arrays'
  );
  expect(() => intersect(null, arr2)).toThrowError(
    'expected both arguments to be arrays'
  );
  expect(() => intersect({}, arr2)).toThrowError(
    'expected both arguments to be arrays'
  );
  expect(() => intersect('a', arr2)).toThrowError(
    'expected both arguments to be arrays'
  );
  expect(() => intersect(arr1, undefined)).toThrowError(
    'expected both arguments to be arrays'
  );
  expect(() => intersect(arr1, null)).toThrowError(
    'expected both arguments to be arrays'
  );
  expect(() => intersect(arr1, {})).toThrowError(
    'expected both arguments to be arrays'
  );
  expect(() => intersect(arr1, 'a')).toThrowError(
    'expected both arguments to be arrays'
  );
});
