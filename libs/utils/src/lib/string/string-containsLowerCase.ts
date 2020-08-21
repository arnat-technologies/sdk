// Check if a string contains lower case characters
//
//
// // Examples
// containsLowerCase('Hello World');   // true
// containsLowerCase('HELLO WORLD');   // false
//
export default function containsLowerCase(str) {
  return str !== str.toUpperCase();
}
