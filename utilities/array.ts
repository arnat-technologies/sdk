// getting inspired by: https://1loc.dev

/**
 * Check if all array elements are equal to a given value
 *
 * Examples
 *
 * isEqual(['foo', 'foo'], 'foo');     // true
 * isEqual(['foo', 'bar'], 'foo');     // false
 * isEqual(['bar', 'bar'], 'foo');     // false
 *
 * @param arr
 * @param value
 */
export const isEqual = (arr, value) => !arr.some((item) => item !== value);

// // Check if all items in an array are equal
//
// // Examples
// areEqual([1, 2, 3, 4]);                 // false
// areEqual(['hello', 'hello', 'hello']);  // true
//
export const areEqual = (arr) =>
  arr.length > 0 && arr.every((item) => item === arr[0]);

// Check if an array contains a value matching some criterias
//
// // Examples
// contains([10, 20, 30], v => v > 25 );               // true
// contains([10, 20, 30], v => v > 100 || v < 15 );    // true
// contains([10, 20, 30], v => v > 100 );              // false
//
export const contains = (arr, criteria) => arr.some((v) => criteria(v));

// Check if an array is not empty
//
// // Examples
// isNotEmpty([]);             // false
// isNotEmpty([1, 2, 3]);      // true
//
export const isNotEmpty = (arr) =>
  Array.isArray(arr) && Object.keys(arr).length > 0;

// Check if an array is subset of other array
//
// // Examples
// isSubset([1,2], [1,2,3,4]);     // true
// isSubset([1,2,5], [1,2,3,4]);   // false
// isSubset([6], [1,2,3,4]);       // false
//
export const isSubset = (a, b) => new Set(b).size === new Set(b.concat(a)).size;

// Check if an object is an array
//
//
export const isArray = (obj) => Array.isArray(obj);

const cloneBySlice = (arr) => arr.slice(0);

const cloneBySpread = (arr) => [...arr];

const cloneByFrom = (arr) => Array.from(arr);

const cloneByMap = (arr) => arr.map((x) => x);

const cloneByStringify = (arr) => JSON.parse(JSON.stringify(arr));

const cloneByConcat = (arr) => arr.concat([]);

// Clone an array
const clone = (kind: string, ...args) => {
  switch (kind) {
    case "slice":
      // `arr` is an array
      return cloneBySlice(args);
    case "spread":
      return cloneBySpread(args);
    case "from":
      return cloneByFrom(args);
    case "from":
      return cloneByFrom(args);
    case "map":
      return cloneByMap(args);
    case "stringify":
      return cloneByStringify(args);
    case "concat":
      return cloneByConcat(args);
    default:
      return 'should provide a valid option'
      break;
  }
};


// Compare two arrays regardless of order
//
// `a` and `b` are arrays
// //
// // Examples
// isEqual([1, 2, 3], [1, 2, 3]);      // true
// isEqual([1, 2, 3], [1, 3, 2]);      // true
// isEqual([1, 2, 3], [1, '2', 3]);    // false
//
export const isEqual = (a, b) => a.length === b.length && a.every((v) => b.includes(v));


// Compare Two arrays
// //
// // Examples
// isEqual([1, 2, 3], [1, 2, 3]);      // true
// isEqual([1, 2, 3], [1, '2', 3]);    // false
export const isEqual = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);


// Convert an array of objects to a single object
//
// // Example
// toObject(
//     [
//         { id: '1', name: 'Alpha', gender: 'Male' },
//         { id: '2', name: 'Bravo', gender: 'Male' },
//         { id: '3', name: 'Charlie', gender: 'Female' },
//     ],
//     'id'
// );
// /*
// {
//     '1': { id: '1', name: 'Alpha', gender: 'Male' },
//     '2': { id: '2', name: 'Bravo', gender: 'Male' },
//     '3': { id: '3', name: 'Charlie', gender: 'Female' },
// }
// */
export const toObject = (arr, key) => arr.reduce((a, b) => ({ ...a, [b[key]]: b }), {});


// Convert an array of strings to numbers
//
// // Example
// toNumbers(['2', '3', '4']);     // [2, 3, 4]
export const toNumbers = arr => arr.map(Number);
//
// // Or
export const toNumbers = arr => arr.map(x => +x);

