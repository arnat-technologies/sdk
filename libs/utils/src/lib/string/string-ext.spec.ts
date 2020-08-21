import ext from './string-ext';

it('Get the file extension from a file name', function () {
  expect(ext('foo.zip')).toBe('zip');
});
