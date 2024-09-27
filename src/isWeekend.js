/**
 * Checks if a given date falls on a weekend.
 *
 * @param {object} params - An object containing the date to check
 * @param {Date} params.date - The date to check
 * @returns {boolean} True if the date is a weekend, otherwise false
 */
function isWeekend ({ date }) {
  const day = date.getDay()
  return day === 0 || day === 6
}

module.exports = isWeekend
