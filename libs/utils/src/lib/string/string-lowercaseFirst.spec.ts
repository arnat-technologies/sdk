import lowercaseFirst from './string-lowercaseFirst';

it('Make the first character of a string lowercase', function () {
  expect(lowercaseFirst('Hello World')).toBe('hello World');
});
