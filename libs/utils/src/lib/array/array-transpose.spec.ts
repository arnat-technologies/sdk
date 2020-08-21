import transpose from './array-transpose';

it('Swap the rows and columns of a matrix', function () {
  expect(
    transpose([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ])
  ).toStrictEqual([
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ]);
});
