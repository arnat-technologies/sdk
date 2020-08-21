import removeSpaces from './string-removeSpaces';

it('remove spaces from a string', function () {
  expect(removeSpaces('hel lo wor ld')).toBe('helloworld');
});
