import isNumeric from './string-isNumeric';

it('Check if a string contains only digits', function () {
  expect(isNumeric(2)).toBeTruthy();
  expect(isNumeric('23')).toBeTruthy();
  expect(isNumeric('00123')).toBeTruthy();

  expect(isNumeric('1.23')).toBeFalsy();
  expect(isNumeric('-Infinity')).toBeFalsy();
  expect(isNumeric('Infinity')).toBeFalsy();
  expect(isNumeric('NaN')).toBeFalsy();
});
