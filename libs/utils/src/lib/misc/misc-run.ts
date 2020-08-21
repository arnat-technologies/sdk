// Run promises in sequence
//
//
// // Example
// run(promises).then((results) => {
//     // `results` is an array of promise results in the same order
// });
// `promises` is an array of `Promise`
//
export const run = (promises) =>
  promises.reduce(
    (p, c) => p.then((rp) => c.then((rc) => [...rp, rc])),
    Promise.resolve([])
  );
