const readline = require('readline-sync')

/**
 * MenuController class
 * Handles the display and selection of menu options.
 */
class MenuController {
  /**
   * Displays the main menu and gets the user's choice.
   *
   * @returns {string} The user's menu choice.
   */
  getMenuChoice () {
    console.log('Date-Time Utility App')
    console.log('1. Format Date')
    console.log('2. Parse Date')
    console.log('3. Calculate Date Difference')
    console.log('4. Add Days to Given Date')
    console.log('5. Check if Date is Weekend')
    console.log('6. Exit')

    const choice = readline.question('Choose an option: ')
    return choice
  }
}

module.exports = MenuController
