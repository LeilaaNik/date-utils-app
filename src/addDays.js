/**
 * Adds a specified number of days to a date.
 *
 * @param {object} params - An object containing the date and the number of days to add
 * @param {Date} params.date - The date to which days will be added
 * @param {number} params.days - The number of days to add
 * @returns {Date} The new date with the added days
 * @throws {Error} If the date object or days parameter is invalid
 */
function addDays ({ date, days }) {
  validateDate(date)
  validateDays(days)

  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

/**
 * Validates the date object.
 *
 * @param {Date} date - The date object to validate
 * @throws {Error} If the date object is invalid
 */
function validateDate (date) {
  if (!(date instanceof Date) || isNaN(date)) {
    throw new Error('Invalid date object')
  }
}

/**
 * Validates the days parameter.
 *
 * @param {number} days - The number of days to validate
 * @throws {Error} If the days parameter is invalid
 */
function validateDays (days) {
  if (typeof days !== 'number' || isNaN(days)) {
    throw new Error('Invalid number of days')
  }
}

module.exports = addDays
