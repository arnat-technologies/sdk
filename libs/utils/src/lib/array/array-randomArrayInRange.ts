// Generate an array of random integers in a given range
//
//
//
// // Example
// randomArrayInRange(1, 100, 10);     // [11, 82, 41, 35, 76, 83, 43, 15, 60, 54]
//
import isNumber from '../misc/misc-isNumber';

export default function randomArrayInRange(min, max, n) {
  if (!isNumber(min) || !isNumber(max) || !isNumber(n))
    throw new Error('should pass only value numbers as parameters');

  return Array.from(
    { length: +n },
    () => Math.floor(Math.random() * (+max - +min + 1)) + +min
  );
}
