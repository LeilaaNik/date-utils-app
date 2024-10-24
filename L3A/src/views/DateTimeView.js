const readline = require('readline-sync')

/**
 * DateTimeView class
 * Handles user interaction and input/output operations.
 */
class DateTimeView {
  /**
   * Prompts the user to enter a date.
   *
   * @param {string} prompt - The prompt message to display.
   * @returns {string} The user's input date string.
   */
  getDateInput (prompt) {
    return readline.question(prompt)
  }

  /**
   * Prompts the user to enter a number of days.
   *
   * @param {string} prompt - The prompt message to display.
   * @returns {number} The user's input number of days.
   */
  getDaysInput (prompt) {
    return parseInt(readline.question(prompt), 10)
  }

  /**
   * Displays a result message to the user.
   *
   * @param {string} message - The message to display.
   */
  displayResult (message) {
    console.log(message)
  }
}

module.exports = DateTimeView
