/************************************************************************
 * Detecting
 *************************************************************************/
/**
 * detect IOS
 * From https://stackoverflow.com/questions/9038625/detect-if-device-is-ios
 */
function isIos() {
  return /iPad|iPhone|iPod/.test(ua());
}

function isIPad() {
  return /iPad/.test(ua());
}

/**
 * detect Android
 * From https://stackoverflow.com/questions/6031412/detect-android-phone-via-javascript-jquery
 */
function isAndroid() {
  return ua('l').indexOf('android') > -1;
}

/**
 * detect PC / Mobile
 * From https://stackoverflow.com/questions/3514784/what-is-the-best-way-to-detect-a-mobile-device-in-jquery
 */
function isMobile() {
  return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
    ua('l')
  );
}

function isPC() {
  return !this.isMobile();
}

function isWeixin() {
  return /MicroMessenger/i.test(ua('l'));
}

/**
 * detect ie
 * From https://stackoverflow.com/questions/10964966/detect-ie-version-prior-to-v9-in-javascript
 */
function isIE() {
  return ieVersion() > 0;
}

/**
 * ie version
 * From https://codepen.io/gapcode/pen/vEJNZN
 * IE 10 ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
 * IE 11 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
 * Edge 12 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
 * Edge 13 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';
 */
function ieVersion() {
  const ua = ua();
  const msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  const trident = ua.indexOf('Trident/');
  if (trident > 0) {
    const rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  const edge = ua.indexOf('Edge/');
  if (edge > 0) {
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  return -1;
}

/**
 * navigator.userAgent
 */
function ua(lower) {
  return lower
    ? window.navigator.userAgent.toLowerCase()
    : window.navigator.userAgent;
}
