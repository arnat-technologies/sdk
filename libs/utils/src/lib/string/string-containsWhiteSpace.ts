// Check if a string contains whitespace
//
// // Example
// containsWhitespace('hello world');      // true
//
export default function containsWhitespace(str) {
  return /\s/.test(str);
}
