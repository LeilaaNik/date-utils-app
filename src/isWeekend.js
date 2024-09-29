/**
 * Checks if a given date falls on a weekend.
 *
 * @param {object} params - An object containing the date to check
 * @param {Date} params.date - The date to check
 * @returns {boolean} True if the date is a weekend, otherwise false
 * @throws {Error} If the input is not a valid date object
 */
function isWeekend ({ date }) {
  if (!isValidDate(date)) {
    throw new Error('Invalid date object')
  }

  const day = date.getDay()
  return isWeekendDay(day)
}

/**
 * Validates if the input is a valid date object.
 *
 * @param {Date} date - The date to validate
 * @returns {boolean} True if the input is a valid date object, otherwise false
 */
function isValidDate (date) {
  return date instanceof Date && !isNaN(date)
}

/**
 * Checks if the given day number corresponds to a weekend.
 *
 * @param {number} day - The day number (0 for Sunday, 6 for Saturday)
 * @returns {boolean} True if the day is a weekend, otherwise false
 */
function isWeekendDay (day) {
  return day === 0 || day === 6
}

module.exports = isWeekend
