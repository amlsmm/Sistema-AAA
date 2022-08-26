package com.br.backend.ProjetoFinal.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.br.backend.ProjetoFinal.entities.Professor;

public interface ProfessorRepository extends JpaRepository<Professor, Long>{
    
}
