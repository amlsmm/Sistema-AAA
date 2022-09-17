import React, { FormEvent, useState } from "react";
// components
import Button from "@components/elements/button";
import Input from "@components/form/input";
// modal
import FooterModal from "../footer";
import HeaderModal from "../header";
import Modal from "../modal";

import moment from "moment";

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

  function resetForm() {
    setNome("");
    setSigla("");
  }

  function handleOpen() {
    resetForm();
    setShow(true);
  }

  const addDepartamento = async (nome: string, sigla: string) => {
    let response = await fetch(`http://localhost:8080/api/departamento/cadastrar`, {
       method: 'POST',
       body: JSON.stringify({
          nome: nome,
          sigla: sigla,
          dataCriacao: moment().format("YYYY-MM-DD")
       }),
       headers: {
          'Content-type': 'application/json; charset=UTF-8',
       },
    })
    .then((response) => response.json())
    .then((data) => {
      setNome('');
      setSigla('');
      window.location.reload();
    })
    .catch((err) => {
      console.log(err.message);
    })
 };

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    addDepartamento(nome, sigla);

    setShow(false);
  }

  return (
    <>
      <Button
        variant="primary"
        onClick={handleOpen}
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
