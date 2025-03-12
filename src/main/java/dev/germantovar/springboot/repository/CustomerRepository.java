package dev.germantovar.springboot.repository;

import dev.germantovar.springboot.entitis.Customer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends CrudRepository<Customer, Long> {

}
