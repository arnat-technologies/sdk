import accumulate from './array-accumulate';

it('Create an array of cumulative sum', function () {
  expect(accumulate([1, 2, 3, 4])).toStrictEqual([1, 3, 6, 10]);
});

it('throw an error when an non-array is passed', function () {
  expect(() => accumulate()).toThrowError('you must pass an array');
});
