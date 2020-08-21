import chunk from './array-chunk';

it('Split an array into chunks', function () {
  expect(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)).toStrictEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8],
  ]);

  expect(chunk([1, 2, 3, 4, 5, 6, 7, 8], 4)).toStrictEqual([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
  ]);
});

it('throw an error if size is not provided', function () {
  expect(() => chunk([1, 2, 3, 4, 5, 6])).toThrowError(
    'size should be provided'
  );
});
