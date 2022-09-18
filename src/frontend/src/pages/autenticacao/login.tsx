import React, { FormEvent, useState } from "react";

import Input from "@components/form/input";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import { Meta } from "@templates/meta";
import Button from "@components/elements/button";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    // signIn("credentials", { email, password });
    router.push("/");
  };

  const { data: session } = useSession();

  // Ao renderizar o lado do cliente, não exibe nada até que o carregamento seja concluído
  /* if (typeof window !== "undefined") return null; */

  // Se não houver sessão, exibir a tela de Login
  /* if (session) {
    return router.push("/"), [router], (<p>Redirecionando...</p>);
  } */

  return (
    <>
      <Meta title="Login" description="Login | Sistemas Escolar" />
      <div className="h-screen bg-gradient-to-tr from-primary to-primary-light">
        <div className="absolute w-full -top-12 -right-12 text-right text-white opacity-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="0.5"
            stroke="currentColor"
            width="50%"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
            />
          </svg>
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative w-full max-w-lg bg-white rounded-2xl px-4 py-8 md:px-8 md:py-12 overflow-hidden">
            <div className="mb-6 text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-8 h-8"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.664 1.319a.75.75 0 01.672 0 41.059 41.059 0 018.198 5.424.75.75 0 01-.254 1.285 31.372 31.372 0 00-7.86 3.83.75.75 0 01-.84 0 31.508 31.508 0 00-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 013.305-2.033.75.75 0 00-.714-1.319 37 37 0 00-3.446 2.12A2.216 2.216 0 006 9.393v.38a31.293 31.293 0 00-4.28-1.746.75.75 0 01-.254-1.285 41.059 41.059 0 018.198-5.424zM6 11.459a29.848 29.848 0 00-2.455-1.158 41.029 41.029 0 00-.39 3.114.75.75 0 00.419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 101.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 013.095 2.348.75.75 0 00.992 0 26.547 26.547 0 015.93-3.95.75.75 0 00.42-.739 41.053 41.053 0 00-.39-3.114 29.925 29.925 0 00-5.199 2.801 2.25 2.25 0 01-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 01-1.084 3.45 26.503 26.503 0 00-1.281-.78A5.487 5.487 0 006 12v-.54z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h3 className="relative z-0 mb-8 text-gray-700 font-bold text-3xl lg:text-4xl">
              Login
            </h3>
            <form
              className="relative z-0 flex flex-col space-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                label="E-mail:"
                id="email"
                type="email"
                errors={errors.email?.message}
                {...register("email", {
                  required: "Obrigatório",
                })}
                required
              />

              <Input
                label="Senha:"
                id="password"
                type="password"
                errors={errors.password?.message}
                {...register("password", {
                  required: "Obrigatório",
                })}
                required
              />
              <div className="mt-4 self-end">
                <Button type="submit" variant="primary">
                  Entrar
                </Button>
              </div>
            </form>
          </div>

          <div className="links"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
