import containsLowerCase from './string-containsLowerCase';

it('check if a string contains lower case characters', function () {
  expect(containsLowerCase('Hello World')).toBeTruthy();
  expect(containsLowerCase('HELLO WORLD')).toBeFalsy();
});
