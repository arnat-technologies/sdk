// Compute the greatest common divisor between two numbers
//
//
// // Example
// gcd(10, 15);    // 5
//
export default function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}
