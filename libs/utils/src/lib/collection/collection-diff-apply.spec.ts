import { diffApply, jsonPatchPathConverter } from './collection-diff-apply';
import clone from './collection-clone';

it('flat objects', function () {
  const obj1 = { a: 3, b: 5 };
  let originalDiff: any = [{ op: 'replace', path: ['a'], value: 'hello' }];
  let diff = clone(originalDiff);
  diffApply(obj1, diff);
  expect(obj1).toStrictEqual({ a: 'hello', b: 5 });
  expect(diff).toStrictEqual(originalDiff);

  const obj2 = { a: 3, b: 5 };
  originalDiff = [
    { op: 'remove', path: ['b'] },
    { op: 'replace', path: ['a'], value: 4 },
    { op: 'add', path: ['c'], value: 5 },
  ];
  diff = clone(originalDiff);
  diffApply(obj2, diff);
  expect(obj2).toStrictEqual({ a: 4, c: 5 });
  expect(diff).toStrictEqual(originalDiff);

  const obj3 = { a: 3, b: 5 };
  originalDiff = [
    { op: 'remove', path: ['b'] },
    { op: 'replace', path: ['a'], value: null },
  ];
  diff = clone(originalDiff);
  diffApply(obj3, diff);
  expect(obj3).toStrictEqual({ a: null });
  expect(diff).toStrictEqual(originalDiff);
});

it('objects with array properties', function () {
  const obj3 = { a: 4, b: [1, 2, 3] };
  let originalDiff: any = [
    { op: 'replace', path: ['a'], value: 3 },
    { op: 'replace', path: ['b', 2], value: 4 },
    { op: 'add', path: ['b', 3], value: 5 },
  ];
  let diff = clone(originalDiff);
  diffApply(obj3, diff);
  expect(obj3).toStrictEqual({ a: 3, b: [1, 2, 4, 5] });
  expect(diff).toStrictEqual(originalDiff);

  const obj4 = { a: 4, b: [1, 2, 3] };
  originalDiff = [
    { op: 'remove', path: ['b', 2] },
    { op: 'replace', path: ['a'], value: 3 },
    { op: 'replace', path: ['b', 1], value: 3 },
  ];
  diff = clone(originalDiff);

  diffApply(obj4, diff);
  expect(obj4).toStrictEqual({ a: 3, b: [1, 3] });
  expect(diff).toStrictEqual(originalDiff);
});

it('objects with array properties using string array keys', function () {
  const obj3 = { a: 4, b: [1, 2, 3] };
  let originalDiff: any = [
    { op: 'replace', path: ['a'], value: 3 },
    { op: 'replace', path: ['b', '2'], value: 4 },
    { op: 'add', path: ['b', '3'], value: 5 },
  ];
  let diff = clone(originalDiff);
  diffApply(obj3, diff);
  expect(obj3).toStrictEqual({ a: 3, b: [1, 2, 4, 5] });
  expect(diff).toStrictEqual(originalDiff);

  const obj4 = { a: 4, b: [1, 2, 3] };
  originalDiff = [
    { op: 'remove', path: ['b', '2'] },
    { op: 'replace', path: ['a'], value: 3 },
    { op: 'replace', path: ['b', '1'], value: 3 },
  ];
  diff = clone(originalDiff);

  diffApply(obj4, diff);
  expect(obj4).toStrictEqual({ a: 3, b: [1, 3] });
  expect(diff).toStrictEqual(originalDiff);
});

it('nested objects', function () {
  const obj5 = { a: 4, b: { c: 3 } };
  let originalDiff = [
    { op: 'remove', path: ['b', 'c'] },
    { op: 'replace', path: ['a'], value: 5 },
    { op: 'add', path: ['b', 'd'], value: 4 },
  ];
  let diff = clone(originalDiff);
  diffApply(obj5, diff);
  expect(obj5).toStrictEqual({ a: 5, b: { d: 4 } });
  expect(diff).toStrictEqual(originalDiff);

  const obj6 = { a: 4, b: { c: 3 } };
  originalDiff = [
    { op: 'remove', path: ['a'] },
    { op: 'replace', path: ['b', 'c'], value: 9 },
    { op: 'add', path: ['d'], value: 2 },
  ];
  diff = clone(originalDiff);
  diffApply(obj6, diff);
  expect(obj6).toStrictEqual({ d: 2, b: { c: 9 } });
  expect(diff).toStrictEqual(originalDiff);
});

