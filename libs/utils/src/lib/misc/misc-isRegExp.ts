// Check if a value is a regular expression
//
export const isRegExp = (value) =>
  Object.prototype.toString.call(value) === '[object RegExp]';
