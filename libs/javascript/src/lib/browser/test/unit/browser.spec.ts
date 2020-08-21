// import Parser from '../../src/parser';
import { clear, mockUserAgent } from 'jest-useragent-mock';

import {
  BROWSER_MAP,
  getBrowser,
  getBrowserName,
  getBrowserVersion,
  getEngineName,
  getOSName,
  getOSVersion,
  getUA,
  is,
  isBrowser,
  OS_MAP,
  PLATFORMS_MAP,
  satisfies,
  some,
} from '../../.';
import { test } from './../../src/parser';

const mockAgent =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Safari/605.1.15';
const mockEdgeAgent =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.74 Safari/537.36 Edg/79.0.309.43';

describe('Browser', () => {
  afterEach(() => {
    clear();
  });

  beforeEach(() => {
    mockUserAgent(mockAgent);
  });

  it('getUA returns a correct UA', () => {
    expect(getUA()).toEqual(mockAgent);
  });

  it('test', () => {
    expect(test(/Gecko/i)).toBeTruthy();
  });

  it('parseBrowser is being called when the Parser.getBrowser() is called', () => {
    const b = getBrowser();
    expect(b.name).toBe('Safari');
    expect(b.version).toBe('13.1.1');
  });

  it('getBrowserName returns a correct result', () => {
    expect(getBrowserName()).toBe('Safari');
  });

  it('getBrowserVersion returns a correct result', () => {
    expect(getBrowserVersion()).toBe('13.1.1');
  });

  it('getOSName gives a name of the browser', () => {
    expect(getOSName()).toBe('macOS');
  });

  it('getOSName gives a lower-cased name of the browser', () => {
    expect(getOSName(true)).toBe('macos');
  });

  it('getOSVersion returns a correct result', () => {
    expect(getOSVersion()).toBe('10.15.5');
  });

  it('getEngineName gives a name of the engine', () => {
    expect(getEngineName()).toBe('WebKit');
  });

  it('getEngineName gives a lower-cased name of the engine', () => {
    expect(getEngineName(true)).toBe('webkit');
  });

  it('satisfies should make simple comparisons', () => {
    expect(satisfies({ safari: '>13.1.0' })).toBeTruthy();
    expect(satisfies({ safari: '<13.1.2' })).toBeTruthy();
    expect(satisfies({ safari: '=13.1.1' })).toBeTruthy();
    expect(satisfies({ safari: '~13.1' })).toBeTruthy();
    expect(satisfies({ safari: '>=13' })).toBeTruthy();
    expect(satisfies({ safari: '<=13' })).toBeTruthy();
    expect(satisfies({ safari: '>=13.0' })).toBeTruthy();
    expect(satisfies({ safari: '>=13.0.1' })).toBeTruthy();
    expect(satisfies({ safari: '<=13.1.1' })).toBeTruthy();
    expect(satisfies({ safari: '>=13.2.1' })).toBeFalsy();
    expect(satisfies({ safari: '<=13.2.1' })).toBeTruthy();
    expect(satisfies({ safari: '>=13.0.01' })).toBeTruthy();
    expect(satisfies({ safari: '~13' })).toBeTruthy();
  });

  it('satisfies should make complex comparison', () => {
    expect(
      satisfies({
        macos: {
          safari: '>11',
        },
        ios: {
          safari: '>10',
        },
        opera: '>42',
      }),
    ).toBeTruthy();
  });

  it('satisfies should respect platform and OS specific declarations', () => {
    expect(
      satisfies({
        macos: {
          opera: '>45',
        },
        opera: '>42',
      }),
    ).toBeFalsy();

    expect(
      satisfies({
        desktop: {
          opera: '>45',
        },
        opera: '>42',
      }),
    ).toBeFalsy();

    expect(
      satisfies({
        macos: {
          opera: '>45',
        },
        desktop: {
          opera: '>42',
        },
        opera: '>42',
      }),
    ).toBeFalsy();

    expect(
      satisfies({
        macos: {
          chrome: '>45',
        },
        desktop: {
          chrome: '>42',
        },
        firefox: '>42',
      }),
    ).toBeFalsy();
  });

  it('satisfies for versionless UA strings', () => {
    expect(
      satisfies({
        safari: '>9',
      }),
    ).toBeTruthy();
  });

  it('satisfies should consider aliases while handling browsers', () => {
    mockUserAgent(mockEdgeAgent);
    expect(satisfies({ 'Microsoft Edge': '=79.0.309.43' })).toBeTruthy();
    expect(satisfies({ 'microsoft edge': '=79.0.309.43' })).toBeTruthy();
    expect(satisfies({ edge: '=79.0.309.43' })).toBeTruthy();
    expect(satisfies({ Edge: '=79.0.309.43' })).toBeTruthy();
  });

  it('is should pass', () => {
    expect(is('safari')).toBeTruthy();
    expect(is('desktop')).toBeTruthy();
    expect(is('macos')).toBeTruthy();
  });

  it('is using constants should pass', () => {
    expect(is(BROWSER_MAP.safari)).toBeTruthy();
    expect(is(PLATFORMS_MAP.desktop)).toBeTruthy();
    expect(is(OS_MAP.MacOS)).toBeTruthy();
  });

  it('some should pass', () => {
    expect(some(['safari', 'chrome', 'firefox'])).toBeTruthy();
    expect(some(['macos', 'windows'])).toBeTruthy();
    expect(some(['chrome', 'firefox'])).toBeFalsy();
    expect(some([])).toBeFalsy();
    expect(some()).toBeFalsy();
  });

  it('isBrowser should pass when not loosely checking', () => {
    mockUserAgent(mockEdgeAgent);
    expect(isBrowser('Microsoft Edge', false)).toBeTruthy();
    expect(isBrowser('microsoft edge', false)).toBeTruthy();
    expect(isBrowser('mIcrosoft eDge', false)).toBeTruthy();
    expect(isBrowser('edge', false)).toBeFalsy();
    expect(isBrowser('Edge', false)).toBeFalsy();
  });

  it('isBrowser should pass when loosely checking', () => {
    mockUserAgent(mockEdgeAgent);
    expect(isBrowser('Microsoft Edge', true)).toBeTruthy();
    expect(isBrowser('microsoft edge', true)).toBeTruthy();
    expect(isBrowser('mIcrosoft eDge', true)).toBeTruthy();
    expect(isBrowser('edge', true)).toBeTruthy();
    expect(isBrowser('Edge', true)).toBeTruthy();
  });
});
