package dev.germantovar.springboot.controllers;


import dev.germantovar.springboot.entitis.Fecha;
import dev.germantovar.springboot.repository.FechaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/fecha")
public class FechaController {

    @Autowired
    private FechaRepository fechaRepository;


    @GetMapping ("/baches/{bacheId}")
    public List<Fecha> obtenerFechaPorBache(@PathVariable Long bacheId){
        return fechaRepository.findByBacheId(bacheId);
    }
}
