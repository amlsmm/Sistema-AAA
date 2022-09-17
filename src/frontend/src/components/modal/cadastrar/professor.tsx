import React, { FormEvent, useEffect, useState } from "react";
// components
import Button from "@components/elements/button";
import Input from "@components/form/input";
// modal
import FooterModal from "../footer";
import HeaderModal from "../header";
import Modal from "../modal";
import { Select } from "@components/form/select";
import moment from "moment";

export interface CadastrarProfessorProps {
  show: boolean;
  setShow(enabled: boolean): void;
}

const CadastrarProfessor: React.FC<CadastrarProfessorProps> = ({
  show,
  setShow,
}) => {
  const [nome, setNome] = useState("");
  const [dataNasc, setDataNasc] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [salario, setSalario] = useState("");
  const [deptos, setDeptos] = useState<any>([]);

  let options = deptos.map(function (depto: any) {
    return { value: depto.nome.toString(), id: depto.id };
  })
  

  useEffect(() => {
    fetch("http://localhost:8080/api/departamento/listar")
      .then((response) => response.json())
      .then((data) => {
        setDeptos(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  function resetForm() {
    setNome("");
    setDataNasc("");
    setDepartamento("");
    setSalario("");
  }

  function handleOpen() {
    resetForm();
    setShow(true);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(nome, dataNasc, departamento, salario);
    addProfessor(nome, dataNasc, departamento, salario)
    setShow(false);
  }

  const addProfessor = async (nome: string, data: string, id_departamento: string, salario: string) => {
    console.log(data)
    const dataNasc = moment(data);
    var departamento = deptos.filter((obj: any) => {
      return obj.id == id_departamento
    })
    departamento = departamento[0];
    let response = await fetch(`http://localhost:8080/api/professor/cadastrar`, {
       method: 'POST',
       body: JSON.stringify({
          nome: nome,
          dataNasc: dataNasc.format("YYYY-MM-DD"),
          departamento: departamento,
          salario: salario
       }),
       headers: {
          'Content-type': 'application/json; charset=UTF-8',
       },
    })
    .then((response) => response.json())
    .then((data) => {
    window.location.reload();
    })
    .catch((err) => {
      console.log(err.message);
    })
 };

  return (
    <>
      <Button variant="primary" onClick={handleOpen}>
        Cadastrar
      </Button>
      {show && (
        <>
          <Modal>
            <form onSubmit={handleSubmit}>
              <HeaderModal
                title="Cadastrar Professor"
                setClose={() => setShow(false)}
              />
              <div className="grid gap-3 px-4 py-6">
                <Input
                  label="Nome:"
                  id="nome"
                  type="text"
                  placeholder="Digite o nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
                <Input
                  label="Data de Nascimento:"
                  id="dataNasc"
                  type="date"
                  placeholder="Digite a data"
                  value={dataNasc}
                  onChange={(e) => setDataNasc(e.target.value)}
                />
                <Select
                  label="Departamento:"
                  placeholder="Selecione o departamento"
                  options={options}
                  onClick={(e) => setDepartamento(e.currentTarget.id)}
                  selected={departamento}
                />
                <Input
                  label="Salario:"
                  id="salario"
                  type="number"
                  min="0"
                  step="1"
                  placeholder="Digite o salario"
                  value={salario}
                  onChange={(e) => setSalario(e.target.value)}
                />
              </div>
              <FooterModal
                submit="Salvar"
                variant="success"
                setClose={() => setShow(false)}
              />
            </form>
          </Modal>
        </>
      )}
    </>
  );
};

export default CadastrarProfessor;
