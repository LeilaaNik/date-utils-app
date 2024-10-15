/**
 * Parses a date string in the format 'YYYY-MM-DD' into a Date object.
 *
 * @param {string} dateString - The date string to parse
 * @returns {Date} The parsed date object
 * @throws {Error} If the date string format is invalid
 */
function parseDate (dateString) {
  if (typeof dateString !== 'string') {
    throw new Error('Input must be a string')
  }

  if (!isValidDateString(dateString)) {
    throw new Error('Invalid date string format')
  }

  const [year, month, day] = dateString.split('-')
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
