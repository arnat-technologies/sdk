import toFixed from './number-toFixed';

it('Truncate a number to a given number of decimal places without rounding', function () {
  expect(toFixed(25.198726354, 1)).toBe('25.1');
  expect(toFixed(25.198726354, 2)).toBe('25.19');
  expect(toFixed(25.198726354, 3)).toBe('25.198');
  expect(toFixed(25.198726354, 4)).toBe('25.1987');
  expect(toFixed(25.198726354, 5)).toBe('25.19872');
  expect(toFixed(25.198726354, 6)).toBe('25.198726');
});
