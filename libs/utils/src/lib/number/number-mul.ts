// Multiply arguments
//
//
// // Example
// mul(1, 2, 3, 4);    // 24
//
export default function mul(...args) {
  return args.reduce((a, b) => a * b);
}
