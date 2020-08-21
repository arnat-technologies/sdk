//
// Count the occurrences of a value in an array
//
//  // Examples
//  countOccurrences([2, 1, 3, 3, 2, 3], 2);                // 2
//  countOccurrences(['a', 'b', 'a', 'c', 'a', 'b'], 'a');  // 3
//
export const countOccurrences = (arr, val) =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

// Count the occurrences of array elements
//
//
//  // Examples
//  countOccurrences([2, 1, 3, 3, 2, 3]);               // { '1': 1, '2': 2, '3': 3 }
//  countOccurrences(['a', 'b', 'a', 'c', 'a', 'b']);   // { 'a': 3, 'b': 2, 'c': 1 }
//
export const countOccurrences = (arr) =>
  arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});
