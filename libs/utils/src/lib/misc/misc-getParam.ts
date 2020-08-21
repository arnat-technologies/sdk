// Get the value of a param from an url
//
//
// // Example
// getParam('http://domain.com?message=hello', 'message');     // 'hello'
export const getParam = (url, param) =>
  new URLSearchParams(new URL(url).search).get(param);

//
