import isEqual from './array-isEqual';

it('Check if all array elements are equal to a given value', function () {
  expect(isEqual(['foo', 'foo'], 'foo')).toBeTruthy();
  expect(isEqual(['foo', 'bar'], 'foo')).toBeFalsy();
  expect(isEqual(['bar', 'bar'], 'foo')).toBeFalsy();

  expect(isEqual([1, 2, 3], [1, 2, 3])).toBeTruthy();
  expect(isEqual([1, 2, 3], [1, 3, 2])).toBeFalsy();
  expect(isEqual([1, 2, 3], [1, '2', 3])).toBeFalsy();
});
