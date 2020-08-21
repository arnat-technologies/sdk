// ## just-omit

// Part of a [library](../../../../) of zero-dependency npm modules that do just do one thing.
// Guilt-free utilities for every occasion.

// [Try it now](http://anguscroll.com/just/just-omit)

// ```js
// import omit from 'just-omit';

// var obj = {a: 3, b: 5, c: 9};
// omit(obj, ['a', 'c']); // {b: 5}
// omit(obj, 'a', 'c'); // {b: 5}
// omit(obj, ['a', 'b', 'd']); // {c: 9}
// omit(obj, ['a', 'a']); // {b: 5, c: 9}
// ```

module.exports = omit;

/*
  var obj = {a: 3, b: 5, c: 9};
  omit(obj, ['a', 'c']); // {b: 5}
  omit(obj, a, c); // {b: 5}
  omit(obj, ['a', 'b', 'd']); // {c: 9}
  omit(obj, ['a', 'a']); // {b: 5, c: 9}
*/

function omit(obj, remove) {
  var result = {};
  if (typeof remove === 'string') {
    remove = [].slice.call(arguments, 1);
  }
  for (var prop in obj) {
    if (!obj.hasOwnProperty || obj.hasOwnProperty(prop)) {
      if (remove.indexOf(prop) === -1) {
        result[prop] = obj[prop];
      }
    }
  }
  return result;
}
