package com.br.backend.ProjetoFinal.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.br.backend.ProjetoFinal.entities.Curso;

public interface CursoRepository extends JpaRepository<Curso, Long>{
    
}
