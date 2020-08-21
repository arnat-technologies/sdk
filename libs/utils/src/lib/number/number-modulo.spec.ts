import modulo from './number-modulo';

it('get the module of numbers', function () {
  expect(modulo(7, 5)).toBe(2);
  expect(modulo(17, 23)).toBe(17);
  expect(modulo(16.2, 3.8)).toBe(1);
  modulo(5.8, 3.4); //2.4
  expect(modulo(4, 0)).toBe(4);
  expect(modulo(-7, 5)).toBe(3);
  expect(modulo(-2, 15)).toBe(13);
  expect(modulo(-5.8, 3.4)).toBe(1);
  expect(modulo(12, -1)).toBe(NaN);
  expect(modulo(-3, -8)).toBe(NaN);
  expect(modulo(12, 'apple')).toBe(NaN);
  expect(modulo('bee', 9)).toBe(NaN);
  expect(modulo(null, undefined)).toBe(NaN);
});
