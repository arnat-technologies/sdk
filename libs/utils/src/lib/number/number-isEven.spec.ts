import isEven from './number-isEven';

it('Check if a number is even', function () {
  expect(isEven(1)).toBeFalsy();
  expect(isEven(2)).toBeTruthy();
});
