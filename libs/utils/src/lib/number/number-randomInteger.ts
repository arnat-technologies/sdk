// Generate a random integer in given range
//
export default function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
