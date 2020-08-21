import isPositive from './number-isPositive';

it('Check if a number is positive', function () {
  expect(isPositive(3)).toBeTruthy();
  expect(isPositive(-8)).toBeFalsy();
});
