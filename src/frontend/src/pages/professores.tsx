import { HiOutlineTrash, HiOutlinePencilAlt } from "react-icons/hi";
import type { NextPage } from "next";
import { Meta } from "../templates/meta";
import { Template } from "../templates/template";
import DataTable from "react-data-table-component";
import Button from "@components/elements/button";

const paginationComponentOptions = {
  rowsPerPageText: "Departamentos por página",
  rangeSeparatorText: "de",
  selectAllRowsItem: true,
  selectAllRowsItemText: "Todos",
};

const columns = [
  {
    id: "nome",
    name: "Nome",
    selector: (row: any) => row.nome,
    sortable: true,
  },
  {
    id: "nasc",
    name: "Data Nasc.",
    selector: (row: any) => row.nasc,
    sortable: true,
  },
  {
    id: "depto",
    name: "Departamento",
    selector: (row: any) => row.departamento,
    sortable: true,
    grow: 2,
  },
  {
    id: "salario",
    name: "Salário",
    selector: (row: any) => row.salario,
    sortable: true,
  },
  {
    id: "acoes",
    sortable: false,
    right: true,
    grow: 0,
    cell: () => (
      <div className="flex gap-2">
        <button
          type="button"
          className="text-danger p-1 hover:bg-gray-50 rounded-full transition duration-200"
        >
          <HiOutlineTrash size={18} />
        </button>
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
    nome: "José Maria Silva",
    nasc: "13/11/1960",
    departamento: "Departamento de Ciência da Computação",
    salario: "R$ 18.000,00",
  },
  {
    id: 2,
    nome: "Maria José Costa",
    nasc: "29/01/1961",
    departamento: "Departamento de Ciência da Computação",
    salario: "R$ 20.000,00",
  },
];

const Home: NextPage = () => {
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
          <h2 className="text-gray-700">Professores</h2>
          <Button variant="primary">Cadastrar</Button>
        </div>

        <div className="mt-8 overflow-x-auto animate-fade-in-up text-gray-700">
          <DataTable
            columns={columns}
            data={data}
            pagination
            paginationComponentOptions={paginationComponentOptions}
            highlightOnHover
            pointerOnHover
          />
        </div>
      </div>
    </Template>
  );
};

export default Home;
