import digits from './number-digits';

it('Get the arrays of digits from a number', function () {
  expect(digits(123)).toStrictEqual([1, 2, 3]);
});
