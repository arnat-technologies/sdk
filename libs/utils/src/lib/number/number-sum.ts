// Calculate the sum of arguments
//
//
// // Example
// sum(1, 2, 3, 4);    // 10
//
export default function sum(...args) {
  return args.reduce((a, b) => a + b);
}
