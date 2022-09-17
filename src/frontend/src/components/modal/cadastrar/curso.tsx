import React, { FormEvent, useState } from "react";
// components
import Button from "@components/elements/button";
import Input from "@components/form/input";
// modal
import FooterModal from "../footer";
import HeaderModal from "../header";
import Modal from "../modal";
import { Select } from "@components/form/select";

export interface CadastrarCursoProps {
  show: boolean;
  setShow(enabled: boolean): void;
}

const CadastrarCurso: React.FC<CadastrarCursoProps> = ({ show, setShow }) => {
  const [nome, setNome] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [periodo, setPeriodo] = useState("");

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
    console.log(nome, departamento, periodo);

    setShow(false);
  }

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
                  options={[
                    {
                      id: "DCC",
                      value: "Departamento de Ciência da Computação",
                    },
                    { id: "DCE", value: "Departamento de Ciências Exatas" },
                  ]}
                  onClick={(e) => setDepartamento(e.currentTarget.id)}
                  selected={departamento}
                />
                <Select
                  label="Periodos:"
                  placeholder="Selecione os periodos"
                  options={[
                    { id: "20221", value: "2021/1" },
                    { id: "20222", value: "2021/2" },
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
