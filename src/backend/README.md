<h1>Descrição e Documentação BackEnd</h1>

Seguindo o padrão de projeto MVC, a arquitetura do BackEnd está dividida pelos seguintes pacotes: Entities, Controllers, Services e Repositories. 
- O pacote Entities contém as definições das entidades, seu mapeamento Objeto-Relacional e persistência de objetos.
- O pacote Controllers define as interações entre as representações das views, responde às requisições recebidas e chama as services necessárias.
- O pacote Services implementa as funcionalidades das regras de negócio do sistema.
- O pacote Repositories segue o padrão de projeto Repository e implementa para cada entidade, a interface JpaRepository.

## Requisições
- Departamento /api/departamento:
    - POST     /cadastrar
    - GET      /listar/{id}
    - GET      /listar
    - DELETE   /excluir/{id}

- Professor    /api/professor:
    - POST     /cadastrar
    - GET      /listar/{id}
    - GET      /listar
    - DELETE   /excluir/{id}

- Curso        /api/curso:
    - POST     /cadastrar
    - GET      /listar/{id}
    - GET      /listar
    - DELETE   /excluir/{id}