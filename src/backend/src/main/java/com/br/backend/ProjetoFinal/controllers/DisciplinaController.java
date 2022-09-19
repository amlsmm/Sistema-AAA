package com.br.backend.ProjetoFinal.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.backend.ProjetoFinal.entities.Aluno;
import com.br.backend.ProjetoFinal.entities.Disciplina;
import com.br.backend.ProjetoFinal.entities.Matricula;
import com.br.backend.ProjetoFinal.services.DisciplinaService;

@RestController
@RequestMapping(path = "/api/disciplina")
public class DisciplinaController {

    @Autowired
    private DisciplinaService disciplinaService;
    
    @PostMapping(path = "/cadastrar")
    public ResponseEntity<Disciplina> cadastrarDisciplinas(@RequestBody Disciplina novaDisciplina){
        return ResponseEntity.ok().body(disciplinaService.cadastrar(novaDisciplina));
    }

    @GetMapping(path = "/listar")
    public ResponseEntity<List<Disciplina>> listarDisciplinas(){
        List<Disciplina> disciplinas = disciplinaService.listar();
        return ResponseEntity.ok().body(disciplinas);
    }

    @GetMapping(path = "/listar/{id}")
    public ResponseEntity<Optional<Disciplina>> listarPorId(@PathVariable Long id){
        return ResponseEntity.ok().body(disciplinaService.listarPorId(id));
    }

    @DeleteMapping(path = "/excluir/{id}")
    public ResponseEntity<HttpStatus> excluirDisciplina(@PathVariable Long id){
        try{
            disciplinaService.excluir(id);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        }catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(path = "/matricular")
    public ResponseEntity<Matricula> matricular(@RequestBody Disciplina disciplina,
                                                @RequestBody Aluno aluno){
        return ResponseEntity.ok().body(disciplinaService.matricular(aluno, disciplina));
    }

}
