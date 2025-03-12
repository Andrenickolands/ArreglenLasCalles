package dev.germantovar.springboot.repository;

import dev.germantovar.springboot.entitis.Country;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CountryRepository extends CrudRepository<Country, Long> {
}
