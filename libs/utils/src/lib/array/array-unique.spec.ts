import unique from './array-unique';
import compare from '../collection/collection-compare';

it('primitives', function () {
  expect(unique([1, 2, 3, 2, 3, 4, 1])).toStrictEqual([1, 2, 3, 4]);
  expect(unique(['a', 'c', 'a', 'b', 'a', 'b', 'c'])).toStrictEqual([
    'a',
    'c',
    'b',
  ]);
  expect(unique([true, true, false, false, true])).toStrictEqual([true, false]);
  expect(compare(unique([NaN, NaN, NaN]), [NaN])).toBeTruthy();
});

it('objects by equality', function () {
  const a = { a: 1 };
  const b = { b: 3 };
  const c = { c: 2 };
  expect(unique([a, b, a, c, a])).toStrictEqual([a, b, c]);
  const fn1 = function () {};
  const fn2 = function () {};
  const fn3 = function () {};
  expect(unique([fn1, fn2, fn3, fn2, fn3, fn2])).toStrictEqual([fn1, fn2, fn3]);
  const arr1 = [1, 2, 3];
  const arr2 = [2, 3, 4];
  const arr3 = [4, 5, 6];
  expect(unique([arr1, arr3, arr3, arr1, arr2])).toStrictEqual([
    arr1,
    arr3,
    arr2,
  ]);
});

it('presorted arrays', function () {
  expect(unique([1, 1, 2, 2, 3, 3, 4, 4], true)).toStrictEqual([1, 2, 3, 4]);
  expect(unique(['a', 'a', 'b', 'b', 'c', 'c'], true)).toStrictEqual([
    'a',
    'b',
    'c',
  ]);
  const a = { a: 1 };
  const b = { b: 3 };
  const c = { c: 2 };
  expect(unique([a, a, b, b, c, c], true)).toStrictEqual([a, b, c]);
  // bogus sorted declarations fail
  expect(unique([1, 2, 1, 3, 4, 4, 1], true)).not.toStrictEqual([1, 2, 3, 4]);
  expect(unique([a, b, a, c, b, b], true)).not.toStrictEqual([a, b, c]);
});

it('using strings option', function () {
  // works for arrays of strings
  expect(unique(['a', 'b', 'a', 'b', 'a', 'c'], false, true)).toStrictEqual([
    'a',
    'b',
    'c',
  ]);
  // converts other homogenous primitives to strings
  expect(unique([1, 2, 1, 2, 3, 3, 4, 4], false, true)).toStrictEqual([
    '1',
    '2',
    '3',
    '4',
  ]);
  expect(unique([false, true, false, false], false, true)).toStrictEqual([
    'false',
    'true',
  ]);
  // works for arrays of same-type non-primitives (ignores strings flag)
  const a = { a: 1 };
  const b = { b: 3 };
  const c = { c: 2 };
  expect(unique([a, b, a, b, b, c], false, true)).toStrictEqual([a, b, c]);
  const fn1 = function () {};
  const fn2 = function () {};
  const fn3 = function () {};
  expect(unique([fn1, fn2, fn3, fn2, fn3, fn2], false, true)).toStrictEqual([
    fn1,
    fn2,
    fn3,
  ]);
  // fails for arrays of different-type primitives
  expect(unique([1, 2, '1', 2, '3', false], false, true)).not.toStrictEqual([
    1,
    2,
    '1',
    '3',
    false,
  ]);
  // works when sorted option overrides
  expect(unique(['a', 'b', 'b', 'b', 'b', 'c'], true, true)).toStrictEqual([
    'a',
    'b',
    'c',
  ]);
});

it('throws if first argument is not an array', function () {
  expect(() => unique(undefined)).toThrowError();
  expect(() => unique(null, true)).toThrowError();
  expect(() => unique({}, true, true)).toThrowError();
});

it('throws if second argument is not a boolean', function () {
  expect(() => unique([1, 2, 3, 4], '2')).toThrowError('');
  expect(() => unique([1, 2, 3, 4], {}, true)).toThrowError('');
});

it('throws if third argument is not a boolean', function () {
  expect(() => unique([1, 2, 3, 4], true, 5)).toThrowError('');
  expect(() => unique([1, 2, 3, 4], true, /4/)).toThrowError('');
});
