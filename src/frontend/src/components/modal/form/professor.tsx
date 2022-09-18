import React, { useEffect, useState } from "react";
// components
import Button from "@components/elements/button";
import Input from "@components/form/input";
// modal
import FooterModal from "../footer";
import HeaderModal from "../header";
import Modal from "../modal";
import { Select } from "@components/form/select";
import { useForm, SubmitHandler } from "react-hook-form";
import moment from "moment";

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

    const dataNasc = moment(data.dataNasc);

    var departamento = deptos.filter((obj: any) => {
      return obj.id == data.departamento;
    });

    departamento = departamento[0];
    let response = await fetch(
      `http://localhost:8080/api/professor/cadastrar`,
      {
        method: "POST",
        body: JSON.stringify({
          nome: data.nome,
          dataNasc: dataNasc.format("YYYY-MM-DD"),
          departamento: data.departamento,
          salario: data.salario,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
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

  const addProfessor = async (
    nome: string,
    data: string,
    id_departamento: string,
    salario: string
  ) => {
    console.log(data);
    const dataNasc = moment(data);
    var departamento = deptos.filter((obj: any) => {
      return obj.id == id_departamento;
    });
    departamento = departamento[0];
    let response = await fetch(
      `http://localhost:8080/api/professor/cadastrar`,
      {
        method: "POST",
        body: JSON.stringify({
          nome: nome,
          dataNasc: dataNasc.format("YYYY-MM-DD"),
          departamento: departamento,
          salario: salario,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });
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
                  options={options}
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
