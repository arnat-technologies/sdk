import isNotEmpty from './array-isNotEmpty';

it('Check if an array is not empty', function () {
  expect(isNotEmpty([])).toBeFalsy(); // false
  expect(isNotEmpty([1, 2, 3])).toBeTruthy(); // true
});
