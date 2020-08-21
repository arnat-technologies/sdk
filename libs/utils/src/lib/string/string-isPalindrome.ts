// Check if a string is a palindrome
//
//
// // Examples
// isPalindrome('abc');        // false
// isPalindrom('abcba');       // true
//
export default function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}
