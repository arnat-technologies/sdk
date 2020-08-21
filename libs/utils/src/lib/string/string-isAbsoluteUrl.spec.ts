import isAbsoluteUrl from './string-isAbsoluteUrl';

it('Check if a url is absolute', function () {
  expect(isAbsoluteUrl('https://1loc.dev')).toBe(true);
  expect(isAbsoluteUrl('https://1loc.dev/foo/bar')).toBe(true);
  expect(isAbsoluteUrl('1loc.dev')).toBe(false);
  expect(isAbsoluteUrl('//1loc.dev')).toBe(false);
});
