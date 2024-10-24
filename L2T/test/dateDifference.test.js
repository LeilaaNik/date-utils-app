const dateDifference = require('../../L2M/src/dateDifference')

test('calculates date difference correctly', () => {
  const date1 = new Date('2023-10-01')
  const date2 = new Date('2023-10-10')
  const diff = dateDifference({ date1, date2 })
  expect(diff).toBe(9)
})

test('throws error for invalid date objects', () => {
  expect(() => {
    dateDifference({ date1: 'invalid-date', date2: new Date('2023-10-10') })
  }).toThrow('Invalid date objects')

  expect(() => {
    dateDifference({ date1: new Date('2023-10-01'), date2: 'invalid-date' })
  }).toThrow('Invalid date objects')
})

test('throws error for NaN date objects', () => {
  expect(() => {
    dateDifference({ date1: new Date('invalid-date'), date2: new Date('2023-10-10') })
  }).toThrow('Invalid date objects')

  expect(() => {
    dateDifference({ date1: new Date('2023-10-01'), date2: new Date('invalid-date') })
  }).toThrow('Invalid date objects')
})
