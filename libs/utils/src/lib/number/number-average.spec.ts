import average from './number-average';

it('Calculate the average of arguments', function () {
  expect(average(1, 2, 3, 4)).toBe(2.5);
});
