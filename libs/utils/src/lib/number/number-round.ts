// Round a number to a given number of digits
//
//
// // Examples
// round(1.234567, 3);     // 1.235
// round(1.234567, 4);     // 1.2346
//
export default function round(n: number, decimals: number) {
  const factor = Math.pow(10, decimals);
  const tempNumber = n * factor;
  const roundedTempNumber = Math.round(tempNumber);
  return roundedTempNumber / factor;
}
