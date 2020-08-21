import trimExt from './string-trimExt';

it('Trim the file extension from a file name', function () {
  expect(trimExt('document')).toBe('document');
  expect(trimExt('document.pdf')).toBe('document');
  expect(trimExt('document.2020.pdf')).toBe('document.2020');
});
