const addDays = require('../src/addDays')

test('adds days to date correctly', () => {
  const date = new Date('2023-10-01')
  const newDate = addDays({ date, days: 5 })
  expect(newDate).toEqual(new Date('2023-10-06'))
})
