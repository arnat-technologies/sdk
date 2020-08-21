// Create an object from the pairs of key and value
//
//
// // Example
// toObj([['a', 1], ['b', 2], ['c', 3]]);      // { a: 1, b: 2, c: 3 }
//
export const toObj = (arr) => Object.fromEntries(arr);
//
//Or
export const toObj = (arr) => arr.reduce((a, c) => ((a[c[0]] = c[1]), a), {});
