import repeat from './string-repeat';

it('Repeat a string', function () {
  expect(repeat('foo', 2)).toBe('foofoo');
  expect(repeat('foo', 3)).toBe('foofoofoo');
});
