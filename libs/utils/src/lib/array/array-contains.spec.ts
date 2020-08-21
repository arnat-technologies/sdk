import contains from './array-contains';

it('Check if an array contains a value matching some criterias', function () {
  expect(contains([10, 20, 30], (v) => v > 25)).toBeTruthy(); // true
  expect(contains([10, 20, 30], (v) => v > 100 || v < 15)).toBeTruthy(); // true
  expect(contains([10, 20, 30], (v) => v > 100)).toBeFalsy(); // false
});
