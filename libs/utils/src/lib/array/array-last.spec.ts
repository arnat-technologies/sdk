import last from './array-last';

it('non empty arrays return last', function () {
  expect(last([1, 2, 3, 4, 5])).toBe(5);
  expect(
    last([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ])
  ).toStrictEqual([7, 8, 9]);
  expect(last([{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }])).toStrictEqual({
    d: 4,
  });
  expect(last(['a', 1, true, /r/g])).toStrictEqual(/r/g);
});

it('empty arrays return undefined', function () {
  expect(last([])).toBe(undefined);
});

it('non-array arguments throw', function () {
  expect(() => last({})).toThrowError('');
  expect(() => last(undefined)).toThrowError('');
  expect(() => last()).toThrowError('');
});
