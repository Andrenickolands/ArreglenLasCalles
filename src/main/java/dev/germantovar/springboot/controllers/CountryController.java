package dev.germantovar.springboot.controllers;


import dev.germantovar.springboot.entitis.Country;
import dev.germantovar.springboot.repository.CountryRepository;
import dev.germantovar.springboot.services.ICountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CountryController {

    @Autowired
    private ICountryService service;

    @Autowired
    private CountryRepository countryRepository;

    @GetMapping("countries")
    public List<Country> getAll(){
        return service.getAll();
    }



}
