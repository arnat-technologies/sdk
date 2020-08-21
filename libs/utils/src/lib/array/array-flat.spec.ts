import flat from './array-flat';

it('Flatten an array', function () {
  expect(flat(['cat', ['lion', 'tiger']])).toStrictEqual([
    'cat',
    'lion',
    'tiger',
  ]);
});
