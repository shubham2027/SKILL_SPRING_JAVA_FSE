# Mockito JUnit 5 Exercises

This folder contains a small Mockito practice setup using JUnit 5.

## Exercise 1: Mocking and Stubbing

**Scenario**

You need to test a service that depends on an external API. Use Mockito to mock the external API and stub its methods.

**Steps**

1. Create a mock object for the external API.
2. Stub the methods to return predefined values.
3. Write a test case that uses the mock object.

**Solution**

The example in `src/test/java/com/tdd/MyServiceTest.java` creates a mock `ExternalApi`, stubs `getData()`, and verifies that `MyService.fetchData()` returns the mocked value.
