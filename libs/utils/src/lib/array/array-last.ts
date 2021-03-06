/*
  last([1, 2, 3, 4, 5]); // 5
  last([{a: 1}, {b: 1}, {c: 1}]); // {c: 1}
  last([true, false, [true, false]]); // [true, false]
  last({}); // throws
  last(); // throws
*/

export default function last(arr?) {
  if (!arr || !Array.isArray(arr)) {
    throw new Error('expected an array');
  }
  return arr[arr.length - 1];
}
