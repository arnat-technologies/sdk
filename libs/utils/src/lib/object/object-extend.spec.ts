import extend from './object-extend';

it('shallow extend merges properties', function () {
  const src = { a: 3, b: 5 };
  expect(extend(src, { a: 4, c: 8 })).toStrictEqual({ a: 4, b: 5, c: 8 });
  expect(src).toStrictEqual({ a: 4, b: 5, c: 8 });
});

it('shallow extend merges into new object', function () {
  const src = {};
  expect(extend(src, { a: 3, b: 5 }, { a: 4, c: 8 })).toStrictEqual({
    a: 4,
    b: 5,
    c: 8,
  });
  expect(src).toStrictEqual({ a: 4, b: 5, c: 8 });
});

it('shallow extend does not clone child objects', function () {
  const obj = { p: 4 };
  const src2 = { a: 3, b: 5 };
  expect(extend(src2, { c: obj })).toStrictEqual({ a: 3, b: 5, c: { p: 4 } });
  obj.p = 9;
  expect(src2).toStrictEqual({ a: 3, b: 5, c: { p: 9 } });

  const arrInner = [1, 2, 3];
  const arrOuter = ['a', 'b', arrInner];
  const src1 = { a: 3, b: 5 };
  expect(extend(src1, { c: arrOuter })).toStrictEqual({
    a: 3,
    b: 5,
    c: ['a', 'b', [1, 2, 3]],
  });
});

it('shallow extend copies non-plain objects', function () {
  const fn = function (a, b) {
    return a + b;
  };
  let src2: any = { a: 3, b: 5 };
  src2 = extend(src2, { c: fn });
  expect(src2).toStrictEqual({ a: 3, b: 5, c: fn });
  expect(src2.c(4, 2)).toStrictEqual(6);
  fn.x = 34;
  expect(src2.c.x).toStrictEqual(34);

  const date: any = new Date(1510439803151);
  date.x = 0;
  let src3: any = { a: 3, b: 5 };
  src3 = extend(src3, { c: date });
  expect(src3).toStrictEqual({ a: 3, b: 5, c: date });
  expect(src3.c.getTime()).toStrictEqual(1510439803151);
  date.x = 34;
  expect(src3.c.x).toStrictEqual(34);

  const regex: any = /abc/;
  src3 = { a: 3, b: 5 };
  expect(extend(src3, { c: regex })).toStrictEqual({ a: 3, b: 5, c: regex });
  expect(src3).toStrictEqual({ a: 3, b: 5, c: regex });
  expect(src3.c.exec('ddabc').index).toStrictEqual(2);
  regex.x = 34;
  expect(src3.c.x).toStrictEqual(34);
});

it('deep extend merges child objects', function () {
  const obj = { a: { b: 'c' } };
  const obj2 = { a: { c: 'd' } };
  const obj3 = extend(true, obj, obj2);
  expect(obj3).toStrictEqual({ a: { b: 'c', c: 'd' } });
});

it('deep extend clones child plain objects and arrays', function () {
  const obj = { p: 4 };
  const src2 = { a: 3, b: 5 };
  expect(extend(true, src2, { c: obj })).toStrictEqual({
    a: 3,
    b: 5,
    c: { p: 4 },
  });
  obj.p = 9;
  expect(src2).toStrictEqual({ a: 3, b: 5, c: { p: 4 } });

  const arrInner = [1, 2, 3];
  const arrOuter = ['a', 'b', arrInner];
  const src1 = { a: 3, b: 5 };
  expect(extend(true, src1, { c: arrOuter })).toStrictEqual({
    a: 3,
    b: 5,
    c: ['a', 'b', [1, 2, 3]],
  });
});

