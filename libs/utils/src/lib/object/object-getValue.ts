// Get the value at given path of an object
//
// // Example
// getValue('a.b', { a: { b: 'Hello World' } });   // 'Hello World';
//
export const getValue = (path, obj) =>
  path.split('.').reduce((acc, c) => acc && acc[c], obj);
