import mask from './string-mask';

it('Replace the first given number of characters of a string', function () {
  expect(mask(1234567890, 3, '*')).toBe('***4567890');
});
