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
export const pluck = (objs, property) => objs.map((obj) => obj[property]);