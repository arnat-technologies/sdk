// Curry a function
//
//
// // Example
// const sum = (a, b, c) => a + b + c;
// curry(sum)(1)(2)(3);    // 6
// curry(sum)(1, 2, 3);    // 6
// curry(sum, 1)(2, 3);    // 6
// curry(sum, 1)(2)(3);    // 6
// curry(sum, 1, 2)(3);    // 6
// curry(sum, 1, 2, 3);    // 6
//
const curry = (fn, ...args) =>
  fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);

export default curry;
