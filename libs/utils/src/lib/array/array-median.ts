// median([1, 2, 3, 4, 5]); // 5
// median([3, -1, 2]); // 2
// median([9, 14, 14, 200, 15]); // 14
// median(1, 2, 4, 3); // 2.5
// median(['3', 2, 1]); // throws
// median(); // throws

export default function median(arr) {
  if (!Array.isArray(arr)) {
    arr = [].slice.call(arguments);
  }
  if (!arr.length) {
    throw new Error('no values were passed to `median`');
  }
  if (arr.length == 1) {
    if (Number.isFinite(arr[0])) {
      return arr[0];
    } else {
      throw new Error('all values passed to `median` must be numeric');
    }
  }
  const sorted = arr.sort(function (a, b) {
    if (typeof a != 'number') {
      throw new Error('all values passed to `median` must be numeric');
    }
    return a >= b ? 1 : -1;
  });
  const lowerMiddleRank = Math.floor(arr.length / 2);
  return arr.length / 2 != lowerMiddleRank
    ? sorted[lowerMiddleRank]
    : (sorted[lowerMiddleRank] + sorted[lowerMiddleRank - 1]) / 2;
}
