package com.br.backend.ProjetoFinal.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.br.backend.ProjetoFinal.entities.Matricula;

public interface MatriculaRepository extends JpaRepository<Matricula, Long>{
    
}
