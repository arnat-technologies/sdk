// ## just-compose

// Part of a [library](../../../../) of zero-dependency npm modules that do just do one thing.
// Guilt-free utilities for every occasion.

// [Try it now](http://anguscroll.com/just/just-compose)

// ```js
// import compose from 'just-compose';

// const sqRootBiggest = compose(Math.trunc, Math.sqrt, Math.max);
// sqRootBiggest(10, 5); // 3
// sqRootBiggest(7, 0, 16); // 4
// ```

module.exports = compose;

/*
const sqRootBiggest = compose(Math.max, Math.sqrt, Math.trunc);
sqRootBiggest(10, 5); // 3
sqRootBiggest(7, 0, 16); // 4
*/

function compose(fn1, fn2 /*, fn3, etc */) {
  if (!arguments.length) {
    throw new Error(
      'expected at least one (and probably more) function arguments'
    );
  }
  const fns = arguments;

  return function () {
    let result = fns[0].apply(this, arguments);
    const len = fns.length;
    for (let i = 1; i < len; i++) {
      result = fns[i].call(this, result);
    }
    return result;
  };
}
