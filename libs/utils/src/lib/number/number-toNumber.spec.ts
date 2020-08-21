import toNumber from './number-toNumber';

it('Convert a string to number', function () {
  expect(toNumber('42')).toBe(42);
});
