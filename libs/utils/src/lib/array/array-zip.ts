// zip([1, 2, 3]); // [[1], [2], [3]]
// zip([1, 2, 3], ["a", "b", "c"]); // [[1, 'a'], [2, 'b'], [3, 'c']]
// zip([1, 2], ["a", "b"], [true, false]); // [[1, 'a', true], [2, 'b', false]]
// zip([1, 2, 3], ["a", "b"], [true]); // [[1, 'a', true], [2, 'b', undefined], [3, undefined, undefined]]
// zip(undefined, {}, false, 1, "foo"); // throws
// zip([1, 2], ["a", "b"], undefined, {}, false, 1, "foo"); // throws

export default function zip(...args) {
  const result = [];
  const argsLen = args.length;
  let maxLen = 0;
  let i, j;

  if (!argsLen) {
    throw new Error('zip requires at least one argument');
  }

  for (i = 0; i < argsLen; i++) {
    if (!Array.isArray(args[i])) {
      throw new Error('all arguments must be arrays');
    }
    const arrLen = args[i].length;
    if (arrLen > maxLen) {
      maxLen = arrLen;
    }
  }

  for (i = 0; i < maxLen; i++) {
    const group = [];
    for (j = 0; j < argsLen; j++) {
      if (!Array.isArray(args[j])) {
        throw new Error('all arguments must be arrays');
      }
      group[j] = args[j][i];
    }
    result[i] = group;
  }

  return result;
}
