import remainder from './number-remainder';

it('Calculate the remainder of division of arguments', function () {
  expect(remainder(1, 2, 3, 4)).toBe(1);
});
