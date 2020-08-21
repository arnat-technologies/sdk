import groupBy from './array-group-by';

it('should return grouped objects', function () {
  const result1 = groupBy([6.1, 4.2, 6.3], Math.floor);
  expect(result1).toStrictEqual({ '4': [4.2], '6': [6.1, 6.3] });
  const result2 = groupBy([1, 2, 3, 4, 5, 6, 7, 8], function (i) {
    return i % 2;
  });
  expect(result2).toStrictEqual({ '0': [2, 4, 6, 8], '1': [1, 3, 5, 7] });
  const result3 = groupBy(
    [
      { branch: 'audi', model: 'q8', year: '2019' },
      { branch: 'audi', model: 'rs7', year: '2020' },
      { branch: 'ford', model: 'mustang', year: '2019' },
      { branch: 'ford', model: 'explorer', year: '2020' },
      { branch: 'bmw', model: 'x7', year: '2020' },
    ],
    'branch'
  );
  expect(result3).toStrictEqual({
    audi: [
      { branch: 'audi', model: 'q8', year: '2019' },
      { branch: 'audi', model: 'rs7', year: '2020' },
    ],
    bmw: [{ branch: 'bmw', model: 'x7', year: '2020' }],
    ford: [
      { branch: 'ford', model: 'mustang', year: '2019' },
      { branch: 'ford', model: 'explorer', year: '2020' },
    ],
  });
});

it('throws if first argument is not an array', function () {
  expect(() => groupBy({}, function () {})).toThrowError('');
  expect(() => groupBy('hello', function () {})).toThrowError('');
  expect(() => groupBy(/hullo/, function () {})).toThrowError('');
  expect(() => groupBy(null, function () {})).toThrowError('');
  expect(() => groupBy(undefined, function () {})).toThrowError('');
  expect(() => groupBy()).toThrowError('');
});

it('throws if second argument is not a function', function () {
  expect(() => groupBy([], {})).toThrowError('');
  expect(() => groupBy([], [])).toThrowError('');
  expect(() => groupBy([], /hullo/)).toThrowError('');
  expect(() => groupBy([], null)).toThrowError('');
  expect(() => groupBy([], undefined)).toThrowError('');
  expect(() => groupBy([])).toThrowError('');
});
