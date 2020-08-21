// Partially apply a function
//
//
// // Example
// const sum = (x, y) => x + y;
// const inc = partial(sum, 1);
// inc(9);     // 10
export const partial = (fn, ...a) => (...b) => fn(...a, ...b);
