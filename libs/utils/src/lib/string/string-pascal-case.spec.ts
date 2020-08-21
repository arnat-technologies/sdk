import pascalCase from './string-pascal-case';

it('string with spaces', function () {
  expect(pascalCase('the quick brown fox')).toBe('TheQuickBrownFox');
  expect(pascalCase('the quick     brownfox')).toBe('TheQuickBrownfox');
});

it('string with punctuation', function () {
  expect(pascalCase('the_quick_brown_fox')).toBe('TheQuickBrownFox');
  expect(pascalCase('the-quick-brown-fox')).toBe('TheQuickBrownFox');
  expect(pascalCase('the*quick-brown_fox')).toBe('TheQuickBrownFox');
  expect(pascalCase('the****quick-_-brown_:fox')).toBe('TheQuickBrownFox');
});

it('string with mixed spaces and punctuation', function () {
  expect(pascalCase('the_quick_brown_   fox')).toBe('TheQuickBrownFox');
  expect(pascalCase('the** **quick-_-brown_:fox')).toBe('TheQuickBrownFox');
});

it('string with existing capitalization', function () {
  expect(pascalCase('theQuickBrownFox')).toBe('TheQuickBrownFox');
  expect(pascalCase('the Quick Brown Fox')).toBe('TheQuickBrownFox');
  expect(pascalCase('The quick brown FOX')).toBe('TheQuickBrownFOX');
});
