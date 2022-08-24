package com.br.backend.ProjetoFinal.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.backend.ProjetoFinal.entities.Departamento;
import com.br.backend.ProjetoFinal.repositories.DepartamentoRepository;

@Service
public class DepartamentoService{
    
    @Autowired
    private DepartamentoRepository departamentoRepository;

    public Departamento cadastrar(Departamento novoDepartamento){
        return departamentoRepository.save(novoDepartamento);
    }

}
