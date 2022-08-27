CREATE TABLE SISTEMA_AAA.disciplina (
    id INTEGER NOT NULL AUTO_INCREMENT,
    id_departamento INTEGER NOT NULL,
    id_professor INTEGER NOT NULL,
    codigo VARCHAR(6),
    nome VARCHAR(100),
    
    CONSTRAINT pk_disciplina PRIMARY KEY (id),
    FOREIGN KEY (id_departamento) REFERENCES departamento(id),
    FOREIGN KEY (id_professor) REFERENCES professor(id)
);