import type { NextPage } from "next";
import { useEffect, useState } from "react";
import {
  HiOutlinePencilAlt,
  HiOutlineTrash,
  HiOutlineUserGroup,
} from "react-icons/hi";
/* templates */
import { Meta } from "@templates/meta";
import { Template } from "@templates/template";
/* utils */
import { paginationComponentOptions } from "@utils/table";
/* components */
import DataTable from "react-data-table-component";
import AddEditAluno from "@components/modal/form/aluno";
import { EmptyTable } from "@components/empty/table";
import Excluir from "@components/modal/delete";
import Navbar from "@components/navigation/navbar";
import { NavbarAdminLinks } from "@utils/data";

/* export const alunoData = [
  {
    id: 1,
    matricula: "201920584",
    nome: "Sandra Carvalho",
    curso: "Curso",
    email: "sandra.carvalho@estudante.ufla.br",
  },
  {
    id: 2,
    matricula: "201820584",
    nome: "Marcos Vilela",
    curso: "Curso",
    email: "marcos.vilela@estudante.ufla.br",
  },
  {
    id: 3,
    matricula: "201929584",
    nome: "Camila Rodrigues",
    curso: "Curso",
    email: "camila.rodrigues@estudante.ufla.br",
  },
]; */

const deleteAluno = async (id: number) => {
  await fetch(`http://localhost:8080/api/aluno/excluir/${id}`, {
    method: "DELETE",
  }).then((response) => {
    console.log(response);
    window.location.reload();
  });
};

const Home: NextPage = () => {
  const [alunos, setAlunos] = useState([]);

  const columns = [
    {
      id: "matricula",
      name: "Matrícula",
      selector: (row: any) => row.matricula,
      sortable: true,
      width: "15%",
    },
    {
      id: "curso",
      name: "Curso",
      selector: (row: any) => row.curso,
      sortable: true,
      width: "25%",
    },
    {
      id: "nome",
      name: "Nome",
      selector: (row: any) => row.nome,
      sortable: true,
      width: "30%",
    },
    {
      id: "email",
      name: "E-mail",
      selector: (row: any) => row.email,
      sortable: true,
    },
    {
      id: "acoes",
      sortable: false,
      right: true,
      grow: 0,
      cell: (props: any) => (
        <div className="flex gap-2">
          <Excluir
            title="Excluir Aluno"
            description="Tem certeza que deseja excluir esse aluno?"
            onClick={() => deleteAluno(props.id)}
          />
          <AddEditAluno editData={props} />
        </div>
      ),
    },
  ];

  useEffect(() => {
    fetch("http://localhost:8080/api/aluno/listar")
      .then((response) => response.json())
      .then((data) => {
        setAlunos(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <Template
      meta={
        <Meta
          title="Sistema Escolar"
          description="Administre suas funcionalidades"
          image="/img/banner/logo.png"
          imageAlt="Sistema Escolar"
        />
      }
    >
      <Navbar links={NavbarAdminLinks} />
      <div className="container py-16">
        <div className="flex justify-between items-center">
          <h2 className="text-gray-700">Alunos</h2>
          <AddEditAluno />
        </div>

        <div className="mt-8 overflow-x-auto animate-fade-in-up text-gray-700">
          <DataTable
            columns={columns}
            data={alunos}
            pagination
            paginationComponentOptions={paginationComponentOptions}
            highlightOnHover
            pointerOnHover
            noDataComponent={
              <EmptyTable
                title="Não há alunos cadastrados :("
                description="Cadastre um aluno no botão Cadastrar!"
                icon={HiOutlineUserGroup}
              />
            }
          />
        </div>
      </div>
    </Template>
  );
};

export default Home;
