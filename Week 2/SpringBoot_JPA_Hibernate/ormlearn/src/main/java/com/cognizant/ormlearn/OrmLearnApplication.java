package com.cognizant.ormlearn;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.model.Department;
import com.cognizant.ormlearn.model.Employee;
import com.cognizant.ormlearn.model.Skill;
import com.cognizant.ormlearn.model.Stock;
import com.cognizant.ormlearn.service.CountryService;
import com.cognizant.ormlearn.service.DepartmentService;
import com.cognizant.ormlearn.service.EmployeeService;
import com.cognizant.ormlearn.service.SkillService;
import com.cognizant.ormlearn.repository.StockRepository;

@SpringBootApplication
public class OrmLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);
    
    private static CountryService countryService;
    private static StockRepository stockRepository;
    private static EmployeeService employeeService;
    private static DepartmentService departmentService;
    private static SkillService skillService;

    public static void main(String[] args) throws Exception {
        LOGGER.info("Starting OrmLearnApplication...");
        ApplicationContext context = SpringApplication.run(OrmLearnApplication.class, args);
        
        countryService = context.getBean(CountryService.class);
        stockRepository = context.getBean(StockRepository.class);
        employeeService = context.getBean(EmployeeService.class);
        departmentService = context.getBean(DepartmentService.class);
        skillService = context.getBean(SkillService.class);

        LOGGER.info("--- Execution of Hands-on Tests ---");

        // Hands-on 1: Country queries
        testHandsOn1Countries();

        // Hands-on 2: Stock queries
        testHandsOn2Stocks();

        // Hands-on 4: Employee and Department (Many-to-One)
        testGetEmployee();
        testAddEmployee();
        testUpdateEmployee();

        // Hands-on 5: Department and Employee (One-to-Many)
        testGetDepartment();

        // Hands-on 6: Employee and Skill (Many-to-Many)
        testAddSkillToEmployee();
        testGetEmployee();

        LOGGER.info("OrmLearnApplication finished executing all tests.");
    }

    private static void testHandsOn1Countries() {
        LOGGER.info("--- Hands-on 1: Country Queries ---");
        
        LOGGER.info("1. Countries containing 'ou':");
        List<Country> c1 = countryService.findCountriesByPartialName("ou");
        c1.forEach(c -> LOGGER.info("{}       {}", c.getCode(), c.getName()));

        LOGGER.info("2. Countries containing 'ou' ordered ascending:");
        List<Country> c2 = countryService.findCountriesByNameContainingOrderByName("ou");
        c2.forEach(c -> LOGGER.info("{}       {}", c.getCode(), c.getName()));

        LOGGER.info("3. Countries starting with 'Z':");
        List<Country> c3 = countryService.findCountriesByNameStartingWith("Z");
        c3.forEach(c -> LOGGER.info("{}       {}", c.getCode(), c.getName()));
    }

    private static void testHandsOn2Stocks() throws Exception {
        LOGGER.info("--- Hands-on 2: Stock Queries ---");
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

        LOGGER.info("1. Facebook stocks in September 2019:");
        Date start = sdf.parse("2019-09-01");
        Date end = sdf.parse("2019-09-30");
        List<Stock> s1 = stockRepository.findByCodeAndDateBetween("FB", start, end);
        s1.forEach(s -> LOGGER.info("{}", s));

        LOGGER.info("2. Google stocks with close price > 1250:");
        List<Stock> s2 = stockRepository.findByCodeAndCloseGreaterThan("GOOGL", new BigDecimal("1250"));
        s2.forEach(s -> LOGGER.info("{}", s));

        LOGGER.info("3. Top 3 dates with highest volume:");
        List<Stock> s3 = stockRepository.findTop3ByOrderByVolumeDesc();
        s3.forEach(s -> LOGGER.info("{}", s));

        LOGGER.info("4. Top 3 dates with lowest NFLX stock close price:");
        List<Stock> s4 = stockRepository.findTop3ByCodeOrderByCloseAsc("NFLX");
        s4.forEach(s -> LOGGER.info("{}", s));
    }

    private static void testGetEmployee() {
        LOGGER.info("--- Hands-on 4/6: testGetEmployee ---");
        Employee employee = employeeService.get(1);
        LOGGER.debug("Employee:{}", employee);
        if (employee != null) {
            LOGGER.debug("Department:{}", employee.getDepartment());
            LOGGER.debug("Skills:{}", employee.getSkillList());
        }
    }

    private static void testAddEmployee() throws Exception {
        LOGGER.info("--- Hands-on 4: testAddEmployee ---");
        Employee employee = new Employee();
        employee.setName("Alice Johnson");
        employee.setSalary(55000.0);
        employee.setPermanent(true);
        employee.setDateOfBirth(new SimpleDateFormat("yyyy-MM-dd").parse("1994-03-12"));
        
        Department dept = departmentService.get(1);
        employee.setDepartment(dept);
        
        employeeService.save(employee);
        LOGGER.debug("Added Employee reference: {}", employee);
    }

    private static void testUpdateEmployee() {
        LOGGER.info("--- Hands-on 4: testUpdateEmployee ---");
        Employee employee = employeeService.get(3);
        if (employee != null) {
            Department dept = departmentService.get(3);
            employee.setDepartment(dept);
            employeeService.save(employee);
            LOGGER.debug("Updated Employee reference: {}", employee);
        }
    }

    private static void testGetDepartment() {
        LOGGER.info("--- Hands-on 5: testGetDepartment ---");
        Department department = departmentService.get(1);
        if (department != null) {
            LOGGER.debug("Department:{}", department);
            LOGGER.debug("Employee List:{}", department.getEmployeeList());
        }
    }

    private static void testAddSkillToEmployee() {
        LOGGER.info("--- Hands-on 6: testAddSkillToEmployee ---");
        Employee employee = employeeService.get(3);
        Skill skill = skillService.get(1);
        if (employee != null && skill != null) {
            employee.getSkillList().add(skill);
            employeeService.save(employee);
            LOGGER.debug("Added Skill '{}' to Employee '{}'", skill.getName(), employee.getName());
        }
    }
}
