import sum from './array-sum';

it('Get the sum of array of numbers', function () {
  expect(sum([1, 2, 3])).toBe(6);
  expect(sum([5, 5, 10, 20, 30])).toBe(70);
});

it('thrown error if not is an array', function () {
  expect(() => sum()).toThrowError('should pass an array');
});
