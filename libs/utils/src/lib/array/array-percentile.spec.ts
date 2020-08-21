import percentile from './array-percentile';

it('array of numbers where percentile falls exactly on an index', function () {
  expect(percentile([1, 2, 3, 4, 5], 30)).toBe(2);
  expect(percentile([1, 5, 2, 4, 3], 50)).toBe(3);
  expect(percentile([5, 4, 1, 3, 2], 70)).toBe(4);
  expect(percentile([1, 1, 1, 1, 1], 17)).toBe(1);
  expect(percentile([-4.2, -4.2, -4.2, -4.2, -4.2], 67)).toBe(-4.2);
});

it('array of numbers where percentile falls outside outer bounds', function () {
  expect(percentile([0.1, 2, 93, 14.98, 7], 4)).toBe(0.1);
  expect(percentile([0.1, 2, 93, 14.98, 7], 94)).toBe(93);
  expect(percentile([44, -2.91, 7, 7, -2.91], 3)).toBe(-2.91);
});

it('array of numbers where percentile falls between indices', function () {
  expect(percentile([1, 2, 3, 4, 5], 25)).toBe(1.75);
  expect(percentile([5, 4, 1, 3, 2], 75)).toBe(4.25);
  expect(percentile([1, 2, 3, 4, 5], 44)).toBe(2.7);
  expect(percentile([100, 101, 92, 4, 102, 66, 66], 17).toFixed(2)).toBe(
    '46.78'
  );
  expect(percentile([100, 101, -92, 4, 102, 32], 50)).toBe(66);
});

it('list of numeric arguments throws', function () {
  expect(() => percentile(1, 2, 3, 4, 5, 50)).toThrowError('');
  expect(() => percentile(1, 10)).toThrowError('');
});

it('non numeric values throw', function () {
  expect(() => percentile([1, '2', 3, 4, 5], 50)).toThrowError('');
  expect(() => percentile([], 20)).toThrowError('');
  expect(() => percentile([false, true], 66)).toThrowError('');
  expect(() => percentile([{}], 66)).toThrowError('');
  expect(() => percentile(null, 40)).toThrowError('');
});
