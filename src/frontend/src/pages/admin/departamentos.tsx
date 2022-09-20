import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { HiOutlinePencilAlt, HiOfficeBuilding } from "react-icons/hi";
/* templates */
import { Meta } from "@templates/meta";
import { Template } from "@templates/template";
/* utils */
import { paginationComponentOptions } from "@utils/table";
/* components */
import DataTable from "react-data-table-component";
import CadastrarDepartamento from "@components/modal/form/departamento";
import { EmptyTable } from "@components/empty/table";
import Excluir from "@components/modal/delete";
import moment from "moment";
import Navbar from "@components/navigation/navbar";
import { NavbarAdminLinks } from "@utils/data";
import AddEditDepartamento from "@components/modal/form/departamento";

const columns = [
  {
    id: "data",
    name: "Data Criação",
    selector: (row: any) => {
      return moment(row.dataCriacao).format("DD-MM-YYYY");
    },
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
    cell: (props: any) => (
      <div className="flex gap-2">
        <Excluir
          title="Excluir Departamento"
          description="Tem certeza que deseja excluir esse departamento?"
          onClick={() => deleteDepto(props.id)}
        />
        {/* <AddEditDepartamento editData={props} /> */}
      </div>
    ),
  },
];
/*
const data = [
  {
    id: 1,
    data: "22/08/2015",
    nome: "Departamento de Ciência da Computação",
    sigla: "DCC",
  },
  ...
];
*/
const deleteDepto = async (id: number) => {
  await fetch(`http://localhost:8080/api/departamento/excluir/${id}`, {
    method: "DELETE",
  }).then((response) => {
    console.log(response);
    window.location.reload();
  });
};

const Home: NextPage = () => {
  const [deptos, setDeptos] = useState([]);

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
          <h2 className="text-gray-700">Departamentos</h2>
          <AddEditDepartamento />
        </div>

        <div className="mt-8 overflow-x-auto animate-fade-in-up text-gray-700">
          <DataTable
            columns={columns}
            data={deptos}
            pagination
            paginationComponentOptions={paginationComponentOptions}
            highlightOnHover
            pointerOnHover
            noDataComponent={
              <EmptyTable
                title="Não há departamentos cadastrados :("
                description="Cadastre um departamento no botão Cadastrar!"
                icon={HiOfficeBuilding}
              />
            }
          />
        </div>
      </div>
    </Template>
  );
};

export default Home;
