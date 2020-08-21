// mean([1, 2, 3, 2, 4, 1]); // 2.1666666667
// mean(3, 2, 1); // 2
// mean([4]); // 4
// mean(['3', 2]); // throws
// mean(); // throws

export default function mean(...args) {
  let arr = args;
  if (args.length === 1) arr = args[0];
  if (!Array.isArray(arr)) arr = [arr];
  if (!arr.length) {
    throw new Error('no values were passed to `mean`');
  }

  let sum = 0;
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    const n = arr[i];
    if (!Number.isFinite(n)) {
      throw new Error('all values passed to `mean` must be numeric');
    }
    sum += n;
  }
  return sum / len;
}
