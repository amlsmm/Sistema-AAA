import React, { FormEvent, useState } from "react";
// components
import Button from "@components/elements/button";
import Input from "@components/form/input";
// modal
import FooterModal from "../footer";
import HeaderModal from "../header";
import Modal from "../modal";
import { Select } from "@components/form/select";

export interface CadastrarDisciplinaProps {
  show: boolean;
  setShow(enabled: boolean): void;
}

const CadastrarDisciplina: React.FC<CadastrarDisciplinaProps> = ({
  show,
  setShow,
}) => {
  const [nome, setNome] = useState("");
  const [codigo, setCodigo] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [professor, setProfessor] = useState("");

  function resetForm() {
    setNome("");
    setCodigo("");
    setDepartamento("");
    setProfessor("");
  }

  function handleOpen() {
    resetForm();
    setShow(true);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(nome, codigo, departamento, professor);

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
                title="Cadastrar Disciplina"
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
                  label="Código:"
                  id="codigo"
                  type="text"
                  placeholder="Digite o codigo"
                  value={codigo}
                  onChange={(e) => setCodigo(e.target.value)}
                />
                <Select
                  label="Departamento:"
                  placeholder="Selecione o departamento"
                  options={[
                    { id: "DCC", value: "Departamento de Ciência da Computação" },
                    { id: "DCE", value: "Departamento de Ciências Exatas" },
                  ]}
                  onClick={(e) => setDepartamento(e.currentTarget.id)}
                  selected={departamento}
                />
                <Select
                  label="Professor:"
                  placeholder="Selecione o professor"
                  options={[
                    { id: "001", value: "Jose Maria" },
                    { id: "002", value: "Maria Jose" },
                  ]}
                  onClick={(e) => setProfessor(e.currentTarget.id)}
                  selected={professor}
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

export default CadastrarDisciplina;
