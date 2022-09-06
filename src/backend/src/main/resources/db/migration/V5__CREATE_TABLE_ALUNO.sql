CREATE TABLE SISTEMA_AAA.aluno (
    id INTEGER NOT NULL AUTO_INCREMENT,
    id_curso INTEGER NOT NULL,
    nome VARCHAR(100),
    email VARCHAR(60),
    matricula INTEGER,
    
    CONSTRAINT pk_aluno PRIMARY KEY (id),
    FOREIGN KEY (id_curso) REFERENCES curso(id)
);