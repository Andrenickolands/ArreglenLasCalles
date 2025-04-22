package dev.germantovar.springboot.entitis;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@Table(name = "fechas")
public class Fecha {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "bache_id", nullable = false)
    @JsonBackReference
    private Bache bache;

    @Column(nullable = false)
    @Temporal(TemporalType.DATE)
    private Date fecha;
}
