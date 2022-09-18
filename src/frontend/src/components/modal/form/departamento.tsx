import React, { FormEvent, useState } from "react";
// components
import Button from "@components/elements/button";
import Input from "@components/form/input";
// modal
import FooterModal from "../footer";
import HeaderModal from "../header";
import Modal from "../modal";

import { useForm, SubmitHandler } from "react-hook-form";
import moment from "moment";

export interface CadastrarDepartamentoProps {
  show: boolean;
  setShow(enabled: boolean): void;
}

type Inputs = {
  nome: string;
  sigla: string;
};

const CadastrarDepartamento: React.FC<CadastrarDepartamentoProps> = ({
  show,
  setShow,
}) => {
  function handleOpen() {
    setShow(true);
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    await fetch(
      `http://localhost:8080/api/departamento/cadastrar`,
      {
        method: "POST",
        body: JSON.stringify({
          nome: data.nome,
          sigla: data.sigla,
          dataCriacao: moment().format("YYYY-MM-DD"),
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((response) => response.json())
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });
      reset();
    setShow(false);
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
                title="Cadastrar Departamento"
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
                  label="Sigla:"
                  id="sigla"
                  type="text"
                  placeholder="Digite a sigla"
                  errors={errors.sigla?.message}
                  {...register("sigla", {
                    required: "Obrigatório",
                  })}
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
