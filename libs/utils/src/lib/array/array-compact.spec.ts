import compact from './array-compact';

it('removes all falsey types', function () {
  expect(
    compact([1, null, 2, undefined, null, NaN, 3, 4, false, 5])
  ).toStrictEqual([1, 2, 3, 4, 5]);
});

it('does not remove empty objects', function () {
  expect(compact([1, 2, [], 4, {}])).toStrictEqual([1, 2, [], 4, {}]);
});

it('returns empty array as-is', function () {
  expect(compact([])).toStrictEqual([]);
});

it('throws if argument is not an array', function () {
  expect(() => compact({})).toThrow(Error);
  expect(() => compact('hello')).toThrowError(Error);
  expect(() => compact(/hello/)).toThrowError(Error);
  expect(() => compact(null)).toThrowError(Error);
  expect(() => compact(undefined)).toThrowError(Error);
  expect(() => compact()).toThrowError(Error);
});
