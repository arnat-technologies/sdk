import trim from './string-trim';

it('Trim some character', function () {
  expect(trim('/hello world//', '/')).toBe('hello world');
  expect(trim('"hello world"', '"')).toBe('hello world');
  expect(trim('   hello world ', ' ')).toBe('hello,world');
});
