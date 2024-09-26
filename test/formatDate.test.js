const formatDate = require('../src/formatDate')

test('formats date correctly', () => {
  const date = new Date('2023-10-01')
  const formattedDate = formatDate(date, 'YYYY-MM-DD')
  expect(formattedDate).toBe('2023-10-01')
})
