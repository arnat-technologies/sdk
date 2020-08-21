import toCamelCase from './string-toCamelCase';

it('Convert a string to camel case', function () {
  expect(toCamelCase('background-color')).toBe('backgroundColor');
  expect(toCamelCase('-webkit-scrollbar-thumb')).toBe('WebkitScrollbarThumb');
  expect(toCamelCase('_hello_world')).toBe('HelloWorld');
  expect(toCamelCase('hello_world')).toBe('helloWorld');
});
