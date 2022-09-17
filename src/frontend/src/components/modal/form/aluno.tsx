import React, { FormEvent, useState } from "react";
// components
import Button from "@components/elements/button";
import Input from "@components/form/input";
// modal
import FooterModal from "../footer";
import HeaderModal from "../header";
import Modal from "../modal";
import { Select } from "@components/form/select";

export interface CadastrarAlunoProps {
  show: boolean;
  setShow(enabled: boolean): void;
}

const CadastrarAluno: React.FC<CadastrarAlunoProps> = ({ show, setShow }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [matricula, setMatricula] = useState("");
  const [curso, setCurso] = useState("");

  function resetForm() {
    setNome("");
    setEmail("");
    setMatricula("");
    setCurso("");
  }

  function handleOpen() {
    resetForm();
    setShow(true);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(nome, email, matricula, curso);

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
                title="Cadastrar Aluno"
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
                  label="Email:"
                  id="email"
                  type="email"
                  placeholder="Digite o email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  label="Matricula:"
                  id="matricula"
                  type="text"
                  placeholder="Digite a matricula"
                  value={matricula}
                  onChange={(e) => setMatricula(e.target.value)}
                />
                <Select
                  label="Curso:"
                  placeholder="Selecione o curso"
                  options={[
                    { id: "CC", value: "Ciencia da Computação" },
                    { id: "SI", value: "Sistemas de Informação" },
                  ]}
                  onClick={(e) => setCurso(e.currentTarget.id)}
                  selected={curso}
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

export default CadastrarAluno;
