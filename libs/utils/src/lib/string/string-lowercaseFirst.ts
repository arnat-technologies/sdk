// Make the first character of a string lowercase
//
//
// // Example
// lowercaseFirst('Hello World');      // 'hello World'
//
export default function lowercaseFirst(str) {
  return `${str.charAt(0).toLowerCase()}${str.slice(1)}`;
}
