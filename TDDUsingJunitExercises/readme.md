TDD Using JUnit Exercises

This folder contains small JUnit practice exercises. The goal is to keep the examples simple and easy to understand.

Exercise 1: Setting Up JUnit
Question:
Set up JUnit in your Java project so you can start writing tests.

Answer direction:
Add the JUnit dependency to `pom.xml`, then create a test class under `src/test/java` and verify that JUnit runs.

Exercise 2: Writing Basic JUnit Tests
Question:
Create a simple Java class and write tests for its methods.

Answer direction:
Make a very small class such as `Calculator` with methods like `add()` and `subtract()`. Then write tests that check the expected results.

Exercise 3: Assertions in JUnit
Question:
Use different JUnit assertions to check values in a test.

Answer direction:
Use common assertions like `assertEquals`, `assertTrue`, `assertFalse`, `assertNull`, and `assertNotNull` in one test method.

Simple example files in this project:
- `src/main/java/com/tdd/Calculator.java`
- `src/test/java/com/tdd/CalculatorTest.java`
- `src/test/java/com/tdd/AssertionsExampleTest.java`

Notes:
- Keep the code small.
- Use easy values.
- Focus on understanding the test flow, not on complex logic.
