// Unescape html special characters
//
export default function unescape(str) {
  return str
    .replace(/&/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&amp;/g, '&')
    .replace(/&gt;/g, '>')
    .replace(/&#0*39;/g, "'")
    .replace(/&quot;/g, '"');
}
