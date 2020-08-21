// Generate a random floating point number in given range
//
export default function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}
