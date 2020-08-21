// Convert a string to pascal case
//

// // Examples
// toPascalCase('hello world');    // 'HelloWorld'
// toPascalCase('hello.world');    // 'HelloWorld'
// toPascalCase('foo_bar-baz');    // FooBarBaz
//
export default function toPascalCase(str) {
  return (str.match(/[a-zA-Z0-9]+/g) || [])
    .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
    .join('');
}
