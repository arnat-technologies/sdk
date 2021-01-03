import countOccurrencesByElement from './array-countOccurrencesByElement';

it('Count the occurrences of a value in an array', function () {
  expect(countOccurrencesByElement([2, 1, 3, 3, 2, 3])).toStrictEqual({
    '1': 1,
    '2': 2,
    '3': 3,
  });
  expect(
    countOccurrencesByElement(['a', 'b', 'a', 'c', 'a', 'b'])
  ).toStrictEqual({ a: 3, b: 2, c: 1 });
});
