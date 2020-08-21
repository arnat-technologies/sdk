import prune from './string-prune';

it('string defaulted with default suffix', function () {
  const str = 'when shall we three meet again';
  let result = prune(str, 9);
  expect(result).toBe('when...');
  result = prune(str, 13);
  expect(result).toBe('when shall...');
});

it('string defaulted with custom suffix', function () {
  const str = 'when shall we three meet again';
  let result = prune(str, 16, ' (etc)');
  expect(result).toBe('when shall (etc)');
  result = prune(str, 16, '');
  expect(result).toBe('when shall we');
});

it('no length specified', function () {
  const str = 'when shall we three meet again';
  const result = prune(str);
  expect(result).toBe('when shall we three meet again');
});

it('truncation length minus suffix length is shorter than first word', function () {
  const str = 'when shall we three meet again';
  const result = prune(str, 6);
  expect(result).toBe('...');
});

it('string is shorter than truncation length', function () {
  const str = 'when shall we';
  let result = prune(str, 25);
  expect(result).toBe('when shall we');
  result = prune(str, 20, ' (more)');
  expect(result).toBe('when shall we');
});

it('suffix is greater than or equal to truncation length', function () {
  const str = 'when shall we three meet again';
  let result = prune(str, 10, ' (etc etc etc)');
  expect(result).toBe(' (etc etc etc)');
  result = prune(str, 7, ' (more)');
  expect(result).toBe(' (more)');
});

it('suffix is greater than or equal to string length', function () {
  const str = 'when shall';
  let result = prune(str, 10, ' very long suffix');
  expect(result).toBe('when shall');
  result = prune(str, 17, ' very long suffix');
  expect(result).toBe('when shall');
});
