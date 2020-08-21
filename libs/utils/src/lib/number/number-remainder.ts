// Calculate the remainder of division of arguments
//
//
// // Example
// remainder(1, 2, 3, 4);      // 1
//
export default function remainder(...args) {
  return args.reduce((a, b) => a % b);
}
