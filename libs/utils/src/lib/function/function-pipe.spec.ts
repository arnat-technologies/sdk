import Pipe from './function-pipe';

// We will execute `lowercase`, `capitalize` and `reverse` in order
it('Compose functions from left to right', function () {
  const lowercase = (str) => str.toLowerCase();
  const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
  const reverse = (str) => str.split('').reverse().join('');
  const fn = Pipe(lowercase, capitalize, reverse);
  fn('Hello World') === 'dlrow olleH';
  expect(fn('Hello World')).toBe('dlrow olleH');
});
