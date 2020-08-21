// Check if two strings are anagram
//
//
// // Examples
// areAnagram('listen', 'silent');         // true
// areAnagram('they see', 'the eyes');     // true
// areAnagram('node', 'deno');             // true
//
export default function areAnagram(str1, str2) {
  if (
    typeof str1 !== 'string' ||
    Object.prototype.toString.call(str1) !== '[object String]' ||
    typeof str2 !== 'string' ||
    Object.prototype.toString.call(str2) !== '[object String]'
  )
    throw new Error('arguments should be a string');

  return (
    str1.toLowerCase().split('').sort().join('') ===
    str2.toLowerCase().split('').sort().join('')
  );
}
