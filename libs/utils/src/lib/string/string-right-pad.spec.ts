import rightPad from './string-right-pad';

describe('left pad with default pad character', function () {
  it('strings with sufficient padding', function () {
    expect(rightPad('hello', 9)).toBe('hello    ');
    expect(rightPad('a', 2)).toBe('a ');
  });
  it('strings with insufficient padding', function () {
    expect(rightPad('hello', 3)).toBe('hello');
    expect(rightPad('a', 1)).toBe('a');
  });
  it('empty string arg', function () {
    expect(rightPad('', 4)).toBe('    ');
  });
  it('zero length arg', function () {
    expect(rightPad('hello', 0)).toBe('hello');
    expect(rightPad('', 0)).toBe('');
  });
  it('strings with surrogate pairs', function () {
    expect(rightPad('\uD83D\uDC04\uD83D\uDC04', 9)).toBe('🐄🐄       ');
    expect(rightPad('\uD83D\uDC04\u00F6\u00F6\uD83D\uDC04', 9)).toBe(
      '🐄öö🐄     '
    );
  });
  it('first argument must be a string', function () {
    expect(() => rightPad(['hello'], 8)).toThrowError(
      '1st and 3rd args must be strings, 2nd arg must be a positive integer'
    );
    expect(() => rightPad(27, 9)).toThrowError(
      '1st and 3rd args must be strings, 2nd arg must be a positive integer'
    );
  });
  it('second argument must be a positive finite integer', function () {
    expect(() => rightPad('hello', '4')).toThrowError('');
    expect(() => rightPad('hello', NaN)).toThrowError('');
    expect(() => rightPad('hello', Number.POSITIVE_INFINITY)).toThrowError('');
    expect(() => rightPad('hello', -1)).toThrowError('');
    expect(() => rightPad('hello', 4.3)).toThrowError('');
  });
});

describe('left pad with custom pad character', function () {
  it('strings with sufficient padding', function () {
    expect(rightPad('hello', 9, '.')).toBe('hello....');
    expect(rightPad('a', 2, '_')).toBe('a_');
  });
  it('empty padding string treated as a space', function () {
    expect(rightPad('no-pad', 12, '')).toBe('no-pad      ');
  });
  it('strings with insufficient padding', function () {
    expect(rightPad('hello', 3, '.')).toBe('hello');
    expect(rightPad('a', 1, '_')).toBe('a');
    expect(rightPad('no-pad', 4, '')).toBe('no-pad');
  });
  it('empty string arg', function () {
    expect(rightPad('', 4, '.')).toBe('....');
  });
  it('zero length arg', function () {
    expect(rightPad('hello', 0, '.')).toBe('hello');
    expect(rightPad('', 0, '.')).toBe('');
  });
  it('surrogate pairs as pad chars', function () {
    expect(rightPad('hello', 9, '\uD83D\uDC04')).toBe('hello🐄🐄🐄🐄');
    expect(rightPad('hello', 6, '\uD83D\uDC11')).toBe('hello🐑');
  });
  it('pad argument must be a string', function () {
    expect(() => rightPad('hello', 9, false)).toThrowError('');
    expect(() => rightPad('hello', 12, 31)).toThrowError('');
  });
});

describe('left pad with multiple custom pad characters', function () {
  it('strings with sufficient padding', function () {
    expect(rightPad('hello', 9, '..')).toBe('hello....');
    expect(rightPad('hello', 8, '..')).toBe('hello...');
    expect(rightPad('hello', 9, 'ab')).toBe('helloabab');
    expect(rightPad('hello', 8, 'ab')).toBe('helloaba');
  });
  it('strings with insufficient padding', function () {
    expect(rightPad('hello', 3, '..')).toBe('hello');
    expect(rightPad('a', 1, 'ab')).toBe('a');
    expect(rightPad('no-pad', 4, '**')).toBe('no-pad');
  });
  it('empty string arg', function () {
    expect(rightPad('', 4, '..')).toBe('....');
    expect(rightPad('', 3, '..')).toBe('...');
    expect(rightPad('', 3, 'ab')).toBe('aba');
  });
  it('surrogate pairs as pad chars', function () {
    expect(rightPad('hello', 9, '\uD83D\uDC11\uD83D\uDC04')).toBe(
      'hello🐑🐄🐑🐄'
    );
    expect(rightPad('hello', 10, '\uD83D\uDC11\uD83D\uDC04')).toBe(
      'hello🐑🐄🐑🐄🐑'
    );
  });
  it("padding can't mix regular characters and surrogate pairs", function () {
    expect(() => rightPad('hello', 9, 'o0053\uD83D\uDC04')).toThrowError('');
  });
});
