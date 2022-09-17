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

export interface CadastrarCursoProps {
  show: boolean;
  setShow(enabled: boolean): void;
}

const CadastrarCurso: React.FC<CadastrarCursoProps> = ({ show, setShow }) => {
  const [nome, setNome] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [periodo, setPeriodo] = useState("");
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
    setDepartamento("");
    setPeriodo("");
  }

  function handleOpen() {
    resetForm();
    setShow(true);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    addCurso(nome, departamento, periodo);

    setShow(false);
  }

  const addCurso = async (nome: string, id_departamento: string, periodo: string) => {
    var departamento = deptos.filter((obj: any) => {
      return obj.id == id_departamento
    })
    departamento = departamento[0];
    let response = await fetch(`http://localhost:8080/api/curso/cadastrar`, {
       method: 'POST',
       body: JSON.stringify({
          nome: nome,
          periodos: periodo,
          departamento: departamento
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
      <Button variant="primary" onClick={() => setShow(true)}>
        Cadastrar
      </Button>
      {show && (
        <>
          <Modal>
            <form onSubmit={handleSubmit}>
              <HeaderModal
                title="Cadastrar Curso"
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
                <Select
                  label="Departamento:"
                  placeholder="Selecione o departamento"
                  options={options}
                  onClick={(e) => setDepartamento(e.currentTarget.id)}
                  selected={departamento}
                />
                <Select
                  label="Periodos:"
                  placeholder="Selecione os periodos"
                  options={[
                    { id: "8", value: "8" },
                    { id: "10", value: "10" },
                  ]}
                  onClick={(e) => setPeriodo(e.currentTarget.id)}
                  selected={periodo}
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

export default CadastrarCurso;
