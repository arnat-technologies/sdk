import closest from './array-closest';

it('Find the closest number from an array', function () {
  expect(closest([29, 87, 8, 78, 97, 20, 75, 33, 24, 17], 50)).toBe(33);
});
