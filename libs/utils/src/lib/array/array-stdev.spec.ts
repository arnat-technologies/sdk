import standardDeviation from './array-stdev';

it('array of numbers returns standard deviation', function () {
  expect(standardDeviation([1, 2, 3])).toBe(1);
  expect(standardDeviation([1, 2, 3, 2, 4, 1]).toFixed(4)).toBe('1.1690');
  expect(standardDeviation([3, 2.5, 1]).toFixed(4)).toBe('1.0408');
  expect(standardDeviation([1, 2, 3, 4, 5, 6]).toFixed(4)).toBe('1.8708');
});

it('list of numeric arguments returns standard deviation', function () {
  expect(standardDeviation(2, 6, 4)).toBe(2);
  expect(standardDeviation(10, 10, 10, 10)).toBe(0);
  expect(standardDeviation(-1, -2, -3)).toBe(1);
  expect(standardDeviation(0.1, 0.2, 0.3).toFixed(2)).toBe('0.10');
});

it('one or fewer values throw', function () {
  expect(() => standardDeviation([1])).toThrowError('');
  expect(() => standardDeviation(17.1)).toThrowError('');
  expect(() => standardDeviation([])).toThrowError('');
});

it('non-numeric values throw', function () {
  expect(() => standardDeviation(['1', '2', '3'])).toThrowError('');
  expect(() => standardDeviation(['a', 'b', 'c'])).toThrowError('');
  expect(() => standardDeviation(undefined)).toThrowError('');
  expect(() => standardDeviation([NaN, NaN])).toThrowError('');
});
