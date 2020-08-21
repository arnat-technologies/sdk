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
