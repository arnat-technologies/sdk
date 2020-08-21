import capitalize from './string-capitalize';

it('string lowercase', function () {
  expect(capitalize('capitals')).toBe('Capitals');
  expect(capitalize('some string')).toBe('Some string');
});

it('lowercase remaining string', function () {
  expect(capitalize('capiTALS')).toBe('Capitals');
  expect(capitalize('some String')).toBe('Some string');
});

it('string already capitalized', function () {
  expect(capitalize('Capitals')).toBe('Capitals');
  expect(capitalize('ALLCAPS')).toBe('Allcaps');
});

it('non alpha chars', function () {
  expect(capitalize('1two')).toBe('1two');
  expect(capitalize('!important')).toBe('!important');
  expect(capitalize(' spaces')).toBe(' spaces');
});