it('deep extend does not clone child non-plain objects', function () {
  const fn = function (a, b) {
    return a + b;
  };
  const src2: any = { a: 3, b: 5 };
  expect(extend(true, src2, { c: fn })).toStrictEqual({ a: 3, b: 5, c: fn });
  expect(src2).toStrictEqual({ a: 3, b: 5, c: fn });
  expect(src2.c(4, 2)).toBe(6);
  fn.x = 34;
  expect(src2.c.x).toBe(34);

  const date: any = new Date(1510439803151);
  let src3: any = { a: 3, b: 5 };
  expect(extend(true, src3, { c: date })).toStrictEqual({
    a: 3,
    b: 5,
    c: date,
  });
  expect(src3).toStrictEqual({ a: 3, b: 5, c: date });
  expect(src3.c.getTime()).toBe(1510439803151);
  date.x = 34;
  expect(src3.c.x).toBe(34);

  const regex: any = /abc/;
  src3 = { a: 3, b: 5 };
  expect(extend(true, src3, { c: regex })).toStrictEqual({
    a: 3,
    b: 5,
    c: regex,
  });
  expect(src3).toStrictEqual({ a: 3, b: 5, c: regex });
  expect(src3.c.exec('ddabc').index).toBe(2);
  regex.x = 34;
  expect(src3.c.x).toBe(34);
});

it('null values are copied', function () {
  const src = { a: 3, b: 5 };
  expect(extend(src, { a: null, c: null })).toStrictEqual({
    a: null,
    b: 5,
    c: null,
  });
  expect(src).toStrictEqual({ a: null, b: 5, c: null });
});

it('explicitly undefined values are copied', function () {
  const src = { a: 3, b: 5 };
  expect(extend(src, { a: undefined, c: undefined })).toStrictEqual({
    a: undefined,
    b: 5,
    c: undefined,
  });
  expect(src).toStrictEqual({ a: undefined, b: 5, c: undefined });
});

it('when no extenders, extendee is returned unmutated', function () {
  const src = { a: 3, b: 5 };
  const srcRef = src;
  expect(extend(src)).toStrictEqual(src);
  expect(srcRef).toStrictEqual(src);
  expect(extend(true, src)).toStrictEqual(src);
  expect(srcRef).toStrictEqual(src);
});

it('extendee and extenders can be functions', function () {
  const fn = function () {};
  const result = extend(fn, { a: 4 });
  expect(typeof result == 'function').toBeTruthy();
  expect(result.a === 4).toBeTruthy();

  const src = { a: 3 };
  const fn2 = function () {};
  expect(extend(true, src, { b: fn2 })).toStrictEqual({ a: 3, b: fn2 });
  expect(src).toStrictEqual({ a: 3, b: fn2 });
});

it('extender can be any primitive', function () {
  const src1 = { a: 4 };
  expect(extend(src1, null)).toStrictEqual({ a: 4 });
  expect(src1).toStrictEqual({ a: 4 });

  const src2 = { a: 3 };
  expect(extend(src2, undefined)).toStrictEqual({ a: 3 });
  expect(src2).toStrictEqual({ a: 3 });

  const src3 = { a: 4 };
  expect(extend(src3, 'hello')).toStrictEqual({
    0: 'h',
    1: 'e',
    2: 'l',
    3: 'l',
    4: 'o',
    a: 4,
  });
  expect(src3).toStrictEqual({ 0: 'h', 1: 'e', 2: 'l', 3: 'l', 4: 'o', a: 4 });

  const src4 = { 1: 9, a: 4 };
  expect(extend(src4, 'hello', 4)).toStrictEqual({
    0: 'h',
    1: 'e',
    2: 'l',
    3: 'l',
    4: 'o',
    a: 4,
  });
  expect(src4).toStrictEqual({ 0: 'h', 1: 'e', 2: 'l', 3: 'l', 4: 'o', a: 4 });

  const src5 = { a: 4 };
  expect(extend(src5, false)).toStrictEqual({ a: 4 });
  expect(src5).toStrictEqual({ a: 4 });

  const src6 = { a: 4 };
  expect(extend(src6, 3, true)).toStrictEqual({ a: 4 });
  expect(src6).toStrictEqual({ a: 4 });
});

