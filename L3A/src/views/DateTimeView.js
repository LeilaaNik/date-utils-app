const readline = require('readline-sync')

/**
 * DateTimeView class
 * Handles user interaction and input/output operations.
 */
class DateTimeView {
  /**
   * Displays the main menu and gets the user's choice.
   *
   * @returns {string} The user's menu choice.
   */
  mainMenu () {
    console.log('Date-Time Utility App')
    console.log('1. Format Date')
    console.log('2. Parse Date')
    console.log('3. Calculate Date Difference')
    console.log('4. Add Days to Given Date')
    console.log('5. Check if Date is Weekend ')
    console.log('6. Exit')

    const choice = readline.question('Choose an option: ')
    return choice
  }

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
