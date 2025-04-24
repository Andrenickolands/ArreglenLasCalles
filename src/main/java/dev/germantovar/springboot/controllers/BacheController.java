package dev.germantovar.springboot.controllers;


import dev.germantovar.springboot.entitis.Bache;
import dev.germantovar.springboot.services.IBacheService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/baches")
public class BacheController {

    @Autowired
    private IBacheService bacheService;

    @GetMapping
    public List<Bache> obtenerBaches(){
        return bacheService.obtenerTodos();
    }

    @GetMapping("/{id}")
    public Bache obtenerBachePorId(@PathVariable Long id){
        return bacheService.obtenerPorId(id);
    }

}
