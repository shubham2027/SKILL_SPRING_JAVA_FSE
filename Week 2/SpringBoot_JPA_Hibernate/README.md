# Spring Boot, JPA & Hibernate Hands-on Exercises

This workspace contains two distinct projects showcasing different stages and scopes of Spring Boot JPA & Hibernate integration.

---

## 1. Project Directory Structure

```text
SpringBoot_JPA_Hibernate/
├── hibernatequerylearn/      # Country Query Methods Starter Project
└── ormlearn/                 # Complete Hands-on (1-6) Implementation Project
```

---

## 2. hibernatequerylearn

A standalone starter project dedicated to basic Country lookup operations, custom HQL, and native SQL mapping.

### Database Schema Setup
Execute the local `setup.sql` script to initialize the `country` table:
```bash
mysql -u root -p < hibernatequerylearn/setup.sql
```

### Hands-on Scope & Demonstration
- **Object-Relational Mapping (Country)**: Maps `Country.java` persistence model to the `country` table.
- **Custom Query Methods**: Declares name-based matchers inside `CountryRepository.java`:
  - `findByNameContaining(String name)`
  - `findByNameStartingWith(String prefix)`
  - `findByNameContainingOrderByNameAsc(String name)`
- **HQL / JPQL Querying**: Demonstrates `@Query` with parameter binding:
  - `findCountriesStartingWithChar(@Param("char") String character)`
- **Native SQL Querying**: Direct SQL querying using `@Query(nativeQuery = true)`:
  - `findCountriesByPatternNative(@Param("pattern") String pattern)`

---

## 3. ormlearn

The main codebase implementing all stock-market daily logging exercises and multi-table payroll mapping constraints.

### Database Schema Setup
Execute the extended `setup.sql` script to create and populate the `country`, `stock`, and payroll (`department`, `employee`, `skill`, `employee_skill`) tables:
```bash
mysql -u root -p < ormlearn/setup.sql
```

### Completed Exercises (1-6)

#### Hands-on 1: Country Query Methods
Implemented methods to search by text, sort outcomes ascending, and filter countries by alphabetical index.

#### Hands-on 2: Stock Queries
Created the `Stock` entity and defined `StockRepository` queries:
- **Facebook Stocks (September 2019)**: Date range retrieval.
- **Google Close Prices (> 1250)**: Numeric filtering.
- **Top 3 Highest Volume**: Descending transaction volume limit selection.
- **Top 3 Lowest NFLX Close**: Ascending close price selection.

#### Hands-on 3-6: Payroll ORM Mappings & Tests
- **Many-to-One (Employee → Department)**: Configured using `@ManyToOne` and `@JoinColumn(name = "em_dp_id")`.
- **One-to-Many (Department → Employee)**: Configured with `@OneToMany(mappedBy = "department", fetch = FetchType.EAGER)`.
- **Many-to-Many (Employee ↔ Skill)**: Configured with `@ManyToMany(fetch = FetchType.EAGER)` and `@JoinTable` (linking table `employee_skill`).
- **Services & Application Tests**:
  - Services `EmployeeService`, `DepartmentService`, and `SkillService` manage persistence boundaries.
  - `OrmLearnApplication` runs automated flows to get, save, and update relationships, verifying lazy vs. eager fetching behaviors.
