package com.br.backend.ProjetoFinal.controllers;

import java.util.List;
import java.util.Optional;

import org.apache.catalina.connector.Response;
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

import com.br.backend.ProjetoFinal.entities.Curso;
import com.br.backend.ProjetoFinal.services.CursoService;

@RestController
@RequestMapping(path = "/api/curso")
public class CursoController {
    
    @Autowired
    private CursoService cursoService;

    @PostMapping(path = "/cadastrar" )
    public ResponseEntity<Curso> cadastrarCurso(@RequestBody Curso novoCurso){
        System.out.println(novoCurso);
        return ResponseEntity.ok().body(cursoService.cadastrar(novoCurso));
    }

    @GetMapping(path = "/listar")
    public ResponseEntity<List<Curso>> listarCurso(){
        List<Curso> cursos = cursoService.listar();
        return ResponseEntity.ok().body(cursos);
    }

    @GetMapping(path = "/listar/{id}")
    public ResponseEntity<Optional<Curso>> listarPorId(@PathVariable Long id){
        return ResponseEntity.ok().body(cursoService.listarPorId(id));
    }

    @DeleteMapping(path = "/excluir/{id}")
    public ResponseEntity<HttpStatus> excluirCurso(@PathVariable Long id){
        try{
            cursoService.excluir(id);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        }catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
