// Check if a value is an object
//
//
// // Examples
// isObject(null);             // false
// isObject('hello world');    // false
//
// isObject({});               // true
// isObject([]);               // true
//
export const isObject = (v) => v !== null && typeof v === 'object';
