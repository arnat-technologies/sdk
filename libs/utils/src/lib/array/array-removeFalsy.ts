// Remove falsy values from array
// //
// // Example
// removeFalsy([0, 'a string', '', NaN, true, 5, undefined, 'another string', false]); // ['a string', true, 5, 'another string']
//
export default function removeFalsy(arr) {
  return arr.filter(Boolean);
}
