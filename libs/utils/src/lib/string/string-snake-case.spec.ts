import snakeCase from './string-snake-case';

it('string with spaces', function () {
  expect(snakeCase('the quick brown fox')).toBe('the_quick_brown_fox');
  expect(snakeCase('the quick     brownfox')).toBe('the_quick_brownfox');
});

it('string with punctuation', function () {
  expect(snakeCase('the_quick_brown_fox')).toBe('the_quick_brown_fox');
  expect(snakeCase('the_quick_brown_fox')).toBe('the_quick_brown_fox');
  expect(snakeCase('the*quick-brown_fox')).toBe('the_quick_brown_fox');
  expect(snakeCase('the****quick-_-brown_:fox')).toBe('the_quick_brown_fox');
});

it('string with mixed spaces and punctuation', function () {
  expect(snakeCase('the_quick_brown_   fox')).toBe('the_quick_brown_fox');
  expect(snakeCase('the** **quick-_-brown_:fox')).toBe('the_quick_brown_fox');
});

it('string with capitalization', function () {
  expect(snakeCase('theQuickBrownFox')).toBe('the_quick_brown_fox');
  expect(snakeCase('the QuickBrown Fox')).toBe('the_quick_brown_fox');
  expect(snakeCase('The quick brown FOX')).toBe('the_quick_brown_f_o_x');
});
