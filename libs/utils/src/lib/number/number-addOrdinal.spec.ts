import addOrdinal from './number-addOrdinal';

it('Add an ordinal suffix to a number', function () {
  expect(addOrdinal(1)).toBe('1st');
  expect(addOrdinal(2)).toBe('2nd');
  expect(addOrdinal(3)).toBe('3rd');
  expect(addOrdinal(11)).toBe('11th');
  expect(addOrdinal(12)).toBe('12th');
  expect(addOrdinal(13)).toBe('13th');
});
