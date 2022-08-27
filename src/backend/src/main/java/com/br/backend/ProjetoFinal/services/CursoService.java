package com.br.backend.ProjetoFinal.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.backend.ProjetoFinal.entities.Curso;
import com.br.backend.ProjetoFinal.repositories.CursoRepository;

@Service
public class CursoService {
    
    @Autowired
    private CursoRepository cursoRepository;

    public Curso cadastrar(Curso novoCurso){
        return cursoRepository.save(novoCurso);
    }

    public List<Curso> listar(){
        return cursoRepository.findAll();
    }

    public Optional<Curso> listarPorId(Long id){
        return cursoRepository.findById(id);
    }

    public void excluir(Long id){
        cursoRepository.deleteById(id);
    }

}
