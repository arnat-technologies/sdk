// getting inspired by: https://1loc.dev

// Check if a value is a plain object
//
//
// // Examples
// isPlainObject(null);                    // false
// isPlainObject('hello world');           // false
// isPlainObject([]);                      // false
// isPlainObject(Object.create(null));     // false
// isPlainObject(function() {});           // false
//
// isPlainObject({});                      // true
// isPlainObject({ a: '1', b: '2' });      // true
//
const isPlainObject = v => (!!v && typeof v === 'object' && (v.__proto__ === null || v.__proto__ === Object.prototype));

// Check if a value is an object
//
//
// // Examples
// isObject(null);             // false
// isObject('hello world');    // false
//
// isObject({});               // true
// isObject([]);               // true
//
const isObject = v => (v !== null && typeof v === 'object');

// Check if an object is empty
//
const isEmpty = obj => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;
//
// Or for enumerable property names only
const isEmpty = obj => JSON.stringify(obj) === '{}';

// Check if multiple objects are equal
//
//
// // Examples
// isEqual({ foo: 'bar' }, { foo: 'bar' });    // true
// isEqual({ foo: 'bar' }, { bar: 'foo' });    // false
//
const isEqual = (...objects) => objects.every(obj => JSON.stringify(obj) === JSON.stringify(objects[0]));


// Create an empty map that does not have properties
//
// `map` doesn't have any properties
const map = Object.create(null);
//
// The following `map` has `__proto__` property
// const map = {};


// Create an object from the pairs of key and value
//
//
// // Example
// toObj([['a', 1], ['b', 2], ['c', 3]]);      // { a: 1, b: 2, c: 3 }
//
const toObj = arr => Object.fromEntries(arr)
//
//Or
const toObj = arr => arr.reduce((a, c) => ((a[c[0]] = c[1]), a), {});

// Extract values of a property from an array of objects
//
//
// // Example
// pluck([
//     { name: 'John', age: 20 },
//     { name: 'Smith', age: 25 },
//     { name: 'Peter', age: 30 },
// ], 'name');         // ['John', 'Smith', 'Peter']
//
const pluck = (objs, property) => objs.map(obj => obj[property]);

// Get the value at given path of an object
//
// // Example
// getValue('a.b', { a: { b: 'Hello World' } });   // 'Hello World';
//
const getValue = (path, obj) => path.split('.').reduce((acc, c) => acc && acc[c], obj);


// Invert keys and values of an object
//
//
// // Example
// invert({ a: '1', b: '2', c: '3' });     // { 1: 'a', 2: 'b', 3: 'c' }
//
const invert = obj => Object.keys(obj).reduce((res, k) => Object.assign(res, {[obj[k]]: k}), {});

// Omit a subset of properties from an object
//
//
// // Example
// omit({a: '1', b: '2', c: '3'}, ['a', 'b']);     // { c: '3' }
//
const omit = (obj, keys) => Object.keys(obj).filter(k => !keys.includes(k)).reduce((res, k) => Object.assign(res, {[k]: obj[k]}), {});

// Pick a subset of properties of an object
//
//
// // Example
// pick({ a: '1', b: '2', c: '3' }, ['a', 'b']);   // { a: '1', b: '2' }
//
const pick = (obj, keys) => Object.keys(obj).filter(k => keys.includes(k)).reduce((res, k) => Object.assign(res, {[k]: obj[k]}), {});

// Shallow copy an object
//
const shallowCopy = obj => Object.assign({}, obj);
