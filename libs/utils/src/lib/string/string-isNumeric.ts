// Check if a string contains only digits
//
//
// // Examples
// isNumeric(2);               // true
// isNumeric('23');            // true
// isNumeric('00123');         // true
//
// isNumeric('1.23');          // false
// isNumeric('-Infinity');     // false
// isNumeric('Infinity');      // false
// isNumeric('NaN');           // false
//
export default function isNumeric(str) {
  return !/[^0-9]/.test(str);
}
