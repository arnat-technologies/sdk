import { diff, jsonPatchPathConverter } from './collection-diff';
import compare from './collection-compare';

it('flat objects', function () {
  const obj1 = { a: 4, b: 5 };
  const obj2 = { a: 3, b: 5 };
  const obj3 = { a: 4, c: 5 };

  expect(
    compare(diff(obj1, obj2), [{ op: 'replace', path: ['a'], value: 3 }])
  ).toBeTruthy();
  expect(
    compare(diff(obj2, obj1), [{ op: 'replace', path: ['a'], value: 4 }])
  ).toBeTruthy();
  expect(
    compare(diff(obj1, obj3), [
      { op: 'remove', path: ['b'] },
      { op: 'add', path: ['c'], value: 5 },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj3, obj1), [
      { op: 'remove', path: ['c'] },
      { op: 'add', path: ['b'], value: 5 },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj2, obj3), [
      { op: 'remove', path: ['b'] },
      { op: 'replace', path: ['a'], value: 4 },
      { op: 'add', path: ['c'], value: 5 },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj3, obj2), [
      { op: 'remove', path: ['c'] },
      { op: 'replace', path: ['a'], value: 3 },
      { op: 'add', path: ['b'], value: 5 },
    ])
  ).toBeTruthy();

  const obj4 = { a: 3, b: null };
  expect(
    compare(diff(obj1, obj4), [
      { op: 'replace', path: ['a'], value: 3 },
      { op: 'replace', path: ['b'], value: null },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj4, obj1), [
      { op: 'replace', path: ['a'], value: 4 },
      { op: 'replace', path: ['b'], value: 5 },
    ])
  ).toBeTruthy();
});

it('flat null and undefined', function () {
  expect(
    compare(
      diff(
        {
          foo: null,
        },
        {
          foo: null,
        }
      ),
      []
    )
  ).toBeTruthy();

  expect(
    compare(
      diff(
        {
          foo: undefined,
        },
        {
          foo: undefined,
        }
      ),
      []
    )
  ).toBeTruthy();

  expect(
    compare(
      diff(
        {
          foo: undefined,
        },
        {
          foo: null,
        }
      ),
      [{ op: 'replace', path: ['foo'], value: null }]
    )
  ).toBeTruthy();

  expect(
    compare(
      diff(
        {
          foo: null,
        },
        {
          foo: undefined,
        }
      ),
      [{ op: 'replace', path: ['foo'], value: undefined }]
    )
  ).toBeTruthy();
});

it('objects with array properties', function () {
  const obj4 = { a: 4, b: [1, 2, 3] };
  const obj5 = { a: 3, b: [1, 2, 4] };
  const obj6 = { a: 3, b: [1, 2, 4, 5] };

  expect(
    compare(diff(obj4, obj5), [
      { op: 'replace', path: ['a'], value: 3 },
      { op: 'replace', path: ['b', 2], value: 4 },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj5, obj4), [
      { op: 'replace', path: ['a'], value: 4 },
      { op: 'replace', path: ['b', 2], value: 3 },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj4, obj6), [
      { op: 'replace', path: ['a'], value: 3 },
      { op: 'replace', path: ['b', 2], value: 4 },
      { op: 'add', path: ['b', 3], value: 5 },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj6, obj4), [
      { op: 'remove', path: ['b', 3] },
      { op: 'replace', path: ['a'], value: 4 },
      { op: 'replace', path: ['b', 2], value: 3 },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj5, obj6), [{ op: 'add', path: ['b', 3], value: 5 }])
  ).toBeTruthy();
  expect(
    compare(diff(obj6, obj5), [{ op: 'remove', path: ['b', 3] }])
  ).toBeTruthy();
});

it('objects whose properties are objects but with no properties of their own', function () {
  const obj21 = {
    a: 4,
    b1: new Date('1990-01-22T15:14:10.837Z'),
    b2: new Date('1993-01-22T15:14:10.837Z'),
    c1: /abc/,
    c2: /def/,
    d: JSON,
  };

  const obj22 = {
    a: 3,
    b1: new Date('2018-01-22T15:11:19.244Z'),
    b2: new Date('1993-01-22T15:14:10.837Z'),
    c1: /bcd/,
    c2: /def/,
    d: JSON,
  };

  expect(
    compare(diff(obj21, obj22), [
      { op: 'replace', path: ['a'], value: 3 },
      {
        op: 'replace',
        path: ['b1'],
        value: new Date('2018-01-22T15:11:19.244Z'),
      },
      { op: 'replace', path: ['c1'], value: /bcd/ },
    ])
  ).toBeTruthy();
});

