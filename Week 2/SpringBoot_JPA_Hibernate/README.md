# Spring Boot, JPA & Hibernate Hands-on Exercises

This folder contains the complete code implementation and conceptual explanations for the 7 hands-on exercises covering Spring Boot, JPA, and Hibernate.

---

## Project Structure Overview

```text
SpringBoot_JPA_Hibernate/
├── pom.xml                               # Maven build configuration
├── setup.sql                             # SQL script to create schema, table, and populate data
├── src/
│   └── main/
│       ├── java/
│       │   └── com/
│       │       └── cognizant/
│       │           └── ormlearn/
│       │               ├── OrmLearnApplication.java           # Application entry point with tests
│       │               ├── model/
│       │               │   └── Country.java                   # Entity class mapped to 'country' table
│       │               ├── repository/
│       │               │   └── CountryRepository.java         # Spring Data JPA Repository
│       │               └── service/
│       │                   ├── CountryService.java            # Service layer with @Transactional operations
│       │                   └── exception/
│       │                       └── CountryNotFoundException.java # Custom exception
│       └── resources/
│           └── application.properties    # Database credentials and Hibernate configurations
└── README.md                             # Walkthrough & explanations (this file)
```

---

## Database Setup

Before running the application, execute the `setup.sql` script in MySQL Workbench or terminal client:
```bash
mysql -u root -p < setup.sql
```
This script will:
1. Create the `ormlearn` schema.
2. Create the `country` table.
3. Populate it with 240+ countries.

---

## Hands-on 1: Spring Data JPA - Quick Example

### 1. Structure Explanation
- **`src/main/java`**: Contains Java source files organized into logical packages (`model`, `repository`, `service`).
- **`src/main/resources`**: Stores resources, configuration files (`application.properties`), and XMLs.
- **`src/test/java`**: Holds unit test cases.
- **`OrmLearnApplication.java`**: The main class configured with `@SpringBootApplication` that starts the Spring IoC container (`ApplicationContext`) and executes the application.
- **`@SpringBootApplication`**: A convenience annotation that combines:
  1. `@SpringBootConfiguration`: Marks the class as a configuration source.
  2. `@EnableAutoConfiguration`: Tells Spring Boot to automatically configure beans based on dependencies in class-path (like DataSource, JPA EntityManagerFactory, Hibernate).
  3. `@ComponentScan`: Tells Spring to scan the current package and its subpackages for annotations like `@Component`, `@Service`, `@Repository`.

### 2. Project Files Implementation

- **`pom.xml`**: Defined with `spring-boot-starter-data-jpa` for ORM support, `mysql-connector-java` for database driver, and DevTools.
- **`application.properties`**:
  ```properties
  # Logging Levels
  logging.level.org.springframework=info
  logging.level.com.cognizant=debug
  logging.level.org.hibernate.SQL=trace
  logging.level.org.hibernate.type.descriptor.sql=trace

  # Database configuration
  spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
  spring.datasource.url=jdbc:mysql://localhost:3306/ormlearn
  spring.datasource.username=root
  spring.datasource.password=root

  # Hibernate configuration
  spring.jpa.hibernate.ddl-auto=validate
  spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL5Dialect
  ```

- **Entity: `Country.java`**
  ```java
  @Entity
  @Table(name = "country")
  public class Country {
      @Id
      @Column(name = "co_code")
      private String code;

      @Column(name = "co_name")
      private String name;
      
      // Constructors, getters, setters, toString()...
  }
  ```

- **Repository: `CountryRepository.java`**
  ```java
  @Repository
  public interface CountryRepository extends JpaRepository<Country, String> {}
  ```

- **Service: `CountryService.java`**
  ```java
  @Service
  public class CountryService {
      @Autowired
      private CountryRepository countryRepository;

      @Transactional(readOnly = true)
      public List<Country> getAllCountries() {
          return countryRepository.findAll();
      }
  }
  ```

---

## Hands-on 2: Hibernate XML Config Walkthrough

### 1. XML Mapping (hbm.xml)
In classic Hibernate, java classes are mapped to tables using an XML config file:
- `<class name="Employee" table="EMPLOYEE">` maps class to table.
- `<id name="id" column="id">` defines the primary key mapping.
- `<property name="firstName" column="first_name"/>` maps simple properties.

