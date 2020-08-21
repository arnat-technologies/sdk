// Check if an array contains a value matching some criterias
//
// // Examples
// contains([10, 20, 30], v => v > 25 );               // true
// contains([10, 20, 30], v => v > 100 || v < 15 );    // true
// contains([10, 20, 30], v => v > 100 );              // false
//
export default function contains(arr, criteria) {
  return arr.some((v) => criteria(v));
}
