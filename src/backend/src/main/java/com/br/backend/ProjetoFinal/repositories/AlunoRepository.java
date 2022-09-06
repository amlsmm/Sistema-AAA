package com.br.backend.ProjetoFinal.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.br.backend.ProjetoFinal.entities.Aluno;

public interface AlunoRepository extends JpaRepository<Aluno, Long> {
    
}
