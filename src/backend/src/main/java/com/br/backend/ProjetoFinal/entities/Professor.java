package com.br.backend.ProjetoFinal.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Data;

@Entity
@Table(name = "professor")
@Data
public class Professor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id_departamento", referencedColumnName = "id")
    private Departamento departamento;

    @Column(name = "nome")
    private String nome;

    @Column(name = "salario")
    private int salario;

    @Column(name = "dt_nasc")
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date dataNasc;

}
