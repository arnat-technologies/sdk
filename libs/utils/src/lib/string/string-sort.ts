// Sort the characters of a string in the alphabetical order
//
//
// // Example
// sort('hello world');    // dehllloorw
//
export default function sort(str) {
  return str
    .split('')
    .sort((a, b) => a.localeCompare(b))
    .join('');
}
