import uppercaseWords from './string-uppercaseWords';

it('Uppercase the first character of each word in a string', function () {
  expect(uppercaseWords('hello world')).toBe('Hello World');
});
