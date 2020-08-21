import areAnagram from './string-areAnagram';

it('check if two strings are anagrams', function () {
  expect(areAnagram('listen', 'silent')).toBeTruthy();
  expect(areAnagram('they see', 'the eyes')).toBeTruthy();
  expect(areAnagram('node', 'deno')).toBeTruthy();
});

it('thrown if any argument is not an string', function () {
  expect(() => areAnagram('foo', true)).toThrowError(
    'arguments should be a string'
  );
  expect(() => areAnagram('foo', false)).toThrowError(
    'arguments should be a string'
  );
  expect(() => areAnagram(true, 'bar')).toThrowError(
    'arguments should be a string'
  );
  expect(() => areAnagram('true', false)).toThrowError(
    'arguments should be a string'
  );
});
