// Compare two arrays regardless of order
//  or Check if all array elements are equal to a given value
// if a stirng is passed
//
// `a` and `b` are arrays
//
// Examples
// isEqual([1, 2, 3], [1, 2, 3]);      // true
// isEqual([1, 2, 3], [1, 3, 2]);      // true
// isEqual([1, 2, 3], [1, '2', 3]);    // false
//
// isEqual(['foo', 'foo'], 'foo');     // true
// isEqual(['foo', 'bar'], 'foo');     // false
// isEqual(['bar', 'bar'], 'foo');     // false
//
// Compare Two arrays
// //
// // Examples
// isEqual([1, 2, 3], [1, 2, 3]);      // true
// isEqual([1, 2, 3], [1, '2', 3]);    // false
export default function isEqual(a, b) {
  if (!Array.isArray(a)) throw new Error('you must provide an array');
  if (!Array.isArray(b) && typeof b !== 'string')
    throw new Error('you must provide an array or string as second parameter');

  if (!Array.isArray(b)) {
    return !a.some((item) => item !== b);
  }
  return a.length === b.length && a.every((v, i) => v === b[i]);
}
