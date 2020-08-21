import isSubset from './array-isSubset';

it('Check if an array is subset of other array', function () {
  expect(isSubset([1, 2], [1, 2, 3, 4])).toBeTruthy();
  expect(isSubset([1, 2, 5], [1, 2, 3, 4])).toBeFalsy();
  expect(isSubset([6], [1, 2, 3, 4])).toBeFalsy();
});
