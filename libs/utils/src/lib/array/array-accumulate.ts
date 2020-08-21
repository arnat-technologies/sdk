// Create an array of cumulative sum
//
//
// Example
// accumulate([1, 2, 3, 4]);   // [1, 3, 6, 10]
// 1             = 1
// 1 + 2         = 3
// 1 + 2 + 3     = 6
// 1 + 2 + 3 + 4 = 10
export default function accumulate(arr?) {
  if (!arr || !Array.isArray(arr)) throw new Error('you must pass an array');
  return arr.map(((sum) => (value) => (sum += value))(0));
}
