import Card from "@components/cards/card";
import { Cards } from "@utils/data";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
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
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {Cards.map((card) => (
            <Card id={card.id} title={card.title} icon={card.icon} href={card.href} />
          ))}
        </div>
      </div>
    </Template>
  );
};

export default Home;
