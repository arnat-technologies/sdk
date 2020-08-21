// Replace all line breaks with br elements
//
export default function nl2br(str) {
  return str.replace(new RegExp('\r?\n', 'g'), '<br>');
}
