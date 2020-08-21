// Trim the file extension from a file name
//
//
// // Examples
// trimExt('document');            // document
// trimExt('document.pdf');        // document
// trimExt('document.2020.pdf');   // document.2020
//
export default function trimExt(fileName) {
  return fileName.indexOf('.') === -1
    ? fileName
    : fileName.split('.').slice(0, -1).join('.');
}
