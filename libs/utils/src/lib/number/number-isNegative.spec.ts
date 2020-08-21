import isNegative from './number-isNegative';

it('Check if a number is negative', function () {
  expect(isNegative(-3)).toBeTruthy();
  expect(isNegative(8)).toBeFalsy();
});
