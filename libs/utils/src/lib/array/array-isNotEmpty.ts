// Check if an array is not empty
//
// // Examples
// isNotEmpty([]);             // false
// isNotEmpty([1, 2, 3]);      // true
//
export default function isNotEmpty(arr) {
  return Array.isArray(arr) && Object.keys(arr).length > 0;
}
