// ## just-reduce-object

// Part of a [library](../../../../) of zero-dependency npm modules that do just do one thing.
// Guilt-free utilities for every occasion.

// [Try it now](http://anguscroll.com/just/just-reduce-object)

// ```js
// import reduce from 'just-reduce-object';

// // applies a function against an accumulator and each key-value pairs of the object
// // to reduce it to a single value
// reduce({a: 3, b: 5, c: 9}, (acc, key, value, index, keys) => {
//   acc[value] = key;
//   return acc;
// }, {}); // {3: 'a', 5: 'b', 9: 'c'}

// reduce({a: 3, b: 5, c: 9}, (acc, key, value, index, keys) => {
//   acc += value;
//   return acc;
// }); // 17
// ```

module.exports = reduce;

function reduce(obj, predicate /*, initialValue*/) {
  var args = [callback];
  // `initialValue` is optional
  var hasInitialValue = 2 in arguments;
  hasInitialValue && args.push(arguments[2]);

  function callback(previousValue, currentKey, currentIndex, array) {
    // when `initialValue` is not provided then
    // `previousValue` is the value associated to the first key
    if (!hasInitialValue) {
      previousValue = obj[array[0]];
      hasInitialValue = true;
    }
    return predicate(
      previousValue,
      currentKey,
      obj[currentKey],
      currentIndex,
      array
    );
  }

  return Array.prototype.reduce.apply(Object.keys(obj), args);
}
