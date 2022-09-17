import React, { FormEvent, useState } from "react";
// components
import Button from "@components/elements/button";
import Input from "@components/form/input";
// modal
import FooterModal from "../footer";
import HeaderModal from "../header";
import Modal from "../modal";
import moment from "moment";

export interface CadastrarAlunoProps {
  show: boolean;
  setShow(enabled: boolean): void;
}

const CadastrarAluno: React.FC<CadastrarAlunoProps> = ({
  show,
  setShow,
}) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [matricula, setMatricula] = useState("");

  const addAluno = async (nome: string, sigla: string, matricula: string) => {
    let response = await fetch(`http://localhost:8080/api/aluno/cadastrar`, {
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
      setEmail('');
      setMatricula('');
      window.location.reload();
    })
    .catch((err) => {
      console.log(err.message);
    })
 };

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(nome, email, matricula);
    addAluno(nome, email, matricula);

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
