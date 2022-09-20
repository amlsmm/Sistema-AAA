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

export interface AddEditCursoProps {
  editData?: Inputs;
}

type Inputs = {
  id?: number;
  nome: string;
  departamento: string;
  periodo: string;
};

const AddEditCurso: React.FC<AddEditCursoProps> = ({ editData }) => {
  const [show, setShow] = useState(false);

  function handleEditOpen() {
    setShow(true);
    console.log(editData);

    setValue("nome", editData?.nome ? editData.nome : "");
    setDepartamento(editData?.departamento ? editData.departamento : "");
    setPeriodo(editData?.periodo ? editData.periodo : "");
  }

  function handleClose() {
    setShow(false);
    reset();
  }

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

  const schema = yup.object({
    nome: yup.string().required("Campo obrigatório"),
    departamento: yup.string().required("Campo obrigatório"),
    periodo: yup.string().required("Campo obrigatório"),
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
      ? editCurso(editData.id ? editData.id : 0, data)
      : addCurso(data);

    setShow(false);
    reset();
  };

  const addCurso = async (data: Inputs) => {
    var departamento = deptos.filter((obj: any) => {
      return obj.id == data.departamento;
    });
    departamento = departamento[0];
    let response = await fetch(`http://localhost:8080/api/curso/cadastrar`, {
      method: "POST",
      body: JSON.stringify({
        nome: data.nome,
        departamento: departamento,
        periodos: data.periodo,
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

  const editCurso = async (id: number, data: Inputs) => {
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
                  editData !== undefined ? "Editar Curso" : "Cadastrar Curso"
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

export default AddEditCurso;
