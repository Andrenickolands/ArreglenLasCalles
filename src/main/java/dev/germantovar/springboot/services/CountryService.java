package dev.germantovar.springboot.services;


import dev.germantovar.springboot.entitis.Country;
import dev.germantovar.springboot.repository.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService implements ICountryService {

    @Autowired
    private CountryRepository repository;

    @Override
    public List<Country> getAll(){
        return (List<Country>) repository.findAll();
    }
}
