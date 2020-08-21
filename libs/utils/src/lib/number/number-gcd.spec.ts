import gcd from './number-gcd';

it('Compute the greatest common divisor between two numbers', function () {
  expect(gcd(10, 15)).toBe(5);
});
