// ## just-debounce-it

// Part of a [library](../../../../) of zero-dependency npm modules that do just do one thing.
// Guilt-free utilities for every occasion.

// [Try it now](http://anguscroll.com/just/just-debounce-it)

// ```js
// import debounce from 'just-debounce-it';

// const fn1 = debounce(() => console.log('Hello'), 500);
// fn1();
// fn1();
// fn1();
// // 500ms later logs 'hello' once

// const fn2 = debounce(() => console.log('Hello'), 500, true);
// fn2(); // logs hello immediately
// fn2();
// fn2();
// // 500ms later logs 'hello' once
// ```

module.exports = debounce;

function debounce(fn, wait, callFirst) {
  let timeout;
  return function () {
    if (!wait) {
      return fn.apply(this, arguments);
    }
    const context = this;
    const args = arguments;
    const callNow = callFirst && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      timeout = null;
      if (!callNow) {
        return fn.apply(context, args);
      }
    }, wait);

    if (callNow) {
      return fn.apply(this, arguments);
    }
  };
}
