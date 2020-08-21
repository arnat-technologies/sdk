import containsUpperCase from './string-containsUppercase';

it('check if a string contains upper case characters', function () {
  expect(containsUpperCase('Hello World')).toBeTruthy();
  expect(containsUpperCase('hello world')).toBeFalsy();
});
