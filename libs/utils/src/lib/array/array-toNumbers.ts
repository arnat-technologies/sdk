// Convert an array of strings to numbers
//
// // Example
// toNumbers(['2', '3', '4']);     // [2, 3, 4]
export default function toNumbers(arr) {
  if (!Array.isArray(arr)) throw new Error('should provide an array');
  return arr.map(Number);
}
