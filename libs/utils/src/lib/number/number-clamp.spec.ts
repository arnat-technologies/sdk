import clamp from './number-clamp';

it('positive numbers are limited by range', function () {
  const n = 5;
  expect(clamp(1, n, 12)).toBe(5);
  expect(clamp(3, n, 1)).toBe(3);
  expect(clamp(8.2, n, 9)).toBe(8.2);
  expect(clamp(0, n, 0)).toBe(0);
});

it('negative numbers are limited by range', function () {
  const n = -5;
  expect(clamp(1, n, 12)).toBe(1);
  expect(clamp(-6.5, n, -8)).toBe(-6.5);
});

it('Returns NaN if any argument is NaN', function () {
  const n = 3;
  expect(isNaN(clamp(NaN, n, 8))).toBeTruthy();
  expect(isNaN(clamp(3, n, NaN))).toBeTruthy();
  expect(isNaN(clamp(3, NaN, 8))).toBeTruthy();
});

it('Throws if any argument is not a number', function () {
  const n = -4;
  expect(() => clamp(undefined, n, 8)).toThrowError('');
  expect(() => clamp(3, n, 'h')).toThrowError('');
  expect(() => clamp(3, false, 8)).toThrowError('');
});
