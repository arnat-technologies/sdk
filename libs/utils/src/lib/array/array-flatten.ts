/*
  flatten([[1, [2, 3]], [[4, 5], 6, 7, [8, 9]]]);
  // [1, 2, 3, 4, 5, 6, 7, 8, 9]
*/

export default function flatten(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('expected an array');
  }
  const result = [];
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    const elem = arr[i];
    if (Array.isArray(elem)) {
      result.push.apply(result, flatten(elem));
    } else {
      result.push(elem);
    }
  }
  return result;
}
