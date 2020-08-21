import Compose from './function-compose2';

it('Compose Functions', function () {
  const lowercase = (str) => str.toLowerCase();
  const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
  const reverse = (str) => str.split('').reverse().join('');

  const fn = Compose(reverse, capitalize, lowercase);

  // We will execute `lowercase`, `capitalize` and `reverse` in order
  expect(fn('Hello World')).toBe('dlrow olleH');
  //
});
