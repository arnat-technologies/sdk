import zip from './array-zip';

it('zips any number of arrays together', function () {
  let actual: any[] = zip([1, 2, 3]);
  let expected: any[] = [[1], [2], [3]];
  expect(actual).toStrictEqual(expected);

  actual = zip([1, 2], ['a', 'b']);
  expected = [
    [1, 'a'],
    [2, 'b'],
  ];
  expect(actual).toStrictEqual(expected);

  actual = zip([1, 2], ['a', 'b'], [true, false]);
  expected = [
    [1, 'a', true],
    [2, 'b', false],
  ];
  expect(actual).toStrictEqual(expected);

  actual = zip([], []);
  expected = [];
  expect(actual).toStrictEqual(expected);
});

it('fill in blank spaces with undefined when given arrays of various lengths', function () {
  const actual = zip([1, 2, 3], ['a', 'b'], [true]);
  const expected = [
    [1, 'a', true],
    [2, 'b', undefined],
    [3, undefined, undefined],
  ];
  expect(actual).toStrictEqual(expected);
});

it('throws for empty / non-array arguments', function () {
  expect(() => zip()).toThrowError('zip requires at least one argument');
  expect(() => zip(null)).toThrowError('all arguments must be arrays');

  expect(() => zip([1, 2, 3], { a: '1', b: '2', c: '3' })).toThrowError(
    'all arguments must be arrays'
  );
  expect(() =>
    zip([1, 2], ['a', 'b'], undefined, {}, false, 1, 'foo')
  ).toThrowError('all arguments must be arrays');
});
