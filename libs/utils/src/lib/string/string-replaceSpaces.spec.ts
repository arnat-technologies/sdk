import replaceSpaces from './string-replaceSpaces';

it('Replace multiple spaces with a single space', function () {
  expect(replaceSpaces('this\n   is     \ta    \rmessage')).toBe(
    'this is a message'
  );
});
