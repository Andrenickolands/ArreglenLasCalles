package dev.germantovar.springboot.entitis;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "countries")
@Getter
@Setter
@EqualsAndHashCode

public class Country {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private String country;
    private String numerocountry;
    private String ciudad1;
    private String numero1;
    private String ciudad2;
    private String numero2;
}
