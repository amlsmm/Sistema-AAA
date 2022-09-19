import React, { FormEvent, useEffect, useState } from "react";
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
  const [deptos, setDeptos] = useState<any>([]);

  let options = deptos.map(function (depto: any) {
    return { value: depto.nome.toString(), id: depto.id };
  });

  useEffect(() => {
    fetch("http://localhost:8080/api/departamento/listar")
      .then((response) => response.json())
      .then((data) => {
        setDeptos(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

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

    var departamento = deptos.filter((obj: any) => {
      return obj.id == data.departamento;
    });
    departamento = departamento[0];
    let response = await fetch(`http://localhost:8080/api/curso/cadastrar`, {
      method: "POST",
      body: JSON.stringify({
        nome: data.nome,
        periodos: data.periodo,
        departamento: departamento,
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
                  options={options}
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
                    { id: "8", value: "8" },
                    { id: "10", value: "10" },
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
