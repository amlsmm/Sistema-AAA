import { HiOutlineBookOpen, HiOutlineBriefcase, HiOutlineFolderOpen, HiOutlineOfficeBuilding, HiOutlineUserGroup } from "react-icons/hi";

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
    id: "departamentos",
    title: "Departamentos",
    icon: HiOutlineOfficeBuilding,
    href: "/departamentos",
  },
  {
    id: "cursos",
    title: "Cursos",
    icon: HiOutlineFolderOpen,
    href: "/cursos",
  },
  {
    id: "disciplinas",
    title: "Disciplinas",
    icon: HiOutlineBookOpen,
    href: "/disciplinas",
  },
  {
    id: "professores",
    title: "Professores",
    icon: HiOutlineBriefcase,
    href: "/professores",
  },
  {
    id: "alunos",
    title: "Alunos",
    icon: HiOutlineUserGroup,
    href: "/alunos",
  },
];