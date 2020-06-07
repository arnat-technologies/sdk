// getting inspired by: https://1loc.dev


//  Check if a value is a function
//
// // Examples
// isFunction(function() {});          // true
// isFunction(function*() {});         // true
// isFunction(async function() {});    // true
const isFunction = v => ['[object Function]', '[object GeneratorFunction]', '[object AsyncFunction]', '[object Promise]'].includes(Object.prototype.toString.call(v));

// Check if a value is a generator function
//
// // Examples
// isGeneratorFunction(function() {});     // false
// isGeneratorFunction(function*() {});    // true
const isGeneratorFunction = v => Object.prototype.toString.call(v) === '[object GeneratorFunction]';

// Check if a value is an async function
//
// // Examples
// isAsyncFunction(function() {});         // false
// isAsyncFunction(function*() {});        // false
// isAsyncFunction(async function() {});   // true
const isAsyncFunction = v => Object.prototype.toString.call(v) === '[object AsyncFunction]';

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
const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

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
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);

// Create an empty function
//
const noop = () => {};
//
// Or
const noop = Function();
// calling Function() might be detected as using eval by some security tools

// Curry a function
//
//
// // Example
// const sum = (a, b, c) => a + b + c;
// curry(sum)(1)(2)(3);    // 6
// curry(sum)(1, 2, 3);    // 6
// curry(sum, 1)(2, 3);    // 6
// curry(sum, 1)(2)(3);    // 6
// curry(sum, 1, 2)(3);    // 6
// curry(sum, 1, 2, 3);    // 6
//
const curry = (fn, ...args) => fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);

// Delay the evaluation of a function
//
//
// // Example
// const heavyComputation = x => doStuff(x);
// const unnecessarySlow = manyThings.map(heavyComputation)
//     .find(result => result.criteria);
// const probablyFaster = manyThings.map(thunkfy(heavyComputation))
//     .find(thunk => thunk().criteria);
//
// returns a new version of `fn` that returns values as lazy evaluable
const thunkfy = fn => (...args) => () => fn(...args);

// Execute a function once
//
//
// // Example
// let n = 0;
// const incOnce = once(() => ++n);
// incOnce();      // n = 1
// incOnce();      // n = 1
// incOnce();      // n = 1
//
const once = fn => ((ran = false) => () => ran ? fn : (ran = !ran, fn = fn()))();

// Flip the arguments of a function
//
//
// // Example
// const isParent = (parent, child) => parent.children.includes(child);
// const isChild = flip(isParent);
//
// Reverse the order of arguments
const flip = fn => (...args) => fn(...args.reverse());
//
// For binary functions
const flip = fn => (b, a) => fn(a, b);
//
// Or for curried functions
const flip = fn => b => a => fn(a)(b);

// Identity function
//
const identity = x => x;

// Logical xor operator
//
//
// // Examples
// xor(true, true);        // false
// xor(false, false);      // false
// xor(true, false);       // true
// xor(false, true);       // true
//
// returns `true` if one of the arguments is truthy and the other is falsy
//
const xor = (a, b) => (a && !b) || (!a && b);
//
// Or
const xor = (a, b) => !(!a && !b) && !(a && b);
//
// Or
const xor = (a, b) => Boolean(!a ^ !b);

// Memoize a function
//
//
//
// // Example
// // Calculate Fibonacci numbers
// const fibo = memoize(n => n <= 2 ? 1 : fibo(n - 1) + fibo(n - 2));
//
// fibo(1);    // 1
// fibo(2);    // 1
// fibo(3);    // 2
// fibo(4);    // 3
// fibo(5);    // 5
// fibo(6);    // 8
const memoize = fn => ((cache = {}) => arg => cache[arg] || (cache[arg] = fn(arg)))();

// Partially apply a function
//
//
// // Example
// const sum = (x, y) => x + y;
// const inc = partial(sum, 1);
// inc(9);     // 10
const partial = (fn, ...a) => (...b) => fn(...a, ...b);

// Uncurry a function
//
//
// // Example
// const sum = a => b => c => a + b + c;
// uncurry(sum, 1)(1)(2)(3);       // 6
// uncurry(sum, 2)(1, 2)(3);       // 6
// uncurry(sum, 3)(1, 2, 3);       // 6
//
// `fn` is a curried function
// `n` is the depth of parameters
const uncurry = (fn, n = 1) => (...args) => (acc => args => args.reduce((x, y) => x(y), acc))(fn)(args.slice(0, n));
