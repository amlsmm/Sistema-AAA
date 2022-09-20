import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { HiOutlinePencilAlt, HiFolderOpen } from "react-icons/hi";
/* templates */
import { Meta } from "@templates/meta";
import { Template } from "@templates/template";
/* utils */
import { paginationComponentOptions } from "@utils/table";
/* components */
import DataTable from "react-data-table-component";
import CadastrarCurso from "@components/modal/form/curso";
import { EmptyTable } from "@components/empty/table";
import Excluir from "@components/modal/delete";
import Navbar from "@components/navigation/navbar";
import { NavbarAdminLinks } from "@utils/data";
import AddEditCurso from "@components/modal/form/curso";

const columns = [
  {
    id: "nome",
    name: "Nome",
    selector: (row: any) => row.nome,
    sortable: true,
    width: "40%",
  },
  {
    id: "depto",
    name: "Departamento",
    selector: (row: any) => row.departamento,
    sortable: true,
  },
  {
    id: "periodo",
    name: "Período",
    selector: (row: any) => row.periodo,
    sortable: true,
    width: "15%",
  },
  {
    id: "acoes",
    sortable: false,
    right: true,
    grow: 0,
    cell: (props: any) => (
      <div className="flex gap-2">
        <Excluir
          title="Excluir Curso"
          description="Tem certeza que deseja excluir esse curso?"
          onClick={() => deleteCurso(props.id)}
        />
        {/* <AddEditCurso editData={props} /> */}
      </div>
    ),
  },
];

const deleteCurso = async (id: number) => {
  await fetch(`http://localhost:8080/api/curso/excluir/${id}`, {
    method: "DELETE",
  }).then((response) => {
    console.log(response);
    window.location.reload();
  });
};
/*
const data = [
  {
    id: 1,
    nome: "Ciência da Computação",
    departamento: "Departamento de Ciência da Computação",
    periodo: "2022/2",
  },
  {
    id: 2,
    nome: "Sistemas de Informação",
    departamento: "Departamento de Ciência da Computação",
    periodo: "2022/2",
  },
];
*/

const Home: NextPage = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/curso/listar")
      .then((response) => response.json())
      .then((data) => {
        data.map((curso: any) => {
          curso.departamento = curso.departamento.nome;
        });
        setCursos(data);
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
          <h2 className="text-gray-700">Cursos</h2>
          <AddEditCurso />
        </div>

        <div className="mt-8 overflow-x-auto animate-fade-in-up text-gray-700">
          <DataTable
            columns={columns}
            data={cursos}
            pagination
            paginationComponentOptions={paginationComponentOptions}
            highlightOnHover
            pointerOnHover
            noDataComponent={
              <EmptyTable
                title="Não há cursos cadastrados :("
                description="Cadastre um curso no botão Cadastrar!"
                icon={HiFolderOpen}
              />
            }
          />
        </div>
      </div>
    </Template>
  );
};

export default Home;
