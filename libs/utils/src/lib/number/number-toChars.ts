// Convert a number to equivalent characters
//
//
// // Examples
// toChars(0);     // A
// toChars(1);     // B
// toChars(25);    // Z

// toChars(26);     // AA
// toChars(27);     // AB
// toChars(51);     // AZ

// toChars(701);   // ZZ
// toChars(702);   // AAA
// toChars(703);   // AAB
//
export default function toChars(n) {
  return `${n >= 26 ? toChars(Math.floor(n / 26) - 1) : ''}${
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[n % 26]
  }`;
}
