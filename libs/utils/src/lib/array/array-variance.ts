// variance([1, 2, 3, 2, 4, 1]); // 1.3666666667
// variance(3, 2, 1); // 1
// variance([100, 100, 100.1, 100]); // 0.0025
// variance(1, 2, 3, 4, 5, -6); // 15.5
// variance([4]); // throws
// variance(['3', 2]); // throws
// variance(NaN, NaN); // throws
// variance(); // throws

export default function variance(...args) {
  let arr = args;
  if (arr.length === 1) arr = arr[0];
  if (!Array.isArray(arr)) {
    arr = [arr];
  }
  if (!arr.length || arr.length < 2) {
    throw new Error('less than one value was passed to `variance`');
  }

  let sum = 0;
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    const n = arr[i];
    if (!Number.isFinite(n)) {
      throw new Error('all values passed to `variance` must be numeric');
    }
    sum += n;
  }
  const mean = sum / len;

  let acc = 0;
  for (let i = 0; i < len; i++) {
    const n = arr[i];
    acc += (n - mean) * (n - mean);
  }
  return acc / (len - 1);
}
