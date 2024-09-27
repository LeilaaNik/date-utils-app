const parseDate = require('../src/parseDate')

test('parses date string correctly', () => {
  const dateString = '2023-10-01'
  const date = parseDate(dateString)
  expect(date.toISOString()).toEqual(new Date('2023-10-01').toISOString())
})
