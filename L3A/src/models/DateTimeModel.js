const addDays = require('../../../L2M/addDaysToGivenDate');
const createDateFormatter = require('../../../L2M/createDateFormatter');
const dateDifference = require('../../../L2M/dateDifference');
const isWeekend = require('../../../L2M/isWeekend');
const parseDate = require('../../../L2M/parseDate');

/**
 * DateTimeModel class
 * Provides various date-time utility functions.
 */
class DateTimeModel {
  constructor() {
    this.formatter = createDateFormatter();
  }

  /**
   * Formats a date object to a string in 'YYYY-MM-DD' format.
   * @param {Date} date - The date object to format.
   * @returns {string} The formatted date string.
   */
  formatDate(date) {
    return this.formatter(date);
  }

  /**
   * Parses a date string in 'YYYY-MM-DD' format to a date object.
   * @param {string} dateString - The date string to parse.
   * @returns {Date} The parsed date object.
   */
  parseDate(dateString) {
    return parseDate(dateString);
  }

  /**
   * Calculates the difference in days between two dates.
   * @param {Date} date1 - The first date.
   * @param {Date} date2 - The second date.
   * @returns {number} The difference in days between the two dates.
   */
  calculateDateDifference(date1, date2) {
    return dateDifference({ date1, date2 });
  }

  /**
   * Adds a specified number of days to a date.
   * @param {Date} date - The date to which days will be added.
   * @param {number} days - The number of days to add.
   * @returns {Date} The new date with the added days.
   */
  addDaysToGivenDate(date, days) {
    return addDays({ date, days });
  }

  /**
   * Checks if a date falls on a weekend.
   * @param {Date} date - The date to check.
   * @returns {boolean} True if the date is a weekend, false otherwise.
   */
  checkIfWeekend(date) {
    return isWeekend({ date });
  }
}

module.exports = DateTimeModel;