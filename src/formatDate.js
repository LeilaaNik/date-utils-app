/**
 * Formats a date object to a string.
 *
 * @param {Date} date - The date object to format
 * @param {string} [format='YYYY-MM-DD'] - The format string
 * @returns {string} The formatted date string
 */
function formatDate (date, format = 'YYYY-MM-DD') {
  const tokens = {
    YYYY: date.getFullYear(),
    MM: String(date.getMonth() + 1).padStart(2, '0'),
    DD: String(date.getDate()).padStart(2, '0')
  }

  return format.replace(/YYYY|MM|DD/g, (match) => tokens[match])
}

module.exports = formatDate
