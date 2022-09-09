import type { NextPage } from "next";
import { useState } from "react";
import { HiOutlinePencilAlt, HiFolderOpen } from "react-icons/hi";
/* templates */
import { Meta } from "@templates/meta";
import { Template } from "@templates/template";
/* utils */
import { paginationComponentOptions } from "@utils/table";
/* components */
import DataTable from "react-data-table-component";
import CadastrarCurso from "@components/modal/cadastrar/curso";
import { EmptyTable } from "@components/empty/table";
import Excluir from "@components/modal/delete";

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
          onClick={() => (console.log("Excluiu curso!"))}
        />
        <button
          type="button"
          className="text-primary p-1 hover:bg-gray-50 rounded-full transition duration-200"
        >
          <HiOutlinePencilAlt size={18} />
        </button>
      </div>
    ),
  },
];

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

const Home: NextPage = () => {
  const [showCadastrar, setShowCadastrar] = useState(false);
  
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
      <div className="container py-16">
        <div className="flex justify-between items-center">
          <h2 className="text-gray-700">Cursos</h2>
          <CadastrarCurso
            show={showCadastrar}
            setShow={setShowCadastrar}
          />
        </div>

        <div className="mt-8 overflow-x-auto animate-fade-in-up text-gray-700">
          <DataTable
            columns={columns}
            data={data}
            pagination
            paginationComponentOptions={paginationComponentOptions}
            highlightOnHover
            pointerOnHover
            noDataComponent={<EmptyTable title="Não há cursos cadastrados :(" description="Cadastre um curso no botão Cadastrar!" icon={HiFolderOpen} />}
          />
        </div>
      </div>
    </Template>
  );
};

export default Home;
