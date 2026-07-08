package com.cognizant.ormlearn.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.cognizant.ormlearn.model.Country;

@Repository
public interface CountryRepository extends JpaRepository<Country, String> {
    
    // 1. Query Methods Demonstration
    List<Country> findByNameContaining(String name);
    
    List<Country> findByNameStartingWith(String prefix);
    
    List<Country> findByNameContainingOrderByNameAsc(String name);
    
    // 2. Hibernate Query Language (HQL / JPQL) Demonstration
    @Query("SELECT c FROM Country c WHERE c.name LIKE :char% ORDER BY c.name ASC")
    List<Country> findCountriesStartingWithChar(@Param("char") String character);
    
    // 3. Native SQL Query Demonstration
    @Query(value = "SELECT * FROM country WHERE co_name LIKE %:pattern% ORDER BY co_code DESC", nativeQuery = true)
    List<Country> findCountriesByPatternNative(@Param("pattern") String pattern);
}
