// Get the value of a cookie
//
//
// // Example
// cookie('_ga');      // GA1.2.825309271.1581874719
//
export const cookie = (name) =>
  `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
