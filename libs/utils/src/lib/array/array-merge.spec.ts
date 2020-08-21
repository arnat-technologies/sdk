import merge from './array-merge';

it('merge two arrays', function () {
  expect(merge([1, 2, 3], [4, 5, 6])).toStrictEqual([1, 2, 3, 4, 5, 6]);
});

it('throw if a parameter is not an array', function () {
  expect(() => merge([1, 2, 3], { 4: true, 5: false })).toThrowError(
    'should pass an array as parameter'
  );
});
