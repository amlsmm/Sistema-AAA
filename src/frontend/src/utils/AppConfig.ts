import {
  HiOutlineBookOpen,
  HiOutlineBriefcase,
  HiOutlineFolderOpen,
  HiOutlineOfficeBuilding,
  HiOutlineUserGroup,
} from "react-icons/hi";

export const AppConfig = {
  site_name: "Sistema Escolar",
  title: "Sistema Escolar",
  type: "website",
  description: "Administre suas funcionalidades",
  locale: "pt-br",
  url_site: "https://www.sistemaescolar.com",
};

export const NavbarLinks = [
  {
    id: "home",
    title: "Dashboard",
    href: "/",
  },
  {
    id: "departamentos",
    title: "Departamentos",
    href: "/departamentos",
  },
  {
    id: "cursos",
    title: "Cursos",
    href: "/cursos",
  },
  {
    id: "disciplinas",
    title: "Disciplinas",
    href: "/disciplinas",
  },
  {
    id: "professores",
    title: "Professores",
    href: "/professores",
  },
  {
    id: "alunos",
    title: "Alunos",
    href: "/alunos",
  },
];

export const Cards = [
  {
    id: "departamento",
    title: "Departamentos",
    icon: HiOutlineOfficeBuilding,
    href: "/departamentos",
  },
  {
    id: "curso",
    title: "Cursos",
    icon: HiOutlineFolderOpen,
    href: "/cursos",
  },
  {
    id: "disciplina",
    title: "Disciplinas",
    icon: HiOutlineBookOpen,
    href: "/disciplinas",
  },
  {
    id: "professor",
    title: "Professores",
    icon: HiOutlineBriefcase,
    href: "/professores",
  },
  {
    id: "aluno",
    title: "Alunos",
    icon: HiOutlineUserGroup,
    href: "/alunos",
  },
];

export const Cadastrar = [
  {
    id: "departamento",
    title: "Cadastrar Departamento",
    form: [
      {
        form: "input",
        id: "nome",
        label: "Nome:",
        type: "text",
        placeholder: "Digite o nome",
      },
      {
        form: "input",
        id: "sigla",
        label: "Sigla:",
        type: "text",
        placeholder: "Digite a sigla",
      },
    ],
  },
  {
    id: "curso",
    title: "Cadastrar Curso",
    form: [
      {
        form: "input",
        id: "nome",
        label: "Nome:",
        type: "text",
        placeholder: "Digite o nome",
      },
    ],
  },
  {
    id: "disciplina",
    title: "Cadastrar Disciplina",
    form: [
      {
        form: "input",
        id: "nome",
        label: "Nome:",
        type: "text",
        placeholder: "Digite o nome",
      },
    ],
  },
  {
    id: "professor",
    title: "Cadastrar Professor",
    form: [
      {
        form: "input",
        id: "nome",
        label: "Nome:",
        type: "text",
        placeholder: "Digite o nome",
      },
    ],
  },
  {
    id: "aluno",
    title: "Cadastrar Aluno",
    form: [
      {
        form: "input",
        id: "nome",
        label: "Nome:",
        type: "text",
        placeholder: "Digite o nome",
      },
    ],
  },
];
