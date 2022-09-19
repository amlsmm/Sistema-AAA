import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { HiOutlinePencilAlt, HiOutlineBookOpen } from "react-icons/hi";
/* templates */
import { Meta } from "@templates/meta";
import { Template } from "@templates/template";
/* utils */
import { paginationComponentOptions } from "@utils/table";
/* components */
import DataTable from "react-data-table-component";
import { EmptyTable } from "@components/empty/table";
import { NavbarAlunoLinks } from "@utils/data";
import Navbar from "@components/navigation/navbar";
import Button from "@components/elements/button";
import Link from "next/link";

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
    selector: (row: any) => row.departamento.nome,
    sortable: true,
  },
  {
    id: "professor",
    name: "Professor",
    selector: (row: any) => row.professor.nome,
    sortable: true,
  },
];
/*
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
*/

const Home: NextPage = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [disciplinas, setDisciplinas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/disciplina/listar")
      .then((response) => response.json())
      .then((data) => {
        setDisciplinas(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);


  const handleChange = ({ selectedRows }: any) => {
    setSelectedRows(selectedRows);
    console.log(selectedRows);
  };

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
      <Navbar links={NavbarAlunoLinks} />
      <div className="container py-16">
        <h2 className="text-gray-700">Matrícula</h2>
        <p className="mt-2 text-sm text-gray-500">
          Selecione as diciplinas para cursar no semestre de 2022/2
        </p>

        <div className="mt-8 w-full flex lg:items-start gap-6 flex-col lg:flex-row">
          <div className="card-white overflow-x-auto animate-fade-in-up text-gray-700">
            <DataTable
              columns={columns}
              data={disciplinas}
              pagination
              paginationComponentOptions={paginationComponentOptions}
              highlightOnHover
              pointerOnHover
              selectableRows
              onSelectedRowsChange={handleChange}
              noDataComponent={
                <EmptyTable
                  title="Não há disciplinas cadastrados :("
                  description="Cadastre um disciplina no botão Cadastrar!"
                  icon={HiOutlineBookOpen}
                />
              }
            />
          </div>

          <div className="card-white flex flex-col w-full lg:w-1/3">
            <h4>Diciplinas</h4>
            {selectedRows.length == 1 && (
              <p>{selectedRows.length} selecionada</p>
            )}
            {selectedRows.length > 1 && (
              <p>{selectedRows.length} selecionadas</p>
            )}

            <div className="w-3/4 lg:w-full border-b border-gray-300 mt-4 mb-6"></div>

            {selectedRows.length > 0 ? (
              <ul>
                {selectedRows.map((row) => (
                  <li key={row.id}>{row?.codigo} - {row?.nome}</li>
                ))}
              </ul>
            ) : (
              <div>
                <p>Não há disciplinas selecionadas</p>
              </div>
            )}

            <div className="self-end mt-8">
              <Button variant="primary">
                <Link href="/aluno/matricula">
                  <a>Confirmar</a>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};

export default Home;
