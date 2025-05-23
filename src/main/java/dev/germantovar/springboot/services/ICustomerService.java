package dev.germantovar.springboot.services;

import dev.germantovar.springboot.entitis.Customer;

import java.util.List;
import java.util.Map;

public interface ICustomerService {
    List<Customer> getAll();

    void save(Customer customer);

    Map<String, String> login(String email, String password);
}
