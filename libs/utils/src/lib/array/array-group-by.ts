// groupBy([6.1, 4.2, 6.3], Math.floor); // { '4': [4.2], '6': [6.1, 6.3] }
// groupBy([1,2,3,4,5,6,7,8], function(i) { return i % 2}); // { '0': [2, 4, 6, 8], '1': [1, 3, 5, 7] }
//
//
// groupBy([
//     { branch: 'audi', model: 'q8', year: '2019' },
//     { branch: 'audi', model: 'rs7', year: '2020' },
//     { branch: 'ford', model: 'mustang', year: '2019' },
//     { branch: 'ford', model: 'explorer', year: '2020' },
//     { branch: 'bmw', model: 'x7', year: '2020' },
// ], 'branch');
//
// /*
// {
//     audi: [
//         { branch: 'audi', model: 'q8', year: '2019' },
//         { branch: 'audi', model: 'rs7', year: '2020' }
//     ],
//     bmw: [
//         { branch: 'bmw', model: 'x7', year: '2020' }
//     ],
//     ford: [
//         { branch: 'ford', model: 'mustang', year: '2019' },
//         { branch: 'ford', model: 'explorer', year: '2020' }
//     ],
// }
// */
//
//
export default function groupBy(arr?, cb?) {
  if (!Array.isArray(arr)) {
    throw new Error('expected an array for first argument');
  }

  const isFn = typeof cb === 'function';
  const isStr = typeof cb === 'string';

  if (typeof cb !== 'function' && typeof cb !== 'string') {
    throw new Error('expected a function or string for second argument');
  }

  if (isFn) {
    const result = {};
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      const bucketCategory = cb(item);
      const bucket = result[bucketCategory];

      if (!Array.isArray(bucket)) {
        result[bucketCategory] = [item];
      } else {
        result[bucketCategory].push(item);
      }
    }

    return result;
  } else if (isStr) {
    return arr.reduce(
      (acc, item) => ((acc[item[cb]] = [...(acc[item[cb]] || []), item]), acc),
      {}
    );
  }
}
