import toChars from './number-toChars';

it('Convert a number to equivalent characters', function () {
  expect(toChars(0)).toBe('A');
  expect(toChars(1)).toBe('B');
  expect(toChars(25)).toBe('Z');

  expect(toChars(26)).toBe('AA');
  expect(toChars(27)).toBe('AB');
  expect(toChars(51)).toBe('AZ');

  expect(toChars(701)).toBe('ZZ');
  expect(toChars(702)).toBe('AAA');
  expect(toChars(703)).toBe('AAB');
});
