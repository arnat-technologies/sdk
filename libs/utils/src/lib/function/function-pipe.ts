// Compose functions from left to right
//
//
// // Example
// const lowercase = str => str.toLowerCase();
// const capitalize = str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
// const reverse = str => str.split('').reverse().join('');
//
// const fn = pipe(lowercase, capitalize, reverse);
//
// // We will execute `lowercase`, `capitalize` and `reverse` in order
// fn('Hello World') === 'dlrow olleH';
// Compose functions from left to right
export default function (...fns) {
  return (x) => fns.reduce((y, f) => f(y), x);
}
