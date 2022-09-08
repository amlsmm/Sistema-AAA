import React, { FormEvent, useState } from "react";
// components
import Button from "@components/elements/button";
import Input from "@components/form/input";
// modal
import FooterModal from "../footer";
import HeaderModal from "../header";
import Modal from "../modal";

export interface CadastrarDepartamentoProps {
  show: boolean;
  setShow(enabled: boolean): void;
}

const CadastrarDepartamento: React.FC<CadastrarDepartamentoProps> = ({
  show,
  setShow,
}) => {
  const [nome, setNome] = useState("");
  const [sigla, setSigla] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(nome, sigla);

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
                title="Cadastrar Departamento"
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
                  label="Sigla:"
                  id="sigla"
                  type="text"
                  placeholder="Digite a sigla"
                  value={sigla}
                  onChange={(e) => setSigla(e.target.value)}
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

export default CadastrarDepartamento;
