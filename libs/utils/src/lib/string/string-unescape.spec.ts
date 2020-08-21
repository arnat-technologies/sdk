import unescape from './string-unescape';

it('Unescape html special characters', function () {
  expect(unescape('fred, barney, &amp; pebbles')).toBe(
    'fred, barney, & pebbles'
  );
  expect(unescape('PHP &amp; MySQL')).toBe('PHP & MySQL');
  expect(unescape('3 &gt; 2')).toBe('3 > 2');
});
