import normalizePath from './string-normalizePath';

it('Normalize file path slashes', function () {
  expect(normalizePath('\\foo\\bar\\baz\\')).toBe('/foo/bar/baz/');
});
