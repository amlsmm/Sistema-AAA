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

const Home: NextPage = () => {
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
        <h2 className="text-gray-700">Perfil</h2>

        <div className="mt-6 w-full flex flex-col lg:flex-row gap-6">
          <div className="card-white">
            <h4 className="font-semibold text-gray-700 text-center">
              Dados Pessoais
            </h4>
            <div className="mt-4 grid gap-3">
              <div>
                <p className="font-bold text-gray-700 text-sm">Nome:</p>
                <p>Nome Completo do Aluno</p>
              </div>
              <div>
                <p className="font-bold text-gray-700 text-sm">Email:</p>
                <p>nome.aluno@estudante.ufla.br</p>
              </div>
            </div>
          </div>
          <div className="card-white">
            <h4 className="font-semibold text-gray-700 text-center">
              Dados de Aluno
            </h4>
            <div className="mt-4 grid gap-3">
              <div>
                <p className="font-bold text-gray-700 text-sm">Matrícula:</p>
                <p>2022123456</p>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div>
                  <p className="font-bold text-gray-700 text-sm">Curso:</p>
                  <p>Ciência da Computação</p>
                </div>
                <div>
                  <p className="font-bold text-gray-700 text-sm">Período:</p>
                  <p>6º</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};

export default Home;
