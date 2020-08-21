import bytes from './string-bytes';

it('Get the length of a string in bytes', function () {
  expect(bytes('hello world')).toBe(11);
  expect(bytes('🎉')).toBe(4);
});
