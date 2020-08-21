// Sort an array of dates
//
// `arr` is an array of `Date` items
export const sortDescending = (arr) =>
  arr.sort((a, b) => a.getTime() > b.getTime());
