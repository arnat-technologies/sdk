// ## just-pluck-it

// Part of a [library](../../../../) of zero-dependency npm modules that do just do one thing.
// Guilt-free utilities for every occasion.

// [Try it now](http://anguscroll.com/just/just-pluck-it)

// ```js
// import pluck from 'just-pluck-it';

// pluck([{a:1, b:2}, {a:4, b:3}, {a:2, b:5}], 'a'); // [1, 4, 2]
// pluck({x: {a:1, b:2}, y: {a:4, b:3}, z: {a:2, b:5}}, 'a'); // {x: 1, y: 4, z: 2}
// ```
// //
module.exports = pluck;

/*
  var arr = [{a:1, b:2}, {a:4, b:3}, {a:2, b:5}];
  pluck(arr, 'a'); // [1, 4, 2]
  var obj = {x: {a:1, b:2}, y: {a:4, b:3}, z: {a:2, b:5}];
  pluck(obj, 'a'); // {x: 1, y: 4, z: 2}
*/

function pluck(collection, propertyName) {
  if (!collection || typeof collection != 'object') {
    return new Error('expected first argument to be an object or array');
  }

  let result, len, i, keys, key;
  if (Array.isArray(collection)) {
    result = [];
    len = collection.length;
    for (i = 0; i < len; i++) {
      result.push(collection[i][propertyName]);
    }
  } else {
    result = {};
    keys = Object.keys(collection);
    len = keys.length;
    for (i = 0; i < len; i++) {
      key = keys[i];
      result[key] = collection[key][propertyName];
    }
  }
  return result;
}
