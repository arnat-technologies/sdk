// Get a random item from an array
export default function randomItem(arr) {
  return arr[(Math.random() * arr.length) | 0];
}
