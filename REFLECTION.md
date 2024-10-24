# Reflection

## Chapter 2: Meaningful Names
Chapter 2 of *Clean Code* emphasizes the importance of meaningful and expressive names, which has significantly influenced my approach to naming functions and variables. For example, I revised `addDays()` to `addDaysToGivenDate()` and `validateDays()` to `validateDaysToAdd()`. These changes make the purpose of each function more explicit, improving readability and ensuring the code conveys its intent more effectively. Previously, some function names were too generic, causing confusion about their specific purpose. By following the chapter’s guidelines, I’ve made my code more intuitive and maintainable for others. Here is a screenshot of the improved code for clarity:

![Meaningful Names](./images/Names.png)

## Chapter 3: Functions
Chapter 3 focuses on writing small, focused functions that do one thing well. I noticed that some of my functions, like `formatDate()`, handled multiple tasks (e.g., validation, token replacement). Following this chapter, I refactored `formatDate()` by moving the validation logic to a separate function, `isValidDate()`. These changes improved the Single Responsibility Principle, making the code easier to maintain and extend. By keeping functions small and well-named, the code has become more modular and testable. However, I chose to use a `switch` statement in the `DateTimeController` to handle user menu choices. While this conflicts with the principle of avoiding `switch` statements for better code quality, I preferred it for several reasons: it provides a clear and straightforward way to handle multiple discrete choices, the number of menu options is small and unlikely to change frequently, and it allows for a simple and direct mapping of user input to actions. Here is a screenshot of the current implementation for clarity:

![formatDate](./images/formatDate.png)
![Switch Statement](./images/SwitchStatement.png)

## Chapter 4: Comments
Chapter 4 of *Clean Code* emphasizes the importance of writing clear and meaningful comments. This chapter has influenced me to ensure that my comments explain the "why" behind the code rather than the "what". For instance, in the `dateDifference` function, I added comments to explain the purpose of each parameter and the reason for validation checks. This approach has made my code more understandable and maintainable. Additionally, I focused on avoiding redundant comments that merely restate the code. Here is a screenshot of the improved comments for clarity:

![Comments](./images/Comments.png)

## Chapter 5: Formatting
Chapter 5 of *Clean Code* emphasizes the importance of proper formatting to improve readability and maintainability. This chapter has influenced me to ensure consistent indentation, spacing, and naming conventions throughout my code. For example, in the `DateTimeController` class, I maintained consistent vertical and horizontal density, making the code easier to read. Additionally, I ensured that functions are short and focused on a single task, which aligns with the principles discussed in the chapter. Here is a screenshot of the well-formatted code for clarity:

![Formatting](./images/Formatting.png)

## Chapter 6: Objects and Data Structures
Chapter 6 of *Clean Code* emphasizes the importance of using objects and data structures appropriately. This chapter has influenced me to ensure that my code encapsulates responsibilities and follows the Law of Demeter. For example, in the `DateTimeController` class, I encapsulated the interaction between the model and the view, ensuring that it only interacts with its immediate dependencies. Similarly, the `DateTimeModel`, `DateTimeView`, and `MenuController` classes encapsulate their respective responsibilities, making the code easier to maintain and extend. Additionally, in the `addDaysToGivenDate` function, I encapsulated the logic for adding days to a date and used validation functions to ensure the integrity of the input data. Here is a screenshot of the well-encapsulated code for clarity:

![DateTimeController](./images/DateTimeController.png)
![addDaysToGivenDate](./images/addDaysToGivenDate.png)


## Chapter 7: Error Handling
Chapter 7 of *Clean Code* emphasizes the importance of proper error handling. This chapter has influenced me to use exceptions rather than return codes to handle error conditions. For example, in the `dateDifference` function, I use exceptions to handle invalid date parameters, providing descriptive error messages for context. Similarly, the `createDateFormatter`, `addDaysToGivenDate`, and `isWeekend` functions use exceptions to handle error conditions. Here is a screenshot of the well-encapsulated error handling code for clarity:

![Error Handling](./images/ErrorHandling.png)

## Chapter 8: Boundaries
Chapter 8 of *Clean Code* emphasizes the importance of managing boundaries in software systems. This chapter has influenced me to encapsulate interactions with third-party libraries and provide clear interfaces for different operations. For example, in the `DateTimeView` and `MenuController` classes, I encapsulated the interaction with the `readline-sync` library, isolating it from the rest of the application. Similarly, the `DateTimeController` class encapsulates the interaction between the model and the view, ensuring that changes in one do not directly affect the other. The `DateTimeModel` class encapsulates various date-time utility functions, providing a clear interface for different operations. Here is a screenshot of the well-encapsulated code for clarity:

![Boundaries](./images/Boundaries.png)

## Chapter 9: Unit Tests
Chapter 9 of *Clean Code* emphasizes the importance of writing effective unit tests. This chapter has influenced me to write tests that are fast, independent, repeatable, self-validating, and timely. For example, in the `isWeekend` and `parseDate` function tests, I ensure that the tests cover both valid and invalid inputs and have clear pass/fail results. Here is a screenshot of the well-encapsulated unit tests for clarity:

![Unit Tests](./images/UnitTests.png)

## Chapter 10: Classes
Chapter 10 of *Clean Code* emphasizes the importance of writing clean and maintainable classes. This chapter has influenced me to adhere to the Single Responsibility Principle (SRP), maintain cohesion, and encapsulate internal details. For example, in the `DateTimeController` class, I manage the interaction between the model and the view, ensuring that each class has a specific responsibility. Additionally, I created a `MenuController` class to handle menu choices, separating this responsibility from the `DateTimeController`. These changes improved the Single Responsibility Principle, making the code easier to maintain and extend. By keeping functions small and well-named, the code has become more modular and testable. Similarly, the `addDaysToGivenDate`, `createDateFormatter`, `dateDifference`, `isWeekend`, and `parseDate` functions are focused on single tasks and use validation functions to ensure data integrity. Here is a screenshot of the well-encapsulated classes and functions for clarity:

![MenuController](./images/MenuController.png)

## Chapter 11: Systems
Chapter 11 of *Clean Code* emphasizes the importance of designing and managing systems effectively. This chapter has influenced me to focus on the separation of construction and use, as well as the importance of clear boundaries between different parts of the system. For example, I ensured that each utility function, such as `addDaysToGivenDate`, `createDateFormatter`, `dateDifference`, `isWeekend`, and `parseDate`, is self-contained and performs a single task. This separation makes the system more modular and easier to test. Additionally, by encapsulating the interaction with third-party libraries like `readline-sync` within specific classes (`DateTimeView` and `MenuController`), I isolated external dependencies, making the system more robust and maintainable. Here is a screenshot of the well-encapsulated functions and classes for clarity:

![Systems](./images/Systems.png)

## Summary
These are the kinds of adjustments I made based on *Clean Code*, lectures and workshops. By refactoring the code with clear, concise, and purposeful changes, the codebase is now much more approachable for future developers to understand and extend.