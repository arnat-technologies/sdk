import index from './array-index';

test('indexes an array of objects', function () {
  expect(
    index(
      [
        { id: 'first', val: 1 },
        { id: 'second', val: 2 },
      ],
      'id'
    )
  ).toStrictEqual({
    first: { id: 'first', val: 1 },
    second: { id: 'second', val: 2 },
  });
});

test('drops elements without specified key', function () {
  expect(index([{ id: 'first', val: 1 }, null], 'id')).toStrictEqual({
    first: { id: 'first', val: 1 },
  });
});

test('returns empty array as empty object', function () {
  expect(index([], 'id')).toStrictEqual({});
});

test('throws if first argument is not an array', function () {
  expect(() => index({}, 'name')).toThrowError('');
  expect(() => index('hello', 'name')).toThrowError('');
  expect(() => index(/hullo/, 'name')).toThrowError('');
  expect(() => index(null, 'name')).toThrowError('');
  expect(() => index(undefined, 'name')).toThrowError('');
  expect(() => index()).toThrowError('');
});

test('throws if second argument is not a string', function () {
  expect(() => index([], {})).toThrowError('');
  expect(() => index([], function () {})).toThrowError('');
  expect(() => index([], /hullo/)).toThrowError('');
  expect(() => index([], null)).toThrowError('');
  expect(() => index([], undefined)).toThrowError('');
  expect(() => index([])).toThrowError('');
});
