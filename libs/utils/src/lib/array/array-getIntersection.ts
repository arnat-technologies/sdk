// Get the intersection of arrays
//
//
// // Examples
// getIntersection([1, 2, 3], [2, 3, 4, 5]);               // [2, 3]
// getIntersection([1, 2, 3], [2, 3, 4, 5], [1, 3, 5]);    // [3]
//
// Only support two arrays
export default function getIntersection(a, b) {
  return [...new Set(a)].filter((v) => b.includes(v));
}