it('objects with nulls against array properties', function () {
  expect(
    compare(
      diff(
        {
          foo: null,
        },
        {
          foo: [1, 2, 3],
        }
      ),
      [{ op: 'replace', path: ['foo'], value: [1, 2, 3] }]
    )
  ).toBeTruthy();

  expect(
    compare(
      diff(
        {
          foo: undefined,
        },
        {
          foo: [1, 2, 3],
        }
      ),
      [{ op: 'replace', path: ['foo'], value: [1, 2, 3] }]
    )
  ).toBeTruthy();
});

it('nested objects', function () {
  const obj7 = { a: 4, b: { c: 3 } };
  const obj8 = { a: 4, b: { c: 4 } };
  const obj9 = { a: 5, b: { d: 4 } };
  const obj10 = { a: 4 };
  const obj11 = { a: 4, b: { c: 4 } };

  expect(
    compare(diff(obj7, obj8), [{ op: 'replace', path: ['b', 'c'], value: 4 }])
  );
  expect(
    compare(diff(obj8, obj7), [{ op: 'replace', path: ['b', 'c'], value: 3 }])
  );
  expect(
    compare(diff(obj7, obj9), [
      { op: 'remove', path: ['b', 'c'] },
      { op: 'replace', path: ['a'], value: 5 },
      { op: 'add', path: ['b', 'd'], value: 4 },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj9, obj7), [
      { op: 'remove', path: ['b', 'd'] },
      { op: 'replace', path: ['a'], value: 4 },
      { op: 'add', path: ['b', 'c'], value: 3 },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj8, obj9), [
      { op: 'remove', path: ['b', 'c'] },
      { op: 'replace', path: ['a'], value: 5 },
      { op: 'add', path: ['b', 'd'], value: 4 },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj9, obj8), [
      { op: 'remove', path: ['b', 'd'] },
      { op: 'replace', path: ['a'], value: 4 },
      { op: 'add', path: ['b', 'c'], value: 4 },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj10, obj11), [{ op: 'add', path: ['b'], value: { c: 4 } }])
  ).toBeTruthy();
  expect(
    compare(diff(obj11, obj10), [{ op: 'remove', path: ['b'] }])
  ).toBeTruthy();
});

it('objects with nulls against nested objects', function () {
  expect(
    compare(
      diff(
        {
          foo: null,
        },
        {
          foo: { bar: 'smang' },
        }
      ),
      [{ op: 'replace', path: ['foo'], value: { bar: 'smang' } }]
    )
  ).toBeTruthy();

  expect(
    compare(
      diff(
        {
          foo: undefined,
        },
        {
          foo: { bar: 'smang' },
        }
      ),
      [{ op: 'replace', path: ['foo'], value: { bar: 'smang' } }]
    )
  ).toBeTruthy();
});

it('arrays', function () {
  const obj12 = ['a', { a: 2 }, 'c'];
  const obj13 = ['a', { a: 3 }, 'd'];
  const obj14 = ['b', { b: 3 }, 'd', 'e'];

  expect(
    compare(diff(obj12, obj13), [
      { op: 'replace', path: [1, 'a'], value: 3 },
      { op: 'replace', path: [2], value: 'd' },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj13, obj12), [
      { op: 'replace', path: [1, 'a'], value: 2 },
      { op: 'replace', path: [2], value: 'c' },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj12, obj14), [
      { op: 'remove', path: [1, 'a'] },
      { op: 'replace', path: [0], value: 'b' },
      { op: 'replace', path: [2], value: 'd' },
      { op: 'add', path: [1, 'b'], value: 3 },
      { op: 'add', path: [3], value: 'e' },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj13, obj14), [
      { op: 'remove', path: [1, 'a'] },
      { op: 'replace', path: [0], value: 'b' },
      { op: 'add', path: [1, 'b'], value: 3 },
      { op: 'add', path: [3], value: 'e' },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj13, obj14), [
      { op: 'remove', path: [1, 'a'] },
      { op: 'replace', path: [0], value: 'b' },
      { op: 'add', path: [1, 'b'], value: 3 },
      { op: 'add', path: [3], value: 'e' },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj14, obj13), [
      { op: 'remove', path: [3] },
      { op: 'remove', path: [1, 'b'] },
      { op: 'replace', path: [0], value: 'a' },
      { op: 'add', path: [1, 'a'], value: 3 },
    ])
  ).toBeTruthy();
});

