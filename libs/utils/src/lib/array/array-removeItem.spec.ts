import removeItem from './array-removeItem';

it('remove an item from an array', function () {
  expect(removeItem([2, '4', null, 'hello', 10.56], null)).toStrictEqual([
    2,
    '4',
    'hello',
    10.56,
  ]);
});

it('throw if an array is not passed as parameter', function () {
  expect(() => removeItem({}, true)).toThrowError(
    'should pass an array as first argument'
  );
});
