CREATE TABLE SISTEMA_AAA.matricula (
    id INTEGER NOT NULL AUTO_INCREMENT,
    id_disciplina INTEGER NOT NULL,
    id_aluno INTEGER NOT NULL,
    
    CONSTRAINT pk_matricula PRIMARY KEY (id),
    FOREIGN KEY (id_disciplina) REFERENCES disciplina(id),
    FOREIGN KEY (id_aluno) REFERENCES aluno(id)
);