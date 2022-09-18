import React, { FormEvent, useState } from "react";
// components
import Button from "@components/elements/button";
import Input from "@components/form/input";
// modal
import FooterModal from "../footer";
import HeaderModal from "../header";
import Modal from "../modal";
import moment from "moment";
import { Select } from "@components/form/select";
import { useForm, SubmitHandler } from "react-hook-form";

export interface CadastrarAlunoProps {
  show: boolean;
  setShow(enabled: boolean): void;
}

type Inputs = {
  nome: string;
  email: string;
  matricula: string;
  curso: string;
};

const CadastrarAluno: React.FC<CadastrarAlunoProps> = ({ show, setShow }) => {
  const [curso, setCurso] = useState("");

  function handleOpen() {
    setShow(true);
  }

  const {
    setValue,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);

    let response = await fetch(`http://localhost:8080/api/aluno/cadastrar`, {
      method: "POST",
      body: JSON.stringify({
        nome: data.nome,
        email: data.email,
        matricula: data.matricula,
        dataCriacao: moment().format("YYYY-MM-DD"),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });

    setShow(false);
    reset();
  };

  return (
    <>
      <Button variant="primary" onClick={handleOpen}>
        Cadastrar
      </Button>
      {show && (
        <>
          <Modal>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                  errors={errors.nome?.message}
                  {...register("nome", {
                    required: "Obrigatório",
                  })}
                />
                <Input
                  label="Email:"
                  id="email"
                  type="email"
                  placeholder="Digite o email"
                  errors={errors.email?.message}
                  {...register("email", {
                    required: "Obrigatório",
                  })}
                />
                <Input
                  label="Matricula:"
                  id="matricula"
                  type="text"
                  placeholder="Digite a matricula"
                  errors={errors.matricula?.message}
                  {...register("matricula", {
                    required: "Obrigatório",
                  })}
                />
                <Select
                  label="Curso:"
                  placeholder="Selecione o curso"
                  options={[
                    { id: "CC", value: "Ciencia da Computação" },
                    { id: "SI", value: "Sistemas de Informação" },
                  ]}
                  onClick={(e) => {
                    setValue("curso", e.currentTarget.id);
                    setCurso(e.currentTarget.id);
                  }}
                  selected={curso}
                  errors={errors.curso?.message}
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
