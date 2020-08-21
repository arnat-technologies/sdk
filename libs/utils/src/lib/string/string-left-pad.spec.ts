import leftPad from './string-left-pad';

describe('left pad with default pad character', function () {
  it('strings with sufficient padding', function () {
    expect(leftPad('hello', 9)).toBe('    hello');
    expect(leftPad('a', 2)).toBe(' a');
  });
  it('strings with insufficient padding', function () {
    expect(leftPad('hello', 3)).toBe('hello');
    expect(leftPad('a', 1)).toBe('a');
  });
  it('empty string arg', function () {
    expect(leftPad('', 4)).toBe('    ');
  });
  it('zero length arg', function () {
    expect(leftPad('hello', 0)).toBe('hello');
    expect(leftPad('', 0)).toBe('');
  });
  it('strings with surrogate pairs', function () {
    expect(leftPad('\uD83D\uDC04\uD83D\uDC04', 9)).toBe('       🐄🐄');
    expect(leftPad('\uD83D\uDC04\u00F6\u00F6\uD83D\uDC04', 9)).toBe(
      '     🐄öö🐄'
    );
  });
  it('first argument must be a string', function () {
    expect(() => leftPad(['hello'], 8)).toThrowError('');
    expect(() => leftPad(27, 9)).toThrowError('');
  });
  it('second argument must be a positive finite integer', function () {
    expect(() => leftPad('hello', '4')).toThrowError('');
    expect(() => leftPad('hello', NaN)).toThrowError('');
    expect(() => leftPad('hello', Number.POSITIVE_INFINITY)).toThrowError('');
    expect(() => leftPad('hello', -1)).toThrowError('');
    expect(() => leftPad('hello', 4.3)).toThrowError('');
  });
});

describe('left pad with custom pad character', function () {
  it('strings with sufficient padding', function () {
    expect(leftPad('hello', 9, '.')).toBe('....hello');
    expect(leftPad('a', 2, '_')).toBe('_a');
  });
  it('empty padding string treated as a space', function () {
    expect(leftPad('no-pad', 12, '')).toBe('      no-pad');
  });
  it('strings with insufficient padding', function () {
    expect(leftPad('hello', 3, '.')).toBe('hello');
    expect(leftPad('a', 1, '_')).toBe('a');
    expect(leftPad('no-pad', 4, '')).toBe('no-pad');
  });
  it('empty string arg', function () {
    expect(leftPad('', 4, '.')).toBe('....');
  });
  it('zero length arg', function () {
    expect(leftPad('hello', 0, '.')).toBe('hello');
    expect(leftPad('', 0, '.')).toBe('');
  });
  it('surrogate pairs as pad chars', function () {
    expect(leftPad('hello', 9, '\uD83D\uDC04')).toBe('🐄🐄🐄🐄hello');
    expect(leftPad('hello', 6, '\uD83D\uDC11')).toBe('🐑hello');
  });
  it('pad argument must be a string', function () {
    expect(() => leftPad('hello', 9, false)).toThrowError('');
    expect(() => leftPad('hello', 12, 31)).toThrowError('');
  });
});

describe('left pad with multiple custom pad characters', function () {
  it('strings with sufficient padding', function () {
    expect(leftPad('hello', 9, '..')).toBe('....hello');
    expect(leftPad('hello', 8, '..')).toBe('...hello');
    expect(leftPad('hello', 9, 'ab')).toBe('ababhello');
    expect(leftPad('hello', 8, 'ab')).toBe('babhello');
  });
  it('strings with insufficient padding', function () {
    expect(leftPad('hello', 3, '..')).toBe('hello');
    expect(leftPad('a', 1, 'ab')).toBe('a');
    expect(leftPad('no-pad', 4, '**')).toBe('no-pad');
  });
  it('empty string arg', function () {
    expect(leftPad('', 4, '..')).toBe('....');
    expect(leftPad('', 3, '..')).toBe('...');
    expect(leftPad('', 3, 'ab')).toBe('bab');
  });
  it('surrogate pairs as pad chars', function () {
    expect(leftPad('hello', 9, '\uD83D\uDC11\uD83D\uDC04')).toBe(
      '🐑🐄🐑🐄hello'
    );
    expect(leftPad('hello', 10, '\uD83D\uDC11\uD83D\uDC04')).toBe(
      '🐄🐑🐄🐑🐄hello'
    );
  });
  it("padding can't mix regular characters and surrogate pairs", function () {
    expect(() => leftPad('hello', 9, 'o0053\uD83D\uDC04')).toThrowError('');
  });
});
