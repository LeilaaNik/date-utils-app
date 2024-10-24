const DateTimeModel = require('../models/DateTimeModel')
const DateTimeView = require('../views/DateTimeView')
const MenuController = require('./MenuController')

/**
 * DateTimeController class
 * Manages the interaction between the model and the view.
 */
class DateTimeController {
  /**
   * Creates a DateTimeController object.
   */
  constructor () {
    this.model = new DateTimeModel()
    this.view = new DateTimeView()
    this.menuController = new MenuController()
    this.isRunning = true 
  }

  /**
   * Runs the main loop of the application.
   */
  run () {
    while (this.isRunning) { 
      const choice = this.menuController.getMenuChoice()
      this.executeChoice(choice)
    }
  }

  /**
   * Executes the user's menu choice.
   *
   * @param {string} choice - The user's menu choice.
   */
  executeChoice (choice) {
    switch (choice) {
      case '1':
        this.formatDateForDisplay()
        break
      case '2':
        this.parseDate()
        break
      case '3':
        this.calculateDateDifference()
        break
      case '4':
        this.addDaysToGivenDate()
        break
      case '5':
        this.isDateOnWeekend()
        break
      case '6':
        this.view.displayResult('Exiting...')
        this.isRunning = false 
        break
      default:
        this.view.displayResult('Invalid choice. Please try again.')
    }
  }

  /**
   * Formats a date entered by the user for display.
   */
  formatDateForDisplay () {
    const dateInput = this.view.getDateInput('Enter a date (YYYY-MM-DD): ')
    const date = this.model.parseDate(dateInput)
    const formattedDate = this.model.formatDate(date)
    this.view.displayResult('Formatted Date: ' + formattedDate)
  }

  /**
   * Parses a date string entered by the user.
   */
  parseDate () {
    const dateString = this.view.getDateInput('Enter a date string (YYYY-MM-DD): ')
    const date = this.model.parseDate(dateString)
    this.view.displayResult('Parsed Date: ' + date)
  }

  /**
   * Calculates the difference in days between two dates entered by the user.
   */
  calculateDateDifference () {
    const date1Input = this.view.getDateInput('Enter the first date (YYYY-MM-DD): ')
    const date2Input = this.view.getDateInput('Enter the second date (YYYY-MM-DD): ')
    const date1 = this.model.parseDate(date1Input)
    const date2 = this.model.parseDate(date2Input)
    const diff = this.model.calculateDateDifference(date1, date2)
    this.view.displayResult('Date Difference: ' + diff + ' days')
  }

  /**
   * Adds a specified number of days to a date entered by the user.
   */
  addDaysToGivenDate () {
    const dateInput = this.view.getDateInput('Enter a date (YYYY-MM-DD): ')
    const days = this.view.getDaysInput('Enter number of days to add: ')
    const date = this.model.parseDate(dateInput)
    const newDate = this.model.addDaysToGivenDate(date, days)
    this.view.displayResult('New Date: ' + newDate)
  }

  /**
   * Checks if a date entered by the user falls on a weekend.
   */
  isDateOnWeekend () {
    const dateInput = this.view.getDateInput('Enter a date (YYYY-MM-DD): ')
    const date = this.model.parseDate(dateInput)
    const weekend = this.model.checkIfWeekend(date)
    this.view.displayResult('Is Weekend: ' + weekend)
  }
}

module.exports = DateTimeController