// Create an array of cumulative sum
//
//
// // Example
// accumulate([1, 2, 3, 4]);   // [1, 3, 6, 10]
// // 1             = 1
// // 1 + 2         = 3
// // 1 + 2 + 3     = 6
// // 1 + 2 + 3 + 4 = 10
export const accumulate = arr => arr.map((sum => value => sum += value)(0));
//
// Or
export const accumulate = arr => arr.reduce((a, b, i) => i === 0 ? [b] : [...a, b + a[i - 1]], []);
//
// Or
export const accumulate = arr => arr.reduce((a, b, i) => i === 0 ? [b] : [...a, b + a[i - 1]], 0);
//


//Create an array of numbers in the given range
//
//
// // Example
// range(5, 10);   // [5, 6, 7, 8, 9, 10]
//
export const range = (min, max) => [...Array(max - min + 1).keys()].map(i => i + min);
//
// Or
export const range = (min, max) => Array(max - min + 1).fill(0).map((_, i) => min + i);
//
// Or
export const range = (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i);


// Empty an array
const empty = arr => arr.length = 0;
//
// Or
// arr = [];


// Find the closest number from an array
//
// //
// // Example
// closest([29, 87, 8, 78, 97, 20, 75, 33, 24, 17], 50);   // 33
//
// Find the number from `arr` which is closest to `n`
export const closest = (arr, n) => arr.reduce((prev, curr) => Math.abs(curr - n) < Math.abs(prev - n) ? curr : prev);
//
// Or
export const closest = (arr, n) => arr.sort((a, b) => Math.abs(a - n) - Math.abs(b - n))[0];

// Find the length of the longest string in an array
//
// //
// // Example
// findLongest(['always','look','on','the','bright','side','of','life']);  // 6
export const findLongest = words => Math.max(...(words.map(el => el.length)));


// Find the maximum item of an array
export const max = arr => Math.max(...arr);


// Find the minimum item of an array
export const min = arr => Math.min(...arr);


// Flatten an array
// //
// //
// // Example
// flat(['cat', ['lion', 'tiger']]);   // ['cat', 'lion', 'tiger']
const flat = arr => [].concat.apply([], arr.map(a => Array.isArray(a) ? flat(a) : a));
// Or
const flat = arr => arr.reduce((a, b) => Array.isArray(b) ? [...a, ...flat(b)] : [...a, b], []);
//
// Or
// See the browser compatibility at https://caniuse.com/#feat=array-flat
const flat = arr => arr.flat();


// Generate an array of random integers in a given range
//
//
//
// // Example
// randomArrayInRange(1, 100, 10);     // [11, 82, 41, 35, 76, 83, 43, 15, 60, 54]
//
const randomArrayInRange = (min, max, n) => Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);


// Get a random item from an array
const randomItem = arr => arr[(Math.random() * arr.length) | 0];


// Get the average of an array
const average = arr => arr.reduce((a, b) => a + b, 0) / arr.length;


// Get the intersection of arrays
//
//
// // Examples
// getIntersection([1, 2, 3], [2, 3, 4, 5]);               // [2, 3]
// getIntersection([1, 2, 3], [2, 3, 4, 5], [1, 3, 5]);    // [3]
//
//
// space: O(n)
// time: O(n)
const getIntersection = (...arr) => [...(arr.flat().reduce((map, v) => map.set(v, (map.get(v) || 0) + 1), new Map()))].reduce((acc, [v, count]) => void (count === arr.length && acc.push(v)) || acc, []);
//
// Or
// Only support two arrays
const getIntersection = (a, b) => [...new Set(a)].filter(v => b.includes(v));


// Get the sum of array of numbers
const sum = arr => arr.reduce((a, b) => a + b, 0);

// Get the unique values of an array
//
const unique = arr => [...new Set(arr)];
//
// Or
const unique = arr => arr.filter((el, i, array) => array.indexOf(el) === i);
//
// Or
const unique = arr => arr.reduce((acc, el) => acc.includes(el) ? acc : [...acc, el], []);


// Get union of arrays
//
// // Example
// union([1, 2], [2, 3], [3]);     // [1, 2, 3]
//
const union = (...arr) => [...new Set(arr.flat())];


