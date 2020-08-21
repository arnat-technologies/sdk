import inRange from './number-inRange';

it('Check if a number is in a given range', function () {
  expect(inRange(10, 5, 15)).toBeTruthy();
  expect(inRange(10, 5, 6)).toBeFalsy();
  expect(inRange(10, 15, 5)).toBeTruthy();
  expect(inRange(-10, -5, -15)).toBeTruthy();
});
