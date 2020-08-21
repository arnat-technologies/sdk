import isRelative from './string-isRelative';

it('CHeck if a path is relative', function () {
  expect(isRelative('/foo/bar/baz')).toBe(false);
  expect(isRelative('C:\\foo\\bar\\baz')).toBe(false);
  expect(isRelative('foo/bar/baz.txt')).toBe(true);
  expect(isRelative('foo.md')).toBe(true);
});
