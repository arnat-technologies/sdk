/*
  remove([1, 2, 3, 4, 5, 6], [1, 3, 6]); // [2, 4, 5]
*/

export default function remove(arr1?, arr2?) {
  if (!arr1 || !arr2 || !Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new Error('expected both arguments to be arrays');
  }
  const result = [];
  const len = arr1.length;
  for (let i = 0; i < len; i++) {
    const elem = arr1[i];
    if (arr2.indexOf(elem) == -1) {
      result.push(elem);
    }
  }
  return result;
}