it('arrays', function () {
  const obj7 = ['a', { b: 3 }, 'c', 'd'];
  let originalDiff = [
    { op: 'remove', path: [1, 'b'] },
    { op: 'replace', path: [0], value: 'b' },
    { op: 'replace', path: [2], value: 'd' },
    { op: 'add', path: [1, 'e'], value: 4 },
    { op: 'add', path: [4], value: 'f' },
  ];
  let diff = clone(originalDiff);
  diffApply(obj7, diff);
  expect(obj7).toStrictEqual(['b', { e: 4 }, 'd', 'd', 'f']);
  expect(diff).toStrictEqual(originalDiff);

  const obj8 = ['a', { b: 3 }, 'c', 'd'];
  originalDiff = [
    { op: 'remove', path: [0] },
    { op: 'add', path: [0, 'c'], value: 6 },
    { op: 'replace', path: [2], value: 'ab' },
    { op: 'add', path: [1], value: 12 },
  ];
  diff = clone(originalDiff);
  diffApply(obj8, diff);
  expect(obj8).toStrictEqual([{ b: 3, c: 6 }, 12, 'ab']);
  expect(diff).toStrictEqual(originalDiff);
});

it('object vs array', function () {
  const obj9 = { a: 2 };
  let originalDiff: any = [
    { op: 'remove', path: ['a'] },
    { op: 'add', path: [0], value: 'a' },
    { op: 'add', path: [1], value: 2 },
  ];
  let diff = clone(originalDiff);
  diffApply(obj9, diff);
  expect(obj9).toStrictEqual({ '0': 'a', '1': 2 });
  expect(diff).toStrictEqual(originalDiff);

  const obj10: any = ['a', 2];
  originalDiff = [
    { op: 'remove', path: [0] },
    { op: 'remove', path: [0] },
    { op: 'add', path: ['a'], value: 2 },
  ];
  diff = clone(originalDiff);
  diffApply(obj10, diff);
  expect(typeof obj10 == 'object').toBeTruthy();
  expect(Array.isArray(obj10)).toBeTruthy();
  expect(obj10.a).toBe(2);
  expect(obj10.length).toBe(0);
  expect(diff).toStrictEqual(originalDiff);
});

it('replacing falsey values', function () {
  const obj11 = { a: false, b: null, c: 0 };
  const originalDiff: any = [
    { op: 'replace', path: ['a'], value: true },
    { op: 'replace', path: ['b'], value: 'bb' },
    { op: 'replace', path: ['c'], value: 1 },
  ];
  const diff = clone(originalDiff);
  diffApply(obj11, diff);
  expect(obj11).toStrictEqual({ a: true, b: 'bb', c: 1 });
  expect(diff).toStrictEqual(originalDiff);
});

it('flat objects using js patch standard', function () {
  const obj1 = { a: 3, b: 5 };
  let originalDiff: any = [{ op: 'replace', path: '/a', value: 'hello' }];
  let diff = clone(originalDiff);
  diffApply(obj1, diff, jsonPatchPathConverter);
  expect(obj1).toStrictEqual({ a: 'hello', b: 5 });
  expect(diff).toStrictEqual(originalDiff);

  const obj2 = { a: 3, b: 5 };
  originalDiff = [
    { op: 'remove', path: '/b' },
    { op: 'replace', path: '/a', value: 4 },
    { op: 'add', path: '/c', value: 5 },
  ];
  diff = clone(originalDiff);
  diffApply(obj2, diff, jsonPatchPathConverter);
  expect(obj2).toStrictEqual({ a: 4, c: 5 });
  expect(diff).toStrictEqual(originalDiff);
});

it('objects with array properties using js patch standard', function () {
  const obj3 = { a: 4, b: [1, 2, 3] };
  let originalDiff: any = [
    { op: 'replace', path: '/a', value: 3 },
    { op: 'replace', path: '/b/2', value: 4 },
    { op: 'add', path: '/b/3', value: 5 },
  ];
  let diff = clone(originalDiff);
  diffApply(obj3, diff, jsonPatchPathConverter);
  expect(obj3).toStrictEqual({ a: 3, b: [1, 2, 4, 5] });
  expect(diff).toStrictEqual(originalDiff);

  const obj4 = { a: 4, b: [1, 2, 3] };
  originalDiff = [
    { op: 'remove', path: '/b/2' },
    { op: 'replace', path: '/a', value: 3 },
    { op: 'replace', path: '/b/1', value: 3 },
  ];
  diff = clone(originalDiff);
  diffApply(obj4, diff, jsonPatchPathConverter);
  expect(obj4).toStrictEqual({ a: 3, b: [1, 3] });
  expect(diff).toStrictEqual(originalDiff);
});

