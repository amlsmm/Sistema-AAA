import React, { FormEvent, useState } from "react";
// components
import Button from "@components/elements/button";
import Input from "@components/form/input";
// modal
import FooterModal from "../footer";
import HeaderModal from "../header";
import Modal from "../modal";

export interface CadastrarCursoProps {
  show: boolean;
  setShow(enabled: boolean): void;
}

const CadastrarCurso: React.FC<CadastrarCursoProps> = ({
  show,
  setShow,
}) => {
  const [nome, setNome] = useState("");
  const [departamento, setDepartamento] = useState('');
  const [periodo, setPeriodo] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(nome, departamento, periodo);

    setShow(false);
  }

  return (
    <>
      <Button
        variant="primary"
        onClick={() => setShow(true)}
      >
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
                <Input
                  label="Departamento:"
                  id="depto"
                  type="text"
                  placeholder="Digite o departamento"
                  value={departamento}
                  onChange={(e) => setDepartamento(e.target.value)}
                />
                <Input
                  label="Periodo:"
                  id="periodo"
                  type="text"
                  placeholder="Digite a periodo"
                  value={periodo}
                  onChange={(e) => setPeriodo(e.target.value)}
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
