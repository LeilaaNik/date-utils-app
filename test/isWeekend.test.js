const isWeekend = require('../src/isWeekend')

test('checks if date is weekend correctly', () => {
  const date = new Date('2023-10-01')
  const result = isWeekend({ date })
  expect(result).toBe(true)
})
