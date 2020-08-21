// Get the file name from an url
//
//
// // Example
// fileName('http://domain.com/path/to/document.pdf');     // 'document.pdf'
//
export default function fileName(url) {
  return url.substring(url.lastIndexOf('/') + 1);
}
