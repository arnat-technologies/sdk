/*
  union([1, 2, 5, 6], [2, 3, 4, 6]); // [1, 2, 3, 4, 5, 6]
*/

export default function union(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new Error('expected both arguments to be arrays');
  }
  const result = arr1.concat([]);
  const len = arr2.length;
  for (let i = 0; i < len; i++) {
    const elem = arr2[i];
    if (arr1.indexOf(elem) == -1) {
      result.push(elem);
    }
  }
  return result;
}
