import shuffle from './array-shuffle';
import compare from '../collection/collection-compare';

it('returns elements, randomly sorted', function () {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const shuffled = shuffle(arr);
  expect(arr.length).toBe(shuffled.length);
  expect(compare(arr, shuffled)).toBeFalsy();
  expect(compare(arr.sort(), shuffled.sort())).toBeTruthy();
});

it('always returns duplicate when array has 0 or 1 elements', function () {
  const arr = [1];
  const shuffled = shuffle(arr);
  expect(compare(arr, shuffled)).toBeTruthy();
  const arr2 = [];
  const shuffled2 = shuffle(arr2);
  expect(compare(arr2, shuffled2)).toBeTruthy();
  const shuffled3 = shuffle(arr, { shuffleAll: true });
  expect(compare(arr, shuffled3)).toBeTruthy();
  const shuffled4 = shuffle(arr2, { shuffleAll: true });
  expect(compare(arr2, shuffled4)).toBeTruthy();
});

it('all elements moved when shuffleAll is `true`', function () {
  const arr = [1, 2, 3, 4, 5];
  const shuffled = shuffle(arr, { shuffleAll: true });
  expect(arr.length).toBe(shuffled.length);
  expect(compare(arr, shuffled)).toBeFalsy();
  arr.forEach((each, i) => {
    expect(each).not.toStrictEqual(shuffled[i]);
  });
  expect(compare(arr.sort(), shuffled.sort())).toBeTruthy();
});

it('non-array arguments throw', function () {
  expect(() => shuffle({})).toThrowError('expected an array');
  expect(() => shuffle(undefined)).toThrowError('expected an array');
  expect(() => shuffle(null)).toThrowError('expected an array');
  expect(() => shuffle()).toThrowError('expected an array');
});
