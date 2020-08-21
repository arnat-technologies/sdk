// ## just-merge

// Part of a [library](../../../../) of zero-dependency npm modules that do just do one thing.
// Guilt-free utilities for every occasion.

// [Try it now](http://anguscroll.com/just/just-merge)

// Shallow assign. Like just-extend but without deep copy option.

// ```js
// import merge from 'just-merge';

// let obj = {a: 3, b: 5};
// merge(obj, {a: 4, c: 8}); // {a: 4, b: 5, c: 8}
// obj; // {a: 4, b: 5, c: 8}

// let obj = {a: 3, b: 5};
// merge({}, obj, {a: 4, c: 8}); // {a: 4, b: 5, c: 8}
// obj; // {a: 3, b: 5}

// let arr = [1, 2, 3];
// let obj = {a: 3, b: 5};
// merge(obj, {c: arr}); // {a: 3, b: 5, c: [1, 2, 3]}
// arr.push[4];
// obj; // {a: 3, b: 5, c: [1, 2, 3, 4]}

// merge({a: 4, b: 5}); // {a: 4, b: 5}
// merge(3, {a: 4, b: 5}); // throws
// merge({a: 4, b: 5}, 3); // throws
// merge({a: 4, b: 5}, {b: 4, c: 5}, 'c'); // throws
// ```

module.exports = merge;

/*
  var obj = {a: 3, b: 5};
  merge(obj, {a: 4, c: 8}); // {a: 4, b: 5, c: 8}
  obj; // {a: 4, b: 5, c: 8}

  var obj = {a: 3, b: 5};
  merge({}, obj, {a: 4, c: 8}); // {a: 4, b: 5, c: 8}
  obj; // {a: 3, b: 5}

  var arr = [1, 2, 3];
  var obj = {a: 3, b: 5};
  merge(obj, {c: arr}); // {a: 3, b: 5, c: [1, 2, 3]}
  arr.push(4);
  obj; // {a: 3, b: 5, c: [1, 2, 3, 4]}

  merge({a: 4, b: 5}); // {a: 4, b: 5}
  merge(3, {a: 4, b: 5}); // throws
  merge({a: 4, b: 5}, 3); // throws
  merge({a: 4, b: 5}, {b: 4, c: 5}, 'c'); // throws
*/

function merge(/* obj1, obj2, [objn] */) {
  const args = [].slice.call(arguments);
  let arg;
  var i = args.length;
  while (((arg = args[i - 1]), i--)) {
    if (!arg || (typeof arg != 'object' && typeof arg != 'function')) {
      throw new Error('expected object, got ' + arg);
    }
  }
  const result = args[0];
  const extenders = args.slice(1);
  const len = extenders.length;
  for (var i = 0; i < len; i++) {
    const extender = extenders[i];
    for (const key in extender) {
      result[key] = extender[key];
    }
  }
  return result;
}
