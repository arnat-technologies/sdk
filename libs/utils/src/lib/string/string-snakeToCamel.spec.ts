import snakeToCamel from './string-snakeToCamel';

it('Convert snake case to camel case', function () {
  expect(snakeToCamel('HELLO_world')).toBe('helloWorld');
});
