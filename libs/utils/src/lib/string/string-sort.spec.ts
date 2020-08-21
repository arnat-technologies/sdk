import sort from './string-sort';

it('Sort the characters of a string in the alphabetical order', function () {
  expect(sort('hello world')).toBe(' dehllloorw');
});
