// ## just-throttle

// Part of a [library](../../../../) of zero-dependency npm modules that do just do one thing.
// Guilt-free utilities for every occasion.

// [Try it now](http://anguscroll.com/just/just-throttle)

// ```js
// import throttle from 'just-throttle';

// const fn1 = throttle(() => console.log('hello'), 500, true);
// setInterval(fn1, 400);
// // logs 'hello' immediately and then every 500ms

// const fn2 = throttle(() => console.log('hello'), 500);
// setInterval(fn2, 400);
// // logs 'hello' after 500ms and then every 500ms
// ```

module.exports = throttle;

function throttle(fn, interval, callFirst) {
  var wait = false;
  var callNow = false;
  return function () {
    callNow = callFirst && !wait;
    var context = this;
    var args = arguments;
    if (!wait) {
      wait = true;
      setTimeout(function () {
        wait = false;
        if (!callFirst) {
          return fn.apply(context, args);
        }
      }, interval);
    }
    if (callNow) {
      callNow = false;
      return fn.apply(this, arguments);
    }
  };
}
