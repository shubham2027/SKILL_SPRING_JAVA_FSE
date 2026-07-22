# Week 4: Microservices with Spring Boot & Spring Cloud Eureka

This directory contains two microservices, **Account Service** and **Loan Service**, built using Spring Boot and Spring Cloud. Both microservices are configured to register as discovery clients with a Eureka Service Registry.

---

## Architecture Overview

1. **Eureka Discovery Server**: Expected to run at `http://localhost:8761/eureka/`. Both services register themselves to this server.
2. **Account Service**: Exposes APIs related to bank account queries. Runs on port `8080`.
3. **Loan Service**: Exposes APIs related to bank loan queries. Runs on port `8081`.

### Microservice Interaction Diagram
![Microservice Account and Loan Architecture](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%204/public/Microservice_Account_Loan.png)

### Eureka Service Registration Diagram
![Microservice Eureka Registration and Discovery](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%204/public/MicroserviceEureka.png)

---

## Services & Project Files

### 1. Account Service

The **Account Service** manages client bank account details.

- **Main Files**:
  - [pom.xml](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%204/account/pom.xml): Defines Spring Boot parent version `3.5.16` and dependency `spring-cloud-starter-netflix-eureka-client`.
  - [application.properties](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%204/account/src/main/resources/application.properties): Configures service name as `account-service`, port `8080`, and register-URL for Eureka.
  - [AccountApplication.java](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%204/account/src/main/java/com/cognizant/account/AccountApplication.java): Main entry point decorated with `@EnableDiscoveryClient`.
  - [Account.java](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%204/account/src/main/java/com/cognizant/account/model/Account.java): Represents an account model holding account `number`, `type`, and `balance`.
  - [AccountController.java](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%204/account/src/main/java/com/cognizant/account/controller/AccountController.java): Implements the REST API endpoints.

- **API Endpoint**:
  | HTTP Method | Endpoint | Description | Sample Output |
  | :--- | :--- | :--- | :--- |
  | **GET** | `/accounts/{number}` | Fetches account information by its account number. | `{"number": "12345", "type": "savings", "balance": 234343.0}` |

---

### 2. Loan Service

The **Loan Service** manages client bank loan accounts.

- **Main Files**:
  - [pom.xml](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%204/loan/pom.xml): Defines Spring Boot parent version `3.5.16` and dependency `spring-cloud-starter-netflix-eureka-client`.
  - [application.properties](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%204/loan/src/main/resources/application.properties): Configures service name as `loan-service`, port `8081`, and register-URL for Eureka.
  - [LoanApplication.java](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%204/loan/src/main/java/com/cognizant/loan/LoanApplication.java): Main entry point decorated with `@EnableDiscoveryClient`.
  - [Loan.java](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%204/loan/src/main/java/com/cognizant/loan/model/Loan.java): Represents a loan model containing loan `number`, `type`, `loan` amount, `emi`, and `tenure`.
  - [LoanController.java](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%204/loan/src/main/java/com/cognizant/loan/controller/LoanController.java): Implements the REST API endpoints.

- **API Endpoint**:
  | HTTP Method | Endpoint | Description | Sample Output |
  | :--- | :--- | :--- | :--- |
  | **GET** | `/loans/{number}` | Fetches loan details by the corresponding account/loan number. | `{"number": "12345", "type": "car", "loan": 400000.0, "emi": 3258, "tenure": 18}` |

---

## How to Run the Applications

### Prerequisite
Ensure that a **Eureka Service Registry (Discovery Server)** is running at `http://localhost:8761/eureka/`.

### Run Account Service
1. Open a terminal and navigate to the `account` directory.
2. Build and run the project:
   ```bash
   mvn clean spring-boot:run
   ```
3. The service will start on port `8080` and attempt to register to Eureka as `account-service`.

### Run Loan Service
1. Open a terminal and navigate to the `loan` directory.
2. Build and run the project:
   ```bash
   mvn clean spring-boot:run
   ```
3. The service will start on port `8081` and attempt to register to Eureka as `loan-service`.

### Validation
Verify that both services register successfully by visiting the Eureka dashboard in your browser:
[http://localhost:8761](http://localhost:8761)
