/*
  leftPad('hello', 9); // '    hello'
  leftPad('hello', 3); // 'hello'
  leftPad('hello', 9, '.'); // '....hello'
  leftPad('hello', 9, '..'); // '....hello'
  leftPad('hello', 10, 'ab'); // 'bababhello'
  leftPad('hello', 9, '\uD83D\uDC04'); // '🐄🐄🐄🐄hello'
  leftPad('hello', 10, '\uD83D\uDC11\uD83D\uDC04'), // '🐄🐑🐄🐑🐄hello'
  leftPad('hello', 7, '🐄'), // '🐄🐄hello'
  leftPad(null, 7); // throws
  leftPad([], 4, '*'); // throws
  leftPad('hello', 4, true); // throws
  leftPad('hello', -4, true); // throws
  leftPad('hello', 2.3, true); // throws
*/

const surrogatePairRegEx = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;

export default function leftPad(str, length, padStr?) {
  if (
    typeof str != 'string' ||
    (arguments.length > 2 && typeof padStr != 'string') ||
    !(isFinite(length) && length >= 0 && Math.floor(length) === length)
  ) {
    throw Error(
      '1st and 3rd args must be strings, 2nd arg must be a positive integer'
    );
  }
  if (padStr == null || padStr == '') {
    padStr = ' ';
  }
  const strLen = str.length - (str.match(surrogatePairRegEx) || []).length;
  const padStrLen = padStr.length;
  const surrPairsInPad = (padStr.match(surrogatePairRegEx) || []).length;
  if (surrPairsInPad && padStrLen / surrPairsInPad != 2) {
    throw Error('padding mixes regular characters and surrogate pairs');
  }

  if (!length || length <= strLen) {
    return str;
  }
  let padCount = Math.floor((length - strLen) / padStrLen);
  let padRemainder = (length - strLen) % padStrLen;
  if (surrPairsInPad) {
    padCount = 2 * padCount;
    padRemainder = 2 * padRemainder;
  }
  return (padRemainder ? [padStr.slice(-padRemainder)] : [])
    .concat(new Array(padCount + 1).join(padStr))
    .concat(str)
    .join('');
}
