import containsWhitespace from './string-containsWhiteSpace';

it('Check if a string contains whitespace', function () {
  expect(containsWhitespace('hello world')).toBeTruthy();
});
