import isFunction from './function-isFunction';

it('Check if a value is a function', function () {
  expect(isFunction(function () {})).toBeTruthy(); // true
  expect(isFunction(function* () {})).toBeTruthy(); // true
  expect(isFunction(async function () {})).toBeTruthy(); // true
});
