// Convert a windows file path to unix path
//
// // Examples
// toUnixPath('./foo/bar/baz');        // foo/bar/baz
// toUnixPath('C:\\foo\\bar\\baz');    // /foo/bar/baz
//
export default function toUnixPath(path) {
  return path.replace(/[\\/]+/g, '/').replace(/^([a-zA-Z]+:|\.\/)/, '');
}
