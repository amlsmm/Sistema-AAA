package com.br.backend.ProjetoFinal.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.br.backend.ProjetoFinal.entities.Departamento;


public interface DepartamentoRepository extends JpaRepository<Departamento, Long> {
    
}
