// Redirect the page to https if it is in http
//
export const redirectHttp = () =>
  location.protocol === 'https:'
    ? {}
    : location.replace(`https://${location.href.split('//')[1]}`);
