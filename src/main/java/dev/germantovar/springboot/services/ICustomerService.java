package dev.germantovar.springboot.services;


import dev.germantovar.springboot.entitis.Customer;

import java.util.List;

public interface ICustomerService {
    List<Customer> getAll();

    void save(Customer customer);
}
