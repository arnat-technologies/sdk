import subtract from './number-subtract';

it('Subtract arguments', function () {
  expect(subtract(1, 2, 3, 4)).toBe(-8);
});
