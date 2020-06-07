// getting inspired by: https://1loc.dev

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
export const addOrdinal = (n) =>
  `${n}${['st', 'nd', 'rd'][((((n + 90) % 100) - 10) % 10) - 1] || 'th'}`;
//
// Or
export const addOrdinal = (n) => `${n}${[, 'st', 'nd', 'rd'][/1?.$/.exec(n)] || 'th'}`;
//
// Or
export const addOrdinal = (n) =>
  `${n}${[, 'st', 'nd', 'rd'][(n % 100 >> 3) ^ 1 && n % 10] || 'th'}`;
//
// Or
export const addOrdinal = (n) =>
  `${n}${
    { one: 'st', two: 'nd', few: 'rd', other: 'th' }[
      new Intl.PluralRules('en', { type: 'ordinal' }).select(n)
    ]
  }`;

// Calculate fibonacci numbers
//
//
// // Examples
// fibo(1);    // 1
// fibo(2);    // 1
// fibo(3);    // 2
// fibo(4);    // 3
// fibo(5);    // 5
// fibo(6);    // 8
//
export const fibo = (n, memo = {}) =>
  memo[n] || (n <= 2 ? 1 : (memo[n] = fibo(n - 1, memo) + fibo(n - 2, memo)));

// Calculate the average of arguments
//
//
// // Example
// average(1, 2, 3, 4);    // 2.5
//
export const average = (...args) => args.reduce((a, b) => a + b) / args.length;

// Calculate the division of arguments
//
//
// // Example
// division(1, 2, 3, 4);   // 0.04166666666666666
//
export const division = (...args) => args.reduce((a, b) => a / b);

// Calculate the factorial of a number
//
//
// // Examples
// factorial(2);   // 2
// factorial(3);   // 6
// factorial(4);   // 24
// factorial(5);   // 120
// factorial(6);   // 720
//
export const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

// Calculate the mod of collection index
//
// // Examples
// mod(-1, 5);     // 4
// mod(3, 5);      // 3
// mod(6, 5);      // 1
//
export const mod = (a, b) => ((a % b) + b) % b;

// Calculate the remainder of division of arguments
//
//
// // Example
// remainder(1, 2, 3, 4);      // 1
//
export const remainder = (...args) => args.reduce((a, b) => a % b);

// Calculate the sum of arguments
//
//
// // Example
// sum(1, 2, 3, 4);    // 10
//
export const sum = (...args) => args.reduce((a, b) => a + b);

// Check if a given integer is a prime number
//
export const isPrime = (num) =>
  num > 1 &&
  Array(Math.floor(Math.sqrt(num)) - 1)
    .fill(0)
    .map((_, i) => i + 2)
    .every((i) => num % i !== 0);

// Check if a number is a power of 2
//
//
// // Examples
// isPowerOfTwo(256);      // true
// isPowerOfTwo(129);      // false
//
export const isPowerOfTwo = (number) => (number & (number - 1)) === 0;

// Check if a number is even
//
//
// // Examples
// isEven(1);      // false
// isEven(2);      // true
//
export const isEven = (number) => number % 2 === 0;
//
// or
export const isEven = (number) => number & (1 !== 0);
//
// or
export const isEven = (number) => !(number & 1);

// Check if a number is in a given range
//
//
// // Example
// inRange(10, 5, 15);         // true
// inRange(10, 5, 6);          // false
// inRange(10, 15, 5);         // true
// inRange(-10, -5, -15);      // true
//
export const inRange = (num, a, b) => Math.min(a, b) <= num && num < Math.max(a, b);

// Check if a number is negative
//
//
// // Examples
// isNegative(-3);     // true
// isNegative(8);      // false
//
export const isNegative = (number) => Math.sign(number) === -1;

// Check if a number is odd
//
//
// // Examples
// isOdd(1);   // true
// isOdd(2);   // false
//
export const isOdd = (number) => number % 2 !== 0;

// Check if a number is positive
//
//
// // Examples
// isPositive(3);      // true
// isPositive(-8);     // false
//
export const isPositive = (number) => Math.sign(number) === 1;

// Clamp a number between two values
//
//
// // Example
// clamp(199, 10, 25);     // 25
//
export const clamp = (val, min = 0, max = 1) => Math.max(min, Math.min(max, val));

// Compute the greatest common divisor between two numbers
//
//
// // Example
// gcd(10, 15);    // 5
//
export const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

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
export const toChars = (n) =>
  `${n >= 26 ? toChars(Math.floor(n / 26) - 1) : ''}${'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[n % 26]}`;

// Convert a string to number
//
//
// // Example
// toNumber('42');     // 42
//
export const toNumber = (str) => +str;

// Convert degrees to radians
//
export const degsToRads = (deg) => (deg * Math.PI) / 180.0;
//
export const radsToDegs = (rad) => (rad * 180) / Math.PI;

// Generate a random floating point number in given range
//
export const randomFloat = (min, max) => Math.random() * (max - min) + min;

// Generate a random integer in given range
//
export const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Get the arrays of digits from a number
//
//
// // Example
// digits(123);    // [1, 2, 3]
//
export const digits = (n) => `${n}`.split('').map((v) => parseInt(v));

// Multiply arguments
//
//
// // Example
// mul(1, 2, 3, 4);    // 24
//
export const mul = (...args) => args.reduce((a, b) => a * b);

// Prefix an integer with zeros
//
//
// // Example
// prefixWithZeros(42, 5);     // '00042'
//
export const prefixWithZeros = (number, length) =>
  (number / Math.pow(10, length)).toFixed(length).substr(2);
//
// Or
export const prefixWithZeros = (number, length) =>
  `${Array(length).join('0')}${number}`.slice(-length);
//
// Or
export const prefixWithZeros = (number, length) => String(number).padStart(length, '0');

// Round a number to a given number of digits
//
//
// // Examples
// round(1.234567, 3);     // 1.235
// round(1.234567, 4);     // 1.2346
//
export const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);

// Subtract arguments
//
//
// // Example
// subtract(1, 2, 3, 4);       // -8
//
export const subtract = (...args) => args.reduce((a, b) => a - b);

// Truncate a number to a given number of decimal places without rounding
//
//
// // Examples
// toFixed(25.198726354, 1);       // 25.1
// toFixed(25.198726354, 2);       // 25.19
// toFixed(25.198726354, 3);       // 25.198
// toFixed(25.198726354, 4);       // 25.1987
// toFixed(25.198726354, 5);       // 25.19872
// toFixed(25.198726354, 6);       // 25.198726
//
export const toFixed = (n, fixed) => `${n}`.match(new RegExp(`^-?\\d+(?:\.\\d{0,${fixed}})?`))[0];
