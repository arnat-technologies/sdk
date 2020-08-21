import getIndex from './string-getIndex';

it('Convert the name of an excel column to number', function () {
  expect(getIndex('A')).toBe(1);
  expect(getIndex('B')).toBe(2);
  expect(getIndex('C')).toBe(3);
  expect(getIndex('Z')).toBe(26);
  //
  expect(getIndex('AA')).toBe(27);
  expect(getIndex('AB')).toBe(28);
  expect(getIndex('AC')).toBe(29);
  expect(getIndex('AZ')).toBe(52);
  //
  expect(getIndex('AAA')).toBe(703);
  expect(getIndex('AAB')).toBe(704);
});
