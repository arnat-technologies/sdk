// Add an ordinal suffix to a number
//
//
//
// // Examples
// addOrdinal(1);      // '1st'
// addOrdinal(2);      // '2nd'
// addOrdinal(3);      // '3rd'
// addOrdinal(11);     // '11th'
// addOrdinal(12);     // '13th'
// addOrdinal(13);     // '13th'
//
// `n` is a position number
export default function addOrdinal(n) {
  return `${n}${
    ['st', 'nd', 'rd'][((((n + 90) % 100) - 10) % 10) - 1] || 'th'
  }`;
}
