// Check if a number is in a given range
//
//
// // Example
// inRange(10, 5, 15);         // true
// inRange(10, 5, 6);          // false
// inRange(10, 15, 5);         // true
// inRange(-10, -5, -15);      // true
//
export default function inRange(num, a, b) {
  return Math.min(a, b) <= num && num < Math.max(a, b);
}
