/**
 * Calculates the difference in days between two dates.
 *
 * @param {object} dates - An object containing the two dates to compare
 * @param {Date} dates.date1 - The first date
 * @param {Date} dates.date2 - The second date
 * @returns {number} The difference in days between the two dates
 */
function dateDifference (dates) {
  validateDates(dates.date1, dates.date2)

  const timeDiff = calculateTimeDifference(dates.date1, dates.date2)
  return convertTimeDiffToDays(timeDiff)
}

/**
 * Validates the date objects and throws an error if any date is invalid.
 *
 * @param {Date} date1 - The first date object
 * @param {Date} date2 - The second date object
 * @throws {Error} If any date object is invalid
 */
function validateDates (date1, date2) {
  if (!isValidDate(date1) || !isValidDate(date2)) {
    throw new Error('Invalid date objects')
  }
}

/**
 * Checks if a date object is valid.
 *
 * @param {Date} date - The date object to validate
 * @returns {boolean} True if the date object is valid, false otherwise
 */
function isValidDate (date) {
  return date instanceof Date && !isNaN(date)
}

/**
 * Calculates the absolute time difference between two dates.
 *
 * @param {Date} date1 - The first date object
 * @param {Date} date2 - The second date object
 * @returns {number} The absolute time difference in milliseconds
 */
function calculateTimeDifference (date1, date2) {
  return Math.abs(date2.getTime() - date1.getTime())
}

/**
 * Converts the time difference from milliseconds to days.
 *
 * @param {number} timeDiff - The time difference in milliseconds
 * @returns {number} The time difference in days
 */
function convertTimeDiffToDays (timeDiff) {
  return Math.ceil(timeDiff / (1000 * 3600 * 24))
}

module.exports = dateDifference
