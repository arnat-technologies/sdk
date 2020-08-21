// Find the closest number from an array
//
//
// Example
// closest([29, 87, 8, 78, 97, 20, 75, 33, 24, 17], 50);   // 33
//
// Find the number from `arr` which is closest to `n`
export default function closest(arr, n?) {
  return arr.reduce((prev, curr) =>
    Math.abs(curr - n) < Math.abs(prev - n) ? curr : prev
  );
}
