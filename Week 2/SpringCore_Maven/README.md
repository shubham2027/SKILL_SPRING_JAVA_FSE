# Spring Core Maven

This project contains the completed Spring Core exercises for the library management application.

Exercises 1, 2, and 4 are already implemented in this module.

## Exercise 1: Configuring a Basic Spring Application

### Scenario

Your company is developing a web application for managing a library. Spring is used to handle the backend operations.

### Completed Steps

1. Set up the Spring project structure.
2. Configured the application context with `AppConfig` and component scanning.
3. Defined the service and repository classes used by the library application.
4. Ran the application through the `LibraryApplication` main class.

## Exercise 2: Implementing Dependency Injection

### Scenario

The library management application uses Spring IoC and DI to manage the dependency between `BookService` and `BookRepository`.

### Completed Steps

1. Updated the Spring configuration to support dependency management.
2. Updated `BookService` to use `BookRepository` through setter injection.
3. Tested the configuration by running the `LibraryApplication` main class.

## Exercise 4: Creating and Configuring a Maven Project

### Scenario

Set up a Maven project for the library management application and add Spring dependencies.

### Completed Steps

1. Created the Maven project structure for the library application.
2. Added Spring dependencies in `pom.xml`.
3. Configured the Maven Compiler Plugin for Java 1.8 in `pom.xml`.

## Project Summary

- Spring configuration with component scanning in `AppConfig`
- Repository and service classes for the library domain
- Setter-based dependency injection between `BookService` and `BookRepository`
- A main class that starts the Spring application context and runs the example

### Run

```bash
mvn exec:java
```