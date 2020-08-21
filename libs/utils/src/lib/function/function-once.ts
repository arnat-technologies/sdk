// ## just-once

// Part of a [library](../../../../) of zero-dependency npm modules that do just do one thing.
// Guilt-free utilities for every occasion.

// [Try it now](http://anguscroll.com/just/just-once)

// ```js
// import once from 'just-once';

// const fn = once(() => console.log('hello'));

// fn();
// // logs 'hello'
// fn();
// // does nothing
// ```

module.exports = once;

/*
let i = 0;
const getFirst = once(() => ++i);
getFirst(); // 1
getFirst(); // 1
*/

function once(fn) {
  var called, value;

  if (typeof fn !== 'function') {
    throw new Error('expected a function but got ' + fn);
  }

  return function wrap() {
    if (called) {
      return value;
    }
    called = true;
    value = fn.apply(this, arguments);
    fn = undefined;
    return value;
  };
}