### 2. Hibernate Architecture Terms
- **`SessionFactory`**: Thread-safe, application-wide object (usually one per database). It parses the configuration and metadata to compile mapping rules, then produces `Session` objects. It is expensive to create.
- **`Session`**: A single-threaded, short-lived object representing a database connection. Used to read/write persistent objects (wrapping JDBC connection).
- **`Transaction`**: A single-threaded unit of work. Used to declare boundary constraints.
  - **`beginTransaction()`**: Starts a new transaction context on the session.
  - **`commit()`**: Flushes the session changes and permanently writes them to the DB.
  - **`rollback()`**: Aborts the transaction and discards any pending changes in case of an exception.
- **`session.save(entity)`**: Inserts a new row in the database matching the entity.
- **`session.createQuery().list()`**: Runs an HQL query to retrieve a list of persistent entities.
- **`session.get(Class, ID)`**: Fetches an entity by its class type and primary key identifier (returns null if not found).
- **`session.delete(entity)`**: Deletes the database row corresponding to the entity.

---

## Hands-on 3: Hibernate Annotation Config Walkthrough

### 1. Mappings in Employee Persistence Class
Annotations replaced XML configurations:
- **`@Entity`**: Informs the engine that the class is a table-mapped entity.
- **`@Table(name="EMPLOYEE")`**: Specifies table details.
- **`@Id`**: Denotes primary key field.
- **`@GeneratedValue(strategy=GenerationType.IDENTITY)`**: Instructs how primary key values are generated.
- **`@Column(name="salary")`**: Map attributes to custom column names.

### 2. Hibernate Configuration properties (`hibernate.cfg.xml`)
- **`Dialect`**: Translates HQL queries into appropriate database-specific SQL (e.g. `MySQL5Dialect`).
- **`Driver`**: Class name of the database driver (e.g. `com.mysql.cj.jdbc.Driver`).
- **`Connection URL`**: Connection URL (e.g. `jdbc:mysql://localhost:3306/ormlearn`).
- **`Username` & `Password`**: Database access credentials.

---

## Hands-on 4: Difference between JPA, Hibernate, and Spring Data JPA

| Aspect | Java Persistence API (JPA) | Hibernate | Spring Data JPA |
| :--- | :--- | :--- | :--- |
| **Type** | Specification (Interface) | Implementation (Provider) | Abstraction Layer |
| **Boilerplate** | Medium | High (Manually opening Session, transaction lifecycle) | None (Handled automatically) |
| **Abstractions** | `EntityManager`, `EntityTransaction` | `SessionFactory`, `Session`, `Transaction` | `Repository` Interfaces |

### Code Comparison

#### Hibernate (Manual Session & Transaction management)
```java
public Integer addEmployee(Employee employee){
    Session session = factory.openSession();
    Transaction tx = null;
    Integer id = null;
    try {
        tx = session.beginTransaction();
        id = (Integer) session.save(employee); 
        tx.commit();
    } catch (HibernateException e) {
        if (tx != null) tx.rollback();
        e.printStackTrace(); 
    } finally {
        session.close(); 
    }
    return id;
}
```

#### Spring Data JPA (Declarative Transaction & Abstraction)
```java
// 1. Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {}

// 2. Service
@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    @Transactional
    public void addEmployee(Employee employee) {
        employeeRepository.save(employee); // Auto-transaction, session closed automatically
    }
}
```

---

## Hands-on 5: Implement services for managing Country

### 1. Hibernate Table Creation Configuration (`ddl-auto`)
The `spring.jpa.hibernate.ddl-auto` property configures schema validation and modification:
- **`validate`**: Validates the database tables and columns. Throws an error on startup if they don't match entity annotations. Recommended for Production.
- **`update`**: Updates the schema to match new entities/fields. Does not delete columns/data.
- **`create`**: Drops all tables on startup and creates new ones from scratch. All data is lost.
- **`create-drop`**: Drops tables on startup, creates them, and drops them again on shutdown.

### 2. Country Service Operations
The following functions were implemented in [CountryService.java](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%202/SpringBoot_JPA_Hibernate/src/main/java/com/cognizant/ormlearn/service/CountryService.java):
1. **Find a country by code**: `findCountryByCode(String code)` (Hands-on 6)
2. **Add a country**: `addCountry(Country country)` (Hands-on 7)
3. **Update a country**: `updateCountry(String code, String newName)`
4. **Delete a country**: `deleteCountry(String code)`
5. **Partial search matching name**: `findCountriesByPartialName(String prefix)` (using standard keyword matching in JpaRepository: `findByNameContaining`)

