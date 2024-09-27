/**
 * The main script file for the date-time module.
 *
 * @version 1.0.0
 */

// Import the functions from the modules
const formatDate = require('./formatDate')
const parseDate = require('./parseDate')
const dateDifference = require('./dateDifference')
const addDays = require('./addDays')
const isWeekend = require('./isWeekend')


module.exports = {
  formatDate,
  parseDate,
  dateDifference,
  addDays,
  isWeekend
}
