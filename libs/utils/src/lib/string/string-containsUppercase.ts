// Check if a string contains upper case characters
//
//
// // Examples
// containsUpperCase('Hello World');   // true
// containsUpperCase('hello world');   // false
//
export default function containsUpperCase(str) {
  return str !== str.toLowerCase();
}
