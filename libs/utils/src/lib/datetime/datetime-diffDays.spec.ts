import diffDays from './datetime-diffDays';

it('Calculate the number of difference days between two dates', function () {
  expect(diffDays(new Date('2014-12-19'), new Date('2020-01-01'))).toBe(1839);
});
