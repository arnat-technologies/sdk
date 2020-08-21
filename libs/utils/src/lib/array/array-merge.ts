// Merge two arrays
// third parameter is used to remove duplicate values
//
// Merge but don't remove the duplications
export default function merge(a, b, removeDuplicates = false) {
  if (!Array.isArray(a) || !Array.isArray(b))
    throw new Error('should pass an array as parameter');

  if (removeDuplicates) {
    return [...new Set(a.concat(b))];
  }
  return a.concat(b);
}
