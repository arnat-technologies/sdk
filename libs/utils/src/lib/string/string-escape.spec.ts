import escape from './string-escape';

it('Escape html special characters', function () {
  expect(escape('fred, barney, & pebbles')).toBe('fred, barney, &amp; pebbles');
  expect(escape('PHP & MySQL')).toBe('PHP &amp; MySQL');
  expect(escape('3 > 2')).toBe('3 &gt; 2');
});
