// Convert a string to url slug
//
//
// // Example
// slugify('Chapter One: Once upon a time...');    // 'chapter-one-once-upon-a-time'
//
export default function slugify(string) {
  return string
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');
}
