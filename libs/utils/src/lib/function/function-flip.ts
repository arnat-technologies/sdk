// ## just-flip-it

// Part of a [library](../../../../) of zero-dependency npm modules that do just do one thing.
// Guilt-free utilities for every occasion.

// [Try it now](http://anguscroll.com/just/just-flip)

// ```js
// import flip from 'just-flip';

// flip(console.log)(1, 2, 3) // 2, 1, 3

// import map from 'just-map-object';
// import partial from 'just-partial';

// const numbers = {x: 5, y: 10};
// const flippedMap = flip(map);
// const double = partial(flippedMap, (undefined, number) => number * 2);
// double(numbers) // {x: 10, y: 20];
// ```

module.exports = flip;

/*
  flip(Array)('a', 'b') // ['b', 'a'];
  flip(console.log)(1, 2, 3) // 2, 1, 3
*/

function flip(fn) {
  return function () {
    const first = arguments[0];
    const second = arguments[1];
    const rest = [].slice.call(arguments, 2);
    return fn.apply(this, [second, first].concat(rest));
  };
}
