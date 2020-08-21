// Check if a number is negative
//
//
// // Examples
// isNegative(-3);     // true
// isNegative(8);      // false
//
export default function isNegative(number) {
  return Math.sign(number) === -1;
}
