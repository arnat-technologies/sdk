import insert from './array-insert';

it('adds array elements at given index', function () {
  const arr1 = [1, 2, 3, 4, 5, 6];
  const arr2 = ['a', 'b', 'c'];
  expect(insert(arr1, arr2, 0)).toStrictEqual([
    'a',
    'b',
    'c',
    1,
    2,
    3,
    4,
    5,
    6,
  ]);
  expect(insert(arr1, arr2, 2)).toStrictEqual([
    1,
    2,
    'a',
    'b',
    'c',
    3,
    4,
    5,
    6,
  ]);
});

it('adds array elements at start if no index supplied', function () {
  const arr1 = [1, 2, 3, 4, 5, 6];
  const arr2 = ['a', 'b', 'c'];
  expect(insert(arr1, arr2)).toStrictEqual(['a', 'b', 'c', 1, 2, 3, 4, 5, 6]);
});

it('adds array elements at end if index too big', function () {
  const arr1 = [1, 2, 3, 4, 5, 6];
  const arr2 = ['a', 'b', 'c'];
  expect(insert(arr1, arr2, 99)).toStrictEqual([
    1,
    2,
    3,
    4,
    5,
    6,
    'a',
    'b',
    'c',
  ]);
});

it('adds non array values at given index', function () {
  const arr1 = [1, 2, 3, 4, 5, 6];
  expect(insert(arr1, 2.5, 2)).toStrictEqual([1, 2, 2.5, 3, 4, 5, 6]);
  expect(insert(arr1, { a: 4 }, 2)).toStrictEqual([1, 2, { a: 4 }, 3, 4, 5, 6]);
  expect(insert(arr1, 'x')).toStrictEqual(['x', 1, 2, 3, 4, 5, 6]);
});

it('throws if first argument is not an array', function () {
  expect(() => insert(undefined, [1, 2, 3, 4, 5], 4)).toThrowError(
    'expected an array for first argument'
  );
  expect(() => insert(null, [1, 2, 3, 4, 5], 3)).toThrowError(
    'expected an array for first argument'
  );
  expect(() => insert({}, [1, 2, 3], 'x')).toThrowError(
    'expected an array for first argument'
  );
});

it('throws if third argument is present and not a number', function () {
  expect(() => insert([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5], '4')).toThrowError(
    'expected a number for third argument'
  );
  expect(() => insert([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5], {})).toThrowError(
    'expected a number for third argument'
  );
  expect(() =>
    insert([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5], undefined)
  ).toThrowError('expected a number for third argument');
});
