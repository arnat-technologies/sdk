// Strip ANSI codes from a string
//
//
// // Example
// stripAnsiCodes('\u001B[4mcake\u001B[0m'); // 'cake'
// stripAnsiCodes(
//   '\u001B[0m\u001B[4m\u001B[42m\u001B[31mfoo\u001B[39m\u001B[49m\u001B[24mfoo\u001B[0m',
// ); // 'foofoo'
//
export default function stripAnsiCodes(str) {
  return str.replace(
    /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g,
    ''
  );
}