it('object vs array', function () {
  const obj15 = { a: 2 };
  const obj16 = ['a', 2];

  expect(
    compare(diff(obj15, obj16), [
      { op: 'remove', path: ['a'] },
      { op: 'add', path: [0], value: 'a' },
      { op: 'add', path: [1], value: 2 },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj16, obj15), [
      { op: 'remove', path: [1] },
      { op: 'remove', path: [0] },
      { op: 'add', path: ['a'], value: 2 },
    ])
  ).toBeTruthy();
});

it('round trip', function () {
  const obj15 = [1, 2, 3, 4, 5, 17, 18];
  const obj16 = [2];

  var thisDiff = diff(obj15, obj16);
  diffApply(obj15, thisDiff);
  expect(compare(obj15, obj16)).toBeTruthy();

  const obj15a = [1, 2, 3, 4, 5, 17, 18];
  const obj16a = [2];

  thisDiff = diff(obj16a, obj15a);
  diffApply(obj16a, thisDiff);
  expect(compare(obj15a, obj16a)).toBeTruthy();

  const obj17 = { a: [1, 2], b: { c: 3, d: 4, f: [23, 'l'] } };
  const obj18 = { c: [1, 2], e: { c: 5, e: 1, f: [23, 'l', 'x'] } };

  var thisDiff = diff(obj17, obj18);
  diffApply(obj17, thisDiff);
  expect(compare(obj17, obj18)).toBeTruthy();

  const obj17a = { a: [1, 2], b: { c: 3, d: 4, f: [23, 'l'] } };
  const obj18a = { c: [1, 2], e: { c: 5, e: 1, f: [23, 'l', 'x'] } };

  thisDiff = diff(obj18a, obj17a);
  diffApply(obj18a, thisDiff);
  expect(compare(obj17a, obj18a)).toBeTruthy();
});

it('flat objects using jsPatchStandard', function () {
  const obj1 = { a: 4, b: 5 };
  const obj2 = { a: 3, b: 5 };
  const obj3 = { a: 4, c: 5 };

  expect(
    compare(diff(obj1, obj2, jsonPatchPathConverter), [
      { op: 'replace', path: '/a', value: 3 },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj2, obj1, jsonPatchPathConverter), [
      { op: 'replace', path: '/a', value: 4 },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj1, obj3, jsonPatchPathConverter), [
      { op: 'remove', path: '/b' },
      { op: 'add', path: '/c', value: 5 },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj3, obj1, jsonPatchPathConverter), [
      { op: 'remove', path: '/c' },
      { op: 'add', path: '/b', value: 5 },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj2, obj3, jsonPatchPathConverter), [
      { op: 'remove', path: '/b' },
      { op: 'replace', path: '/a', value: 4 },
      { op: 'add', path: '/c', value: 5 },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj3, obj2, jsonPatchPathConverter), [
      { op: 'remove', path: '/c' },
      { op: 'replace', path: '/a', value: 3 },
      { op: 'add', path: '/b', value: 5 },
    ])
  ).toBeTruthy();
});

