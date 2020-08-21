// Calculate the division of arguments
//
//
// // Example
// division(1, 2, 3, 4);   // 0.04166666666666666
//
export default function division(...args) {
  return args.reduce((a, b) => a / b);
}
