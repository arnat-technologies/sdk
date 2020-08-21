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

// Check if a string is a hexadecimal color
//
//
//  // Examples
//  isHexColor('#012');         // true
//  isHexColor('#A1B2C3');      // true
//  isHexColor('012');          // false
//  isHexColor('#GHIJKL');      // false
//
export const isHexColor = (color) =>
  /^#([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i.test(color);

// Check if a string contains only ascii characters
//
export const isAscii = (str) => /^[\x00-\x7F]+$/.test(str);

// Check if a string contains only letters and numbers
//
//
//  // Examples
//  isAlphanumeric('helloworld');           // true
//  isAlphanumeric('HelloWorld');           // true
//  isAlphanumeric('hello world');          // false
//  isAlphanumeric('hello123');             // true
//  isAlphanumeric('hello 123');            // false
//
export const isAlphanumeric = (str) => /^[0-9A-Z]+$/i.test(str);
