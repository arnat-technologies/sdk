import trimSlashes from './string-trimSlashes';

it('Trim slashes at the beginning and the end of a string', function () {
  expect(trimSlashes('//hello/world///')).toBe('hello/world');
});
