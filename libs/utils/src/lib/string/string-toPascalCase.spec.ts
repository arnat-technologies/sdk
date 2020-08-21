import toPascalCase from './string-toPascalCase';

it('Convert a string to pascal case', function () {
  expect(toPascalCase('hello world')).toBe('HelloWorld');
  expect(toPascalCase('hello.world')).toBe('HelloWorld');
  expect(toPascalCase('foo_bar-baz')).toBe('FooBarBaz');
});
