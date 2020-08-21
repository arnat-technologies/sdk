import template from './string-template';

it('variables replaced by simple data', function () {
  const data = { a: 3, b: 4 };
  const result = template('this is {{a}} and this is {{b}}', data);
  expect(result).toBe('this is 3 and this is 4');
});

it('variable used more than once', function () {
  const data = { a: 3, b: 4 };
  const result = template(
    'this is {{a}} and so is {{a}} and this is {{b}}',
    data
  );
  expect(result).toBe('this is 3 and so is 3 and this is 4');
});

it('using nested variables', function () {
  const data = {
    a: {
      aa: {
        aaa: 'apple',
        bbb: 'pear',
      },
      bb: 'orange',
    },
    b: 'plum',
  };
  const str =
    '2 {{a.aa.aaa}}s, a {{a.aa.bbb}}, 3 {{a.bb}}s and a {{b}}. Yes 1 {{a.aa.bbb}}.';
  const result = '2 apples, a pear, 3 oranges and a plum. Yes 1 pear.';
  expect(template(str, data)).toStrictEqual(result);
});

it('overlapping variables resolve', function () {
  const str = 'the answer is {{a{{b}}hmmm}}';
  const data = { a: 3, 'a{{b': 4 };
  expect(template(str, data)).toBe('the answer is 4hmmm}}');
});

it('unresolved variables return empty strings', function () {
  const str = 'a {{a}}, b {{b}}, c {{c}}';
  const data = { a: 3, c: 4 };
  expect(template(str, data)).toStrictEqual('a 3, b , c 4');
});
