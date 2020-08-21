import flatten from './array-flatten';

it('flattened arrays are unchanged', function () {
  const arr = [1, 2, 3, 4, 5];
  expect(flatten(arr)).toStrictEqual(arr);
});

it('unflattened arrays are flattened', function () {
  const arr1 = [1, [2, 3], [4, [5, 6], 7], 8];
  expect(flatten(arr1)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  const arr2 = [{ a: 4 }, [{ b: 5 }, { c: false }], { d: 'd' }];
  expect(flatten(arr2)).toStrictEqual([
    { a: 4 },
    { b: 5 },
    { c: false },
    { d: 'd' },
  ]);
  const arr3 = [
    [1, [2, 3]],
    [[4, 5], 6, 7, [8, 9]],
  ];
  expect(flatten(arr3)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

it('throws on non-arrays return an empty array', function () {
  expect(() => flatten({ n: 4 })).toThrowError();
  expect(() => flatten(2)).toThrowError();
  expect(() => flatten(undefined)).toThrowError();
});
