// Trim slashes at the beginning and the end of a string
//
//
// // Example
// trimSlashes('//hello/world///');    // hello/world
//
export default function trimSlashes(str) {
  return str.split('/').filter(Boolean).join('/');
}
