import isLowerCase from './string-isLowerCase';

it('check if a string is lower case', function () {
  expect(isLowerCase('lowercase')).toBeTruthy();
  expect(isLowerCase('uppercase')).toBeTruthy();
  expect(isLowerCase('1234')).toBeTruthy();
  expect(isLowerCase('cat')).toBeTruthy();
  expect(isLowerCase('humanize')).toBeTruthy();
  expect(isLowerCase('Lowercase')).toBeFalsy();
  expect(isLowerCase('Cat')).toBeFalsy();
  expect(isLowerCase('caT')).toBeFalsy();
  expect(isLowerCase('humanizE')).toBeFalsy();
});
