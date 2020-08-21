import kebabToCamel from './string-kebabToCamel';

it('Convert camel case to kebab case and vice versa', function () {
  expect(kebabToCamel('background-color')).toBe('backgroundColor');
  expect(kebabToCamel('background-color')).toBe('backgroundColor');
});
