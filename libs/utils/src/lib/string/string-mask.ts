//
// Replace the first given number of characters of a string
//
//
//  // Example
//  mask(1234567890, 3, '*');       // ***4567890
//
export default function mask(str, num = 3, mask = '*') {
  return `${str}`.slice(num).padStart(`${str}`.length, mask);
}
