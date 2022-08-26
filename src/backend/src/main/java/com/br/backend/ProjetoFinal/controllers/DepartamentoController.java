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

import com.br.backend.ProjetoFinal.entities.Departamento;
import com.br.backend.ProjetoFinal.services.DepartamentoService;

@RestController
@RequestMapping(path = "/api/departamento")
public class DepartamentoController {

    @Autowired
    private DepartamentoService departamentoService;
    
    @PostMapping(path = "/cadastrar")
    public ResponseEntity<Departamento> cadastrarDepartamento(@RequestBody Departamento novoDepartamento){
        return ResponseEntity.ok().body(departamentoService.cadastrar(novoDepartamento));
    }

    @GetMapping(path = "/listar")
    public ResponseEntity<List<Departamento>> listarDepartamentos(){
        List<Departamento> departamentos = departamentoService.listar();
        return ResponseEntity.ok().body(departamentos);
    }

    @GetMapping(path = "/listar/{id}")
    public ResponseEntity<Optional<Departamento>> listarPorId(@PathVariable Long id){
        return ResponseEntity.ok().body(departamentoService.listarPorId(id));
    }

    @DeleteMapping(path = "/excluir/{id}")
    public ResponseEntity<HttpStatus> excluirDepartamento(@PathVariable Long id){
        try{
            departamentoService.excluir(id);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        }catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        
    }

}
