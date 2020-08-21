import radsToDegs from './number-radsToDegs';

it('get degs to rads', function () {
  expect(radsToDegs(1)).toBe(57.29577951308232);
  expect(radsToDegs(12)).toBe(687.5493541569879);
});
