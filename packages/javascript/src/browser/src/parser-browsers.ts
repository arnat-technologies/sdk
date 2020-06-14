/**
 * Browsers' descriptors
 *
 * The idea of descriptors is simple. You should know about them two simple things:
 * 1. Every descriptor has a method or property called `test` and a `describe` method.
 * 2. Order of descriptors is important.
 *
 * More details:
 * 1. Method or property `test` serves as a way to detect whether the UA string
 * matches some certain browser or not. The `describe` method helps to make a result
 * object with params that show some browser-specific things: name, version, etc.
 * 2. Order of descriptors is important because a Parser goes through them one by one
 * in course. For example, if you insert Chrome's descriptor as the first one,
 * more then a half of browsers will be described as Chrome, because they will pass
 * the Chrome descriptor's test.
 *
 * Descriptor's `test` could be a property with an array of RegExps, where every RegExp
 * will be applied to a UA string to test it whether it matches or not.
 * If a descriptor has two or more regexps in the `test` array it tests them one by one
 * with a logical sum operation. Parser stops if it has found any RegExp that matches the UA.
 *
 * Or `test` could be a method. In that case it gets a Parser instance and should
 * return true/false to get the Parser know if this browser descriptor matches the UA or not.
 */

import { Browser } from './interfaces';
import { getUA } from './parser';
import { getFirstMatch, getSecondMatch } from './utils';

const commonVersionIdentifier = /version\/(\d+(\.?_?\d+)+)/i;

