package dev.germantovar.springboot.repository;


import dev.germantovar.springboot.entitis.Customer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Map;
import java.util.Optional;

@Repository
public interface CustomerRepository extends CrudRepository<Customer, Long> {

    Optional<Customer> findByEmailAndPassword(String email, String password);

}
