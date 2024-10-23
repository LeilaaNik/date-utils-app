const addDaysToGivenDate = require('../../L2M/addDaysToGivenDate')

test('adds days to date correctly', () => {
  const date = new Date('2023-10-01')
  const newDate = addDaysToGivenDate({ date, days: 5 })
  expect(newDate).toEqual(new Date('2023-10-06'))
})

test('throws error for invalid date', () => {
  expect(() => {
    addDaysToGivenDate({ date: 'invalid-date', days: 5 })
  }).toThrow('Invalid date object')
})

test('throws error for invalid number of days', () => {
  const date = new Date('2023-10-01')
  expect(() => {
    addDaysToGivenDate({ date, days: 'five' })
  }).toThrow('Invalid number of days')
})

test('throws error for NaN number of days', () => {
  const date = new Date('2023-10-01')
  expect(() => {
    addDaysToGivenDate({ date, days: NaN })
  }).toThrow('Invalid number of days')
})

test('throws error for NaN date', () => {
  expect(() => {
    addDaysToGivenDate({ date: new Date('invalid-date'), days: 5 })
  }).toThrow('Invalid date object')
})
