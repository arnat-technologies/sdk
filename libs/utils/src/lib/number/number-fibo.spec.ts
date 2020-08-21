import fibo from './number-fibo';

it('Calculate fibonacci numbers', function () {
  expect(fibo(1)).toBe(1);
  expect(fibo(2)).toBe(1);
  expect(fibo(3)).toBe(2);
  expect(fibo(4)).toBe(3);
  expect(fibo(5)).toBe(5);
  expect(fibo(6)).toBe(8);
});
