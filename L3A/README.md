# Date Utility App

## Overview
This project is a date utility app that uses a module from laboratory 2. The app provides various date functionalities through a console interface.

## Vision
Our vision is to provide a user-friendly console application that simplifies date manipulation tasks. This app aims to be a reliable tool for developers and users who need to perform common date operations efficiently.

## Basic Requirements
- Node.js (version 12 or higher)
- npm (version 6 or higher)

## Installation with clone
To install the app, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/LeilaaNik/date-utils-app.git
    ```

2. Navigate to the app directory:
    ```sh
    cd date-utils-app
    ```

3. Install dependencies:
    ```sh
    npm install
    ```

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
| Format Date                           | Formats a given date to `YYYY-MM-DD`             | Date: `2023-10-01`                          | Formatted Date: `2023-10-01`               |
| Parse Date                            | Parses a date string in `YYYY-MM-DD` format      | Date String: `2023-10-01`                   | Parsed Date: `Sun Oct 01 2023 02:00:00 GMT+0200 (Central European Summer Time)`    |
| Calculate Date Difference             | Calculates the difference in days between dates  | First date: `2023-10-01`, Second date: `2023-10-10`    | Date Difference: `9 days`                            |
| Add Days to Date                      | Adds a specified number of days to a date        | Date: `2023-10-01`, Days: `5`               | New Date: `Fri Oct 06 2023 02:00:00 GMT+0200 (Central European Summer Time)`                     |
| Check if Date is Weekend              | Checks if a given date falls on a weekend        | Date: `2023-10-07` (Saturday)               | Is Weekend: `true`                         |
| Throw Error for Invalid Date Format   | Throws error for invalid date string format      | Date String: `2023/10/01`                   | Error: `Invalid date string format`        |
| Throw Error for Invalid Number of Days| Throws error for invalid number of days          | Date: `2023-10-01`, Days: `five`            | Error: `Invalid number of days`            |

## Dependencies
List of dependencies, languages, and versions used in the project:

- Node.js v14.x (recommended)
- npm v6.x (recommended)
- readline-sync v1.4.10
- Jest v27.5.1 (for testing)

## Open Source License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

## Version Numbering and Releases
We use Semantic Versioning for versioning. For the versions available, see the [tags on this repository](https://github.com/LeilaaNik/date-utils-app/tags) and the [releases](https://github.com/LeilaaNik/date-utils-app/releases) page.

## Bug Reports/Issues
If you encounter any issues, please report them on the [issue tracker](https://github.com/LeilaaNik/date-utils-app/issues).

## Contributing
We welcome contributions to the project! Here are some ways you can contribute:

1. **Report Bugs**: If you find a bug, please report it on the [issue tracker](https://github.com/LeilaaNik/date-utils-app/issues).

2. **Suggest Features**: If you have an idea for a new feature, feel free to open an issue to discuss it.

3. **Submit Pull Requests**: If you have a fix or a new feature, you can submit a pull request. Please make sure to follow the project's coding standards.

4. **Improve Documentation**: Help us improve the documentation by suggesting changes or submitting pull requests.