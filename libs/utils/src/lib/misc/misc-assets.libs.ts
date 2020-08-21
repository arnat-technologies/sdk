/************************************************************************
 * Assets
 *************************************************************************/
/**
 * load js
 * 1. ppo.loadjs("//your_url/a.js",func);
 * 2. ppo.loadjs("//your_url/a.js","only_id",func);
 */
const loadjs = function (url, b, c) {
  let onlyId, callback;

  if (typeof b == 'function') {
    onlyId = this.hash(url + '') + '';
    callback = b;
  } else if (typeof b == 'undefined') {
    onlyId = this.hash(url + '') + '';
    callback = null;
  } else {
    onlyId = b + '';
    callback = c;
  }

  if (ppo._cache.urls[onlyId]) {
    callback && callback();
  } else {
    const func = typeof url == 'string' ? _insertScript : _insertScripts;
    func.call(this, url, function () {
      ppo._cache.urls[onlyId] = true;
      callback && callback();
    });
  }
};
