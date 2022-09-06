import { HiOutlineTrash, HiOutlinePencilAlt } from "react-icons/hi";
import type { NextPage } from "next";
import { Meta } from "../templates/meta";
import { Template } from "../templates/template";
import DataTable from "react-data-table-component";
import Button from "@components/elements/button";
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useEffect, useState } from "react";
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

const ListDepto = () => {

  const [departamento, setDepartamento] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch('api/departamento/listar')
      .then(response => response.json())
      .then(data => {
        setDepartamento(data);
        setLoading(false);
      })
  }, []);
}
const listDepto = departamento.map((departamento: { id: Key | null | undefined; nome: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; events: any[]; }) => {
  return <tr key={departamento.id}>
    <td style={{whiteSpace: 'nowrap'}}>{departamento.nome}</td>
    <td>{departamento.events.map((event: { id: Key | null | undefined; date: string | number | Date; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => {
      return <div key={event.id}>{new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
      }).format(new Date(event.date))}: {event.title}</div>
    })}</td>
    <td>
    </td>
  </tr>
});

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
        </div>
      </div>
    </Template>
  );
};

export default ListDepto;
