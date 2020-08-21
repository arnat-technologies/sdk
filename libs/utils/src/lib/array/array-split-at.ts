// splitAt([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4, 5]]
// splitAt([{a: 1}, {b: 1}, {c: 1}], -1); // [[{a: 1}, {b: 1}], [{c: 1}]]
// splitAt([], 2); // [[], []]
// splitAt(null, 1); // undefined
// splitAt(undefined, 1); // undefined

export default function splitAt(arr, n) {
  if (!arr || !Array.isArray(arr)) {
    throw new Error('expected an array for the first argument');
  }
  if (n != null && typeof n != 'number') {
    throw new Error('expected a number or null for the second argument');
  }
  if (n == null) {
    n = 0;
  }
  return [arr.slice(0, n), arr.slice(n)];
}
