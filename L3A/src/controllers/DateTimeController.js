const DateTimeModel = require('../models/DateTimeModel');
const DateTimeView = require('../views/DateTimeView');

/**
 * DateTimeController class
 * Manages the interaction between the model and the view.
 */
class DateTimeController {
  constructor() {
    this.model = new DateTimeModel();
    this.view = new DateTimeView();
  }

  /**
   * Runs the main loop of the application.
   */
  run() {
    while (true) {
      const choice = this.view.mainMenu();
      switch (choice) {
        case '1':
          this.formatDate();
          break;
        case '2':
          this.parseDate();
          break;
        case '3':
          this.calculateDateDifference();
          break;
        case '4':
          this.addDaysToDate();
          break;
        case '5':
          this.checkIfWeekend();
          break;
        case '6':
          this.view.displayResult("Exiting...");
          return;
        default:
          this.view.displayResult("Invalid choice. Please try again.");
      }
    }
  }

  /**
   * Formats a date entered by the user.
   */
  formatDate() {
    const dateInput = this.view.getDateInput("Enter a date (YYYY-MM-DD): ");
    const date = this.model.parseDate(dateInput);
    const formattedDate = this.model.formatDate(date);
    this.view.displayResult("Formatted Date: " + formattedDate);
  }

  /**
   * Parses a date string entered by the user.
   */
  parseDate() {
    const dateString = this.view.getDateInput("Enter a date string (YYYY-MM-DD): ");
    const date = this.model.parseDate(dateString);
    this.view.displayResult("Parsed Date: " + date);
  }

  /**
   * Calculates the difference in days between two dates entered by the user.
   */
  calculateDateDifference() {
    const date1Input = this.view.getDateInput("Enter the first date (YYYY-MM-DD): ");
    const date2Input = this.view.getDateInput("Enter the second date (YYYY-MM-DD): ");
    const date1 = this.model.parseDate(date1Input);
    const date2 = this.model.parseDate(date2Input);
    const diff = this.model.calculateDateDifference(date1, date2);
    this.view.displayResult("Date Difference: " + diff + " days");
  }

  /**
   * Adds a specified number of days to a date entered by the user.
   */
  addDaysToDate() {
    const dateInput = this.view.getDateInput("Enter a date (YYYY-MM-DD): ");
    const days = this.view.getDaysInput("Enter number of days to add: ");
    const date = this.model.parseDate(dateInput);
    const newDate = this.model.addDaysToDate(date, days);
    this.view.displayResult("New Date: " + newDate);
  }

  /**
   * Checks if a date entered by the user falls on a weekend.
   */
  checkIfWeekend() {
    const dateInput = this.view.getDateInput("Enter a date (YYYY-MM-DD): ");
    const date = this.model.parseDate(dateInput);
    const weekend = this.model.checkIfWeekend(date);
    this.view.displayResult("Is Weekend: " + weekend);
  }
}

module.exports = DateTimeController;