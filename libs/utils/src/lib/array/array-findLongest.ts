// Find the length of the longest string in an array
//
// //
// // Example
// findLongest(['always','look','on','the','bright','side','of','life']);  // 6
export default function findLongest(words) {
  return Math.max(...words.map((el) => el.length));
}
