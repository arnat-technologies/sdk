// compact([1, null, 2, undefined, null, NaN, 3, 4, false, 5]); // [1, 2, 3, 4, 5]
// compact([1, 2, [], 4, {}]); // [1, 2, [], 4, {}]
// compact([]); // []
// compact({}); // undefined

export default function compact(arr?) {
  if (!arr || !Array.isArray(arr)) {
    throw new Error('expected an array');
  }
  const result = [];
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    const elem = arr[i];
    if (elem) {
      result.push(elem);
    }
  }
  return result;
}
