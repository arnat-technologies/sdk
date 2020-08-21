import compare from './collection-compare';

it('strictly equal primitives return true', function () {
  expect(compare(3, 3)).toBeTruthy();
  expect(compare('3', '3')).toBeTruthy();
  expect(compare(true, true)).toBeTruthy();
  expect(compare(null, null)).toBeTruthy();
  expect(compare(undefined, undefined)).toBeTruthy();
});

it('not strictly equal primitives return false', function () {
  expect(compare(3, 4)).toBeFalsy();
  expect(compare('3', '4')).toBeFalsy();
  expect(compare(true, false)).toBeFalsy();
  expect(compare(null, undefined)).toBeFalsy();
  expect(compare(undefined, null)).toBeFalsy();
});

it('two NaN values return true', function () {
  expect(compare(NaN, NaN)).toBeTruthy();
});

it('alike arrays return true', function () {
  const value1 = [1, 2, 3, 4];
  const value2 = [1, 2, 3, 4];
  expect(compare(value1, value2)).toBeTruthy();
  expect(compare(value1, value2)).toBeTruthy();
  const value3 = [1, 2, [3, 4], 5];
  const value4 = [1, 2, [3, 4], 5];
  expect(compare(value3, value4)).toBeTruthy();
});

it('unalike arrays return false', function () {
  const value1 = [1, 2, 3, 4];
  const value2 = [1, 2, 3];
  expect(compare(value1, value2)).toBeFalsy();
  const value3 = [1, 2, [3, 4], 5];
  const value4 = [1, 2, [3, 3], 5];
  expect(compare(value3, value4)).toBeFalsy();
});

it('alike simple objects return true', function () {
  const value1 = { a: 4, b: 3 };
  const value2 = { a: 4, b: 3 };
  expect(compare(value1, value2)).toBeTruthy();
  const value3 = { a: 4, b: 3 };
  const value4 = { a: 4, b: 2 + 1 };
  expect(compare(value3, value4)).toBeTruthy();
  const value5 = { a: 4, b: 3 };
  const value6 = { b: 2 + 1, a: 4 };
  expect(compare(value5, value6)).toBeTruthy();
});

it('unalike simple objects return false', function () {
  const value1 = { a: 4, b: 4 };
  const value2 = { a: 4, b: 3 };
  expect(compare(value1, value2)).toBeFalsy();
  const value3 = { a: 4, b: 4 };
  const value4 = { a: 4, b: 4, c: 5 };
  expect(compare(value3, value4)).toBeFalsy();
  const value5 = { a: 4, b: 3 };
  const value6 = { a: 4, b: 2 + 2 };
  expect(compare(value5, value6)).toBeFalsy();
  const value7 = { a: 4, b: 3 };
  const value8 = { b: 2 + 2, a: 4 };
  expect(compare(value7, value8)).toBeFalsy();
});

it('alike complex objects return true', function () {
  const value1 = { a: [4, 2], b: 3 };
  const value2 = { a: [4, 2], b: 3 };
  expect(compare(value1, value2)).toBeTruthy();
  const value3 = { a: { c: 5, d: [1, 2, 3] }, b: /44/ };
  const value4 = { a: { c: 5, d: [1, 4 / 2, 3] }, b: /44/ };
  expect(compare(value3, value4)).toBeTruthy();
  const value5 = [1, 2, [{ a: 5, b: '*', c: 9 }], false, [1, [2, 3]]];
  const value6 = [1, 2, [{ b: '*', c: 9, a: 5 }], false, [1, [2, 3]]];
  expect(compare(value5, value6)).toBeTruthy();
});

it('unalike complex objects return false', function () {
  const value1 = { a: [4, 2], b: 3 };
  const value2 = { a: [4, 2], c: 3 };
  expect(compare(value1, value2)).toBeFalsy();
  const value3 = { a: { c: 5, d: [1, 2, 3] }, b: /44/ };
  const value4 = { a: { c: 5, d: [1, 4 / 2, 3] }, b: /44/, e: 5 };
  expect(compare(value3, value4)).toBeFalsy();
  const value5 = [1, 2, [{ a: 5, b: '*', c: 9 }], false, [1, [2, 3]]];
  const value6 = [1, 2, [{ b: '?', c: 9, a: 5 }], false, [1, [2, 3]]];
  expect(compare(value5, value6)).toBeFalsy();
});

it('alike functions return true', function () {
  expect(
    compare(
      function () {},
      function () {}
    )
  ).toBeTruthy();
  expect(
    compare(
      function (a, b) {
        return a + b;
      },
      function (a, b) {
        return a + b;
      }
    )
  ).toBeTruthy();
  expect(compare([].slice, [].slice)).toBeTruthy();
});

it('unalike functions return true', function () {
  expect(
    compare(
      function () {},
      function (a) {}
    )
  ).toBeFalsy();
  expect(
    compare(
      function (a, b) {
        return a + b;
      },
      function (a, b) {
        return a - b;
      }
    )
  ).toBeFalsy();
  expect(compare([].slice, [].splice)).toBeFalsy();
});

it('alike regexps return true', function () {
  expect(compare(/hello/, /hello/)).toBeTruthy();
});

it('unalike regexps return true', function () {
  expect(compare(/hello/, /hello/g)).toBeFalsy();
});

it('alike dates return true', function () {
  expect(compare(new Date(2016, 8, 3), new Date(2016, 8, 3))).toBeTruthy();
});

it('alike dates return true', function () {
  expect(compare(new Date(2016, 8, 3), new Date(2016, 8, 3, 16))).toBeFalsy();
});

// https://github.com/angus-c/just/issues/98
it('unalike complex objects do not crash when objects/arrays become null', function () {
  const value1 = { a: [4, 2], b: 3 };
  const value2 = { a: null, c: 3 };
  expect(compare(value1, value2)).toBeFalsy();
  const value3 = { a: { a: 1 }, b: 3 };
  const value4 = { a: null, c: 3 };
  expect(compare(value3, value4)).toBeFalsy();
});
