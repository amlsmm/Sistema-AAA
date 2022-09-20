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

export interface AddEditDisciplinaProps {
  editData?: Inputs;
}

type Inputs = {
  id?: number;
  nome: string;
  codigo: string;
  departamento: string;
  professor: string;
};

const AddEditDisciplina: React.FC<AddEditDisciplinaProps> = ({
  editData
}) => {
  const [show, setShow] = useState(false);

  function handleEditOpen() {
    setShow(true);
    console.log(editData);

    setValue("nome", editData?.nome ? editData.nome : "");
    setValue("codigo", editData?.codigo ? editData.codigo : "");
    setDepartamento(editData?.departamento ? editData.departamento : "");
    setProfessor(editData?.professor ? editData.professor : "");
  }

  function handleClose() {
    setShow(false);
    reset();
  }

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

  const schema = yup.object({
    nome: yup.string().required("Campo obrigatório"),
    codigo: yup.string().required("Campo obrigatório"),
    departamento: yup.string().required("Campo obrigatório"),
    professor: yup.string().required("Campo obrigatório"),
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

  const onSubmit: SubmitHandler<Inputs> = async(data) => {
    console.log(data);
    
    editData !== undefined
    ? editDisciplina(Number(editData), data)
    : addDisciplina(data);

    setShow(false);
    reset();
  };

  const addDisciplina = async (data: Inputs) => {
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
  };

  const editDisciplina = async (id: number, data: Inputs) => {
    // editar
    var departamento = deptos.filter((obj: any) => {
      return obj.id == data.departamento;
    });
    departamento = departamento[0];

    var professor = deptos.filter((obj: any) => {
      return obj.id == data.professor;
    });
    professor = professor[0];

    console.log(departamento, data.nome, data.codigo, professor, id)

    let response = await fetch(`http://localhost:8080/api/disciplina/editar/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        nome: data.nome,
        codigo: data.codigo,
        professor: professor,
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
                  editData !== undefined ? "Editar Disciplina" : "Cadastrar Disciplina"
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
                  label="Código:"
                  id="codigo"
                  type="text"
                  placeholder="Digite o codigo"
                  errors={errors.codigo?.message}
                  {...register("codigo")}
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

export default AddEditDisciplina;
