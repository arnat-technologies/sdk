import isPowerOfTwo from './number-isPowerOfTwo';

it('Check if a number is a power of 2', function () {
  expect(isPowerOfTwo(256)).toBeTruthy();
  expect(isPowerOfTwo(129)).toBeFalsy();
});
