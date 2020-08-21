import clone from './collection-clone';

it('copies entire tree', function () {
  let arr = [1, 2, 3];
  const subObj = { aa: 1 };
  const obj = { a: 3, b: 5, c: arr, d: subObj };
  const objClone = clone(obj);
  expect(objClone).toStrictEqual(obj);

  arr = [1, 2, ['a', 'b', { dd: [1, 2, 3] }]];
  const arrClone = clone(arr);
  expect(arrClone).toStrictEqual(arr);
});

it('clones child plain objects and arrays', function () {
  const arr = [1, 2, 3];
  const subObj: any = { aa: 1 };
  const obj = { a: 3, b: 5, c: arr, d: subObj };
  const objClone = clone(obj);
  arr.push(4);
  subObj.bb = 2;
  expect(obj).toStrictEqual({
    a: 3,
    b: 5,
    c: [1, 2, 3, 4],
    d: { aa: 1, bb: 2 },
  });
  expect(objClone).toStrictEqual({ a: 3, b: 5, c: [1, 2, 3], d: { aa: 1 } });
});

it('clones Functions, Dates and RegExps', function () {
  const date = new Date();
  const regexp = /a(b)c/gim;
  const obj = { b: date, c: regexp };
  const objClone = clone(obj);
  const objToString = Object.prototype.toString;
  expect(objToString.call(objClone.b)).toBe('[object Date]');
  // t.equal(objToString.call(objClone.c), '[object RegExp]');
  // objClone.b.setTime(date.getTime() + 87);
  // t.equal(objClone.b.getTime() - date.getTime(), 87);
  // objClone.c.compile(/a(c)/gi);
  // t.equal(regexp.source, 'a(b)c');
  // t.equal(objClone.c.source, 'a(c)');
  // t.equal(regexp.flags, 'gim');
  // t.equal(objClone.c.flags, 'gi');
});

it("doesn't clone functions", function () {
  // const fn = function (a, b) {
  //   return a + b;
  // };
  // t.ok(fn === clone(fn));
  // const obj = { a: 3, b: 5, c: fn };
  // fn.x = 22;
  // const objClone = clone(obj);
  // fn.x = 34;
  // t.deepEqual(objClone, { a: 3, b: 5, c: fn });
  // t.equal(objClone.c(2, 3), 5);
  // t.equal(fn(2, 3), 5);
  // t.equal(objClone.c.x, 34);
  // t.equal(fn.x, 34);
});
