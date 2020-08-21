// Check if a url is absolute
//
//
// // Example
// isAbsoluteUrl('https://1loc.dev');          // true
// isAbsoluteUrl('https://1loc.dev/foo/bar');  // true
// isAbsoluteUrl('1loc.dev');                  // false
// isAbsoluteUrl('//1loc.dev');                // false
//
export default function isAbsoluteUrl(url) {
  return /^[a-z][a-z0-9+.-]*:/.test(url);
}
