/**
 * Calculates the difference in days between two dates.
 *
 * @param {object} dates - An object containing the two dates to compare
 * @param {Date} dates.date1 - The first date
 * @param {Date} dates.date2 - The second date
 * @returns {number} The difference in days between the two dates
 */
function dateDifference ({ date1, date2 }) {
  // Calculate the absolute difference in time between the two dates
  const timeDiff = Math.abs(date2.getTime() - date1.getTime())

  // Convert the time difference from milliseconds to days and return it
  return Math.ceil(timeDiff / (1000 * 3600 * 24))
}

module.exports = dateDifference
