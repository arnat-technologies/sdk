// ## just-pick

// Part of a [library](../../../../) of zero-dependency npm modules that do just do one thing.
// Guilt-free utilities for every occasion.

// [Try it now](http://anguscroll.com/just/just-pick)

// ```js
// import pick from 'just-pick';

// var obj = { a: 3, b: 5, c: 9 };
// pick(obj, ['a', 'c']); // {a: 3, c: 9}
// pick(obj, 'a', 'c'); // {a: 3, c: 9}
// pick(obj, ['a', 'b', 'd']); // {a: 3, b: 5}
// pick(obj, ['a', 'a']); // {a: 3}
// ```

module.exports = pick;

/*
  var obj = {a: 3, b: 5, c: 9};
  pick(obj, ['a', 'c']); // {a: 3, c: 9}
  pick(obj, 'a', 'c'); // {a: 3, c: 9}
  pick(obj, ['a', 'b', 'd']); // {a: 3, b: 5}
  pick(obj, ['a', 'a']); // {a: 3}
*/

function pick(obj, select) {
  const result = {};
  if (typeof select === 'string') {
    select = [].slice.call(arguments, 1);
  }
  const len = select.length;
  for (let i = 0; i < len; i++) {
    const key = select[i];
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result;
}
