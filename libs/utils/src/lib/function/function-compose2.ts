// Compose functions
//
//
// // Example
// const lowercase = str => str.toLowerCase();
// const capitalize = str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
// const reverse = str => str.split('').reverse().join('');
//
// const fn = compose(reverse, capitalize, lowercase);
//
// // We will execute `lowercase`, `capitalize` and `reverse` in order
// fn('Hello World') === 'dlrow olleH';
//
// Compose functions from right to left
export default function (...fns) {
  return (x) => fns.reduceRight((y, f) => f(y), x);
}
