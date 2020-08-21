// remove an item from an array
//
// Example
// removeItem([2, '4', null, 'hello', 10.56], null); // [2, '4', 'hello', 10.56]
//
export default function removeItem(arr, item) {
  if (!Array.isArray(arr))
    throw new Error('should pass an array as first argument');

  return arr.filter((el) => el !== item);
}
