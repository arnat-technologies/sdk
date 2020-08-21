// mode([1, 2, 3, 2]); // 2
// mode(4, 4, 1, 4); // 4
// mode(100, 100, 101, 101); // [100, 101]
// mode(4, 3, 2, 1); // [1, 2, 3, 4]
// mode(['1', 2, 2, 1, 2]); // throws
// mode(null); // throws

export default function mode(...args) {
  let arr = args;
  if (args.length === 1) arr = args[0];
  if (!Array.isArray(arr)) arr = [arr];
  const map = {};
  const ArrLen = arr.length;
  for (let i = 0; i < ArrLen; i++) {
    const n = arr[i];
    if (!Number.isFinite(n)) {
      throw new Error('all values passed to `mode` must be numeric');
    }
    n in map ? map[n]++ : (map[n] = 1);
  }

  const mapKeys = Object.keys(map);
  const mapKeysLen = mapKeys.length;
  if (!mapKeysLen) {
    throw new Error('no values were passed to `mode`');
  }
  let maxOccurences = -1;
  let result;
  for (let i = 0; i < mapKeysLen; i++) {
    const thisKey = mapKeys[i];
    if (map[thisKey] > maxOccurences) {
      result = [Number(thisKey)];
      maxOccurences = map[thisKey];
    } else if (map[thisKey] == maxOccurences) {
      result.push(Number(thisKey));
    }
  }
  return result.length > 1
    ? result.sort(function (a, b) {
        return a >= b ? 1 : -1;
      })
    : result[0];
}
