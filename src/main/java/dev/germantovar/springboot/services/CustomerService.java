package dev.germantovar.springboot.services;

import dev.germantovar.springboot.entitis.Customer;
import dev.germantovar.springboot.repository.CustomerRepository;
import dev.germantovar.springboot.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class CustomerService implements ICustomerService {

    @Autowired
    private CustomerRepository repository;
    @Autowired
    private JwtUtil jwtUtil;

    @Override
    public List<Customer> getAll() {
        return (List<Customer>) repository.findAll();
    }

    //POST TO DB FILES
    @Override
    public void save(Customer customer) {
        repository.save(customer);
    }

    @Override
    public Map<String, String> login(String email, String password) {
        return repository.findByEmailAndPassword(email, password)
                .map(customer -> {
                    String token = jwtUtil.generarToken(customer.getNombre());
                    System.out.println("Token generado: "+ token);
                    return Map.of("name", customer.getNombre(),"token", token);
                })
                .orElseThrow(()->new RuntimeException("Crendenciales invalidas"));

    }
}
