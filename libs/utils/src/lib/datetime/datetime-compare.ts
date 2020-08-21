// Compare two dates
//
//
// // Example
// compare(new Date('2020-03-30'), new Date('2020-01-01'));    // true
// `a` and `b` are `Date` instances
export const compare = (a, b) => a.getTime() > b.getTime();
