const parseDate = require('../src/parseDate')

test('parses date string correctly', () => {
  const dateString = '2023-10-01'
  const date = parseDate(dateString)
  expect(date.toISOString()).toEqual(new Date('2023-10-01').toISOString())
})

test('throws error for invalid date string format', () => {
  expect(() => {
    parseDate('2023/10/01')
  }).toThrow('Invalid date string format')

  expect(() => {
    parseDate('10-01-2023')
  }).toThrow('Invalid date string format')
})

test('parses date string with valid year component', () => {
  const dateString = '2023-10-01'
  const date = parseDate(dateString)
  expect(date.toISOString()).toEqual(new Date('2023-10-01').toISOString())
})

test('parses date string with valid month component', () => {
  const dateString = '2023-10-01'
  const date = parseDate(dateString)
  expect(date.toISOString()).toEqual(new Date('2023-10-01').toISOString())
})

test('parses date string with valid day component', () => {
  const dateString = '2023-10-01'
  const date = parseDate(dateString)
  expect(date.toISOString()).toEqual(new Date('2023-10-01').toISOString())
})
