import isOdd from './number-isOdd';

it('Check if a number is odd', function () {
  expect(isOdd(1)).toBeTruthy();
  expect(isOdd(2)).toBeFalsy();
});
