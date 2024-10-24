const DateTimeController = require('./controllers/DateTimeController')

/**
 * Entry point for the Date-Time Utility App.
 * Initializes and runs the DateTimeController.
 */
const app = new DateTimeController()
app.run()
