import unzip from './array-unzip';

it('Unzip an array of arrays', function () {
  expect(
    unzip([
      ['a', 1],
      ['b', 2],
      ['c', 3],
      ['d', 4],
      ['e', 5],
    ])
  ).toStrictEqual([
    ['a', 'b', 'c', 'd', 'e'],
    [1, 2, 3, 4, 5],
  ]);
});
