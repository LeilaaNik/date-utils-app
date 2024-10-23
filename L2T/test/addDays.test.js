const addDays = require('../../L2M/addDays')

test('adds days to date correctly', () => {
  const date = new Date('2023-10-01')
  const newDate = addDays({ date, days: 5 })
  expect(newDate).toEqual(new Date('2023-10-06'))
})

test('throws error for invalid date', () => {
  expect(() => {
    addDays({ date: 'invalid-date', days: 5 })
  }).toThrow('Invalid date object')
})

test('throws error for invalid number of days', () => {
  const date = new Date('2023-10-01')
  expect(() => {
    addDays({ date, days: 'five' })
  }).toThrow('Invalid number of days')
})

test('throws error for NaN number of days', () => {
  const date = new Date('2023-10-01')
  expect(() => {
    addDays({ date, days: NaN })
  }).toThrow('Invalid number of days')
})

test('throws error for NaN date', () => {
  expect(() => {
    addDays({ date: new Date('invalid-date'), days: 5 })
  }).toThrow('Invalid date object')
})
