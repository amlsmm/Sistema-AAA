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
import com.br.backend.ProjetoFinal.services.AlunoService;

@RestController
@RequestMapping(path = "/api/aluno")
public class AlunoController {
    
    @Autowired
    private AlunoService alunoService;

    @PostMapping(path = "/cadastrar")
    public ResponseEntity<Aluno> cadastrarAluno(@RequestBody Aluno novoAluno){
        return ResponseEntity.ok().body(alunoService.cadastrar(novoAluno));
    }

    @GetMapping(path = "/listar")
    public ResponseEntity<List<Aluno>> listarAluno(){
        List<Aluno> alunos = alunoService.listar();
        return ResponseEntity.ok().body(alunos);
    }

    @GetMapping(path = "/listar/{id}")
    public ResponseEntity<Optional<Aluno>> listarPorId(@PathVariable Long id){
        return ResponseEntity.ok().body(alunoService.listarPorId(id));
    }

    @DeleteMapping(path = "/excluir/{id}")
    public ResponseEntity<HttpStatus> excluirAluno(@PathVariable Long id){
        try{
            alunoService.excluir(id);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        }catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
