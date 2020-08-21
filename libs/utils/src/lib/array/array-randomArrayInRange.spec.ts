import randomArrayInRange from './array-randomArrayInRange';

it('Generate an array of random integers in a given range', function () {
  const from = 1;
  const to = 100;
  const items = 10;
  const arr1 = randomArrayInRange(from, to, items);

  expect(arr1.length).toStrictEqual(items);
  arr1.forEach((item) => {
    expect(typeof item).toBe('number');
    expect(item <= to && item >= from).toBeTruthy();
  });
});

it('throw if there is no number on parameters', function () {
  expect(() => randomArrayInRange('foo', 100, 10)).toThrowError(
    'should pass only value numbers as parameters'
  );
  expect(() => randomArrayInRange(1, true, 10)).toThrowError(
    'should pass only value numbers as parameters'
  );
  expect(() => randomArrayInRange(1, 100, new Date())).toThrowError(
    'should pass only value numbers as parameters'
  );
});