---

## Hands-on 6: Find a country based on country code

- A custom exception class `CountryNotFoundException` is defined.
- In `CountryService`, the method retrieves the country utilizing the repository's `findById()` method:
  ```java
  @Transactional
  public Country findCountryByCode(String countryCode) throws CountryNotFoundException {
      Optional<Country> result = countryRepository.findById(countryCode);
      if (!result.isPresent()) {
          throw new CountryNotFoundException("Country with code '" + countryCode + "' not found");
      }
      return result.get();
  }
  ```
- **Importance of `@Transactional`**:
  - Automatically manages the lifecycle of the Hibernate Session.
  - Controls transaction boundaries.
  - Automatically commits transactions on successful method completion, or performs rollbacks in case of exceptions.
  - Handles dirty-checking automatically to synchronize changes to the database.

---

## Hands-on 7: Add a new country

- In `CountryService`, the method invokes `save()` to insert a new country row:
  ```java
  @Transactional
  public void addCountry(Country country) {
      countryRepository.save(country);
  }
  ```
- Checked by running `testAddCountry()` in `OrmLearnApplication.java`, which adds country `ZZ` ("Test Country ZZ") and queries it back.

---

## Additional Demonstrations (Curriculum Records Matching)

### 1. Demonstrate implementation of Query Methods feature of Spring Data JPA
Spring Data JPA's Query Methods feature allows developers to declare finder query methods directly on the repository interface without providing explicit implementations or SQL query syntax. Spring Boot parses the method name according to convention (e.g., matching entity properties) and automatically builds the corresponding SQL query at runtime.
In [CountryRepository.java](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%202/SpringBoot_JPA_Hibernate/src/main/java/com/cognizant/ormlearn/repository/CountryRepository.java), we defined:
- `findByNameContaining(String name)`: translates to `WHERE co_name LIKE %name%`
- `findByNameStartingWith(String prefix)`: translates to `WHERE co_name LIKE prefix%`
- `findByNameContainingOrderByNameAsc(String name)`: translates to `WHERE co_name LIKE %name% ORDER BY co_name ASC`

### 2. Demonstrate implementation of O/R Mapping
Object-Relational Mapping (ORM) is demonstrated in the [Country.java](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%202/SpringBoot_JPA_Hibernate/src/main/java/com/cognizant/ormlearn/model/Country.java) entity model:
- `@Entity`: Identifies the Java class as a persistent model mapping to the database.
- `@Table(name = "country")`: Explicitly specifies the database table name.
- `@Id`: Designates the `code` attribute as the database primary key.
- `@Column(name = "co_code")` and `@Column(name = "co_name")`: Maps fields to the database columns `co_code` and `co_name` to allow field naming differences (camelCase vs. snake_case).

### 3. Demonstrate writing Hibernate Query Language and Native Query
- **Hibernate Query Language (HQL / JPQL)**: Focuses on Java entities rather than database tables. We mapped this using the `@Query` annotation:
  ```java
  @Query("SELECT c FROM Country c WHERE c.name LIKE :char% ORDER BY c.name ASC")
  List<Country> findCountriesStartingWithChar(@Param("char") String character);
  ```
- **Native SQL Query**: Directly runs standard SQL queries on the actual database tables. We configured this using `@Query(nativeQuery = true)`:
  ```java
  @Query(value = "SELECT * FROM country WHERE co_name LIKE %:pattern% ORDER BY co_code DESC", nativeQuery = true)
  List<Country> findCountriesByPatternNative(@Param("pattern") String pattern);
  ```

---

## Running the Application Tests

When running the main method of `OrmLearnApplication.java`, you will see console logs verifying:
1. Fetching all country rows.
2. Querying `IN` (India) and `US` (United States), and printing their details.
3. Catching `CountryNotFoundException` when looking up a non-existent code `XX`.
4. Adding a country `ZZ`, verifying it was written, updating its name, verifying the update, and subsequently deleting it.
5. Performing a partial name match for string `Uni`.
6. Performing a starting prefix match for string `In` (Query Methods demonstration).
7. Performing containing match with alphabetical order sorting (Query Methods demonstration).
8. Performing an HQL-based query lookup for starting character `U` (HQL demonstration).
9. Performing a Native SQL query lookup for pattern `land` (Native SQL demonstration).

