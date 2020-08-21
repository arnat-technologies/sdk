/*
  remove spaces, optionally remove escape sequences \t, \n, \f, \r and \v

  squash('the cat sat on the mat'); // 'thecatsatonthemat'
  squash(' the cat sat on the mat '); // 'thecatsatonthemat'
  squash('\tthe cat\n sat \fon \vthe \rmat '); // '\tthecat\nsat\fon\vthe\rmat'
  squash('\tthe cat\n sat \fon \vthe \rmat ', true); // 'thecatsatonthemat'
  squash(`the cat
sat on the mat`, true); // thecatsatonthemat
*/

const escapeSequencesRegex = /\s/g;
const spacesRegex = / /g;

export default function squash(str, squashEscapeSequences?) {
  if (squashEscapeSequences) {
    return str.replace(escapeSequencesRegex, '');
  } else {
    return str.replace(spacesRegex, '');
  }
}
