package dev.germantovar.springboot.controllers;

import dev.germantovar.springboot.entitis.Customer;
import dev.germantovar.springboot.services.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
public class CustomerController {

    @Autowired
    private ICustomerService service;


    @GetMapping("users")
    public List<Customer> getAll(){
        return service.getAll();
    }

    @PostMapping("/register")
    public void save (@RequestBody Customer customer){
        service.save(customer);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Customer customer){
        Map<String,String>response =service.login(customer.getEmail(), customer.getPassword());
        return ResponseEntity.ok(response);
    }

}
