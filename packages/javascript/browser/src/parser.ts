import { Browser, BrowserDetail, Engine, OS, Platform } from './interfaces';
import browserParsersList from './parser-browsers';
import enginesParsersList from './parser-engines';
import osParsersList from './parser-os';
import platformParsersList from './parser-platforms';
import { compareVersions, getBrowserTypeByAlias } from './utils';

/**
 * Is anything? Check if the browser is called "anything",
 * the OS called "anything" or the platform called "anything"
 *
 * @param text anything
 * @returns boolean result of anything.
 */
export const is = (anything: string): boolean =>
  isBrowser(anything) || isOS(anything) || isPlatform(anything);

/**
 * Check if any of the given values satisfies is(anything)
 * @param String[] anythings
 * @returns Boolean
 */
export const some = (anythings = []): boolean => anythings.some((anything) => is(anything));

/**
 * Test a UA string for a regexp
 *
 * @param RegExp regex
 * @return boolean
 */
export const test = (regex): boolean => regex.test(getUA());

/**
 * Get parsed browser object
 * @returns object
 */
export const getBrowser = (): Browser => {
  const browserDescriptor = browserParsersList.find((_browser) => {
    if (typeof _browser.test === 'function') {
      return _browser.test({ test, getBrowserName, getOSName, getOSVersion });
    }

    if (_browser.test instanceof Array) {
      return _browser.test.some((condition) => test(condition));
    }

    throw new Error("Browser's test function is not valid");
  });

  return browserDescriptor ? browserDescriptor.describe(getUA()) : {};
};

/**
 * Get browser's name
 * @returns Browser's name or an empty string
 */
export const getBrowserName = (toLowerCase = false): string => {
  if (toLowerCase) {
    return String(getBrowser().name).toLowerCase() || '';
  }
  return getBrowser().name || '';
};

/**
 * Get browser's version
 * @returns version of browser
 */
export const getBrowserVersion = (): string => getBrowser().version;

/**
 * Get OS
 *
 * ```javascript
 * getOS();
 * {
 *   name: 'macOS',
 *   version: '10.11.12'
 * }
 * ```
 *
 * @returns Object
 */
export const getOS = (): OS => {
  const os = osParsersList.find((_os) => {
    if (typeof _os.test === 'function') {
      return _os.test({ test, getBrowserName });
    }

    if (_os.test instanceof Array) {
      return _os.test.some((condition) => test(condition));
    }

    throw new Error("Browser's test function is not valid");
  });

  if (os) {
    return os.describe(getUA());
  }
};

/**
 * Get OS name
 * @param Boolean [toLowerCase] return lower-cased value
 * @returns String name of the OS — macOS, Windows, Linux, etc.
 */
export const getOSName = (toLowerCase = false): string => {
  const { name } = getOS();

  if (toLowerCase) {
    return String(name).toLowerCase() || '';
  }

  return name || '';
};

/**
 * Get OS version
 * @returns {String} full version with dots ('10.11.12', '5.6', etc)
 */
export const getOSVersion = (): string => getOS().version;

/**
 * Get platform name
 * @param Boolean [toLowerCase=false]
 * @returns any
 */
export const getPlatformType = (toLowerCase = false): string => {
  const { type } = getPlatform();

  if (toLowerCase) {
    return String(type).toLowerCase() || '';
  }

  return type || '';
};

/**
 * Get parsed platform
 * @returns Object
 */
export const getPlatform = (): Platform => {
  const platform = platformParsersList.find((_platform) => {
    if (typeof _platform.test === 'function') {
      return _platform.test({ test, getBrowserName, getOSName, getOSVersion });
    }

    if (_platform.test instanceof Array) {
      return _platform.test.some((condition) => test(condition));
    }

    throw new Error("Browser's test function is not valid");
  });

  if (platform) {
    return platform.describe(getUA());
  }
};

/**
 * Get engines's name
 * @returns String Engines's name or an empty string
 */
export const getEngineName = (toLowerCase = false): string => {
  if (toLowerCase) {
    return String(getEngine().name).toLowerCase() || '';
  }
  return getEngine().name || '';
};

/**
 * Get parsed platform
 * @returns Object
 */
export const getEngine = (): Engine => {
  const engine = enginesParsersList.find((_engine) => {
    if (typeof _engine.test === 'function') {
      return _engine.test({ test, getBrowserName, getOSName, getOSVersion });
    }

    if (_engine.test instanceof Array) {
      return _engine.test.some((condition) => test(condition));
    }

    throw new Error("Browser's test function is not valid");
  });

  if (engine) {
    return engine.describe(getUA());
  }
};

/**
 * Parse full information about the browser
 * @returns BrowserDetail
 */
