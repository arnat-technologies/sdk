import degsToRads from './number-degsToRads';

it('Convert degrees to radians', function () {
  expect(degsToRads(90)).toBe(1.5707963267948966);
  expect(degsToRads(180)).toBe(3.141592653589793);
  expect(degsToRads(40)).toBe(0.6981317007977318);
  expect(degsToRads(12)).toBe(0.20943951023931953);
});
