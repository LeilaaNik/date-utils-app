const dateDifference = require('../src/dateDifference')

test('calculates date difference correctly', () => {
  const date1 = new Date('2023-10-01')
  const date2 = new Date('2023-10-10')
  const diff = dateDifference({ date1, date2 })
  expect(diff).toBe(9)
})
