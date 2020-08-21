import {
  browser,
  device,
  engine,
  getNavigatorInstance,
  isIOS13Check,
  os,
  setDefaults,
  ua,
} from './get-ua-data';
import { BROWSER_TYPES, DEVICE_TYPES, OS_TYPES } from './types';

const isMobileType = () => device.type === DEVICE_TYPES.MOBILE;
const isTabletType = () => device.type === DEVICE_TYPES.TABLET;

const isMobileAndTabletType = () => {
  switch (device.type) {
    case DEVICE_TYPES.MOBILE:
    case DEVICE_TYPES.TABLET:
      return true;
    default:
      return false;
  }
};

const isSmartTVType = () => device.type === DEVICE_TYPES.SMART_TV;
const isBrowserType = () => device.type === DEVICE_TYPES.BROWSER;
const isWearableType = () => device.type === DEVICE_TYPES.WEARABLE;
const isConsoleType = () => device.type === DEVICE_TYPES.CONSOLE;
const isAndroidType = () => os.name === OS_TYPES.ANDROID;
const isWinPhoneType = () => os.name === OS_TYPES.WINDOWS_PHONE;
const isIOSType = () => os.name === OS_TYPES.IOS;
const isChromeType = () => browser.name === BROWSER_TYPES.CHROME;
const isFirefoxType = () => browser.name === BROWSER_TYPES.FIREFOX;
const isChromiumType = () => browser.name === BROWSER_TYPES.CHROMIUM;
const isEdgeType = () => browser.name === BROWSER_TYPES.EDGE;
const isYandexType = () => browser.name === BROWSER_TYPES.YANDEX;
const isSafariType = () =>
  browser.name === BROWSER_TYPES.SAFARI || browser.name === BROWSER_TYPES.MOBILE_SAFARI;
const isMobileSafariType = () => browser.name === BROWSER_TYPES.MOBILE_SAFARI;
const isOperaType = () => browser.name === BROWSER_TYPES.OPERA;
const isIEType = () =>
  browser.name === BROWSER_TYPES.INTERNET_EXPLORER || browser.name === BROWSER_TYPES.IE;
const isElectronType = () => {
  const nav = getNavigatorInstance();
  const ua = nav && nav.userAgent.toLowerCase();

  return typeof ua === 'string' ? ua.includes('electron') : false;
};

const getIOS13 = () => {
  const nav = getNavigatorInstance();
  return (
    nav &&
    (/iPad|iPhone|iPod/.test(nav.platform) ||
      (nav.platform === 'MacIntel' && nav.maxTouchPoints > 1)) &&
    !window.MSStream
  );
};

const getIPad13 = () => isIOS13Check('iPad');
const getIphone13 = () => isIOS13Check('iPhone');
const getIPod13 = () => isIOS13Check('iPod');

const getBrowserFullVersion = () => setDefaults(browser.version);
const getBrowserVersion = () => setDefaults(browser.major);
const getOsVersion = () => setDefaults(os.version);
const getOsName = () => setDefaults(os.name);
const getBrowserName = () => setDefaults(browser.name);
const getMobileVendor = () => setDefaults(device.vendor);
const getMobileModel = () => setDefaults(device.model);
const getEngineName = () => setDefaults(engine.name);
const getEngineVersion = () => setDefaults(engine.version);
const getUseragent = () => setDefaults(ua);
const getDeviceType = () => setDefaults(device.type, 'browser');

export const isSmartTV = isSmartTVType();
export const isConsole = isConsoleType();
export const isWearable = isWearableType();
export const isMobileSafari = isMobileSafariType();
export const isChromium = isChromiumType();
export const isMobile = isMobileAndTabletType();
export const isMobileOnly = isMobileType();
export const isTablet = isTabletType();
export const isBrowser = isBrowserType();
export const isAndroid = isAndroidType();
export const isWinPhone = isWinPhoneType();
export const isIOS = isIOSType();
export const isChrome = isChromeType();
export const isFirefox = isFirefoxType();
export const isSafari = isSafariType();
export const isOpera = isOperaType();
export const isIE = isIEType();
export const osVersion = getOsVersion();
export const osName = getOsName();
export const fullBrowserVersion = getBrowserFullVersion();
export const browserVersion = getBrowserVersion();
export const browserName = getBrowserName();
export const mobileVendor = getMobileVendor();
export const mobileModel = getMobileModel();
export const engineName = getEngineName();
export const engineVersion = getEngineVersion();
export const getUA = getUseragent();
export const isEdge = isEdgeType();
export const isYandex = isYandexType();
export const deviceType = getDeviceType();
export const isIOS13 = getIOS13();
export const isIPad13 = getIPad13();
export const isIPhone13 = getIphone13();
export const isIPod13 = getIPod13();
export const isElectron = isElectronType();