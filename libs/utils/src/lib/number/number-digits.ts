// Get the arrays of digits from a number
//
//
// // Example
// digits(123);    // [1, 2, 3]
//
export default function digits(n) {
  return `${n}`.split('').map((v) => parseInt(v));
}
