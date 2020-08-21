// Normalize file path slashes
//
//
// // Example
// normalizePath('\\foo\\bar\\baz\\'); // /foo/bar/baz/
// normalizePath('.//foo//bar///////baz/'); // ./foo/bar/baz/
//
export default function normalizePath(path) {
  return path.replace(/[\\/]+/g, '/');
}
