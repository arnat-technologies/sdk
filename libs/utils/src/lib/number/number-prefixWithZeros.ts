// Prefix an integer with zeros
//
//
// // Example
// prefixWithZeros(42, 5);     // '00042'
//
export default function prefixWithZeros(number, length) {
  return (number / Math.pow(10, length)).toFixed(length).substr(2);
}
