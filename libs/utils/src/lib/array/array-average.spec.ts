import average from './array-average';

it('get the average of set of numbers', function () {
  expect(average([10, 5])).toBe(7.5);
  expect(average([10, 20])).toBe(15);
});

it('thrown error when parameter is not an array', function () {
  expect(() => average(10, 6)).toThrowError(
    'expected only one parameter as array'
  );
  expect(() => average(10)).toThrowError('expected an array as parameter');
});
