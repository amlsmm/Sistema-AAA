package com.br.backend.ProjetoFinal;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.Date;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.br.backend.ProjetoFinal.controllers.DepartamentoController;
import com.br.backend.ProjetoFinal.entities.Departamento;
import com.br.backend.ProjetoFinal.services.DepartamentoService;


@SpringBootTest
class ProjetoFinalApplicationTests {

	@Autowired
	private DepartamentoService departamentoService;

	@Autowired
	private DepartamentoController departamentoController;

	/*
	 * Esse teste unitário cadastra um objeto "departamento" e chama método cadastrar para verificar
	 * se o objeto cadastrado no banco possui os mesmos valores que o objeto criado
	 */
	@Test
	void testeCriarDepartamento(){
		Departamento departamentoTeste = new Departamento();
		departamentoTeste.setDataCriacao(new Date());
		departamentoTeste.setNome("Departamento Teste");
		departamentoTeste.setSigla("DTT");
		Departamento novoDepartamento = departamentoService.cadastrar(departamentoTeste);
		assertEquals(departamentoTeste, novoDepartamento);
	}

	/*
	 * Esse teste unitário busca a lista de departamentos e verifica se o nome do primeiro
	 * departamento Cadastrado é Departamento Engenharia e do segundo é Departamento Teste
	 */
	@Test
	void testeListarDepartamentos() {
		List<Departamento> departamentoBuscado = departamentoService.listar();
		assertEquals("Departamento Engenharia", departamentoBuscado.get(0).getNome());
		assertEquals("Departamento Teste", departamentoBuscado.get(departamentoBuscado.size()-1).getNome());

	}

	/*
	 * Esse teste unitário verifica se os codigos HTTP de resposta à requisição para excluir o 
	 * Departamento com o id especificado são os mesmos.
	 */
	@Test
	void testeRemoverDepartamento() {
		ResponseEntity<HttpStatus> respostaAceita = new ResponseEntity<>(HttpStatus.ACCEPTED);
		ResponseEntity<HttpStatus> resposta = departamentoController.excluirDepartamento(Long.valueOf(15));
		assertEquals(respostaAceita, resposta);
	}

}
