import nl2br from './string-nl2br';

it('Replace all line breaks with br elements', function () {
  expect(nl2br('foo\nbar')).toBe('foo<br>bar');
});
