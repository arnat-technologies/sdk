// Check if a value is a number
//
export default function isNumber(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}
