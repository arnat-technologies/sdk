import toObject from './array-toObject';

it('Convert an array of objects to a single object', function () {
  expect(
    toObject(
      [
        { id: '1', name: 'Alpha', gender: 'Male' },
        { id: '2', name: 'Bravo', gender: 'Male' },
        { id: '3', name: 'Charlie', gender: 'Female' },
      ],
      'id'
    )
  ).toStrictEqual({
    '1': { id: '1', name: 'Alpha', gender: 'Male' },
    '2': { id: '2', name: 'Bravo', gender: 'Male' },
    '3': { id: '3', name: 'Charlie', gender: 'Female' },
  });
  expect(
    toObject(
      [
        { id: '1', name: 'Alpha', gender: 'Male' },
        { id: '2', name: 'Bravo', gender: 'Male' },
        { id: '3', name: 'Charlie', gender: 'Female' },
      ],
      'name'
    )
  ).toStrictEqual({
    Alpha: { id: '1', name: 'Alpha', gender: 'Male' },
    Bravo: { id: '2', name: 'Bravo', gender: 'Male' },
    Charlie: { id: '3', name: 'Charlie', gender: 'Female' },
  });
});
