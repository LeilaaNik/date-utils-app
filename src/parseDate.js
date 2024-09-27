/**
 * Parses a date string in the format 'YYYY-MM-DD' into a Date object.
 *
 * @param {string} dateString - The date string to parse
 * @returns {Date} The parsed date object
 */
function parseDate (dateString) {
  // Assume the dateString is in the format 'YYYY-MM-DD'
  const [year, month, day] = dateString.split('-')

  // Return a new Date object in UTC
  return new Date(Date.UTC(year, month - 1, day)) // Months are zero-indexed in JavaScript Date
}

module.exports = parseDate
