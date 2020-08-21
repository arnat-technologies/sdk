// Calculate the factorial of a number
//
//
// // Examples
// factorial(2);   // 2
// factorial(3);   // 6
// factorial(4);   // 24
// factorial(5);   // 120
// factorial(6);   // 720
//
export default function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}
