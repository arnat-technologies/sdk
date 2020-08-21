import findLongest from './array-findLongest';

it('find longest from array', function () {
  expect(findLongest(['foo', 'ba'])).toBe(3);
  expect(
    findLongest(['always', 'look', 'on', 'the', 'bright', 'side', 'of', 'life'])
  ).toBe(6);
});
