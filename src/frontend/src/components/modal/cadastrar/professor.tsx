import React, { FormEvent, useState } from "react";
// components
import Button from "@components/elements/button";
import Input from "@components/form/input";
// modal
import FooterModal from "../footer";
import HeaderModal from "../header";
import Modal from "../modal";
import { Select } from "@components/form/select";

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

    setShow(false);
  }

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
