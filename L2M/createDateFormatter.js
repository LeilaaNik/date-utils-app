/**
 * Creates a date formatter.
 *
 * @returns {Function} The date formatter function
 */
function createDateFormatter () {
  const format = 'YYYY-MM-DD'

  /**
   * Formats the given date object to a string.
   *
   * @param {Date} date - The date object to format
   * @returns {string} The formatted date string
   * @throws {Error} If the date object is invalid
   */
  function formatDate (date) {
    validateDate(date)
    const tokens = getTokens(date)
    return replaceTokens(format, tokens)
  }

  /**
   * Validates the date object.
   *
   * @param {Date} date - The date object to validate
   * @throws {Error} If the date object is invalid
   */
  function validateDate (date) {
    if (!isValidDate(date)) {
      throw new Error('Invalid date object')
    }
  }

  /**
   * Gets the tokens for the date.
   *
   * @param {Date} date - The date object
   * @returns {object} The tokens object
   */
  function getTokens (date) {
    return {
      YYYY: getYear(date),
      MM: getMonth(date),
      DD: getDay(date)
    }
  }

  /**
   * Gets the year from the date.
   *
   * @param {Date} date - The date object
   * @returns {string} The year string
   */
  function getYear (date) {
    const year = date.getFullYear()
    if (year < 1000) {
      return String(year).padStart(4, '0')
    }
    return String(year)
  }

  /**
   * Gets the month from the date.
   *
   * @param {Date} date - The date object
   * @returns {string} The month string
   */
  function getMonth (date) {
    const month = date.getMonth() + 1
    if (month < 10) {
      return String(month).padStart(2, '0')
    }
    return String(month)
  }

  /**
   * Gets the day from the date.
   *
   * @param {Date} date - The date object
   * @returns {string} The day string
   */
  function getDay (date) {
    const day = date.getDate()
    if (day < 10) {
      return String(day).padStart(2, '0')
    }
    return String(day)
  }

  /**
   * Replaces the tokens in the format string.
   *
   * @param {string} format - The format string
   * @param {object} tokens - The tokens object
   * @returns {string} The formatted date string
   */
  function replaceTokens (format, tokens) {
    return format.replace(/YYYY|MM|DD/g, (match) => {
      if (Object.prototype.hasOwnProperty.call(tokens, match)) {
        return tokens[match]
      }
      return match
    })
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

  return formatDate
}

module.exports = createDateFormatter
