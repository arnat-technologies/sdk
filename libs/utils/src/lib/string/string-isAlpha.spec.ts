import isAlpha from './string-isAlpha';

it('Check if a string contains only letters', function () {
  expect(isAlpha('helloworld')).toBe(true);
  expect(isAlpha('HelloWorld')).toBe(true);
  expect(isAlpha('hello world')).toBe(false);
  expect(isAlpha('0123456789')).toBe(false);
});
