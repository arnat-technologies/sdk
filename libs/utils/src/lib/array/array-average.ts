// Get the average of an array
export default function average(arr, ...args) {
  if (args.length) throw new Error('expected only one parameter as array');

  if (!Array.isArray(arr)) throw new Error('expected an array as parameter');
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}
