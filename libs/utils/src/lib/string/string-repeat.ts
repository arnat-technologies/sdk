// Repeat a string
//
// Or
export default function repeat(str, numberOfTimes) {
  numberOfTimes++;
  return Array(numberOfTimes).join(str);
}
