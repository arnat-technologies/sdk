// Execute a function once
//
//
// // Example
// let n = 0;
// const incOnce = once(() => ++n);
// incOnce();      // n = 1
// incOnce();      // n = 1
// incOnce();      // n = 1
//
const once = (fn) =>
  ((ran = false) => () => (ran ? fn : ((ran = !ran), (fn = fn()))))();

export default once;
