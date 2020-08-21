// Sort an array of numbers
//
//
// // Example
// sort([1, 5, 2, 4, 3]);      // [1, 2, 3, 4, 5]
//
export default function sort(arr) {
  if (!Array.isArray(arr)) throw new Error('should pass an array as parameter');
  return arr.sort((a, b) => a - b);
}
