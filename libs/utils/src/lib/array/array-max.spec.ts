import max from './array-max';

it('Find the maximum item of an array', function () {
  expect(max([1, 2, 3, 4, 5])).toBe(5);
  expect(max([5, 2, 31.2, 4, 6, 7, 8, 9, 12, 32, 54])).toBe(54);
});
