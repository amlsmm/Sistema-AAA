import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// components
import Button from "@components/elements/button";
import Input from "@components/form/input";
// modal
import FooterModal from "../footer";
import HeaderModal from "../header";
import Modal from "../modal";
import { Select } from "@components/form/select";
import { useForm, SubmitHandler } from "react-hook-form";
import { HiOutlinePencilAlt } from "react-icons/hi";

export interface AddEditAlunoProps {
  editData?: Inputs;
}

type Inputs = {
  id?: number;
  nome: string;
  email: string;
  matricula: string;
  curso: string;
};

const AddEditAluno: React.FC<AddEditAlunoProps> = ({ editData }) => {
  const [show, setShow] = useState(false);

  function handleEditOpen() {
    setShow(true);
    console.log(editData);

    setValue("nome", editData?.nome ? editData.nome : "");
    setValue("email", editData?.email ? editData.email : "");
    setValue("matricula", editData?.matricula ? editData.matricula : "");
    setCurso(editData?.curso ? editData.curso : "");
  }

  function handleClose() {
    setShow(false);
    reset();
  }

  const [curso, setCurso] = useState("");
  const [cursos, setCursos] = useState<any>([]);

  let options = cursos.map(function (curso: any) {
    return { value: curso.nome.toString(), id: curso.id };
  });

  useEffect(() => {
    fetch("http://localhost:8080/api/curso/listar")
      .then((response) => response.json())
      .then((data) => {
        setCursos(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const schema = yup.object({
    nome: yup.string().required("Campo obrigatório"),
    email: yup.string().email().required("Campo obrigatório"),
    matricula: yup.string().required("Campo obrigatório"),
    curso: yup.string().required("Campo obrigatório"),
  });

  const {
    setValue,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);

    editData !== undefined
      ? editAluno(editData.id ? editData.id : 0, data)
      : addAluno(data);

    setShow(false);
    reset();
  };

  const addAluno = async (data: Inputs) => {
    var curso = cursos.filter((obj: any) => {
      return obj.id == data.curso;
    });

    curso = curso[0];

    let response = await fetch(`http://localhost:8080/api/aluno/cadastrar`, {
      method: "POST",
      body: JSON.stringify({
        nome: data.nome,
        email: data.email,
        matricula: data.matricula,
        curso: curso,
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
  };

  const editAluno = async (id: number, data: Inputs) => {
    // editar
  };

  return (
    <>
      {editData !== undefined ? (
        <button
          type="button"
          className="text-primary p-1 hover:bg-gray-50 rounded-full transition duration-200"
          onClick={handleEditOpen}
        >
          <HiOutlinePencilAlt size={18} />
        </button>
      ) : (
        <Button variant="primary" onClick={() => setShow(true)}>
          Cadastrar
        </Button>
      )}
      {show && (
        <>
          <Modal>
            <form onSubmit={handleSubmit(onSubmit)}>
              <HeaderModal
                title={
                  editData !== undefined ? "Editar Aluno" : "Cadastrar Aluno"
                }
                setClose={handleClose}
              />
              <div className="grid gap-3 px-4 py-6">
                <Input
                  label="Nome:"
                  id="nome"
                  type="text"
                  placeholder="Digite o nome"
                  errors={errors.nome?.message}
                  {...register("nome")}
                />
                <Input
                  label="Email:"
                  id="email"
                  type="email"
                  placeholder="Digite o email"
                  errors={errors.email?.message}
                  {...register("email")}
                />
                <Input
                  label="Matricula:"
                  id="matricula"
                  type="text"
                  placeholder="Digite a matricula"
                  errors={errors.matricula?.message}
                  {...register("matricula")}
                />
                <Select
                  label="Curso:"
                  placeholder="Selecione o curso"
                  options={options}
                  onClick={(e) => {
                    setValue("curso", e.currentTarget.id);
                    setCurso(e.currentTarget.id);
                  }}
                  selected={curso}
                  errors={errors.curso?.message}
                />
              </div>
              <FooterModal
                submit={editData !== undefined ? "Editar" : "Cadastrar"}
                variant={editData !== undefined ? "primary" : "success"}
                setClose={handleClose}
              />
            </form>
          </Modal>
        </>
      )}
    </>
  );
};

export default AddEditAluno;
