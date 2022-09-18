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
  const [deptos, setDeptos] = useState<any>([]);
  const [professores, setProfessores] = useState<any>([]);

  let optionsDeptos = deptos.map(function (depto: any) {
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

  let optionsProfessores = professores.map(function (professor: any) {
    return { value: professor.nome.toString(), id: professor.id };
  });

  useEffect(() => {
    fetch("http://localhost:8080/api/professor/listar")
      .then((response) => response.json())
      .then((data) => {
        setProfessores(data);
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

  const onSubmit: SubmitHandler<Inputs> = async(data) => {
    console.log(data);

    var departamento = deptos.filter((obj: any) => {
      return obj.id == data.departamento;
    });
    departamento = departamento[0];

    var professor = deptos.filter((obj: any) => {
      return obj.id == data.professor;
    });
    professor = professor[0];

    let response = await fetch(
      `http://localhost:8080/api/disciplina/cadastrar`,
      {
        method: "POST",
        body: JSON.stringify({
          nome: data.nome,
          codigo: data.codigo,
          departamento: departamento,
          professor: professor,
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
                  options={optionsDeptos}
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
                  options={optionsProfessores}
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
