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
    selector: (row: any) => row.departamento,
    sortable: true,
  },
  {
    id: "professor",
    name: "Professor",
    selector: (row: any) => row.professor,
    sortable: true,
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
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-gray-700">Ciência da Computação</h2>
            <p className="mt-2 text-sm text-gray-500">
              Disciplinas do curso de Ciência da Computação
            </p>
          </div>
          <Button variant="primary">
            <Link href="/aluno/matricula">
              <a>Matricula</a>
            </Link>
          </Button>
        </div>

        <div className="mt-8 overflow-x-auto animate-fade-in-up text-gray-700">
          <DataTable
            columns={columns}
            data={data}
            pagination
            paginationComponentOptions={paginationComponentOptions}
            highlightOnHover
            pointerOnHover
            noDataComponent={
              <EmptyTable
                title="Não há disciplinas cadastrados :("
                description="Cadastre um disciplina no botão Cadastrar!"
                icon={HiOutlineBookOpen}
              />
            }
          />
        </div>
      </div>
    </Template>
  );
};

export default Home;
