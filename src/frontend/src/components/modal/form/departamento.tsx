import React, { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// components
import Button from "@components/elements/button";
import Input from "@components/form/input";
// modal
import FooterModal from "../footer";
import HeaderModal from "../header";
import Modal from "../modal";

import { useForm, SubmitHandler } from "react-hook-form";
import moment from "moment";
import { HiOutlinePencilAlt } from "react-icons/hi";

export interface AddEditDepartamentoProps {
  editData?: Inputs;
}

type Inputs = {
  id?: number;
  nome: string;
  sigla: string;
};

const AddEditDepartamento: React.FC<AddEditDepartamentoProps> = ({
  editData
}) => {
  const [show, setShow] = useState(false);

  function handleEditOpen() {
    setShow(true);
    console.log(editData);

    setValue("nome", editData?.nome ? editData.nome : "");
    setValue("sigla", editData?.sigla ? editData.sigla : "");
  }

  function handleClose() {
    setShow(false);
    reset();
  }

  const schema = yup.object({
    nome: yup.string().required("Campo obrigatório"),
    sigla: yup.string().required("Campo obrigatório"),
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
      ? editDepartamento(editData.id ? editData.id : 0, data)
      : addDepartamento(data);
    
    reset();
    setShow(false);
  };

  const addDepartamento = async (data: Inputs) => {
    let response = await fetch(
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
      .then((data) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const editDepartamento = async (id: number, data: Inputs) => {
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
                  editData !== undefined ? "Editar Departamento" : "Cadastrar Departamento"
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
                  label="Sigla:"
                  id="sigla"
                  type="text"
                  placeholder="Digite a sigla"
                  errors={errors.sigla?.message}
                  {...register("sigla")}
                />
              </div>
              <FooterModal
                submit={editData !== undefined ? "Editar" : "Salvar"}
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

export default AddEditDepartamento;
