package com.cognizant.ormlearn;

import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.service.CountryService;
import com.cognizant.ormlearn.service.exception.CountryNotFoundException;

@SpringBootApplication
public class OrmLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);
    private static CountryService countryService;

    public static void main(String[] args) {
        LOGGER.info("Inside main - starting application context");
        ApplicationContext context = SpringApplication.run(OrmLearnApplication.class, args);
        countryService = context.getBean(CountryService.class);
        
        LOGGER.info("--- Execution of Hands-on Tests ---");
        
        // 1. Get all countries (Hands-on 1)
        testGetAllCountries();
        
        // 2. Find country by code (Hands-on 6)
        testFindCountryByCode("IN");
        testFindCountryByCode("US");
        testFindCountryByCode("XX"); // Will log failure due to CountryNotFoundException
        
        // 3. Add a new country (Hands-on 7)
        testAddCountry();
        
        // 4. Update a country (Part of Hands-on 5)
        testUpdateCountry();
        
        // 5. Delete a country (Part of Hands-on 5)
        testDeleteCountry();
        
        // 6. Find countries by partial name (Part of Hands-on 5)
        testFindCountriesByPartialName("Uni");
        
        // 7. Find countries by starting name (Query Methods demonstration)
        testFindCountriesByNameStartingWith("In");
        
        // 8. Find countries by name containing and order by name (Query Methods demonstration)
        testFindCountriesByNameContainingOrderByName("an");
        
        // 9. HQL / JPQL Query Demonstration (Demonstrate writing HQL and Native Query)
        testFindCountriesStartingWithChar("U");
        
        // 10. Native SQL Query Demonstration (Demonstrate writing HQL and Native Query)
        testFindCountriesByPatternNative("land");
        
        LOGGER.info("Inside main - finished executing all hands-on tests successfully");
    }

    private static void testGetAllCountries() {
        LOGGER.info("Start testGetAllCountries");
        List<Country> countries = countryService.getAllCountries();
        LOGGER.debug("countries={}", countries);
        LOGGER.info("End testGetAllCountries - total countries fetched: {}", countries.size());
    }

    private static void testFindCountryByCode(String code) {
        LOGGER.info("Start testFindCountryByCode for '{}'", code);
        try {
            Country country = countryService.findCountryByCode(code);
            LOGGER.debug("Country found: {}", country);
        } catch (CountryNotFoundException e) {
            LOGGER.error("Country not found: {}", e.getMessage());
        }
        LOGGER.info("End testFindCountryByCode");
    }

    private static void testAddCountry() {
        LOGGER.info("Start testAddCountry");
        String code = "ZZ";
        Country newCountry = new Country(code, "Test Country ZZ");
        countryService.addCountry(newCountry);
        
        try {
            Country fetched = countryService.findCountryByCode(code);
            LOGGER.debug("Added country fetched: {}", fetched);
        } catch (CountryNotFoundException e) {
            LOGGER.error("Failed to add country: {}", e.getMessage());
        }
        LOGGER.info("End testAddCountry");
    }

    private static void testUpdateCountry() {
        LOGGER.info("Start testUpdateCountry");
        String code = "ZZ";
        try {
            countryService.updateCountry(code, "Updated Test Country ZZ");
            Country fetched = countryService.findCountryByCode(code);
            LOGGER.debug("Updated country: {}", fetched);
        } catch (CountryNotFoundException e) {
            LOGGER.error("Failed to update country: {}", e.getMessage());
        }
        LOGGER.info("End testUpdateCountry");
    }

    private static void testDeleteCountry() {
        LOGGER.info("Start testDeleteCountry");
        String code = "ZZ";
        try {
            countryService.deleteCountry(code);
            LOGGER.debug("Deleted country: {}", code);
            // Verify it is gone
            countryService.findCountryByCode(code);
        } catch (CountryNotFoundException e) {
            LOGGER.info("Verified country deletion successfully (threw expected exception): {}", e.getMessage());
        }
        LOGGER.info("End testDeleteCountry");
    }

    private static void testFindCountriesByPartialName(String partialName) {
        LOGGER.info("Start testFindCountriesByPartialName for prefix '{}'", partialName);
        List<Country> countries = countryService.findCountriesByPartialName(partialName);
        LOGGER.debug("Matching countries: {}", countries);
        LOGGER.info("End testFindCountriesByPartialName");
    }

    private static void testFindCountriesByNameStartingWith(String prefix) {
        LOGGER.info("Start testFindCountriesByNameStartingWith for prefix '{}'", prefix);
        List<Country> countries = countryService.findCountriesByNameStartingWith(prefix);
        LOGGER.debug("Countries starting with '{}': {}", prefix, countries);
        LOGGER.info("End testFindCountriesByNameStartingWith");
    }

    private static void testFindCountriesByNameContainingOrderByName(String name) {
        LOGGER.info("Start testFindCountriesByNameContainingOrderByName for '{}'", name);
        List<Country> countries = countryService.findCountriesByNameContainingOrderByName(name);
        LOGGER.debug("Countries containing '{}' ordered: {}", name, countries);
        LOGGER.info("End testFindCountriesByNameContainingOrderByName");
    }

    private static void testFindCountriesStartingWithChar(String character) {
        LOGGER.info("Start testFindCountriesStartingWithChar (HQL/JPQL) for '{}'", character);
        List<Country> countries = countryService.findCountriesStartingWithChar(character);
        LOGGER.debug("HQL Result: {}", countries);
        LOGGER.info("End testFindCountriesStartingWithChar");
    }

    private static void testFindCountriesByPatternNative(String pattern) {
        LOGGER.info("Start testFindCountriesByPatternNative (Native SQL) for '{}'", pattern);
        List<Country> countries = countryService.findCountriesByPatternNative(pattern);
        LOGGER.debug("Native SQL Result: {}", countries);
        LOGGER.info("End testFindCountriesByPatternNative");
    }
}
