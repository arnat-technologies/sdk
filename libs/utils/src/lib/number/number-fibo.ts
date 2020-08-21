// Calculate fibonacci numbers
//
//
// // Examples
// fibo(1);    // 1
// fibo(2);    // 1
// fibo(3);    // 2
// fibo(4);    // 3
// fibo(5);    // 5
// fibo(6);    // 8
//
export default function fibo(n, memo = {}) {
  return (
    memo[n] || (n <= 2 ? 1 : (memo[n] = fibo(n - 1, memo) + fibo(n - 2, memo)))
  );
}
