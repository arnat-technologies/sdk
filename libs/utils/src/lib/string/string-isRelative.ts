// Check if a path is relative
//
//
// // Examples
// isRelative('/foo/bar/baz');         // false
// isRelative('C:\\foo\\bar\\baz');    // false
// isRelative('foo/bar/baz.txt');      // true
// isRelative('foo.md');               // true
//
export default function isRelative(path) {
  return !/^([a-z]+:)?[\\/]/i.test(path);
}
