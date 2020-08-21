// percentile([1, 2, 3], 0); // 1
// percentile([1, 2, 3], 50); // 2
// percentile([1, 2, 3], 100); // 3

// // See https://en.wikipedia.org/wiki/Percentile (linear interpolation method)
// percentile([15, 20, 35, 40, 50], 5); // 15
// percentile([15, 20, 35, 40, 50], 30); // 20
// percentile([15, 20, 35, 40, 50], 40); // 27.5
// percentile([15, 20, 35, 40, 50], 95); // 50

// percentile(1, 2, 3, 50); // throws
// percentile(['1', 2, 3], 50); // throws
// percentile([], 50); // throws

// Using linear interpolation method
// https://en.wikipedia.org/wiki/Percentile

export default function percentile(arr, percentileValue, ...args) {
  if (args.length || !Array.isArray(arr)) {
    throw new Error('the argument to `percentile` must be an array');
  }
  if (!arr.length) {
    throw new Error('no values were passed to `percentile`');
  }
  if (arr.length == 1) {
    if (Number.isFinite(arr[0])) {
      return arr[0];
    } else {
      throw new Error('all values passed to `percentile` must be numeric');
    }
  }
  const sorted = arr.sort(function (a, b) {
    if (!Number.isFinite(a)) {
      throw new Error('all values passed to `percentile` must be numeric');
    }
    return a >= b ? 1 : -1;
  });
  const percentileRank = Math.min(
    Math.max((arr.length * percentileValue) / 100 - 0.5, 0),
    arr.length - 1
  );
  const lowerInt = Math.floor(percentileRank);
  if (percentileRank == lowerInt) {
    return sorted[lowerInt];
  } else {
    const upperInt = Math.ceil(percentileRank);
    return (
      sorted[lowerInt] +
      (percentileRank - lowerInt) * (sorted[upperInt] - sorted[lowerInt])
    );
  }
}
