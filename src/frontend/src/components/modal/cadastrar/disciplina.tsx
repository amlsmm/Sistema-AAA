import React, { FormEvent, useState } from "react";
// components
import Button from "@components/elements/button";
import Input from "@components/form/input";
// modal
import FooterModal from "../footer";
import HeaderModal from "../header";
import Modal from "../modal";

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

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(nome, codigo, departamento, professor);

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
                <Input
                  label="Departamento:"
                  id="depto"
                  type="text"
                  placeholder="Digite o departamento"
                  value={departamento}
                  onChange={(e) => setDepartamento(e.target.value)}
                />
                <Input
                  label="Professor:"
                  id="professor"
                  type="text"
                  placeholder="Digite o nome do professor"
                  value={professor}
                  onChange={(e) => setProfessor(e.target.value)}
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
