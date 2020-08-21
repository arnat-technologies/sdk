import camelCase from './string-camel-case';

it('string with spaces', function () {
  expect(camelCase('the quick brown fox')).toBe('theQuickBrownFox');
  expect(camelCase('the quick     brownfox')).toBe('theQuickBrownfox');
});

it('string with punctuation', function () {
  expect(camelCase('the_quick_brown_fox')).toBe('theQuickBrownFox');
  expect(camelCase('the-quick-brown-fox')).toBe('theQuickBrownFox');
  expect(camelCase('the*quick-brown_fox')).toBe('theQuickBrownFox');
  expect(camelCase('the****quick-_-brown_:fox')).toBe('theQuickBrownFox');
});

it('string with mixed spaces and punctuation', function () {
  expect(camelCase('the_quick_brown_fox')).toBe('theQuickBrownFox');
  expect(camelCase('the** **quick-_-brown_:fox')).toBe('theQuickBrownFox');
});

it('string with existing capitalization', function () {
  expect(camelCase('theQuickBrownFox')).toBe('theQuickBrownFox');
  expect(camelCase('TheQuickBrownFox')).toBe('theQuickBrownFox');
  expect(camelCase('the Quick Brown Fox')).toBe('theQuickBrownFox');
  expect(camelCase('The quick brown FOX')).toBe('theQuickBrownFox');
  expect(camelCase('theQUICKBrownFox')).toBe('theQuickBrownFox');
  expect(camelCase('behold theQuickBrownFox')).toBe('beholdTheQuickBrownFox');
  // camel-case all-caps substrings if length >= 4
  expect(camelCase('Behold theQUickBrownFox')).toBe('beholdTheQUickBrownFox');
  expect(camelCase('Behold theQUIckBrownFox')).toBe('beholdTheQUIckBrownFox');
  expect(camelCase('Behold theQUICkBrownFox')).toBe('beholdTheQuiCkBrownFox');
  expect(camelCase('Behold theQUICKBrownFox')).toBe('beholdTheQuickBrownFox');
  expect(camelCase('Behold theQUICKBrownFOXES')).toBe(
    'beholdTheQuickBrownFoxes'
  );
  expect(camelCase('THE_QUICK_BROWN_FOX')).toBe('theQuickBrownFox');
  expect(camelCase('THE_QUICK/BROWN_FOX')).toBe('theQuickBrownFox');
});
