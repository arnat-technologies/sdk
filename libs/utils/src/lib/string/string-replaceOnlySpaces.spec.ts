import replaceOnlySpaces from './string-replaceOnlySpaces';

it('Only replace spaces', function () {
  expect(replaceOnlySpaces('hello world')).toBe('hello world');
});
