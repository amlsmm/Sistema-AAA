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

export interface CadastrarDisciplinaProps {
  show: boolean;
  setShow(enabled: boolean): void;
}

type Inputs = {
  nome: string;
  codigo: string;
  departamento: string;
  professor: string;
};

const CadastrarDisciplina: React.FC<CadastrarDisciplinaProps> = ({
  show,
  setShow,
}) => {
  const [departamento, setDepartamento] = useState("");
  const [professor, setProfessor] = useState("");

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
                title="Cadastrar Disciplina"
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
                  label="Código:"
                  id="codigo"
                  type="text"
                  placeholder="Digite o codigo"
                  errors={errors.codigo?.message}
                  {...register("codigo", {
                    required: "Obrigatório",
                  })}
                />
                <Select
                  label="Departamento:"
                  placeholder="Selecione o departamento"
                  options={[
                    { id: "DCC", value: "Departamento de Ciência da Computação" },
                    { id: "DCE", value: "Departamento de Ciências Exatas" },
                  ]}
                  onClick={(e) => {
                    setValue("departamento", e.currentTarget.id, { shouldValidate: true });
                    setDepartamento(e.currentTarget.id);
                  }}
                  selected={departamento}
                  errors={errors.departamento?.message}
                />
                <Select
                  label="Professor:"
                  placeholder="Selecione o professor"
                  options={[
                    { id: "001", value: "Jose Maria" },
                    { id: "002", value: "Maria Jose" },
                  ]}
                  onClick={(e) => {
                    setValue("professor", e.currentTarget.id, { shouldValidate: true });
                    setProfessor(e.currentTarget.id);
                  }}
                  selected={professor}
                  errors={errors.professor?.message}
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
