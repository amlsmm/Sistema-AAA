package com.br.backend.ProjetoFinal.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.backend.ProjetoFinal.entities.Professor;
import com.br.backend.ProjetoFinal.repositories.ProfessorRepository;

@Service
public class ProfessorService {
    
    @Autowired
    private ProfessorRepository professorRepository;

    public Professor cadastrar(Professor novoProfessor){
        return professorRepository.save(novoProfessor);
    }

    public List<Professor> listar(){
        return professorRepository.findAll();
    }

    public Optional<Professor> listarPorId(Long id){
        return professorRepository.findById(id);
    }

    public void excluir(Long id){
        professorRepository.deleteById(id);
    }

}
