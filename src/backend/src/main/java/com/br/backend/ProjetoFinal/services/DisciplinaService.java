package com.br.backend.ProjetoFinal.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.backend.ProjetoFinal.entities.Aluno;
import com.br.backend.ProjetoFinal.entities.Disciplina;
import com.br.backend.ProjetoFinal.entities.Matricula;
import com.br.backend.ProjetoFinal.repositories.DisciplinaRepository;
import com.br.backend.ProjetoFinal.repositories.MatriculaRepository;

@Service
public class DisciplinaService {
    
    @Autowired
    private DisciplinaRepository disciplinaRepository;

    @Autowired
    private MatriculaRepository matriculaRepository;

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

    public Disciplina editar(Long id, Disciplina disciplina){
        disciplina.setId(id);
        return disciplinaRepository.save(disciplina);
    }

    public Matricula matricular(Aluno aluno, Disciplina disciplina){
        Matricula matricula = new Matricula();
        matricula.setAluno(aluno);
        matricula.setDisciplina(disciplina);
        return matriculaRepository.save(matricula);
    }

    public List<Matricula> listarMatriculas(){
        return matriculaRepository.findAll();
    }

    public void excluirMatricula(Long id){
        matriculaRepository.deleteById(id);
    }

}
