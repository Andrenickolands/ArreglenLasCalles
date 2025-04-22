package dev.germantovar.springboot.entitis;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name ="baches")
public class Bache {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Long id;

    @Column(nullable = false, length = 50)
    private String lugar;

    @OneToMany(mappedBy = "fecha", cascade = CascadeType.ALL)
    private List<Fecha> fecha;
}
