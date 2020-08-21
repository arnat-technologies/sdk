import partition from './array-partition';

it('populated arrays', function () {
  let result;
  result = partition([1, 5, 2, 4, 3], function (n) {
    return n > 3;
  });
  expect(result).toStrictEqual([
    [5, 4],
    [1, 2, 3],
  ]);
  result = partition(['a', 2, 3, '3'], function (x) {
    return typeof x == 'string';
  });
  expect(result).toStrictEqual([
    ['a', '3'],
    [2, 3],
  ]);
  result = partition([1, 2, 3, 4], function (x) {
    return typeof x == 'number';
  });
  expect(result).toStrictEqual([[1, 2, 3, 4], []]);
  result = partition([1, 2, 3, 4], function (x) {
    return typeof x == 'string';
  });
  expect(result).toStrictEqual([[], [1, 2, 3, 4]]);
});

it('sparse arrays', function () {
  let result;
  result = partition([1, 5, 2, undefined, undefined, 4, 3], function (n) {
    return n > 3;
  });
  expect(result).toStrictEqual([
    [5, 4],
    [1, 2, undefined, undefined, 3],
  ]);
  result = partition([1, 2, 3, undefined, undefined, 4], function (x) {
    return typeof x == 'undefined';
  });
  expect(result).toStrictEqual([
    [undefined, undefined],
    [1, 2, 3, 4],
  ]);
});

it('empty array', function () {
  const result = partition([], function (n) {
    return n > 3;
  });
  expect(result).toStrictEqual([[], []]);
});

it('illegal arguments', function () {
  expect(() =>
    partition({ a: 1, b: 2 }, function (n) {
      return n > 3;
    })
  ).toThrowError('');

  expect(() =>
    partition(null, function (n) {
      return n > 3;
    })
  ).toThrowError('');

  expect(() =>
    partition(undefined, function (n) {
      return n > 3;
    })
  ).toThrowError('');

  expect(() => partition([1, 2, 3], [])).toThrowError('');
});
