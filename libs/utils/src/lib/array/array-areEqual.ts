// Check if all items in an array are equal
//
// // Examples
// areEqual([1, 2, 3, 4]);                 // false
// areEqual(['hello', 'hello', 'hello']);  // true
//
export default function areEqual(arr) {
  return arr.length > 0 && arr.every((item) => item === arr[0]);
}
