/**
 * Adds a specified number of days to a date.
 *
 * @param {object} params - An object containing the date and the number of days to add
 * @param {Date} params.date - The date to which days will be added
 * @param {number} params.days - The number of days to add
 * @returns {Date} The new date with the added days
 */
function addDays ({ date, days }) {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

module.exports = addDays