const browsersList = [
  /* Googlebot */
  {
    test: [/googlebot/i],
    describe(ua: string): Browser {
      const browser: Browser = {
        name: 'Googlebot',
      };
      const version =
        getFirstMatch(/googlebot\/(\d+(\.\d+))/i, ua) || getFirstMatch(commonVersionIdentifier, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },

  /* Opera < 13.0 */
  {
    test: [/opera/i],
    describe(ua: string): Browser {
      const browser: Browser = {
        name: 'Opera',
      };
      const version =
        getFirstMatch(commonVersionIdentifier, ua) ||
        getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },

  /* Opera > 13.0 */
  {
    test: [/opr\/|opios/i],
    describe(ua: string): Browser {
      const browser: Browser = {
        name: 'Opera',
      };
      const version =
        getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, ua) || getFirstMatch(commonVersionIdentifier, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/SamsungBrowser/i],
    describe(ua: string): Browser {
      const browser: Browser = {
        name: 'Samsung Internet for Android',
      };
      const version =
        getFirstMatch(commonVersionIdentifier, ua) ||
        getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/Whale/i],
    describe(ua: string): Browser {
      const browser: Browser = {
        name: 'NAVER Whale Browser',
      };
      const version =
        getFirstMatch(commonVersionIdentifier, ua) ||
        getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/MZBrowser/i],
    describe(ua: string): Browser {
      const browser: Browser = {
        name: 'MZ Browser',
      };
      const version =
        getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, ua) ||
        getFirstMatch(commonVersionIdentifier, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/focus/i],
    describe(ua: string): Browser {
      const browser: Browser = {
        name: 'Focus',
      };
      const version =
        getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, ua) ||
        getFirstMatch(commonVersionIdentifier, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/swing/i],
    describe(ua: string): Browser {
      const browser: Browser = {
        name: 'Swing',
      };
      const version =
        getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, ua) ||
        getFirstMatch(commonVersionIdentifier, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/coast/i],
    describe(ua: string): Browser {
      const browser: Browser = {
        name: 'Opera Coast',
      };
      const version =
        getFirstMatch(commonVersionIdentifier, ua) ||
        getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/opt\/\d+(?:.?_?\d+)+/i],
    describe(ua: string): Browser {
      const browser: Browser = {
        name: 'Opera Touch',
      };
      const version =
        getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, ua) ||
        getFirstMatch(commonVersionIdentifier, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/yabrowser/i],
    describe(ua: string): Browser {
      const browser: Browser = {
        name: 'Yandex Browser',
      };
      const version =
        getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, ua) ||
        getFirstMatch(commonVersionIdentifier, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/ucbrowser/i],
    describe(ua: string): Browser {
      const browser: Browser = {
        name: 'UC Browser',
      };
      const version =
        getFirstMatch(commonVersionIdentifier, ua) ||
        getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/Maxthon|mxios/i],
    describe(ua: string): Browser {
      const browser: Browser = {
        name: 'Maxthon',
      };
      const version =
        getFirstMatch(commonVersionIdentifier, ua) ||
        getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/epiphany/i],
    describe(ua: string): Browser {
      const browser: Browser = {
        name: 'Epiphany',
      };
      const version =
        getFirstMatch(commonVersionIdentifier, ua) ||
        getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/puffin/i],
    describe(ua: string): Browser {
      const browser: Browser = {
        name: 'Puffin',
      };
      const version =
        getFirstMatch(commonVersionIdentifier, ua) ||
        getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/sleipnir/i],
    describe(ua: string): Browser {
      const browser: Browser = {
        name: 'Sleipnir',
      };
      const version =
        getFirstMatch(commonVersionIdentifier, ua) ||
        getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/k-meleon/i],
    describe(ua: string): Browser {
      const browser: Browser = {
        name: 'K-Meleon',
      };
      const version =
        getFirstMatch(commonVersionIdentifier, ua) ||
        getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/micromessenger/i],
    describe(ua: string): Browser {
      const browser: Browser = {
        name: 'WeChat',
      };
      const version =
        getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, ua) ||
        getFirstMatch(commonVersionIdentifier, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/qqbrowser/i],
    describe(ua: string): Browser {
      const browser: Browser = {
        name: /qqbrowserlite/i.test(ua) ? 'QQ Browser Lite' : 'QQ Browser',
      };
      const version =
        getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, ua) ||
        getFirstMatch(commonVersionIdentifier, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/msie|trident/i],
    describe(ua: string): Browser {
      const browser: Browser = {
        name: 'Internet Explorer',
      };
      const version = getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/\sedg\//i],
    describe(ua: string): Browser {
      const browser: Browser = {
        name: 'Microsoft Edge',
      };

      const version = getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/edg([ea]|ios)/i],
    describe(ua: string): Browser {
      const browser: Browser = {
        name: 'Microsoft Edge',
      };

      const version = getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/vivaldi/i],
    describe(ua: string): Browser {
      const browser: Browser = {
        name: 'Vivaldi',
      };
      const version = getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/seamonkey/i],
    describe(ua: string): Browser {
      const browser: Browser = {
        name: 'SeaMonkey',
      };
      const version = getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/sailfish/i],
    describe(ua: string): Browser {
      const browser: Browser = {
        name: 'Sailfish',
      };

      const version = getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/silk/i],
    describe(ua: string): Browser {
      const browser: Browser = {
        name: 'Amazon Silk',
      };
      const version = getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/phantom/i],
    describe(ua: string): Browser {
      const browser: Browser = {
        name: 'PhantomJS',
      };
      const version = getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/slimerjs/i],
    describe(ua: string): Browser {
      const browser: Browser = {
        name: 'SlimerJS',
      };
      const version = getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
    describe(ua: string): Browser {
      const browser: Browser = {
        name: 'BlackBerry',
      };
      const version =
        getFirstMatch(commonVersionIdentifier, ua) ||
        getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/(web|hpw)[o0]s/i],
    describe(ua: string): Browser {
      const browser: Browser = {
        name: 'WebOS Browser',
      };
      const version =
        getFirstMatch(commonVersionIdentifier, ua) ||
        getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/bada/i],
    describe(ua: string): Browser {
      const browser: Browser = {
        name: 'Bada',
      };
      const version = getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/tizen/i],
    describe(ua: string): Browser {
      const browser: Browser = {
        name: 'Tizen',
      };
      const version =
        getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, ua) ||
        getFirstMatch(commonVersionIdentifier, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/qupzilla/i],
    describe(ua: string): Browser {
      const browser: Browser = {
        name: 'QupZilla',
      };
      const version =
        getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, ua) ||
        getFirstMatch(commonVersionIdentifier, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/fxios/i],
    describe(ua: string): Browser {
      const browser: Browser = {
        name: 'Firefox iOS',
      };
      const version = getFirstMatch(/(?:fxios)[\s/](\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/firefox|iceweasel/i],
    describe(ua: string): Browser {
      const browser: Browser = {
        name: 'Firefox',
      };
      const version = getFirstMatch(/(?:firefox|iceweasel)[\s/](\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/electron/i],
    describe(ua: string): Browser {
      const browser: Browser = {
        name: 'Electron',
      };
      const version = getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/chromium/i],
    describe(ua: string): Browser {
      const browser: Browser = {
        name: 'Chromium',
      };
      const version =
        getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, ua) ||
        getFirstMatch(commonVersionIdentifier, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/chrome|crios|crmo/i],
    describe(ua: string): Browser {
      const browser: Browser = {
        name: 'Chrome',
      };
      const version = getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/GSA/i],
    describe(ua: string): Browser {
      const browser: Browser = {
        name: 'Google Search',
      };
      const version = getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },

  /* Android Browser */
  {
    test(parser) {
      const notLikeAndroid = !parser.test(/like android/i);
      const butAndroid = parser.test(/android/i);
      return notLikeAndroid && butAndroid;
    },
    describe(ua: string): Browser {
      const browser: Browser = {
        name: 'Android Browser',
      };
      const version = getFirstMatch(commonVersionIdentifier, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },

  /* PlayStation 4 */
  {
    test: [/playstation 4/i],
    describe(ua: string): Browser {
      const browser: Browser = {
        name: 'PlayStation 4',
      };
      const version = getFirstMatch(commonVersionIdentifier, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },

  /* Safari */
  {
    test: [/safari|applewebkit/i],
    describe(ua: string): Browser {
      const browser: Browser = {
        name: 'Safari',
      };
      const version = getFirstMatch(commonVersionIdentifier, ua);
      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },

  /* Something else */
  {
    test: [/.*/i],
    describe(ua: string): Browser {
      /* Here we try to make sure that there are explicit details about the device
       * in order to decide what regexp exactly we want to apply
       * (as there is a specific decision based on that conclusion)
       */
      const regexpWithoutDeviceSpec = /^(.*)\/(.*) /;
      const regexpWithDeviceSpec = /^(.*)\/(.*)[ \t]\((.*)/;
      const hasDeviceSpec = ua.search('\\(') !== -1;
      const regexp = hasDeviceSpec ? regexpWithDeviceSpec : regexpWithoutDeviceSpec;
      return {
        name: getFirstMatch(regexp, ua),
        version: getSecondMatch(regexp, ua),
      };
    },
  },
];

export default browsersList;
