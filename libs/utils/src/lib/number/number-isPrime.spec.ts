import isPrime from './number-isPrime';

it('Check if a given integer is a prime number', function () {
  expect(isPrime(7)).toBeTruthy();
  expect(isPrime(2)).toBeTruthy();
  expect(isPrime(13)).toBeTruthy();
  expect(isPrime(10)).toBeFalsy();
});
