// Flip the arguments of a function
//
//
// // Example
// const isParent = (parent, child) => parent.children.includes(child);
// const isChild = flip(isParent);
//
// Reverse the order of arguments
export const flip = (fn) => (...args) => fn(...args.reverse());
//
// For binary functions
export const flip = (fn) => (b, a) => fn(a, b);
//
// Or for curried functions
export const flip = (fn) => (b) => (a) => fn(a)(b);
