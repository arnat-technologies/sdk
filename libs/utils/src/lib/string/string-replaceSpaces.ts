// Replace multiple spaces with a single space
//
// // Example
// replaceSpaces('this\n   is     \ta    \rmessage');  // 'this is a message'
//

// Replace spaces, tabs and new line characters
export default function replaceSpaces(str) {
  return str.replace(/\s\s+/g, ' ');
}
