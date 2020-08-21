import equal from './array-equal';

it('expect what two arrays are equap', function () {
  expect(equal([0, 2, 3, 4], [1, 2, 3])).toBeFalsy();
  expect(equal([0, 2, 3], [1, 2, 3])).toBeFalsy();
  expect(equal([1, 2, 3], [1, 2, 3])).toBeTruthy();
  expect(equal([true, false], [true, false])).toBeTruthy();

  const arr = [8, 2, 3, 4, 7, 8];
  expect(equal(arr, arr)).toBeTruthy();
});
