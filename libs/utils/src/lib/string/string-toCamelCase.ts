// Convert a string to camel case
//
//
// // Examples
// toCamelCase('background-color');            // backgroundColor
// toCamelCase('-webkit-scrollbar-thumb');     // WebkitScrollbarThumb
// toCamelCase('_hello_world');                // HelloWorld
// toCamelCase('hello_world');                 // helloWorld
//
export default function toCamelCase(str) {
  return str
    .trim()
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));
}
