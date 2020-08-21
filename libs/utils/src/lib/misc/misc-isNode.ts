// Check if the code is running in node js
//
export const isNode =
  typeof process !== 'undefined' &&
  process.versions != null &&
  process.versions.node != null;
