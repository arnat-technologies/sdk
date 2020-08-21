import tail from './array-tail';

it('non empty arrays return all but head', function () {
  const testArrays = [
    [1, 2, 3, 4, 5],
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }],
    ['a', 1, true, /r/g],
  ];
  testArrays.forEach(function (arr) {
    expect(tail(arr)).toStrictEqual(arr.slice(1));
  });
});

it('empty arrays return an empty array', function () {
  expect(tail([])).toStrictEqual([]);
});

it('non-array arguments throw', function () {
  expect(() => tail({})).toThrowError('expected an array');
  expect(() => tail(undefined)).toThrowError('expected an array');
  expect(() => tail(null)).toThrowError('expected an array');
  expect(() => tail()).toThrowError('expected an array');
});
