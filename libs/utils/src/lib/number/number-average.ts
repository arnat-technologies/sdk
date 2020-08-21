// Calculate the average of arguments
//
//
// // Example
// average(1, 2, 3, 4);    // 2.5
//
export default function average(...args) {
  return args.reduce((a, b) => a + b) / args.length;
}
