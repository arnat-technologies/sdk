// Check if a number is a power of 2
//
//
// // Examples
// isPowerOfTwo(256);      // true
// isPowerOfTwo(129);      // false
//
export default function isPowerOfTwo(number) {
  return (number & (number - 1)) === 0;
}
