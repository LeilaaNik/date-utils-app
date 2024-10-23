# Date Utility App

## Overview
This project is a date utility app that uses a module from laboratory 2. The app provides various date functionalities through a console interface.

## Installation
To install the app, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/LeilaaNik/date-utils-app.git
    ```

2. Navigate to the app directory:
    ```sh
    cd L3A
    ```

3. Install dependencies:
    ```sh
    npm install
    ```

## Dependencies
List of dependencies, languages, and versions used in the project:

- Node.js v14.x (recommended)
- npm v6.x (recommended)
- readline-sync v1.4.10
- Jest v27.5.1 (for testing)

## Running the App
To run the app, navigate to the `L3A` directory and start the application:

```sh
cd L3A
npm start
```

## Running Tests (Manual Testing)
To run the tests for the app, navigate to the `L3A` directory and run the app:

```sh
cd L3A
npm start
```

Follow the test plan outlined in the test table to manually test the app's functionalities.

## Test Cases

The following table outlines the test cases for the app, including descriptive names, inputs, and expected outcomes.

| Test Case Name                        | Description                                      | Inputs                                      | Expected Outcome                           |
|---------------------------------------|--------------------------------------------------|---------------------------------------------|--------------------------------------------|
| Format Date Correctly                 | Formats a given date to `YYYY-MM-DD`             | Date: `2023-10-01`                          | Formatted Date: `2023-10-01`               |
| Parse Date String Correctly           | Parses a date string in `YYYY-MM-DD` format      | Date String: `2023-10-01`                   | Date Object: `Sun Oct 01 2023 02:00:00 GMT+0200 (Central European Summer Time)`    |
| Calculate Date Difference Correctly   | Calculates the difference in days between dates  | First date: `2023-10-01`, Second date: `2023-10-10`    | Difference: `9 days`                            |
| Add Days to Date Correctly            | Adds a specified number of days to a date        | Date: `2023-10-01`, Days: `5`               | New Date: `Fri Oct 06 2023 02:00:00 GMT+0200 (Central European Summer Time)`                     |
| Check if Date is Weekend              | Checks if a given date falls on a weekend        | Date: `2023-10-07` (Saturday)               | Is Weekend: `true`                         |
| Throw Error for Invalid Date Format   | Throws error for invalid date string format      | Date String: `2023/10/01`                   | Error: `Invalid date string format`        |
| Throw Error for Invalid Date Object   | Throws error for invalid date object             | Date: `invalid-date`                        | Error: `Invalid date object`               |
| Throw Error for Invalid Number of Days| Throws error for invalid number of days          | Date: `2023-10-01`, Days: `five`            | Error: `Invalid number of days`            |

## Open Source License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.