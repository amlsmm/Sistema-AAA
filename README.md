# Projeto_Final_GCC188
    Este repositório tem como finalidade manter o projeto final da disciplina de Engenharia de Software GCC-188, cursada no período 2022/1.

# Descrição 
-   O software desenvolvido é um sistema de gerenciamento escolas, utilizado por coordenadores e alunos de uma  instituição de ensino. A finalidade principal do sistema será gerenciar as disciplinas lecionadas por professores,
que disponibilizarão matrículas para os alunos, de acordo com seus cursos. Assim, o sistema é composto pelas entidades: Departamento, Professor, Aluno, Disciplina, Curso e Coordenador.
-   Desse modo, cada Departamento irá disponibilizar disciplinas escolhidas para um professor. Um aluno, que pertence a um curso, poderá se cadastrar nas disciplinas dos departamentos relacionados com seu curso. Com isso,
o coordenador poderá acessar o sistema para: gerenciar professores, destacar professores para disciplinas e gerenciar departamentos. E o aluno poderá acessar o sistema para: se cadastrar em uma disciplina e acessar seus dados pessoais.

## Definição de tecnologias e versões

- Front End - React 17.0.0
- Back End  - Spring Boot 2.7.0
- DataBase  - MySQL 8.0

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
