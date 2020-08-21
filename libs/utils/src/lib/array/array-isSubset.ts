// Check if an array is subset of other array
//
// // Examples
// isSubset([1,2], [1,2,3,4]);     // true
// isSubset([1,2,5], [1,2,3,4]);   // false
// isSubset([6], [1,2,3,4]);       // false
//
export default function isSubset(a, b) {
  return new Set(b).size === new Set(b.concat(a)).size;
}
