package com.br.backend.ProjetoFinal.services;

import java.util.List;
import java.util.Optional;

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

    public List<Departamento> listar(){
        return departamentoRepository.findAll();
    }

    public Optional<Departamento> listarPorId(Long id){
        return departamentoRepository.findById(id);
    }

    public void excluir(Long id){
        departamentoRepository.deleteById(id);
    }

}
