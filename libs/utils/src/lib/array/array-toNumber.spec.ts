import toNumbers from './array-toNumbers';

it('Convert an array of strings to numbers', function () {
  expect(toNumbers(['2', '3', '4'])).toStrictEqual([2, 3, 4]);
});

it('thrown if an non-array is providen', function () {
  expect(() => toNumbers({})).toThrowError('should provide an array');
});
