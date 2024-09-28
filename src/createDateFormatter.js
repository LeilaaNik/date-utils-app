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
   */
  function formatDate (date) {
    const tokens = getTokens(date)
    return replaceTokens(format, tokens)
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

  return formatDate
}

module.exports = createDateFormatter
