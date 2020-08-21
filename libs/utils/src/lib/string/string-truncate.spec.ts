import truncate from './string-truncate';

it('Truncate basic', function () {
  expect(truncate('when shall we three meet again', 9)).toBe('when s...');
  expect(truncate('when shall we three meet again', 10, ' (etc)')).toBe(
    'when (etc)'
  );
  expect(truncate('when shall we', 15)).toBe('when shall we');
  expect(truncate('when shall we', 15, '(more)')).toBe('when shall we');
  expect(truncate('when shall we', 7, ' (more)')).toBe(' (more)');
});
it('string defaulted with default suffix', function () {
  const str = 'when shall we three meet again';
  const result = truncate(str, 9);
  expect(result).toBe('when s...');
});
it('string defaulted with custom suffix', function () {
  const str = 'when shall we three meet again';
  let result = truncate(str, 12, ' (etc)');
  expect(result).toBe('when s (etc)');
  result = truncate(str, 17, '');
  expect(result).toBe('when shall we thr');
});
it('string is shorter than truncation length', function () {
  const str = 'when shall we';
  let result = truncate(str, 25);
  expect(result).toBe('when shall we');
  result = truncate(str, 20, ' (more)');
  expect(result).toBe('when shall we');
});
it('no length specified', function () {
  const str = 'when shall we three meet again';
  const result = truncate(str);
  expect(result).toBe('when shall we three meet again');
});
it('suffix is greater than or equal to truncation length', function () {
  const str = 'when shall we three meet again';
  let result = truncate(str, 10, ' (etc etc etc)');
  expect(result).toBe(' (etc etc etc)');
  result = truncate(str, 7, ' (more)');
  expect(result).toBe(' (more)');
});
it('suffix is greater than or equal to string length', function () {
  const str = 'when shall';
  let result = truncate(str, 10, ' very long suffix');
  expect(result).toBe('when shall');
  result = truncate(str, 17, ' very long suffix');
  expect(result).toBe('when shall');
});
