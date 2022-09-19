package com.br.backend.ProjetoFinal.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.br.backend.ProjetoFinal.entities.Disciplina;

public interface DisciplinaRepository extends JpaRepository<Disciplina, Long> {
    
}