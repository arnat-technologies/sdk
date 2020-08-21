import countBy from './array-countBy';

it('Count by the properties of an array of objects', function () {
  expect(
    countBy(
      [
        { branch: 'audi', model: 'q8', year: '2019' },
        { branch: 'audi', model: 'rs7', year: '2020' },
        { branch: 'ford', model: 'mustang', year: '2019' },
        { branch: 'ford', model: 'explorer', year: '2020' },
        { branch: 'bmw', model: 'x7', year: '2020' },
      ],
      'branch'
    )
  ).toStrictEqual({ audi: 2, ford: 2, bmw: 1 });
});
