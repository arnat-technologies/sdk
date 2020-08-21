import Once from './function-once2';

it('Execute a function once', function () {
  let n = 0;
  const incOnce = Once(() => ++n);

  expect(incOnce()).toBe(1);
  expect(incOnce()).toBe(1);
  expect(incOnce()).toBe(1);
  expect(incOnce()).toBe(1);
});