// Group an array of objects by a key
//
//
//
// // Example
// groupBy([
//     { branch: 'audi', model: 'q8', year: '2019' },
//     { branch: 'audi', model: 'rs7', year: '2020' },
//     { branch: 'ford', model: 'mustang', year: '2019' },
//     { branch: 'ford', model: 'explorer', year: '2020' },
//     { branch: 'bmw', model: 'x7', year: '2020' },
// ], 'branch');
//
// /*
// {
//     audi: [
//         { branch: 'audi', model: 'q8', year: '2019' },
//         { branch: 'audi', model: 'rs7', year: '2020' }
//     ],
//     bmw: [
//         { branch: 'bmw', model: 'x7', year: '2020' }
//     ],
//     ford: [
//         { branch: 'ford', model: 'mustang', year: '2019' },
//         { branch: 'ford', model: 'explorer', year: '2020' }
//     ],
// }
// */
//
//
const groupBy = (arr, key) => arr.reduce((acc, item) => ((acc[item[key]] = [...(acc[item[key]] || []), item]), acc), {});


// Merge two arrays
//
// Merge but don't remove the duplications
const merge = (a, b) => a.concat(b);
// Or
const merge = (a, b) => [...a, ...b];
//
// Merge and remove the duplications
const merge = [...new Set(a.concat(b))];
// Or
const merge = [...new Set([...a, ...b])];


// Partition an array based on a condition
//
//
// // Example
// partition([1, 2, 3, 4, 5], n => n % 2);     // [[2, 4], [1, 3, 5]]
//
const partition = (arr, criteria) => arr.reduce((acc, i) => (acc[criteria(i) ? 0 : 1].push(i), acc), [[], []]);


// Remove falsy values from array
// //
// // Example
// removeFalsy([0, 'a string', '', NaN, true, 5, undefined, 'another string', false]); // ['a string', true, 5, 'another string']
//
const removeFalsy = arr => arr.filter(Boolean);

// Shuffle an array
//
// //
// // Example
// shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);   // [9, 1, 10, 6, 8, 5, 2, 3, 7, 4]
//
const shuffle = arr => arr.map(a => ({ sort: Math.random(), value: a })).sort((a, b) => a.sort - b.sort).map(a => a.value);
//
// Or
const shuffle = arr => arr.sort(() => .5 - Math.random());

// Sort an array of numbers
//
//
// // Example
// sort([1, 5, 2, 4, 3]);      // [1, 2, 3, 4, 5]
//
const sort = arr => arr.sort((a, b) => a - b);

// Split an array into chunks
//
//
// // Examples
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3);     // [[1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 4);     // [[1, 2, 3, 4], [5, 6, 7, 8]]
const chunk = (arr, size) => arr.reduce((acc, e, i) => (i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc), []);

// Swap the rows and columns of a matrix
//
//
// // Example
// transpose([             // [
//     [1, 2, 3],          //      [1, 4, 7],
//     [4, 5, 6],          //      [2, 5, 8],
//     [7, 8, 9],          //      [3, 6, 9],
// ]);                     //  ]
//
const transpose = matrix => matrix[0].map((col, i) => matrix.map(row => row[i]));
//
// Or
const transpose = matrix => matrix[0].map((col, c) => matrix.map((row, r) => matrix[r][c]));
//
// Or
const transpose = matrix => matrix.reduce((prev, next) => next.map((item, i) => (prev[i] || []).concat(next[i])), []);

// Unzip an array of arrays
//
//
// // Example
// unzip([['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]]);  // [['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]]
//
// /*
//     a     1
//      b   2
//       c 3
//       d 4
//       e 5
// */
//
const unzip = arr => arr.reduce((acc, c) => (c.forEach((v, i) => acc[i].push(v)), acc), Array.from({ length: Math.max(...arr.map(a => a.length)) }, (_) => []));


// Zip multiple arrays
//
//
// // Example
// zip(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]);   // [['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]]
//
// /*
// Does it look like a zipper?
//         a 1
//         b 2
//        c   3
//       d     4
//      e       5
// */
//
const zip = (...arr) => Array.from({ length: Math.max(...arr.map(a => a.length)) }, (_, i) => arr.map(a => a[i]));
