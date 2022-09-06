package com.br.backend.ProjetoFinal.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.backend.ProjetoFinal.entities.Aluno;
import com.br.backend.ProjetoFinal.repositories.AlunoRepository;

@Service
public class AlunoService {
    
    @Autowired
    private AlunoRepository alunoRepository;

    public Aluno cadastrar(Aluno novoAluno){
        return alunoRepository.save(novoAluno);
    }

    public List<Aluno> listar(){
        return alunoRepository.findAll();
    }

    public Optional<Aluno> listarPorId(Long id){
        return alunoRepository.findById(id);
    }

    public void excluir(Long id){
        alunoRepository.deleteById(id);
    }

}
