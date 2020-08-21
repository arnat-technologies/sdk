import remove from './array-remove';

it('returns elements unique to first array', function () {
  expect(remove([1, 2, 3, 4, 5, 6], [1, 3, 6])).toStrictEqual([2, 4, 5]);
  expect(remove(['a', 'b', 'c', 'd'], ['c', 'd'])).toStrictEqual(['a', 'b']);
  expect(remove([1, 2, 3, 4, 5, 6], [])).toStrictEqual([1, 2, 3, 4, 5, 6]);
  expect(remove([], [1, 2, 3, 4, 5, 6])).toStrictEqual([]);
});

it("throws if first two arguments aren't arrays", function () {
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [6, 7, 8, 9, 10];
  expect(() => remove(undefined, arr2)).toThrowError(
    'expected both arguments to be arrays'
  );
  expect(() => remove(null, arr2)).toThrowError(
    'expected both arguments to be arrays'
  );
  expect(() => remove('a', arr2)).toThrowError(
    'expected both arguments to be arrays'
  );
  expect(() => remove({}, arr2)).toThrowError(
    'expected both arguments to be arrays'
  );
  expect(() => remove(arr1, undefined)).toThrowError(
    'expected both arguments to be arrays'
  );
  expect(() => remove(arr1, null)).toThrowError(
    'expected both arguments to be arrays'
  );
  expect(() => remove(arr1, {})).toThrowError(
    'expected both arguments to be arrays'
  );
  expect(() => remove(arr1, 'a')).toThrowError(
    'expected both arguments to be arrays'
  );
});
