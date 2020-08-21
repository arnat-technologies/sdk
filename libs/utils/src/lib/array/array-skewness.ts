// skewness(3, 2, 1); // 0
// skewness([1, 2, 3, 2, 4, 1]); // 0.4276994613841504
// skewness(1, 2, 3, 4, 5, -6); // -0.762000762001143
// skewness([1, 2, 3, 4, 9]); // 0.7705935588815224
// skewness([4]); // throws
// skewness(["3", 2]); // throws
// skewness(NaN, NaN); // throws
// skewness(); // throws

export default function skewness(...args) {
  let arr = args;
  if (args.length === 1) arr = args[0];
  if (!Array.isArray(arr)) arr = [arr];
  if (!arr.length || arr.length < 2) {
    throw new Error('less than one value was passed to `skewness`');
  }

  let median;

  // standard deviation
  let sum = 0;
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    const n = arr[i];
    if (!Number.isFinite(n)) {
      throw new Error('all values passed to `skewness` must be numeric');
    }
    sum += n;
  }
  const mean = sum / len;

  let acc = 0;
  for (let i = 0; i < len; i++) {
    const n = arr[i];
    acc += (n - mean) * (n - mean);
  }
  const standardDeviation = Math.sqrt(acc / (len - 1));

  // median
  if (arr.length == 1) {
    median = arr[0];
  }
  const sorted = arr.sort(function (a, b) {
    return a >= b ? 1 : -1;
  });
  const lowerMiddleRank = Math.floor(arr.length / 2);
  median =
    arr.length / 2 != lowerMiddleRank
      ? sorted[lowerMiddleRank]
      : (sorted[lowerMiddleRank] + sorted[lowerMiddleRank - 1]) / 2;

  // Pearson's second skewness coefficient (median skewness)
  return (3 * (mean - median)) / standardDeviation;
}
