import kebabCase from './string-kebab-case';

it('string with spaces', function () {
  expect(kebabCase('the quick brown fox')).toBe('the-quick-brown-fox');
  expect(kebabCase('the quick     brownfox')).toBe('the-quick-brownfox');
});

it('string with punctuation', function () {
  expect(kebabCase('the_quick_brown_fox')).toBe('the-quick-brown-fox');
  expect(kebabCase('the_quick_brown_fox')).toBe('the-quick-brown-fox');
  expect(kebabCase('the*quick-brown_fox')).toBe('the-quick-brown-fox');
  expect(kebabCase('the****quick-_-brown_:fox')).toBe('the-quick-brown-fox');
});

it('string with mixed spaces and punctuation', function () {
  expect(kebabCase('the_quick_brown_   fox')).toBe('the-quick-brown-fox');
  expect(kebabCase('the** **quick-_-brown_:fox')).toBe('the-quick-brown-fox');
});

it('string with capitalization', function () {
  expect(kebabCase('theQuickBrownFox')).toBe('the-quick-brown-fox');
  expect(kebabCase('the QuickBrown Fox')).toBe('the-quick-brown-fox');
  expect(kebabCase('The quick brown FOX')).toBe('the-quick-brown-f-o-x');
});
