import {
    HiOutlineBookOpen,
    HiOutlineBriefcase,
    HiOutlineFolderOpen,
    HiOutlineOfficeBuilding,
    HiOutlineUserGroup,
  } from "react-icons/hi";
    
  export const NavbarAdminLinks = [
    {
      id: "home",
      title: "Dashboard",
      href: "/admin",
    },
    {
      id: "departamentos",
      title: "Departamentos",
      href: "/admin/departamentos",
    },
    {
      id: "cursos",
      title: "Cursos",
      href: "/admin/cursos",
    },
    {
      id: "disciplinas",
      title: "Disciplinas",
      href: "/admin/disciplinas",
    },
    {
      id: "professores",
      title: "Professores",
      href: "/admin/professores",
    },
    {
      id: "alunos",
      title: "Alunos",
      href: "/admin/alunos",
    },
  ];

  export const NavbarAlunoLinks = [
    {
      id: "home",
      title: "Dashboard",
      href: "/aluno",
    },
    {
      id: "disciplinas",
      title: "Disciplinas",
      href: "/aluno/disciplinas",
    },
  ];
  
  export const Cards = [
    {
      id: "departamento",
      title: "Departamentos",
      icon: HiOutlineOfficeBuilding,
      href: "/admin/departamentos",
    },
    {
      id: "curso",
      title: "Cursos",
      icon: HiOutlineFolderOpen,
      href: "/admin/cursos",
    },
    {
      id: "disciplina",
      title: "Disciplinas",
      icon: HiOutlineBookOpen,
      href: "/admin/disciplinas",
    },
    {
      id: "professor",
      title: "Professores",
      icon: HiOutlineBriefcase,
      href: "/admin/professores",
    },
    {
      id: "aluno",
      title: "Alunos",
      icon: HiOutlineUserGroup,
      href: "/admin/alunos",
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
  