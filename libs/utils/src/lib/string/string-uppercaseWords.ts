// Uppercase the first character of each word in a string
//
//
// // Example
// uppercaseWords('hello world');      // 'Hello World'
//
export default function uppercaseWords(str) {
  return str
    .split(' ')
    .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
    .join(' ');
}
