//
// Count the occurrences of a value in an array
//
//  // Examples
//  countOccurrences([2, 1, 3, 3, 2, 3], 2);                // 2
//  countOccurrences(['a', 'b', 'a', 'c', 'a', 'b'], 'a');  // 3
//
export default function countOccurrencesByValue(arr, val) {
  return arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
}
