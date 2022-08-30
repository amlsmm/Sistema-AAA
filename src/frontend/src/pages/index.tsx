import type { NextPage } from "next";
import { Meta } from "../templates/meta";
import { Template } from "../templates/template";

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
        <h1 className="text-gray-700 text-center">Seja Bem Vindo!</h1>
      </div>
    </Template>
  );
};

export default Home;
