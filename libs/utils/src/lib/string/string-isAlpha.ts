// Check if a string contains only letters
//
//
//  // Examples
//  isAlpha('helloworld');          // true
//  isAlpha('HelloWorld');          // true
//  isAlpha('hello world');         // false
//  isAlpha('0123456789');          // false
export default function isAlpha(str) {
  return /^[A-Z]+$/i.test(str);
}
