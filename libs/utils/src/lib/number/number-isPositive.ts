// Check if a number is positive
//
//
// // Examples
// isPositive(3);      // true
// isPositive(-8);     // false
//
export default function isPositive(number: number) {
  return number % 2 !== 0;
}
