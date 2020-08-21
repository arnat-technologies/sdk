// tail([1, 2, 3, 4, 5]); // [2, 3, 4, 5]
// tail([{a: 1}, {b: 1}, {c: 1}]); // [{b: 1}, {c: 1}]
// tail([true, false, [true, false]]); // [false, [true, false]]
// tail([]); // []
// tail(); // undefined
// tail(null); // undefined
// tail(undefined); // undefined
// tail(); // throws

export default function tail(arr?) {
  if (!Array.isArray(arr)) {
    throw new Error('expected an array');
  }
  return arr.slice(1);
}
