package com.br.backend.ProjetoFinal.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.backend.ProjetoFinal.entities.Disciplina;
import com.br.backend.ProjetoFinal.repositories.DisciplinaRepository;

@Service
public class DisciplinaService {
    
    @Autowired
    private DisciplinaRepository disciplinaRepository;

    public Disciplina cadastrar(Disciplina novoCurso){
        return disciplinaRepository.save(novoCurso);
    }

    public List<Disciplina> listar(){
        return disciplinaRepository.findAll();
    }

    public Optional<Disciplina> listarPorId(Long id){
        return disciplinaRepository.findById(id);
    }

    public void excluir(Long id){
        disciplinaRepository.deleteById(id);
    }

}
