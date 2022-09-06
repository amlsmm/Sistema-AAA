import { HiOutlineTrash, HiOutlinePencilAlt } from "react-icons/hi";
import type { NextPage } from "next";
import { Meta } from "../templates/meta";
import { Template } from "../templates/template";
import DataTable from "react-data-table-component";
import Button from "@components/elements/button";
import { useState } from "react";
import Modal from "@components/modal/modal";
import { Cadastrar } from "@utils/AppConfig";

const paginationComponentOptions = {
  rowsPerPageText: "Departamentos por página",
  rangeSeparatorText: "de",
  selectAllRowsItem: true,
  selectAllRowsItemText: "Todos",
};

const columns = [
  {
    id: "data",
    name: "Data Criação",
    selector: (row: any) => row.data,
    sortable: true,
  },
  {
    id: "nome",
    name: "Nome",
    selector: (row: any) => row.nome,
    sortable: true,
    width: "50%",
  },
  {
    id: "sigla",
    name: "Sigla",
    selector: (row: any) => row.sigla,
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
    data: "22/08/2015",
    nome: "Departamento de Ciência da Computação",
    sigla: "DCC",
  },
  {
    id: 2,
    data: "25/08/2015",
    nome: "Departamento de Ciências Exatas",
    sigla: "DCE",
  },
  {
    id: 3,
    data: "01/05/2017",
    nome: "Departamento de Engenharia",
    sigla: "DEG",
  },
];

const Home: NextPage = () => {
  const [openModal, setOpenModal] = useState(false);
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
          <h2 className="text-gray-700">Departamentos</h2>
          <Modal type="cadastrar" id="departamento" button="Cadastrar" />
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
