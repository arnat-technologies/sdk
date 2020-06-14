import {
  compareVersions,
  getAndroidVersionName,
  getBrowserAlias,
  getBrowserTypeByAlias,
  getFirstMatch,
  getMacOSVersionName,
  getSecondMatch,
  getVersionPrecision,
  getWindowsVersionName,
  matchAndReturnConst,
} from '../../src/utils';

it('getFirstMatch', () => {
  const matchedVersion = getFirstMatch(/version\/(\S+)/i, 'Chrome Version/11.11.11');
  expect(matchedVersion).toBe('11.11.11');
});

it('getSecondMatch', () => {
  const matchedVersion = getSecondMatch(
    /version\/(\S+).*version\/(\S+)/i,
    'Chrome Version/11.11.11 Chrome Version/22.22.22',
  );
  expect(matchedVersion).toBe('22.22.22');
});

it('matchAndReturnConst', () => {
  const _const = matchAndReturnConst(/version/i, 'version', '_const');
  expect(_const).toBe('_const');
});

it('getWindowsVersionName', () => {
  expect(getWindowsVersionName('NT 5.0')).toBe('2000');
  expect(getWindowsVersionName('XXX')).toBe(void 0);
});

it('getMacOSVersionName', () => {
  expect(getMacOSVersionName('10.14.5')).toBe('Mojave');
  expect(getMacOSVersionName('10.15')).toBe('Catalina');
  expect(getMacOSVersionName('10.999999')).toBe(void 0);
  expect(getMacOSVersionName('XXX')).toBe(void 0);
});

it('getAndroidVersionName', () => {
  expect(getAndroidVersionName('1.0')).toBe(void 0);
  expect(getAndroidVersionName('8.0')).toBe('Oreo');
  expect(getAndroidVersionName('9')).toBe('Pie');
  expect(getAndroidVersionName('XXX')).toBe(void 0);
});

it('getVersionPrecision', () => {
  const precision = getVersionPrecision('10.14.5');
  expect(precision).toBe(3);
});

it('compareVersions', () => {
  const comparisionsTasks = [
    ['9.0', '10', -1],
    ['11', '10', 1],
    ['1.10.2.1', '1.8.2.1.90', 1],
    ['1.010.2.1', '1.08.2.1.90', 1],
    ['1.10.2.1', '1.10.2.1', 0],
    ['1.10.2.1', '1.10.2', 0, true],
    ['1.10.2.1', '1.10', 0, true],
    ['1.10.2.1', '1', 0, true],
    ['1.10.2.1', '1.0800.2', -1],
    ['1.0.0-alpha', '1.0.0-alpha.1', -1],
    ['1.0.0-alpha.1', '1.0.0-alpha.beta', -1],
    ['1.0.0-alpha.beta', '1.0.0-beta', -1],
    ['1.0.0-beta', '1.0.0-beta.2', -1],
    ['1.0.0-beta.11', '1.0.0-rc.1', -1],
    ['1.0.0-rc.1', '1.0.0', -1],
  ];

  comparisionsTasks.forEach((testingParams) => {
    const versionA = testingParams[0];
    const versionB = testingParams[1];
    const result = testingParams[2];
    const isLoose = testingParams.length > 3 ? testingParams[3] : false;
    let matching = isLoose ? '~' : ' == ';

    if (result > 0) {
      matching = ' > ';
    } else if (result < 0) {
      matching = ' < ';
    }

    expect(compareVersions(versionA, versionB, !!isLoose)).toBe(result);
  });
});

it('getBrowserAlias', () => {
  expect(getBrowserAlias('Microsoft Edge')).toBe('edge');
  expect(getBrowserAlias('Unexisting Browser')).toBe(void 0);
});

it('getBrowserTypeByAlias', () => {
  expect(getBrowserTypeByAlias('edge')).toBe('Microsoft Edge');
  expect(getBrowserTypeByAlias(void 0)).toBe('');
});
