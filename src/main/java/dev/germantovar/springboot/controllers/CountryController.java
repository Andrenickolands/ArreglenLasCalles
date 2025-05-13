package dev.germantovar.springboot.controllers;


import dev.germantovar.springboot.entitis.Country;
import dev.germantovar.springboot.repository.CountryRepository;
import dev.germantovar.springboot.services.ICountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class CountryController {
    //DEPENDENCIES FOT COUNTRY SERVICE

    @Autowired
    private ICountryService service;
    //DEPENDENCIES FOT COUNTRY REPOSITORY
    @Autowired
    private CountryRepository countryRepository;

    @GetMapping("countries")
    public List<Country> getAll(){
        return service.getAll();
    }

    //POST DATA INTO COUNTRIES TABLE
    @PostMapping("countries")
    public void save (@RequestBody Country country){
        service.save(country);
    }
//Indica el metodo de Put para actualizar un objeto en la base de datos.
    @PutMapping("api/countries/actualizar/{id}")
    public ResponseEntity<Country> update(@PathVariable("id")long id, @RequestBody Country country){
       //Busca en el repositorio de Country si existe el mismo, con el ID proporcionado.
        Optional<Country> countrydata = countryRepository.findById(id);
        if(countrydata.isPresent()){
            Country _country1 = countrydata.get();
            _country1.setCountry(country.getCountry());
            _country1.setCiudad1(country.getCiudad1());
            _country1.setNumerocountry(country.getNumerocountry());
            _country1.setCiudad1(country.getCiudad1());
            _country1.setNumero1(country.getNumero1());
            _country1.setCiudad2(country.getCiudad2());
            _country1.setNumero2(country.getNumero2());
//Guarda el onjeto actualizado en la base de datos y devuelve una respuesta con el objeto actualizado.
            return new ResponseEntity<>(countryRepository.save(_country1), HttpStatus.ACCEPTED);

        }else{
//Mensaje de error si no se encuentra el objeto con el ID proporcionado.
            return new ResponseEntity<>(HttpStatus.FOUND);
        }


    }


}

