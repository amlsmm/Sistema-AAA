import type { NextPage } from "next";
import { useState } from "react";
import { HiOutlinePencilAlt, HiOutlineBookOpen } from "react-icons/hi";
/* templates */
import { Meta } from "@templates/meta";
import { Template } from "@templates/template";
/* utils */
import { paginationComponentOptions } from "@utils/table";
/* components */
import DataTable from "react-data-table-component";
import CadastrarDisciplina from "@components/modal/form/disciplina";
import { EmptyTable } from "@components/empty/table";
import Excluir from "@components/modal/delete";

const columns = [
  {
    id: "codigo",
    name: "Código",
    selector: (row: any) => row.codigo,
    sortable: true,
    width: "10%",
  },
  {
    id: "nome",
    name: "Nome",
    selector: (row: any) => row.nome,
    sortable: true,
  },
  {
    id: "depto",
    name: "Departamento",
    selector: (row: any) => row.departamento,
    sortable: true,
  },
  {
    id: "professor",
    name: "Professor",
    selector: (row: any) => row.professor,
    sortable: true,
  },
  {
    id: "acoes",
    sortable: false,
    right: true,
    grow: 0,
    cell: () => (
      <div className="flex gap-2">
        <Excluir
          title="Excluir Disciplina"
          description="Tem certeza que deseja excluir esse disciplina?"
          onClick={() => (console.log("Excluiu Disciplina!"))}
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
    codigo: "GCC-218",
    nome: "Engenharia da Computação",
    departamento: "Departamento de Ciência da Computação",
    professor: "Antônio Maria",
    periodo: "2022/2",
  },
  {
    id: 2,
    codigo: "GCC-244",
    nome: "Práticas de Programação Orientada a Objetos",
    departamento: "Departamento de Ciência da Computação",
    professor: "Julio Cesar",
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
          <h2 className="text-gray-700">Disciplinas</h2>
          <CadastrarDisciplina
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
            noDataComponent={<EmptyTable title="Não há disciplinas cadastrados :(" description="Cadastre um disciplina no botão Cadastrar!" icon={HiOutlineBookOpen} />}
          />
        </div>
      </div>
    </Template>
  );
};

export default Home;
