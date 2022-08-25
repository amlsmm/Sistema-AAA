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

import com.br.backend.ProjetoFinal.entities.Professor;
import com.br.backend.ProjetoFinal.services.ProfessorService;

@RestController
@RequestMapping(path = "/api/professor")
public class ProfessorController {
    
    @Autowired
    private ProfessorService professorService;

    @PostMapping(path = "/cadastrar")
    public ResponseEntity<Professor> cadastrarProfessor(@RequestBody Professor novoProfessor){
        return ResponseEntity.ok().body(professorService.cadastrar(novoProfessor));
    }

    @GetMapping(path = "/listar")
    public ResponseEntity<List<Professor>> listarProfessor(){
        List<Professor> professores = professorService.listar();
        return ResponseEntity.ok().body(professores);
    }

    @GetMapping(path = "/listar/{id}")
    public ResponseEntity<Optional<Professor>> listarPorId(@PathVariable Long id){
        return ResponseEntity.ok().body(professorService.listarPorId(id));
    }

    @DeleteMapping(path = "/excluir/{id}")
    public ResponseEntity<HttpStatus> excluirProfessor(@PathVariable Long id){
        try{
            professorService.excluir(id);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        }catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
