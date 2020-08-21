import isPalindrome from './string-isPalindrome';

it('Check if a string is a palindrome', function () {
  expect(isPalindrome('abc')).toBeFalsy();
  expect(isPalindrome('abcba')).toBeTruthy();
});