it('objects with array properties using jsPatchStandard', function () {
  const obj4 = { a: 4, b: [1, 2, 3] };
  const obj5 = { a: 3, b: [1, 2, 4] };
  const obj6 = { a: 3, b: [1, 2, 4, 5] };

  expect(
    compare(diff(obj4, obj5, jsonPatchPathConverter), [
      { op: 'replace', path: '/a', value: 3 },
      { op: 'replace', path: '/b/2', value: 4 },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj5, obj4, jsonPatchPathConverter), [
      { op: 'replace', path: '/a', value: 4 },
      { op: 'replace', path: '/b/2', value: 3 },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj4, obj6, jsonPatchPathConverter), [
      { op: 'replace', path: '/a', value: 3 },
      { op: 'replace', path: '/b/2', value: 4 },
      { op: 'add', path: '/b/3', value: 5 },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj6, obj4, jsonPatchPathConverter), [
      { op: 'remove', path: '/b/3' },
      { op: 'replace', path: '/a', value: 4 },
      { op: 'replace', path: '/b/2', value: 3 },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj5, obj6, jsonPatchPathConverter), [
      { op: 'add', path: '/b/3', value: 5 },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj6, obj5, jsonPatchPathConverter), [
      { op: 'remove', path: '/b/3' },
    ])
  ).toBeTruthy();
});

it('nested objects using jsPatchStandard', function () {
  const obj7 = { a: 4, b: { c: 3 } };
  const obj8 = { a: 4, b: { c: 4 } };
  const obj9 = { a: 5, b: { d: 4 } };
  const obj10 = { a: 4 };
  const obj11 = { a: 4, b: { c: 4 } };

  expect(
    compare(diff(obj7, obj8, jsonPatchPathConverter), [
      { op: 'replace', path: '/b/c', value: 4 },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj8, obj7, jsonPatchPathConverter), [
      { op: 'replace', path: '/b/c', value: 3 },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj7, obj9, jsonPatchPathConverter), [
      { op: 'remove', path: '/b/c' },
      { op: 'replace', path: '/a', value: 5 },
      { op: 'add', path: '/b/d', value: 4 },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj9, obj7, jsonPatchPathConverter), [
      { op: 'remove', path: '/b/d' },
      { op: 'replace', path: '/a', value: 4 },
      { op: 'add', path: '/b/c', value: 3 },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj8, obj9, jsonPatchPathConverter), [
      { op: 'remove', path: '/b/c' },
      { op: 'replace', path: '/a', value: 5 },
      { op: 'add', path: '/b/d', value: 4 },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj9, obj8, jsonPatchPathConverter), [
      { op: 'remove', path: '/b/d' },
      { op: 'replace', path: '/a', value: 4 },
      { op: 'add', path: '/b/c', value: 4 },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj10, obj11, jsonPatchPathConverter), [
      { op: 'add', path: '/b', value: { c: 4 } },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj11, obj10, jsonPatchPathConverter), [
      { op: 'remove', path: '/b' },
    ])
  ).toBeTruthy();
});

it('arrays using jsPatchStandard', function () {
  const obj12 = ['a', { a: 2 }, 'c'];
  const obj13 = ['a', { a: 3 }, 'd'];
  const obj14 = ['b', { b: 3 }, 'd', 'e'];

  expect(
    compare(diff(obj12, obj13, jsonPatchPathConverter), [
      { op: 'replace', path: '/1/a', value: 3 },
      { op: 'replace', path: '/2', value: 'd' },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj13, obj12, jsonPatchPathConverter), [
      { op: 'replace', path: '/1/a', value: 2 },
      { op: 'replace', path: '/2', value: 'c' },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj12, obj14, jsonPatchPathConverter), [
      { op: 'remove', path: '/1/a' },
      { op: 'replace', path: '/0', value: 'b' },
      { op: 'replace', path: '/2', value: 'd' },
      { op: 'add', path: '/1/b', value: 3 },
      { op: 'add', path: '/3', value: 'e' },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj13, obj14, jsonPatchPathConverter), [
      { op: 'remove', path: '/1/a' },
      { op: 'replace', path: '/0', value: 'b' },
      { op: 'add', path: '/1/b', value: 3 },
      { op: 'add', path: '/3', value: 'e' },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj13, obj14, jsonPatchPathConverter), [
      { op: 'remove', path: '/1/a' },
      { op: 'replace', path: '/0', value: 'b' },
      { op: 'add', path: '/1/b', value: 3 },
      { op: 'add', path: '/3', value: 'e' },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj14, obj13, jsonPatchPathConverter), [
      { op: 'remove', path: '/3' },
      { op: 'remove', path: '/1/b' },
      { op: 'replace', path: '/0', value: 'a' },
      { op: 'add', path: '/1/a', value: 3 },
    ])
  ).toBeTruthy();
});

