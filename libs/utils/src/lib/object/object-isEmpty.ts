// Check if an object is empty
//
export const isEmpty = (obj) =>
  Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;
//
// Or for enumerable property names only
export const isEmpty = (obj) => JSON.stringify(obj) === '{}';
