<h1 align="center">PROJETO FINAL</h1>
<p align="center">
  Projeto final da disciplina de Engenharia de Software GCC-218, cursada no período 2022/1.
</p>

---
## Sumário

- [Descrição](#descrição)
- [Tecnologias e Versões](#tecnologias-e-versões)
- [Regras de Uso do Git](#regras-de-uso-do-git)

---
## Descrição

- O software desenvolvido é um sistema de gerenciamento escolas, utilizado por coordenadores e alunos de uma instituição de ensino. A finalidade principal do sistema será gerenciar as disciplinas lecionadas por professores,
  que disponibilizarão matrículas para os alunos, de acordo com seus cursos. Assim, o sistema é composto pelas entidades: Departamento, Professor, Aluno, Disciplina, Curso e Coordenador.
- Desse modo, cada Departamento irá disponibilizar disciplinas escolhidas para um professor. Um aluno, que pertence a um curso, poderá se cadastrar nas disciplinas dos departamentos relacionados com seu curso. Com isso,
  o coordenador poderá acessar o sistema para: gerenciar professores, destacar professores para disciplinas e gerenciar departamentos. E o aluno poderá acessar o sistema para: se cadastrar em uma disciplina e acessar seus dados pessoais.

---
## Tecnologias e Versões

### Front End:

![React](https://img.shields.io/badge/react-v18.2.0-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Next JS](https://img.shields.io/badge/Next-v12.2.5-%2320232a.svg?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-v4.7.4-%2320232a.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-v3.1.8-%2320232a.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Back End:

![Spring](https://img.shields.io/badge/spring-v2.7.0-%2320232a.svg?style=for-the-badge&logo=spring&logoColor=white)

### Data Base:

![MySQL](https://img.shields.io/badge/mysql-v8.0.0-%2320232a.svg?style=for-the-badge&logo=mysql&logoColor=white)

---
## Regras de Uso do Git

### 1. Commit:

Descrever o que foi feito indicando a ação.
Ex.: Criar tela de login.

### 2. Branches:

main, backend e frontend

### 3. Boas Práticas:

- Aplicar Clean Code
- Nomes significativos
- Notação: camelCase
- Comentários: não comentar
- Identar código
- Testar sempre os programas

### 4. Organização do Projeto:

```
└─ documentos
  ├─ diagrama de classe
  ├─ diagrama de implantação
  ├─ diagrama de sequência
  ├─ padrões adotados
  └─ requisitos
└─ src
  ├─ backend
  └─ frontend
```

## Regras, padrões e boa práticas de desenvolvimento

### 1. SOLID
Como está sendo utilizado o paradigm Orientado a Objetos para o desenvolvimento desta aplicação deve-se buscar seguir os princípios do SOLID que resumidamente determinam:
 - SRP - Princípio da Responsabilidade Única. Uma classe deve ter apenas uma única responsabilidade.
 - OCP - Princípio do Aberto/Fechado. Entidade de software devem ser abertas para expansões, mas fechadas para modificações. Ex:para cada nova função que não pertence ao funcionamento original, outro método deve ser chamado, e não modificar o funcionamento atual do meu método ou classe; 
 - LSP - Princípio da Substituição de Liskov. As superclasses devem permitem substituição pelas subclasses.
 - ISP - Princípio da Segregação de Interfaces. Muitas interfaces de clientes específicas, são melhores do que uma geral.
 - DIP - Princípio da inversão de dependência . Dependa de abstrações e não de implementações

### 2. Tamanho
Quanto menor melhor, isso vale para tudo, nomes, tamanho de métodos, quantidade de ifs, e a fins. A exceção dessa regra é a performance, algumas vezes é necessário abrir mão do tamanho reduzido de código para ter uma melhor performance, lembrando sempre que é uma exceção e mesmo nesses casos é obrigatório tentar manter tudo o menor possível.

### 3.Comentários
Comentários são úteis para ajudar a compreender o código, mas se é preciso explicar o código, é porque ele não está legível o suficiente. Assim, os comentários devem ser utilizados para facilitar em momentos como quando temos vários blocos de código na mesma classe, colocar um comentário dizendo onde começa determinado bloco pode facilitar na navegação do mesmo.

### 4. Indentação
É extremamente importante manter a indentação do código em dia, além de facilitar a leitura, serve para identificar onde começa e onde termina qualquer bloco de código, seja um método ou uma parametrização.

### 5. Nomes
Os nomes devem ser precisos e sucintos, descrevendo com poucas letras ou palavras o que está fazendo ou significa.
- Nome de variáveis:
  - Começar sempre com letra minúscula;
  - Não atribuir nome de ações a variáveis;

- Nome de métodos:
  - Começar sempre com letra minúscula;
  - Tratar métodos como ações.

- Nome de classes e interfaces:
  - Começar sempre com letra maiúscula;
  - Tratar as classes como objetos, não atribuir nome de ações a classes ou interfaces.

### 6. Boas práticas para o FrontEnd
  - Notificar todas respostas das ações na tela. Ex: se foi um sucesso, se houve uma falha e qual o motivo da falha;
  - Exibir uma confirmação para todas as ações (a não ser que seja especificado que não deve haver confirmação);
  - Trocar a cor de textos de alerta de erro para vermelho, ou alguma cor que destaque um erro;