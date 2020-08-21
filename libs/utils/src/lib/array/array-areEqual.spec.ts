import areEqual from './array-areEqual';

it('Check if all items in an array are equal', function () {
  expect(areEqual([1, 2, 3, 4])).toBeFalsy(); // false
  expect(areEqual(['hello', 'hello', 'hello'])).toBeTruthy(); // true
});
