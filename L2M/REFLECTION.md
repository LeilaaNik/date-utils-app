# Reflection

## Identifier Naming Reflection

| Name and Explanation | Reflection and Rules from Clean Code |
|----------------------|--------------------------------------|
| `parseDate` <br> Function that parses a date string in the format 'YYYY-MM-DD' into a Date object. | **Intention-Revealing Names**: The name `parseDate` clearly indicates that the function is responsible for parsing a date. <br> **Use Solution Domain Names**: The term "parse" is commonly used in programming to describe the process of analyzing a string. |
| `addDays` <br> Function that adds a specified number of days to a date. | **Intention-Revealing Names**: The name `addDays` clearly indicates that the function adds days to a date. <br> **Use Pronounceable Names**: The name is easy to pronounce and understand. |
| `createDateFormatter` <br> Function that creates a date formatter. | **Intention-Revealing Names**: The name `createDateFormatter` clearly indicates that the function creates a date formatter. <br> **Avoid Disinformation**: The name accurately describes the function's purpose without being misleading. |
| `dateDifference` <br> Function that calculates the difference in days between two dates. | **Intention-Revealing Names**: The name `dateDifference` clearly indicates that the function calculates the difference between two dates. <br> **Use Problem Domain Names**: The term "difference" is commonly used in the context of comparing dates. |
| `isWeekend` <br> Function that checks if a given date falls on a weekend. | **Intention-Revealing Names**: The name `isWeekend` clearly indicates that the function checks if a date is a weekend. <br> **Use Pronounceable Names**: The name is easy to pronounce and understand. |

### Brief Reflection on Chapter 2 of "Clean Code"

Chapter 2 of "Clean Code" emphasizes the importance of using clear, intention-revealing names for identifiers. This helps other programmers understand the purpose of the code without needing extensive comments. The chapter also advises against using disinformation, making meaningful distinctions, and using pronounceable and searchable names. By following these principles, the code becomes more readable and maintainable.

In my module, I applied these principles by choosing names that clearly describe the purpose of each function. For example, `parseDate`, `addDays`, and `isWeekend` are all names that immediately convey their functionality. This reduces the cognitive load on other programmers who use the module, making it easier for them to understand and integrate the code into their own projects.

## Functions Reflection

| Method Name and Link or Code | Number of Rows (not ws) | Reflection |
|------------------------------|-------------------------|------------|
| `formatDate` <br> Function that formats the given date object to a string. | 7 | **Do One Thing**: The function primarily formats a date, but it also validates the date. <br> **Function Arguments**: The function takes one argument, which is good. |
| `replaceTokens` <br> Function that replaces the tokens in the format string. | 8 | **Do One Thing**: The function replaces tokens in a format string, which is a single responsibility. <br> **Descriptive Names**: The name `replaceTokens` is descriptive and clear. |
| `getTokens` <br> Function that gets the tokens for the date. | 7 | **Do One Thing**: The function extracts tokens from a date object, which is a single responsibility. <br> **Descriptive Names**: The name `getTokens` is descriptive and clear. |
| `calculateTimeDifference` <br> Function that calculates the absolute time difference between two dates. | 3 | **Do One Thing**: The function calculates the time difference, which is a single responsibility. <br> **Descriptive Names**: The name `calculateTimeDifference` is descriptive and clear. |
| `validateDate` <br> Function that validates the date object. | 5 | **Prefer Exceptions to Returning Error Codes**: The function throws an error if the date object is invalid, which is a good practice. <br> **Do One Thing**: The function validates a single date object, which is a single responsibility. |

### Brief Reflection on Chapter 3 of "Clean Code"

Chapter 3 of "Clean Code" focuses on writing clean functions. The key principles include keeping functions small, ensuring they do one thing, maintaining one level of abstraction per function, and using descriptive names. The chapter also emphasizes the importance of minimizing the number of function arguments and avoiding side effects.

In my module, I aimed to follow these principles by keeping functions focused on a single task and using descriptive names. Splitting validation logic into separate functions can improve readability and maintainability.

Additionally, I used exceptions in the `validateDate` function instead of returning error codes. This approach aligns with the principle of preferring exceptions to returning error codes, as it makes error handling more explicit and easier to manage.

Overall, this exercise has highlighted the importance of continuously reviewing and refining code to ensure it meets high-quality standards. By applying the principles from "Clean Code," I can create more maintainable and understandable code that benefits other programmers who use my module.