/**
 * Parses a date string in the format 'YYYY-MM-DD' into a Date object.
 *
 * @param {string} dateString - The date string to parse
 * @returns {Date} The parsed date object
 */
function parseDate (dateString) {
  if (!isValidDateString(dateString)) {
    throw new Error('Invalid date string format')
  }

  const [year, month, day] = extractDateComponents(dateString)

  return createUTCDate(year, month, day)
}

/**
 * Validates the date string format.
 *
 * @param {string} dateString - The date string to validate
 * @returns {boolean} True if the date string is valid, false otherwise
 */
function isValidDateString (dateString) {
  const regex = /^\d{4}-\d{2}-\d{2}$/
  return regex.test(dateString)
}

/**
 * Extracts the year, month, and day components from the date string.
 *
 * @param {string} dateString - The date string to extract components from
 * @returns {Array} An array containing the year, month, and day as strings
 */
function extractDateComponents (dateString) {
  const [year, month, day] = dateString.split('-')

  if (!isValidYear(year) || !isValidMonth(month) || !isValidDay(day)) {
    throw new Error('Invalid date components')
  }

  return [year, month, day]
}

/**
 * Validates the year component.
 *
 * @param {string} year - The year component to validate
 * @returns {boolean} True if the year is valid, false otherwise
 */
function isValidYear (year) {
  const yearNum = parseInt(year, 10)
  return yearNum >= 0 && yearNum <= 9999
}

/**
 * Validates the month component.
 *
 * @param {string} month - The month component to validate
 * @returns {boolean} True if the month is valid, false otherwise
 */
function isValidMonth (month) {
  const monthNum = parseInt(month, 10)
  return monthNum >= 1 && monthNum <= 12
}

/**
 * Validates the day component.
 *
 * @param {string} day - The day component to validate
 * @returns {boolean} True if the day is valid, false otherwise
 */
function isValidDay (day) {
  const dayNum = parseInt(day, 10)
  return dayNum >= 1 && dayNum <= 31 
}

/**
 * Creates a UTC Date object from the year, month, and day components.
 *
 * @param {string} year - The year component
 * @param {string} month - The month component
 * @param {string} day - The day component
 * @returns {Date} The created Date object
 */
function createUTCDate (year, month, day) {
  return new Date(Date.UTC(year, month - 1, day)) // Months are zero-indexed in JavaScript Date
}

module.exports = parseDate
