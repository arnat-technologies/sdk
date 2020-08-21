// Split an array into chunks
//
//
// // Examples
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3);     // [[1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 4);     // [[1, 2, 3, 4], [5, 6, 7, 8]]
export default function chunk(arr, size?) {
  if (!size) throw new Error('size should be provided');

  return arr.reduce(
    (acc, e, i) => (
      i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc
    ),
    []
  );
}
