import countOccurrencesByValue from './array-countOccurrencesByValue';

it('Count the occurrences of a value in an array', function () {
  expect(countOccurrencesByValue([2, 1, 3, 3, 2, 3], 2)).toBe(2);
  expect(countOccurrencesByValue(['a', 'b', 'a', 'c', 'a', 'b'], 'a')).toBe(3);
});
