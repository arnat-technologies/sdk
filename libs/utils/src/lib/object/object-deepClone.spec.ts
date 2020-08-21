import deepClone from './object-deepClone';

describe('#deepClone()', function () {
  it(`person deepEqual deepClone(null) should return true`, function () {
    const person = null;
    expect(person).toStrictEqual(deepClone(person));
  });

  it(`person deepEqual deepClone('SlaneYang') should return true`, function () {
    const person = 'SlaneYang';
    expect(person).toStrictEqual(deepClone(person));
  });

  it(`person deepEqual deepClone(new Date()) should return true`, function () {
    const date = new Date();
    expect(date).toStrictEqual(deepClone(date));
  });

  it(`person deepEqual deepClone(person) should return true`, function () {
    const person = {
      name: 'user',
      settings: {
        first: '1',
        second: [1, 2, 3, 4, 3],
      },
    };
    expect(person).toStrictEqual(deepClone(person));
  });

  it(`person === deepClone(person) should return false`, function () {
    const person = {
      name: 'user',
      settings: {
        first: '1',
        second: [1, 2, 3, 4, 3],
      },
    };
    expect(person).toStrictEqual(deepClone(person));
  });
});

describe('#isEmptyObject()', function () {
  it(`isEmptyObject({}) should return true`, function () {
    expect(deepClone({})).toBeTruthy();
  });
});
