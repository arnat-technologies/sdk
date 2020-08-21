import React, { Fragment } from 'react';

const UAParser = require('ua-parser-js/dist/ua-parser.min');

const UA = new UAParser();
const browser = UA.getBrowser();
const cpu = UA.getCPU();
const device = UA.getDevice();
const engine = UA.getEngine();
const os = UA.getOS();
const ua = UA.getUA();

const setDefaults = (p, d = 'none') => p ? p : d;
const getNavigatorInstance = () => {
  if (typeof window !== 'undefined') {
    if (window.navigator || navigator) {
      return window.navigator || navigator;
    }
  }

  return false;
};
const isIOS13Check = type => {
  const nav = getNavigatorInstance();
  return nav && (nav.platform.includes(type) || nav.platform === 'MacIntel' && nav.maxTouchPoints > 1 && !window.MSStream);
};

const DEVICE_TYPES = {
  MOBILE: 'mobile',
  TABLET: 'tablet',
  SMART_TV: 'smarttv',
  CONSOLE: 'console',
  WEARABLE: 'wearable',
  BROWSER: undefined
};
const BROWSER_TYPES = {
  CHROME: 'Chrome',
  FIREFOX: 'Firefox',
  OPERA: 'Opera',
  YANDEX: 'Yandex',
  SAFARI: 'Safari',
  INTERNET_EXPLORER: 'Internet Explorer',
  EDGE: 'Edge',
  CHROMIUM: 'Chromium',
  IE: 'IE',
  MOBILE_SAFARI: 'Mobile Safari'
};
const OS_TYPES = {
  IOS: 'iOS',
  ANDROID: 'Android',
  WINDOWS_PHONE: 'Windows Phone'
};
const initialData = {
  isMobile: false,
  isTablet: false,
  isBrowser: false,
  isSmartTV: false,
  isConsole: false,
  isWearable: false
};
const checkType = type => {
  switch (type) {
    case DEVICE_TYPES.MOBILE:
      return {
        isMobile: true
      };

    case DEVICE_TYPES.TABLET:
      return {
        isTablet: true
      };

    case DEVICE_TYPES.SMART_TV:
      return {
        isSmartTV: true
      };

    case DEVICE_TYPES.CONSOLE:
      return {
        isConsole: true
      };

    case DEVICE_TYPES.WEARABLE:
      return {
        isWearable: true
      };

    case DEVICE_TYPES.BROWSER:
      return {
        isBrowser: true
      };

    default:
      return initialData;
  }
};
const broPayload = (isBrowser, browser, engine, os, ua) => ({
  isBrowser,
  browserMajorVersion: setDefaults(browser.major),
  browserFullVersion: setDefaults(browser.version),
  browserName: setDefaults(browser.name),
  engineName: setDefaults(engine.name),
  engineVersion: setDefaults(engine.version),
  osName: setDefaults(os.name),
  osVersion: setDefaults(os.version),
  userAgent: setDefaults(ua)
});
const mobilePayload = (type, device, os, ua) => ({ ...type,
  vendor: setDefaults(device.vendor),
  model: setDefaults(device.model),
  os: setDefaults(os.name),
  osVersion: setDefaults(os.version),
  ua: setDefaults(ua)
});
const stvPayload = (isSmartTV, engine, os, ua) => ({
  isSmartTV,
  engineName: setDefaults(engine.name),
  engineVersion: setDefaults(engine.version),
  osName: setDefaults(os.name),
  osVersion: setDefaults(os.version),
  userAgent: setDefaults(ua)
});
const consolePayload = (isConsole, engine, os, ua) => ({
  isConsole,
  engineName: setDefaults(engine.name),
  engineVersion: setDefaults(engine.version),
  osName: setDefaults(os.name),
  osVersion: setDefaults(os.version),
  userAgent: setDefaults(ua)
});
const wearPayload = (isWearable, engine, os, ua) => ({
  isWearable,
  engineName: setDefaults(engine.name),
  engineVersion: setDefaults(engine.version),
  osName: setDefaults(os.name),
  osVersion: setDefaults(os.version),
  userAgent: setDefaults(ua)
});

