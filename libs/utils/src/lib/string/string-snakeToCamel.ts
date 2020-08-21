// Convert snake case to camel case
//
// // Example
// snakeToCamel('HELLO_world');    // 'helloWorld'
//
export default function snakeToCamel(str) {
  return str.toLowerCase().replace(/(_\w)/g, (m) => m.toUpperCase().substr(1));
}
