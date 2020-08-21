import empty from './array-empty';

it('should empty an array', function () {
  expect(empty([true, false, 'foo', 'bar'])).toStrictEqual([]);
  expect(
    empty([
      123,
      456,
      function () {
        return void 0;
      },
      () => void 0,
    ])
  ).toStrictEqual([]);
});
