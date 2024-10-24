/**
 * The main script file for the date-time module.
 *
 * @version 1.0.0
 */

// Import the functions from the modules
const createDateFormatter = require('./createDateFormatter')
const parseDate = require('./parseDate')
const dateDifference = require('./dateDifference')
const addDaysToGivenDate = require('./addDaysToGivenDate')
const isWeekend = require('./isWeekend')

module.exports = {
  createDateFormatter,
  parseDate,
  dateDifference,
  addDaysToGivenDate,
  isWeekend
}
