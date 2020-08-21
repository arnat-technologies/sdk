// Check if a value is a string
//
//
// // Examples
// isString('hello world');                // true
// isString(new String('hello world'));    // true
// isString(10);                           // false
//
export default function isString(value) {
  return Object.prototype.toString.call(value) === '[object String]';
}
