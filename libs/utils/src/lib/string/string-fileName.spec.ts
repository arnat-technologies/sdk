import fileName from './string-fileName';

it('Get the file name from an url', function () {
  expect(fileName('http://domain.com/path/to/document.pdf')).toBe(
    'document.pdf'
  );
});
