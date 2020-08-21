// standardDeviation([1, 2, 3, 2, 4, 1]); // 1.16904519
// standardDeviation(3, 2, 1); // 1
// standardDeviation([100, 100, 100.1, 100]); // 0.05
// standardDeviation(1, 2, 3, 4, 5, -6); // 3.9370039
// standardDeviation([4]); // throws
// standardDeviation(["3", 2]); // throws
// standardDeviation(NaN, NaN); // throws
// standardDeviation(); // throws

export default function standardDeviation(...args) {
  let arr = args;
  if (arr.length === 1) arr = args[0];
  if (!arr.length || arr.length < 2) {
    throw new Error('less than one value was passed to `standard deviation`');
  }

  let sum = 0;
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    const n = arr[i];
    if (!Number.isFinite(n)) {
      throw new Error(
        'all values passed to `standard deviation` must be numeric'
      );
    }
    sum += n;
  }
  const mean = sum / len;

  let acc = 0;
  for (let i = 0; i < len; i++) {
    const n = arr[i];
    acc += (n - mean) * (n - mean);
  }
  return Math.sqrt(acc / (len - 1));
}