it('object vs array using jsPatchStandard', function () {
  const obj15 = { a: 2 };
  const obj16 = ['a', 2];

  expect(
    compare(diff(obj15, obj16, jsonPatchPathConverter), [
      { op: 'remove', path: '/a' },
      { op: 'add', path: '/0', value: 'a' },
      { op: 'add', path: '/1', value: 2 },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj16, obj15, jsonPatchPathConverter), [
      { op: 'remove', path: '/1' },
      { op: 'remove', path: '/0' },
      { op: 'add', path: '/a', value: 2 },
    ])
  ).toBeTruthy();
});

it('round trip using jsPatchStandard', function () {
  const obj15 = [1, 2, 3, 4, 5, 16, 17];
  const obj16 = [2, 3];

  var thisDiff = diff(obj15, obj16, jsonPatchPathConverter);
  diffApply(obj15, thisDiff, jsonPatchApplier);
  t.ok(compare(obj15, obj16));

  const obj15a = [1, 2, 3, 4, 5, 16, 17];
  const obj16a = [2, 3];

  thisDiff = diff(obj16a, obj15a, jsonPatchPathConverter);
  diffApply(obj16a, thisDiff, jsonPatchApplier);
  t.ok(compare(obj15a, obj16a));

  const obj17 = { a: [1, 2], b: { c: 3, d: 4, f: [23, 'l'] } };
  const obj18 = { c: [1, 2], e: { c: 5, e: 1, f: [23, 'l', 'x'] } };

  var thisDiff = diff(obj17, obj18, jsonPatchPathConverter);
  diffApply(obj17, thisDiff, jsonPatchApplier);
  t.ok(compare(obj17, obj18));

  const obj17a = { a: [1, 2], b: { c: 3, d: 4, f: [23, 'l'] } };
  const obj18a = { c: [1, 2], e: { c: 5, e: 1, f: [23, 'l', 'x'] } };

  thisDiff = diff(obj18a, obj17a, jsonPatchPathConverter);
  diffApply(obj18a, thisDiff, jsonPatchApplier);
  t.ok(compare(obj17a, obj18a));
});

it('nested objects using custom converter', function () {
  const converter = function (path) {
    return path.join('-');
  };
  const obj7 = { a: 4, b: { c: 3 } };
  const obj8 = { a: 4, b: { c: 4 } };
  const obj9 = { a: 5, b: { d: 4 } };
  const obj10 = { a: 4 };
  const obj11 = { a: 4, b: { c: 4 } };

  expect(
    compare(diff(obj7, obj8, converter), [
      { op: 'replace', path: 'b-c', value: 4 },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj8, obj7, converter), [
      { op: 'replace', path: 'b-c', value: 3 },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj7, obj9, converter), [
      { op: 'remove', path: 'b-c' },
      { op: 'replace', path: 'a', value: 5 },
      { op: 'add', path: 'b-d', value: 4 },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj9, obj7, converter), [
      { op: 'remove', path: 'b-d' },
      { op: 'replace', path: 'a', value: 4 },
      { op: 'add', path: 'b-c', value: 3 },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj8, obj9, converter), [
      { op: 'remove', path: 'b-c' },
      { op: 'replace', path: 'a', value: 5 },
      { op: 'add', path: 'b-d', value: 4 },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj9, obj8, converter), [
      { op: 'remove', path: 'b-d' },
      { op: 'replace', path: 'a', value: 4 },
      { op: 'add', path: 'b-c', value: 4 },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj10, obj11, converter), [
      { op: 'add', path: 'b', value: { c: 4 } },
    ])
  ).toBeTruthy();
  expect(
    compare(diff(obj11, obj10, converter), [{ op: 'remove', path: 'b' }])
  ).toBeTruthy();
});

it('invalid inputs', function () {
  expect(() => compare(diff(null, null))).toThrowError();
  // expect(function () {
  //   compare(diff(undefined, undefined));
  // });
  // expect(function () {
  //   compare(diff({ a: 2 }, undefined));
  // });
  // expect(function () {
  //   compare(diff(null, { b: 4 }));
  // });
  // expect(function () {
  //   compare(diff(7, 6));
  // });
  // expect(function () {
  //   compare(
  //     diff(function (a, b) {
  //       return a + b;
  //     }, 6)
  //   );
  // });
});
