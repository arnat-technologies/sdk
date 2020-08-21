import entries from './object-entries';

it('regular objects return pairs of property/value', function () {
  expect(entries({ c: 8, a: 4 })).toStrictEqual([
    ['c', 8],
    ['a', 4],
  ]);
  expect(entries({ b: { bb: 4 }, a: { aa: 2 } })).toStrictEqual([
    ['b', { bb: 4 }],
    ['a', { aa: 2 }],
  ]);
  expect(entries({})).toStrictEqual([]);
});

it('arrays return pairs of index/value', function () {
  expect(entries([{ c: 8 }, { a: 4 }])).toStrictEqual([
    ['0', { c: 8 }],
    ['1', { a: 4 }],
  ]);
  expect(entries([])).toStrictEqual([]);
  expect(entries([])).toStrictEqual([]);
});

it('irregular objects return pairs of property/value', function () {
  expect(entries(new String('hello'))).toStrictEqual([
    ['0', 'h'],
    ['1', 'e'],
    ['2', 'l'],
    ['3', 'l'],
    ['4', 'o'],
  ]);
  expect(
    entries(function (a, b) {
      return a + b;
    })
  ).toStrictEqual([]);
  const fn = function () {};
  fn.a = 4;
  expect(entries(fn)).toStrictEqual([['a', 4]]);
});

it('primitives throw exceptions', function () {
  expect(() => entries(1)).toThrowError(
    'argument to `entries` must be an object'
  );
  expect(() => entries(true)).toThrowError(
    'argument to `entries` must be an object'
  );
  expect(() => entries(undefined)).toThrowError(
    'argument to `entries` must be an object'
  );
  expect(() => entries(null)).toThrowError(
    'argument to `entries` must be an object'
  );
});
