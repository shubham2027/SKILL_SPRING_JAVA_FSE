# PL/SQL Programming Exercises

This directory contains PL/SQL scripts grouped by exercise topics.

## Exercise 1: Control Structures

### 1. [Discount.sql](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/PLSQLProgramming/exercise1/Discount.sql)
- **Scenario:** The bank wants to apply a discount to senior citizen loans.
- **Logic:** Identifies customers older than 60 and updates their loans to lower the interest rate by 1%.

### 2. [VipStatus.sql](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/PLSQLProgramming/exercise1/VipStatus.sql)
- **Scenario:** The bank wants to promote high-balance customers to VIP status.
- **Logic:** Identifies customers with a balance greater than $10,000 and sets their `IsVIP` flag to `'TRUE'`.

### 3. [Reminder.sql](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/PLSQLProgramming/exercise1/Reminder.sql)
- **Scenario:** Send notifications to customers whose loan due dates are approaching.
- **Logic:** Finds loans with due dates in the next 30 days and prints a reminder message using `DBMS_OUTPUT`.

---

## Exercise 3: Stored Procedures

### 1. [ProcessMonthlyInterest.sql](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/PLSQLProgramming/exercise3/ProcessMonthlyInterest.sql)
- **Scenario:** Automate monthly interest calculations for savings accounts.
- **Logic:** Increases the balance of all accounts where `AccountType` is `'Savings'` by 1% and commits.

### 2. [UpdateEmployeeBonus.sql](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/PLSQLProgramming/exercise3/UpdateEmployeeBonus.sql)
- **Scenario:** Apply corporate bonuses to employee salaries department-wise.
- **Logic:** Accepts `p_dept_id` and `p_bonus_pct` and increases the salaries of all employees in that department by the bonus percentage.

### 3. [TransferFunds.sql](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/PLSQLProgramming/exercise3/TransferFunds.sql)
- **Scenario:** Safely move money from one account to another.
- **Logic:** Verifies if the source account has sufficient funds. If so, it debits the source account and credits the target account. Uses a transaction (`COMMIT` on success, `ROLLBACK` on failure) to guarantee atomicity.
