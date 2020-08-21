import isGeneratorFunction from './function-isGeneratorFunction';

it('Check if a value is a generator function', function () {
  expect(isGeneratorFunction(function () {})).toBeFalsy(); // false
  expect(isGeneratorFunction(function* () {})).toBeTruthy(); // true
});
