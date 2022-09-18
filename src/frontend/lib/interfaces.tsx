export interface IRetornoApi {
    erro: boolean;
    mensagem: string;
    totalDeRegistros: number;
    unico?: any,
    lista?: any,
  }
  
  export interface IRetornoApiLogin {
    erro: boolean;
    mensagem: string;
    unico?: any,
  }

export interface IAluno {
    nome: string,
    email: string;
    matricula: number;
    curso: string;
}

export interface ICurso {
    nome: string,
    departamento: string;
    periodo: string;
}

export interface IDepartamento {
    nome: string,
    sigla: string;
}

export interface IDisciplina {
    nome: string,
    codigo: string;
    departamento: number;
    professor: string;
}

export interface IProfessor {
    nome: string,
    dataNasc: string;
    departamento: number;
    salario: string;
}