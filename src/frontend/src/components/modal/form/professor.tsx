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
import moment from "moment";
import { HiOutlinePencilAlt } from "react-icons/hi";

export interface AddEditProfessorProps {
  editData?: Inputs;
}

type Inputs = {
  id?: number;
  nome: string;
  dataNasc: string;
  departamento: string;
  salario: string;
};

const AddEditProfessor: React.FC<AddEditProfessorProps> = ({
  editData
}) => {
  const [show, setShow] = useState(false);

  function handleEditOpen() {
    setShow(true);
    console.log(editData);

    setValue("nome", editData?.nome ? editData.nome : "");
    setValue("dataNasc", editData?.dataNasc ? editData.dataNasc : "");
    setDepartamento(editData?.departamento ? editData.departamento : "");
    setValue("salario", editData?.salario ? editData.salario : "");
  }

  function handleClose() {
    setShow(false);
    reset();
  }

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
  
  const schema = yup.object({
    nome: yup.string().required("Campo obrigatório"),
    dataNasc: yup.string().required("Campo obrigatório"),
    departamento: yup.string().required("Campo obrigatório"),
    salario: yup.string().required("Campo obrigatório"),
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
      ? editProfessor(editData.id ? editData.id : 0, data)
      : addProfessor(data);

    setShow(false);
    reset();
  };

  const addProfessor = async (data: Inputs) => {
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
          departamento: departamento,
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
  };

  const editProfessor = async (id: number, data: Inputs) => {
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
                  editData !== undefined ? "Editar Professor" : "Cadastrar Professor"
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
                  label="Data de Nascimento:"
                  id="dataNasc"
                  type="date"
                  placeholder="Digite a data"
                  errors={errors.dataNasc?.message}
                  {...register("dataNasc")}
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
                  {...register("salario")}
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

export default AddEditProfessor;
