import getIntersection from './array-getIntersection';

it('Get the intersection of arrays', function () {
  expect(getIntersection([1, 2, 3], [2, 3, 4, 5])).toStrictEqual([2, 3]);
  expect(getIntersection([1, 2], [2, 3, 4, 5])).toStrictEqual([2]);
});
