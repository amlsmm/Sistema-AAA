import Card from "@components/cards/card";
import Button from "@components/elements/button";
import Navbar from "@components/navigation/navbar";
import { NavbarAlunoLinks } from "@utils/data";
import type { NextPage } from "next";
import Link from "next/link";
import DataTable from "react-data-table-component";
import { HiOutlineBookOpen, HiOutlineUserGroup } from "react-icons/hi";
import { Meta } from "../../templates/meta";
import { Template } from "../../templates/template";
/* utils */
import { paginationComponentOptions } from "@utils/table";
import { EmptyTable } from "@components/empty/table";
import { useEffect, useState } from "react";

const columns = [
  {
    id: "codigo",
    name: "Código",
    selector: (row: any) => row.codigo,
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
    id: "professor",
    name: "Professor",
    selector: (row: any) => row.professor.nome,
    sortable: true,
  },
];

const data = [
  {
    id: 1,
    codigo: "GCC-218",
    nome: "Engenharia de Software",
    professor: "Antonio Maria",
  },
];

const Home: NextPage = () => {
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

  return (
    <Template
      meta={
        <Meta
          title="Sistema Escolar"
          description="Acompanhe suas disciplinas"
          image="/img/banner/logo.png"
          imageAlt="Sistema Escolar"
        />
      }
    >
      <Navbar links={NavbarAlunoLinks} />
      <div className="container py-16">
        <h1 className="text-gray-700 text-center">Seja Bem Vindo!</h1>
        <div className="w-full mt-12 flex items-start gap-6">
          <div className="card-white pb-8">
            <div className="flex justify-between items-center">
              <h2 className="text-gray-700 font-semibold text-base lg:text-lg">
                Período 2022/2
              </h2>
              <Button variant="primary">
                <Link href="/aluno/matricula">
                  <a>Matricula</a>
                </Link>
              </Button>
            </div>
            <br />
            <DataTable
              columns={columns}
              data={disciplinas}
              pagination
              paginationComponentOptions={paginationComponentOptions}
              highlightOnHover
              pointerOnHover
              noDataComponent={
                <EmptyTable
                  title="Não há disciplinas nesse período :("
                  description="Consulte os horários para matricular nas suas disciplinas!"
                  icon={HiOutlineBookOpen}
                />
              }
            />
          </div>
          {/*  */}
          <div className="w-1/3 flex flex-col gap-6">
            <div className="card-white flex flex-col items-center justify-center">
              <div className="bg-gray-200 rounded-full p-4 text-primary">
                <HiOutlineUserGroup size={24} />
              </div>
              <p className="mt-6 text-xl font-semibold text-gray-900">
                Nome do Aluno
              </p>
              <p className="text-gray-600 text-sm">
                nome.aluno@estudante.ufla.br
              </p>
              <br />
              <Button variant="outline">
                <Link href="/aluno/perfil">
                  <a>Perfil</a>
                </Link>
              </Button>
            </div>
            <Card
              id="aluno-disciplinas"
              title="Disciplinas"
              icon={HiOutlineBookOpen}
              href="/aluno/disciplinas"
            />
          </div>
        </div>
      </div>
    </Template>
  );
};

export default Home;
