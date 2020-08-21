import sort from './array-sort';

it('Sort an array of numbers', function () {
  expect(sort([1, 5, 2, 4, 3])).toStrictEqual([1, 2, 3, 4, 5]);
});

it('thrown an error when a non-array is passed', function () {
  expect(() => sort({})).toThrowError('should pass an array as parameter');
});
