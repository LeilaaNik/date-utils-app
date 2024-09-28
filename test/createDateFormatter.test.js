const createDateFormatter = require('../src/createDateFormatter')

test('formats date correctly', () => {
  const formatDate = createDateFormatter()
  const date = new Date('2023-10-01')
  const formattedDate = formatDate(date)
  expect(formattedDate).toBe('2023-10-01')
})