const type = checkType(device.type);

function deviceDetect() {
  const {
    isBrowser,
    isMobile,
    isTablet,
    isSmartTV,
    isConsole,
    isWearable
  } = type;

  if (isBrowser) {
    return broPayload(isBrowser, browser, engine, os, ua);
  }

  if (isSmartTV) {
    return stvPayload(isSmartTV, engine, os, ua);
  }

  if (isConsole) {
    return consolePayload(isConsole, engine, os, ua);
  }

  if (isMobile) {
    return mobilePayload(type, device, os, ua);
  }

  if (isTablet) {
    return mobilePayload(type, device, os, ua);
  }

  if (isWearable) {
    return wearPayload(isWearable, engine, os, ua);
  }
}

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

const isSafariType = () => browser.name === BROWSER_TYPES.SAFARI || browser.name === BROWSER_TYPES.MOBILE_SAFARI;

const isMobileSafariType = () => browser.name === BROWSER_TYPES.MOBILE_SAFARI;

const isOperaType = () => browser.name === BROWSER_TYPES.OPERA;

const isIEType = () => browser.name === BROWSER_TYPES.INTERNET_EXPLORER || browser.name === BROWSER_TYPES.IE;

const isElectronType = () => {
  const nav = getNavigatorInstance();
  const ua = nav && nav.userAgent.toLowerCase();
  return typeof ua === 'string' ? ua.includes('electron') : false;
};

