// ## just-safe-set

// Part of a [library](../../../../) of zero-dependency npm modules that do just do one thing.
// Guilt-free utilities for every occasion.

// [Try it now](http://anguscroll.com/just/just-safe-set)

// ```js
// import set from 'just-safe-set';

// const obj1 = {};
// set(obj1, 'a.aa.aaa', 4); // true
// obj1; // {a: {aa: {aaa: 4}}}

// const obj2 = {};
// set(obj2, ['a', 'aa', 'aaa'], 4); // true
// obj2; // {a: {aa: {aaa: 4}}}

// const obj3 = {a: {aa: {aaa: 2}}};
// set(obj3, 'a.aa.aaa', 3); // true
// obj3; // {a: {aa: {aaa: 3}}}

// // don't clobber existing
// const obj4 = {a: {aa: {aaa: 2}}};
// set(obj4, 'a.aa', {bbb: 7}); // false

// const obj5 = {a: {}};
// const sym = Symbol();
// set(obj5.a, sym, 7); // true
// obj5; // {a: {Symbol(): 7}}
// ```

module.exports = set;

/*
  var obj1 = {};
  set(obj1, 'a.aa.aaa', 4); // true
  obj1; // {a: {aa: {aaa: 4}}}

  var obj2 = {};
  set(obj2, ['a', 'aa', 'aaa'], 4); // true
  obj2; // {a: {aa: {aaa: 4}}}

  var obj3 = {a: {aa: {aaa: 2}}};
  set(obj3, 'a.aa.aaa', 3); // true
  obj3; // {a: {aa: {aaa: 3}}}

  // don't clobber existing
  var obj4 = {a: {aa: {aaa: 2}}};
  set(obj4, 'a.aa', {bbb: 7}); // false

  const obj5 = {a: {}};
  const sym = Symbol();
  set(obj5.a, sym, 7); // true
  obj5; // {a: {Symbol(): 7}}
*/

function set(obj, props, value) {
  if (typeof props == 'string') {
    props = props.split('.');
  }
  if (typeof props == 'symbol') {
    props = [props];
  }
  const lastProp = props.pop();
  if (!lastProp) {
    return false;
  }
  let thisProp;
  while ((thisProp = props.shift())) {
    if (typeof obj[thisProp] == 'undefined') {
      obj[thisProp] = {};
    }
    obj = obj[thisProp];
    if (!obj || typeof obj != 'object') {
      return false;
    }
  }
  obj[lastProp] = value;
  return true;
}
