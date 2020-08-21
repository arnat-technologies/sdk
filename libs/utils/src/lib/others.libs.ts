/************************************************************************
 * Other
 *************************************************************************/
/**
 * generate uuid
 * From https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
 */
const uuid = function () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

/**
 * string hash map
 * From https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery
 */
const hash = function (str) {
  str += '';
  let hash = 0,
    i,
    chr;
  if (str.length === 0) return hash;
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }

  return hash;
};

/**
 * map condition judge
 */
const judge = (judgment = function (v, vals, strict) {
  if (!this.isTypeof(vals, 'array')) return false;

  for (const key in vals) {
    if (strict) {
      if (v === vals[key]) return true;
    } else {
      if (v == vals[key]) return true;
    }
  }

  return false;
});

/**
 * is typeof type
 */
const isTypeof = function (val, type) {
  return (
    Object.prototype.toString.call(val).slice(8, -1).toLowerCase() === type
  );
};

/**
 * to json
 */
const toJSON = (tojson = toJson = function (res) {
  if (!res) return null;

  if (typeof res == 'string') {
    try {
      return JSON.parse(res);
    } catch (e) {
      return eval('(' + res + ')');
    }
  } else if (this.isTypeof(res.json, 'function')) {
    return res.json();
  } else {
    return res;
  }
});

/**
 * to array
 */
const toArray = function (obj, dot) {
  if (!obj) return null;

  if (isTypeof(obj, 'array')) {
    return obj;
  } else if (isTypeof(obj, 'string') && obj.indexOf(',') > 0) {
    return obj.split(',');
  } else {
    if (dot && isTypeof(obj, 'string')) return obj.split(dot);
    else return [obj];
  }
};

/**
 * arguments to array
 */
const args = function ($arguments, first) {
  return Array.prototype.slice.call($arguments, first || 0);
};

const delLastComma = (deleteLastComma = function (str) {
  str += '';
  str = str.slice(str.length - 1) === ',' ? str.slice(0, -1) : str;
  return str;
});

/**
 * a trash object
 */
const trash = {
  clear: function () {
    for (const key in trash) {
      if (key !== 'log' && key !== 'clear') delete trash[key];
    }
  },
  log: function () {
    for (const key in trash) {
      if (key !== 'log' && key !== 'clear')
        console.log('trash:: ', key, trash[key]);
    }
  },
};

const noop = function () {};

/************************************************************************
 *
 *   Private Method
 *
 *************************************************************************/
const _cache = { urls: {}, logs: {} };

const _insertScripts = function (arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    _insertScript(arr[i], loaded);
  }

  let _index = 0;
  function loaded() {
    _index++;
    if (_index >= arr.length) {
      callback && callback();
    }
  }
};

const _insertScript = function (src, callback) {
  const script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('src', src);
  document.getElementsByTagName('head')[0].appendChild(script);

  if (/msie/.test(ppo.ua('l'))) {
    script.onreadystatechange = function () {
      if (this.readyState == 'loaded' || this.readyState == 'complete') {
        callback();
      }
    };
  } else if (/gecko/.test(ppo.ua('l'))) {
    script.onload = function () {
      callback();
    };
  } else {
    setTimeout(function () {
      callback();
    }, 50);
  }
};
