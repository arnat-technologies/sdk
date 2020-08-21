// Generate a random string from given characters
//
//
// // Example
// generateString(10, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
//
export default function generateString(length, chars) {
  return Array(length)
    .fill('')
    .map(() => chars[Math.floor(Math.random() * chars.length)])
    .join('');
}
