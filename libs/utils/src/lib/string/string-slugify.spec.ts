// slugify('Chapter One: Once upon a time...');    // 'chapter-one-once-upon-a-time'
import slugify from './string-slugify';

it('Convert a string to url slug', function () {
  expect(slugify('Chapter One: Once upon a time...')).toBe(
    'chapter-one-once-upon-a-time'
  );
});
