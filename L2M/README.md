# Date Utils

## Description
A comprehensive utility library for date manipulation and formatting in JavaScript. This library provides a set of robust and easy-to-use functions to handle common date operations such as formatting dates, parsing date strings, calculating date differences, adding days to dates, and checking if a date falls on a weekend.

### Vision
Our vision is to simplify date manipulation in JavaScript by providing a reliable and efficient library that can be easily integrated into any project. Whether you are building a small application or a large enterprise system, our library aims to save you time and effort by handling all your date-related needs.

### Basic Requirements
- Node.js (version 12 or higher)
- npm (version 6 or higher)

## Installation with clone
To install the library, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/LeilaaNik/date-utils.git
    ```

2. Navigate to the project directory:
    ```sh
    cd date-utils
    ```

3. Install dependencies:
    ```sh
    npm install
    ```

## Code Example
Here are some examples of how to use the functions provided by this library:

### `parseDate`
Parses a date string into a JavaScript `Date` object.
```javascript
const parseDate = require('./src/parseDate');
const date = parseDate('2023-10-01');
console.log(date.toISOString()); // Outputs: 2023-10-01T00:00:00.000Z 
```

### `addDays`
Adds a specified number of days to a given date.
```javascript
const addDays = require('./src/addDays');
const date = new Date('2023-10-01');
const newDate = addDays({ date, days: 5 });
console.log(newDate.toISOString()); // Outputs: 2023-10-06T00:00:00.000Z
```

### `createDateFormatter`
Creates a date formatter function that formats a date object to a string in 'YYYY-MM-DD' format.
```javascript
const createDateFormatter = require('./src/createDateFormatter');
const formatDate = createDateFormatter();
const date = new Date('2023-10-01');
console.log(formatDate(date)); // Outputs: 2023-10-01
```

### `dateDifference`
Calculates the difference in days between two dates.
```javascript
const dateDifference = require('./src/dateDifference');
const date1 = new Date('2023-10-01');
const date2 = new Date('2023-10-10');
console.log(dateDifference({ date1, date2 })); // Outputs: 9
```

### `isWeekend`
Checks if a given date falls on a weekend.
```javascript
const isWeekend = require('./src/isWeekend');
const date = new Date('2023-10-07');
console.log(isWeekend({ date })); // Outputs: true
```
## Dependencies
List of dependencies, languages, and versions used in the project:

- Node.js v14.x (recommended)
- npm v6.x (recommended)
- Jest v27.5.1

## Open Source License
Information about the open source license.

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Version Numbering and Releases
Information about version numbering and releases.

We use Semantic Versioning for versioning. For the versions available, see the [tags on this repository](https://github.com/LeilaaNik/date-utils/tags) and the [releases](https://github.com/LeilaaNik/date-utils/releases) page.

## Bug Reports/Issues
If you encounter any issues, please report them on the [issue tracker](https://github.com/LeilaaNik/date-utils/issues).

## Contributing
We welcome contributions to the project! Here are some ways you can contribute:

1. **Report Bugs**: If you find a bug, please report it on the [issue tracker](https://github.com/LeilaaNik/date-utils/issues).

2. **Suggest Features**: If you have an idea for a new feature, feel free to open an issue to discuss it.

3. **Submit Pull Requests**: If you have a fix or a new feature, you can submit a pull request. Please make sure to follow the project's coding standards and include tests for any new functionality.

4. **Improve Documentation**: Help us improve the documentation by suggesting changes or submitting pull requests.

