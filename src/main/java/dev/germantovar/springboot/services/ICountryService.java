package dev.germantovar.springboot.services;

import dev.germantovar.springboot.entitis.Country;

import java.util.List;

public interface ICountryService {
    List<Country> getAll();
}
