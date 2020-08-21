// Count by the properties of an array of objects
//
//
//  // Example
// countBy(
//   [
//     { branch: 'audi', model: 'q8', year: '2019' },
//     { branch: 'audi', model: 'rs7', year: '2020' },
//     { branch: 'ford', model: 'mustang', year: '2019' },
//     { branch: 'ford', model: 'explorer', year: '2020' },
//     { branch: 'bmw', model: 'x7', year: '2020' },
//   ],
//   'branch'
// );
//
// { 'audi': 2, 'ford': 2, 'bmw': 1 }
//
export default function countBy(arr, prop) {
  return arr.reduce(
    (prev, curr) => ((prev[curr[prop]] = ++prev[curr[prop]] || 1), prev),
    {}
  );
}
