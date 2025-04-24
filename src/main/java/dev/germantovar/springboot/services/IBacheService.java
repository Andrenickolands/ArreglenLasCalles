package dev.germantovar.springboot.services;

import dev.germantovar.springboot.entitis.Bache;

import java.util.List;

public interface IBacheService {
    List<Bache> obtenerTodos();

    Bache obtenerPorId(Long id);
}
