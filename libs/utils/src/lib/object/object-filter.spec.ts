import filter from './object-filter';
import compare from '../collection/collection-compare';

it('filter by key', function () {
  const obj1 = { a1: 3, b1: 5, a2: 9 };
  const result = filter(obj1, function (key, value) {
    return key[0] == 'a';
  });
  expect(compare(result, { a1: 3, a2: 9 })).toBeTruthy();
});

it('filter by value', function () {
  const obj = { a: 3, b: 5, c: 9 };
  const result = filter(obj, function (key, value) {
    return value < 6;
  });
  expect(compare(result, { a: 3, b: 5 })).toBeTruthy();
  const obj2 = { a: 3, b: 5, c: null };
  const result2 = filter(obj2, function (key, value) {
    return value;
  });
  expect(compare(result2, { a: 3, b: 5 })).toBeTruthy();
});
