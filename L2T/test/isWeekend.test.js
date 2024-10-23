const isWeekend = require('../src/isWeekend')

test('returns true for a Saturday', () => {
  const date = new Date('2023-10-07') 
  expect(isWeekend({ date })).toBe(true)
})

test('returns true for a Sunday', () => {
  const date = new Date('2023-10-08') 
  expect(isWeekend({ date })).toBe(true)
})

test('returns false for a weekday', () => {
  const date = new Date('2023-10-09') 
  expect(isWeekend({ date })).toBe(false)
})

test('throws error for an invalid date object', () => {
  expect(() => {
    isWeekend({ date: 'invalid-date' })
  }).toThrow('Invalid date object')
})

test('throws error for a non-date object', () => {
  expect(() => {
    isWeekend({ date: 12345 })
  }).toThrow('Invalid date object')
})
