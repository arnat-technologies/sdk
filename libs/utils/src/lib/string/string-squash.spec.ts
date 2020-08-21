import squash from './string-squash';

describe('without escapeSequence flag', function () {
  test('strings with no spaces are unchanged', function () {
    const str = 'thecatsatonthemat';
    const result = squash(str);
    expect(result).toBe('thecatsatonthemat');
  });

  test('spaces are removed', function () {
    const str = 'the cat sat on the mat';
    const result = squash(str);
    expect(result).toBe('thecatsatonthemat');
  });

  test('escape sequences are not removed', function () {
    const str = '\tthe cat\n sat \fon \vthe \rmat ';
    const result = squash(str);
    expect(result).toBe('\tthecat\nsat\fon\vthe\rmat');
  });
});

describe('with escapeSequence flag', function () {
  test('strings with no escape sequences are unchanged', function () {
    const str = 'thecatsatonthemat';
    const result = squash(str, true);
    expect(result).toBe('thecatsatonthemat');
  });

  test('spaces are removed', function () {
    const str = 'the cat sat on the mat';
    const result = squash(str, true);
    expect(result).toBe('thecatsatonthemat');
  });

  test('escape sequences are removed', function () {
    const str = '\tthe cat\n sat \fon \vthe \rmat ';
    const result = squash(str, true);
    expect(result).toBe('thecatsatonthemat');
  });
});
