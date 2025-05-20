package dev.germantovar.springboot.controllers;

import dev.germantovar.springboot.entitis.Country;
import dev.germantovar.springboot.entitis.Customer;
import dev.germantovar.springboot.repository.CustomerRepository;
import dev.germantovar.springboot.services.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CustomerController {

    @Autowired
    private ICustomerService service;

    @Autowired
    private CustomerRepository customerRepository;

    @GetMapping("users")
    public List<Customer> getAll(){
        return service.getAll();
    }

    @PostMapping("users")
    public void save (@RequestBody Customer customer){
        service.save(customer);
    }

//comentarios
}
