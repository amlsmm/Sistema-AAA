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

export interface CadastrarProfessorProps {
  show: boolean;
  setShow(enabled: boolean): void;
}

type Inputs = {
  nome: string;
  dataNasc: string;
  departamento: string;
  salario: string;
};

const CadastrarProfessor: React.FC<CadastrarProfessorProps> = ({
  show,
  setShow,
}) => {
  const [departamento, setDepartamento] = useState("");

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
                title="Cadastrar Professor"
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
                  label="Data de Nascimento:"
                  id="dataNasc"
                  type="date"
                  placeholder="Digite a data"
                  errors={errors.dataNasc?.message}
                  {...register("dataNasc", {
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
                <Input
                  label="Salario:"
                  id="salario"
                  type="number"
                  min="0"
                  step="1"
                  placeholder="Digite o salario"
                  errors={errors.salario?.message}
                  {...register("salario", {
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

export default CadastrarProfessor;
