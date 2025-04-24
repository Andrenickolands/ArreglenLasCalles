package dev.germantovar.springboot.repository;

import dev.germantovar.springboot.entitis.Fecha;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FechaRepository extends JpaRepository<Fecha, Long> {
    List<Fecha> findByBacheId(Long bacheId);
}
