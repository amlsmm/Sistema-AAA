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
        <h2 className="text-gray-700">Cursos</h2>
      </div>
    </Template>
  );
};

export default Home;
