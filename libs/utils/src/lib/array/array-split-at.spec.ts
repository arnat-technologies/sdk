import splitAt from './array-split-at';

it('splits array into two at a given position within the array bounds', function () {
  expect(splitAt([1, 2, 3, 4, 5], 2)).toStrictEqual([
    [1, 2],
    [3, 4, 5],
  ]);
});

it('splits array into two at a given position outside the array bounds', function () {
  expect(splitAt([1, 2, 3, 4, 5], 10)).toStrictEqual([[1, 2, 3, 4, 5], []]);
});

it('splits array into two at a given negative position within the array bounds', function () {
  expect(splitAt([1, 2, 3, 4, 5], -1)).toStrictEqual([[1, 2, 3, 4], [5]]);
});

it('splits array into two at a given negative position outside the array bounds', function () {
  expect(splitAt([1, 2, 3, 4, 5], -10)).toStrictEqual([[], [1, 2, 3, 4, 5]]);
});

it('when no second argument, all elements go to second array', function () {
  expect(splitAt([1, 2, 3, 4, 5], null)).toStrictEqual([[], [1, 2, 3, 4, 5]]);
});

it('splits array into two at an empty array', function () {
  expect(splitAt([], 2)).toStrictEqual([[], []]);
});

it('throws if first argument is not an array', function () {
  expect(() => splitAt(undefined, 2)).toThrowError(
    'expected an array for the first argument'
  );
  expect(() => splitAt(null, 4)).toThrowError(
    'expected an array for the first argument'
  );
  expect(() => splitAt({}, 3)).toThrowError(
    'expected an array for the first argument'
  );
});

it('throws if second argument is not null/undefined or a number', function () {
  expect(() => splitAt([1, 2, 3, 4], '2')).toThrowError(
    'expected a number or null for the second argument'
  );
  expect(() => splitAt([1, 2, 3, 4], {})).toThrowError(
    'expected a number or null for the second argument'
  );
});
