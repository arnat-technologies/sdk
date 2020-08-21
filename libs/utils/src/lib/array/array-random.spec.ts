import random from './array-random';

it('picks array values at random', function () {
  const arr = [1, 2, 3, 4, 5];
  const randomChoice = random(arr);
  expect(arr.indexOf(randomChoice)).not.toBe(-1);
});

it('picks sole element when array is of unity length', function () {
  const arr = [1];
  const randomChoice = random(arr);
  expect(randomChoice).toBe(1);
});

it('non-array arguments throw', function () {
  expect(() => random({})).toThrowError('');
  expect(() => random(undefined)).toThrowError('');
  expect(() => random(null)).toThrowError('');
  expect(() => random()).toThrowError('');
});
