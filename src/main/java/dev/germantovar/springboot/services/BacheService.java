package dev.germantovar.springboot.services;


import dev.germantovar.springboot.entitis.Bache;
import dev.germantovar.springboot.repository.BacheRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BacheService implements IBacheService {

    @Autowired
    private BacheRepository bacheRepository;

    @Override
    public List<Bache> obtenerTodos(){
        return bacheRepository.findAll();

    }

    @Override
    public Bache obtenerPorId(Long id){
        return bacheRepository.findById(id).orElse(null);
    }
}
