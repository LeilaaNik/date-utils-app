# Date Utils

## Description
A utility library for date manipulation and formatting in JavaScript.

## Installation
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

## Code Example
Here are some examples of how to use the functions provided by this library:

### `parseDate`
```javascript
const parseDate = require('./src/parseDate');
const date = parseDate('2023-10-01');
console.log(date.toISOString()); // Outputs: 2023-10-01T00:00:00.000Z 
```

### `addDays`
```javascript
const addDays = require('./src/addDays');
const date = new Date('2023-10-01');
const newDate = addDays({ date, days: 5 });
console.log(newDate.toISOString()); // Outputs: 2023-10-06T00:00:00.000Z
```

### `createDateFormatter`
```javascript
const createDateFormatter = require('./src/createDateFormatter');
const formatDate = createDateFormatter();
const date = new Date('2023-10-01');
console.log(formatDate(date)); // Outputs: 2023-10-01
```

### `dateDifference`
```javascript
const dateDifference = require('./src/dateDifference');
const date1 = new Date('2023-10-01');
const date2 = new Date('2023-10-10');
console.log(dateDifference({ date1, date2 })); // Outputs: 9
```

### `isWeekend`
```javascript
const isWeekend = require('./src/isWeekend');
const date = new Date('2023-10-07');
console.log(isWeekend({ date })); // Outputs: true
```

