import removeFalsy from './array-removeFalsy';

it('Remove falsy values from array', function () {
  expect(
    removeFalsy([
      0,
      'a string',
      '',
      NaN,
      true,
      5,
      undefined,
      'another string',
      false,
    ])
  ).toStrictEqual(['a string', true, 5, 'another string']);
});
