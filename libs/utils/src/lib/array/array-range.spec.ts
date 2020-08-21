import range from './array-range';

it('array range with one integer argument', function () {
  const stop = 5;
  const negativeStop = -5;
  expect(range(stop)).toStrictEqual([0, 1, 2, 3, 4]);
  expect(range(negativeStop)).toStrictEqual([0, -1, -2, -3, -4]);
});

it('array range with two integer arguments', function () {
  const start = 0;
  const stop = 5;
  const negativeStop = -5;
  expect(range(start, stop)).toStrictEqual([0, 1, 2, 3, 4]);
  expect(range(start, negativeStop)).toStrictEqual([0, -1, -2, -3, -4]);
});

it('array range with three integer arguments', function () {
  const start = 0;
  const stop = 20;
  const negativeStop = -20;
  const step = 5;
  const negativeStep = -5;
  expect(range(start, stop, step)).toStrictEqual([0, 5, 10, 15]);
  expect(range(start, negativeStop, negativeStep)).toStrictEqual([
    0,
    -5,
    -10,
    -15,
  ]);
});

it('array range with three decimal arguments', function () {
  const start = 0;
  const stop = 1.9;
  const negativeStop = -1.9;
  const step = 0.5;
  const negativeStep = -0.5;
  expect(range(start, stop, step)).toStrictEqual([0, 0.5, 1, 1.5]);
  expect(range(start, negativeStop, negativeStep)).toStrictEqual([
    0,
    -0.5,
    -1,
    -1.5,
  ]);
});

it('throws if any argument is not null/undefined or number', function () {
  expect(() => range('0', 3)).toThrowError('');
  expect(() => range(0, '3')).toThrowError('');
  expect(() => range(0, 3, '1')).toThrowError('');
});
