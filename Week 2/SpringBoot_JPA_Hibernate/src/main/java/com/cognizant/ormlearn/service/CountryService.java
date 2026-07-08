package com.cognizant.ormlearn.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.repository.CountryRepository;
import com.cognizant.ormlearn.service.exception.CountryNotFoundException;

@Service
public class CountryService {

    @Autowired
    private CountryRepository countryRepository;

    @Transactional(readOnly = true)
    public List<Country> getAllCountries() {
        return countryRepository.findAll();
    }

    @Transactional
    public Country findCountryByCode(String countryCode) throws CountryNotFoundException {
        Optional<Country> result = countryRepository.findById(countryCode);
        if (!result.isPresent()) {
            throw new CountryNotFoundException("Country with code '" + countryCode + "' not found");
        }
        return result.get();
    }

    @Transactional
    public void addCountry(Country country) {
        countryRepository.save(country);
    }

    @Transactional
    public void updateCountry(String code, String newName) throws CountryNotFoundException {
        Country country = findCountryByCode(code);
        country.setName(newName);
        countryRepository.save(country);
    }

    @Transactional
    public void deleteCountry(String code) throws CountryNotFoundException {
        Country country = findCountryByCode(code);
        countryRepository.delete(country);
    }

    @Transactional(readOnly = true)
    public List<Country> findCountriesByPartialName(String namePattern) {
        return countryRepository.findByNameContaining(namePattern);
    }

    @Transactional(readOnly = true)
    public List<Country> findCountriesByNameStartingWith(String prefix) {
        return countryRepository.findByNameStartingWith(prefix);
    }

    @Transactional(readOnly = true)
    public List<Country> findCountriesByNameContainingOrderByName(String name) {
        return countryRepository.findByNameContainingOrderByNameAsc(name);
    }

    @Transactional(readOnly = true)
    public List<Country> findCountriesStartingWithChar(String character) {
        return countryRepository.findCountriesStartingWithChar(character);
    }

    @Transactional(readOnly = true)
    public List<Country> findCountriesByPatternNative(String pattern) {
        return countryRepository.findCountriesByPatternNative(pattern);
    }
}
