import toUnixPath from './string-toUnixPath';

it('Convert a windows file path to unix path', function () {
  expect(toUnixPath('./foo/bar/baz')).toBe('foo/bar/baz');
  expect(toUnixPath('C:\\foo\\bar\\baz')).toBe('/foo/bar/baz');
});