it('nested objects using js patch standard', function () {
  const obj5 = { a: 4, b: { c: 3 } };
  let originalDiff: any = [
    { op: 'remove', path: '/b/c' },
    { op: 'replace', path: '/a', value: 5 },
    { op: 'add', path: '/b/d', value: 4 },
  ];
  let diff = clone(originalDiff);
  diffApply(obj5, diff, jsonPatchPathConverter);
  expect(obj5).toStrictEqual({ a: 5, b: { d: 4 } });
  expect(diff).toStrictEqual(originalDiff);

  const obj6 = { a: 4, b: { c: 3 } };
  originalDiff = [
    { op: 'remove', path: '/a' },
    { op: 'replace', path: '/b/c', value: 9 },
    { op: 'add', path: '/d', value: 2 },
  ];
  diff = clone(originalDiff);
  diffApply(obj6, diff, jsonPatchPathConverter);
  expect(obj6).toStrictEqual({ d: 2, b: { c: 9 } });
  expect(diff).toStrictEqual(originalDiff);
});

it('arrays using js patch standard', function () {
  const obj7 = ['a', { b: 3 }, 'c', 'd'];
  let originalDiff: any = [
    { op: 'remove', path: '/a' },
    { op: 'replace', path: '/b/c', value: 9 },
    { op: 'add', path: '/d', value: 2 },
  ];
  let diff = clone(originalDiff);
  diffApply(
    obj7,
    [
      { op: 'remove', path: '/1/b' },
      { op: 'replace', path: '/0', value: 'b' },
      { op: 'replace', path: '/2', value: 'd' },
      { op: 'add', path: '/1/e', value: 4 },
      { op: 'add', path: '/4', value: 'f' },
    ],
    jsonPatchPathConverter
  );
  expect(obj7).toStrictEqual(['b', { e: 4 }, 'd', 'd', 'f']);
  expect(diff).toStrictEqual(originalDiff);

  const obj8 = ['a', { b: 3 }, 'c', 'd'];
  originalDiff = [
    { op: 'remove', path: '/a' },
    { op: 'replace', path: '/b/c', value: 9 },
    { op: 'add', path: '/d', value: 2 },
  ];
  diff = clone(originalDiff);
  diffApply(
    obj8,
    [
      { op: 'remove', path: '/0' },
      { op: 'add', path: '/0/c', value: 6 },
      { op: 'replace', path: '/2', value: 'ab' },
      { op: 'add', path: '/1', value: 12 },
    ],
    jsonPatchPathConverter
  );
  expect(obj8).toStrictEqual([{ b: 3, c: 6 }, 12, 'ab']);
  expect(diff).toStrictEqual(originalDiff);
});

it('object vs array using js patch standard', function () {
  const obj9 = { a: 2 };
  let originalDiff = [
    { op: 'remove', path: '/a' },
    { op: 'add', path: '/0', value: 'a' },
    { op: 'add', path: '/1', value: 2 },
  ];
  let diff = clone(originalDiff);
  diffApply(obj9, diff, jsonPatchPathConverter);
  expect(obj9).toStrictEqual({ '0': 'a', '1': 2 });
  expect(diff).toStrictEqual(originalDiff);

  const obj10: any = ['a', 2];
  originalDiff = [
    { op: 'remove', path: '/0' },
    { op: 'remove', path: '/0' },
    { op: 'add', path: '/a', value: 2 },
  ];
  diff = clone(originalDiff);
  diffApply(obj10, diff, jsonPatchPathConverter);
  expect(typeof obj10 == 'object').toBeTruthy();
  expect(Array.isArray(obj10)).toBeTruthy();
  expect(obj10.a).toBe(2);
  expect(obj10.length).toBe(0);
  expect(diff).toStrictEqual(originalDiff);
});

it('replacing falsey values using js patch standard', function () {
  const obj11 = { a: false, b: null, c: 0 };
  const originalDiff = [
    { op: 'replace', path: '/a', value: true },
    { op: 'replace', path: '/b', value: 'bb' },
    { op: 'replace', path: '/c', value: 1 },
  ];
  const diff = clone(originalDiff);
  diffApply(obj11, diff, jsonPatchPathConverter);
  expect(obj11).toStrictEqual({ a: true, b: 'bb', c: 1 });
  expect(diff).toStrictEqual(originalDiff);
});
