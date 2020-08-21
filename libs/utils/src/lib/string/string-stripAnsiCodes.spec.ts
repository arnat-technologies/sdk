import stripAnsiCodes from './string-stripAnsiCodes';

it('Strip ANSI codes from a string', function () {
  expect(stripAnsiCodes('\u001B[4mcake\u001B[0m')).toBe('cake');
  expect(
    stripAnsiCodes(
      '\u001B[0m\u001B[4m\u001B[42m\u001B[31mfoo\u001B[39m\u001B[49m\u001B[24mfoo\u001B[0m'
    )
  ).toBe('foofoo');
});
