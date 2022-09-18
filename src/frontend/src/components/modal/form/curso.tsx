import React, { FormEvent, useState } from "react";
// components
import Button from "@components/elements/button";
import Input from "@components/form/input";
// modal
import FooterModal from "../footer";
import HeaderModal from "../header";
import Modal from "../modal";
import { Select } from "@components/form/select";
import { useForm, SubmitHandler } from "react-hook-form";

export interface CadastrarCursoProps {
  show: boolean;
  setShow(enabled: boolean): void;
}

type Inputs = {
  nome: string;
  departamento: string;
  periodo: string;
};

const CadastrarCurso: React.FC<CadastrarCursoProps> = ({ show, setShow }) => {
  const [departamento, setDepartamento] = useState("");
  const [periodo, setPeriodo] = useState("");

  function resetForm() {
    setDepartamento("");
    setPeriodo("");
  }

  function handleOpen() {
    resetForm();
    setShow(true);
  }

  const {
    setValue,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
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
                title="Cadastrar Curso"
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
                  onClick={(e) => {
                    setValue("departamento", e.currentTarget.id);
                    setDepartamento(e.currentTarget.id);
                  }}
                  selected={departamento}
                  errors={errors.departamento?.message}
                />
                <Select
                  label="Periodo:"
                  placeholder="Selecione o periodo"
                  options={[
                    { id: "20221", value: "2021/1" },
                    { id: "20222", value: "2021/2" },
                  ]}
                  onClick={(e) => {
                    setValue("periodo", e.currentTarget.id);
                    setPeriodo(e.currentTarget.id);
                  }}
                  selected={periodo}
                  errors={errors.periodo?.message}
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