const getIOS13 = () => {
  const nav = getNavigatorInstance();
  return nav && (/iPad|iPhone|iPod/.test(nav.platform) || nav.platform === 'MacIntel' && nav.maxTouchPoints > 1) && !window.MSStream;
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

const isSmartTV = isSmartTVType();
const isConsole = isConsoleType();
const isWearable = isWearableType();
const isMobileSafari = isMobileSafariType();
const isChromium = isChromiumType();
const isMobile = isMobileAndTabletType();
const isMobileOnly = isMobileType();
const isTablet = isTabletType();
const isBrowser = isBrowserType();
const isAndroid = isAndroidType();
const isWinPhone = isWinPhoneType();
const isIOS = isIOSType();
const isChrome = isChromeType();
const isFirefox = isFirefoxType();
const isSafari = isSafariType();
const isOpera = isOperaType();
const isIE = isIEType();
const osVersion = getOsVersion();
const osName = getOsName();
const fullBrowserVersion = getBrowserFullVersion();
const browserVersion = getBrowserVersion();
const browserName = getBrowserName();
const mobileVendor = getMobileVendor();
const mobileModel = getMobileModel();
const engineName = getEngineName();
const engineVersion = getEngineVersion();
const getUA = getUseragent();
const isEdge = isEdgeType();
const isYandex = isYandexType();
const deviceType = getDeviceType();
const isIOS13 = getIOS13();
const isIPad13 = getIPad13();
const isIPhone13 = getIphone13();
const isIPod13 = getIPod13();
const isElectron = isElectronType();

const AndroidView = ({
  renderWithFragment,
  children,
  viewClassName,
  style
}) => {
  return isAndroid ? renderWithFragment ? React.createElement(Fragment, null, children) : React.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};
const BrowserView = ({
  renderWithFragment,
  children,
  viewClassName,
  style
}) => {
  return isBrowser ? renderWithFragment ? React.createElement(Fragment, null, children) : React.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};
const IEView = ({
  renderWithFragment,
  children,
  viewClassName,
  style
}) => {
  return isIE ? renderWithFragment ? React.createElement(Fragment, null, children) : React.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};
const IOSView = ({
  renderWithFragment,
  children,
  viewClassName,
  style
}) => {
  return isIOS ? renderWithFragment ? React.createElement(Fragment, null, children) : React.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};
const MobileView = ({
  renderWithFragment,
  children,
  viewClassName,
  style
}) => {
  return isMobile ? renderWithFragment ? React.createElement(Fragment, null, children) : React.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};
const TabletView = ({
  renderWithFragment,
  children,
  viewClassName,
  style
}) => {
  return isTablet ? renderWithFragment ? React.createElement(Fragment, null, children) : React.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};
const WinPhoneView = ({
  renderWithFragment,
  children,
  viewClassName,
  style
}) => {
  return isWinPhone ? renderWithFragment ? React.createElement(Fragment, null, children) : React.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};
const MobileOnlyView = ({
  renderWithFragment,
  children,
  viewClassName,
  style
}) => {
  return isMobileOnly ? renderWithFragment ? React.createElement(Fragment, null, children) : React.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};
const SmartTVView = ({
  renderWithFragment,
  children,
  viewClassName,
  style
}) => {
  return isSmartTV ? renderWithFragment ? React.createElement(Fragment, null, children) : React.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};
const ConsoleView = ({
  renderWithFragment,
  children,
  viewClassName,
  style
}) => {
  return isConsole ? renderWithFragment ? React.createElement(Fragment, null, children) : React.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};
const WearableView = ({
  renderWithFragment,
  children,
  viewClassName,
  style
}) => {
  return isWearable ? renderWithFragment ? React.createElement(Fragment, null, children) : React.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};
const CustomView = ({
  renderWithFragment,
  children,
  viewClassName,
  style,
  condition
}) => {
  return condition ? renderWithFragment ? React.createElement(Fragment, null, children) : React.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};

function withOrientationChange(WrappedComponent) {
  // TODO: check PascalCase on compilation time
  return class WithOrientationChange extends React.Component {
    constructor(props) {
      super(props);
      this.isEventListenerAdded = false;
      this.handleOrientationChange = this.handleOrientationChange.bind(this);
      this.onOrientationChange = this.onOrientationChange.bind(this);
      this.onPageLoad = this.onPageLoad.bind(this);
      this.state = {
        isLandscape: false,
        isPortrait: false
      };
    }

    handleOrientationChange() {
      if (!this.isEventListenerAdded) {
        this.isEventListenerAdded = true;
      }

      const orientation = window.innerWidth > window.innerHeight ? 90 : 0;
      this.setState({
        isPortrait: orientation === 0,
        isLandscape: orientation === 90
      });
    }

    onOrientationChange() {
      this.handleOrientationChange();
    }

    onPageLoad() {
      this.handleOrientationChange();
    }

    componentDidMount() {
      if (typeof window !== undefined && isMobile) {
        if (!this.isEventListenerAdded) {
          this.handleOrientationChange();
          window.addEventListener('load', this.onPageLoad, false);
        } else {
          window.removeEventListener('load', this.onPageLoad, false);
        }

        window.addEventListener('resize', this.onOrientationChange, false);
      }
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.onOrientationChange, false);
    }

    render() {
      return React.createElement(WrappedComponent, Object.assign({}, this.props, {
        isLandscape: this.state.isLandscape,
        isPortrait: this.state.isPortrait
      }));
    }

  };
}

export { AndroidView, BrowserView, ConsoleView, CustomView, IEView, IOSView, MobileOnlyView, MobileView, SmartTVView, TabletView, WearableView, WinPhoneView, browserName, browserVersion, deviceDetect, deviceType, engineName, engineVersion, fullBrowserVersion, getUA, isAndroid, isBrowser, isChrome, isChromium, isConsole, isEdge, isElectron, isFirefox, isIE, isIOS, isIOS13, isIPad13, isIPhone13, isIPod13, isMobile, isMobileOnly, isMobileSafari, isOpera, isSafari, isSmartTV, isTablet, isWearable, isWinPhone, isYandex, mobileModel, mobileVendor, osName, osVersion, withOrientationChange };
//# sourceMappingURL=index-modules.js.map
