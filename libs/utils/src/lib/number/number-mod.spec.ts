import mod from './number-mod';

it('Calculate the mod of collection index', function () {
  expect(mod(-1, 5)).toBe(4);
  expect(mod(3, 5)).toBe(3);
  expect(mod(6, 5)).toBe(1);
});
