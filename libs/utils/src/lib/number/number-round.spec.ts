import round from './number-round';

it('Round a number to a given number of digits', function () {
  expect(round(1.234567, 3)).toBe(1.235);
  expect(round(1.234567, 4)).toBe(1.2346);
});