it("extendee can't be a primitive", function () {
  expect(() => extend(null, { b: 4, c: 5 })).toThrowError(
    'extendee must be an object'
  );
  expect(() => extend(undefined, { b: 4, c: 5 })).toThrowError(
    'extendee must be an object'
  );
  expect(() => extend('hello', { b: 4, c: 5 })).toThrowError(
    'extendee must be an object'
  );
  expect(() => extend(3, { b: 4, c: 5 })).toThrowError(
    'extendee must be an object'
  );
  expect(() => extend(false, null, { b: 4, c: 5 })).toThrowError(
    'extendee must be an object'
  );
  expect(() => extend(true, undefined, { b: 4, c: 5 })).toThrowError(
    'extendee must be an object'
  );
  expect(() => extend(true, 'hello', { b: 4, c: 5 })).toThrowError(
    'extendee must be an object'
  );
  expect(() => extend(false, 3, { b: 4, c: 5 })).toThrowError(
    'extendee must be an object'
  );
  expect(() => extend(false, false, { b: 4, c: 5 })).toThrowError(
    'extendee must be an object'
  );
});

it('shallow extend does not copy prototype values', function () {
  const obj1 = { a: 3, b: 5 };
  const obj2 = Object.create({ c: 9, d: 4, e: 3 });
  obj2.a = 4;
  obj2.e = 7;
  expect(extend(obj1, obj2)).toStrictEqual({ a: 4, b: 5, e: 7 });
  expect(obj1).toStrictEqual({ a: 4, b: 5, e: 7 });
});

it('deep extend does not copy prototype values', function () {
  const obj1 = { a: 3, b: 5 };
  const obj2 = Object.create({ c: 9, d: 4 });
  obj2.a = 4;
  obj2.e = 7;
  const obj3 = Object.create({ f: 4, x: 12, y: 33 });
  obj3.f = 2;
  obj3.g = 88;
  obj2.h = obj3;
  expect(extend(true, obj1, obj2)).toStrictEqual({
    a: 4,
    b: 5,
    e: 7,
    h: { f: 2, g: 88 },
  });
  expect(obj1).toStrictEqual({ a: 4, b: 5, e: 7, h: { f: 2, g: 88 } });
});

it('deep extend cannot extend native prototypes', function () {
  const attackObj1 = { constructor: { prototype: { isAdmin: true } } };
  const obj1 = extend(true, {}, attackObj1);
  expect(({} as any).isAdmin).toBe(undefined);
  expect(({} as any).__proto__.isAdmin).toBe(undefined);
  expect(typeof {}.constructor === 'function').toBeTruthy();
  expect(obj1.constructor).toBeTruthy();
  expect(typeof obj1.constructor === 'object').toBeTruthy();
  expect(obj1.constructor.prototype).toBeTruthy();
  expect(typeof obj1.constructor.prototype === 'object').toBeTruthy();
  expect(obj1.constructor.prototype.isAdmin).toBeTruthy();

  const attackObj2 = JSON.parse('{"__proto__": {"isAdmin": true}}');
  const obj2 = extend(true, {}, attackObj2);
  // console.log(JSON.stringify(obj2, null, 2));
  expect(({} as any).isAdmin).toBe(undefined);
  expect(({} as any).__proto__.isAdmin).toBe(undefined);
  expect(typeof {}.constructor === 'function').toBeTruthy();
  expect(obj2.__proto__).toBeTruthy();
  expect(obj2.isAdmin).toBeTruthy();
  expect(obj2.__proto__.isAdmin).toBeTruthy();
});

it('deep extend extendees can be primitive values', function () {
  let obj1 = { a: null, b: null, c: null };
  let obj2 = { a: { foo: 'str' }, b: { bar: 5 } };
  let obj3 = extend(true, {}, obj1, obj2);
  expect(obj3).toStrictEqual({ a: { foo: 'str' }, b: { bar: 5 }, c: null });

  obj1 = { a: 5, b: 'foo', c: null };
  obj2 = { a: { foo: 'str' }, b: { bar: 5 } };
  obj3 = extend(true, {}, obj1, obj2);
  expect(obj3).toStrictEqual({ a: { foo: 'str' }, b: { bar: 5 }, c: null });
});
