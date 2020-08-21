import sum from './number-sum';

it('Calculate the sum of arguments', function () {
  expect(sum(1, 2, 3, 4)).toBe(10);
});
