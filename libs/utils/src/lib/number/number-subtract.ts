// Subtract arguments
//
//
// // Example
// subtract(1, 2, 3, 4);       // -8
//
export default function subtract(...args) {
  return args.reduce((a, b) => a - b);
}
