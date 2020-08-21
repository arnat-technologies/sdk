import prefixWithZeros from './number-prefixWithZeros';

it('Prefix an integer with zeros', function () {
  expect(prefixWithZeros(42, 5)).toBe('00042');
});
