package com.br.backend.ProjetoFinal.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
        System.out.println(novoDepartamento.toString());
        return ResponseEntity.ok().body(departamentoService.cadastrar(novoDepartamento));
    }

}
