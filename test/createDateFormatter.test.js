const createDateFormatter = require('../src/createDateFormatter')

test('formats date correctly', () => {
  const formatDate = createDateFormatter()
  const date = new Date('2023-10-01')
  const formattedDate = formatDate(date)
  expect(formattedDate).toBe('2023-10-01')
})

test('throws error for invalid date object', () => {
  const formatDate = createDateFormatter()
  expect(() => {
    formatDate('invalid-date')
  }).toThrow('Invalid date object')
})

test('throws error for NaN date', () => {
  const formatDate = createDateFormatter()
  expect(() => {
    formatDate(new Date('invalid-date'))
  }).toThrow('Invalid date object')
})
