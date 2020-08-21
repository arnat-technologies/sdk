// Flatten an array
// //
// //
// // Example
// flat(['cat', ['lion', 'tiger']]);   // ['cat', 'lion', 'tiger']
export default function flat(arr) {
  return arr.reduce(
    (a, b) => (Array.isArray(b) ? [...a, ...flat(b)] : [...a, b]),
    []
  );
}
