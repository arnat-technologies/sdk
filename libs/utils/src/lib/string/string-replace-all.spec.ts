import replaceAll from './string-replace-all';

test('string with replacements', function () {
  expect(replaceAll('hello, world', 'l', 'q')).toBe('heqqo, worqd');
  expect(replaceAll('hello, world', 'l', 'qq')).toBe('heqqqqo, worqqd');
  expect(replaceAll('hello, world', 'll', 'q')).toBe('heqo, world');
  expect(replaceAll('hello, world', 'l', '')).toBe('heo, word');
});

test('string with no replacements', function () {
  expect(replaceAll('hello, world', '', 'q')).toBe('hello, world');
});

test('invalid arguments', function () {
  expect(() => replaceAll('hello, world', 'l')).toThrowError('');
  expect(() => replaceAll('hello, world')).toThrowError('');
  expect(() => replaceAll()).toThrowError('');
  expect(() => replaceAll(null, 'l', 'q')).toThrowError('');
  expect(() => replaceAll('hello, world', null, 'q')).toThrowError('');
  expect(() => replaceAll('hello, world', 'l', null)).toThrowError('');
});
