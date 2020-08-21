// Remove spaces from a string
//
//
// // Example
// removeSpaces('hel lo wor ld');      // 'helloworld'
//
export default function removeSpaces(str: string) {
  return str.replace(/\s/g, '');
}
