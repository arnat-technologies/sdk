import Curry from './function-curry2';

it('Curry a function', function () {
  const sum = (a, b, c) => a + b + c;
  // return
  expect(Curry(sum)(1)(2)(3)).toBe(6); // 6
  expect(Curry(sum)(1, 2, 3)).toBe(6); // 6
  expect(Curry(sum, 1)(2, 3)).toBe(6); // 6
  expect(Curry(sum, 1)(2)(3)).toBe(6); // 6
  expect(Curry(sum, 1, 2)(3)).toBe(6); // 6
  expect(Curry(sum, 1, 2, 3)).toBe(6); // 6
});
