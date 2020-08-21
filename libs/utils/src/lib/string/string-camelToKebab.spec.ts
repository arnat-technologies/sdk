import camelToKebab from './string-camelToKebab';

it('convert camel case to kebab case and vice versa', function () {
  expect(camelToKebab('backgroundColor')).toBe('background-color');
});