export const getAll = (): BrowserDetail => ({
  browser: getBrowser(),
  os: getOS(),
  platform: getPlatform(),
  engine: getEngine(),
});

/**
 * Check if parsed browser matches certain conditions
 *
 * @param {Object} checkTree It's one or two layered object,
 * which can include a platform or an OS on the first layer
 * and should have browsers specs on the bottom-laying layer
 *
 * @returns {Boolean|undefined} Whether the browser satisfies the set conditions or not.
 * Returns `undefined` when the browser is no described in the checkTree object.
 *
 * @example
 * const browser = Bowser.getParser(window.navigator.userAgent);
 * if (browser.satisfies({chrome: '>118.01.1322' }))
 * // or with os
 * if (browser.satisfies({windows: { chrome: '>118.01.1322' } }))
 * // or with platforms
 * if (browser.satisfies({desktop: { chrome: '>118.01.1322' } }))
 */
export const satisfies = (checkTree) => {
  const platformsAndOSes = {};
  let platformsAndOSCounter = 0;
  const browsers = {};
  let browsersCounter = 0;

  const allDefinitions = Object.keys(checkTree);

  allDefinitions.forEach((key) => {
    const currentDefinition = checkTree[key];
    if (typeof currentDefinition === 'string') {
      browsers[key] = currentDefinition;
      browsersCounter += 1;
    } else if (typeof currentDefinition === 'object') {
      platformsAndOSes[key] = currentDefinition;
      platformsAndOSCounter += 1;
    }
  });

  if (platformsAndOSCounter > 0) {
    const platformsAndOSNames = Object.keys(platformsAndOSes);
    const OSMatchingDefinition = platformsAndOSNames.find((name) => isOS(name));

    if (OSMatchingDefinition) {
      const osResult = satisfies(platformsAndOSes[OSMatchingDefinition]);

      if (osResult !== void 0) {
        return osResult;
      }
    }

    const platformMatchingDefinition = platformsAndOSNames.find((name) => isPlatform(name));
    if (platformMatchingDefinition) {
      const platformResult = satisfies(platformsAndOSes[platformMatchingDefinition]);

      if (platformResult !== void 0) {
        return platformResult;
      }
    }
  }

  if (browsersCounter > 0) {
    const browserNames = Object.keys(browsers);
    const matchingDefinition = browserNames.find((name) => isBrowser(name, true));

    if (matchingDefinition !== void 0) {
      return compareVersion(browsers[matchingDefinition]);
    }
  }

  return undefined;
};

/**
 * Check if the browser name equals the passed string
 *
 * @param browserName The string to compare with the browser name
 * @param includingAlias The flag showing whether alias will be included into comparison
 * @returns Boolean
 */
export const isBrowser = (browserName: string, includingAlias = false): boolean => {
  const defaultBrowserName = getBrowserName().toLowerCase();
  let browserNameLower = browserName.toLowerCase();
  const alias = getBrowserTypeByAlias(browserNameLower);

  if (includingAlias && alias) {
    browserNameLower = alias.toLowerCase();
  }
  return browserNameLower === defaultBrowserName;
};

const compareVersion = (version: string): boolean => {
  let expectedResults = [0];
  let comparableVersion = version;
  let isLoose = false;

  const currentBrowserVersion = getBrowserVersion();

  if (typeof currentBrowserVersion !== 'string') {
    return void 0;
  }

  if (version[0] === '>' || version[0] === '<') {
    comparableVersion = version.substr(1);
    if (version[1] === '=') {
      isLoose = true;
      comparableVersion = version.substr(2);
    } else {
      expectedResults = [];
    }
    if (version[0] === '>') {
      expectedResults.push(1);
    } else {
      expectedResults.push(-1);
    }
  } else if (version[0] === '=') {
    comparableVersion = version.substr(1);
  } else if (version[0] === '~') {
    isLoose = true;
    comparableVersion = version.substr(1);
  }

  return (
    expectedResults.indexOf(compareVersions(currentBrowserVersion, comparableVersion, isLoose)) > -1
  );
};

/**
 * @param String osName
 * @returns String
 */
export const isOS = (osName: string): boolean => getOSName(true) === String(osName).toLowerCase();

/**
 * @param String platformType
 * @returns Boolean
 */
export const isPlatform = (platformType: string): boolean =>
  getPlatformType(true) === String(platformType).toLowerCase();

/**
 * @param String engineName
 * @returns Boolean
 */
export const isEngine = (engineName: string): boolean =>
  getEngineName(true) === String(engineName).toLowerCase();

/**
 * Get UserAgent string of current Parser instance
 * @returns String User-Agent String of the current <Parser> object
 */
export const getUA = (): string => window.navigator.userAgent;
