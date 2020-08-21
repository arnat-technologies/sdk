import isString from './string-isString';

it('Check if a value is a string', function () {
  expect(isString('hello world')).toBeTruthy();
  expect(isString(new String('hello world'))).toBeTruthy();
  expect(isString(10)).toBeFalsy();
});
