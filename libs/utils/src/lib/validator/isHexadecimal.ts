//
// Check if a string is a hexadecimal number
//
//
//  // Examples
//  isHexadecimal('123');       // true
//  isHexadecimal('A1B2C3');    // true
//  isHexadecimal('#123');      // false
//
export const isHexadecimal = (str) => /^[A-F0-9]+$/i.test(str);
