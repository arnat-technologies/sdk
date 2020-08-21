/************************************************************************
 * Cookies
 *************************************************************************/
/**
 * setCookie / getCookie / deleteCookie
 * From https://stackoverflow.com/questions/1458724/how-do-i-set-unset-cookie-with-jquery/1458728#1458728
 * change by drawcall
 */
const setCookie = function (name, value, option) {
  const longTime = 10;
  const path = '; path=/';
  const val = option && option.raw ? value : encodeURIComponent(value);
  let cookie = encodeURIComponent(name) + '=' + val;

  if (option) {
    if (option.days) {
      var date = new Date();
      var ms = option.days * 24 * 3600 * 1000;
      date.setTime(date.getTime() + ms);
      cookie += '; expires=' + date.toGMTString();
    } else if (option.hour) {
      var date = new Date();
      var ms = option.hour * 3600 * 1000;
      date.setTime(date.getTime() + ms);
      cookie += '; expires=' + date.toGMTString();
    } else {
      var date = new Date();
      var ms = longTime * 365 * 24 * 3600 * 1000;
      date.setTime(date.getTime() + ms);
      cookie += '; expires=' + date.toGMTString();
    }

    if (option.path) cookie += '; path=' + option.path;
    if (option.domain) cookie += '; domain=' + option.domain;
    if (option.secure) cookie += '; true';
  }

  document.cookie = cookie;
};

const getCookie = function (name) {
  const nameEQ = encodeURIComponent(name) + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0)
      return decodeURIComponent(c.substring(nameEQ.length, c.length));
  }

  return null;
};

const deleteCookie = (delCookie = function (name) {
  this.setCookie(name, '', { hour: -1 });
});
